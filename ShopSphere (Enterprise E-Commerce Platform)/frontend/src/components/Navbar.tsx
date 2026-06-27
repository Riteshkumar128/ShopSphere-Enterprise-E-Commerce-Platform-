import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { logout } from '../app/authSlice';

export default function Navbar() {
  const { user } = useAppSelector((s) => s.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="nav">
      <Link to="/" className="brand">
        ShopSphere
      </Link>
      <div className="nav-links">
        <Link to="/cart">Cart</Link>
        <Link to="/orders">Orders</Link>
        {user?.role === 'admin' || user?.role === 'super_admin' ? <Link to="/admin">Admin</Link> : null}
        {user ? (
          <button onClick={onLogout}>Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
