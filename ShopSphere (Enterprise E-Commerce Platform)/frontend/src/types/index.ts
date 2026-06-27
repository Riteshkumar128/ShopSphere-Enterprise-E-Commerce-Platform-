export type User = {
  _id?: string;
  id?: string;
  name: string;
  email: string;
  role: 'customer' | 'seller' | 'admin' | 'super_admin';
};

export type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  stock: number;
  images: string[];
  rating: number;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Order = {
  _id: string;
  total: number;
  status: string;
  paymentStatus: string;
  createdAt: string;
};
