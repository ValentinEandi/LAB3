import React from 'react';
import { Routes, Route } from 'react-router-dom'
import AdminPage from './pages/AdminPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import CartPage from './pages/CartPage';
import './styles.css';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    
  );
}

export default App;

