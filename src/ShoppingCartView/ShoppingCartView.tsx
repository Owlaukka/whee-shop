import React, { useContext } from 'react';
import styled from '@emotion/styled';
import ShoppingCartContext from './ShoppingCartContext';

const CartItemList = styled('ul')({
  margin: 0,
  padding: '2rem 0.5rem',
  listStyle: 'none',
  '> :not(:last-child)': {
    marginBottom: '2rem',
  },
});

const ShoppingCartView = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  return (
    <>
      <h1>Cart</h1>
      <CartItemList>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </CartItemList>
      <div>
        Total price:{' '}
        {cartItems
          .reduce((acc: number, item: { price: number }) => acc + item.price, 0)
          .toLocaleString(undefined, {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          })}
      </div>
    </>
  );
};

export default ShoppingCartView;
