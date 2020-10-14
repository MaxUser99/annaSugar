import mockArticles from '../mocks/mockArticles.json';
import randomImage from '../../assets/images/random-image.svg';

export const SET_ARTICLES_LOADING = 'SET_ARTICLES_LOADING';
export const PUSH_ARTICLES = 'PUSH_ARTICLES';
export const SET_REVIEW_ARTICLE = 'SET_REVIEW_ARTICLE';

export const setArticlesLoading = () => ({ type: SET_ARTICLES_LOADING });
export const pushArticles = (articles, page) => ({ type: PUSH_ARTICLES, payload: { articles, page } }); 
export const setReviewArticle = article => ({ type: SET_REVIEW_ARTICLE, payload: article });

export const loadArticles = page => {
  return async (dispatch) => {
    dispatch(setArticlesLoading());
    const transformedArticles = mockArticles.map(({ date, ...rest}) => ({
      ...rest,
      image: randomImage,
      date: new Date(date)
    }));

    return delay(1500).then(() => dispatch(pushArticles(transformedArticles, page)));
  };
};

export const loadReviewArticle = id => {
  return async (dispatch) => {
    const article = mockArticles.find(x => x.id === id);
    const transformedArticle = article
      ? {
          ...article,
          image: randomImage,
          date: new Date(article.date)
        }
      : null;

    await delay(1000).then(() => dispatch(setReviewArticle(transformedArticle)));
    return transformedArticle;
  }
}

// test
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}