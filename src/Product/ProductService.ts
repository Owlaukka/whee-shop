const mockProducts: IProduct[] = [
  {
    id: 1,
    name: 'Circle',
    description: "Perfect choice when you don't need any corners.",
    price: 999,
    // imageSrc: 'base64 string or address to the product image if it comes from a separate service',
  },
  {
    id: 2,
    name: 'Rectangle',
    description: "For once, it's a great idea to think inside the box.",
    price: 899,
  },
  {
    id: 3,
    name: 'Triangle',
    description: 'A true classic with three elegant corners.',
    price: 1009,
  },
];

export interface IProduct {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageSrc?: string;
}

type FetchProducts = () => Promise<IProduct[]>;

// Fakeish product fetching from backend or cache or whatever is needed.
// Point being that it returns a promise that resolves into a list of products.
export const fetchProducts: FetchProducts = () =>
  new Promise((resolve) => setTimeout(() => resolve(mockProducts), 500));
