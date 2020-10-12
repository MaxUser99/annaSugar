import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';
import Review from './review';
import Container from '../container/container';
import ContentWrapper from '../contentWrapper/contentWrapper';
import Button from '../button/button';
import { loadReviews } from '../../store/content/reviewActions';

const PREVIEW_ITEMS_COUNT = 3;

const Reviews = ({ reviews, loadReviews, page }) => {
  const buttonClickHandler = () => {
    navigate('/reviews');
  };

  useEffect(() => {
    if (page === null) loadReviews(0);
  }, []);

  return (
    <Container fullWidth>
      <StyledWrapper direction='column' alignItems='center'>
        <Title>Отзывы</Title>
        <ReviewsContainer fullWidth justifyContent='center' alignItems='stretch'>
          {
            reviews.slice(0, PREVIEW_ITEMS_COUNT).map(review => (
              <Review key={review.id} review={review} />
            ))
          }
        </ReviewsContainer>
        <Button onClick={buttonClickHandler}>еще</Button>
      </StyledWrapper>
    </Container>
  )
}

const StyledWrapper = styled(ContentWrapper)`
  padding: 64px 0;
`;

const Title = styled.h2`
  font-family: "Cormorant Infant";
  font-weight: bold;
  font-size: 48px;
  line-height: 48px;
  margin: 0 0 32px;
`;

const ReviewsContainer = styled(Container)`
  & + button {
    margin-top: 64px;
  }
`;

export default connect(
  ({ content: { reviews: { data, page }}}) => ({
    reviews: data,
    page
  }),
  dispatch => ({
    loadReviews: page => dispatch(loadReviews(page))
  })
)(Reviews);
