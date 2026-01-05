
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product-card';
import { getFeaturedProducts } from '@/lib/data';

export default function Home() {
  const featuredProducts = getFeaturedProducts(16);

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center bg-card">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/hero/1600/900"
            alt="E-commerce hero background"
            fill
            className="object-cover opacity-10"
            data-ai-hint="abstract background"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
        </div>
        <div className="container px-4 md:px-6 z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-foreground tracking-tighter mb-4 animate-fade-in-down">
              Discover Your Style with konukooo
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up">
              Quality products, unbeatable prices. Your one-stop shop for everything you need.
            </p>
            <Link href="/products">
              <Button size="lg" className="animate-fade-in">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-headline font-bold text-center mb-10">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
