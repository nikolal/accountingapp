// Actions
const SAVE_NEWS = 'news/SAVE_NEWS';

// Initial State
const initialState = {
  news: [{
    title: 'Title',
    description: 'Description lorem ipsum...',
    date: '30.04.2018',
    image: 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg',
    paragraphs: [{
      type: 'text',
      value: 'lorem imsum'
    },{
      type: 'image',
      value: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
    },{
      type: 'text',
      value: 'lorem imsum'
    }]
  },{
    title: 'Title2',
    description: 'Description lorem ipsum2...',
    date: '30.05.2018',
    image: 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg',
    paragraphs: [{
      type: 'text',
      value: 'lorem imsum2'
    },{
      type: 'image',
      value: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
    },{
      type: 'text',
      value: 'lorem imsum2'
    }]
  }],
};

// Reducer
const newsReducer = (state = initialState, action) =>
  action.type === SAVE_NEWS ? ({ ...state, value: state.value + 1 }) :
  state;

// Action Creators
export const saveNews = () => ({ type: SAVE_NEWS });

export default newsReducer;
