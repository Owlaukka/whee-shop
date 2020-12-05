import { IProduct } from '../Product/ProductService';

/**
 * These methods essential mock server communication which would very likely
 * happen in a real app, whether it's to check availavility and "reserve"
 * items or maintain a server-based shopping cart for a more thorough persistency.
 */

type AddToCartRequestType = (product: IProduct) => Promise<IProduct>;

type RemoveFromCartRequestType = (product: IProduct) => Promise<void>;
type ClearCartRequestType = () => Promise<void>;

export const addToCartRequest: AddToCartRequestType = (product) =>
  new Promise((resolve) => setTimeout(() => resolve(product), 500));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const removeFromCartRequest: RemoveFromCartRequestType = (product) =>
  new Promise((resolve) => setTimeout(() => resolve(), 500));

export const clearCartRequest: ClearCartRequestType = () =>
  new Promise((resolve) => setTimeout(() => resolve(), 500));
