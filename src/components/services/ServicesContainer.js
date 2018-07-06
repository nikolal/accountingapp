// Actions
const SAVE_SERVICES = 'ourServices/SAVE_SERVICES';

// Initial State
const initialState = {
  description: {
    en: 'Our Services Portfolio',
    rs: 'Naše usluge'
  },
  ourServices: [{
    title: {
      en: 'Financial Services',
      rs: 'Finansijske usluge '
    },
    image: 'archive',
    icon: 'arrow-right',
    paragraphs: [{
      type: 'headline',
      value: {
        en: 'ACCOUNTING SERVICES',
        rs: 'RAČUNOVODSTVENE USLUGE'
      }
    },{
      type: 'text',
      value: {
        en: 'Implementation of accounting system and coorporete procedures',
        rs: 'Izrada računovodstvenih politika i internih akata '
      }
    },{
      type: 'text',
      value: {
        en: 'Bookkeeping services in line with local legistaltion',
        rs: 'Knjigovodstvene usluge u skladu sazakonskom regulativom '
      }
    },{
      type: 'text',
      value: {
        en: 'Payroll accounting',
        rs: 'Obračun zarada'
      }
    },{
      type: 'text',
      value: {
        en: 'Preparation of Balance Sheet, P&L Accounting',
        rs: 'Izrada završnog računa'
      }
    },{
      type: 'text',
      value: {
        en: 'Preparation of all statutory reports',
        rs: 'Priprema bilansa uspeha, bilansa stanja'
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
      type: 'text',
      value: {
        en: '',
        rs: 'Podrška pri radu sa revizorima '
      }
    },{
      type: 'headline',
      value: {
        en: 'FINANCIAL & BUSINESS CONSULTING',
        rs: 'FINANSIJSKO & POSLOVNO SAVETOVNJE'
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
        en: 'Restructuring & exit stratiegis',
        rs: 'Restuktuiranje i strategije izlaska '
      }
    },{
      type: 'text',
      value: {
        en: '',
        rs: 'Izrada biznis planova'
      }
    }]
  },{
    title: {
      en: 'Poreske usluge',
      rs: 'Tax services'
    },
    image: 'book',
    icon: 'arrow-right',
    paragraphs: [{
      type: 'headline',
      value: {
        en: 'ON-GOING TAX SUPPORT',
        rs: 'SAVETODAVNA PORESKA PODRŠKA'
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
        en: 'Consulting in Corporate income taxes, VAT, Personal taxes, Withholding tax, Customs and others',
        rs: 'Poresko savetovanje iz oblasti PDV-a, poreza na dobit, poreza na dohodak, poreza po dobitku '
    }
    },{
      type: 'text',
      value: {
        en: 'Preparation and submission all tax returns',
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
        rs: 'Savetovanje pri vođenju postupaka'
      }
    },{
      type: 'text',
      value: {
        en: 'Thin capitalization advisory',
        rs: ''
      }
    },{
      type: 'headline',
      value: {
        en: 'TAX CONSULTING',
        rs: 'POSEBNE PORESKE USLUGE '
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
    image: 'calculator',
    icon: 'arrow-right',
    paragraphs: [{
      type: 'headline',
      value: {
        en: 'TRANSFER PRICING REPORT',
        rs:  'STUDIJE O TRANSFERNIM CENAMA'
      }
    },{
      type: 'text',
      value: {
        en: 'Identification and understanding of transactions with related parties',
        rs: 'Identifikovanje transakcija sa povezanim stranama '
    }
    },{
      type: 'text',
      value: {
        en: 'Analysis of the functions performed, risks assumed and assets',
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
        en: '',
        rs: 'Priprema “benchmark analize“ pomoću specijalizovanih baza podataka '
      }
    },{
      type: 'headline',
      value: {
        en: 'TRANFER PRICING CONSULTING',
        rs: 'SAVETOVANJE O TRANSFERNIM CENAMA'
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
        en: 'Dealing with tax authorities during tax audits',
        rs: 'Priprema interkompanijiskih ugovora'
      }
    },{
      type: 'text',
      value: {
        en: '',
        rs: 'Savetovanje u vezi konsultantskih usluga pruženih od Grupe'
      }
    },{
      type: 'text',
      value: {
        en: '',
        rs: 'Pordška u postupku poreske kontrole'
      }
    }]
  },{
    title: {
      en: 'Legal Services',
      rs: 'Pravne usluge'
    },
    image: 'briefcase',
    icon: 'arrow-right',
    paragraphs: [{
      type: 'headline',
      value: {
        en: 'COORPORATIVE & CONTRACT LAW',
        rs: 'RADNO PRAVO '
      }
    },{
      type: 'text',
      value: {
        en: 'Incorporation of all legal forms of companies and other legal entities',
        rs: 'Savetovanje klijenata povodom donošenja odluka u vezi sa zapošljavanjem i uslovima rada '
      }
    },{
      type: 'text',
      value: {
        en: "Counseling, negotiation and drafting ofassociations’ memorandums and articles,shareholders' agreements, rules of internal rocedures and other corporate documents",
        rs: 'Izrada pravilnika o radu, ugovora o radu i aneksa istih kao i sporazuma o prestanku radnog odnosa uključujući i ostalu potrebnu dokumentaciju '
      }
    },{
      type: 'text',
      value: {
        en: 'Drafting all kinds of commercial contracts',
        rs: 'Podrška u sporovima u vezi sa radnim odnosima '
      }
    },{
      type: 'headline',
      value: {
        en: 'LABOUR LAW',
        rs: 'KORPORATIVNO & UGOVORNO PRAVO'
      }
    },{
      type: 'text',
      value: {
        en: "Preparing general legal acts for employers or for employers 'associations",
        rs: 'Osnivanje svih pravnih formi privrednih društava i drugih pravnih lica'
      }
    },{
      type: 'text',
      value: {
        en: 'Drafting of employment rulebook, employment contracts and mutual termination agreements',
        rs: 'Konsultacije, pregovori i izrada osnivačkih akata, statuta, ugovora članova društva, pravilnika o internim procedurama i drugih internih korporativnih dokumenata '
      }
    },{
      type: 'text',
      value: {
        en: '',
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
