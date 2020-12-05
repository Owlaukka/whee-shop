import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import ShoppingCartContext from './ShoppingCartContext';
import { Button } from '../common/components';
import ShoppingCartItem from './ShoppingCartItem';
import formatCurrency from '../common/helpers/formatCurrency';

type OnClearCartClickType = () => Promise<void>;

const CartItemList = styled('ul')({
  margin: 0,
  padding: '2rem 0.5rem',
  listStyle: 'none',
  '> :not(:last-child)': {
    marginBottom: '2rem',
  },
});

const ShoppingCartView = () => {
  const { cartItems, clearCart } = useContext(ShoppingCartContext);
  const [isClearLoading, setIsClearLoading] = useState(false);

  const onClearCartClick: OnClearCartClickType = async () => {
    try {
      setIsClearLoading(true);
      await clearCart();
    } finally {
      setIsClearLoading(false);
    }
  };

  return (
    <>
      <h1>Cart</h1>
      <CartItemList>
        {cartItems.length === 0 && <b>No items in cart</b>}
        {cartItems.map((item) => (
          <ShoppingCartItem key={item.id} item={item} />
        ))}
      </CartItemList>
      <div>
        Total price:{' '}
        {formatCurrency(
          cartItems.reduce(
            (acc: number, item: { price: number }) => acc + item.price,
            0
          )
        )}
        {cartItems.length !== 0 && (
          <Button onClick={onClearCartClick}>
            Clear{isClearLoading ? 'ing' : ''} cart
          </Button>
        )}
        <Button
          disabled={cartItems.length < 1}
          // eslint-disable-next-line no-alert
          onClick={() => alert('Checkout not implemented at this time.')}
        >
          Checkout
        </Button>
      </div>
    </>
  );
};

export default ShoppingCartView;
