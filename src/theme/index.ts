import colors, { IColors } from './colors';
import sizes, { ISizes } from './sizes';

export interface ITheme {
  colors: IColors;
  sizes: ISizes;
}

const theme: ITheme = {
  colors,
  sizes,
};

export default theme;
