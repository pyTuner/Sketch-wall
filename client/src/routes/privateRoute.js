import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRoutes = () => {

    const isAuthenticated = true; // use selector hook to modify 

    return (
        isAuthenticated ?
            <Outlet />
            :
            <Navigate to={'/login'} />

    )
}
