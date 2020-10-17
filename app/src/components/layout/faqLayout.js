import React from 'react';
import styled from 'styled-components';
import Layout from './layout';
import Container from '../container/container';
import ContentWrapper from '../contentWrapper/contentWrapper';
import TabMenu from '../tabMenu/tabMenu';

const FaqLayout = ({ title, tabs, children }) => (
  <StyledLayout>
    <HeaderBlock  fullWidth>
      <ContentWrapper direction='column' alignItems='center'>
        <PageTitle>{title}</PageTitle>
        <TabMenu tabs={tabs} />
      </ContentWrapper>
    </HeaderBlock>
    <Container fullWidth>
    <ContentWrapper direction='column' fullWidth>
      { children }
    </ContentWrapper>
    </Container>
  </StyledLayout>
);

const StyledLayout = styled(Layout)`
  & #header {
    background-color: ${({ theme }) => theme.color.darkBeige};
  }
`;

const HeaderBlock = styled(Container)`
  background-color: ${({ theme }) => theme.color.darkBeige};
`;

const PageTitle = styled.h1`
  margin: 20px 0 64px;
  font-family: Cormorant Infant;
  font-weight: bold;
  font-size: 68px;
  line-height: 68px;
  text-align: center;
  color: ${({ theme }) => theme.text.header};
`;

export default FaqLayout;
