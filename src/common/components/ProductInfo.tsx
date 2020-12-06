import styled from '@emotion/styled';
import React from 'react';
import { IProduct } from 'src/Product/ProductService';
import { ITheme } from 'src/theme';

interface Props {
  product: IProduct;
}

const ProductInfo = styled('div')({
  maxWidth: '55%',
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: 'auto auto',
  gridTemplateRows: '1fr 1fr',
  gridTemplateAreas: `
    "product-icon product-name"
    "product-icon product-description"
  `,
});

const ProductIcon = styled('div')(({ theme }: { theme?: ITheme }) => ({
  gridArea: 'product-icon',
  width: '7rem',
  height: '7rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme!.colors.accent,
}));

const ProductName = styled('h1')({
  margin: 0,
  gridArea: 'product-name',
  alignSelf: 'end',
  fontStyle: 'italic',
});

const ProductDescription = styled('p')({
  margin: 0,
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
