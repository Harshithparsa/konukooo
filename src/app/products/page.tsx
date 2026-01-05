"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ProductCard } from '@/components/product-card';
import { getAllProducts } from '@/lib/data';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CategoryBar } from '@/components/category-bar';
import type { Product } from '@/lib/types';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const subCategory = searchParams.get('subCategory');
  const searchQuery = searchParams.get('q');

  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  const [pageTitle, setPageTitle] = useState('All Products');

  useEffect(() => {
    const products = getAllProducts();
    setAllProducts(products);
  }, []);

  useEffect(() => {
    let products = [...allProducts];
    let title = 'All Products';

    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase();
      products = products.filter(p =>
        p.name.toLowerCase().includes(lowercasedQuery) ||
        p.description.toLowerCase().includes(lowercasedQuery) ||
        p.category.toLowerCase().includes(lowercasedQuery) ||
        p.subCategory.toLowerCase().includes(lowercasedQuery)
      );
      title = `Search results for "${searchQuery}"`;
    } else if (category) {
      products = products.filter(p => p.category === category);
      title = category;
    }

    if (subCategory) {
      products = products.filter(p => p.subCategory === subCategory);
      title = subCategory;
    }

    setPageTitle(title);
    setFilteredProducts(products);
    setSortedProducts(products);
  }, [category, subCategory, searchQuery, allProducts]);

  const handleSortChange = (value: string) => {
    let sorted = [...filteredProducts];
    switch (value) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'featured':
      default:
        // Reset to original filtered order, could be enhanced with a real "featured" metric
        sorted = [...filteredProducts];
        break;
    }
    setSortedProducts(sorted);
  };

  return (
    <div className="container py-8 md:py-12">
      <CategoryBar />
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <h1 className="text-3xl md:text-4xl font-headline font-bold text-center md:text-left">{pageTitle}</h1>
        <div className="flex items-center gap-4">
          <Select onValueChange={handleSortChange} defaultValue="featured">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold">No Products Found</h2>
          <p className="text-muted-foreground mt-2">
            {searchQuery ? `We couldn't find any products matching your search.` : `There are no products matching your current selection.`}
          </p>
        </div>
      )}
    </div>
  );
}
