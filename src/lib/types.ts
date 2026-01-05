
export type ProductReview = {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  imageHint: string;
  stock: number;
  category: string;
  subCategory: string;
  rating: number;
  reviewCount: number;
  reviews: ProductReview[];
};

export type CartItem = {
  id: string;
  name:string;
  price: number;
  quantity: number;
  imageUrl: string;
};

export type Order = {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  date: string;
  status: 'Pending' | 'Shipped' | 'Delivered';
};

export type Address = {
    id: string;
    name: string;
    mobileNumber: string;
    pincode: string;
    address: string;
    city: string;
    state: string;
}

    