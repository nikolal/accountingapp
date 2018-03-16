import { combineReducers } from 'redux';
import newsReducer from '../components/news/NewsContainer.js';
import taxesReducer from '../components/taxes/TaxesContainer';
import aboutReducer from '../components/about/AboutContainer';
import servicesReducer from '../components/services/ServicesContainer';
import settingsReducer from '../components/settings/SettingsContainer';

export default combineReducers({
  newsReducer,
  taxesReducer,
  aboutReducer,
  servicesReducer,
  settingsReducer
});
