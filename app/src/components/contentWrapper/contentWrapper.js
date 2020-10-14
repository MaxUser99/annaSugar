import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from '../container/container';

// const WIDTHS = {
//   default: '952px',
//   wide: '1196px',
//   none: 'none'
// }

const PADDINGS = {
  default: '0px 244px 0',
  wide: '0px 136px 0px 98px',
  none: ''
}

const ContentWrapper = (props) => (
  <Wrapper {...props} fullWidth/>
);
  // max-width: ${({ maxWidth = 'default' }) => WIDTHS[maxWidth]};

const Wrapper = styled(Container)`
  max-width: 1440px;
  padding: ${({ maxWidth = 'default' }) => PADDINGS[maxWidth]};
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
`;

ContentWrapper.propTypes = {
  maxWidth: PropTypes.oneOf([ 'wide', 'default', 'none' ]),
}

export default ContentWrapper;
