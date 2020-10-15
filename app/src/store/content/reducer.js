import RESOURCE_STATUS from '../../constants/resourceStatus';
import { PUSH_ARTICLES, SET_ARTICLES_LOADING, SET_REVIEW_ARTICLE } from './articleActions';
import { PUSH_REVIEWS, SET_REVIEWS_LOADING, SET_REVIEW_ITEM } from './reviewActions';

const LOADABLE_CONTENT = {
  data: [],
  reviewItem: null,
  status: RESOURCE_STATUS.INITIAL,
  error: null,
  page: null
};

const initialState = {
  articles: {...LOADABLE_CONTENT},
  reviews: {...LOADABLE_CONTENT},
};

export default (state = initialState, action) => {
  switch (action.type) {
    // article action cases
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
        data: [...state.articles.data, ...action.payload.articles],
        page: action.payload.page
      }
    };
    case SET_REVIEW_ARTICLE: return {
      ...state,
      articles: {
        ...state.articles,
        reviewItem: action.payload
      }
    }

    // review action cases
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
        data: [...state.reviews.data, ...action.payload.reviews],
        page: action.payload.page
      }
    };
    case SET_REVIEW_ITEM: return {
      ...state,
      reviews: {
        ...state.reviews,
        reviewItem: action.payload
      }
    }

    default: return state;
  }
};