import React, { useContext, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import ShoppingCartContext from './ShoppingCartContext';
import { Button } from '../common/components';
import ShoppingCartItem from './ShoppingCartItem';
import formatCurrency from '../common/helpers/formatCurrency';
import { ITheme } from '../theme';
import { MEDIA_QUERIES } from '../common/constants/breakpoints';

type OnClearCartClickType = () => Promise<void>;

const PageTitle = styled('h1')(({ theme }: { theme?: ITheme }) => ({
  margin: `${theme!.sizes.gutter}`,
}));

const CartItemList = styled('ul')(({ theme }: { theme?: ITheme }) => ({
  margin: 0,
  padding: `2rem ${theme!.sizes.gutter}`,
  listStyle: 'none',
  '> :not(:last-child)': {
    marginBottom: '2rem',
    [MEDIA_QUERIES.tablet]: {
      marginBottom: '4rem',
    },
  },
}));

const NoItems = styled('span')({
  fontWeight: 'bold',
});

const SummaryRow = styled('div')(({ theme }: { theme?: ITheme }) => ({
  margin: `${theme!.sizes.gutter}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
}));

const TotalPrice = styled('div')({
  fontSize: '1.3rem',
});

const SummaryButtons = styled('div')(({ theme }: { theme?: ITheme }) => ({
  display: 'flex',
  '> *': {
    ':first-of-type': {
      marginLeft: 0,
    },
    ':last-of-type': {
      marginRight: 0,
    },
    margin: theme!.sizes.gutter,
  },
}));

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageTitle>Shopping Cart</PageTitle>
      <CartItemList>
        {cartItems.length === 0 && <NoItems>No items in cart</NoItems>}
        {cartItems.map((item) => (
          <ShoppingCartItem key={item.id} item={item} />
        ))}
      </CartItemList>
      <SummaryRow>
        <TotalPrice>
          Total price:{' '}
          {formatCurrency(
            cartItems.reduce(
              (acc: number, item: { price: number }) => acc + item.price,
              0
            )
          )}
        </TotalPrice>
        <SummaryButtons>
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
        </SummaryButtons>
      </SummaryRow>
    </>
  );
};

export default ShoppingCartView;
