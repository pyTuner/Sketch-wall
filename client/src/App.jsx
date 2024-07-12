import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import FullScreenPage from './pages/FullScreenPage';

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/Sketch-wall' Component={Homepage} />
        <Route path='/login' Component={LoginPage} />
        <Route path='/FullScreen/:id' Component={FullScreenPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App