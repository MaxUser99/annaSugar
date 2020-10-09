import React from 'react';
import { Router } from '@reach/router';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Container from '../components/container/container';
import ContentWrapper from '../components/contentWrapper/contentWrapper';
import AdminHome from '../components/admin/index';
import Login from '../components/admin/login';
import PrivateRoute from '../components/PrivateRoute/privateRoute';

const Admin = () => {
  return (
    <StyledContainer>
      <ContentWrapper justifyContent='center'>
        <Router basepath='/admin'>
          <Login path='/login' />
          <PrivateRoute path='/' component={AdminHome} />
        </Router>
      </ContentWrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.beige};
`;

export default connect(
  ({ userData: { user }}) => ({
    isLoggedIn: !!user
  }),
  null
)(Admin);
