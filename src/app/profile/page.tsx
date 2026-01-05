'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useFirestore, useUser, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
import { setDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { useToast } from '@/hooks/use-toast';
import { useDoc } from '@/firebase/firestore/use-doc';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const profileFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  gender: z.enum(['male', 'female']).optional(),
  mobileNumber: z.string().optional(),
});

type UserProfile = {
  firstName: string;
  lastName: string;
  email: string;
  gender?: 'male' | 'female';
  mobileNumber?: string;
};

export default function ProfilePage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();

  const userDocRef = useMemoFirebase(
    () => (firestore && user ? doc(firestore, 'users', user.uid) : null),
    [firestore, user]
  );

  const { data: userProfile, isLoading: isProfileLoading } = useDoc<UserProfile>(userDocRef);

  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);

  const form = useForm<z.infer<typeof profileFormSchema>>({
      resolver: zodResolver(profileFormSchema),
      values: {
          firstName: userProfile?.firstName || user?.displayName?.split(' ')[0] || '',
          lastName: userProfile?.lastName || user?.displayName?.split(' ').slice(1).join(' ') || '',
          gender: userProfile?.gender,
          mobileNumber: userProfile?.mobileNumber || '',
      },
      // Re-initialize form when userProfile loads
      ...(userProfile && { reValidateMode: 'onChange' })
  });

  const onSubmit = (values: z.infer<typeof profileFormSchema>) => {
      if (!userDocRef) return;
      
      setDocumentNonBlocking(userDocRef, { 
        ...values,
      }, { merge: true });
  
      toast({
        title: 'Profile Saved',
        description: 'Your profile has been successfully updated.',
      });
      setIsEditing(false);
  };


  if (isUserLoading || isProfileLoading) {
    return <div><p>Loading profile...</p></div>;
  }

  if (!user) {
    return <div><p>Please log in to view your profile.</p></div>;
  }

  return (
    <Card>
        <CardContent className="p-6 md:p-8">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">Personal Information</h2>
                        {!isEditing ? (
                            <Button variant="link" className="text-primary" onClick={() => setIsEditing(true)}>Edit</Button>
                        ) : (
                            <Button type="submit" size="sm">Save</Button>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                                <Input {...field} readOnly={!isEditing} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                                <Input {...field} readOnly={!isEditing} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    
                    <div>
                        <FormLabel>Your Gender</FormLabel>
                        <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex items-center gap-8 mt-2"
                                disabled={!isEditing}
                            >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="male" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Male</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="female" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Female</FormLabel>
                                </FormItem>
                            </RadioGroup>
                        )}
                        />
                    </div>

                    <Separator />

                    <div>
                        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                        <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                                <Input readOnly disabled value={user.email || ''} />
                            </FormControl>
                        </FormItem>
                        <FormField
                        control={form.control}
                        name="mobileNumber"
                        render={({ field }) => (
                            <FormItem className="mt-6">
                            <FormLabel>Mobile Number</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="+91" readOnly={!isEditing} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>

                </form>
            </Form>
        </CardContent>
    </Card>
  );
}
