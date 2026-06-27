import { useEffect, useState } from 'react';
import api from '../api/client';

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({ users: 0, products: 0, orders: 0, revenue: 0 });

  useEffect(() => {
    api.get('/admin/dashboard').then((response) => setStats(response.data));
  }, []);

  return (
    <div className="page">
      <h1>Admin Dashboard</h1>
      <div className="grid">
        <div className="card">Users: {stats.users}</div>
        <div className="card">Products: {stats.products}</div>
        <div className="card">Orders: {stats.orders}</div>
        <div className="card">Revenue: ₹{Number(stats.revenue).toFixed(2)}</div>
      </div>
    </div>
  );
}
