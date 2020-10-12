import mockArticles from '../mocks/mockArticles.json';
import randomImage from '../../assets/images/random-image.svg';

export const SET_ARTICLES_LOADING = 'SET_ARTICLES_LOADING';
export const PUSH_ARTICLES = 'PUSH_ARTICLES';

export const setArticlesLoading = () => ({ type: SET_ARTICLES_LOADING });
export const pushArticles = (articles, page) => ({ type: PUSH_ARTICLES, payload: { articles, page } }); 

export const loadArticles = page => {
  return dispatch => {
    dispatch(setArticlesLoading());

    setTimeout(
      () => {
        const transformedArticles = mockArticles.map(({ date, ...rest}) => ({
          ...rest,
          image: randomImage,
          date: new Date(date)
        }));
        dispatch(pushArticles(transformedArticles, page));
      },
      1500
    );
  };
};
