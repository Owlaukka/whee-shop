import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';

import { ITheme } from 'src/theme';
import ShoppingCartContext from '../ShoppingCart/ShoppingCartContext';
import { IProduct } from './ProductService';
import { Button } from '../common/components';
import formatCurrency from '../common/helpers/formatCurrency';

interface Props {
  product: IProduct;
}

const ItemContainer = styled('li')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

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

const CartSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
});

const ProductPrice = styled('div')({
  fontSize: '1.7rem',
  marginBottom: '0.7rem',
});

const formatPrice = (price: number) => formatCurrency(price);

const resolveCartButtonText = (
  isProductInCart: boolean,
  isLoading: boolean
): string =>
  isProductInCart
    ? `Remov${isLoading ? 'ing' : 'e'} from cart`
    : `Add${isLoading ? 'ing' : ''} to cart`;

const ProductItem = ({ product }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { cartItems, addToCart, removeFromCart } = useContext(
    ShoppingCartContext
  );

  const isProductInCart = cartItems.map((item) => item.id).includes(product.id);

  const onCartClick = async () => {
    const clickAction = isProductInCart ? removeFromCart : addToCart;
    try {
      setIsLoading(true);
      await clickAction(product);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ItemContainer>
      <ProductInfo>
        <ProductIcon>Icon</ProductIcon>
        <ProductName>{product.name}</ProductName>
        <ProductDescription>{product.description}</ProductDescription>
      </ProductInfo>

      <CartSection>
        <ProductPrice>{formatPrice(product.price)}</ProductPrice>
        <Button disabled={isLoading} onClick={onCartClick}>
          {resolveCartButtonText(isProductInCart, isLoading).toUpperCase()}
        </Button>
      </CartSection>
    </ItemContainer>
  );
};

export default ProductItem;
