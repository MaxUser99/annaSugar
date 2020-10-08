import React from 'react';
import styled from 'styled-components';
import Container from '../components/container/container';
import ContentWrapper from '../components/contentWrapper/contentWrapper';

const Admin = () => {
  return (
    <StyledContainer>
      <ContentWrapper>
        hello admin
      </ContentWrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.beige};
`;

export default Admin;
