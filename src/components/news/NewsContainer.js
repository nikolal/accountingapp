// Actions
const SAVE_ARTICLE = 'news/SAVE_ARTICLE';

// Initial State
const initialState = {
  news: [{
    title: 'Title',
    description: 'Description lorem ipsum...',
    date: '30.04.2018',
    image: 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg',
    paragraphs: [{
      type: 'text',
      value: 'lorem imsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, ab sequi rem quaerat maxime. Repellendus tempore commodi esse a dolore, quibusdam delectus eveniet deserunt necessitatibus,'
    },{
      type: 'image',
      value: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
    },{
      type: 'text',
      value: 'lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, ab sequi rem quaerat maxime. Repellendus tempore commodi esse a dolore, quibusdam delectus eveniet deserunt necessitatibus, imsum'
    }]
  },{
    title: 'Title2',
    description: 'Description lorem ipsum2...',
    date: '30.05.2018',
    image: 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg',
    paragraphs: [{
      type: 'text',
      value: 'lorem ipsum2 lorem <iosum> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, ab sequi rem quaerat maxime. Repellendus tempore commodi esse a dolore, quibusdam delectus eveniet deserunt necessitatibus, omnis molestias illo iure iste.</iosum>'
    },{
      type: 'image',
      value: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
    },{
      type: 'text',
      value: 'lorem imsum2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, ab sequi rem quaerat maxime. Repellendus tempore commodi esse a dolore, quibusdam delectus eveniet deserunt necessitatibus, lorem loremm lorem ipsum lorem lorem ipsum lorem  lorem '
    },{
      type: 'text',
      value: 'lorem imsum3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, ab sequi rem quaerat maxime. Repellendus tempore commodi esse a dolore, quibusdam delectus eveniet deserunt necessitatibus,'
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
