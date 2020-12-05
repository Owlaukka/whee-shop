import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { ITheme } from '../theme';
import ShoppingCartContext from '../ShoppingCart/ShoppingCartContext';

const Nav = styled('nav')<any>(({ theme }: { theme: ITheme }) => ({
  backgroundColor: theme.colors.nav,
  height: theme.sizes.navBarHeight,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  '&:after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    bottom: `-${theme.sizes.navBarTeethHeight}`,
    width: '100%',
    height: theme.sizes.navBarTeethHeight,
    backgroundImage: `
      linear-gradient(135deg, ${theme.colors.nav} 50%, transparent 50%),
      linear-gradient(-135deg, ${theme.colors.nav} 50%, transparent 50%)
    `,
    backgroundSize: theme.sizes.navBarTeethHeight,
    backgroundRepeat: 'repeat-x',
  },
}));

const NavItemList = styled.ul({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});

const NavItem = styled.li({
  padding: '1rem',
});

const LogoNavItem = styled(NavItem)({
  a: {
    textDecoration: 'none',
  },
});

const Logo = styled.h1({
  margin: 0,
});

const TaglineNavItem = styled(NavItem)();

const CartNavItem = styled(NavItem)({
  marginLeft: 'auto',
});

const resolveCartItemCountText = (cartCount: number): string => {
  if (cartCount === 0) return 'No items in cart';
  return cartCount === 1 ? '1 item in cart' : `${cartCount} items in cart`;
};

const NavBar = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  return (
    <Nav>
      <NavItemList>
        <LogoNavItem>
          <Link to="/">
            <Logo>whee</Logo>
          </Link>
        </LogoNavItem>
        <TaglineNavItem>
          The most definitive shape store in the world
        </TaglineNavItem>
        <CartNavItem>{resolveCartItemCountText(cartItems.length)}</CartNavItem>
        <Link to="/cart">Cart</Link>
      </NavItemList>
    </Nav>
  );
};

export default NavBar;
