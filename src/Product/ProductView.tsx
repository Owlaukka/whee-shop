import React from 'react';
import styled from '@emotion/styled';

import ProductItem from './ProductItem';
import useFetchData from '../common/useFetchData';
import { fetchProducts, IProduct } from './ProductService';
import { ITheme } from '../theme';

const ProductList = styled('ul')(({ theme }: { theme?: ITheme }) => ({
  margin: 0,
  padding: `3rem ${theme!.sizes.gutter}`,
  listStyle: 'none',
  '> :not(:last-child)': {
    marginBottom: '2rem',
  },
}));

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
