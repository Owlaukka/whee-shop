export interface IColors {
  nav: string;
  accent: string;
  heading: string;
  text: string;
  button: {
    bg: string;
    bgHover: string;
    disabledColor: string;
    disabledBg: string;
  };
}

const colors: IColors = {
  nav: '#e9e9e9',
  accent: '#f05795',
  heading: '#000',
  text: '#4d4d4d',
  button: {
    bg: '#fff',
    bgHover: '#e9e9e9',
    disabledColor: '#888888',
    disabledBg: '#eeeeee',
  },
};

export default colors;
