import { combineReducers } from 'redux';
import homeReducer from '../components/home/HomeContainer.js';
import newsReducer from '../components/news/NewsContainer.js';
import taxesReducer from '../components/taxes/TaxesContainer';
import aboutReducer from '../components/about/AboutContainer';

export default combineReducers({
  homeReducer,
  newsReducer,
  taxesReducer,
  aboutReducer
});
