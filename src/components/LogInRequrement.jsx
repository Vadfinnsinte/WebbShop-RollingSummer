import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductStore } from '../data/store';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useProductStore(state => state.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => { 
	
  if (!isLoggedIn) {
    navigate('/login');
  } 
  }, [isLoggedIn, navigate]);
  return isLoggedIn ? children : null;
};

export default ProtectedRoute;