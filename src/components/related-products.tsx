'use client';

import { useState, useEffect } from "react";
import { getRelatedProducts } from "@/ai/flows/related-product-recommendations";
import { ProductCard } from "./product-card";
import type { Product } from "@/lib/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "./ui/skeleton";

interface RelatedProductsProps {
    currentProduct: Product;
    allProducts: Product[];
}

export function RelatedProducts({ currentProduct, allProducts }: RelatedProductsProps) {
    const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchRecommendations = async () => {
            const otherProducts = allProducts.filter(p => p.id !== currentProduct.id);
            const otherProductNames = otherProducts.map(p => p.name);

            try {
                const recommendations = await getRelatedProducts({
                    productDescription: currentProduct.description,
                    productNames: otherProductNames,
                });

                const foundProducts = recommendations.relatedProducts
                    .map(name => otherProducts.find(p => p.name === name))
                    .filter((p): p is Product => p !== undefined)
                    .slice(0, 5); // Limit to 5 recommendations
                
                setRecommendedProducts(foundProducts);

            } catch (error) {
                console.error("Failed to get related products:", error);
                // Fallback to showing products from the same category
                const fallbackProducts = allProducts
                    .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
                    .slice(0, 5);
                setRecommendedProducts(fallbackProducts);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRecommendations();
    }, [currentProduct, allProducts]);
    
    if (isLoading) {
        return (
            <section>
                <h2 className="text-2xl md:text-3xl font-headline font-bold mb-8 text-center">You Might Also Like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="space-y-2">
                           <Skeleton className="h-56 w-full"/>
                           <Skeleton className="h-6 w-3/4"/>
                           <Skeleton className="h-8 w-1/2"/>
                        </div>
                    ))}
                </div>
            </section>
        )
    }

    if (recommendedProducts.length === 0) {
        return null;
    }

    return (
        <section>
            <h2 className="text-2xl md:text-3xl font-headline font-bold mb-8 text-center">You Might Also Like</h2>
            <Carousel
                opts={{
                    align: "start",
                    loop: recommendedProducts.length > 3,
                }}
                className="w-full"
            >
                <CarouselContent>
                    {recommendedProducts.map((product) => (
                        <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                             <div className="p-1">
                                <ProductCard product={product} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex"/>
                <CarouselNext className="hidden md:flex"/>
            </Carousel>
        </section>
    );
}
