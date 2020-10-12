import React from 'react';
import styled from 'styled-components';
import { Link as BrowserLink } from 'gatsby';
import PropTypes from 'prop-types';
import Container from '../container/container';

const Review = ({ review: { title, image, text } }) => (
  <StyledContainer direction='column' fullWidth>
    <ImageWrapper fullWidth alignItems='center' justifyContent='center'>
      <Image src={image} alt='' />
    </ImageWrapper>
    <Title>{title}</Title>
    <Text>{text}</Text>
    <Link>Read &gt;</Link>
  </StyledContainer>
);

const StyledContainer = styled(Container)`
  &:not(:last-child) {
    margin-right: 26px;
  }
`;

const ImageWrapper = styled(Container)`
  max-height: 200px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Title = styled.h3``;

const Text = styled.p``;

const Link = styled(BrowserLink)``;

Review.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string
  })
};

export default Review;
