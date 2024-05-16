import React, { createContext, useContext, useState } from 'react';

const CartCountContext = createContext();

export const useCartCount = () => useContext(CartCountContext);

export const CartCountProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = (count) => {
    setCartCount(count);
  };

  return (
    <CartCountContext.Provider value={{ cartCount, updateCartCount }}>
      {children}
    </CartCountContext.Provider>
  );
};
