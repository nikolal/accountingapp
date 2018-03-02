// Actions
const SAVE_ABOUT = 'about/SAVE_ABOUT';

// Initial State
const initialState = {
  about: [{
    title: 'Our Team',
    description: 'MILKA JANICIC - Managing Director',
    image: 'https://www.tmconsulting.co.rs/uploads/useruploads/photos/Milka-Accounting-company-belgrade.jpg',
    paragraphs: [{
        type: 'headline',
        value: 'PARTNER'
    },{
      type: 'text',
      value: 'Milka Jančić is partner in the company HLB T&M Consulting. She graduated from The Faculty of Economics in 2001, and since then she has provided audit, tax advisory and accounting services. Milka is the certified auditor and cerfitied accountant.'
    },{
        type: 'headline',
        value: 'PROFFESIONAL EXPIRIENCE'
    },{
      type: 'text',
      value: 'lorePrior to establishing HLB T&M Consulting, the longest part of her career Milka spent in the leading international financial and tax consulting companies on a managing positions related onsectetur adipisicing elit. Quis tempore, commodi sit labore ad, accusamus aspernatur ullam quam tenetur id ipsum officia porro! Harum, sed facilis laborum, id error accusamus.'
    },{
      type: 'text',
      value: 'lorem imsum3, lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quo nulla cumque reiciendis quod, recusandae nisi, non, distinctio molestias eveniet obcaecati? Tempore, deserunt commodi cupiditate nisi magnam quaerat sapiente iste.'
    },{
      type: 'text',
      value: 'lorePrior to establishing HLB T&M Consulting, the longest part of her career Milka spent in the leading international financial and tax consulting companies on a managing positions related onsectetur adipisicing elit. Quis tempore, commodi sit labore ad, accusamus aspernatur ullam quam tenetur id ipsum officia porro! Harum, sed facilis laborum, id error accusamus.'
    },{
      type: 'text',
      value: 'lorem imsum3, lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quo nulla cumque reiciendis quod, recusandae nisi, non, distinctio molestias eveniet obcaecati? Tempore, deserunt commodi cupiditate nisi magnam quaerat sapiente iste.'
    },{
        type: 'headline',
        value: 'THE MOST IMPORTANT CLIENTS'
    },{
      type: 'text',
      value: 'Some of the major clients that Milka have cooperated with were as follows: Sony HD Win, Deutsche Bank, Carlsberg, Panasonic Electric Works Vossloh-Schwabe Serbia, Porr, Porsche Leasing, Rauch, Doka Serb, Peek & Cloppenburg, Austrian Airlines, Vip Mobile, Muehlbauer, Schmitz Cargobull, Gebrüder Weiss, Knauf Insulation, Nokia Siemens Networks, etc. '
    }]
  },{
    title: 'Our company',
    description: 'WELCOME TO HLB T&M CONSULTING.',
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
