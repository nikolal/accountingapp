// Actions
const SAVE_ABOUT = 'incentives/SAVE_ABOUT';

// Initial State
const initialState = {
  headlineText: {
    en: '????',
    rs: 'Izaberite jednu od ponudjenih opcija'
  },
  incentives: [{
    title: {
      en: '????',
      rs: 'Olakšice za nova zapošljavanja'
    },
    subTitle: {
      en: 'Learn More...',
      rs: 'Više informacija o poreskim olakšicama'
    },
    description: {
      en: '???',
      rs: 'Olakšice za nova zapošljavanja'
    },
    icon: require('../../../assets/images/iconteam.png'),
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
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Svaki član, osnivač ili preduzetnik mora zasnovati radni odnos sa novim pravnim licem i mora se prijaviti na obavezno socijalno osiguranje. Poslodavac mora imati ugovor o radu i sa svim novim radnicima.'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Osnivači/preduzetnici su morali pre datuma osnivanja firme, najmanje šest meseci neprekidno, da budu na evidenciji kod NSZ ili da su u periodu od 12 meseci pre datuma otvaranja firme završili školu (srednju, višu ili fakultet). Isti ovi uslovi važe i za nove zaposlene.'
      }
    },{
      type: 'headline',
      value: {
        en: '????',
        rs: 'Period korišćenja olakšice'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Olakšice za nove zaposlene se mogu koristiti najviše 12 meseci. Period za koji se može ostvariti pravo je 12 meseci, od dana početka obavljanja poslovne delatnosti (od dana kada je registrovana firma).'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Poslodavci koji budu koristili biće u potpunosti oslobođeni plaćanja poreza i doprinosa za sebe i zaposlene.'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Olakšica prestaje: po isteku 12 meseci, kada ukupan zbir isplaćenih zarada osnivača / preduzetnika i ostalih zaposlenih pređe neoporezivi iznos.'
      }
    },{
      type: 'headline',
      value: {
        en: '????',
        rs: 'Olakšice za postojeće poslodavce'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Postoje još i aktuelne olakšice koje mogu koristiti registrovane firme. Glavni uslov je da zaključe ugovor o radu sa novim zaposlenima.'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Ukoliko zaposle novog radnika mogu da ostvare povraćaj od 65%, 70% i 75% isplaćenih poreza i doprinosa, po osnovu zarade radnika. Rok za ove olakšice je 31.12.2019.'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Ako poslodavac zaposli radnika, može dobiti: povraćaj dela plaćenog poreza na zarade, povraćaj dela plaćenih doprinosa.'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Poslodavac prvo mora da ih plati, kako bi dobio natrag refundaciju i povraćaj od države, srazmerno stopi ostvarenoj stopi.'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Ove olakšice može dobiti poslodavac - pravno lice, preduzetnik, preduzetnik paušalac ili preduzetnik poljoprivrednik.'
      }
    },{
      type: 'headline',
      value: {
        en: '????',
        rs: 'Uslovi za olakšice'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Uslov za poslodavca je da sa novozaposlenim radnikom zaključi ugovor o radu i da ga prijavi na obavezno socijalno osiguranje.'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Uslovi za radnike su: da je bio prijavljen na evidenciju NSZ šest meseci, da ranije nije bio zaposlen kod tog poslodavca.'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Novozaposleni radnik mora biti prijavljen na evidenciju NSZ kao nezaposleno lice najmanje 6 meseci neprekidno, pre zasnivanja radnog odnosa. Takođe, nije smeo imati zaposlenje kod novog poslodavca.'
      }
    },{
      type: 'headline',
      value: {
        en: '????',
        rs: 'Stope poreskih olakšica'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Firme za zapošljavanje novih radnika mogu dobiti umanjenja poreza i doprinisa: 65% - najmanje jedan, najviše devet radnika, 70% - najmanje deset, najviše 99 radnika, 75%  - najmanje 100 radnika, 75 % - najmanje dva radnika, čime poveća broj zaposlenih.'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Ako poslodavac zaposli najmanje jednog, a najviše devet novih radnika dobiće povraćaj 65% plaćenih poreza i doprinosa. '
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Kada zaposli najmanje 10, a najviše 99 novih radnika dobiće povraćaj 70%. '
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Ako zaposli najmanje 100 novih zaposlenih, dobiće povraćaj 75%.'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Poslodavac - mikro i malo pravno lice, preduzetnik, preduzetnik paušalac ili preduzetnik poljoprivrednik može dobiti povraćaj 75%, ako zaposli najmanje dva nova radnika i time poveća broj zaposlenih u odnosu na prethodni period. '
      }
    }]
  },{
    title: {
      en: '???',
      rs: 'Slobodne zone u Republici Srbiji'
    },
    subTitle: {
      en: 'Learn more',
      rs: 'Više o slobodnim zonama'
    },
    description: {
      en: '???',
      rs: 'Slobodne zone, osnivači, korisnici i pogodnosti'
    },
    icon: require('../../../assets/images/iconCompany.png'),
    image: require('../../../assets/images/servicesImagex.png'),
    paragraphs: [{
      type: 'headline',
      value: {
        en: '?????',
        rs: 'Slobodne zone u Srbiji'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Za sada je Srbiji postoje 14 aktivnih slobodnih zona i to su: SZ Pirot, SZ Subotica, SZ Zrenjanin, SZ Novi Sad, FAS SZ Kragujevac, SZ Šabac, SZ Užice, SZ Smederevo, SZ Kruševac, SZ Svilajnac, SZ Apatin,SZ Vranje, SZ Priboj, SZ Beograd.'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'U slobodnim zonama se mogu obavljati sve vrste poslovanja i industrijskih aktivnosti uključujući proizvodnju, skladištenje, pakovanje, trgovinu, bankarstvo i osiguranje. '
      }
    },{
      type: 'headline',
      value: {
        en: '????',
        rs: 'Osnivači i korisnici slobodnih zona'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Osnivanje SZ je ekonomski opravdano ako: investiciono ulaganje prelazi 3.000.000€ (u prvoj godini prelazi 1.000.000€), ako plan predviđa zapošljavanje najmanje 100 radnika prve 2 godine, ako se nalazi na nedovoljno razvijenom području Srbije, ako planiran promet pokazuje pozitivan efekat na spoljnotrgovinski bilans Srbije, ako obavljanje delatnosti u SZ pozitivno utiče na poslovanje firmi van SZ.'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'One su značajne za poslovanje firmi u Srbiji, jer omogućavaju velike uštede u poslovanju. Stvaraju se mogućnosti za saradnju domaćih i stranih kompanija, otvaraju nova radna mesta i direktno privlače investicije. '
      }
    },{
      type: 'headline',
      value: {
        en: '????',
        rs: 'Pogodnosti u slobodnim zonama'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Kompanije koji svoju delatnost obavljaju u slobodnim zonama imaju brojne pogodnosti od strane države.'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Fiskalne pogodnosti: oslobađanje od plaćanja PDV-a na unos dobara u SZ, kao i pružanje prevoznih i drugih usluga u vezi sa unosom dobara, oslobađanje od plaćanja PDV-a na promet dobara i usluga u SZ, oslobađanje od plaćanja PDV-a na promet dobara između korisnika dve SZ, oslobađanje proizvodnih korisnika plaćanja PDV-a na potrošnju energenata,oslobađanje od pojedinih poreskih opterećenja za direktne strane investicije.'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Finansijske pogodnosti: slobodan protok kapitala, profita i dividendi, sredstva iz budžeta Republike Srbije za finansiranje investicionih projekata u proizvodnom sektoru i sektoru usluga.'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Carinske pogodnosti: Kompanije su oslobođene plaćanja carine i drugih uvoznih dažbina za materijal i sirovine namenjenih: obavljanju delatnosti (proizvodnja robe za izvoz), izgradnji objekata u SZ (repromaterijal, oprema, građevinski materijal).'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Efikasna administracija u slobodnoj zoni (One-Stop-Shop) - One-stop-shop je jedinstveni šalter gde privrednici mogu dobiti sve potrebne informacije, mogu brzo da završe celokupan posao oko osnivanja, registrovanja, prijavljivanja nove firme, kao i dobijanja građevinskih dozvola.'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Jednostavna i brza carinska procedura: u svakoj SZ nalazi se carinski referat i procedura je pojednostavljena, ne plaćaju se carina ni dažbine za uvoz robe namenjene obavljanju delatnosti i izgradnji objekata.'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Pogodnosti lokalne samouprave - Lokalna samouprava može doneti odluke koje bi dodatne olakšice trebalo omogućiti. Tu se odnosi na oslobođenja od plaćanja lokalnih poreza, naknada i taksi koje su u nadležnosti lokalne samouprave.'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Pružanje usluga korisnicima po povlašćenim cenama - Logističke usluge se pružaju po povoljnijim cenama: transport, pretovar, utovar, špedicija, osiguranje i reosiguranje, ostalo.'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Poslovanje u SZ mora se obavljati po sledećim principima: spoljnotrgovinsko poslovanje je slobodno, izvoz robe i uvoz u zonu i iz zone je slobodan i neograničen (osim robe čiji je uvoz i izvoz zakonom zabranjen), roba koja se iz zone stavlja u promet u Srbiju podleže obavezi plaćanja carine i drugih uvoznih dažbina, mogu se ostvariti poreske olakšice za porez na dobit preduzeća, porez na imovinu i porez na dohodak građana.'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Delatnost koja se obavlja u SZ ne sme da ugrožava životnu sredinu, zdravlje, materijalna dobra i bezbednost ljudi. Takođe, mora imati pozitivan efekat na razvoj regiona u kome se nalazi.'
      }
    }]
  },{
    title: {
      en: '????',
      rs: 'Podsticaji za investiranje'
    },
    subTitle: {
      en: 'More About Our Clients',
      rs: 'Saznajte više o podsticajima'
    },
    description: {
      en: '++++++',
      rs: 'Podsticaji za investiranje'
    },
    image: 'https://s.hswstatic.com/gif/13-incredible-bat-facts.jpg',
    icon: require('../../../assets/images/iconTransfer.png'),
    paragraphs: [{
        type: 'headline',
        value: {
          en: '?????',
          rs: 'Podsticaji za investiranje'
        }
      },{
        type: 'text',
        value: {
          en: '????',
          rs: 'U cilju privlačenja stranih investitora Republika Srbija omogućila je finansijske podsticaje za kompanije koje ulažu u našu zemlju. Finansijski podsticaji regulisani su Uredbom o uslovima i načinu privlačenja direktnih investicija, u koja spadaju sredstva podsticaja i ulaganja od posebnog značaja.'
      }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Sredstva podsticaja za privlačenje direktnih investicija se mogu koristiti za finansiranje opravdanih troškova investicionih projekata i to: u proizvodnji, za usluge međunarodne trgovine, za usluge hotelskog smeštaja.'
    }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Podsticaji se ne mogu koristiti za ulaganja u: saobraćaj, razvoj softvera (osim ako je u funkciji unapređenja proizvoda, proizvodnog procesa ili pružanja usluga međunarodne trgovine), ugostiteljstvo, igre na sreću, trgovine, proizvodnju sintetičkih vlakana, uglja, čelika, rudarstva, duvana, duvanskih prerađevina, oružja, municije, brodogradnje, aerodroma, logističkih centara, komunalni sektor, sektor energetike, širokopojasne mreže, ribarstvo, akvakulturu.'
    }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Opravdani troškovi: ulaganja u materijalna i nematerijalna sredstva, bruto zarade za nove zaposlene.'
    }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Investitor je dužan da obezbedi učešće od najmanje 25% opravdanih troškova  (sopstvena sredstva, drugi izvori, osim državne pomoći).'
    }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Maksimalni iznos koji kompanije mogu dobiti za realizaciju investicionog projekta su: za velika preduzeća do 50%, za srednja preduzeća do 60%, za mala preduzeća do 70%.'
    }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Najveći iznos koji može biti dodeljen za opravdane troškove ulaganja velikih preduzeća su: do 50.000.000 EUR najviše do 50%, za deo troškova preko 50.000.000 EUR najviše do 25%, za deo troškova preko 100.000.000 EUR do 17%.'
    }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Sredstva mogu dobiti kompanije za opravdane troškove ukoliko se zaposli do 100 novozaposlenih (zavisi od stepena razvijenosti opštine): I grupa - opravdani troškovi minimum 500.000 EUR i najmanje 50 radnika, II grupa - opravdani troškovi minimum 400.000 EUR i najmanje 40 radnika, III grupa - opravdani troškovi minimum 300.000 EUR i najmanje 30 radnika, IV grupa - opravdani troškovi minimum 200.000 EUR i najmanje 20 radnika, devastirana područja - opravdani troškovi minimum 100.000  EUR i najmanje 10 radnika.'
    }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Za usluge međunarodne trgovine uslov je da opravdani troškovi budu minimum 150.000 EUR i da se zapošljava najmanje 15 novozaposlenih.'
    }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Investitor može dobiti podsticaj za opravdane troškove bruto zarada (po novom radnom mestu). Iznos zavisi od grupe regiona i stepena razvijenosti opštine: I grupa – najviše do 20% i maksimum 3.000 EUR, II grupa - najviše do 25% i maksimum 4.000 EUR, III grupa - najviše do 30% i maksimum 5.000 EUR, IV grupa - najviše do 35% i maksimum 6.000 EUR, devastirano područje - najviše do 40% i maksimum 7.000 EUR.'
    }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Investitorima se može odobriti povećanje i dodatni podsticaj za opravdane troškove ulaganja u OS, prema razvijenosti opštine: I grupa do 10%, II grupa do 15%, III grupa do 20%, IV grupa do 25%, devastirano područje do 30%.'
    }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Dodatni podsticaji za opravdane troškove bruto zarada mogu se dobiti za radno intenzivne projekte: 10% za 200 – 500 novozaposlenih, 15% za 500 – 1.000 novozaposlenih, 20% za više od 1.000 novozaposlenih.'
    }
    },{
      type: 'text',
      value: {
        en: '????',
        rs: 'Ulaganje od posebnog značaja jeste ulaganje koje bitno utiče na dalji razvoj privrede u Republici Srbiji, na unapređenje konkurentnosti privrede i na ravnomeran regionalni razvoj. Odnosi se na: ulaganje u OS veća od 5.000.000 EUR ili otvaranje više od 500 radnih mesta (I i II grupa), ulaganje u osnovna sredstva veća od 2.000.000 EUR ili otvaranje više od 100 radnih mesta (III i IV grupa, devastirano područje), ulaganje koje se realizuje na teritoriji jedne ili više opština i koje podstiče realizaciju zajedničkih prioriteta u cilju povećanja konkurentnosti, ulaganje na osnovu usvojenih bilateralnih sporazuma i sporazuma o prekograničnoj saradnji.'
    }
    },{
      type: 'text',
      value: {
        en: '????',
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
