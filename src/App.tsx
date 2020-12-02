import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

import ProductView from './ProductView/ProductView';
import NavBar from './NavBar/NavBar';
import GlobalTheme, { ITheme } from './theme';
import GlobalStyles from './theme/GlobalStyles';
import { ShoppingCartContextProvider } from './ShoppingCartContext';

const ViewContainer = styled<any>('main')(({ theme }: { theme: ITheme }) => ({
  marginTop: `calc(${theme.sizes.navBarHeight} + ${theme.sizes.navBarTeethHeight})`,
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '50rem',
}));

const App = () => (
  <ThemeProvider theme={GlobalTheme}>
    <Global styles={GlobalStyles} />
    <ShoppingCartContextProvider>
      <Router>
        <NavBar />
        <ViewContainer>
          <Switch>
            <Route path="/products">
              <ProductView />
            </Route>
            <Route path="/cart">
              <h1>Shopping cart</h1>
            </Route>
            <Route exact path="/">
              <ProductView />
            </Route>
          </Switch>
        </ViewContainer>
      </Router>
    </ShoppingCartContextProvider>
  </ThemeProvider>
);

export default App;
