import React from 'react';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ShoppingCart from './ShoppingCart';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

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
        <button>
          <FontAwesomeIcon
            icon={faShoppingCart}
            onClick={() => setIsOpen(true)}
          />
        </button>
        <ShoppingCart
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        ></ShoppingCart>
      </div>
    </div>
  );
};

export default NavBar;
