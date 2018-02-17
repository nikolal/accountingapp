// Actions
const SAVE_ARTICLE = 'news/SAVE_ARTICLE';

// Initial State
const initialState = {
  news: [{
    title: 'This is Title number one',
    description: 'Description lorem ipsum, lorem ipsum, lorem...',
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
    title: 'he terms "accounting" and "financial reporting" are often used as synonyms. 2',
    description: 'Accounting or accountancy is the measurement, processing, and communication of financial information about economic entities[1][2] such as businesses and corporations.',
    date: '30.05.2018',
    image: 'https://s.hswstatic.com/gif/13-incredible-bat-facts.jpg',
    paragraphs: [{
      type: 'text',
      value: 'lorem imsum2'
    },{
      type: 'image',
      value: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
    },{
      type: 'text',
      value: 'lorem imsum2'
    },{
      type: 'text',
      value: 'lorem imsum3'
    }]
  }],
  article: {}
};

// Reducer
const newsReducer = (state = initialState, action) =>
  action.type === SAVE_ARTICLE ? ({ ...state, article: action.article }) :
  state;

// Action Creators
export const saveArticle = article => ({ type: SAVE_ARTICLE, article });

export default newsReducer;
