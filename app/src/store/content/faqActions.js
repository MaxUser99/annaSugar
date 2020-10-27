import mockFAQs from '../mocks/mockFAQs.json';
import FAQsCATEGORIES from '../../constants/FAQs';
import RESOURCE_STATUS from '../../constants/resourceStatus';

export const SET_FAQs = 'SET_FAQs';
export const SET_FAQs_LOADING = 'SET_FAQs_LOADING';
export const SET_ON_EDIT_FAQ = 'SET_ON_EDIT_FAQ';

export const setFaqs = faqs => ({ type: SET_FAQs, payload: faqs });
export const setFaqsLoading = () => ({ type: SET_FAQs_LOADING });
export const editFAQ = item => ({ type: SET_ON_EDIT_FAQ, payload: item });

export const loadFaqs = () => {
  return async (dispatch, getState) => {
    const { content: { faq: { status }}} = getState();

    if (status === RESOURCE_STATUS.LOADING) return;

    let i = 0;
    const preparedData = mockFAQs.reduce((prev, curr) => {
      const newData = Object.values(FAQsCATEGORIES).map(category => ({
        ...curr,
        category,
        id: i++,
        date: new Date()
      }));

      return [...prev, ...newData];
    }, []);

    await delay(1000).then(() => dispatch(setFaqs(preparedData)));
    return preparedData;
  }
} 

// test
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}