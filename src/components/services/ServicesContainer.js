// Actions
const SAVE_SERVICES = 'ourServices/SAVE_SERVICES';

// Initial State
const initialState = {
  description: {
    en: 'Our Services Portfolio',
    rs: 'Naše usluge'
  },
  headerTitle: {
    en: 'About Company',
    rs: 'O kompaniji'
  },
  ourServices: [{
    title: {
      en: 'Financial Services',
      rs: 'Finansijske usluge '
    },
    subTitle: {
      en: 'Accounting, paroll, audit',
      rs: 'Računovodstvo, finansijsko savetovanje'
    },
    image: 'archive',
    icon: require('../../../assets/images/iconteam.png'),
    paragraphs: [{
      type: 'headline',
      value: {
        en: 'Accounting Services',
        rs: 'Računovodstvene usluge'
      }
    },{
      type: 'text',
      value: {
        en: 'Bookkeeping services in line with local legislation',
        rs: 'Knjigovodstvene usluge'
      }
    },{
      type: 'text',
      value: {
        en: 'Implementation of accounting system and coorporate procedures',
        rs: 'Izrada računovodstvenih politika i internih akata '
      }
    },{
      type: 'text',
      value: {
        en: 'Payroll services',
        rs: 'Obračun zarada'
      }
    },{
      type: 'text',
      value: {
        en: 'Preparation of Balance sheet and P&L statement',
        rs: 'Izrada završnog računa (bilans uspeha, bilans stanja, poreski bilans)'
      }
    },{
      type: 'text',
      value: {
        en: 'Mounthly/quartely/yearly reporting to the client s group',
        rs: 'Mesečno/kvartalno/godišnje izveštavanje u skladu sa zahtevom klijenta '
      }
    },{
      type: 'text',
      value: {
        en: 'Implementation of IFRS for SME',
        rs: 'Savetovanje u vezi sa MRS/MSFI '
      }
    },{
      type: 'headline',
      value: {
        en: 'Financial & Business Consulting',
        rs: 'Finansijsko & poslovno savetovanje'
      }
    },{
      type: 'text',
      value: {
        en: 'Audits of financial statements and special audits',
        rs: 'Revizorske usluge '
      }
    },{
      type: 'text',
      value: {
        en: 'Preparation of financial due diligence reports',
        rs: 'Izrada finansijskih Due Diligence izveštaja'
      }
    },{
      type: 'text',
      value: {
        en: 'Company and assets valuations',
        rs: 'Procena vrednosti kapitala i imovine '
      }
    },{
      type: 'text',
      value: {
        en: 'Mergers and acquisitions',
        rs: 'Spajanje i pripajanje kompanija '
      }
    },{
      type: 'text',
      value: {
        en: 'Restructuring & exit strategies',
        rs: 'Restuktuiranje i strategije izlaska '
      }
    },{
      type: 'text',
      value: {
        en: 'Preparation of business plans',
        rs: 'Izrada biznis planova'
      }
    },{
      type: 'text',
      value: {
        en: 'Assistance in the process of audit',
        rs: 'Podrška pri radu sa revizorima '
      }
    }]
  },{
    title: {
      en: 'Tax services',
      rs: 'Poreske usluge'
    },
    subTitle: {
      en: 'VAT, profit tax,  tax optimisation',
      rs: 'Porez na dobit, PDV, porez na dohodak'
    },
    image: 'book',
    icon: require('../../../assets/images/iconCompany.png'),
    paragraphs: [{
      type: 'headline',
      value: {
        en: 'On-going Tax Support',
        rs: 'Savetodavna poreska podrška'
      }
    },{
      type: 'text',
      value: {
        en: 'Monthly support in ongoing tax issues',
        rs: 'Podrška na mesečnom nivou u vezi sa svim poreskim pitanjima '
      }
    },{
      type: 'text',
      value: {
        en: 'Tax reviews (montly/quarterly/annualy)',
        rs: 'Poreski pregledi na mesečnom/kvartalnom/godišnjem nivou'
      }
    },{
      type: 'text',
      value: {
        en: 'Consulting in Corporate income taxes, VAT, Personal taxes, Withholding tax, and others',
        rs: 'Poresko savetovanje: PDV, porez na dohodak, porez na dobit, porez po odbitku'
    }
    },{
      type: 'text',
      value: {
        en: 'Preparation and submission of tax returns',
        rs: 'Priprema i podnošenje poreskih prijava'
      }
    },{
      type: 'text',
      value: {
        en: 'Tax optimization',
        rs: 'Poreska optimizacija '
      }
    },{
      type: 'text',
      value: {
        en: 'Dealing wiht tax authorities: writing compliances, leading the process',
        rs: 'Priprema poreskog bilansa '
      }
    },{
      type: 'text',
      value: {
        en: 'Preparation of income tax balance',
        rs: 'Savetovanje pri vođenju poreskih postupaka'
      }
    },{
      type: 'text',
      value: {
        en: 'Thin capitalization advisory',
        rs: 'Savetovanje u vezi sa utanjenom kapitalizacijom'
      }
    },{
      type: 'headline',
      value: {
        en: 'Tax Consulting',
        rs: 'Ostale poreske usluge'
      },
    },{
      type: 'text',
      value: {
        en: 'Preparation of tax due diligence reports',
        rs: 'Priprema poreskih Due Diligence izveštaja'
      },
    },{
      type: 'text',
      value: {
        en: 'Following and implementation of tax grants',
        rs: 'Obaveštavanje u vezi sa novim poreskim propisima '
      }
    }]
  },{
    title: {
      en: 'Transfer Pricing',
      rs: 'Transferne cene'
    },
    subTitle: {
      en: 'Transfer pricing reports',
      rs: 'Izrada studija o transfernim cenama'
    },
    image: 'calculator',
    icon: require('../../../assets/images/iconClients.png'),
    paragraphs: [{
      type: 'headline',
      value: {
        en: 'Tranfer Pricing Report',
        rs:  'Studije o transfernim cenama'
      }
    },{
      type: 'text',
      value: {
        en: 'Identification and understanding of transactions with related parties',
        rs: 'Identifikovanje transakcija sa povezanim licima'
    }
    },{
      type: 'text',
      value: {
        en: 'Analysis of functions and risks in relation with related entity',
        rs: 'Analiza obavljenih delatnosti, preuzetih rizika i korišćenih sredstava'
      }
    },{
      type: 'text',
      value: {
        en: 'Selection of appropriate transfer pricing methodology',
        rs: 'Odabir odgovarajuće metode utvrđivanja transfernih cena'
      }
    },{
      type: 'text',
      value: {
        en: 'Assistance in identifying the arm’s length range of prices/profitability levels of the transactions by benchmarking these against adequate market comparable',
        rs: 'Identifikovanje izvora informacija o uporednim eksternim i internim cenama'
      }
    },{
      type: 'text',
      value: {
        en: 'Preparation of benchmark analisys via specialised software databases',
        rs: 'Priprema “benchmark analize“ pomoću specijalizovanih baza podataka '
      }
    },{
      type: 'headline',
      value: {
        en: 'Tranfer Pricing Consulting',
        rs: 'Savetovanje o transfernim cenama'
      },
    },{
      type: 'text',
      value: {
        en: 'Advices in pricing policy with related parties',
        rs: 'Savetovanje u vezi cenovne politike sa povezanim licima '
      }
    },{
      type: 'text',
      value: {
        en: 'Control of excisting transfer pricing policy and alignment with local legislation',
        rs: 'Priprema interkompanijiskih ugovora'
      }
    },{
      type: 'text',
      value: {
        en: 'Consulting related to services provided by Group',
        rs: 'Savetovanje u vezi konsultantskih usluga pruženih od Grupe'
      }
    },{
      type: 'text',
      value: {
        en: 'Support in a process of tax control',
        rs: 'Pordška u postupku poreske kontrole'
      }
    }]
  },{
    title: {
      en: 'Legal Services',
      rs: 'Pravne usluge'
    },
    subTitle: {
      en: 'Coorporate and labor law',
      rs: 'Korporativno i radno pravo'
    },
    image: 'briefcase',
    icon: require('../../../assets/images/Shape.png'),
    paragraphs: [{
      type: 'headline',
      value: {
        en: 'Coorporative & contrct law',
        rs: 'Radno pravo'
      }
    },{
      type: 'text',
      value: {
        en: 'Company formation services',
        rs: 'Savetovanje u vezi sa svim odlukama o zapošljavanju i uslovima rada'
      }
    },{
      type: 'text',
      value: {
        en: 'Drafting of founding acts, shareholders agreements, internal acts and other coorporate documents',
        rs: 'Izrada pravilnika o radu, ugovora o radu i aneksa istih kao i sporazuma o prestanku radnog odnosa uključujući i ostalu potrebnu dokumentaciju '
      }
    },{
      type: 'text',
      value: {
        en: 'Drafting of comercial agreements',
        rs: 'Podrška u sporovima u vezi sa radnim odnosima '
      }
    },{
      type: 'headline',
      value: {
        en: 'Labur Law',
        rs: 'Korporativno & Ugovorno pravo'
      }
    },{
      type: 'text',
      value: {
        en: 'Advisory for establishment of employment policy',
        rs: 'Osnivanje svih pravnih formi privrednih društava i drugih pravnih lica'
      }
    },{
      type: 'text',
      value: {
        en: 'Preparation of employment rulebook, labor agreements, labor termination agreements',
        rs: 'Konsultacije, pregovori i izrada osnivačkih akata, statuta, ugovora članova društva, pravilnika o internim procedurama i drugih internih korporativnih dokumenata '
      }
    },{
      type: 'text',
      value: {
        en: 'Support during litigation',
        rs: 'Izrada svih vrsta komercijalnih ugovora'
      }
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
