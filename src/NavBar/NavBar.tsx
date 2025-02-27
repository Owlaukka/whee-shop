import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { FaShoppingCart } from 'react-icons/fa';

import { ITheme } from '../theme';
import ShoppingCartContext from '../ShoppingCart/ShoppingCartContext';
import { MEDIA_QUERIES } from '../common/constants/breakpoints';

// STYLED COMPONENTS ===================================================
const Nav = styled('nav')<any>(({ theme }: { theme: ITheme }) => ({
  backgroundColor: theme.colors.nav,
  height: `clamp(3.5rem, 28vw, ${theme.sizes.navBarHeight})`,
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
  margin: '0 1.7rem',
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
  paddingLeft: 0,
  a: {
    textDecoration: 'none',
  },
});

const Logo = styled.h1({
  margin: 0,
  fontFamily: "'Pacifico', cursive",
  fontWeight: 'normal',
  fontSize: 'clamp(2.5rem, 20vw, 3.5rem)',
});

const TaglineNavItem = styled(NavItem)({
  fontStyle: 'italic',
  [MEDIA_QUERIES.tablet]: {
    display: 'none',
  },
});

const CartNavItem = styled(NavItem)({
  marginLeft: 'auto',
  fontStyle: 'italic',
  [MEDIA_QUERIES.smallPhone]: {
    display: 'none',
  },
});

const ToCartNavItem = styled(NavItem)(
  ({ theme, itemCount }: { theme?: ITheme; itemCount: number }) => ({
    display: 'flex',
    backgroundColor: 'black',
    padding: theme!.sizes.gutter,
    borderRadius: '50%',
    fontSize: '1.5rem',
    transition: 'transform 200ms',
    position: 'relative',
    '&:hover': {
      backgroundColor: theme!.colors.text,
      transform: 'scale(1.1)',
    },
    '&:active': {
      transform: 'scale(0.8)',
    },
    path: {
      // icon color
      color: '#FFF',
    },
    ...(itemCount > 0 && {
      '&:before': {
        content: `"${itemCount}"`,
        backgroundColor: theme?.colors.accent,
        position: 'absolute',
        bottom: itemCount > 9 ? '-0.5rem' : '-0.1rem',
        left: itemCount > 9 ? '-0.5rem' : '-0.1rem',
        borderRadius: '50%',
        height: itemCount > 9 ? '1.4rem' : '1rem',
        width: itemCount > 9 ? '1.4rem' : '1rem',
        lineHeight: itemCount > 9 ? '1rem' : '0.6rem',
        textAlign: 'center',
        fontSize: '1.1rem',
      },
    }),
  })
);

const ToCartLink = styled(Link)({
  [MEDIA_QUERIES.smallPhone]: {
    marginLeft: 'auto',
  },
});

const CartIcon = styled(FaShoppingCart)();
// ====================================================================

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
        <ToCartLink aria-label="Shopping cart" to="/cart">
          <ToCartNavItem id="Cart" itemCount={cartItems.length}>
            <CartIcon />
          </ToCartNavItem>
        </ToCartLink>
      </NavItemList>
    </Nav>
  );
};

export default NavBar;
