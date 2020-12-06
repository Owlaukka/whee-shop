import React from 'react';
import styled from '@emotion/styled';

import { IProduct } from './ProductService';
import ProductItemCartSection from './ProductItemCartSection';
import { ProductInfo } from '../common/components';
import { MEDIA_QUERIES } from '../common/constants/breakpoints';

interface Props {
  product: IProduct;
}

const ItemContainer = styled('li')({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  [MEDIA_QUERIES.tablet]: {
    justifyContent: 'center',
  },
});

const ProductItem = ({ product }: Props) => (
  <ItemContainer>
    <ProductInfo product={product} />
    <ProductItemCartSection product={product} />
  </ItemContainer>
);

export default ProductItem;
