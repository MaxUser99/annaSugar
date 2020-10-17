import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Tab from './tab';
import Container from '../container/container';

const TabMenu = ({ tabs }) => (
  <Menu justifyContent='center' alignItems='center' fullWidth>
    {
      tabs.map(({ title, href }) => (
        <Tab key={href} href={href}>
          {title}
        </Tab>
      ))
    }
  </Menu>
);

const Menu = styled(Container)``;

TabMenu.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    href: PropTypes.string
  }))
};

export default TabMenu;
