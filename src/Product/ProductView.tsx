import React from 'react';
import styled from '@emotion/styled';

import ProductItem from './ProductItem';
import useFetchData from '../common/useFetchData';
import { fetchProducts, IProduct } from './ProductService';

const ProductList = styled('ul')({
  margin: 0,
  padding: '3rem 0.5rem',
  listStyle: 'none',
  '> :not(:last-child)': {
    marginBottom: '2rem',
  },
});

const ProductView = () => {
  const { data: products, isLoading } = useFetchData<IProduct[]>(fetchProducts);

  return (
    <ProductList>
      {isLoading && <li>Loading...</li>}
      {!isLoading &&
        products &&
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
    </ProductList>
  );
};

export default ProductView;
