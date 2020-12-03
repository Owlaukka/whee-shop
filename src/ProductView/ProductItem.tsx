import React, { useContext } from 'react';
import styled from '@emotion/styled';
import ShoppingCartContext from '../ShoppingCartContext';

interface Props {
  product: {
    id: string | number;
    name: string;
    description: string;
    price: number;
  };
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

const ProductIcon = styled('div')({
  gridArea: 'product-icon',
  width: '7rem',
  height: '7rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const ProductName = styled('h1')({
  margin: 0,
  gridArea: 'product-name',
  alignSelf: 'end',
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

const ProductPrice = styled('div')();

const formatPrice = (price: number) =>
  price.toLocaleString(undefined, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const resolveCartButtonText = (isProductInCart: boolean): string =>
  isProductInCart ? 'Remove from cart' : 'Add to cart';

const ProductItem = ({ product }: Props) => {
  const { cartItems, addToCart, removeFromCart } = useContext(
    ShoppingCartContext
  );

  const isProductInCart = cartItems
    .map((item: any) => item.id)
    .includes(product.id);

  const onCartClick = isProductInCart
    ? () => removeFromCart(product)
    : () => addToCart(product);

  return (
    <ItemContainer>
      <ProductInfo>
        <ProductIcon>Icon</ProductIcon>
        <ProductName>{product.name}</ProductName>
        <ProductDescription>{product.description}</ProductDescription>
      </ProductInfo>

      <CartSection>
        <ProductPrice>{formatPrice(product.price)}</ProductPrice>
        <button type="button" onClick={onCartClick}>
          {resolveCartButtonText(isProductInCart)}
        </button>
      </CartSection>
    </ItemContainer>
  );
};

export default ProductItem;
