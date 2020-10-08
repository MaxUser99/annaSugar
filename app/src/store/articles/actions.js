// constants
export const LOAD_ARTICLES = 'LOAD_ARTICLES';

// actions
export const loadArticles = (page = 0) => dispatch => dispatch({
  type: LOAD_ARTICLES,
  payload: page
});
