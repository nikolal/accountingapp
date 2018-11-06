// Actions
const SAVE_ABOUT = 'contract/SAVE_ABOUT';

// Initial State
const initialState = {
  contract: [{
  name: {
    en: 'uuu',
    rs: 'Ugovori o delu - porez, PIO i zdravstvo'
  },
  nameExpl: {
    en: 'lll',
    rs: '(kada se placa porez, PIO i zdravstvo)'
  },
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  // image: require('../../../assets/images/calculationsPanel.png'),
  // icons: require('../../../assets/images/folder.png'),
  input: '',
  func: 'contractPioTaxHealth',
  type: 'blabla',
  value: '',
  contractPioTaxHealth: {
    value: null,
    // coefficient: 1.58227848,
    gross: null,
    nontaxable: null,
    base: null,
    tax: null,
    pension: null,
    contribution: null
  },
  icon: 'folder'
},{
name: {
  en: 'tt',
  rs: 'Ugovor o delu - porez, PIO'
},
nameExpl: {
  en: 'ssss',
  rs: '(kada se placa porez, PIO)'
},
description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
// image: require('../../../assets/images/calculationsPanel.png'),
// icons: require('../../../assets/images/pioTax.png'),
input: '',
func: 'contractPioTax',
type: 'blabla',
value: '',
contractPioTax: {
  value: null,
  // coefficient: 1.58227848,
  gross: null,
  nontaxable: null,
  base: null,
  tax: null,
  pension: null,
},
icon: 'folder'
},{
name: {
  en: 'lkdhjag',
  rs: 'Ugovor o delu - porez'
},
nameExpl: {
  en: 'ddd',
  rs: '(kada se placa samo porez)'
},
description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
// image: require('../../../assets/images/imageCalculation.png'),
// icons: require('../../../assets/images/onlyTax.png'),
input: '',
func: 'contractTax',
type: 'blabla',
value: '',
contractTax: {
  value: null,
  // coefficient: 1.58227848,
  gross: null,
  nontaxable: null,
  base: null,
  tax: null,
},
icon: 'folder'
}],
  article: {}
};

// Reducer
const contactAllReducer = (state = initialState, action) =>
  action.type === SAVE_ABOUT ? ({ ...state, article: action.article }) :
  state;

// Action Creators
export const saveArticle = article => ({ type: SAVE_ABOUT, article });

export default contactAllReducer;
