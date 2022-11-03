import React from 'react';
import storeItems from '../data/items.json';
import ItemCard from './ItemCard';
import '../styles/Products.css';

const Products = () => {
  return (
    <div className="product-display">
      {storeItems.map((item) => (
        <ItemCard key={item.id} {...item} />
      ))}
      ;
    </div>
  );
};

export default Products;
