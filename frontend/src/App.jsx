import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Cart from './components/Cart';
import Payment from './components/Payment';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default route */}
        <Route path="/log" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reg" element={<Registration />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pay" element={<Payment />} />
        <Route path="/pro" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
