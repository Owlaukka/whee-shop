import React from 'react';
import styled from '@emotion/styled';

import { IProduct } from './ProductService';
import ProductItemCartSection from './ProductItemCartSection';
import { ProductInfo } from '../common/components';

interface Props {
  product: IProduct;
}

const ItemContainer = styled('li')({
  display: 'flex',
  alignItems: 'flex-end',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
});

const ProductItem = ({ product }: Props) => (
  <ItemContainer>
    <ProductInfo product={product} />
    <ProductItemCartSection product={product} />
  </ItemContainer>
);

export default ProductItem;
