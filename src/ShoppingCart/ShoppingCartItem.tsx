import React, { useContext, useState } from 'react';
import { Button } from '../common/components';
import ShoppingCartContext from './ShoppingCartContext';
import { IProduct } from '../Product/ProductService';

type OnRemoveClickType = (item: IProduct) => Promise<void>;

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
    <li>
      <h4>{item.name}</h4>
      <Button disabled={isRemoveLoading} onClick={() => onRemoveClick(item)}>
        Remov{isRemoveLoading ? 'ing' : 'e'} item
      </Button>
    </li>
  );
};

export default ShoppingCartItem;
