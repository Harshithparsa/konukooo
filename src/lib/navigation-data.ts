import { getAllProducts } from './data';
import {
  Smartphone,
  Laptop,
  Headphones,
  Camera,
  Watch,
  Shirt,
  Tv,
  Home,
  BookOpen,
  ToyBrick,
  Sparkles,
  Apple,
  Backpack,
} from 'lucide-react';

export type SubCategory = {
  name: string;
  href: string;
};

export type Category = {
  name: string;
  subCategories: SubCategory[];
  icon: React.ComponentType<{ className?: string }>;
};

export const getNavigationData = (): Category[] => {
  const products = getAllProducts();
  const categoryMap = new Map<string, Set<string>>();

  products.forEach((product) => {
    if (!categoryMap.has(product.category)) {
      categoryMap.set(product.category, new Set());
    }
    categoryMap.get(product.category)!.add(product.subCategory);
  });

  const categoryIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
    'Mobiles & Tablets': Smartphone,
    'Electronics': Laptop,
    'TVs & Appliances': Tv,
    'Fashion': Watch,
    'Home & Furniture': Home,
    'Books & Media': BookOpen,
    'Toys': ToyBrick,
    'Beauty & Personal Care': Sparkles,
    'Grocery': Apple,
    'Sports & Outdoors': Backpack,
  };

  const sortedCategories = Array.from(categoryMap.keys()).sort();

  return sortedCategories.map((categoryName) => {
    const subCategories = Array.from(categoryMap.get(categoryName)!).sort();
    return {
      name: categoryName,
      icon: categoryIcons[categoryName] || Home,
      subCategories: subCategories.map((subCategoryName) => ({
        name: subCategoryName,
        href: `/products?category=${encodeURIComponent(
          categoryName
        )}&subCategory=${encodeURIComponent(subCategoryName)}`,
      })),
    };
  });
};

export const navigationData = getNavigationData();
