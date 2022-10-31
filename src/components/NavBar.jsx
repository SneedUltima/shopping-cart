import React from 'react';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
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
            onClick={() => navigate('/shopping-cart')}
          />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
