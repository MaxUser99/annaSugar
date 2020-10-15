import React from 'react';
import styled from 'styled-components';
import Container from '../container/container';

const ReviewLayout = ({review: { title, image, text }}) => (
  <>
    <Title>{title}</Title>
    <ImageContainer justifyContent='center' fullWidth>
      <img src={image} alt='' />
    </ImageContainer>
    <Text>{text}</Text>
  </>
);

const Title = styled.h2`
  width: 100%;
  font-family: "Cormorant Infant";
  font-weight: bold;
  font-size: 48px;
  line-height: 48px;
  color: ${({ theme }) => theme.text.header};
  margin: 16px 0 20px;
`;

const ImageContainer = styled(Container)`
  max-height: 512px;
  margin: 32px 0;
  overflow: hidden;
`;

const Text = styled.p`
  width: 100%;
`;

export default ReviewLayout;
