'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useFirestore, useUser, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
import { useDoc } from '@/firebase/firestore/use-doc';
import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChevronRight, ShoppingBag, User as UserIcon, CreditCard, Gift, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

type UserProfile = {
  firstName: string;
  lastName: string;
  email: string;
};

function Sidebar() {
    const { user } = useUser();
    const firestore = useFirestore();
    const pathname = usePathname();

    const userDocRef = useMemoFirebase(
        () => (firestore && user ? doc(firestore, 'users', user.uid) : null),
        [firestore, user]
    );

    const { data: userProfile } = useDoc<UserProfile>(userDocRef);

    const getAvatarFallback = () => {
        if (userProfile?.firstName) return userProfile.firstName.charAt(0).toUpperCase();
        if (user?.email) return user.email.charAt(0).toUpperCase();
        return 'U';
    }

    const accountLinks = useMemo(() => [
      { href: '/profile', label: 'Profile Information' },
      { href: '/profile/addresses', label: 'Manage Addresses' },
      { href: '/profile/pan', label: 'PAN Card Information' },
    ], []);

    const paymentLinks = useMemo(() => [
      { href: '/profile/gift-cards', label: 'Gift Cards' },
      { href: '/profile/upi', label: 'Saved UPI' },
      { href: '/profile/cards', label: 'Saved Cards' },
    ], []);

    if (!user) {
        return null; // Or a loading skeleton
    }

    return (
        <div className="space-y-4">
            <Card>
                <CardHeader className="flex flex-row items-center gap-4 p-4">
                    <Avatar className="h-12 w-12">
                        <AvatarImage src={user?.photoURL || undefined} />
                        <AvatarFallback>{getAvatarFallback()}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm text-muted-foreground">Hello,</p>
                        <p className="font-bold text-foreground">
                            {userProfile?.firstName && userProfile?.lastName
                                ? `${userProfile.firstName} ${userProfile.lastName}`
                                : user.email}
                        </p>
                    </div>
                </CardHeader>
            </Card>

            <Card>
                <CardContent className="p-2">
                    <Link href="/orders" className="flex items-center justify-between p-3 hover:bg-muted rounded-md transition-colors">
                        <div className="flex items-center gap-4">
                            <ShoppingBag className="h-5 w-5 text-primary" />
                            <span className="font-medium text-foreground">MY ORDERS</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </Link>
                    <Separator />
                    <div className="p-3">
                         <div className="flex items-center gap-4">
                            <UserIcon className="h-5 w-5 text-primary" />
                            <span className="font-medium text-muted-foreground">ACCOUNT SETTINGS</span>
                        </div>
                        <div className="flex flex-col items-start mt-4 ml-9 space-y-3 text-sm">
                           {accountLinks.map(link => (
                               <Link key={link.href} href={link.href} className={cn("hover:text-primary transition-colors", pathname === link.href ? 'text-primary font-semibold' : 'text-foreground')}>{link.label}</Link>
                           ))}
                        </div>
                    </div>
                     <Separator />
                     <div className="p-3">
                         <div className="flex items-center gap-4">
                            <CreditCard className="h-5 w-5 text-primary" />
                            <span className="font-medium text-muted-foreground">PAYMENTS</span>
                        </div>
                        <div className="flex flex-col items-start mt-4 ml-9 space-y-3 text-sm">
                            <Link href="/profile/gift-cards" className={cn("hover:text-primary text-foreground transition-colors w-full", pathname === '/profile/gift-cards' && 'text-primary font-semibold')}>
                                <span className="flex justify-between w-full">
                                    <span>Gift Cards</span>
                                    <span className="font-semibold text-primary">₹0</span>
                                </span>
                            </Link>
                            {paymentLinks.slice(1).map(link => (
                                <Link key={link.href} href={link.href} className={cn("hover:text-primary transition-colors", pathname === link.href ? 'text-primary font-semibold' : 'text-foreground')}>{link.label}</Link>
                           ))}
                        </div>
                    </div>
                    <Separator />
                     <Link href="/profile/stuff" className={cn("flex items-center p-3 hover:bg-muted rounded-md transition-colors", pathname === '/profile/stuff' && 'bg-muted')}>
                         <div className="flex items-center gap-4">
                            <FileText className="h-5 w-5 text-primary" />
                            <span className="font-medium text-foreground">MY STUFF</span>
                        </div>
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
}

export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
  const { user, isUserLoading } = useUser();

  if (isUserLoading) {
    return <div className="container mx-auto py-12"><p>Loading...</p></div>;
  }

  if (!user) {
    return <div className="container mx-auto py-12"><p>Please log in to view your profile.</p></div>;
  }

  return (
    <div className="bg-background">
        <div className="container mx-auto py-8 md:py-12">
            <div className="grid md:grid-cols-4 gap-8 items-start">
                <div className="md:col-span-1">
                    <Sidebar />
                </div>
                <div className="md:col-span-3">
                    {children}
                </div>
            </div>
        </div>
    </div>
  );
}
