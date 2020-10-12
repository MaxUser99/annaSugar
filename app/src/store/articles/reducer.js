import RESOURCE_STATUS from '../../constants/resourceStatus';
import { LOAD_ARTICLES, SET_ARTICLES } from './actions';

const initialState = {
  data: [],
  status: RESOURCE_STATUS.INITIAL,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES: return { ...state, error: null, status: RESOURCE_STATUS.LOADING };
    case SET_ARTICLES: return { ...state, status: RESOURCE_STATUS.LOADED, data: action.payload };
    default: return state;
  }
};