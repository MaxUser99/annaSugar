import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from '../../container/container';

const MAX_ITEMS = 3;

const Carousel = ({ images }) => {
  const [ previewItem, setPreviewItem ] = useState(images[0]);
  const [ offset, setOffset ] = useState(0);
  const [ imageLoaded, setLoaded ] = useState(false);

  useEffect(() => {
    if (!previewItem) setPreviewItem(images[0]);
  }, [ images ]);

  const prevButtonClickHandler = () => setOffset(prev => (prev === 0 ? 0 : prev - 1));
  const nextButtonClickHandler = () => setOffset(prev => (prev + MAX_ITEMS === images.length ? prev : prev + 1));
  const imageLoadHandler = () => setLoaded(true);

  const disableButtons = images.length <= MAX_ITEMS;

  return (
    <Container direction='column'>
      <ImageWrapper $loaded={imageLoaded}>
        {previewItem && <img src={`/${previewItem}`} onLoad={imageLoadHandler} />}
      </ImageWrapper>
      <PreviewImagesContainer justifyContent='space-between' alignItems='center' fullWidth>
        <Button onClick={prevButtonClickHandler} disabled={disableButtons}>P</Button>
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
        <Button onClick={nextButtonClickHandler} disabled={disableButtons}>N</Button>
      </PreviewImagesContainer>
    </Container>
  );
}

const ImageWrapper = styled(Container)`
  max-width: 390px;
  max-height: 390px;
  ${
    ({ $loaded }) => !$loaded && `
      width: 350px;
      height: 350px;
    `
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
`;

export default Carousel;
