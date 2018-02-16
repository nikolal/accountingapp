// Actions
const SAVE_ARTICLE = 'news/SAVE_ARTICLE';

// Initial State
const initialState = {
  news: [{
    title: 'Title titel ltik tuy;le maiu aid lorem ',
    description: 'Description lorem ipsum...',
    date: '30.04.2018',
    image: 'http://chimeiusa.com/wp-content/uploads/2017/06/How-to-Find-the-Best-Inventory-Management-Accounting-Software-for-Your-Small-Business-5-Questions-to-Ask-800x534.jpg',
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
    title: 'Title2 is the ftiksm lorem ipsum',
    description: 'Description lorem ipsum2...',
    date: '30.05.2018',
    image: 'http://www.dmu.ac.uk/webimages/business-and-law-images/course-images/bal/accounting-and-finance.jpg',
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
