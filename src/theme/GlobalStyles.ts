import { normalize } from 'polished';
import { css } from '@emotion/react';
import theme from '.';

// TODO: change these imports to external urls into local imports
const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
  ${normalize()}

  * {
    color: ${theme.colors.text};
    font-family: 'Playfair Display', serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${theme.colors.heading};
  }
`;

export default GlobalStyles;
