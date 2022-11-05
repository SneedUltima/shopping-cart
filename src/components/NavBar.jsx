import React from 'react';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ShoppingCart from './ShoppingCart';
import ShoppingCartContext from './ShoppingCartContext';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useContext(ShoppingCartContext);

  const navigate = useNavigate();

  const cartTotal = items.reduce((accumulator, item) => {
    return accumulator + item.qty;
  }, 0);

  return (
    <div className="Navbar">
      <div className="logo">
        <button onClick={() => navigate('/')}>Rush Supplements</button>
      </div>
      <div id="nav">
        <button id="links" onClick={() => navigate('/')}>
          Home
        </button>
        <button id="links" onClick={() => navigate('/products')}>
          Products
        </button>
        <button id="links" onClick={() => navigate('/contact')}>
          Contact Us
        </button>
        <div className="cart-icon">
          <button>
            <FontAwesomeIcon
              id="cart-icon"
              icon={faShoppingCart}
              onClick={() => setIsOpen(true)}
            />
          </button>
          <button id="cart-number" onClick={() => setIsOpen(true)}>
            {cartTotal}
          </button>
        </div>
        <ShoppingCart
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        ></ShoppingCart>
      </div>
    </div>
  );
};

export default NavBar;
