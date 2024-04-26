import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const ProtectedRoute = ({ children }) => {
  const isLoggedIn = ValidationInlog(state => state.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => { 
	
  if (!isLoggedIn) {
    navigate('/login');
  } 
  }, [isLoggedIn, navigate]);
  return isLoggedIn ? children : null;
};

export default ProtectedRoute;