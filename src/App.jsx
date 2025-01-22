import { useState } from 'react';
import './App.css';
import ProductList from './Components/productList';
import products from './data/Products';
import './Style/main.css';

function App() {
  // State for storing the cart items
  const [cart, setCart] = useState([]);

  // Function to handle adding products to the cart
  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      // If the product is already in the cart, increase the quantity
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If the product is not in the cart, add it
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Calculate total price of items in the cart
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="App">
      <h1>E-commerce Cart App</h1>

      {/* Display available products */}
      <ProductList products={products} onAddToCart={handleAddToCart} />

      {/* Display the cart */}
      <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>The cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
              </li>
            ))}
          </ul>
        )}
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
}

export default App;
