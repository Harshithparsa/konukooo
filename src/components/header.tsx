

"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { ShoppingBag, Package2, Menu, Search, LogOut, User as UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useCart } from '@/context/cart-context';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { useAuth, useFirestore, useUser, useMemoFirebase } from '@/firebase';
import { signOut } from 'firebase/auth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';
import { doc } from 'firebase/firestore';
import { useDoc } from '@/firebase/firestore/use-doc';
import { CategoryNav } from './category-nav';
import { cn } from '@/lib/utils';
import { Skeleton } from './ui/skeleton';

type UserProfile = {
  firstName: string;
  lastName: string;
  email: string;
};

export function Header() {
  const { itemCount } = useCart();
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const firestore = useFirestore();
  const router = useRouter();
  const pathname = usePathname();

  const userDocRef = useMemoFirebase(
    () => (firestore && user ? doc(firestore, 'users', user.uid) : null),
    [firestore, user]
  );
  
  const { data: userProfile, isLoading: isProfileLoading } = useDoc<UserProfile>(userDocRef);

  const handleLogout = () => {
    signOut(auth);
  };

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
        const query = event.currentTarget.value;
        if(query.trim()) {
            router.push(`/products?q=${encodeURIComponent(query.trim())}`);
        } else {
            router.push('/products');
        }
    }
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/orders', label: 'My Orders' },
  ];
  
  const getAvatarFallback = () => {
    if (userProfile?.firstName) return userProfile.firstName.charAt(0).toUpperCase();
    if (user?.email) return user.email.charAt(0).toUpperCase();
    return 'U';
  }

  const getDisplayName = () => {
    if (isProfileLoading || isUserLoading) return <Skeleton className="h-5 w-20" />;
    if (userProfile?.firstName) return userProfile.firstName;
    if (user?.displayName) return user.displayName.split(' ')[0];
    return 'Profile';
  }

  const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    const isActive = pathname === href;
    return (
        <Link href={href} className={cn(
            "relative text-foreground transition-colors hover:text-secondary",
            isActive && "text-primary"
        )}>
            {children}
            {isActive && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>}
        </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center gap-4">
          <Link href="/" className="mr-4 flex items-center space-x-2">
            <Package2 className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-green-600">konukooo</span>
          </Link>
           <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
             <NavLink href="/">Home</NavLink>
             <NavLink href="/products">Products</NavLink>
          </nav>
        </div>

        <div className="hidden md:flex flex-grow max-w-xl">
           <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for Products, Brands and More"
                className="w-full bg-muted pl-10"
                onKeyDown={handleSearch}
              />
            </div>
        </div>

        <div className="flex items-center justify-end gap-2 md:gap-4 ml-4">
          
          {isUserLoading ? (
             <div className="flex items-center gap-2">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-6 w-20 hidden lg:block" />
            </div>
          ) : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                 <Button variant="ghost" className="gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.photoURL ?? ""} alt={userProfile?.firstName ?? "User"} />
                    <AvatarFallback>{getAvatarFallback()}</AvatarFallback>
                  </Avatar>
                  <span className="hidden lg:inline">{getDisplayName()}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{userProfile?.firstName ?? 'User'}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">
                    <UserIcon className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/orders">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    <span>Orders</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Button asChild variant="link" size="sm">
                  <Link href="/login">Login</Link>
              </Button>
              <Button asChild size="sm">
                  <Link href="/register">Register</Link>
              </Button>
            </div>
          )}

          <Link href="/cart" passHref>
            <Button variant="ghost" className="relative gap-2">
              <ShoppingBag className="h-5 w-5" />
              <span className="hidden lg:inline">Cart</span>
              {itemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-6 w-6 rounded-full flex items-center justify-center text-xs"
                >
                  {itemCount}
                </Badge>
              )}
              <span className="sr-only">Shopping Cart</span>
            </Button>
          </Link>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                    <Package2 className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline">konukooo</span>
                  </Link>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Separator className="my-2"/>
                  {user ? (
                     <Button variant="ghost" onClick={handleLogout} className="justify-start gap-2">
                        <LogOut className="h-5 w-5"/>
                        Logout
                    </Button>
                  ) : (
                    <div className="flex flex-col gap-2 mt-4">
                      <Link href="/login" passHref>
                          <Button variant="outline" className="w-full">Login</Button>
                      </Link>
                      <Link href="/register" passHref>
                          <Button className="w-full">Register</Button>
                      </Link>
                    </div>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <div className="hidden md:block border-t bg-card">
        <div className="container">
          <CategoryNav />
        </div>
      </div>
    </header>
  );
}
