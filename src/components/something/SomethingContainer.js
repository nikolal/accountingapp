// Actions
const SAVE_ABOUT = 'incentives/SAVE_ABOUT';

// Initial State
const initialState = {
  incentives: [{
    title: {
      en: '????',
      rs: 'Olakšice za nova zapošljavanja'
    },
    subTitle: {
      en: 'Learn More...',
      rs: 'Saznajte više...'
    },
    description: {
      en: '???',
      rs: 'Olakšice za zapošljavanje novih radnika'
    },
    image: require('../../../assets/images/milkaSlika.png'),
    paragraphs: [{
        type: 'headline',
        value: {
          en: '???',
          rs: 'Olakšice za novoosnovane firme'
        }
    },{
      type: 'text',
      value: {
        en: '??????',
        rs: 'Olakšice za novoosnovane firme su poreska oslobođenja za poslodavce koji počinju sa obavljanjem delatnosti. '
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Poslodavci koji mogu ostvariti pravo na oslobođenje od plaćanja poreza i doprinosa su nova pravna lica i preduzetnici, registrovani u Agenciji za privredne registre. '
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Mogu biti oslobođeni za: porez i doprinose za zarade osnivača pravnog lica, porez i doprinose za lične zarade preduzetnika,porez i doprinose za zarade novozaposlenih.'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Olakšice se mogu ostvariti za najviše devet novih zaposlenih koji ispune uslove. Pravo nema preduzetnik paušalac, preduzetnik poljoprivrednik i preduzetnik drugo lice. '
      }
    },{
      type: 'text',
      value: {
        en: '???',
        rs: 'Poresko oslobođenje od plaćanja poreza i doprinosa počinje sa primenom 01. oktobra 2018. godine. Važi za firme koje su počele da rade najranije tog datuma.'
      }
    },{
      type: 'text',
      value: {
        en: '???/',
        rs: 'Poslodavci i nove firme te olakšice mogu ostvariti zaključno sa 31.12.2020. (poslodavac mora biti registovan najkasnije tog datuma).'
      }
    },{
      type: 'headline',
      value: {
        en: '????',
        rs: 'Uslovi za poslodavce i novozaposlene'
      }
    },{
      type: 'text',
      value: {
        en: '???/',
        rs: 'Da bi firma dobila olakšice, moraju biti ispunjeni uslovi: osnivači i preduzetnici moraju zasnovati radni odnos i biti prijavljeni na socijalno osiguranje, sa novim zaposlenima moraju biti zaključeni ugovori o radu, da su osnivači / preduzetnici bili nezaposlena lica, studenti ili učenici u prethodnih 12 meseci,da su novi zaposleni bili nezaposlena lica, studenti i učenici u prethodnih 12 meseci.'
      }
    }]
  },{
    title: {
      en: 'Our Company',
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
    icon: require('../../../assets/images/iconCompany.png'),
    image: require('../../../assets/images/servicesImagex.png'),
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
      en: 'Our Clients',
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
const incentiveReducer = (state = initialState, action) =>
  action.type === SAVE_ABOUT ? ({ ...state, article: action.article }) :
  state;

// Action Creators
export const saveArticle = article => ({ type: SAVE_ABOUT, article });

export default incentiveReducer;
