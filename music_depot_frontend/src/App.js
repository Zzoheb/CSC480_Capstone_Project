// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL; // e.g., http://localhost:5000/api

  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, [apiUrl]);

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route path="/login" element={<Login />} />
          {/* Add more routes here */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;