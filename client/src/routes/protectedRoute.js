import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';


export const ProtectedRoutes = ({ component: Component, requiredRole, ...rest }) => {

    const isAuthenticated = true
    const user = { role: 'admin' };

    return (
        (isAuthenticated && user.role === requiredRole) ? (
            <Outlet />
        ) : (
            <Navigate to={'/not-authorized'} />
        )
    )
}
