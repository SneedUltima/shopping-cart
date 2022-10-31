import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import App from '../App';
import Products from './Products';
import Contact from './Contact';
import ShoppingCart from './ShoppingCart';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
