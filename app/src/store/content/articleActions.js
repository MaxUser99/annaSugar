import mockArticles from '../mocks/mockArticles.json';
import randomImage from '../../assets/images/random-image.svg';

export const SET_ARTICLES_LOADING = 'SET_ARTICLES_LOADING';
export const PUSH_ARTICLES = 'PUSH_ARTICLES';

export const setArticlesLoading = page => ({ type: SET_ARTICLES_LOADING, payload: page });
export const pushArticles = articles => ({ type: PUSH_ARTICLES, payload: articles }); 

export const loadArticles = (page = 0) => {
  return dispatch => {
    dispatch(setArticlesLoading(page));

    setTimeout(
      () => {
        const transformedArticles = mockArticles.map(({ date, ...rest}) => ({
          ...rest,
          image: randomImage,
          date: new Date(date)
        }));
        dispatch(pushArticles(transformedArticles));
      },
      1500
    );
  };
};
