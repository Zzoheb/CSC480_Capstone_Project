import React from 'react';

const Header = () => {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <h1>Music Depot</h1>
      <nav>
        <a href="/">Home</a> | <a href="/products">Products</a> | <a href="/login">Login</a>
      </nav>
    </header>
  );
};

export default Header;