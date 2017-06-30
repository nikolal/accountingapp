// Actions
const TEST_1 = 'home/TEST_1';
const TEST_2 = 'home/TEST_2';

// Initial State
const initialState = {
  test1Data: 'Test 1 data',
  test2Data: 'Test 2 data',
};

// Reducer
const homeReducer = (state = initialState, action) =>
  action.type === TEST_1 ? ({ ...state, test1Data: action.str }) :
  action.type === TEST_2 ? ({ ...state, test2Data: action.str }) :
  state;

// Action Creators
export const updateTest1Data = str => ({ type: TEST_1, str });
export const updateTest2Data = str => ({ type: TEST_2, str });



export default homeReducer;
