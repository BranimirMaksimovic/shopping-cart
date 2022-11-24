import React, { createContext, useContext, useState } from "react";

export const Cart = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return <Cart.Provider value={{ cart, setCart }}>{children}</Cart.Provider>;
};

export const useCartStore = () => useContext(Cart);
