import { Navigate } from "react-router-dom";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { VerifyTokenFrontend } from '../Authentication-components/verifyToken';

const ProtectedRoute = ({ component, ...rest }) => {
  const isAuthenticated = VerifyTokenFrontend();

  return (
    <Routes>
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                {...props}
                ) : (
                <Navigate to="/login" />
                )
            }
            />
    </Routes>
    
  );
};

export default ProtectedRoute;