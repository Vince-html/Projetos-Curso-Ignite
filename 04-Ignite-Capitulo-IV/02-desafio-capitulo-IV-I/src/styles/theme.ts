import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    dark: {
      "black": "#000000",
      "text": "#47585B",
      "info": "#999999",
      "info500": "#CECECE",
      "background": "#FFFFFF",
    },
       light: {
      "white": "#FFFFFF",
      "text": "#F5F8FA",
      "info": "#DADADA",
      "background": "#1D1D1D",
    },
    highlight: {
      "900": "#FFBA08",
      "500": "#FFDA79",
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'light.white',
        color: 'dark.text',
       
        margin: '0 auto',
      },
    },
  },
})