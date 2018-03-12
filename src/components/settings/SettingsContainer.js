// Actions
const SAVE_LANGUAGE = 'settings/SAVE_LANGUAGE';

const initialState = {
  language: [
    { name: 'English', value: 'en' },
    { name: 'Serbian', value: 'rs' }
  ]}

// Reducer
const settingsReducer = (state = initialState, action) =>
  action.type === SAVE_LANGUAGE ? ({ ...state, language: action.language }) :
  state;

// Action Creators
export const saveLanguage = language => ({ type: SAVE_LANGUAGE, language });

export default settingsReducer;
