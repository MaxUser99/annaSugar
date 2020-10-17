import RESOURCE_STATUS from '../../constants/resourceStatus';
import { PUSH_ARTICLES, SET_ARTICLES_LOADING, SET_REVIEW_ARTICLE } from './articleActions';
import { PUSH_REVIEWS, SET_REVIEWS_LOADING, SET_REVIEW_ITEM } from './reviewActions';
import {
  SET_BRACELETS_LOADING,
  SET_KINDLES_LOADING,
  SET_BEADS_LOADING,
  SET_OTHERS_LOADING,
  PUSH_BRACELETS,
  PUSH_KINDLES,
  PUSH_BEADS,
  PUSH_OTHERS,
  SET_REVIEW_BRACELET,
  SET_REVIEW_KINDLE,
  SET_REVIEW_BEAD,
  SET_REVIEW_OTHER,
} from './catalogActions';

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
  // catalog data
  bracelets: {...LOADABLE_CONTENT},
  beads: {...LOADABLE_CONTENT},
  others: {...LOADABLE_CONTENT},
  kindles: {...LOADABLE_CONTENT}
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

    // bracelets action cases
    case SET_BRACELETS_LOADING: return {
      ...state,
      bracelets: {
        ...state.bracelets,
        error: null,
        status: RESOURCE_STATUS.LOADING
      }
    };
    case PUSH_BRACELETS: return {
      ...state,
      bracelets: {
        ...state.bracelets,
        status: RESOURCE_STATUS.LOADED,
        data: [...state.bracelets.date, ...action.payload.data],
        page: action.payload.page
      }
    };
    case SET_REVIEW_BRACELET: return {
      ...state,
      bracelets: {
        ...state.bracelets,
        reviewItem: action.payload
      }
    };

    // beads action cases
    case SET_BEADS_LOADING: return {
      ...state,
      beads: {
        ...state.beads,
        error: null,
        status: RESOURCE_STATUS.LOADING
      }
    };
    case PUSH_BEADS: return {
      ...state,
      beads: {
        ...state.beads,
        status: RESOURCE_STATUS.LOADED,
        data: [...state.beads.date, ...action.payload.data],
        page: action.payload.page
      }
    };
    case SET_REVIEW_BEAD: return {
      ...state,
      beads: {
        ...state.beads,
        reviewItem: action.payload
      }
    };

    // kindles action cases
    case SET_KINDLES_LOADING: return {
      ...state,
      kindles: {
        ...state.kindles,
        error: null,
        status: RESOURCE_STATUS.LOADING
      }
    };
    case PUSH_KINDLES: return {
      ...state,
      kindles: {
        ...state.kindles,
        status: RESOURCE_STATUS.LOADED,
        data: [...state.kindles.date, ...action.payload.data],
        page: action.payload.page
      }
    };
    case SET_REVIEW_KINDLE: return {
      ...state,
      kindles: {
        ...state.kindles,
        reviewItem: action.payload
      }
    };
      
    // others action cases
    case SET_OTHERS_LOADING: return {
      ...state,
      others: {
        ...state.others,
        error: null,
        status: RESOURCE_STATUS.LOADING
      }
    };
    case PUSH_OTHERS: return {
      ...state,
      others: {
        ...state.others,
        status: RESOURCE_STATUS.LOADED,
        data: [...state.others.date, ...action.payload.data],
        page: action.payload.page
      }
    };
    case SET_REVIEW_OTHER: return {
      ...state,
      others: {
        ...state.others,
        reviewItem: action.payload
      }
    };

    default: return state;
  }
};