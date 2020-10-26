import React from 'react';
import styled from 'styled-components';
import BaseDropdown from 'react-dropdown';
import Container from '../../container/container';

import 'react-dropdown/style.css';

const Dropdown = ({
  value,
  onChange,
  options
}) => {
  console.log(value)
  return (
    <Container alignItems='center'>
      <p>{value}</p>
      <StyledDropdown
        onChange={onChange}
        options={options}
        controlClassName='control'
        placeholderClassName='placeholder'
        menuClassName='menu'
        arrowClassName='arrow'
      />
    </Container>
  );
}

const StyledDropdown = styled(BaseDropdown)`
  .control {
    background-color: transparent;
    border: none;
    padding: 0;
    :hover {
      box-shadow: none;
      cursor: pointer;
    }
  }
  .placeholder {
    display: none;
  }
  .arrow {
    position: static;
    margin-left: 10px;
  }
`;

export default Dropdown;