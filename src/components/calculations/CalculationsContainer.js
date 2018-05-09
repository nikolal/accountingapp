// Actions
const CALCULATE = 'calculations/CALCULATE';
const SAVE_CALCULATION = 'calculations/SAVE_CALCULATION';
const SAVE_INPUT = 'calculations/SAVE_INPUT';


// Initial State
const initialState = {
  calculations: [{
    name: 'Obracun zarada',
    calculation: 'OBRACUN ZARADA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // image: 'https://www.tmconsulting.co.rs/uploads/useruploads/photos/Milka-Accounting-company-belgrade.jpg',
    input: '',
    func: x => x + 2,
    value: '',
    icon: 'wallet'
  },{
    name: 'Kalkulacija za zakup',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // image: 'https://www.tmconsulting.co.rs/uploads/useruploads/photos/Milka-Accounting-company-belgrade.jpg',
    input: '',
    func: x => x * 2,
    value: '',
    icon: 'laptop'
  },{
    name: 'Obracun plate - bruto i neto',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // image: 'https://www.tmconsulting.co.rs/uploads/useruploads/photos/Milka-Accounting-company-belgrade.jpg',
    input: '',
    func: x => x + 4,
    value: '',
    icon: 'calculator'
  }],
  calculation: {}
};

// Reducer
const calculationsReducer = (state = initialState, action) =>
  action.type === CALCULATE ? ({
    ...state,
    calculation: {
      ...state.calculation,
      value: action.num
    }
  }) :
  action.type === SAVE_CALCULATION ? ({ ...state, calculation: action.item }) :
  action.type === SAVE_INPUT ? ({
    ...state,
    calculation: {
      ...state.calculation,
      input: action.value
    }
  }) :
  state;

// Action Creators
export const calculate = num => ({ type: CALCULATE, num });
export const saveCalculation = item => ({ type: SAVE_CALCULATION, item });
export const saveInputValue = value => ({ type: SAVE_INPUT, value });



export default calculationsReducer;
