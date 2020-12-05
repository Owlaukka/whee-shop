import React, { useState } from 'react';
import { IProduct } from '../Product/ProductService';
import {
  addToCartRequest,
  clearCartRequest,
  removeFromCartRequest,
} from './ShoppingCartService';

interface IShoppingCartContextProviderProps {
  children: React.ReactNode;
}

type AddToCartType = (newItem: IProduct) => Promise<void>;

type RemoveFromCartType = (itemToRemove: IProduct) => Promise<void>;

type ClearCartType = () => Promise<void>;

interface IShoppingCartContext {
  cartItems: IProduct[];
  addToCart: AddToCartType;
  removeFromCart: RemoveFromCartType;
  clearCart: ClearCartType;
}

// TODO: type this and products
const ShoppingCartContext = React.createContext({} as IShoppingCartContext);

export const ShoppingCartContextProvider = ({
  children,
}: IShoppingCartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  const addToCart: AddToCartType = async (newItem) => {
    try {
      const returnedItem = await addToCartRequest(newItem);
      setCartItems((prevItems) => [...prevItems, returnedItem]);
    } catch (e) {
      console.error(`Failed to add item ${newItem.name} to cart. Error:`, e);
    }
  };

  const removeFromCart: RemoveFromCartType = async (itemToRemove) => {
    try {
      await removeFromCartRequest(itemToRemove);
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemToRemove.id)
      );
    } catch (e) {
      console.error(
        `Failed to remove item ${itemToRemove.name} from cart. Error:`,
        e
      );
    }
  };

  const clearCart: ClearCartType = async () => {
    try {
      await clearCartRequest();
      setCartItems([]);
    } catch (e) {
      console.error('Failed to clear items from cart. Error:', e);
    }
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContext;
