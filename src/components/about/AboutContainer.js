// Actions
const SAVE_ABOUT = 'about/SAVE_ABOUT';

// Initial State
const initialState = {
  about: [{
    title: {
      en: 'Our Team',
      rs: 'Naš tim'
    },
    subTitle: {
      en: 'More About Us',
      rs: 'Više o našem timu'
    },
    description: {
      en: 'MILKA JANICIC - Managing Director',
      rs: 'MILKA JANIČIĆ - Direktor'
    },
    icon: require('../../../assets/images/iconteam.png'),
    image: 'https://www.tmconsulting.co.rs/uploads/useruploads/photos/Milka-Accounting-company-belgrade.jpg',
    paragraphs: [{
        type: 'headline',
        value: {
          en: 'Partner',
          rs: 'Partner'
        }
    },{
      type: 'text',
      value: {
        en: 'Milka Jančić is partner in the company HLB T&M Consulting. She graduated from The Faculty of Economics in 2001, and since then she has provided audit, tax advisory and accounting services. Milka is the certified auditor and cerfitied accountant.',
        rs: 'Milka Jančić je partner u kompaniji HLB T&M Consulting u Srbiji. Poseduje licence za ovlašćenog revizora I ovlašćenog računovođu. Završila je Ekonomski fakultet i od 2001. godine se bavi revizijom, računovodstvom, poreskim savetovanjem i izradom studija o transfernim cenama.'
      }
    },{
      type: 'headline',
      value: {
        en: 'Proffesional expirience',
        rs: 'Profesionalna karijera'
        }
    },{
      type: 'text',
      value: {
        en: 'Prior to establishing HLB T&M Consulting, the longest part of her career Milka spent in the leading international financial and tax consulting companies on a managing positions related to auditing, tax consulting and accounting.',
        rs: 'Veliki deo poslovne karijere provela je na pozicijama menadžera u vodećim međunarodnim konsultantskim kompanijama koje pružaju usluge iz oblasti finansijskog, poreskog i pravnog savetovanja'
      }
    },{
      type: 'text',
      value: {
        en: 'Milka was working In the company Deloitte Ltd Serbia in period 2012 - 2014 as a Manager of accounting department. She was responsible for providing accounting outsourcing and accounting advisory services as well as payroll related services to the clients.',
        rs: 'U kompaniji Deloitte Milka je bila direktor računovodstvenog sektora u periodu od 2011 - 2013 godine. Bila je zadužena za eksterno računovodstvo i savetovanje u vezi računovodstvom kao i za usluge obračuna zarada za klijente.'
      }
    },{
      type: 'text',
      value: {
        en: 'Prior to engagement in Deloitte, from 2008 Milka was employed in the Austrian company Confida Consulting Ltd Serbia as a Managing Director, and most of engagement was related to tax consulting and financial services.',
        rs: 'Pre angažmana u kompaniji Deloitte, u periodu od 2008. godine Milka je bila angažovana u austrijskoj kompaniji Confiida Consulting na mestu direktora kompanije, a najveći deo angažovanja bio je na poslovima poreskog savetovanja i računovodstva.'
      }
    },{
      type: 'text',
      value: {
        en: 'In the period from 2005 - 2008 Milka was Managing director of another Austrian company IB Interbilanz Consulting Ltd Serbia and was responsible for organization and development of the company in Serbia. The most of commitment was related to audit and tax consulting services.',
        rs: '2005 - 2008. godine Milka je bila zaposlena u još jednoj austrijskoj kompaniji IB Interbilanz Consulting na mestu direktora kompanije i odgovorna za osnivanje, razvoj kompanije i svih njenih odeljenja, pronalaženje klijenata kao i rad sektora za reviziju i poresko savetovanje.'
      }
    },{
      type: 'headline',
      value: {
        en: 'The most important clients',
        rs: 'Najznačajniji klijenti'
      }
    },{
      type: 'text',
      value: {
        en: 'During career, Milka served a large portfolio of small to large Serbian and international companies from many different business areas.',
        rs: 'Milka je pružala usluge velikom broju klijenata od mikro do velikih srpskih i internacionalnih kompanija iz različitih oblasti poslovanja, uključujući proizvodne kompanije, maloprodajne kompanije, komapanije koje se bave pružanjem usluga i druge.'
      }
    },{
      type: 'text',
      value: {
        en: 'Some of the major clients that Milka have cooperated with were as follows: Sony HD Win, Deutsche Bank, Carlsberg, Panasonic Electric Works Vossloh-Schwabe Serbia, Porr, Porsche Leasing, Rauch, Doka Serb, Peek & Cloppenburg, Austrian Airlines, Vip Mobile, Muehlbauer, Schmitz Cargobull, Gebrüder Weiss, Knauf Insulation, Nokia Siemens Networks, etc. ',
        rs: 'Neki od značajnijih klijenata sa kojima je sarađivala su: Sony HD Win, Deutsche Bank, Carlsberg, Panasonic Electric Works Vossloh-Schwabe Serbia, Porr, Porsche Leasing, Rauch, Doka Serb, Peek & Cloppenburg, Austrian Airlines, Vip Mobile, Muehlbauer, Schmitz Cargobull, Gebrüder Weiss, Knauf Insulation, Nokia Siemens Networks.'
      }
    }]
  },{
    title: {
      en: 'Our company',
      rs: 'Naša kompanija'
    },
    subTitle: {
      en: 'More About Our Company',
      rs: 'Više o našoj kompaniji'
    },
    description: {
      en: 'WELCOME TO HLB T&M CONSULTING.',
      rs: 'DOBRODOŠLI'
    },
    image: 'https://www.tmconsulting.co.rs/uploads/useruploads/photos/Transfer-pricing-Belgrade.jpg',
    icon: require('../../../assets/images/iconCompany.png'),
    paragraphs: [{
      type: 'text',
      value:{
        en: 'HLB T&M Consulting is one of the leading accounting and consulting firms in Serbia specialised to support international companies having business in Serbia. We have a strong professional team of accountants, financial and tax compliance specialists with over 15 years of experience in providing efficient and comprehensive compliance solutions for local and multinational companies.',
        rs: 'Sedište kompanije HLB T&M Consulting doo se nalazi se u Beogradu i pružamo usluge računovodstva, poreskog savetovanja, pravnog savetovanja i izrade studija o transfernim cenama. '
      }
    },{
      type: 'text',
      value: {
        en: 'In over six years of steady growth, our company continued to provide first-rate tax advisory and accounting services to international companies with operations in Serbia and become one of the leading consulting partners in Belgrade for financial and tax issues.',
        rs: 'Naš tim okuplja stručnjake koji su poslovno iskustvo sticali u vodećim međunarodnim kompanijama iz oblasti finansijskog i poreskog savetovanja.'
      }
    },{
      type: 'text',
      value: {
        en: 'HLB T&M Consulting serves clients in Serbia and worldwide as a direct member of Group HLB International, which was formed in London in year 1969. Group is ranked among the top 15 global accounting networks with more than 660 independent accounting and advisory offices in over 160 countries around the world.',
        rs: 'Od 2012. godine kompanija je deo internacionalne mreže finansijskih savetnika HLB International, čime smo dobili međunarodno priznanje i mogućnost međunarodnog delovanja bez gubitka nacionalnog identiteta. '
      }
    },{
      type: 'text',
      value: {
        en: 'As a part of HLB International we are also a member of the Forum of Firms, part of the International Federation of Accountants, and as such commited to the highest qualitiy standards in accordance with International Standards on Quality Control.',
        rs: 'Međunarodna mreža HLB International je osnovana 1969. godine u Londonu i sada je svetski poznata grupacija nezavisnih računovodstvenih kompanija i finansijskih savetnika. Mreža HLB poseduje preko 500 predstavništava koji posluju u više od 130 zemalja sveta.'
      }
    }]
  },{
    title: {
      en: 'Our clients',
      rs: 'Naši klijenti'
    },
    subTitle: {
      en: 'More About Our Clients',
      rs: 'Više o našim klijentima'
    },
    description: {
      en: 'Accounting or accountancy is the measurement, processing, and communication of financial information about economic entities[1][2] such as businesses and corporations.',
      rs: 'jjj'
    },
    image: 'https://s.hswstatic.com/gif/13-incredible-bat-facts.jpg',
    icon: require('../../../assets/images/iconClients.png'),
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
