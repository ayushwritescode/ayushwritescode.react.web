import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { JSX } from 'react';

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
