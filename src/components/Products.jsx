import React from 'react';
import NavBar from './NavBar';
import storeItems from '../data/items.json';
import ItemCard from './ItemCard';

const Products = () => {
  return (
    <div>
      <NavBar />
      {storeItems.map((item) => (
        <ItemCard key={item.id} {...item} />
      ))}
      ;
    </div>
  );
};

export default Products;
