import React from 'react';
import storeItems from '../data/items.json';
import ItemCard from './ItemCard';
import { motion } from 'framer-motion';
import '../styles/Products.css';

const Products = () => {
  return (
    <motion.div
      className="product-display"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        easeIn: [0, 0.71, 0.2, 1.01],
        easeOut: [0, 0.71, 0.2, 1.01],
      }}
    >
      {storeItems.map((item) => (
        <ItemCard key={item.id} {...item} />
      ))}
      ;
    </motion.div>
  );
};

export default Products;
