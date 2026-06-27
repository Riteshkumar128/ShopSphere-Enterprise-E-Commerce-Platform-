import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import api from '../api/client';
import type { Product } from '../types';

export default function HomePage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await api.get('/products');
      return response.data.items as Product[];
    },
  });

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Unable to load products.</p>;

  return (
    <div className="page">
      <h1>Products</h1>
      <div className="grid">
        {data?.map((product) => (
          <article key={product._id} className="card">
            <h3>{product.name}</h3>
            <p>{product.brand}</p>
            <p>₹{product.price}</p>
            <Link to={`/products/${product._id}`}>View Details</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
