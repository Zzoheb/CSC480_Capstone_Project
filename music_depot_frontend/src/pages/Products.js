// src/pages/Products.js
import React from 'react';
import ProductList from '../components/ProductList';

const Products = ({ products }) => {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Our Products</h2>
      <ProductList products={products} />
    </div>
  );
};

export default Products;