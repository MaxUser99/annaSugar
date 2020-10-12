import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Review from './review';
import Container from '../container/container';
import ContentWrapper from '../contentWrapper/contentWrapper';
import Button from '../button/button';

const PREVIEW_ITEMS_COUNT = 3;

const Reviews = ({ reviews }) => (
  <Container fullWidth>
    <ContentWrapper direction='column' alignItems='center'>
      <Title>Отзывы</Title>
      <Container fullWidth justifyContent='center'>
        {
          reviews.slice(0, PREVIEW_ITEMS_COUNT).map(review => (
            <Review key={review.id} review={review} />
          ))
        }
        {
          reviews.length > PREVIEW_ITEMS_COUNT &&
          <Button>еще</Button>
        }
      </Container>
    </ContentWrapper>
  </Container>
);

const Title = styled.h2`
  font-family: "Cormorant Infant";
  font-weight: bold;
  font-size: 48px;
  line-height: 48px;
`;

export default connect(
  () => ({
    reviews: []
  }),
  null
)(Reviews);
