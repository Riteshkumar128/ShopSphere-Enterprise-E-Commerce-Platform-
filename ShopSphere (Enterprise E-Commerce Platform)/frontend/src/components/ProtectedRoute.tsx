import type { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';

export default function ProtectedRoute({
  children,
  roles,
}: {
  children: ReactElement;
  roles?: Array<'customer' | 'seller' | 'admin' | 'super_admin'>;
}) {
  const { user } = useAppSelector((s) => s.auth);
  if (!user) return <Navigate to="/login" replace />;
  if (roles && !roles.includes(user.role)) return <Navigate to="/" replace />;
  return children;
}
