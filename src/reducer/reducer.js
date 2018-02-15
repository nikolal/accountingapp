import { combineReducers } from 'redux';
import homeReducer from '../components/home/HomeContainer.js';
import newsReducer from '../components/news/NewsContainer.js';

export default combineReducers({
  homeReducer,
  newsReducer
});
