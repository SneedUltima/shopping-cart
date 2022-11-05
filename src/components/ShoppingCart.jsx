import React from 'react';
import '../styles/ShoppingCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import ShoppingCartContext from './ShoppingCartContext';
import CartItem from './CartItem';

const ShoppingCart = ({ isOpen, onClose }) => {
  const { items } = useContext(ShoppingCartContext);

  const total = items.reduce((accumulator, item) => {
    return accumulator + item.qty * item.price;
  }, 0);

  if (!isOpen) return null;
  return (
    <motion.div
      className="Shopping-Cart-Container"
      initial={{ x: 50 }}
      animate={{ x: 0 }}
      exit={{ x: 50 }}
    >
      <div className="close">
        <div></div>
        <button onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} id="close-button" />
        </button>
      </div>
      <div className="Shopping-Cart-Header">
        <h1>Shopping Cart</h1>
      </div>
      {items.length > 0 ? (
        <div className="Shopping-Cart-Content">
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <h3>Your Cart is Empty!</h3>
      )}
      <div className="Shopping-Cart-Checkout">
        <p id="total">Your Total: ${total.toFixed(2)}</p>
        <button onClick={onClose} id="checkout-button">
          Checkout
        </button>
      </div>
    </motion.div>
  );
};

export default ShoppingCart;
