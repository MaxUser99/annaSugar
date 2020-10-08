import RESOURCE_STATUS from '../../constants/resourceStatus';
import { LOAD_ARTICLES } from './actions';

const initialState = {
  data: [],
  status: RESOURCE_STATUS.INITIAL,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES: 
      console.log("should load articles");
      return state;
    default: return state;
  }
};