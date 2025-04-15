// Importing required React hooks and other resources
import React, { useState, useEffect } from 'react';
import products from './data'; // Product list (array of objects)
import './MyStyle.css'; // External CSS styling

function WebPage() {
  // State to store cart items. This version initializes from localStorage (if available).
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart'); // Get cart from localStorage
    return savedCart ? JSON.parse(savedCart) : [];  // Parse if exists, else start with empty cart
  });

  // useEffect to update localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart
  }, [cart]); // Only runs when cart changes

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]); // Add new product to existing cart array
  };

  return (
    <div className="page-wrapper"> {/* NEW WRAPPER */}
      {/* Header Section */}
      <header className="header">
        <h1>
          My E-Commerce Site 🛒 
          <span className="cart-count">{cart.length}</span> {/* Shows number of items in cart */}
        </h1>
      </header>

      {/* Main Section - Product List */}
      <main className="container">
        <div className="product-list">
          {/* Loop through each product in the array */}
          {products.map((product) => (
            <div className="card" key={product.id}>
              {/* Product Image */}
              <img src={product.image} alt={product.name} />
              {/* Product Name */}
              <h3>{product.name}</h3>
              {/* Product Price formatted to 2 decimal places */}
              <p>${product.price.toFixed(2)}</p>
              {/* Add to Cart Button */}
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        © 2025 My E-Commerce Store. All rights reserved.
      </footer>
    </div>
  );
}

export default WebPage; // Exporting component for use in App.jsx or other files
