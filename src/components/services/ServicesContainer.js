// Actions
const SAVE_SERVICES = 'ourServices/SAVE_SERVICES';

// Initial State
const initialState = {
  ourServices: [{
    title: 'Financial Services',
    image: 'https://www.tmconsulting.co.rs/uploads/useruploads/1449331472-icon1-registry-bg.png',
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
    image: 'https://www.tmconsulting.co.rs/uploads/useruploads/1449331509-icon4-book-bg.png',
    icon: 'arrow-right',    
    paragraphs: [{
      type: 'text',
      value: 'Milana lorem ipsum2 lorem <iosum> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, ab sequi rem quaerat maxime. Repellendus tempore commodi esse a dolore, quibusdam delectus eveniet deserunt necessitatibus, omnis molestias illo iure iste.</iosum> Lu'
    },{
      type: 'text',
      value: 'Nikola lorem imsum2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, ab sequi rem quaerat maxime. Repellendus tempore commodi esse a dolore, quibusdam delectus eveniet deserunt necessitatibus, lorem loremm lorem ipsum lorem lorem ipsum lorem  lorem Lukic'
    },{
      type: 'text',
      value: 'SEka lorem imsum3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, ab sequi rem quaerat maxime. Repellendus tempore commodi esse a dolore, quibusdam delectus eveniet deserunt necessitatibus, Skana'
    }]
  },{
    title: 'Transfer Pricing',
    image: 'https://www.tmconsulting.co.rs/uploads/useruploads/1449331452-icon2-peopele-bg.png',
    icon: 'arrow-right',  
    paragraphs: [{
      type: 'text',
      value: 'lorem imsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, ab sequi rem quaerat maxime. Repellendus tempore commodi esse a dolore, quibusdam delectus eveniet deserunt necessitatibus,'
    },{
      type: 'text',
      value: 'lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, ab sequi rem quaerat maxime. Repellendus tempore commodi esse a dolore, quibusdam delectus eveniet deserunt necessitatibus, imsum'
    }]
  },{
    title: 'Tax Services',
    image: 'https://www.tmconsulting.co.rs/uploads/useruploads/1449331497-icon3-monitor-bg.png',
    icon: 'arrow-right',  
    paragraphs: [{
      type: 'text',
      value: 'Milana lorem ipsum2 lorem <iosum> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, ab sequi rem quaerat maxime. Repellendus tempore commodi esse a dolore, quibusdam delectus eveniet deserunt necessitatibus, omnis molestias illo iure iste.</iosum> Lu'
    },{
      type: 'text',
      value: 'Nikola lorem imsum2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, ab sequi rem quaerat maxime. Repellendus tempore commodi esse a dolore, quibusdam delectus eveniet deserunt necessitatibus, lorem loremm lorem ipsum lorem lorem ipsum lorem  lorem Lukic'
    },{
      type: 'text',
      value: 'SEka lorem imsum3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, ab sequi rem quaerat maxime. Repellendus tempore commodi esse a dolore, quibusdam delectus eveniet deserunt necessitatibus, Skana'
    }]
  },{
    title: 'Legal Services',
    image: 'https://www.tmconsulting.co.rs/uploads/useruploads/1449331509-icon4-book-bg.png',
    icon: 'arrow-right',
    paragraphs: [{
      type: 'text',
      value: 'lorem imsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, ab sequi rem quaerat maxime. Repellendus tempore commodi esse a dolore, quibusdam delectus eveniet deserunt necessitatibus,'
    },{
      type: 'text',
      value: 'lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, ab sequi rem quaerat maxime. Repellendus tempore commodi esse a dolore, quibusdam delectus eveniet deserunt necessitatibus, imsum'
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
