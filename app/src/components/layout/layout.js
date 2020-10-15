import React from 'react';
import styled from 'styled-components';
import Header from '../header/header';
import Footer from '../footer/footer';
import Container from '../container/container';
import ImageModal from '../ImageModal/imageModal';

const Layout = ({ children }) => (
  <StyledContainer direction='column'>
    <ImageModal />
    <Header />
      { children}
    <Footer />
  </StyledContainer>
);

const StyledContainer = styled(Container)`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.color.beige};
  padding-bottom: 385px;
  position: relative;
  box-sizing: border-box;
`;

export default Layout;
