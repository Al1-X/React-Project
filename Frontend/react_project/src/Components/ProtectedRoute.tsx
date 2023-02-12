import React from "react";
import { Navigate } from "react-router-dom";
import { useIsAuthenticated } from "../Context/auth.context";

export const ProtectedRoute: React.FC<{ children: any }> = ({ children }) => {
    const isAuthenticated = useIsAuthenticated();
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return children;
};
