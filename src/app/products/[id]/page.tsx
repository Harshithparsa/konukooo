
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useState, use } from 'react';
import { Minus, Plus, MessageSquare, ShoppingBag } from 'lucide-react';
import { getProductById, getAllProducts } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/cart-context';
import { RelatedProducts } from '@/components/related-products';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { StarRating } from '@/components/star-rating';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { ProductReview } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';

function ProductReviews({ reviews }: { reviews: ProductReview[] }) {
  if (!reviews || reviews.length === 0) {
    return (
      <div className="py-8 text-center text-muted-foreground">
        <MessageSquare className="h-12 w-12 mx-auto mb-2" />
        <p>No reviews yet. Be the first to share your thoughts!</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {reviews.map((review) => (
        <div key={review.id} className="flex gap-4">
          <Avatar>
            <AvatarImage src={review.avatar} alt={review.author} />
            <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="font-semibold">{review.author}</p>
              <span className="text-sm text-muted-foreground">{review.date}</span>
            </div>
            <div className="flex items-center gap-1 my-1">
              <StarRating rating={review.rating} />
            </div>
            <p className="text-foreground/80">{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  // The 'params' object can be a promise, so we use `use` to unwrap it.
  const resolvedParams = use(params);
  const product = getProductById(resolvedParams.id);
  const allProducts = getAllProducts();

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
    }, quantity);
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 bg-card p-8 rounded-lg shadow-sm">
        <div className="relative aspect-square w-full rounded-lg overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            data-ai-hint={product.imageHint}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-muted-foreground mb-2">{product.category}</p>
          <h1 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-foreground">{product.name}</h1>

          <div className="flex items-center gap-2 mb-4">
            <StarRating rating={product.rating} />
            <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
          </div>

          <p className="text-3xl font-bold text-blue-600 mb-6">₹{product.price.toFixed(2)}</p>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded-md">
              <Button variant="ghost" size="icon" onClick={() => setQuantity(q => Math.max(1, q - 1))}>
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <Button variant="ghost" size="icon" onClick={() => setQuantity(q => q + 1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button size="lg" onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/products">
                <ShoppingBag className="mr-2 h-4 w-4" /> Continue Shopping
              </Link>
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            {product.stock > 0 ? (
              <p>In Stock: <span className="font-semibold text-green-600">{product.stock} items available</span></p>
            ) : (
              <p className="font-semibold text-red-600">Out of Stock</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-16">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="description">Product Description</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
          </TabsList>
          <Card className="mt-4">
            <CardContent className="p-6">
              <TabsContent value="description">
                <p className="text-foreground/80 leading-relaxed">{product.description}</p>
              </TabsContent>
              <TabsContent value="reviews">
                <ProductReviews reviews={product.reviews} />
              </TabsContent>
            </CardContent>
          </Card>
        </Tabs>
      </div>

      <Separator className="my-12 md:my-16" />

      <RelatedProducts currentProduct={product} allProducts={allProducts} />

    </div>
  );
}
