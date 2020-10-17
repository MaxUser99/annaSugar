import mockBracelets from '../mocks/mockBracelets.json';
import mockBraceletImage from '../../assets/images/mock-bracelet.svg';

const DATA_TYPE = {
  BRACELETS: 'BRACELETS',
  KINDLES: 'KINDLES',
  BEADS: 'BEADS',
  OTHERS: 'OTHERS',
}

export const SET_BRACELETS_LOADING = 'SET_BRACELETS_LOADING';
export const SET_KINDLES_LOADING = 'SET_KINDLES_LOADING';
export const SET_BEADS_LOADING = 'SET_BEADS_LOADING';
export const SET_OTHERS_LOADING = 'SET_OTHERS_LOADING';

export const PUSH_BRACELETS = 'PUSH_BRACELETS';
export const PUSH_KINDLES = 'PUSH_KINDLES';
export const PUSH_BEADS = 'PUSH_BEADS';
export const PUSH_OTHERS = 'PUSH_OTHERS';

export const SET_REVIEW_BRACELET = 'SET_REVIEW_BRACELET';
export const SET_REVIEW_KINDLE = 'SET_REVIEW_KINDLE';
export const SET_REVIEW_BEAD = 'SET_REVIEW_BEAD';
export const SET_REVIEW_OTHER = 'SET_REVIEW_OTHER';

export const setBraceletsLoading = () => ({ type: SET_BRACELETS_LOADING }); 
export const setKindlesLoading = () => ({ type: SET_KINDLES_LOADING });
export const setBeadsLoading = () => ({ type: SET_BEADS_LOADING });
export const setOthersLoading = () => ({ type: SET_OTHERS_LOADING });

export const pushBracelets = (data, page) => ({ type: PUSH_BRACELETS, payload: { data, page }});
export const pushKindles = (data, page) => ({ type: PUSH_KINDLES, payload: { data, page }});
export const pushBeads = (data, page) => ({ type: PUSH_BEADS, payload: { data, page }});
export const pushOthers = (data, page) => ({ type: PUSH_OTHERS, payload: { data, page }});

export const setReviewBracelet = item => ({ type: SET_REVIEW_BRACELET, payload: item});
export const setReviewKindle = item => ({ type: SET_REVIEW_KINDLE, payload: item});
export const setReviewBead = item => ({ type: SET_REVIEW_BEAD, payload: item});
export const setReviewOther = item => ({ type: SET_REVIEW_OTHER, payload: item});

export const loadBracelets = page => itemsLoader(page, DATA_TYPE.BRACELETS);
export const loadKindles = page => itemsLoader(page, DATA_TYPE.BRACELETS);
export const loadBeads = page => itemsLoader(page, DATA_TYPE.BRACELETS);
export const loadOthers = page => itemsLoader(page, DATA_TYPE.BRACELETS);

export const loadBraceletsItem = id => itemLoader(id, DATA_TYPE.BRACELETS);
export const loadKindlesItem = id => itemLoader(id, DATA_TYPE.BRACELETS);
export const loadBeadsItem = id => itemLoader(id, DATA_TYPE.BRACELETS);
export const loadOthersItem = id => itemLoader(id, DATA_TYPE.BRACELETS);

function itemsLoader(page, contentType) {
  let setLoading;
  let pushItems;
  switch (contentType) {
    case BRACELETS:
      setLoading = setBraceletsLoading;
      pushItems = pushBracelets;
      break;
    case KINDLES:
      setLoading = setKindlesLoading;
      pushItems = pushKindles;
      break;
    case BEADS:
      setLoading = setBeadsLoading;
      pushItems = pushBeads;
      break;
    case OTHERS:
      setLoading = setOthersLoading;
      pushItems = pushOthers;
      break;
  }

  return async function (dispatch) {
    dispatch(setLoading());

    const items = mockBracelets.map(x => ({
      ...x,
      image: mockBraceletImage
    }));

    return delay(1000).then(() => dispatch(pushItems(items, page)));
  }
}

function itemLoader(id, contentType) {
  let setReviewItem;
  switch (contentType) {
    case BRACELETS:
      setReviewItem = setReviewBracelet;
      break;
    case KINDLES:
      setReviewItem = setReviewKindle;
      break;
    case BEADS:
      setReviewItem = setReviewBead;
      break;
    case OTHERS:
      setReviewItem = setReviewOther;
      break; 
  }

  return async function (dispatch) {
    const item = mockBracelets.find(x => x.id === id);
    const transformedItem = item
    ? {
      ...x,
      image: mockBraceletImage
    }
    : null;

    await delay(1000).then(() => dispatch(setReviewItem(transformedItem)));
    return transformedItem;
  }
}

// test
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}