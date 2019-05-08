// // Actions
const SAVE_ARTICLE = 'taxes/SAVE_ARTICLE';

// Initial State
const initialState = {
  taxes: [{
    title: {
      en: 'Salary',
      rs: 'Zarade'
    },
    date: '30.04.2018',
    time: '05:52PM',
    paragraphs: [{
      text: {
        en: 'Average gross salary for January',
        rs: 'Prosečna bruto zarada za januar 2019.'
      },
      percentage: {
        en: '75.296 rsd rsd',
        rs: '75.296 rsd rsd'
      }
    },{
      text: {
        en: 'Minimum salary',
        rs: 'Minimalna bruto zarada za januar 2019.'
      },
      percentage: {
        en: '38.580,88 rsd',
        rs: '38.580,88 rsd'
      }
    },{
      text: {
        en: 'The lowes salary base (1.01.2019. do 31.12.2019)',
        rs: 'Najniža osnovica za 1.01.2019. do 31.12.2019.'
      },
      percentage: {
        en: '23.921 rsd',
        rs: '23.921 rsd'
      }
    },{
      text: {
        en: 'The highest salary base (1.01.2019. do 31.12.2019)',
        rs: 'Najviša osnovica doprinosa 1.01.2019. do 31.12.2019.'
      },
      percentage: {
        en: '341.725 rsd',
        rs: '341.725 rsd'
      }
    },{
      text: {
        en: 'Non-taxable amount of salary',
        rs: 'Neoporezivi iznos zarade'
      },
      percentage: {
        en: '15.300 rsd',
        rs: '15.300 rsd'
      }
    },
    {
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
        en: 'Increase in salary for overtime',
        rs: 'Uvećanje zarade za prekovremeni rad'
      },
      percentage: {
        en: '26.00%',
        rs: '26.00%'
      }
    },{
      text: {
        en: 'Increase in salary for workinh over night',
        rs: 'Uvećanje zarade za rad noću'
      },
      percentage: {
        en: '26%',
        rs: '26%'
      }
    },
    {
      text: {
        en: 'Increase in salary for wokrking during public holidays',
        rs: 'Uvećanje zarade za rad za vreme državnog praznika'
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
    time: '05:52PM',
    paragraphs: [{
      text: {
        en: 'Non-taxable amounts of daily allowance for a business trip',
        rs: 'Neporezivi iznosi dnevnice za službeno putovanje u zemlji'
      },
      percentage: {
        en: '2.303 rsd',
        rs: '2.303 rsd'
      }
    },{
      text: {
        en: 'Non-taxable amounts of daily allowance for a business trip abroad',
        rs: 'Neporezivi iznosi dnevnice za službeno putovanje u inostranstvu'
      },
      percentage: {
        en: '50 EUR',
        rs: '50 eur'
      }
    },{
      text: {
        en: 'Non-taxable reimbursement for using your own vehicle',
        rs: 'Neoporezivi iznos naknade za korišćenje sopstvenog vozila'
      },
      percentage: {
        en: '6.716 rsd',
        rs: '6.716 rsd'
      }
    },{
      text: {
        en: 'Non-taxable amounts of reimbursement for the costs in public transport',
        rs: 'Neporezivi iznosi naknade troškova prevoza u javnom saobraćaju'
      },
      percentage: {
        en: '3.837 rsd',
        rs: '3.837 rsd'
      }
    },{
      text: {
        en: 'Non-taxable amount of reimbursement for accomodation costs on a business trip',
        rs: 'Neoporezivi iznos naknade troškova smeštaja na službenom putovanju'
      },
      percentage: {
        en: 'Non-taxable in amount equal to the value of relevant bills',
        rs: 'Ne oporezuje se do visine troškova prema priloženom računu'
      }
    },{
      text: {
        en: 'Non-taxable amounts for jubilee awards',
        rs: 'Neoporezivi iznos za jubilarne nagrade'
      },
      percentage: {
        en: '19.183 rsd',
        rs: '19.183 rsd'
      }
    },{
      text: {
        en: 'Non-taxable amounts of reimbursement for the costs of funeral services in the case of death of an employee or a close family member',
        rs: 'Neporezivi iznosi naknade za troškove pogrebnih usluga u slučaju smrti člana zaposlenog ili člana uže porodice'
      },
      percentage: {
        en: '67.145 rsd',
        rs: '67.145 rsd'
      }
    },{
      text: {
        en: 'Non-taxable amount of solidarity in the case of a serious illness of an employee or a close family member',
        rs: 'Neoporezivi iznos solidarne pomoći za slučaj teže bolesti zaposlenog ili člana uže porodice'
      },
      percentage: {
        en: '38.370 rsd',
        rs: '38.370 rsd'
      }
    },{
      text: {
        en: 'Non-taxable gift for children under the age of fifteen on the occasion of New Year and Christmas',
        rs: 'Neoporezivi iznos poklona deci zaposlenih starih do 15 godina povodom Nove godine i Božica'
      },
      percentage: {
        en: '9.592 rsd',
        rs: '9.592 rsd'
      }
    },{
      text: {
        en: 'Non-taxable amount of scholarships and credits for studens and pupils',
        rs: 'Neoporezivi iznos stipendije i kredita studentima i učenicima',
      },
      percentage: {
        en: '11.511 rsd',
        rs: '11.511 rsd'
      }
    },{
      text: {
        en: 'non-taxable amounts of premiums for additional voluntary pension insurance and premiums for voluntary health insurance',
        rs: 'Neporezivi iznosi za premije za dodatno dobrovoljno penziono osiguranje i premije za dobrovoljno zdravstveno osiguranje'
      },
      percentage: {
        en: '5.757 rsd',
        rs: '5.757 rsd'
      }
    }]
  },{
    title: {
      en: 'Dedlines for settlement of obligations',
      rs:'Rokovi za izmirenje obaveza'
    },
    date: '30.04.2018',
    time: '05:52PM',
    paragraphs: [{
      text: {
        en: 'VAT report and payment of VAT for the monthly taxpayer',
        rs: 'PDV prijava i plaćanje PDV-a za mesečnog obveznika'
      },
      percentage: {
        en: '15th day in a month for a previous month',
        rs: '15. u mesecu za prethodni mesec'
      }
    },{
      text: {
        en: 'VAT report and payment of VAT for the 3-month taxpayer',
        rs: 'PDV prijava i plaćanje PDV-a za tromesečnog obveznika'
      },
      percentage: {
        en: '15th day in a month for a previous quarter',
        rs: '15. u mesecu za prethodni kvartal'
      }
    },{
      text: {
        en: 'Profit tax declaration',
        rs: 'Prijava poreza na dobit'
      },
      percentage: {
        en: '180 days from the end of fiscal year',
        rs: '180 dana od završetka fiskalne godine'
      }
    },{
      text: {
        en: 'Payment of annual income tax',
        rs: 'Plaćanje godišnjeg poreza na dobit'
      },
      percentage: {
        en: 'On a day of submission of tax application',
        rs: 'Sa danom podnošenja prijave'
      }
    },{
      text: {
        en: 'Advance payment of income tax',
        rs: 'Akontativno plaćanje poreza na dobit'
      },
      percentage: {
        en: '15th day in a month for a previous month',
        rs: '15. u mesecu za prethodni mesec'
      }
    },{
      text: {
        en: 'Payment of taxes and contributions on earnings',
        rs: 'Plaćanje poreza i doprinosa na zarade'
      },
      percentage: {
        en: 'Before payment of salaries during each month',
        rs: 'Pre svake isplate prihoda tokom meseca'
      }
    },{
      text: {
        en: 'Deadline for payment of funds based on the obligation to employ disability persons  and submission of the form IOSI',
        rs: 'Rok za uplatu sredstava po osnovu obaveze zapošljavanja osoba sa invaliditetom i podnošenje obrasca IOSI'
      },
      percentage: {
        en: '5th day in a month for a previous month',
        rs: '5. u mesecu za prethodni mesec'
      }
    },{
      text: {
        en: 'Advance payment of excise',
        rs: 'Uplata akontacije za akcize'
      },
      percentage: {
        en: '20th day in a month for a previous quarter',
        rs: '20. u mesecu za prethodni kvartal'
      }
    },{
      text: {
        en: 'Payment of excise',
        rs: 'Plaćanje akcize'
      },
      percentage: {
        en: '15 days starting from calculation period',
        rs: '15 dana u donosu na obračunski period'
      }
    },{
      text: {
        en: 'Payment of whitholding taxs for the revenues which non-resident entities make in relation with resident entities',
        rs: 'Plaćanje poreza po odbitku na prihode koji nerezidentna pravna lica ostvaruju od rezidentnih pravnih lica'
      },
      percentage: {
        en: 'Before each payment during the month',
        rs: 'Pre svake isplate prihoda tokom meseca'
      }
    },{
      text: {
        en: 'DI1 form (direct investment)',
        rs: 'DI1 obrazac (Direktne investicije)'
      },
      percentage: {
        en: '10th day in a months for a previous quarter',
        rs: '10. u mesecu za prethodni kvartal'
      }
    },{
      text: {
        en: 'DI2 form ( direct investment)',
        rs: 'DI2 obrazac (Direktne investicije)'
      },
      percentage: {
        en: '10th day in a months for a previous quarter',
        rs: '10. u mesecu za prethodni kvartal'
      }
    },{
      text: {
        en: 'GRU form (construction works of residents abroad and in the country)',
        rs: 'GRU obrazac (Građevinski radovi rezidenta u inostranstvu i zemlji)'
      },
      percentage: {
        en: '10th day in a months for a previous quarter',
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
        rs: 'Porez po odbitku usluge koje se pružaju ili koriste u Srbiji'
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
        en: 'Witholding tax for authors fees',
        rs: 'Porez po odbitku autorske naknade'
      },
      percentage: {
        en: '20%',
        rs: '20%'
      }
    },{
      text: {
        en: 'Witholding tax for offshore financial centres',
        rs: 'Porez po odbitku poreski rajevi'
      },
      percentage: {
        en: '25%',
        rs: '25%'
      }
    },{
      text: {
        en: 'Witholding tax for trade of secundary raw material',
        rs: 'Porez po odbitku za promet sekundarnih sirovina'
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
        rs: 'Iznos reprezentacije koji se može priznati / ukupni prihodi'
      },
      percentage: {
        en: '0.50%',
        rs: '0.50%'
      }
    },{
      text: {
        en: 'Costs for marketing which are tax recognized / overal revenues',
        rs: 'Izdaci za marketing koji se mogu priznati / ukupni prihodi'
      },
      percentage: {
        en: '10%',
        rs: '10%'
      }
    },{
      text: {
        en: 'Affiliation fees for chamberst which are tax recognized / overal revenues',
        rs: 'Članarine komorama koje se mogu priznatii / ukupni prihodi'
      },
      percentage: {
        en: '0.10%',
        rs: '0.10%'
      }
    },{
      text: {
        en: 'Expenditures for health, humanitarian, educational, scientific, religious and sports purposes',
        rs: 'Izdaci za zdravstvene, humanitarne, obrazovne, naučne, verske i sportske namene / ukupni prihodi'
      },
      percentage: {
        en: '5%',
        rs: '5%'
      }
    },{
      text: {
        en: 'Necessary investment in fixed assets for the purpose of exempting income tax for a period of ten years',
        rs: 'Neophodno ulaganje u osnovna sredstva u svrhu oslobađanja placanja poreza na dobit u periodu od 10 godina'
      },
      percentage: {
        en: '1 billion dinars',
        rs: '1 milijarda rsd'
      }
    },{
      text: {
        en: 'Minimal number of employees for the coorporate income tax releif in a period of 10 years',
        rs: 'Neophodan broj novozaposlenih u svrhu oslobađanja placanja poreza na dobit u periodu od 10 godina'
      },
      percentage: {
        en: '100',
        rs: '100'
      }
    },{
      text: {
        en: 'Percentage of shares in the ownership structure which determinate related entities',
        rs: 'Procenat vlasnistva u pravnom licu koji određuje status povezanih lica'
      },
      percentage: {
        en: '25%',
        rs: '25%'
      }
    },{
      text: {
        en: '.......',
        rs: 'Odnos kapitala i duga kod procene utanjene kapitalizacije za privredna drustva'
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
        en: 'Interest rate at the arms length for companies:',
        rs: 'Kamatne stope van dohvata ruke za privredna društva:'
      },
      percentage: {
        en: '',
        rs:  ''
      }
    },{
      text: {
        en: 'Short-term loan RSD',
        rs: 'Kamatne stope - Kratkoročni krediti RSD'
      },
      percentage: {
        en: '5.84%',
        rs: '5.84%'
      }
    },{
      text: {
        en: 'Long- term loan RSD',
        rs: 'Kamatne stope - Dugoročni krediti RSD'
      },
      percentage: {
        en: '5.58%',
        rs: '5.58%'
      }
    },{
      text: {
        en: 'Short-term loans EUR and RSD loans indexed in EUR',
        rs: 'Kamatne stope - Kratkoročni krediti EUR i dinarski krediti indeksirane u EUR'
      },
      percentage: {
        en: '3.10%',
        rs: '3.10%'
      }
    },{
      text: {
        en: 'Long-term loans EUR and RSD loans indexed in EUR',
        rs: 'Kamatne stope - Dugoročni krediti EUR i dinarski krediti indeksirane u EUR'
      },
      percentage: {
        en: '3.42%',
        rs: '3.42%'
      }
    },{
      text: {
        en: 'Long-term loans CHF and RSD loans indexed in CHF',
        rs: 'Kamatne stope - Kratkorični krediti CHF i dinarski krediti indeksirane u CHF'
      },
      percentage: {
        en: '12.97%',
        rs: '12.97%'
      }
    },{
      text: {
        en: 'Short-term loans CHF and RSD loans indexed in CHF',
        rs: 'Kamatne stope - Dugoročni krediti CHF i dinarski krediti indeksirane u CHF'
      },
      percentage: {
        en: '8.21%',
        rs: '8.21%'
      }
    },{
      text: {
        en: 'Short-term loans USD and RSD loans indexed in USD',
        rs: 'Kamatne stope - Kratkoročni krediti u USD i dinarski krediti indeksirani u USD'
      },
      percentage: {
        en: '4.41%',
        rs: '4.41%'
      }
    },{
      text: {
        en: 'Long-term loans USD and RSD loans indexed in USD',
        rs: 'Kamatne stope - Dugoročni krediti u USD i dinarski krediti indeksirani u USD.'
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
    time: '05:52PM',
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
        en: 'VAT special rate',
        rs: 'PDV Posebna stopa'
      },
      percentage: {
        en: '10%',
        rs: '10%'
      }
    },{
      text: {
        en: 'Maximum expenditure for promotional material from monthly income',
        rs: 'Maksimalni izdatak za reklamni materijal od mesečnog prihoda'
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
        en: '8 million dinars',
        rs: '8 miliona rsd'
      }
    }]
  },{
    title: {
      en: 'Personal income tax',
      rs: 'Porez na dohodak građana',
    },
    date: '30.04.2018',
    time: '05:52PM',
    paragraphs: [{
      text: {
        en: 'Tax rate on salaries',
        rs: 'Stopa poreza na zarade'
      },
      percentage: {
        en: '10%',
        rs: '10%'
      }
    },{
      text: {
        en: 'Annual tax on taxable income up to a triple average annual salary',
        rs: 'Godišnji porez na oporezivi dohodak do trostruke prosečne godišnje zarade'
      },
      percentage: {
        en: '10%',
        rs: '10%'
      }
    },{
      text: {
        en: 'Annual tax on taxable income up to a six times average annual salary',
        rs: 'Godišnji porez na oporezivi dohodak do šestrostruke prosečne godišnje zarade'
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
    time: '05:52PM',
    paragraphs: [{
      text: {
        en: 'Contributions for pension insurance.',
        rs: 'Doprinosi za PIO na teret zaposlenog'
      },
      percentage: {
        en: '14%',
        rs: '14%'
      }
    },{
      text: {
        en: 'Contributions for health insurance at the expense of the employee',
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
        en: 'Contributions for pension insurance.',
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
      en: '??????',
      rs: 'Porezi na imovinu'
    },
    date: '30.04.2018',
    time: '05:52PM',
    paragraphs: [{
      text: {
        en: '??',
        rs: 'Stope poreza na nepokretnosti poreskog obveznika koji vodi poslovne knjige'
      },
      percentage: {
        en: 'do 0.4%',
        rs: 'do 0.4%'
      }
    },{
      text: {
        en: '????',
        rs: 'Stope poreza na zemljištu kod obveznika koji ne vodi poslovne knjige'
      },
      percentage: {
        en: 'do 0.3%',
        rs: 'do 0.3%'
      }
    },{
      text: {
        en: '????',
        rs: 'Stope poreza na nepokretnosti poreskog obveznika koji ne vodi poslovne knjige (osim zemljišta):'
      },
      percentage: {
        en: '',
        rs: ''
      }
    },{
      text: {
        en: '????',
        rs: 'do poreske osnoviceod 10.000.000 RSD'
      },
      percentage: {
        en: 'do 0.4%',
        rs: 'do 0.4%'
      }
    },{
      text: {
        en: '???',
        rs: 'od 10.000.000 do 25.000.000'
      },
      percentage: {
        en: '+ 0.6%',
        rs: '+ 0.6%'
      }
    },{
      text: {
        en: '????',
        rs: 'od 25.000.000 d0 50.000.000'
      },
      percentage: {
        en: '+ 1.0%',
        rs: '+ 1.0%'
      }
    },{
      text: {
        en: '????',
        rs: 'preko 50.000.000'
      },
      percentage: {
        en: '+ 2.0%',
        rs: '+ 2.0%'
      }
    },{
      text: {
        en: '????',
        rs: 'Stopa poreza na nasleđe i poklon:'
      },
      percentage: {
        en: '',
        rs: ''
      }
    },{
      text: {
        en: '????',
        rs: 'Obveznici koji se nalaze u drugom naslednom redu'
      },
      percentage: {
        en: '1.50%',
        rs: '1.50%'
      }
    },{
      text: {
        en: '????',
        rs: 'Obveznici koji se nalaze u trećem naslednom redu'
      },
      percentage: {
        en: '2.50%',
        rs: '2.50%'
      }
    },{
      text: {
        en: '????',
        rs: 'Stopa poreza za prenos apsolutnih prava'
      },
      percentage: {
        en: '2.50%',
        rs: '2.50%'
      }
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
