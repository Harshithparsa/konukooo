'use client';

import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { navigationData } from '@/lib/navigation-data';
import { ChevronDown } from 'lucide-react';

export function CategoryNav() {
  return (
    <nav className="flex justify-center items-center gap-4 lg:gap-8 h-12">
      {navigationData.map((category) => (
        <DropdownMenu key={category.name}>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors focus:outline-none">
              <span>{category.name}</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {category.subCategories.map((subCategory) => (
              <DropdownMenuItem key={subCategory.name} asChild>
                <Link href={subCategory.href}>{subCategory.name}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </nav>
  );
}
