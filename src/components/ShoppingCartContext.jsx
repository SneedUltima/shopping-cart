import React, { createContext, useContext } from 'react';

const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  return (
    <ShoppingCartContext.Provider>{children}</ShoppingCartContext.Provider>
  );
}

export default ShoppingCartContext;
