// // Actions
const SAVE_ARTICLE = 'taxes/SAVE_ARTICLE';

// Initial State
const initialState = {
  taxes: [{
    title: {
      en: 'Earnings',
      rs: 'Zarade'
    },
    date: '30.04.2018',
    paragraphs: [{
      text: 'Prosečna bruto zarada za mart 2018',
      percentage: '68.251 RSD'
    },{
      text: 'Minimalna zarada za maj',
      percentage: '24.024 RSD neto, odnopsno 32.131,24 RSD'
    },{
      text: 'Najniza osnovica 6.1.2018-31.12.2018',
      percentage: '23.053 RSD'
    },{
      text: 'Najvisa osnovica 6.1.2018-31.12.2018',
      percentage: '329.330 RSD'
    },{
      text: 'Uvecanje zarade za minuli rad po godini radnog staza kod poslednjeg poslodavca',
      percentage: '0.40%'
    },{
      text: 'Uvecanje zarade za prekovremeni rad',
      percentage: '26.00%'
    },{
      text: 'Uvecanje zarade za rad za vreme drzavnog praznika',
      percentage: '26%'
    },{
      text: 'Porez na dobit pravnih lica',
      percentage: '110%'
    }]
  },{
    title: 'Neoporezivi iznosi',
    date: '30.04.2018',
    paragraphs: [{
      text: 'Neporezivi iznosi dnevnice za sluzbeno putovanje u zemlji',
      percentage: '2.303 RSD'
    },{
      text: 'Neporezivi iznosi dnevnice za sluzbeno putovanje u inostranstvu',
      percentage: '50 EUR'
    },{
      text: 'Neoporezivi iznos naknade za koriscenje sopstvenog vozila',
      percentage: ' 6.716 RSD'
    },{
      text: 'Neporezivi iznosi naknade troskova prevoza u javnom saobracaju',
      percentage: '3.837 RSD'
    },{
      text: 'Neoporezivi iznos naknade troskova smestaja na sluzbenom putovanju',
      percentage: '3.837 RSD'
    },{
      text: 'Otpremnina za odlazak u penziju',
      percentage: 'Najmanje u visini 2 prosečne mesečne zarade u R. Srbiji'
    },{
      text: 'Neoporezivi iznos za jubilarne nagrade',
      percentage: '19.183 RSD'
    },{
      text: 'Neporezivi iznosi naknade ta reoskove pogrebnih usluga u slucaju smrti clana zaposlenog ili clana uze porodice',
      percentage: '67.145 RSD'
    },{
      text: 'Neoporezivi iznos solidarne pomoci za slucaj teze bolesti zapolsenog ili clana uze porodice',
      percentage: '38.370 RSD'
    },{
      text: 'Neoporezivi iznos poklona deci zaposlenih starih do 15 godina povodom Nove godine i Bozica',
      percentage: '9.592 RSD'
    },{
      text: 'Neoporezivi iznos stipendije i kredita studentima i ucenicima',
      percentage: '11.511 RSD'
    },{
      text: 'Neporezivi iznosi za premije za dodatno dobtovoljno penziono osiguranje i premije za dobrovoljno zdravstevno osiguranje',
      percentage: '5.757 RSD'
    },{
      text: 'Neporezivi iznosi za premije za kolektivno osiguranje od posledica nezgoda i kolektivno osiguranje za slucaj tezih hiruskih intervencija',
      percentage: '5.757 RSD'
    }]
  },{
    title: {
      en: 'Hello',
      rs:'Rokovi za izmirenje obaveza'
    },
    date: '30.04.2018',
    paragraphs: [{
      text: 'PDV prijava i placanje PDV-a za mesecnog obveznika',
      percentage: '15. u mesecu za prethodni mesec'
    },{
      text: 'PDV prijava i placanje PDV-a za tromesecnog obveznika',
      percentage: '15. u mesecu za prethodni kvartal'
    },{
      text: 'Prijava poreza na dobit',
      percentage: '180 dana od zavrsetka fiskalne godine'
    },{
      text: 'Placanje godisnjeg poreza na dobit',
      percentage: 'Sa danom podnosenja prijave'
    },{
      text: 'Aktivno placanje poreza na dobit',
      percentage: '15. u mesecu za prethodni mesec'
    },{
      text: 'Placanje poreza i doprinosa na zarade',
      percentage: 'Pre svake isplate prihoda tokom meseca'
    },{
      text: 'Rok za uplatu sredstava po osnovu obaveze zaposljavanja osoba sa invaliditetom i podnosenje obrasca IOSI',
      percentage: '5. u mesecu za prethodni mesec'
    },{
      text: 'Uplata akontacije za akcize',
      percentage: '20. u mesecu za prethodni kvartal'
    },{
      text: 'Placanje akcize',
      percentage: '15 dana u donosu na obracunski period'
    },{
      text: 'Placanje poreza po odbitku na prihode koji nerezidentna pravna lica ostvaruju od rezidentnih pravnih lica',
      percentage: 'Pre svake isplate prihoda tokom meseca'
    },{
      text: 'D11 obrazac (Direktne investicije)',
      percentage: '10. u mesecu za prethodni kvartal'
    },{
      text: 'D12 obrazac (Direktne investicije)',
      percentage: '10. u mesecu za prethodni kvartal'
    },{
      text: 'GRU obrazac (Gradjevinski radovi rezidenta u inostranstvu i zemlji)',
      percentage: '10. u mesecu za prethodni kvartal'
    },{
      text: 'RN obrazac (Izvestaj o stanju i prometu na racunima u inostranstvu)',
      percentage: '10. u mesecu za prethodni kvartal'
    }]
  },{
    title: 'Porez na dobit',
    date: '30.04.2018',
    paragraphs: [{
      text: 'Porez na dobit pravna lica',
      percentage: '15%'
    },{
      text: 'Porez na dobit preduzetnici',
      percentage: '10%'
    },{
      text: 'Porez po odbitku kamate',
      percentage: '20%'
    },{
      text: 'Porez po odbitku usluge koje se pruzaju ili koriste u Srbiji',
      percentage: '20%'
    },{
      text: 'Porez po odbitku dividende',
      percentage: '20%'
    },{
      text: 'Porez po odbitku zakup nepokretnosti',
      percentage: '20%'
    },{
      text: 'Porez po odbitku autorske naknade',
      percentage: '20%'
    },{
      text: 'Porez po odbitku poreski ????',
      percentage: '25%'
    },{
      text: 'Porez po dobitku za promet sekundarnih sirovina',
      percentage: '1%'
    }, {
      text: 'Amortizacija stalnih sredstava I grupa',
      percentage: '2.50%'
    },{
      text: 'Amortizacija stalnih sredstava II grupa',
      percentage: '10%'
    },{
      text: 'Amortizacija stalnih sredstava III grupa',
      percentage: '15%'
    },{
      text: 'Amortizacija stalnih sredstava IV grupa',
      percentage: '20%'
    },{
      text: 'Amortizacija stalnih sredstava V grupa',
      percentage: '30%'
    },{
      text: 'Izdaci za ulaganja u oblasti kulture koji se mogu primati / ukupni prihodi',
      percentage: '5%'
    },{
      text: 'Iznos REPREZENTACIJE koji se moze priznati / ukupni prihodi',
      percentage: '0.50%'
    },{
      text: 'Izdaci za marketing koji se mogu priznati / ukupni prihodi',
      percentage: '10%'
    },{
      text: 'Clanarine komorama koje se mogu priznatii',
      percentage: '0.10%'
    },{
      text: 'Izdaci za zdravstvene, humanitarne, obrazovne, naucne, verske i sportske namene',
      percentage: '5%'
    },{
      text: 'Neophodno ulaganje u osnovna sredstva u svrhu oslobadjanja placanja poreza na dobit u periodu od 10 godina',
      percentage: '1 milijarda RSD%'
    },{
      text: 'Neophodan broj novozaposlenih u svrhu oslobadjanja placanja poreza na dobit u periodu od 10 godina',
      percentage: '100'
    },{
      text: 'Procenat vlasnistva u pravnom licu koji odredjuje status povezanih lica',
      percentage: '25%'
    },{
      text: 'Odnos kapitala i duga kod procene ??? kapitalizacije za privredna drustva',
      percentage: '1.4%'
    },{
      text: 'Odnos duga i kapitala kod procene ????  kapitalizacije za banke',
      percentage: '1:10'
    },{
      text: 'Kamatne stope van dohvata ruke za privredna drustva',
      percentage: ''
    },{
      text: 'Kratkorocni krediti RSD',
      percentage: '5,84%'
    },{
      text: 'Dugorocni krediti RSD',
      percentage: '5,58%'
    },{
      text: 'Kratkorocni krediti EUR i dinarski krediti indeksirane u EUR',
      percentage: '3,10%'
    },{
      text: 'Dugorocni krediti EUR i dinarski krediti indeksirane u EUR',
      percentage: '3.42%'
    },{
      text: 'Dugoročni krediti CHF i dinarski krediti indeksirane u CHF',
      percentage: '12.97%'
    },{
      text: 'Kratkorični krediti CHF i dinarski krediti indeksirane u CHF',
      percentage: '8.21%'
    },{
      text: 'Kratkoročni krediti u USD i dinarski krediti indeksirani u USD',
      percentage: '4.41%'
    },{
      text: 'Dugoročni krediti u USD i dinarski krediti indeksirani u USD.',
      percentage: '4.16%'
    }]
  },{
    title: 'PDV',
    date: '30.04.2018',
    paragraphs: [{
      text: 'PDV Opšta stopa',
      percentage: '20%'
    },{
      text: 'PDV Posebna stopa',
      percentage: '10%'
    },{
      text: 'Maksimalni izdatak za reklamni materijal od mesecčnog prihoda',
      percentage: '0.50%'
    },{
      text: 'Promet u poslednjih 12 meseci nakon kojeg nastupa obaveza PDV-a',
      percentage: '8 miliona RSD'
    }]
  },{
    title: 'Porez na dohodak građana',
    date: '30.04.2018',
    paragraphs: [{
      text: 'Stopa poreza na zarade',
      percentage: '10%'
    },{
      text: 'Granica za godisnji porez na dohodak',
      percentage: ''
    },{
      text: 'Godisnji porez na oporezivi dohodak do trostruke prosečne godišnje zarade',
      percentage: '10%'
    },{
      text: 'Godisnji porez na oporezivi dohodak do šestrostruke prosečne godišnje zarade',
      percentage: '15%'
    },{
      text: 'Stopa poreza na prihode od kapitala',
      percentage: '15%'
    },{
      text: 'Stopa poreza na kapitalni dobitak',
      percentage: '15%'
    },{
      text: 'Stopa poreza na ostale prihode',
      percentage: '20%'
    }]
  },{
    title: 'Doprinosi',
    date: '30.04.2018',
    paragraphs: [{
      text: 'Doprinosi za PIO na teret zaposlenog',
      percentage: '14%'
    },{
      text: 'Doprinosi za zdravstvo na teret zaposlenog',
      percentage: '5.15%'
    },{
      text: 'Doprinosi za nezaposlenost na teret zaposlenog',
      percentage: '0.75%'
    },{
      text: 'Doprinosi za PIO na teret poslodavca',
      percentage: '12%'
    },{
      text: 'Doprinosi za zdravstvo na teret poslodavca',
      percentage: '5.15'
    },{
      text: 'Doprinosi za nezaposlenost na teret poslodavca',
      percentage: '0.75%'
    }]
  },{
    title: 'Neoporezivi iznosi',
    description: 'is a mandatory financial charge or some other type of levy imposed upon a taxpaye',
    date: '30.04.2018',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvRlZYD8KHSgO1hfd_B27Mi557lBUVp6Lc-yFf8Nc7CCY4pSQbYQ',
    paragraphs: [{
      type: 'text',
      percentage: 'lorem imsum'
    },{
      type: 'image',
      percentage: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
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
