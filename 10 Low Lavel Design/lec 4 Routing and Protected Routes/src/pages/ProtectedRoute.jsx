import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAdmin = false;

  //   return isAdmin ? children : <Navigate to="/login" />;
  return isAdmin ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
