'use client';

import * as React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from '@/components/ui/menubar';
import { navigationData } from '@/lib/navigation-data';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export function CategoryBar() {
    const searchParams = useSearchParams();
    const currentCategory = searchParams.get('category');
    const currentSubCategory = searchParams.get('subCategory');

    return (
        <div className="w-full flex flex-col gap-4 mb-8">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Browse Categories</h2>
                {(currentCategory || currentSubCategory) && (
                    <Button variant="ghost" size="sm" asChild className="h-8">
                        <Link href="/products">
                            <X className="mr-2 h-4 w-4" />
                            Clear Filters
                        </Link>
                    </Button>
                )}
            </div>

            <Menubar className="justify-start overflow-x-auto border-none bg-transparent p-0 shadow-none">
                <div className="flex w-max space-x-2">
                    <MenubarMenu>
                        <MenubarTrigger asChild>
                            <Link href="/products" className={cn(
                                "cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-muted",
                                !currentCategory ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-muted/50 text-foreground"
                            )}>
                                All
                            </Link>
                        </MenubarTrigger>
                    </MenubarMenu>
                    {navigationData.map((category) => (
                        <MenubarMenu key={category.name}>
                            <MenubarTrigger className={cn(
                                "cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-muted data-[state=open]:bg-muted",
                                currentCategory === category.name ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-muted/50 text-foreground"
                            )}>
                                {category.name}
                            </MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem asChild>
                                    <Link href={`/products?category=${encodeURIComponent(category.name)}`} className="w-full cursor-pointer font-semibold">
                                        All {category.name}
                                    </Link>
                                </MenubarItem>
                                {category.subCategories.length > 0 && <div className="h-px bg-muted my-1" />}
                                {category.subCategories.map((sub) => (
                                    <MenubarItem key={sub.name} asChild>
                                        <Link href={sub.href} className={cn(
                                            "cursor-pointer w-full",
                                            currentSubCategory === sub.name && "bg-accent text-accent-foreground"
                                        )}>
                                            {sub.name}
                                        </Link>
                                    </MenubarItem>
                                ))}
                            </MenubarContent>
                        </MenubarMenu>
                    ))}
                </div>
            </Menubar>
        </div>
    );
}
