import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { JSX } from 'react';

const PUBLIC_ROUTES = ['/', '/login', '/signup'];

const PublicRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();

  if (isAuthenticated && PUBLIC_ROUTES.includes(location.pathname)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default PublicRoute;
