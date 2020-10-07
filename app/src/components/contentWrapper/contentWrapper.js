import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from '../container/container';

const PADDINGS = {
  wide: '15.2%',
  narrow: '5.125%',
  none: '0',
}

const ContentWrapper = (props) => (
  <Wrapper {...props} fullWidth/>
);

const Wrapper = styled(Container)`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  padding: 0 ${({ padding = 'wide' }) => PADDINGS[padding]};
`;

ContentWrapper.propTypes = {
  padding: PropTypes.oneOf([ 'wide', 'narrow' ]),
}

export default ContentWrapper;
