import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../header/header';
import Footer from '../footer/footer';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <Header />
        { children}
      <Footer />
    </Container>
  </ThemeProvider>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.color.beige};
  // background-color: beige;
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
