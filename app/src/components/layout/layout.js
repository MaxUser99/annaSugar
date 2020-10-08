import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from '../header/header';
import Footer from '../footer/footer';
import Container from '../container/container';
import 'normalize.css';
import 'fontsource-cormorant-infant';
import 'fontsource-montserrat-alternates/400.css';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Montserrat Alternates";
  }
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <StyledContainer direction='column'>
        <Header />
          { children}
        <Footer />
      </StyledContainer>
    </ThemeProvider>
  </>
);

const StyledContainer = styled(Container)`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.color.beige};
`;

const theme = {
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

export default Layout;
