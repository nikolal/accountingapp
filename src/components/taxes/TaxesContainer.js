// // Actions
const SAVE_ARTICLE = 'taxes/SAVE_ARTICLE';

// Initial State
const initialState = {
  taxes: [{
    title: 'Porez na dobit',
    description: 'is a mandatory financial charge or some other type of levy imposed upon a taxpaye',
    date: '30.04.2018',
    image: 'https://www.edx.org/sites/default/files/course/image/promoted/courseimages_0005_fin-account_378x225.jpg',
    paragraphs: [{
      type: 'text',
      value: 'lorem imsum'
    },{
      type: 'image',
      value: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
    },{
      type: 'text',
      value: 'by a governmental organization in order to fund various public expenditures.[1] A failure to pay, or evasion of or resistance to taxation, is punishable by law. '
    }]
  },{
    title: 'PDV',
    description: 'is a mandatory financial charge or some other type of levy imposed upon a taxpaye',
    date: '30.04.2018',
    image: 'https://n6-img-fp.akamaized.net/free-vector/accounting-background-design_1300-169.jpg?size=338&ext=jpg',
    paragraphs: [{
      type: 'text',
      value: 'lorem imsum'
    },{
      type: 'image',
      value: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
    },{
      type: 'text',
      value: 'by a governmental organization in order to fund various public expenditures.[1] A failure to pay, or evasion of or resistance to taxation, is punishable by law. '
    }]
  },{
    title: 'Porez na dohodak i doprinosi',
    description: 'is a mandatory financial charge or some other type of levy imposed upon a taxpaye',
    date: '30.04.2018',
    image: 'https://www.edx.org/sites/default/files/course/image/promoted/courseimages_0005_fin-account_378x225.jpg',
    paragraphs: [{
      type: 'text',
      value: 'lorem imsum'
    },{
      type: 'image',
      value: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
    },{
      type: 'text',
      value: 'by a governmental organization in order to fund various public expenditures.[1] A failure to pay, or evasion of or resistance to taxation, is punishable by law. '
    }]
  },{
    title: 'Porez na imovinu',
    description: 'is a mandatory financial charge or some other type of levy imposed upon a taxpaye',
    date: '30.04.2018',
    image: 'https://en-coller.tau.ac.il/sites/coller-english.tau.ac.il/files/styles/reaserch_main_image_580_x_330/public/accounting-580_2.jpg?itok=M8dzi0kF',
    paragraphs: [{
      type: 'text',
      value: 'lorem imsum'
    },{
      type: 'image',
      value: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
    },{
      type: 'text',
      value: 'by a governmental organization in order to fund various public expenditures.[1] A failure to pay, or evasion of or resistance to taxation, is punishable by law. '
    }]
  },{
    title: 'Dopriosi',
    description: 'is a mandatory financial charge or some other type of levy imposed upon a taxpaye',
    date: '30.04.2018',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvRlZYD8KHSgO1hfd_B27Mi557lBUVp6Lc-yFf8Nc7CCY4pSQbYQ',
    paragraphs: [{
      type: 'text',
      value: 'lorem imsum'
    },{
      type: 'image',
      value: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
    },{
      type: 'text',
      value: 'by a governmental organization in order to fund various public expenditures.[1] A failure to pay, or evasion of or resistance to taxation, is punishable by law. '
    }]
  },{
    title: 'Poreski prekrsaji',
    description: 'is a mandatory financial charge or some other type of levy imposed upon a taxpaye',
    date: '30.04.2018',
    image: 'https://n6-img-fp.akamaized.net/free-vector/accounting-background-design_1300-169.jpg?size=338&ext=jpg',
    paragraphs: [{
      type: 'text',
      value: 'lorem imsum'
    },{
      type: 'image',
      value: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
    },{
      type: 'text',
      value: 'by a governmental organization in order to fund various public expenditures.[1] A failure to pay, or evasion of or resistance to taxation, is punishable by law. '
    }]
  },{
    title: 'Zarade',
    description: 'is a mandatory financial charge or some other type of levy imposed upon a taxpaye',
    date: '30.04.2018',
    image: 'https://www.edx.org/sites/default/files/course/image/promoted/courseimages_0005_fin-account_378x225.jpg',
    paragraphs: [{
      type: 'text',
      value: 'lorem imsum'
    },{
      type: 'image',
      value: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
    },{
      type: 'text',
      value: 'by a governmental organization in order to fund various public expenditures.[1] A failure to pay, or evasion of or resistance to taxation, is punishable by law. '
    }]
  },{
    title: 'Neoporezivi iznosi',
    description: 'is a mandatory financial charge or some other type of levy imposed upon a taxpaye',
    date: '30.04.2018',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvRlZYD8KHSgO1hfd_B27Mi557lBUVp6Lc-yFf8Nc7CCY4pSQbYQ',
    paragraphs: [{
      type: 'text',
      value: 'lorem imsum'
    },{
      type: 'image',
      value: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
    },{
      type: 'text',
      value: 'by a governmental organization in order to fund various public expenditures.[1] A failure to pay, or evasion of or resistance to taxation, is punishable by law. '
    }]
  },{
    title: 'Ekonomija Srbije',
    description: 'is a mandatory financial charge or some other type of levy imposed upon a taxpaye',
    date: '30.04.2018',
    image: 'https://en-coller.tau.ac.il/sites/coller-english.tau.ac.il/files/styles/reaserch_main_image_580_x_330/public/accounting-580_2.jpg?itok=M8dzi0kF',
    paragraphs: [{
      type: 'text',
      value: 'lorem imsum'
    },{
      type: 'image',
      value: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
    },{
      type: 'text',
      value: 'by a governmental organization in order to fund various public expenditures.[1] A failure to pay, or evasion of or resistance to taxation, is punishable by law. '
    }]
  },{
    title: 'Rokovi za poreze',
    description: 'Accounting or accountancy is the measurement, processing, and communication of financial information about economic entities[1][2] such as businesses and corporations.',
    date: '30.05.2018',
    image: 'https://onlinestudyaustralia.com/courses/wp-content/uploads/online-accounting-graphics.jpg',
    paragraphs: [{
      type: 'text',
      value: 'lorem imsum2'
    },{
      type: 'image',
      value: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
    },{
      type: 'text',
      value: '2The levying of taxes aims to raise revenue to fund governing and/or to alter prices in order to affect demand. States and their functional equivalents throughout history have used money provided by'
    },{
      type: 'text',
      value: '3cientific research, culture and the arts, public works, distribution, data collection and dissemination, public insurance, and the operation of government itself. A government'
    }]
  }],
  article: {}
};

// Reducer
const taxesReducer = (state = initialState, action) =>
  action.type === SAVE_ARTICLE ? ({ ...state, article: action.article }) :
  state;

// Action Creators
export const saveArticle = article => ({ type: SAVE_ARTICLE, article });

export default taxesReducer;
