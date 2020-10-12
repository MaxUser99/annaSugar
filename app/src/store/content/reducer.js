import RESOURCE_STATUS from '../../constants/resourceStatus';
import { PUSH_ARTICLES, SET_ARTICLES_LOADING } from './articleActions';
import { PUSH_REVIEWS, SET_REVIEWS_LOADING } from './reviewActions';

const LOADABLE_CONTENT = {
  data: [],
  status: RESOURCE_STATUS.INITIAL,
  error: null
};

const initialState = {
  articles: {...LOADABLE_CONTENT},
  reviews: {...LOADABLE_CONTENT},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLES_LOADING: return {
      ...state,
      articles: {
        ...state.articles,
        error: null,
        status: RESOURCE_STATUS.LOADING
      }
    };
    case PUSH_ARTICLES: return {
      ...state,
      articles: {
        ...state.articles,
        status: RESOURCE_STATUS.LOADED,
        data: [...state.articles.data, ...action.payload]
      }
    };

    case SET_REVIEWS_LOADING: return {
      ...state,
      reviews: {
        ...state.reviews,
        error: null,
        status: RESOURCE_STATUS.LOADING
      }
    };
    case PUSH_REVIEWS: return {
      ...state,
      reviews: {
        ...state.reviews,
        status: RESOURCE_STATUS.LOADED,
        data: [...state.reviews.data, ...action.payload]
      }
    };

    default: return state;
  }
};