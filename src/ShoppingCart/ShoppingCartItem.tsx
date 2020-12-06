import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';

import { Button, ProductInfo } from '../common/components';
import ShoppingCartContext from './ShoppingCartContext';
import { IProduct } from '../Product/ProductService';

type OnRemoveClickType = (item: IProduct) => Promise<void>;

const CartItemRow = styled('li')({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
});

const ShoppingCartItem = ({ item }: { item: IProduct }) => {
  const { removeFromCart } = useContext(ShoppingCartContext);
  const [isRemoveLoading, setIsRemoveLoading] = useState(false);

  const onRemoveClick: OnRemoveClickType = async (itemToRemove) => {
    try {
      setIsRemoveLoading(true);
      await removeFromCart(itemToRemove);
    } catch (e) {
      setIsRemoveLoading(false);
    }
  };
  return (
    <CartItemRow>
      <ProductInfo product={item} noDesc />
      <Button disabled={isRemoveLoading} onClick={() => onRemoveClick(item)}>
        Remov{isRemoveLoading ? 'ing' : 'e'} item
      </Button>
    </CartItemRow>
  );
};

export default ShoppingCartItem;
