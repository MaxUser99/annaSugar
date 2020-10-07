import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PADDINGS = {
  wide: '15.2%',
  narrow: '5.125%',
  none: '0',
}

const ContentWrapper = ({
  padding = 'wide',
  alignItems = 'normal',
  justifyContent = 'normal',
  direction = 'row',
  children
}) => (
  <Wrapper
    padding={padding}
    alignItems={alignItems}
    justifyContent={justifyContent}
    direction={direction}>
      { children }
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 ${({ padding }) => PADDINGS[padding]};
  display: flex;
  align-items: center;
`;

ContentWrapper.propTypes = {
  padding: PropTypes.oneOf([ 'wide', 'narrow' ]),
  alignItems: PropTypes.oneOf([ 'baseline', 'center', 'flex-end', 'flex-start' ]),
  justifyContent: PropTypes.oneOf([ 'baseline', 'center', 'flex-end', 'flex-start', 'space-around', 'space-between']),
  direction: PropTypes.oneOf([ 'row', 'column' ]),
  children: PropTypes.any
}

export default ContentWrapper;
