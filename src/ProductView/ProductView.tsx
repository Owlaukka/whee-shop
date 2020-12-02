import React from 'react';
import styled from '@emotion/styled';

import ProductItem from './ProductItem';

const ProductList = styled('ul')({
  margin: 0,
  padding: '2rem 0.5rem',
  listStyle: 'none',
  '> :not(:last-child)': {
    marginBottom: '2rem',
  },
});

const ProductView = () => {
  const products = [
    {
      id: 1,
      name: 'Circle',
      description: "Perfect choice when you don't need any corners.",
      price: 999,
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
  return (
    <ProductList>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ProductList>
  );
};

export default ProductView;
