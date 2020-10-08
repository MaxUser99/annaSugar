import React from 'react';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import articlesReducer from './articles/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  articles: articlesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
