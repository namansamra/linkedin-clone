import { extendTheme } from '@chakra-ui/react';
// import { mode } from '@chakra-ui/theme-tools'

const config = {
  //   initialColorMode: 'light',
};

const styles = {
  // global: (props) => ({
  //   body: {
  //     //   bg: mode("gray.100", "#1b1c1d")(props),
  //   },
  // }),
};

const colors = {
  highlight: {
    standard: '#336CFB',
    hover: '#0052CC',
    active: '#4D6BE0',
  },
  brandBlue: {
    100: '#F1F4FF',
    200: '#D8E0FF',
    300: '#BFCCFF',
    400: '#A6B8FF',
    500: '#8DA5FF',
    600: '#7491FF',
    700: '#4D6BE0',
    800: '#2A47B8',
    900: '#102A8F',
    1000: '#001566',
  },
  statusStates: {
    new: '#E6E6F2',
    success: '#CDFFCD',
    failed: '#FFE0E0',
    inProgress: '#FFECCC',
  },
  mainBlue: '#0052CC',
  headingTextColor: '#2E2E2E',
  generalTextColor: '#2A2A48',
  brandBg: '#E5E5E5',
};

const fonts = {
  body: "'Inter', sans-serif",
};
const shadows = {
  outline: '0 !important',
};
const customTheme = extendTheme({ colors, config, styles, fonts, shadows });

export default customTheme;

export const scrollbarCss = {
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#2f3136',
    width: '10px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'brandGray.darker',
    borderRadius: '18px',
  },
};
