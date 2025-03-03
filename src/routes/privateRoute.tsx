import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { JSX } from 'react';

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {

  const {loading,isAuthenticated} = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch()
  

  if(!loading){
    if (isAuthenticated){
      return children; 
    }
    else{
      return <Navigate to="/login" replace />
    }
  }

};

export default PrivateRoute;
