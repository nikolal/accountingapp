// Actions
const INCREASE_VALUE = 'home/INCREASE_VALUE';
const UPDATE_USERNAME = 'home/UPDATE_USERNAME';
const UPDATE_GITHUB_NAME = 'home/UPDATE_GITHUB_NAME';

// Initial State
const initialState = {
  value: 0,
  name: '',
  username: 'dajk'
};

// Reducer
const homeReducer = (state = initialState, action) =>
  action.type === INCREASE_VALUE ? ({ ...state, value: state.value + 1 }) :
  action.type === UPDATE_USERNAME ? ({ ...state, username: action.username }) :
  action.type === UPDATE_GITHUB_NAME ? ({ ...state, name: action.name }) :
  state;

// Action Creators
export const increaseValue = () => ({ type: INCREASE_VALUE });
export const updateUsername = username => ({ type: UPDATE_USERNAME, username });
export const updateGithubName = name => ({ type: UPDATE_GITHUB_NAME, name });

export default homeReducer;
