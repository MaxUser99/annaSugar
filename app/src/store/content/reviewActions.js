import mockReviews from '../mocks/mockReviews.json';
import mockReviewImg from '../../assets/images/mock-review.svg';

export const SET_REVIEWS_LOADING = 'SET_REVIEWS_LOADING';
export const PUSH_REVIEWS = 'PUSH_REVIEWS';

export const setReviewsLoading = () => ({ type: SET_REVIEWS_LOADING });
export const pushReviews = (reviews, page) => ({ type: PUSH_REVIEWS, payload: { reviews, page } });

export const loadReviews = page => {
  return dispatch => {
    dispatch(setReviewsLoading());

    setTimeout(() => {
      const transformedReviews = mockReviews.map(x => ({
        ...x,
        image: mockReviewImg
      }));
      dispatch(pushReviews(transformedReviews, page));
    }, 1500);
  }
}