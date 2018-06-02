// Actions
const SAVE_ABOUT = 'about/SAVE_ABOUT';

// Initial State
const initialState = {
  about: [{
    title: 'Our Team',
    description: 'MILKA JANICIC - Managing Director',
    image: 'https://www.tmconsulting.co.rs/uploads/useruploads/photos/Milka-Accounting-company-belgrade.jpg',
    icon: 'ios-people',
    paragraphs: [{
        type: 'headline',
        value: 'Partner'
    },{
      type: 'text',
      value: 'Milka Jančić is partner in the company HLB T&M Consulting. She graduated from The Faculty of Economics in 2001, and since then she has provided audit, tax advisory and accounting services. Milka is the certified auditor and cerfitied accountant.'
    },{
        type: 'headline',
        value: 'Proffesional expirience'
    },{
      type: 'text',
      value: 'Prior to establishing HLB T&M Consulting, the longest part of her career Milka spent in the leading international financial and tax consulting companies on a managing positions related to auditing, tax consulting and accounting. '
    },{
      type: 'text',
      value: 'Milka was working In the company Deloitte Ltd Serbia in period 2012 - 2014 as a Manager of accounting department. She was responsible for providing accounting outsourcing and accounting advisory services as well as payroll related services to the clients.'
    },{
      type: 'text',
      value: 'Prior to engagement in Deloitte, from 2008 Milka was employed in the Austrian company Confida Consulting Ltd Serbia as a Managing Director, and most of engagement was related to tax consulting and financial services.'
    },{
      type: 'text',
      value: 'In the period from 2005 - 2008 Milka was Managing director of another Austrian company IB Interbilanz Consulting Ltd Serbia and was responsible for organization and development of the company in Serbia. The most of commitment was related to audit and tax consulting services.'
    },{
        type: 'headline',
        value: 'The most important clients'
    },{
      type: 'text',
      value: 'During career, Milka served a large portfolio of small to large Serbian and international companies from many different business areas.'
    },{
      type: 'text',
      value: 'Some of the major clients that Milka have cooperated with were as follows: Sony HD Win, Deutsche Bank, Carlsberg, Panasonic Electric Works Vossloh-Schwabe Serbia, Porr, Porsche Leasing, Rauch, Doka Serb, Peek & Cloppenburg, Austrian Airlines, Vip Mobile, Muehlbauer, Schmitz Cargobull, Gebrüder Weiss, Knauf Insulation, Nokia Siemens Networks, etc. '
    }]
  },{
    title: 'Our company',
    description: 'WELCOME TO HLB T&M CONSULTING.',
    image: 'https://www.tmconsulting.co.rs/uploads/useruploads/photos/Transfer-pricing-Belgrade.jpg',
    icon: 'ios-images',
    paragraphs: [{
      type: 'text',
      value: 'HLB T&M Consulting is one of the leading accounting and consulting firms in Serbia specialised to support international companies having business in Serbia. We have a strong professional team of accountants, financial and tax compliance specialists with over 15 years of experience in providing efficient and comprehensive compliance solutions for local and multinational companies.'
    },{
      type: 'text',
      value: 'In over six years of steady growth, our company continued to provide first-rate tax advisory and accounting services to international companies with operations in Serbia and become one of the leading consulting partners in Belgrade for financial and tax issues.'
    },{
      type: 'text',
      value: 'HLB T&M Consulting serves clients in Serbia and worldwide as a direct member of Group HLB International, which was formed in London in year 1969. Group is ranked among the top 15 global accounting networks with more than 660 independent accounting and advisory offices in over 160 countries around the world.'
    },{
      type: 'text',
      value: 'As a part of HLB International we are also a member of the Forum of Firms, part of the International Federation of Accountants, and as such commited to the highest qualitiy standards in accordance with International Standards on Quality Control.'
    }]
  },{
    title: 'Our clients',
    description: 'Accounting or accountancy is the measurement, processing, and communication of financial information about economic entities[1][2] such as businesses and corporations.',
    image: 'https://s.hswstatic.com/gif/13-incredible-bat-facts.jpg',
    icon: 'md-people',
    paragraphs: [{
      type: 'image',
      value: 'https://www.tmconsulting.co.rs/uploads/news/thumb_1513693781-Invoices%20In%20Serbia.jpeg'
    },{
      type: 'image',
      value: 'https://www.tmconsulting.co.rs/uploads/news/thumb_1513693781-Invoices%20In%20Serbia.jpeg'
    },{
      type: 'image',
      value: 'http://www.invent.rfid.bg/images/content/EuroAllianceEngineering.jpg'
    },{
      type: 'image',
      value: 'http://news.korcula.net/uploads/2016124342.jpg'
    },{
      type: 'image',
      value: 'https://www.tmconsulting.co.rs/uploads/news/thumb_1513693781-Invoices%20In%20Serbia.jpeg'
    },{
      type: 'image',
      value: 'http://news.korcula.net/uploads/2016124342.jpg'
    },{
      type: 'image',
      value: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
    },{
      type: 'image',
      value: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
    },{
      type: 'image',
      value: 'http://www.invent.rfid.bg/images/content/EuroAllianceEngineering.jpg'
    },{
      type: 'image',
      value: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
    },{
      type: 'image',
      value: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
    },{
      type: 'image',
      value: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
    },{
      type: 'image',
      value: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
    },{
      type: 'image',
      value: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
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
