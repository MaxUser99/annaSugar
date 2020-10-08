import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import 'normalize.css';
import 'fontsource-cormorant-infant';
import 'fontsource-montserrat-alternates/400.css';

export const theme =  {
  color: { 
    beige: '#E5E3DC',
    darkBeige: '#DAD8D1',
    black: '#222222',
    muted: '#00000099',
  },
  text: {
    white: '#FFFFFF',
    muted: '#777672',
    default: '#000000',
    header: '#1A1B1E',
    lighter: '#1F1F1F',
    lighter2: '#0A0A0A'
  }
};

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Montserrat Alternates";
  }
`;

export const ThemeWrapper = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </>
);
