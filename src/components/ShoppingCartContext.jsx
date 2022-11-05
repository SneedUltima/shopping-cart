import React, { createContext, useState } from 'react';

const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (id, name, price, imgUrl, qty) => {
    const exist = items.find((item) => item.id === id);
    if (exist) {
      const newItems = items.map((item) =>
        item.id === id ? { ...exist, qty: exist.qty + 1 } : item
      );
      setItems(newItems);
    } else {
      setItems((prevState) => [
        ...prevState,
        { id, name, price, imgUrl, qty: qty + 1 },
      ]);
    }
  };

  return (
    <ShoppingCartContext.Provider value={{ items, addToCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartContext;
