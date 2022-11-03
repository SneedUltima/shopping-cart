import React, { createContext, useContext } from 'react';

const ShoppingCartContext = createContext([]);

export function ShoppingCartProvider({ children }) {
  return <ShoppingCartProvider>{children}</ShoppingCartProvider>;
}

export default ShoppingCartContext;
