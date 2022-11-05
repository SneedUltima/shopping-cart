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
        { id, name, price, imgUrl, qty: 1 },
      ]);
    }
  };

  const removeFromCart = (id, name, price, imgUrl, qty) => {
    const exist = items.find((item) => item.id === id);
    if (exist.qty === 1) {
      const newItems = items.filter((item) => item.id !== id);
      setItems(newItems);
    } else {
      const newItems = items.map((item) =>
        item.id === id ? { ...exist, qty: exist.qty - 1 } : item
      );
      setItems(newItems);
    }
  };

  return (
    <ShoppingCartContext.Provider value={{ items, addToCart, removeFromCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartContext;
