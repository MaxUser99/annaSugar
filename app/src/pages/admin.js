import React from 'react';
import { Router } from '@reach/router';
import styled from 'styled-components';
import AdminHome from '../components/admin/index';
import Login from '../components/admin/login';
import PrivateRoute from '../components/PrivateRoute/privateRoute';

const Admin = () => (
  <StyledRouter basepath='/admin'>
    <Login path='/login' />
    <PrivateRoute path='/' component={AdminHome} />
  </StyledRouter>
);

const StyledRouter = styled(Router)`
  width: 100%;
  background-color: ${({ theme }) => theme.color.beige};
`;

export default Admin;
