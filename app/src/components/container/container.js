import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = (props) => (
  <StyledDiv {...props} />
);

const StyledDiv = styled.div`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  align-items: ${({ alignItems = 'baseline' }) => alignItems};
  justify-content: ${({ justifyContent = 'baseline' }) => justifyContent};  
  ${({ fullWidth }) => (fullWidth && 'width: 100%;')};
`;

Container.propTypes = {
  alignItems: PropTypes.oneOf([ 'baseline', 'center', 'flex-end', 'flex-start', 'stretch' ]),
  justifyContent: PropTypes.oneOf([ 'baseline', 'center', 'flex-end', 'flex-start', 'space-around', 'space-between']),
  direction: PropTypes.oneOf([ 'row', 'column' ]),
  fullWidth: PropTypes.bool,
  children: PropTypes.any
}

export default Container;
