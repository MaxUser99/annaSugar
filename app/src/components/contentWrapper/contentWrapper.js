import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from '../container/container';

const WIDTHS = {
  default: '952px',
  wide: '1196px',
  none: 'none'
}

const ContentWrapper = (props) => (
  <Wrapper {...props} fullWidth/>
);

const Wrapper = styled(Container)`
  max-width: ${({ maxWidth = 'default' }) => WIDTHS[maxWidth]};
  margin: 0 auto;
  width: 100%;
`;

ContentWrapper.propTypes = {
  maxWidth: PropTypes.oneOf([ 'wide', 'default', 'none' ]),
}

export default ContentWrapper;
