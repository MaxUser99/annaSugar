import mockReviews from '../mocks/mockReviews.json';
import mockReviewImg from '../../assets/images/mock-review.svg';

export const SET_REVIEWS_LOADING = 'SET_REVIEWS_LOADING';
export const PUSH_REVIEWS = 'PUSH_REVIEWS';

export const setReviewsLoading = (page) => ({ type: SET_REVIEWS_LOADING, payload: page });
export const pushReviews = reviews => ({ type: PUSH_REVIEWS, payload: reviews });

export const loadReviews = (page = 0) => {
  return dispatch => {
    dispatch(setReviewsLoading(page));

    setTimeout(() => {
      const transformedReviews = mockReviews.map(x => ({
        ...x,
        image: mockReviewImg
      }));
      dispatch(pushReviews(transformedReviews));
    }, 1500);
  }
}