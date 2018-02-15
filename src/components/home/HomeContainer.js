// Actions
const INCREASE_VALUE = 'home/INCREASE_VALUE';

// Initial State
const initialState = {
  value: 0,
};

// Reducer
const homeReducer = (state = initialState, action) =>
  action.type === INCREASE_VALUE ? ({ ...state, value: state.value + 1 }) :
  state;

// Action Creators
export const increaseValue = () => ({ type: INCREASE_VALUE });

export default homeReducer;
