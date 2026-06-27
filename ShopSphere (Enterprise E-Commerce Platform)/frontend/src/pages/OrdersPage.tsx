import { useEffect, useState } from 'react';
import api from '../api/client';
import type { Order } from '../types';

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    api.get('/orders/mine').then((response) => setOrders(response.data));
  }, []);

  return (
    <div className="page">
      <h1>My Orders</h1>
      <div className="list">
        {orders.map((order) => (
          <article key={order._id} className="card">
            <h3>Order #{order._id.slice(-6)}</h3>
            <p>Total: ₹{order.total}</p>
            <p>Status: {order.status}</p>
            <p>Payment: {order.paymentStatus}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
