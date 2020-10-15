import { OPEN_MODAL } from './uiActions';

const initialState = {
  openedModal: null,
  state: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: return {
      ...state,
      openedModal: action.payload.modalName,
      state: action.payload.state
    };
    default: return state;
  }
};
