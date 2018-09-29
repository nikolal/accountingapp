// Actions
const SAVE_LANGUAGE = 'language/SAVE_LANGUAGE';
const SAVE_ADMIN = 'language/SAVE_ADMIN';

const initialState = {
  languages: [
    { name: 'English', value: 'en', flag: require('../../../assets/images/english.png') },
    { name: 'Serbian', value: 'rs', flag: require('../../../assets/images/serbie.png') }
  ],
  language: 'en',
  admin: false
};
// translation[language].title - za pozivanje, a to pozivam u teks komponenti, gde mi je komponenta (moram da imporujem traslation, i redux)

// Reducer
const settingsReducer = (state = initialState, action) =>
  action.type === SAVE_LANGUAGE ? ({ ...state, language: action.language }) :
  action.type === SAVE_ADMIN ? ({ ...state, admin: action.bool }) :
  state;

// Action Creators
export const saveLanguage = language => ({ type: SAVE_LANGUAGE, language });
export const saveAdmin = bool => ({ type: SAVE_ADMIN, bool });


export default settingsReducer;
