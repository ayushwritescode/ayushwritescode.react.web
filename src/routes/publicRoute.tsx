import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { JSX } from 'react';

const PRIVATE_ROUTES = ['/dashboard']

const PublicRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const {loading,isAuthenticated} = useAppSelector((state) => state.auth);
  const location = useLocation();

  if(!loading){
  if (isAuthenticated && !PRIVATE_ROUTES.includes(location.pathname)) {
    return <Navigate to="/dashboard" replace />;
  }
  else{
    return children;
  }

}
};

export default PublicRoute;
