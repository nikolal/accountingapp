// Actions
const SAVE_ABOUT = 'about/SAVE_ABOUT';

// Initial State
const initialState = {
  about: [{
    title: 'Our services',
    description: 'Description lorem ipsum, lorem ipsum, lorem...',
    // date: '30.04.2018',
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
    title: 'Our Team',
    description: 'Accounting or accountancy is the measurement, processing, and communication of financial information about economic entities[1][2] such as businesses and corporations.',
    // date: '30.05.2018',
    image: 'https://s.hswstatic.com/gif/13-incredible-bat-facts.jpg',
    paragraphs: [{
      type: 'text',
      value: 'lorem imsum2'
    },{
      type: 'image',
      value: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
    },{
      type: 'text',
      value: 'lorem imsum, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis tempore, commodi sit labore ad, accusamus aspernatur ullam quam tenetur id ipsum officia porro! Harum, sed facilis laborum, id error accusamus.'
    },{
      type: 'text',
      value: 'lorem imsum3, lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quo nulla cumque reiciendis quod, recusandae nisi, non, distinctio molestias eveniet obcaecati? Tempore, deserunt commodi cupiditate nisi magnam quaerat sapiente iste.'
    }]
  },{
    title: 'Our company',
    description: 'Accounting or accountancy is the measurement, processing, and communication of financial information about economic entities[1][2] such as businesses and corporations.',
    // date: '30.05.2018',
    image: 'https://s.hswstatic.com/gif/13-incredible-bat-facts.jpg',
    paragraphs: [{
      type: 'text',
      value: 'lorem imsum2'
    },{
      type: 'image',
      value: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
    },{
      type: 'text',
      value: 'lorem imsum, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis tempore, commodi sit labore ad, accusamus aspernatur ullam quam tenetur id ipsum officia porro! Harum, sed facilis laborum, id error accusamus.'
    },{
      type: 'text',
      value: 'lorem imsum3, lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quo nulla cumque reiciendis quod, recusandae nisi, non, distinctio molestias eveniet obcaecati? Tempore, deserunt commodi cupiditate nisi magnam quaerat sapiente iste.'
    }]
  },{
    title: 'Our clients',
    description: 'Accounting or accountancy is the measurement, processing, and communication of financial information about economic entities[1][2] such as businesses and corporations.',
    // date: '30.05.2018',
    image: 'https://s.hswstatic.com/gif/13-incredible-bat-facts.jpg',
    paragraphs: [{
      type: 'text',
      value: 'lorem imsum2'
    },{
      type: 'image',
      value: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
    },{
      type: 'text',
      value: 'lorem imsum, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis tempore, commodi sit labore ad, accusamus aspernatur ullam quam tenetur id ipsum officia porro! Harum, sed facilis laborum, id error accusamus.'
    },{
      type: 'text',
      value: 'lorem imsum3, lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quo nulla cumque reiciendis quod, recusandae nisi, non, distinctio molestias eveniet obcaecati? Tempore, deserunt commodi cupiditate nisi magnam quaerat sapiente iste.'
    }]
  }],
  article: {}
};

// Reducer
const aboutReducer = (state = initialState, action) =>
  action.type === SAVE_ABOUT ? ({ ...state, article: action.article }) :
  state;

// Action Creators
export const saveArticle = article => ({ type: SAVE_ABOUT, article });

export default aboutReducer;
