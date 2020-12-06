import styled from '@emotion/styled';
import React from 'react';
import { IProduct } from 'src/Product/ProductService';
import { ITheme } from 'src/theme';
import { MEDIA_QUERIES } from '../constants/breakpoints';

interface Props {
  product: IProduct;
}

const ProductInfo = styled('div')({
  maxWidth: '55%',
  width: '20rem',
  display: 'grid',
  gridTemplateAreas: `
    "product-icon product-name"
    "product-icon product-description"
  `,
  [MEDIA_QUERIES.tablet]: {
    maxWidth: '100%',
    gridTemplateAreas: `
      "product-name"
      "product-icon"
      "product-description"
    `,
  },
  [MEDIA_QUERIES.smallPhone]: {
    justifyItems: 'center',
  },
});

const ProductIcon = styled('div')(({ theme }: { theme?: ITheme }) => ({
  gridArea: 'product-icon',
  margin: '0.3rem',
  width: '7rem',
  height: '7rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme!.colors.accent,
  border: `1px solid ${theme!.colors.nav}`,
  borderRadius: '3px',
}));

const ProductName = styled('h1')({
  margin: '0.3rem',
  gridArea: 'product-name',
  alignSelf: 'end',
  fontStyle: 'italic',
});

const ProductDescription = styled('p')({
  margin: '0.3rem',
  gridArea: 'product-description',
});

const ProductInfoComponent = ({ product }: Props) => (
  <ProductInfo>
    <ProductIcon>Icon</ProductIcon>
    <ProductName>{product.name}</ProductName>
    <ProductDescription>{product.description}</ProductDescription>
  </ProductInfo>
);

export default ProductInfoComponent;
