import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import api from '../api/client';
import type { Product } from '../types';

export default function ProductDetailPage() {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const response = await api.get(`/products/${id}`);
      return response.data as Product;
    },
    enabled: Boolean(id),
  });

  const addToCart = async () => {
    await api.post('/cart', { productId: id, quantity: 1 });
    alert('Added to cart');
  };

  if (isLoading) return <p>Loading product...</p>;
  if (error || !data) return <p>Product not found.</p>;

  return (
    <div className="page">
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>Brand: {data.brand}</p>
      <p>Price: ₹{data.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
