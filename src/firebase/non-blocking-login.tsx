'use client';
import {
  Auth, // Import Auth type for type hinting
  signInAnonymously,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
  sendEmailVerification,
  User,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { getSdks } from '.';
import { toast } from '@/hooks/use-toast';

function showAuthError(error: any, context: 'login' | 'signup') {
  let description = 'An unknown error occurred. Please try again.';
  if (error.code) {
    switch (error.code) {
      case 'auth/user-not-found':
      case 'auth/wrong-password':
      case 'auth/invalid-credential':
        description = 'Invalid email or password. Please try again.';
        break;
      case 'auth/too-many-requests':
        description =
          'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.';
        break;
      case 'auth/email-already-in-use':
        description =
          'An account with this email already exists. Please log in.';
        break;
      default:
        description = `Could not ${
          context === 'login' ? 'sign in' : 'sign up'
        }. Please check your credentials.`;
        break;
    }
  }
  toast({
    variant: 'destructive',
    title: `${context === 'login' ? 'Login' : 'Registration'} Failed`,
    description: description,
  });
}

/** Initiate anonymous sign-in (non-blocking). */
export function initiateAnonymousSignIn(authInstance: Auth): void {
  signInAnonymously(authInstance).catch((e) => showAuthError(e, 'login'));
}

/** Sends an email verification to the user. */
export function sendVerificationEmail(user: User): Promise<void> {
    return sendEmailVerification(user).catch((error) => {
        console.error("Error sending verification email:", error);
        toast({
            variant: "destructive",
            title: "Error",
            description: "Could not send verification email. Please try again later.",
        });
        // Re-throw to allow the calling function to handle it if needed
        throw error;
    });
}


/** Initiate email/password sign-up (non-blocking). */
export async function initiateEmailSignUp(
  authInstance: Auth,
  email: string,
  password: string,
  firstName: string,
  lastName: string
): Promise<void> {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    const user = userCredential.user;

    // Send verification email
    await sendVerificationEmail(user);
    toast({
        title: "Verification Email Sent",
        description: "Please check your inbox to verify your email address.",
    });

    // Save user profile to Firestore
    const { firestore } = getSdks(authInstance.app);
    const userDocRef = doc(firestore, 'users', user.uid);
    // This is non-blocking but we can still handle permission errors
    setDoc(
      userDocRef,
      {
        id: user.uid,
        email: user.email,
        firstName,
        lastName,
      },
      { merge: true }
    ).catch(err => {
        // Even if saving profile fails, user is created. 
        // Let's log it, but the user can still proceed to verify email.
        console.error("Error saving user profile to Firestore:", err);
    });
  } catch (error) {
    showAuthError(error, 'signup');
    throw error; // re-throw to be caught by the calling function
  }
}

/** Initiate email/password sign-in (non-blocking). */
export function initiateEmailSignIn(
  authInstance: Auth,
  email: string,
  password: string
): void {
  signInWithEmailAndPassword(authInstance, email, password).catch((e) =>
    showAuthError(e, 'login')
  );
}

/** Initiate Google sign-in (non-blocking). */
export function initiateGoogleSignIn(authInstance: Auth): void {
  const provider = new GoogleAuthProvider();
  signInWithPopup(authInstance, provider)
    .then((userCredential: UserCredential) => {
      const user = userCredential.user;
      const { firestore } = getSdks(authInstance.app);
      const userDocRef = doc(firestore, 'users', user.uid);

      const displayName = user.displayName || ' ';
      const [firstName, ...lastNameParts] = displayName.split(' ');
      const lastName = lastNameParts.join(' ');

      // Non-blockingly set the user document
      setDoc(
        userDocRef,
        {
          id: user.uid,
          email: user.email,
          firstName: firstName,
          lastName: lastName,
        },
        { merge: true }
      ).catch(err => {
          console.error("Error saving Google user profile to Firestore:", err);
      });
    })
    .catch((e) => showAuthError(e, 'login'));
}
