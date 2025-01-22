import React from "react";
import {products} from '../data/Products';

const ProductList = ({ onAddToCart }) => {
    return (
      <div>
        <h2>Available Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              {/* Display Product Image */}
              <img src={product.image} alt={product.name} className="product-image" />
              
              <h3>{products.name}</h3>
              <p>${products.price}</p>
              <button onClick={() => onAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductList;