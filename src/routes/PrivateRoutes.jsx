import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { MyContext } from '../context/context';

function ProtectedRoutes() {
  const { state } = useContext(MyContext);

  const useAuth = () => {
    if (state.login.token) {
      return true;
    }
    return false;
  };

  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
