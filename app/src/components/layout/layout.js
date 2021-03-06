import React from 'react';
import styled from 'styled-components';
import Header from '../header/header';
import Footer from '../footer/footer';
import Container from '../container/container';

const Layout = ({ children }) => (
  <StyledContainer direction='column'>
    <Header />
      { children}
    <Footer />
  </StyledContainer>
);

const StyledContainer = styled(Container)`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.color.beige};
`;

export default Layout;
