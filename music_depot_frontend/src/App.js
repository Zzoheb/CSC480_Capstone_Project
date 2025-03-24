import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL; // This pulls in your API URL

  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, [apiUrl]);

  return (
    <div>
      <Header />
      <main>
        <ProductList products={products} />
      </main>
    </div>
  );
}

export default App;
