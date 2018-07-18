// Actions
const SAVE_LANGUAGE = 'language/SAVE_LANGUAGE';

const initialState = {
  languages: [
    { name: 'English', value: 'en', flag: require('../../../assets/images/english.png') },
    { name: 'Serbian', value: 'rs', flag: require('../../../assets/images/serbie.png') }
  ],
  language: 'en'
};
// translation[language].title - za pozivanje, a to pozivam u teks komponenti, gde mi je komponenta (moram da imporujem traslation, i redux)

// Reducer
const settingsReducer = (state = initialState, action) =>
  action.type === SAVE_LANGUAGE ? ({ ...state, language: action.language }) :
  state;

// Action Creators
export const saveLanguage = language => ({ type: SAVE_LANGUAGE, language });

export default settingsReducer;
