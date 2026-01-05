import Link from 'next/link';
import { Package2, Twitter, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-muted-foreground">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center space-x-2">
            <Package2 className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-background">konukooo</span>
          </Link>
          <p className="text-center text-sm leading-loose md:text-left">
            © {new Date().getFullYear()} konukooo. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 hover:text-secondary transition-colors"/>
            </Link>
            <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 hover:text-secondary transition-colors"/>
            </Link>
            <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 hover:text-secondary transition-colors"/>
            </Link>
        </div>
      </div>
    </footer>
  );
}
