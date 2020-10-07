import React from 'react';
import styled from 'styled-components';
import { Link as BrowserLink } from 'gatsby';

const Link = (props) => (
  <StyledLink {...props} />
);

const StyledLink = styled(BrowserLink)`
  margin: 0 0.625rem;
  text-decoration: none;
  text-outline: none;
  color: ${({ theme }) => theme.text.lighter2}
`;

export default Link;
