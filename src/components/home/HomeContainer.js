// Actions
const TEST = 'TEST';

// Initial State
const initialState = {
  testData: 'Some data for testing...'
};

// https://github.com/jfmengels/eslint-plugin-fp/issues/14
// Reducer
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        testData: action.val,
      };
    default: return state;
  }
};

// Action Creators
export const updateTestData = val => ({ type: TEST, val });

export default homeReducer;
