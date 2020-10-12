import React from 'react';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// import articlesReducer from './articles/reducer';
import contentReducer from './content/reducer';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
  content: contentReducer,
  userData: userReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
