import React, { createContext, useState } from 'react';

const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (id, name, price) => {
    setItems((prevState) => [...prevState, { id, name, price }]);
  };

  return (
    <ShoppingCartContext.Provider value={{ items, addToCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartContext;
