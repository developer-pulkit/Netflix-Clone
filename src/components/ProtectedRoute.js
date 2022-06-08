import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContent";
import Account from "../pages/Account";

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth;

  if (!user) {
    return <Navigate to="/account" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
