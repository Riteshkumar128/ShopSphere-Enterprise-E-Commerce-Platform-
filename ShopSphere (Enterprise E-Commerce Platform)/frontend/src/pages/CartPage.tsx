import { useEffect, useState } from 'react';
import api from '../api/client';
import type { CartItem } from '../types';

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState(0);

  const loadCart = async () => {
    const { data } = await api.get('/cart');
    setItems(data.items || []);
    setSubtotal(data.subtotal || 0);
  };

  useEffect(() => {
    loadCart();
  }, []);

  const updateQty = async (productId: string, quantity: number) => {
    await api.put('/cart', { productId, quantity });
    await loadCart();
  };

  const placeOrder = async () => {
    await api.post('/orders', { paymentMethod: 'cod' });
    alert('Order placed');
    await loadCart();
  };

  return (
    <div className="page">
      <h1>Cart</h1>
      <div className="list">
        {items.map((item) => (
          <div key={item.product._id} className="card">
            <strong>{item.product.name}</strong>
            <p>₹{item.product.price}</p>
            <div className="row">
              <button onClick={() => updateQty(item.product._id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQty(item.product._id, item.quantity + 1)}>+</button>
            </div>
          </div>
        ))}
      </div>
      <h3>Subtotal: ₹{subtotal.toFixed(2)}</h3>
      <button onClick={placeOrder} disabled={!items.length}>
        Checkout
      </button>
    </div>
  );
}
