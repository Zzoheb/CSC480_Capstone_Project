import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div style={{ padding: '1rem' }}>
      {products.length > 0 ? (
        products.map(product => (
          <div key={product.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductList;