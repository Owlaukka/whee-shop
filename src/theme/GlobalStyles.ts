import { normalize } from 'polished';
import theme from '.';

const GlobalStyles = {
  ...normalize()[0],
  '*': {
    color: theme.colors.text,
  },
  'h1, h2, h3, h4': {
    color: theme.colors.heading,
  },
};

export default GlobalStyles;
