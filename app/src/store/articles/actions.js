import mockArticles from '../mocks/mockArticles.json';
import randomImage from '../../assets/images/random-image.svg';

// constants
export const LOAD_ARTICLES = 'LOAD_ARTICLES';
export const SET_ARTICLES = 'SET_ARTICLES';

// actions
export const loadArticles = (page = 0) => {
  return dispatch => {
    dispatch({
      type: LOAD_ARTICLES,
      payload: page
    });

    setTimeout(
      () => {
        dispatch({
          type: SET_ARTICLES,
          payload: mockArticles.map(({ date, ...rest}) => ({
            ...rest,
            image: randomImage,
            date: new Date(date)
          }))
        });
      },
      1500
    );
  };
};
