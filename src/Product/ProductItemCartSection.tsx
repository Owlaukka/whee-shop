import styled from '@emotion/styled';
import React, { useContext, useState } from 'react';

import { Button } from '../common/components';
import formatCurrency from '../common/helpers/formatCurrency';
import { IProduct } from './ProductService';
import ShoppingCartContext from '../ShoppingCart/ShoppingCartContext';
import { ITheme } from '../theme';

interface Props {
  product: IProduct;
}

const CartSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
});

const ProductPrice = styled('div')(({ theme }: { theme?: ITheme }) => ({
  fontSize: '1.7rem',
  margin: theme!.sizes.gutter,
  marginBottom: 0,
}));

// Loading-state should be displayed in a more elegant way in a production-grade app.
const resolveCartButtonText = (
  isProductInCart: boolean,
  isLoading: boolean
): string =>
  isProductInCart
    ? `Remov${isLoading ? 'ing' : 'e'} from cart`
    : `Add${isLoading ? 'ing' : ''} to cart`;

const ProductInfoComponent = ({ product }: Props) => {
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
    <CartSection>
      <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
      <Button disabled={isLoading} onClick={onCartClick}>
        {resolveCartButtonText(isProductInCart, isLoading).toUpperCase()}
      </Button>
    </CartSection>
  );
};

export default ProductInfoComponent;
