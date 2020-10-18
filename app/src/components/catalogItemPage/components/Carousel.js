import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from '../../container/container';
import arrowLeft from '../../../assets/icons/arrow-left.svg';
import arrowRight from '../../../assets/icons/arrow-right.svg';

const MAX_ITEMS = 3;

const Carousel = ({ images }) => {
  const [ previewItem, setPreviewItem ] = useState(images[0]);
  const [ offset, setOffset ] = useState(0);

  useEffect(() => {
    if (!previewItem) setPreviewItem(images[0]);
  }, [ images ]);

  const prevButtonClickHandler = () => setOffset(prev => (prev === 0 ? 0 : prev - 1));
  const nextButtonClickHandler = () => setOffset(prev => (prev + MAX_ITEMS === images.length ? prev : prev + 1));

  const disableButtons = images.length <= MAX_ITEMS;

  return (
    <Container direction='column'>
      <ImageWrapper justifyContent='center' alignItems='center'>
        {previewItem && <img src={`/${previewItem}`} />}
      </ImageWrapper>
      <PreviewImagesContainer justifyContent='space-between' alignItems='center' fullWidth>
        <Button onClick={prevButtonClickHandler} disabled={disableButtons}>
          <img src={arrowLeft} alt='' />
        </Button>
        {
          images.slice(offset, MAX_ITEMS + offset).map(image => (
            <SmallImage
              key={image}
              onClick={() => setPreviewItem(image)}
              src={`/${image}`}
              alt=''
            />
          ))
        }
        <Button onClick={nextButtonClickHandler} disabled={disableButtons}>
          <img src={arrowRight} alt='' />
        </Button>
      </PreviewImagesContainer>
    </Container>
  );
}

const ImageWrapper = styled(Container)`
  width: 390px;
  height: 390px;
  background-color: ${({ theme }) => theme.color.darkBeige};
  & > img {
    width: 100%;
    height: 100%;
  }
`;

const Button = styled.button`
  width: 76px;
  height: 76px;
  border: 1px solid transparent;
  transition: 0.3s;
  background-color: transparent;
  cursor: pointer;
  border-radius: 2px;
  &:hover {
    border-color: black;
  }
`;

const SmallImage = styled.img`
  max-width: 50px;
  max-height: 50px;
`;

const PreviewImagesContainer = styled(Container)`
  margin-top: 54px;
  & > img {
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.3s;
    border-radius: 2px;
    &:hover {
      border-color: black;
    }
  }
`;

export default Carousel;
