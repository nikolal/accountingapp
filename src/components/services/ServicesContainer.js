// Actions
const SAVE_SERVICES = 'ourServices/SAVE_SERVICES';

// Initial State
const initialState = {
  ourServices: [{
    title: 'Financial Services',
    image: 'archive',
    icon: 'arrow-right',
    paragraphs: [{
      type: 'headline',
      value: 'ACCOUNTING SERVICES'
    },{
      type: 'text',
      value: 'Implementation of accounting system and coorporete procedures'
    },{
      type: 'text',
      value: 'Bookkeeping services in line with local legistaltion'
    },{
      type: 'text',
      value: 'Payroll accounting'
    },{
      type: 'text',
      value: 'Preparation of Balance Sheet, P&L Accounting'
    },{
      type: 'text',
      value: 'Preparation of all statutory reports'
    },{
      type: 'text',
      value: 'Mounthly/quartely/yearly reporting to the client s group'
    },{
      type: 'text',
      value: 'Implementation of IFRS for SME'
    },{
      type: 'headline',
      value: 'FINANCIAL & BUSINESS CONSULTING'
    },{
      type: 'text',
      value: 'Audits of financial statements and special audits'
    },{
      type: 'text',
      value: 'Preparation of financial due diligence reports'
    },{
      type: 'text',
      value: 'Company and assets valuations'
    },{
      type: 'text',
      value: 'Mergers and acquisitions'
    },{
      type: 'text',
      value: 'Restructuring & exit stratiegis'
    }]
  },{
    title: 'Bookkeeping Services',
    image: 'book',
    icon: 'arrow-right',
    paragraphs: [{
      type: 'headline',
      value: 'TRANSFER PRICING '
    },{
      type: 'text',
      value: 'NEMAM'
    },{
      type: 'text',
      value: 'Analysis of the functions performed, risks assumed and assets'
    },{
      type: 'text',
      value: 'Selection of appropriate transfer pricing methodology'
    },{
      type: 'text',
      value: 'Assistance in identifying the arm’s length range of prices/profitability levels of the transactions by benchmarking these against adequate market comparable'
    }]
  },{
    title: 'Transfer Pricing',
    image: 'calculator',
    icon: 'arrow-right',
    paragraphs: [{
      type: 'headline',
      value: 'TRANSFER PRICING '
    },{
      type: 'text',
      value: 'Identification and understanding of transactions with related parties'
    },{
      type: 'text',
      value: 'Analysis of the functions performed, risks assumed and assets'
    },{
      type: 'text',
      value: 'Selection of appropriate transfer pricing methodology'
    },{
      type: 'text',
      value: 'Assistance in identifying the arm’s length range of prices/profitability levels of the transactions by benchmarking these against adequate market comparable'
    },{
      type: 'headline',
      value: 'TRANFER PRICING CONSULTING',
    },{
      type: 'text',
      value: 'Advices in pricing policy with related parties'
    },{
      type: 'text',
      value: 'Dealing with tax authorities during tax audits'
    }]
  },{
    title: 'Legal Services',
    image: 'briefcase',
    icon: 'arrow-right',
    paragraphs: [{
      type: 'headline',
      value: 'COORPORATIVE & CONTRACT LAW'
    },{
      type: 'text',
      value: 'Incorporation of all legal forms of companies and other legal entities'
    },{
      type: 'text',
      value: "Counseling, negotiation and drafting ofassociations’ memorandums and articles,shareholders' agreements, rules of internal rocedures and other corporate documents"
    },{
      type: 'text',
      value: 'Drafting all kinds of commercial contracts'
    },{
      type: 'headline',
      value: 'LABOUR LAW',
    },{
      type: 'text',
      value: "Preparing general legal acts for employers or for employers 'associations"
    },{
      type: 'text',
      value: 'Drafting of employment rulebook, employment contracts and mutual termination agreements'
    }]
  }],
  services: {}
};

// Reducer
const servicesReducer = (state = initialState, action) =>
  action.type === SAVE_SERVICES ? ({ ...state, services: action.services }) :
  state;

// Action Creators
export const saveServices = services => ({ type: SAVE_SERVICES, services });

export default servicesReducer;
