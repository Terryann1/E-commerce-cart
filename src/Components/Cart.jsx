import React from 'react';


const Cart = ({ cartItems, onRemove, onAdjustQuantity }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <h2>Your Cart</h2>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <p>{item.name}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => onAdjustQuantity(item.id, item.quantity + 1)}>Increase</button>
                <button onClick={() => onAdjustQuantity(item.id, item.quantity - 1)}>Decrease</button>
                <button onClick={() => onRemove(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${getTotalPrice()}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;