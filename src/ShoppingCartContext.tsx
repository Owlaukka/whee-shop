import React, { useState } from 'react';

interface IShoppingCartContextProviderProps {
  children: React.ReactNode;
}

// TODO: type this and products
const ShoppingCartContext = React.createContext({} as any);

export const ShoppingCartContextProvider = ({
  children,
}: IShoppingCartContextProviderProps) => {
  const [cartItems, setCartItems] = useState([] as any[]);

  const addToCart = (newItem: any) =>
    setCartItems((prevItems) => [...prevItems, newItem]);

  const removeFromCart = (newItem: any) =>
    setCartItems((prevItems) =>
      prevItems.filter((item: any) => item.id !== newItem.id)
    );

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, addToCart, removeFromCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContext;
