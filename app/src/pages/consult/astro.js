import React from 'react';
import styled from 'styled-components';
import { consultLinks } from '../../constants/links';
import Layout from '../../components/layout/layout';
import ContentWrapper from '../../components/contentWrapper/contentWrapper';
import Container from '../../components/container/container';

const Astro = () => (
  <Layout title='Консультации' tabs={consultLinks}>
    <MainBlock>
      {/* <ImageWrapper>
        <img src={} alt='' />
      </ImageWrapper> */}

    </MainBlock>
  </Layout>
);

const MainBlock = styled(Container)``;

export default Astro;
