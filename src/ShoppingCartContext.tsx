import React, { useState } from 'react';
import { IProduct } from './ProductView/ProductService';

interface IShoppingCartContextProviderProps {
  children: React.ReactNode;
}

type AddToCartType = (newItem: IProduct) => void;

type RemoveFromCartType = (itemToRemove: IProduct) => void;

interface IShoppingCartContext {
  cartItems: IProduct[];
  addToCart: AddToCartType;
  removeFromCart: RemoveFromCartType;
}

// TODO: type this and products
const ShoppingCartContext = React.createContext({} as IShoppingCartContext);

export const ShoppingCartContextProvider = ({
  children,
}: IShoppingCartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  const addToCart: AddToCartType = (newItem) =>
    setCartItems((prevItems) => [...prevItems, newItem]);

  const removeFromCart: RemoveFromCartType = (itemToRemove) =>
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemToRemove.id)
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
