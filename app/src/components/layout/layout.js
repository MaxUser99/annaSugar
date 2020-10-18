import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../header/header';
import Footer from '../footer/footer';
import Container from '../container/container';
import ImageModal from '../ImageModal/imageModal';

function useFooterHeight() {
  const [ height, setHeight ] = useState();

  useEffect(() => {
    function calcHeight() {
      const footer = document.getElementById('footer');
      if (!footer) return;
      const { height: footerHeight } = footer.getBoundingClientRect();
      setHeight(footerHeight);
    }

    calcHeight();

    window.addEventListener('resize', calcHeight);
    return () => {
      window.removeEventListener('resize', calcHeight);
    }
  }, []);

  return height;
}

const Layout = ({ className, children }) => {
  const footerHeight = useFooterHeight();

  return (
    <StyledContainer $footerHeight={footerHeight} className={className} direction='column'>
      <ImageModal />
      <Header />
        { children}
      <Footer />
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.color.beige};
  // padding-bottom: 385px;
  padding-bottom: ${({ $footerHeight }) => $footerHeight}px;
  position: relative;
  box-sizing: border-box;
`;

export default Layout;
