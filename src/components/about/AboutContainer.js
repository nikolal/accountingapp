// Actions
const SAVE_ABOUT = 'about/SAVE_ABOUT';

// Initial State
const initialState = {
  about: [{
    title: {
      en: 'Our Team',
      rs: 'Naš tim'
    },
    clientType: 'noClients',
    subTitle: {
      en: 'More About Us',
      rs: 'Više o našem timu'
    },
    description: {
      en: 'MILKA JANIČIĆ',
      rs: 'MILKA JANIČIĆ - Direktor'
    },
    icon: require('../../../assets/images/iconteam.png'),
    image: require('../../../assets/images/milkaSlika.png'),
    paragraphs: [{
        type: 'headline',
        value: {
          en: 'Managing Partner',
          rs: 'Partner'
        }
    },{
      type: 'text',
      value: {
        en: 'Milka graduated from The Faculty of Economics in 2001, and since then she has provided audit, accounting, financial & tax advisory services. She is certified accountant and auditor.',
        rs: 'Milka je osnivač i direktor kompanije HLB T&M Consulting d.o.o. Završila je Ekonomski fakultet i od 2001. godine se bavi računovodstvom, revizijom i poreskim savetovanjem. Ovlašćeni je revizor i računovođa.'
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
        en: 'Prior to establishing HLB T&M Consulting, the longest part of career Milka spent in the leading international financial and tax consulting companies Deloitte, Confida Consulting and IB Interbilanz Consulting on a managing positions related to financial consulting, accounting, auditing and tax.',
        rs: 'Najveći deo svoje karijere provela je u međunarodnim konsultantskim kompanijama iz oblasti poreza i finansija Deloitte, Confida Consulting i IB Interbilanz Consulting, baveći se poslovima računovodstva, poreskog savetovanja i revizije.'
      }
    },{
      type: 'text',
      value: {
        en: 'Milka was working In the company Deloitte Ltd Serbia in period 2012 - 2014 as a Manager of accounting department. She was responsible for providing accounting outsourcing and accounting advisory services as well as payroll related services to the clients.',
        rs: 'U kompaniji Deloitte d.o.o. Beograd, Milka je bila zaposlena kao direktor računovodstvenog sektora u periodu od 2011. godine do 2013. godine. Bila je zadužena za eksterno računovodstvo i savetovanje u vezi računovodstvom kao i za usluge obračuna zarada za klijente'
      }
    },{
      type: 'text',
      value: {
        en: 'Prior to engagement in Deloitte, from 2008 Milka was employed in the Austrian company specialized for financial and tax consulting Confida Consulting Ltd Serbia as a Managing Director, and most of the engagement was related to tax consulting and financial services.',
        rs: 'Pre angažmana u kompaniji Deloitte, u periodu od 2008. godine Milka je bila zaposlena u austrijskoj kompaniji za računovodstvo i reviziju Confiida Consulting d.o.o. na mestu direktora kompanije, a najveći deo angažovanja bio je na poslovima poreskog savetovanja i računovodstva. '
      }
    },{
      type: 'text',
      value: {
        en: '',
        rs: 'Od 2005. godine do 2008. godine Milka je bila zaposlena u još jednoj austrijskoj kompaniji kza poresko savetovanje, reviziju i računovodstvo IB Interbilanz Consulting d.o.o. na mestu direktora kompanije i odgovorna za osnivanje, razvoj kompanije i svih njenih odeljenja, pronalaženje klijenata kao i rad sektora za reviziju i poresko savetovanje.'
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
        rs: 'Milka je pružala usluge velikom broju klijenata od mikro do velikih srpskih i internacionalnih kompanija iz različitih oblasti poslovanja, uključujući proizvodne kompanije, maloprodajne kompanije, komapanije koje se bave pružanjem usluga i sl.'
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
      en: 'HLB T&M Consulting',
      rs: 'HLB T&M Consulting'
    },
    clientType: 'noClients',
    subTitle: {
      en: 'More About Our Company',
      rs: 'Više o našoj kompaniji'
    },
    description: {
      en: 'WELCOME TO HLB T&M CONSULTING.',
      rs: 'DOBRODOŠLI'
    },
    icon: require('../../../assets/images/iconCompany.png'),
    image: require('../../../assets/images/servicesImagex.png'),
    paragraphs: [{
      type: 'text',
      value:{
        en: 'Headquarter of HLB T&M Consulting is located in Belgrade and we provide accounting, financial, tax and legal consulting services. HLB has a strong professional team of accountants, payroll and legal compliance specialists with over 15 years of experience in providing efficient and comprehensive compliance solutions for multinational companies setting up their operations or already operating in Serbia.',
        rs: 'Sedište kompanije HLB T&M Consulting nalazi se u Beogradu i pružamo usluge računovodstva, poreskog, finansijskog i pravnog savetovanja, kao i izrade studija o transfernim cenama.'
      }
    },{
      type: 'text',
      value: {
        en: 'HLB T&M Consulting serves clients in Serbia and worldwide as a direct part of the group HLB International, which was formed in London in 1969. Group is ranked among the top 15 global financial networks with more than 660 independent accounting and advisory offices in over 140 countries around the world.',
        rs: 'Navedene usluge pružamo velikom broju klijenata, počev od velikih međunarodnih kompanija koje posluju u Srbiji pa do malih i srednjih domaćih preduzeća. Naš tim čine stručnjaci koji su prethodno iskustvo sticali u vodećim međunarodnim kompanijama koje posluju u oblasti revizije, računovodstva i poreskog savetovanja.'
      }
    },
    {
      type: 'headline',
      value: {
        en: 'HLB International',
        rs: 'HLB International'
        }
    },{
      type: 'text',
      value: {
        en: 'As a part of HLB International we are also a member of the Forum of Firms, part of the International Federation of Accountants, and as such committed to the highest quality standards in accordance with International Standards on Quality Control.',
        rs: 'Kompanija je HLB T&M Consulting pruža konsultantske usluge klijentima u Srbiji ali i širom sveta kao deo međunarodne grupacije HLB International koja je osnovana u Londonu 1969. godine. Grupa se nalazi među 15 najvećih svetskih grupacija za poresko i finansijsko savetovanje, u čijem sastavu posluje preko 660 kompanija u 160 zemalja sveta.'
      }
    },{
      type: 'text',
      value: {
        en: 'In over six years of steady growth, our company continued to provide first-rate tax advisory and accounting services to international companies with operations in Serbia and become one of the leading consulting partners in Belgrade for financial and tax issues.',
        rs: 'Kao deo grupacije HLB International, naša kompanije je član i međunarodne federacije računovodstvenih kompanija Forum of Firms. Kao član Forum of Firms, u obavezi smo da sprovodimo naviše standarde kvaliteta finansijskih i poreskih usluga a sve u skladu sa važećim međunarodnim standardima. U preko 6 godina rasta kompanije, nastavili smo da pružamo kvalitetne poreske i finansijske usluge međunarodnim kompanijama koje imaju poslovanje u Srbiji i postali smo jedna od vodećih konsultantskih kompanija u Beogradu u oblasti poreza i računovodstva.'
      }
    }]
  },{
    title: {
      en: 'Our Clients',
      rs: 'Naši klijenti'
    },
    clientType: 'clients',
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
