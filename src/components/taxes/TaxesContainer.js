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
      text: {
        en: 'Average gross earnings for March 2018',
        rs: 'Prosečna bruto zarada za mart 2018.'
      },
      percentage: {
        en: '68.251 RSD',
        rs: '68.251 RSD'
      }
    },{
      text: {
        en: 'Minimum salary',
        rs: 'Minimalna zarada za maj'
      },
      percentage: {
        en: '24.024 RSD net, gross 32.131,24 RSD',
        rs: '24.024 RSD neto, odnosno 32.131,24 RSD'
      }
    },{
      text: {
        en: 'The lowest base 6.1.2018-31.12.2018',
        rs: 'Najniža osnovica 6.1.2018-31.12.2018'
      },
      percentage: {
        en: '23.053 RSD',
        rs: '23.053 RSD'
      }
    },{
      text: {
        en: 'The highest base',
        rs: 'Najviša osnovica 6.1.2018-31.12.2018'
      },
      percentage: {
        en: '329.330 RSD',
        rs: '329.330 RSD'
      }
    },{
      text: {
        en: 'Increase in earnings for past work per year of service at the last employer',
        rs: 'Uvećanje zarade za minuli rad po godini radnog staža kod poslednjeg poslodavca'
      },
      percentage: {
        en: '0.40%',
        rs: '0.40%'
      }
    },{
      text: {
        en: 'Increase in earnings for overtime',
        rs: 'Uvećanje zarade za prekovremeni rad'
      },
      percentage: {
        en: '26.00%',
        rs: '26.00%'
      }
    },{
      text: {
        en: 'Incease in earnings for working during public holidays',
        rs: 'Uvećanje zarade za rad za vreme državnog praznika'
      },
      percentage: {
        en: '26%',
        rs: '26%'
      }
    },{
      text: {
        en: 'Corporate income tax',
        rs: 'Porez na dobit pravnih lica'
      },
      percentage: {
        en: '110%',
        rs: '110%'
      }
    }]
  },{
    title: {
      en: 'Non-taxable amounts',
      rs: 'Neoporezivi iznosi'
    },
    date: '30.04.2018',
    paragraphs: [{
      text: {
        en: 'Non-taxable amounts of daily allowance for a business trip',
        rs: 'Neporezivi iznosi dnevnice za službeno putovanje u zemlji'
      },
      percentage: {
        en: '2.303 RSD',
        rs: '2.303 RSD'
      }
    },{
      text: {
        en: 'Non-taxable amounts of daily allowance for a business trip abroad',
        rs: 'Neporezivi iznosi dnevnice za službeno putovanje u inostranstvu'
      },
      percentage: {
        en: '50 EUR',
        rs: '50 EUR'
      }
    },{
      text: {
        en: 'Non-taxable reimbursement for using your own vehicle',
        rs: 'Neoporezivi iznos naknade za koriscenje sopstvenog vozila'
      },
      percentage: {
        en: '6.716 RSD',
        rs: '6.716 RSD'
      }
    },{
      text: {
        en: 'Non-taxable amounts of reimbursement for the costs in public transport',
        rs: 'Neporezivi iznosi naknade troškova prevoza u javnom saobraćaju'
      },
      percentage: {
        en: '3.837 RSD',
        rs: '3.837 RSD'
      }
    },{
      text: {
        en: 'Non-taxable amount of reimbursement for accomodation costs on a business trip',
        rs: 'Neoporezivi iznos naknade troškova smeštaja na službenom putovanju'
      },
      percentage: {
        en: '3.837 RSD',
        rs: '3.837 RSD'
      }
    },{
      text: {
        en: 'Severance pay for the retirement',
        rs: 'Otpremnina za odlazak u penziju'
      },
      percentage: {
        en: 'Something?????????????',
        rs: 'Najmanje u visini 2 prosečne mesečne zarade u R. Srbiji'
      }
    },{
      text: {
        en: 'Non-taxable amounts for jubilee awards',
        rs: 'Neoporezivi iznos za jubilarne nagrade'
      },
      percentage: {
        en: '19.183 RSD',
        rs: '19.183 RSD'
      }
    },{
      text: {
        en: 'Non-taxable amounts of reimbursement for the costs of funeral services in the case of death of an employee or a close family member',
        rs: 'Neporezivi iznosi naknade za troškove pogrebnih usluga u slučaju smrti člana zaposlenog ili člana uže porodice'
      },
      percentage: {
        en: '67.145 RSD',
        rs: '67.145 RSD'
      }
    },{
      text: {
        en: 'Non-taxable amount of solidarity in the case of a serious illness of an employee or a close family member',
        rs: 'Neoporezivi iznos solidarne pomoći za slučaj teže bolesti zapolsenog ili člana uže porodice'
      },
      percentage: '38.370 RSD'
    },{
      text: {
        en: 'Non-taxable gift for children under the age of fifteen on the occasion of New Year and Christmas',
        rs: 'Neoporezivi iznos poklona deci zaposlenih starih do 15 godina povodom Nove godine i Božica'
      },
      percentage: {
        en: '9.592 RSD',
        rs: '9.592 RSD'
      }
    },{
      text: {
        en: 'Non-taxable amount of scholarships and credits for studens and pupils',
        rs: 'Neoporezivi iznos stipendije i kredita studentima i učenicima',
      },
      percentage: {
        en: '11.511 RSD',
        rs: '11.511 RSD'
      }
    },{
      text: {
        en: 'non-taxable amounts of premiums for additional voluntary pension insurance and premiums for voluntary health insurance',
        rs: 'Neporezivi iznosi za premije za dodatno dobrovoljno penziono osiguranje i premije za dobrovoljno zdravstevno osiguranje'
      },
      percentage: {
        en: '5.757 RSD',
        rs: '5.757 RSD'
      }
    },{
      text: {
        en: 'Non-taxable amounts for collective insurance premiums against accidents and collective insurance in case of severe surgical interventions',
        rs: 'Neporezivi iznosi za premije za kolektivno osiguranje od posledica nezgoda i kolektivno osiguranje za slučaj težih hiruških intervencija'
      },
      percentage: {
        en: '5.757 RSD',
        rs: '5.757 RSD'
      }
    }]
  },{
    title: {
      en: 'Dedlines for settlement of obligations',
      rs:'Rokovi za izmirenje obaveza'
    },
    date: '30.04.2018',
    paragraphs: [{
      text: {
        en: 'VAT report and payment of VAT for the monthly taxpayer',
        rs: 'PDV prijava i plaćanje PDV-a za mesečnog obveznika'
      },
      percentage: {
        en: 'SOMETHING',
        rs: '15. u mesecu za prethodni mesec'
      }
    },{
      text: {
        en: 'VAT report and payment of VAT for the 3-month taxpayer',
        rs: 'PDV prijava i plaćanje PDV-a za tromesečnog obveznika'
      },
      percentage: {
        en: 'SOMRETHING',
        rs: '15. u mesecu za prethodni kvartal'
      }
    },{
      text: {
        en: 'Profit tax declaration',
        rs: 'Prijava poreza na dobit'
      },
      percentage: {
        en: 'SOMETHING',
        rs: '180 dana od završetka fiskalne godine'
      }
    },{
      text: {
        en: 'Payment of annual income tax',
        rs: 'Plaćanje godišnjeg poreza na dobit'
      },
      percentage: {
        en: 'SOMETHING',
        rs: 'Sa danom podnošenja prijave'
      }
    },{
      text: {
        en: 'Active payment of income tax',
        rs: 'Aktivno plaćanje poreza na dobit'
      },
      percentage: {
        en: 'SOMETHING',
        rs: '15. u mesecu za prethodni mesec'
      }
    },{
      text: {
        en: 'Payment of taxes and contributions on earnings',
        rs: 'Plaćanje poreza i doprinosa na zarade'
      },
      percentage: {
        en: 'SOMETHINHG',
        rs: 'Pre svake isplate prihoda tokom meseca'
      }
    },{
      text: {
        en: 'Deadline for payment of funds based on the obligation to employ disability persons  and submission of the form IOSI',
        rs: 'Rok za uplatu sredstava po osnovu obaveze zapošljavanja osoba sa invaliditetom i podnošenje obrasca IOSI'
      },
      percentage: {
        en: 'SOMETHING',
        rs: '5. u mesecu za prethodni mesec'
      }
    },{
      text: {
        en: 'Advance payment of excise',
        rs: 'Uplata akontacije za akcize'
      },
      percentage: {
        en: 'SOMETHING',
        rs: '20. u mesecu za prethodni kvartal'
      }
    },{
      text: {
        en: 'payment of excise',
        rs: 'Plaćanje akcize'
      },
      percentage: {
        en: 'Something',
        rs: '15 dana u donosu na obračunski period'
      }
    },{
      text: {
        en: '..............',
        rs: 'Plaćanje poreza po odbitku na prihode koji nerezidentna pravna lica ostvaruju od rezidentnih pravnih lica'
      },
      percentage: {
        en: 'SOMEtHING',
        rs: 'Pre svake isplate prihoda tokom meseca'
      }
    },{
      text: {
        en: 'D11 form (direct investment)',
        rs: 'D11 obrazac (Direktne investicije)'
      },
      percentage: {
        en: 'Something',
        rs: '10. u mesecu za prethodni kvartal'
      }
    },{
      text: {
        en: 'D12 form ( direct investment)',
        rs: 'D12 obrazac (Direktne investicije)'
      },
      percentage: {
        en: 'Something',
        rs: '10. u mesecu za prethodni kvartal'
      }
    },{
      text: {
        en: 'GRU form (construction works of residents abroad and in the country)',
        rs: 'GRU obrazac (Građevinski radovi rezidenta u inostranstvu i zemlji)'
      },
      percentage: {
        en: 'Something',
        rs: '10. u mesecu za prethodni kvartal'
      }
    },{
      text: {
        en: 'RN FORM (statement on the balance and turnover on foreign accounts)',
        rs: 'RN obrazac (Izveštaj o stanju i prometu na računima u inostranstvu)'
      },
      percentage: {
        en: 'SOmething',
        rs: '10. u mesecu za prethodni kvartal'
      }
    }]
  },{
    title: {
      en: 'Income tax',
      rs: 'Porez na dobit'
    },
    date: '30.04.2018',
    paragraphs: [{
      text: {
        en: 'Income tax legal entities',
        rs: 'Porez na dobit pravna lica'
      },
      percentage: {
        en: '15%',
        rs: '15%'
      }
    },{
      text: {
        en: 'Income tax entrepreneurs',
        rs: 'Porez na dobit preduzetnici'
      },
      percentage: {
        en: '10%',
        rs: '10%'
      }
    },{
      text: {
        en: 'Tax deductible',
        rs: 'Porez po odbitku kamate'
      },
      percentage: {
        en: '20%',
        rs: '20%'
      }
    },{
      text: {
        en: 'Tax on deduction of services provided or used in Serbia',
        rs: 'Porez po odbitku usluge koje se pruzaju ili koriste u Srbiji'
      },
      percentage: {
        en: '20%',
        rs:'20%'
      }
    },{
      text: {
        en: 'Tax after deduction of dividends',
        rs: 'Porez po odbitku dividende'
      },
      percentage: {
        en: '20%',
        rs: '20%'
      }
    },{
      text: {
        en: 'Tax on deduction lease of immovable property',
        rs: 'Porez po odbitku zakup nepokretnosti'
      },
      percentage: {
        en: '20%',
        rs: '20%'
      }
    },{
      text: {
        en: 'Tax on deduction authors fee',
        rs: 'Porez po odbitku autorske naknade'
      },
      percentage: {
        en: '20%',
        rs: '20%'
      }
    },{
      text: {
        en: '???????',
        rs: 'Porez po odbitku poreski ????'
      },
      percentage: {
        en: '25%',
        rs: '25%'
      }
    },{
      text: {
        en: '................of secondary raw material',
        rs: 'Porez po dobitku za promet sekundarnih sirovina'
      },
      percentage: {
        en: '1%',
        rs: '1%'
      }
    }, {
      text: {
        en: 'Depreciation of fixed assets I group',
        rs: 'Amortizacija stalnih sredstava I grupa'
      },
      percentage: {
        en: '2.50%',
        rs:  '2.50%'
      }
    },{
      text: {
        en: 'Depreciation of fixed assets II group',
        rs: 'Amortizacija stalnih sredstava II grupa'
      },
      percentage: {
        en: '10%',
        rs: '10%'
      }
    },{
      text: {
        en: 'Depreciation of fixed assets III group',
        rs: 'Amortizacija stalnih sredstava III grupa'
      },
      percentage: {
        en: '15%',
        rs: '15%'
      }
    },{
      text: {
        en: 'Depreciation of fixed assets IV group',
        rs: 'Amortizacija stalnih sredstava IV grupa'
      },
      percentage: {
        en: '20%',
        rs: '20%'
      }
    },{
      text: {
        en: 'Depreciation of fixed assets V group',
        rs: 'Amortizacija stalnih sredstava V grupa'
      },
      percentage: {
        en: '30%',
        rs: '30%'
      }
    },{
      text: {
        en: 'Expenditure for investments in culture that can be received/ total income',
        rs: 'Izdaci za ulaganja u oblasti kulture koji se mogu primati / ukupni prihodi'
      },
      percentage: {
        en: '5%',
        rs: '5%'
      }
    },{
      text: {
        en: 'The amount of REPRESENTATION that can be recognized/ total income',
        rs: 'Iznos REPREZENTACIJE koji se moze priznati / ukupni prihodi'
      },
      percentage: {
        en: '0.50%',
        rs: '0.50%'
      }
    },{
      text: {
        en: 'expenditure for marketing ,,,,,,,,,,,,,',
        rs: 'Izdaci za marketing koji se mogu priznati / ukupni prihodi'
      },
      percentage: {
        en: '10%',
        rs: '10%'
      }
    },{
      text: {
        en: 'Affiliation fees to chambers that can be recognized',
        rs: 'Clanarine komorama koje se mogu priznatii'
      },
      percentage: {
        en: '0.10%',
        rs: '0.10%'
      }
    },{
      text: {
        en: 'Expenditures for health, humanitarian, educational, scientific, religious and sports purposes',
        rs: 'Izdaci za zdravstvene, humanitarne, obrazovne, naucne, verske i sportske namene'
      },
      percentage: {
        en: '5%',
        rs: '5%'
      }
    },{
      text: {
        en: 'Necessary investment in fixed assets for the purpose of exempting income tax for a period of ten years',
        rs: 'Neophodno ulaganje u osnovna sredstva u svrhu oslobadjanja placanja poreza na dobit u periodu od 10 godina'
      },
      percentage: {
        en: '??????',
        rs: '1 milijarda RSD%'
      }
    },{
      text: {
        en: '...',
        rs: 'Neophodan broj novozaposlenih u svrhu oslobadjanja placanja poreza na dobit u periodu od 10 godina'
      },
      percentage: {
        en: '100',
        rs: '100'
      }
    },{
      text: {
        en: '.......',
        rs: 'Procenat vlasnistva u pravnom licu koji odredjuje status povezanih lica'
      },
      percentage: {
        en: '25%',
        rs: '25%'
      }
    },{
      text: {
        en: '.......',
        rs: 'Odnos kapitala i duga kod procene ??? kapitalizacije za privredna drustva'
      },
      percentage: {
        en: '1.4%',
        rs: '1.4%'
      }
    },{
      text: {
        en: '?????????',
        rs: 'Odnos duga i kapitala kod procene ????  kapitalizacije za banke'
      },
      percentage: {
        en: '1:10',
        rs: '1:10'
      }
    },{
      text: {
        en: 'Interest rate at the arms length for companies',
        rs: 'Kamatne stope van dohvata ruke za privredna drustva'
      },
      percentage: {
        en: '',
        rs:  ''
      }
    },{
      text: {
        en: 'Short-term loan RSD',
        rs: 'Kratkorocni krediti RSD'
      },
      percentage: {
        en: '5,84%',
        rs: '5,84%'
      }
    },{
      text: {
        en: 'Long- term loan RSD',
        rs: 'Dugorocni krediti RSD'
      },
      percentage: {
        en: '5,58%',
        rs: '5,58%'
      }
    },{
      text: {
        en: 'Short-term loans EUR and RSD loans indexed in EUR',
        rs: 'Kratkorocni krediti EUR i dinarski krediti indeksirane u EUR'
      },
      percentage: {
        en: '3,10%',
        rs: '3,10%'
      }
    },{
      text: {
        en: 'Long-term loans EUR and RSD loans indexed in EUR',
        rs: 'Dugorocni krediti EUR i dinarski krediti indeksirane u EUR'
      },
      percentage: {
        en: '3.42%',
        rs: '3.42%'
      }
    },{
      text: {
        en: 'Long-term loans CHF and RSD loans indexed in CHF',
        rs: 'Dugoročni krediti CHF i dinarski krediti indeksirane u CHF'
      },
      percentage: {
        en: '12.97%',
        rs: '12.97%'
      }
    },{
      text: {
        en: 'Short-term loans CHF and RSD loans indexed in CHF',
        rs: 'Kratkorični krediti CHF i dinarski krediti indeksirane u CHF'
      },
      percentage: {
        en: '8.21%',
        rs: '8.21%'
      }
    },{
      text: {
        en: 'Short-term loans USD and RSD loans indexed in USD',
        rs: 'Kratkoročni krediti u USD i dinarski krediti indeksirani u USD'
      },
      percentage: {
        en: '4.41%',
        rs: '4.41%'
      }
    },{
      text: {
        en: 'Long-term loans USD and RSD loans indexed in USD',
        rs: 'Dugoročni krediti u USD i dinarski krediti indeksirani u USD.'
      },
      percentage: {
        en: '4.16%',
        rs: '4.16%'
      }
    }]
  },{
    title: {
      en: 'VAT',
      rs: 'PDV'
    },
    date: '30.04.2018',
    paragraphs: [{
      text: {
        en: 'VAT general rate',
        rs: 'PDV Opšta stopa'
      },
      percentage: {
        en: '20%',
        rs: '20%'
      }
    },{
      text: {
        en: 'AT special rate',
        rs: 'PDV Posebna stopa'
      },
      percentage: {
        en: '10%',
        rs: '10%'
      }
    },{
      text: {
        en: 'Maximum expenditure for promotional material from monthly income',
        rs: 'Maksimalni izdatak za reklamni materijal od mesecčnog prihoda'
      },
      percentage: {
        en: '0.50%',
        rs: '0.50%'
      }
    },{
      text: {
        en: 'Turnover in the last 12 months after which the VAT obligation arises',
        rs: 'Promet u poslednjih 12 meseci nakon kojeg nastupa obaveza PDV-a'
      },
      percentage: {
        en: '?????',
        rs: '8 miliona RSD'
      }
    }]
  },{
    title: {
      en: 'Personal income tax',
      rs: 'Porez na dohodak građana',
    },
    date: '30.04.2018',
    paragraphs: [{
      text: {
        en: 'Earnings tax rate',
        rs: 'Stopa poreza na zarade'
      },
      percentage: {
        en: '10%',
        rs: '10%'
      }
    },{
      text: {
        en: 'limit for annual income tax',
        rs: 'Granica za godisnji porez na dohodak'
      },
      percentage: {
        en: '',
        rs: ''
      }
    },{
      text: {
        en: 'Annual tax on taxable income up to a triple average annual salary',
        rs: 'Godisnji porez na oporezivi dohodak do trostruke prosečne godišnje zarade'
      },
      percentage: {
        en: '10%',
        rs: '10%'
      }
    },{
      text: {
        en: 'Annual tax on taxable income up to a six times average annual salary',
        rs: 'Godisnji porez na oporezivi dohodak do šestrostruke prosečne godišnje zarade'
      },
      percentage: {
        en: '15%',
        rs: '15%'
      }
    },{
      text: {
        en: 'Tax rate on capital income',
        rs: 'Stopa poreza na prihode od kapitala'
      },
      percentage: {
        en: '15%',
        rs: '15%'
      }
    },{
      text: {
        en: 'Capital gain tax rate',
        rs: 'Stopa poreza na kapitalni dobitak'
      },
      percentage: {
        en: '15%',
        rs: '15%'
      }
    },{
      text: {
        en: 'Tax rate on other income',
        rs: 'Stopa poreza na ostale prihode'
      },
      percentage: {
        en: '20%',
        rs: '20%'
      }
    }]
  },{
    title: {
      en: 'Contributions',
      rs: 'Doprinosi'
    },
    date: '30.04.2018',
    paragraphs: [{
      text: {
        en: 'contributions for PIO at the expense of the employee',
        rs: 'Doprinosi za PIO na teret zaposlenog'
      },
      percentage: {
        en: '14%',
        rs: '14%'
      }
    },{
      text: {
        en: 'contributions for health insurance at the expense of the employee',
        rs: 'Doprinosi za zdravstvo na teret zaposlenog'
      },
      percentage: {
        en: '5.15%',
        rs: '5.15%'
      }
    },{
      text: {
        en: 'Contributions for unemployment at the expense of the employee',
        rs: 'Doprinosi za nezaposlenost na teret zaposlenog'
      },
      percentage: {
        en: '0.75%',
        rs: '0.75%'
      }
    },{
      text: {
        en: 'Contributions for PIO at the expense of the employer',
        rs: 'Doprinosi za PIO na teret poslodavca'
      },
      percentage: {
        en: '12%',
        rs: '12%'
      }
    },{
      text: {
        en: 'Contributions for health insurance at the expense of the employer',
        rs: 'Doprinosi za zdravstvo na teret poslodavca'
      },
      percentage: {
        en: '5.15',
        rs: '5.15'
      }
    },{
      text: {
        en: 'Contributions for unemployment at the expense of the employer',
        rs: 'Doprinosi za nezaposlenost na teret poslodavca'
      },
      percentage: {
        en: '0.75%',
        rs: '0.75%'
      }
    }]
  },{
    title: {
      en: 'Non-taxable amounts',
      rs: 'Neoporezivi iznosi'
    },
    description: 'is a mandatory financial charge or some other type of levy imposed upon a taxpaye',
    date: '30.04.2018',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvRlZYD8KHSgO1hfd_B27Mi557lBUVp6Lc-yFf8Nc7CCY4pSQbYQ',
    paragraphs: [{
      text: 'text',
      percentage: 'lorem imsum'
    },{
      text: 'image',
      percentage: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
    },{
      text: 'text',
      percentage: 'by a governmental organization in order to fund various public expenditures.[1] A failure to pay, or evasion of or resistance to taxation, is punishable by law. '
    }]
  },{
    title: {
      en: 'economy',
      rs: 'Ekonomija Srbije'
    },
    description: 'is a mandatory financial charge or some other type of levy imposed upon a taxpaye',
    date: '30.04.2018',
    image: 'https://en-coller.tau.ac.il/sites/coller-english.tau.ac.il/files/styles/reaserch_main_image_580_x_330/public/accounting-580_2.jpg?itok=M8dzi0kF',
    paragraphs: [{
      text: 'text',
      percentage: 'lorem imsum'
    },{
      text: 'image',
      percentage: 'https://imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg'
    },{
      text: 'text',
      percentage: 'by a governmental organization in order to fund various public expenditures.[1] A failure to pay, or evasion of or resistance to taxation, is punishable by law. '
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
