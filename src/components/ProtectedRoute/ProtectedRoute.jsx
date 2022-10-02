import React from 'react';
import { useGlobalStore } from '../../store/store';
import { Navigate } from 'react-router-dom';
function ProtectedRoute(props) {
  const userInfo = useGlobalStore((state) => state.appState.userInfo);
  if (!userInfo || !localStorage.getItem('access_token')) {
    localStorage.removeItem('access_token');
    console.log('in protected routed usernotfound in redux');
    return <Navigate to="/login" />;
  }
  return props.children;
}

export default ProtectedRoute;
