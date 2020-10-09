import React from 'react';
import { navigate } from 'gatsby';
import { connect } from 'react-redux';

const PrivateRoute = ({
  component: Component,
  isLoggedIn,
  ...rest
}) => {
  if (!isLoggedIn) {
    navigate('/admin/login');
    return null
  }

  return <Component {...rest} />
}

export default connect(
  ({ userData: { user }}) => ({
    isLoggedIn: !!user
  }),
  null
)(PrivateRoute);