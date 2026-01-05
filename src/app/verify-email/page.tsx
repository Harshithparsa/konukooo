'use client';

import { useAuth, useUser } from '@/firebase';
import { Button } from '@/components/ui/button';
import { MailCheck } from 'lucide-react';
import { sendVerificationEmail } from '@/firebase/non-blocking-login';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { signOut } from 'firebase/auth';

export default function VerifyEmailPage() {
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    // If user is loaded and is verified, redirect them away
    if (!isUserLoading && user?.emailVerified) {
      router.push('/products');
    }
  }, [user, isUserLoading, router]);

  const handleResendEmail = () => {
    if (user) {
      sendVerificationEmail(user);
      toast({
        title: 'Verification Email Sent',
        description: 'A new verification link has been sent to your email address.',
      });
    }
  };

  const handleGoToLogin = () => {
    signOut(auth).then(() => {
      router.push('/login');
    });
  };

  return (
    <div className="container mx-auto text-center py-20 flex flex-col items-center">
      <MailCheck className="h-24 w-24 text-primary" />
      <h1 className="mt-6 text-3xl md:text-4xl font-bold font-headline">Verify Your Email</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        A verification link has been sent to your email address.
      </p>
      <p className="mt-1 text-muted-foreground">
        Please click the link in the email to activate your account.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Button onClick={handleResendEmail}>Resend Verification Email</Button>
        <Button onClick={handleGoToLogin} variant="secondary">
          Go to Login
        </Button>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        Already verified? Refresh the page or try logging in again.
      </p>
    </div>
  );
}
