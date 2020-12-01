import React from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

import ProductView from './ProductView/ProductView';
import NavBar from './NavBar/NavBar';
import GlobalTheme, { ITheme } from './theme';
import GlobalStyles from './theme/GlobalStyles';

const ViewContainer = styled<any>('main')(({ theme }: { theme: ITheme }) => ({
  marginTop: `calc(${theme.sizes.navBarHeight} + ${theme.sizes.navBarTeethHeight})`,
}));

const App = () => (
  <ThemeProvider theme={GlobalTheme}>
    <Global styles={GlobalStyles} />
    <NavBar />
    <ViewContainer>
      <ProductView />
    </ViewContainer>
  </ThemeProvider>
);

export default App;
