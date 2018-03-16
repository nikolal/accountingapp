import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducer/reducer.js';

const configureStore = initialState => (
  createStore(
    reducer,
    initialState,
    // applyMiddleware(thunk, logger)
  )
);

const store = configureStore();

export default store;
