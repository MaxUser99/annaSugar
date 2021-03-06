import React from 'react';
import styled from 'styled-components';
import { Link as BrowserLink } from 'gatsby';
import PropTypes from 'prop-types';
import Container from '../container/container';
import zoomIcon from '../../assets/icons/zoom.svg';

const Review = ({ review: { title, image, text } }) => (
  <StyledContainer direction='column' fullWidth>
    <ImageWrapper fullWidth alignItems='center' justifyContent='center'>
      <ZoomBtn>
        <Image src={zoomIcon} alt='' />
      </ZoomBtn>
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
  background-color ${({ theme }) => theme.color.darkBeige};
  position: relative;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Title = styled.h3`
  font-family: "Cormorant Infant";
  font-weight: bold;
  font-size: 32px;
  line-height: 32px;
  color: ${({ theme }) => theme.text.header};
  margin: 10px 0 8px;
`;

const Text = styled.p`
  font-style: italic;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.text.lighter};
`;

const Link = styled(BrowserLink)`
  margin-top: auto;
  padding-top: 29px;
  font-size: 14px;
  line-height: 14px;
  color: ${({ theme }) => theme.color.black};
`;

const ZoomBtn = styled.button`
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  border-radius: 50%;
  background: transparent;
  position: absolute;
  cursor: pointer;
  width: 40px;
  height: 40px;
  transition: 0.3s;
  &:hover {
    background: #aaaaaa70;
    transform: scale(1.2);
  }
`;

Review.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string
  })
};

export default Review;
