import React from 'react';
import '../styles/CartItem.css';
import { useContext } from 'react';
import ShoppingCartContext from './ShoppingCartContext';

const CartItem = ({ name, imgUrl, id, price, qty }) => {
  const { addToCart, removeFromCart } = useContext(ShoppingCartContext);

  return (
    <div className="cart-item-container">
      <div className="image-container">
        <img src={imgUrl} id="product-image" />
      </div>
      <div className="product-info-container">
        <h3>{name}</h3>
        <p>${(price * qty).toFixed(2)}</p>
        <div className="quantity-buttons">
          <button id="quantity-button" onClick={() => removeFromCart(id)}>
            -
          </button>
          <p id="quantity">{qty}</p>
          <button id="quantity-button" onClick={() => addToCart(id)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
