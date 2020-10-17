import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Tab = ({ children, href }) => (
  <TabItem as={Link} activeClassName='active' to={`../${href}`}>
    { children }
  </TabItem>
);

const TabItem = styled(Link)`
  border-radius: 0;
  box-shadow: none;
  color: black;
  font-family: "Cormorant Infant";
  font-weight: bold;
  font-size: 24px;
  line-height: 64px;
  text-align: center;
  background-color: transparent;
  width: 100%;
  text-decoration: none;
  transition: 0.3s;
  color: ${({ theme }) => theme.text.mutted};
  &.active {
    color: ${({ theme }) => theme.text.header};
    background-color: ${({ theme }) => theme.color.beige};
  }
  &:hover {
    background-color: #E5E3DC;
    color: ${({ theme }) => theme.text.header};
  }
`;

export default Tab;
