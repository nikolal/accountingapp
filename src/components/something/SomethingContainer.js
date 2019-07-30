// Actions
const SAVE_ABOUT = 'incentives/SAVE_ABOUT';

// Initial State
const initialState = {
  headlineText: {
    en: 'Incentives for business in Serbia',
    rs: 'Podsticaji za poslovanje'
  },
  incentives: [{
    title: {
      en: 'Incentives for employement',
      rs: 'Olakšice za zapošljavanja'
    },
    subTitle: {
      en: 'Learn more about business incentives',
      rs: 'Više informacija o poreskim olakšicama'
    },
    description: {
      en: 'Incentives for employement',
      rs: 'Olakšice za nova zapošljavanja'
    },
    icon: require('../../../assets/images/iconteam.png'),
    image: require('../../../assets/images/milkaSlika.png'),
    paragraphs: [{
      type: 'text',
      value: {
        en: 'All the employers who set up their company after  January 1, 2019 can be exempted from paying taxes and contributions for themselves, as an owner or a founder of the company.',
        rs: 'Svi poslodavci koji su osnovali firmu nakon 01.01.2019. godine mogu biti oslobođeni poreza i doprinosa samo za sebe, kao vlasnika ili osnivača firme.'
      }
    },{
      type: 'text',
      value: {
        en: 'These changes became effective on December 16, 2018, and its appliance started from the beginning of 2019., accurately since January 1. ',
        rs: 'Ove izmene su stupile na snagu 16. decembra 2018. godine, a njihova primena počela je početkom 2019. godine, tačnije od 01. januara tekuće godine.'
      }
    },{
      type: 'headline',
      value: {
        en: 'What are tax benefits applied to?',
        rs: 'Na šta se odnose izmene poreskih olakšica'
      }
    },{
      type: 'text',
      value: {
        en: 'The newest amendments of the Individual income tax law and the Law on compulsory social security contribution:',
        rs: 'Najnovije izmene Zakona o porezu na dohodak građana i Zakona o doprinosima za obavezno socijalno osiguranje su sledeće:'
      }
    },{
      type: 'text',
      value: {
        en: '• Future employers will be able to use the tax benefit only according to their profit – can be exempted from paying taxes and contributions only for themselves.',
        rs: '• budući poslodavci moći će da koriste poresku olakšicu samo po osnovu svoje zarade - biće oslobođeni plaćanja poreza i doprinosa samo za sebe;'
      }
    },{
      type: 'text',
      value: {
        en: "• They don't have the right to be exempted from paying  the taxes and the contributions based on the profit for their employees. (According to the old law, they had that right for 9 employees at most)",
        rs: '•nemaju pravo na oslobođenje od plaćanja poreza i doprinosa po osnovu zarade za svoje zaposlene (po starom propisu imali su za najviše 9 novozaposlenih lica);'
      }
    },{
      type: 'text',
      value: {
        en: '• The owners who meet all the necessary conditions and set up their company before  January 1, 2019. will be able to use the benefits and all the contributions will be paid from the budget of the Republic of Serbia',
        rs: '• vlasnici koji ispune uslove i osnuju firmu posle 01. januara 2019. godine moći će da koriste olakšice i biće im iz Budžeta Republike Srbije uplaćeni svi doprinosi (PIO, zdravstveno osiguranje i osiguranje za slučaj nezaposlenosti);'
      }
    },{
      type: 'text',
      value: {
        en: '• All the entrepreneurs and the legal persons who register their company according to the new law for the tax benefit can use 37000 RSD  as a maximum  net amount.',
        rs: '• preduzetnici i pravna lica koja registruju firmu po novom propisu za poresko oslobođenje mogu da koriste maksimalnan iznos zarade od 37.000 dinara u neto iznosu.'
      }
    },{
      type: 'headline',
      value: {
        en: 'Who can get tax benefits?Who can get tax benefits?',
        rs: 'Ko sve može dobiti poresku olakšicu?'
      }
    },{
      type: 'text',
      value: {
        en: 'Newly set up companies or the future registered employers  who can get tax benefits  are :',
        rs: 'Novoosnovane firme, odnosno budući registrovani poslodavci koji bi mogli da ostvare pravo na poreske olakšice su:'
      }
    },{
      type: 'text',
      value: {
        en: '•	Entrepreneurs ',
        rs: '•	preduzetnici,'
      }
    },{
      type: 'text',
      value: {
        en: '•	The LLC ',
        rs: '•	DOO firme'
      }
    },{
      type: 'text',
      value: {
        en: '•	Agricultural entrepreneurs',
        rs: '•	preduzetnici poljoprivrednici.'
      }
    },{
      type: 'headline',
      value: {
        en: 'The conditions for getting the tax benefits for the newly set up companies',
        rs: 'Uslovi za dobijanje olakšica za novoosnovane firme'
      }
    },{
      type: 'text',
      value: {
        en: 'In order for the employers and the company to get the new benefits, these conditions must be met:',
        rs: 'Da bi preduzetici i vlasnici preduzeća dobili nove olakšce moraju biti ispunjeni sledeći uslovi:'
      }
    },{
      type: 'text',
      value: {
        en: "• That the legal person – future employers or the DOO's founders have been registered at least 6 months simultaneously before the set up of their company at the National employment service as unemployed or that in the period of 12 months before the day of registration and set up of their company they finished high school, academy or college and  got educated according to the law",
        rs: '• da su fizička lica - odnosno budući preduzetnici ili osnivači DOO najmanje šest meseci bez prekida pre dana otvaranja svoje firme bili pijavljeni kod Nacionalne službe za zapošljavanje kao nezaposlena lica ili da su u periodu od 12 meseci pre dana registrovanja i otvaranja svoje firme završili srednju školu, višu ili fakultet, i da su stekli obrazovanje u skladu sa Zakonom;'
      }
    },{
      type: 'text',
      value: {
        en: '• That as a physical person or an entrepreneur (an agricultural entrepreneur also) is registered for  the compulsory social security in the Central  register of compulsory social security',
        rs: '• da je fizičko lice, odnosno preduzetnik (kao i preduzetnik poljoprivrednik) prijavljen na obavezno socijalno osiguranje u Centralni registar obaveznog socijalnog osiguranja;'
      }
    },{
      en: '• That  a legal person or a founder is employed in this new LLC company(has concluded an employment contract)',
      rs: '• da fizičko lice, odnosno osnivač bude zaposlen u svojoj novoosnovanoj DOO firmi (da ima zasnovan radni odnos);'
    },{
      en: '• If the LLC has more than one founder, the right can be gained for 9 founders at most, who also have to sign an employment contract and be employed in the company.',
      rs: '• ukoliko DOO ima više osnivača pravo se može ostvariti za najviše devet osnivača, koji takođe moraju potpisati ugovor o radu i biti zaposleni u firmi.'
    },{
      type: 'headline',
      value: {
        en: 'When the employer can use new tax benefits?',
        rs: 'Kada poslodavac može da koristi poreske olakšice?'
      }
    },{
      type: 'text',
      value: {
        en: "The employer can use his right on the tax and contributions exemption for salaries paid in the twelve months period, starting from the day of company's set up – when the entrepreneur was registered or the LLC set up.",
        rs: 'Poslodavac može da osvari pravo na oslobođenje od poreza i doprinosa za zarade koje su isplaćene u periodu od 12 meseci, počevši od dana kada je osnovana firma - registrovan preduzetnik ili kada je osnovano DOO.'
      }
    },{
      type: 'text',
      value: {
        en: 'New benefits can only be used by the new entrepreneurs, the new LLC founders or the agricultural entrepreneurs, but only if they  meet the conditions and if they opened the company after January 1, 2019. This benefit can be used by all the future companies which meet certain conditions and which are registered  in the business register conclusively with December 31, 2020.',
        rs: 'Nove olakšice mogu da koriste samo novoosnovani preduzetnici, novi osnovači DOO i preduzetnici poljoprivrednici, ali samo ako ispune uslove i ako su otvorili firmu posle 01. januara 2019. godine. Ovu olakšicu mogu da iskoriste sve buduće firme koje ispunjavaju određene uslove, a koje budu registrovane u privredni registar zaključno sa 31.12.2020. godine.'
      }
    },{
      type: 'headline',
      value: {
        en: 'The restrictions on tax benefits for the entrepreneurs',
        rs: 'Ograničenje poslodavaca za korišćenje olakšica'
      }
    },{
      type: 'text',
      value: {
        en: 'There are several restrictions when the new tax benefits are used.',
        rs: 'Postoje nekoliko ograničenja kada se koriste nove poreske olakšice:'
      }
    },{
      type: 'text',
      value: {
        en: '• One person can not use the benefits and tax exemption right more than once.',
        rs: '• jedno lice ne može više puta da ostvari olakšice i pravo na poresko oslobođenje;'
      }
    },{
      type: 'text',
      value: {
        en: '• If the new employer  gets the tax benefits on one person, the other employer  can not get tax exempted for the same person.',
        rs: '• ako jedan novoosnovani poslodavac ostvari poresko oslobođenje, drugi novoosnovani poslodavac ne može da ostvari poresko oslobođenje za istu osobu;'
      }
    },{
      type: 'text',
      value: {
        en: '• The person who gets the new benefits for tax and contributions exemptions, cannot use other benefits like subventions for self-employment and employing new workers given by the National employment service',
        rs: '• lice koje ostvari nove olakšice za oslobođenje od poreza i doprinosa ne može da koristi druge olakšice, poput subvencije za samozapošljavanje i zapošljavanje novih lica koje dodeljuje Nacionalna služba za zapošljavanje.'
      }
    },{
      type: 'headline',
      value: {
        en: 'The maximal amount of monthly income',
        rs: 'Maksimalni iznos mesečne zarade'
      }
    },{
      type: 'text',
      value: {
        en: "The maximal amount which the employer can pay to himself is 37000 RSD monthly.  This is net income, without the taxes and contributions and only on that amount you can get the tax benefit. This is the case when it comes to personal incomes or the founder's income.",
        rs: 'Maksimalna zarada koju poslodavac može sebi da isplati je 37.000 dinara mesečno. To je neto zarada, bez poreza i doprinosa, i jedino na taj iznos je moguće ostvariti poresko oslobođenje. Ovo važi kada je u pitanju ili lična zarada preduzetnika ili zarada osnivača.'
      }
    },{
      type: 'text',
      value: {
        en: 'The right to using tax benefit stops:',
        rs: 'Pravo na korišćenje poreske olakšice ističe:'
      }
    },{
      type: 'text',
      value: {
        en: '• After the period of 12 months',
        rs: '• nakon isteka perioda od 12 meseci;'
      }
    },{
      type: 'text',
      value: {
        en: "• On the day when the entrepreneur's monthly salary is paid, or the founder's monthly salary, which is more than 37000 RSD  individually",
        rs: '• na dan kada se izvrši isplata mesečne lične zarade preduzetnika, odnosno mesečne zarade osnivača, koja je više od 37.000 dinara za svakog pojedinačno.'
      }
    },{
      type: 'text',
      value: {
        en: 'According to the new laws, the contributions for RDI fund, health insurance and unemployment insurance will be paid from the budget of the Republic of Serbia, but on the lowest base of contribution.',
        rs: 'Prema novim pravilima doprinosi za PIO, zdravstveno osiguranje i osiguranje za slučaj nezaposlenosti biće plaćeni iz Budžeta Republike Srbije, ali na iznos najniže mesečne osnovice doprinosa.'
      }
    }]
  },{
    title: {
      en: 'Free zones in Serbia',
      rs: 'Slobodne zone'
    },
    subTitle: {
      en: 'Learn more about free zones',
      rs: 'Više o slobodnim zonama'
    },
    description: {
      en: 'Benefits of a free zone',
      rs: 'Slobodne zone, osnivači, korisnici i pogodnosti'
    },
    icon: require('../../../assets/images/iconCompany.png'),
    image: require('../../../assets/images/servicesImagex.png'),
    paragraphs: [{
      type: 'headline',
      value: {
        en: 'Free zones in Serbia',
        rs: 'Slobodne zone u Srbiji'
      }
    },{
      type: 'text',
      value: {
        en: "Free zones are a fenced and marked part of Serbia's territory where business activities are performed with a preferential customs treatment, tax relief and simplified administrative procedures.",
        rs: 'Za sada je Srbiji postoje 14 aktivnih slobodnih zona i to su: SZ Pirot, SZ Subotica, SZ Zrenjanin, SZ Novi Sad, FAS SZ Kragujevac, SZ Šabac, SZ Užice, SZ Smederevo, SZ Kruševac, SZ Svilajnac, SZ Apatin,SZ Vranje, SZ Priboj, SZ Beograd.'
      }
    },{
      type: 'text',
      value: {
        en: 'There are currently 14 free zones established in Serbia: Belgrade, Pirot, Subotica, Zrenjanin, FAS Kragujevac, Sabac, Novi Sad, Uzice, Smederevo, Svilajnac, Krusevac, Apatin, Priboj and Vranje.',
        rs: 'U slobodnim zonama se mogu obavljati sve vrste poslovanja i industrijskih aktivnosti uključujući proizvodnju, skladištenje, pakovanje, trgovinu, bankarstvo i osiguranje. '
      }
    },{
      type: 'headline',
      value: {
        en: 'Benefits of a free zone / 1',
        rs: 'Osnivači i korisnici slobodnih zona'
      }
    },{
      type: 'text',
      value: {
        en: 'Entry of goods into the free zone, as well as transport and other services which are directly related to the entry of goods are zerorated for VAT purposes;',
        rs: 'Osnivanje SZ je ekonomski opravdano ako: investiciono ulaganje prelazi 3.000.000€ (u prvoj godini prelazi 1.000.000€), ako plan predviđa zapošljavanje najmanje 100 radnika prve 2 godine, ako se nalazi na nedovoljno razvijenom području Srbije, ako planiran promet pokazuje pozitivan efekat na spoljnotrgovinski bilans Srbije, ako obavljanje delatnosti u SZ pozitivno utiče na poslovanje firmi van SZ.'
      }
    },{
      type: 'text',
      value: {
        en: 'Supply of goods and services within the free zone is zero-rated for VAT purposes;',
        rs: 'One su značajne za poslovanje firmi u Srbiji, jer omogućavaju velike uštede u poslovanju. Stvaraju se mogućnosti za saradnju domaćih i stranih kompanija, otvaraju nova radna mesta i direktno privlače investicije. '
      }
    },{
      type: 'headline',
      value: {
        en: 'Benefits of a free zone / 2',
        rs: 'Pogodnosti u slobodnim zonama'
      }
    },{
      type: 'text',
      value: {
        en: 'The supply of electricity and/or piped gas to free zone users is zerorated for VAT purposes;',
        rs: 'Kompanije koji svoju delatnost obavljaju u slobodnim zonama imaju brojne pogodnosti od strane države.'
      }
    },{
      type: 'text',
      value: {
        en: 'Exemption from payment of customs and other import duties for goods intended for carrying out activities and construction of facilities in the free zone (raw materials, equipment, construction materials);',
        rs: 'Fiskalne pogodnosti: oslobađanje od plaćanja PDV-a na unos dobara u SZ, kao i pružanje prevoznih i drugih usluga u vezi sa unosom dobara, oslobađanje od plaćanja PDV-a na promet dobara i usluga u SZ, oslobađanje od plaćanja PDV-a na promet dobara između korisnika dve SZ, oslobađanje proizvodnih korisnika plaćanja PDV-a na potrošnju energenata,oslobađanje od pojedinih poreskih opterećenja za direktne strane investicije.'
      }
    },{
      type: 'text',
      value: {
        en: 'Within free zones, exemption from certain local fees and taxes is also available (local municipality incentives).',
        rs: 'Finansijske pogodnosti: slobodan protok kapitala, profita i dividendi, sredstva iz budžeta Republike Srbije za finansiranje investicionih projekata u proizvodnom sektoru i sektoru usluga.'
      }
    },{
      type: 'text',
      value: {
        en: '',
        rs: 'Carinske pogodnosti: Kompanije su oslobođene plaćanja carine i drugih uvoznih dažbina za materijal i sirovine namenjenih: obavljanju delatnosti (proizvodnja robe za izvoz), izgradnji objekata u SZ (repromaterijal, oprema, građevinski materijal).'
      }
    },{
      type: 'text',
      value: {
        en: '',
        rs: 'Efikasna administracija u slobodnoj zoni (One-Stop-Shop) - One-stop-shop je jedinstveni šalter gde privrednici mogu dobiti sve potrebne informacije, mogu brzo da završe celokupan posao oko osnivanja, registrovanja, prijavljivanja nove firme, kao i dobijanja građevinskih dozvola.'
      }
    },{
      type: 'text',
      value: {
        en: '',
        rs: 'Jednostavna i brza carinska procedura: u svakoj SZ nalazi se carinski referat i procedura je pojednostavljena, ne plaćaju se carina ni dažbine za uvoz robe namenjene obavljanju delatnosti i izgradnji objekata.'
      }
    },{
      type: 'text',
      value: {
        en: '',
        rs: 'Pogodnosti lokalne samouprave - Lokalna samouprava može doneti odluke koje bi dodatne olakšice trebalo omogućiti. Tu se odnosi na oslobođenja od plaćanja lokalnih poreza, naknada i taksi koje su u nadležnosti lokalne samouprave.'
      }
    },{
      type: 'text',
      value: {
        en: '',
        rs: 'Pružanje usluga korisnicima po povlašćenim cenama - Logističke usluge se pružaju po povoljnijim cenama: transport, pretovar, utovar, špedicija, osiguranje i reosiguranje, ostalo.'
      }
    },{
      type: 'text',
      value: {
        en: '',
        rs: 'Poslovanje u SZ mora se obavljati po sledećim principima: spoljnotrgovinsko poslovanje je slobodno, izvoz robe i uvoz u zonu i iz zone je slobodan i neograničen (osim robe čiji je uvoz i izvoz zakonom zabranjen), roba koja se iz zone stavlja u promet u Srbiju podleže obavezi plaćanja carine i drugih uvoznih dažbina, mogu se ostvariti poreske olakšice za porez na dobit preduzeća, porez na imovinu i porez na dohodak građana.'
      }
    },{
      type: 'text',
      value: {
        en: '',
        rs: 'Delatnost koja se obavlja u SZ ne sme da ugrožava životnu sredinu, zdravlje, materijalna dobra i bezbednost ljudi. Takođe, mora imati pozitivan efekat na razvoj regiona u kome se nalazi.'
      }
    }]
  },{
    title: {
      en: 'Free Trade Agreements',
      rs: 'Subvencije za investiranje'
    },
    subTitle: {
      en: 'Learn more about free trade Aareements',
      rs: 'Saznajte više o podsticajima'
    },
    description: {
      en: 'Free Trade Agreements',
      rs: 'Podsticaji za investiranje'
    },
    image: 'https://s.hswstatic.com/gif/13-incredible-bat-facts.jpg',
    icon: require('../../../assets/images/iconTransfer.png'),
    paragraphs: [{
        type: 'headline',
        value: {
          en: 'Free of customs duties',
          rs: 'Podsticaji za investiranje'
        }
      },{
        type: 'text',
        value: {
          en: 'Serbia can serve as a manufacturing hub for duty-free exports to a market of almost 800 million people that includes the European Union, Russia, Belarus, Kazakhstan, Turkey, South East Europe, the European Free Trade Agreement members, and USA.',
          rs: 'U cilju privlačenja stranih investitora Republika Srbija omogućila je finansijske podsticaje za kompanije koje ulažu u našu zemlju. Finansijski podsticaji regulisani su Uredbom o uslovima i načinu privlačenja direktnih investicija, u koja spadaju sredstva podsticaja i ulaganja od posebnog značaja.'
      }
    },{
      type: 'text',
      value: {
        en: 'Furthermore, certain imports from the aforementioned markets may be performed free of customs duties.',
        rs: 'Sredstva podsticaja za privlačenje direktnih investicija se mogu koristiti za finansiranje opravdanih troškova investicionih projekata i to: u proizvodnji, za usluge međunarodne trgovine, za usluge hotelskog smeštaja.'
    }
    },{
      type: 'text',
      value: {
        en: 'European Union - Exports to the EU market are free-of-customs according to the Stabilization and Association Agreement. For several food products export quantities are limited by annual quotas',
        rs: 'Podsticaji se ne mogu koristiti za ulaganja u: saobraćaj, razvoj softvera (osim ako je u funkciji unapređenja proizvoda, proizvodnog procesa ili pružanja usluga međunarodne trgovine), ugostiteljstvo, igre na sreću, trgovine, proizvodnju sintetičkih vlakana, uglja, čelika, rudarstva, duvana, duvanskih prerađevina, oružja, municije, brodogradnje, aerodroma, logističkih centara, komunalni sektor, sektor energetike, širokopojasne mreže, ribarstvo, akvakulturu.'
    }
    },{
      type: 'text',
      value: {
        en: 'Imports from the EU are performed based on the Interim Trade Agreement, as part of the Stabilization and Association Agreement, providing for the abolishment of import customs duties for industrial, and certain agricultural, products from EU countries.',
        rs: 'Opravdani troškovi: ulaganja u materijalna i nematerijalna sredstva, bruto zarade za nove zaposlene.'
    }
    },{
      type: 'text',
      value: {
        en: 'Russia - The Free Trade Agreement with Russia, signed in August 2000, makes Serbia particularly attractive to foreign investors in the manufacturing sector. The Agreement stipulates that goods produced in Serbia, i.e. which have at least 51% value added in the country, are considered of Serbian origin and exported to Russia customs free. For exports to Russia, the FORM CT2 Certificate is required as a proof of goods origin. The only tariff charged is the customs record keeping tariff, amounting to a 1% value. ',
        rs: 'Investitor je dužan da obezbedi učešće od najmanje 25% opravdanih troškova  (sopstvena sredstva, drugi izvori, osim državne pomoći).'
    }
    },{
      type: 'text',
      value: {
        en: 'The list of products, excluded from the Free Trade Agreement, is revised annually.',
        rs: 'Maksimalni iznos koji kompanije mogu dobiti za realizaciju investicionog projekta su: za velika preduzeća do 50%, za srednja preduzeća do 60%, za mala preduzeća do 70%.'
    }
    },{
      type: 'text',
      value: {
        en: 'USA - As of April 22, 2018 Serbian exporters may once again export their goods to the USA customs free, according to the Generalized System of Preferences (GSP), which will be in force until the end of 2020.',
        rs: 'Najveći iznos koji može biti dodeljen za opravdane troškove ulaganja velikih preduzeća su: do 50.000.000 EUR najviše do 50%, za deo troškova preko 50.000.000 EUR najviše do 25%, za deo troškova preko 100.000.000 EUR do 17%.'
    }
    },{
      type: 'text',
      value: {
        en: 'Around 5,000 goods and products, mainly industrial and agricultural goods, will benefit from the GSP. The following goods are exempt from the customs-free regime: most of textile products, shoes and clothing (including leather clothing), watches, travel accessories, work gloves, steel and steel products, glass and electronic products.',
        rs: 'Sredstva mogu dobiti kompanije za opravdane troškove ukoliko se zaposli do 100 novozaposlenih (zavisi od stepena razvijenosti opštine): I grupa - opravdani troškovi minimum 500.000 EUR i najmanje 50 radnika, II grupa - opravdani troškovi minimum 400.000 EUR i najmanje 40 radnika, III grupa - opravdani troškovi minimum 300.000 EUR i najmanje 30 radnika, IV grupa - opravdani troškovi minimum 200.000 EUR i najmanje 20 radnika, devastirana područja - opravdani troškovi minimum 100.000  EUR i najmanje 10 radnika.'
    }
    },{
      type: 'text',
      value: {
        en: 'In order to benefit from the GSP the goods need to be produced in Serbia, with at least 35% value added in the country, and exported directly from Serbia ',
        rs: 'Za usluge međunarodne trgovine uslov je da opravdani troškovi budu minimum 150.000 EUR i da se zapošljava najmanje 15 novozaposlenih.'
    }
    },{
      type: 'text',
      value: {
        en: 'CEFTA - The Central European Free Trade Agreement (CEFTA) is the trade agreement between the following countries in South East Europe: Albania, Bosnia and Herzegovina, FYR Macedonia, Moldova, Montenegro, Serbia, and the United Nations Interim Administration Mission in Kosovo (UNMIK). The Agreement has been in effect as of July 2007, providing companies in Serbia with an opportunity to reach the 22 million people market free of customs duties.',
        rs: 'Investitor može dobiti podsticaj za opravdane troškove bruto zarada (po novom radnom mestu). Iznos zavisi od grupe regiona i stepena razvijenosti opštine: I grupa – najviše do 20% i maksimum 3.000 EUR, II grupa - najviše do 25% i maksimum 4.000 EUR, III grupa - najviše do 30% i maksimum 5.000 EUR, IV grupa - najviše do 35% i maksimum 6.000 EUR, devastirano područje - najviše do 40% i maksimum 7.000 EUR.'
    }
    },{
      type: 'text',
      value: {
        en: 'Turkey - Trade between Serbia and Turkey is regulated upon the model implemented in trade with the EU. Industrial products originating in Serbia can be exported to Turkey without paying customs duties. Imports of industrial products into Serbia are generally customs-free, but for a large number of goods customs duties are being progressively abolished over a six-year period that ended in 2015. For trade in agricultural, textile and some metallurgy products, customs duties remain in effect, with certain Most Favored Nation reductions for a number of products.',
        rs: 'Investitorima se može odobriti povećanje i dodatni podsticaj za opravdane troškove ulaganja u OS, prema razvijenosti opštine: I grupa do 10%, II grupa do 15%, III grupa do 20%, IV grupa do 25%, devastirano područje do 30%.'
    }
    },{
      type: 'text',
      value: {
        en: 'EFTA - Industrial products exported from Serbia to European Free Trade Agreement (EFTA) member states (Switzerland, Norway, Iceland, and Liechtenstein) are exempt from customs duties, except for a very limited number of goods, including fish and other marine products. Customs duties for imports of industrial products originating in EFTA states are abolished as of 2014.',
        rs: 'Dodatni podsticaji za opravdane troškove bruto zarada mogu se dobiti za radno intenzivne projekte: 10% za 200 – 500 novozaposlenih, 15% za 500 – 1.000 novozaposlenih, 20% za više od 1.000 novozaposlenih.'
    }
    },{
      type: 'text',
      value: {
        en: 'Belarus -The Free Trade Agreement with Belarus envisages the mutual abolishment of customs and non-customs duties in trade between the two countries. There are only a few exceptions to the Agreement, including sugar, alcohol, and cigarettes, as well as used cars, buses, and tires.',
        rs: 'Ulaganje od posebnog značaja jeste ulaganje koje bitno utiče na dalji razvoj privrede u Republici Srbiji, na unapređenje konkurentnosti privrede i na ravnomeran regionalni razvoj. Odnosi se na: ulaganje u OS veća od 5.000.000 EUR ili otvaranje više od 500 radnih mesta (I i II grupa), ulaganje u osnovna sredstva veća od 2.000.000 EUR ili otvaranje više od 100 radnih mesta (III i IV grupa, devastirano područje), ulaganje koje se realizuje na teritoriji jedne ili više opština i koje podstiče realizaciju zajedničkih prioriteta u cilju povećanja konkurentnosti, ulaganje na osnovu usvojenih bilateralnih sporazuma i sporazuma o prekograničnoj saradnji. Trade in agricultural products is regulated by separate agreements with each of EFTA members, providing for mutual concessions for specified products.'
    }
    },{
      type: 'text',
      value: {
        en: 'Kazakhstan -Free Trade Agreement between the Republic of Serbia and Kazakhstan came into force in January 2011. The Free Trade Agreement states that the parties will not charge customs duties, fees and charges with equivalent effect for products originating in one country and intended for the market of the other country. Exceptions were made for the products listed in the annexes, which are subject to customs duties, fees and charges with equivalent effect in accordance with the countries’ national legislations (at the rates specified by national customs tariffs).',
        rs: 'Uslovi za dodelu sredstava: da se investicija održi na istoj lokaciji u kojoj se realizuje ulaganje, najmanje 5 godina nakon realizacije projekta za velika, odnosno najmanje 3 godine za mala i srednja preduzeća, da se broj zaposlenih nakon realizacije projekta ne smanjuje 5 godina za velika, odnosno 3 godine za mala i srednja preduzeća, investitor ima obavezu da zaposlenima redovno ispladuje zaradu (najmanje u visini 120% minimalne zarade), rok za realizaciju projekta i otvaranje novih radnih mesta je 3 godine (od dana zaključenja ugovora o dodeli podsticaja), a koji se nakon zaključenja može produžiti najviše na pet godina, ukupan iznos sredstava koja se mogu dodeliti određuje se u apsolutnom iznosu, ne sme preći gornju granicu do koje je dozvoljeno dodeliti ukupan iznos državne pomoći.'
    }
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
