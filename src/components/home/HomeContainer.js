// Actions
const TEST = 'home/TEST';
const TEST_2 = 'home/TEST_2';

// Initial State
const initialState = {
  testData: 'Some data for testing...'
};

// Reducer
const homeReducer = (state = initialState, action) =>
  action.type === TEST ? ({ ...state, testData: action.val }) :
  action.type === TEST_2 ? ({ ...state, testData: action.val }) :
  state;

// Action Creators
export const updateTestData = val => ({ type: TEST, val });
export const updateTest2Data = val => ({ type: TEST_2, val });

export default homeReducer;
