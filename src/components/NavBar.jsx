import React from 'react';

const NavBar = () => {
  return (
    <div>
      <div className="logo">
        <button>Rush</button>
      </div>
      <div id="nav">
        <button>Home</button>
        <button>Products</button>
        <button>Contact Us</button>
        <button>Shopping Cart</button>
      </div>
    </div>
  );
};

export default NavBar;
