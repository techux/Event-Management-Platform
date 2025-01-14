import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children }) => {
  const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];

  if (!token) {
    return <Navigate to="/login" />;
  }

  try {
    const decoded = jwtDecode(token);
    let currentDate = new Date();
    if (decoded.exp * 1000 < currentDate.getTime()) {
      return <Navigate to="/login" />
    } else {
      console.log("Server : OK");
    }
  } catch (error) {
    return <Navigate to={"/login"} />
  }

  return children;
};

export default ProtectedRoute;
