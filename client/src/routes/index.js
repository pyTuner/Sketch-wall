import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../layouts/Main'
import { PrivateRoutes } from './privateRoute';
import { ProtectedRoutes } from './protectedRoute';
import User from '../pages/User';
import Homepage from '../pages/HomeScreen';
import Login from '../pages/Login';
import AdminDashboard from '../pages/Admin/Dashboard';
import NotAuthorized from '../pages/NotAuthorized';

// All routes 
export default function Router() {
    return (
        <BrowserRouter basename='/' >
            <Main>
                <Routes>
                    <Route path='/' component={Homepage} />
                    <Route path='/login' component={Login} />
                    {/* private routes > Log In users */}
                    <Route element={<PrivateRoutes />}>                 
                        <Route path='/user' component={User} />
                    </Route>
                    {/* protected routes > only admin */}
                    <Route element={<ProtectedRoutes />}>
                        <Route path='/admin' component={AdminDashboard} requiredRole="admin" />
                    </Route>
                    <Route path='/not-authorized' component={NotAuthorized} />
                </Routes>
            </Main>
        </BrowserRouter >
    )
}
