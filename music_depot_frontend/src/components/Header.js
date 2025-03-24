// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <h1>Music Depot</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;