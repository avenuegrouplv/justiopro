import { FaqItem, PracticeArea } from '../types';

export const COMPANY_INFO = {
  name: 'JustioPro',
  fullName: 'JustioPro Juridiskie Pakalpojumi',
  tagline: 'Profesionāls juridiskais atbalsts Jūsu biznesa izaugsmei un jebkurai ikdienā risināmai situācijai',
  phone: '26841758',
  phoneDisplay: '+371 26841758',
  email: 'info@justiopro.lv',
  address: 'Brīvības iela 85, Rīga, LV-1001, Latvija',
  workingHours: 'P. - Pk. 09:00 - 18:00',
  developerName: 'Sageon Media',
  developerUrl: 'https://sageonmedia.eu',
  year: 2026,
  standard: 'Vienmēr rīkoties klienta labākajās interesēs, ievērojot konfidencialitāti, augstākos ētikas un profesionālos standartus',
  logoGoldColor: '#C9A45C', // Primārais zelta bāzes tonis akcentiem (RGB: 201, 164, 92)
  navyBaseColor: '#0B1F33', // Zilais bāzes tonis (RGB: 11, 31, 51)
};

export const NAV_ITEMS = [
  { label: 'GALVENĀ', path: '/' },
  { label: 'DARBĪBAS JOMAS', path: '/darbibas-jomas' },
  { label: 'BUJ', path: '/buj' },
  { label: 'KONTAKTI', path: '/kontakti' },
];

export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85',
  legalScale: '/profesionali-juridiskie-pakalpojumi.webp',
  modernArchitecture: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
  officeModern: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  contracts: '/juridiskas-konsultacijas-riga-1.webp',
  courthouse: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1000&q=80',
  finance: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80',
  lawBooks: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80',
  globe: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80',
  heritageDocs: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1000&q=80',
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'ligumtiesibas',
    title: 'Līgumu sagatavošana vai juridiskā analīze',
    shortDesc: 'Civiltiesisko līgumu sagatavošana parakstīšanai, saskaņošana starp iesaistītajām pusēm un to izpildes uzraudzība fiziskām un juridiskām personām.',
    fullDesc: [
      'Līgums ir juridiski saistoša vienošanās, kas noslēgta rakstiski vai mutiski starp divām vai vairākām pusēm. Ja kāda no pusēm bez dibināta iemesla nepilda savas līgumsaistības, tas tiek uzskatīts par līguma pārkāpumu un var izraisīt prasības par zaudējumu atlīdzību.',
      'Jo spēcīgāki ir Jūsu līgumi, jo labāk būs aizsargāts Jūsu bizness no neparedzētām situācijām. Tāpēc visdrošākie ir tādi līgumi, kas izstrādāti tieši konkrētā biznesa vajadzībām, aptverot gan tā specifiku, gan līdzšinējo pieredzi un praksi. Mēs nodrošinām visa veida civiltiesisko līgumu sagatavošanu parakstīšanai un saskaņošanu starp iesaistītajām pusēm, kā arī turpmāko to izpildes uzraudzību, tajā skaitā:',
    ],
    iconName: 'FileText',
    tag: 'Līgumi',
    imageUrl: '/ligumu-sagatavosana.webp',
    bulletPointsTitle: 'Sagatavojam un saskaņojam:',
    bulletPoints: [
      'līgumus darījumiem ar kustamo un nekustamo īpašumu',
      'līgumus starp būvniecības uzņēmumiem, pasūtītājiem un izpildītājiem',
      'līgumus preču tirdzniecības, ražošanas un pārvadāšanas darījumiem',
      'aizdevuma, ķīlas, hipotēkas līgumus un līgumus kredītu pārstrukturēšanai',
      'dāvinājuma, uztura, patapinājuma, pilnvarojuma, cesijas, kā arī dažādu ārpakalpojumu līgumus',
      'līgumus digitālajiem un tiešsaistes uzņēmumiem',
      'franšīzes un izplatīšanas līgumus',
      'līgumus par personas datu apstrādi',
      'aģentu un mārketinga līgumus',
      'konfidencialitātes līgumus',
    ],
  },
  {
    id: 'komerctiesibas',
    title: 'Komerctiesības',
    shortDesc: 'Juridiskā palīdzība uzņēmējiem jaunu sabiedrību reģistrēšanai, izmaiņu veikšanai Uzņēmumu reģistrā un komerclīgumu sagatavošanai.',
    fullDesc: [
      'Klienta un viņa juridiskā pakalpojuma sniedzēja attiecībās ir jāvalda savstarpējai uzticībai, sapratnei, profesionalitātei un konfidencialitātei. Profesionāla un uzticama juridiskā atbalsta sniegšana bieži ir arī uzņēmuma veiksmīgas darbības un pat reputācijas jautājums. Šī iemesla dēļ klienti izmanto juridiskos ārpakalpojumus, kas bieži ir finansiāli izdevīgāk, nekā algot uzņēmumā savu juristu.',
      'Piedāvājam juridisko palīdzību gan vietējiem, gan ārvalstu uzņēmējiem jaunu komercsabiedrību reģistrēšanai Uzņēmumu reģistrā, kā arī izmaiņu izdarīšanai Uzņēmumu reģistrā jau reģistrētajos uzņēmumos, tajā skaitā, nodrošinām:',
    ],
    iconName: 'Building2',
    tag: 'Bizness',
    imageUrl: '/komerctiesibu-pakalpojumi.webp',
    bulletPointsTitle: 'Nodrošinām:',
    bulletPoints: [
      'dokumentu sagatavošanu uzņēmuma pamatkapitāla palielināšanai vai samazināšanai',
      'dokumentu sagatavošanu uzņēmuma dalībnieku vai valdes sastāva izmaiņām',
      'visa veida komerclīgumu sagatavošanu un saskaņošanu starp darījuma dalībniekiem',
      'konsultācijas par jautājumiem, kas saistīti ar korporatīvajiem darījumiem',
      'juridisko atbalstu un palīdzību uzņēmumu pārdošanas gadījumā',
    ],
  },
  {
    id: 'nekustamais-ipasums-buvnieciba',
    title: 'Nekustamais īpašums / būvniecība',
    shortDesc: 'Juridiski korekta darījumu sagatavošana, būvniecības līgumprojektu izstrāde un īpašuma tiesību jautājumu risināšana.',
    fullDesc: [
      'Daudziem cilvēkiem mājoklis ir lielākais finanšu aktīvs, kurā veikti ieguldījumi visas dzīves laikā. Līdzīgi ir arī ar uzņēmumiem – komerciālais īpašums nereti ir uzņēmuma vērtīgākais aktīvs. Līdz ar to, neatkarīgi no tā, vai nekustamais īpašums ir biznesa vai personiskajām vajadzībām, tam vienmēr ir svarīga loma mūsu dzīvē.',
      'Juridiski korekta darījumu sagatavošana un to izpildes uzraudzība ir veiksmīga darījuma realizācijas pamatā. Mēs nodrošinām:',
    ],
    iconName: 'Home',
    tag: 'Īpašums',
    imageUrl: '/nekustamo-ipasumu-darijumu-apkalposana.webp',
    bulletPointsTitle: 'Nodrošinām:',
    bulletPoints: [
      'pirkuma, īres, nomas un apsaimniekošanas līgumu sagatavošanu',
      'nekustamo īpašumu sadalīšanu un apvienošanu',
      'servitūtu nostiprināšanu',
      'kopīpašuma un piespiedu nomas attiecību jautājumu risināšanu',
      'aizdevuma līgumu sagatavošanu ar nekustamā īpašuma ķīlu',
      'ar namīpašumu apsaimniekošanu saistīto jautājumu risināšanu',
      'ar būvniecību saistīto līgumprojektu izstrādi un saskaņošanu starp iesaistītajām pusēm (pasūtītājiem, izpildītājiem, uzņēmējiem un apakšuzņēmējiem)',
      'konsultācijas saistībā ar strīdiem, kas rodas gan dzīvojamo, gan komerciālo īpašumu ietvaros',
      'darījumu konta un rokasnaudas līgumu sagatavošanu',
      'īpašuma tiesību nostiprināšanu Zemesgrāmatā un darījumu juridisko uzraudzību',
    ],
  },
  {
    id: 'paradu-zaudejumu-piedzina',
    title: 'Parādu un zaudējumu piedziņa',
    shortDesc: 'Juridiskā palīdzība parādu un nodarīto zaudējumu atgūšanā no privātpersonām un juridiskajām personām pirmstiesas un tiesas ceļā.',
    fullDesc: [
      'Parādu piedziņa tiesvedības ceļā bieži vien ir pēdējais solis, kad visas pārējās iespējas jau ir izsmeltas. Mūsu mērķis ir jau no paša sākuma sniegt klientam reālu situācijas novērtējumu par katru juridiska rakstura strīdu, kā arī izstrādāt turpmākās rīcības plānu, kas vislabāk atbilst klienta vajadzībām un interesēm.',
      'Saviem klientiem piedāvājam juridisko palīdzību parādu un nodarīto zaudējumu atgūšanā no privātpersonām un juridiskajām personām, tajā skaitā:',
    ],
    iconName: 'Coins',
    tag: 'Piedziņa',
    imageUrl: '/paradu-piedzina.webp',
    bulletPointsTitle: 'Nodrošinām:',
    bulletPoints: [
      'parādnieka mantiskā stāvokļa noskaidrošana (un uzraudzība)',
      'parādnieka brīdināšana un pārrunu vešana pirmstiesas procesā',
      'izlīguma sagatavošana un noslēgšana pirmstiesas un arī tiesas procesā',
      'parāda un zaudējumu piedziņa tiesvedības ceļā',
      'sadarbība ar tiesu izpildītājiem, tiesas spriedumu izpildes uzraudzība',
    ],
    subSection: {
      title: 'Parāda piedziņa par fiksētu maksu',
      description: [
        'Ja klients vēlas samazināt naudas summu, kuru uzņēmums katru gadu noraksta zaudējumos, kā arī uzlabot naudas plūsmu, samazinot debitoru parādus, klients var izmantot mūsu parādu piedziņas pakalpojumu par fiksētu maksu.',
        'Šis pakalpojums ir piemērojams naudas parādiem, kuri ir neapstrīdēti, bet no debitoru puses joprojām nav izpildīti. Fiksēta maksa par pakalpojumu ļaus klientam jau no paša sākuma izlemt, cik daudz klients ir gatavs ieguldīt konkrētā parāda atgūšanā un cik tālu klients ir gatavs iet konkrētajā lietā tiesvedības gadījumā. Fiksētā maksa būs atkarīga no parāda vērtības, nenomaksāto parādu skaita, kā arī debitoru finansiālā stāvokļa. Tomēr, ja parādnieks apstrīd parāda summu, kuru klients vēlas no viņa piedzīt, šādas situācijas risinājums neietilpst fiksētās maksas parādu piedziņas pakalpojumā, jo tā parasti ir saistīta ar strīdu par līguma noteikumiem.',
      ],
    },
  },
  {
    id: 'konkurences-tiesibas-ma',
    title: 'Konkurences tiesības / M&A',
    shortDesc: 'Juridiskā palīdzība konkurences tiesību jomā, sūdzību sagatavošana IUB un padziļinātā juridiskā izpēte (Due Diligence).',
    fullDesc: [
      'Godīga konkurence ir ekonomiskās izaugsmes priekšnoteikums. Savukārt, negodīga konkurentu rīcība iecerēto izaugsmi var ne tikai būtiski ierobežot, bet arī apturēt, turklāt nodarot kaitējumu patērētājiem. Piedāvājam juridisko palīdzību konkurences tiesību jomā:',
    ],
    iconName: 'TrendingUp',
    tag: 'M&A',
    imageUrl: '/konkurences-tiesibas.webp',
    bulletPointsTitle: 'Piedāvājam palīdzību:',
    bulletPoints: [
      'juridisko atzinumu sniegšana par aizliegtām vienošanām un ierobežojošiem noteikumiem komercdarījumos',
      'sūdzību sagatavošana Iepirkumu uzraudzības birojam par iespējamu konkurentu nelikumīgu rīcību publiskajos iepirkumos',
      'juridiskā atzinuma sniegšana par uzņēmuma darbības atbilstību Negodīgas komercprakses aizlieguma likumam',
      'padziļināta juridiskā izpēte pirms uzņēmumu apvienošanās vai pārdošanas (Legal Due Diligence)',
      'konsultācijas zaudējumu piedziņai par konkurences tiesību pārkāpumiem',
      'uzņēmumu apvienošanās ziņojumu sagatavošana',
    ],
  },
  {
    id: 'gimenes-mantojuma-tiesibas',
    title: 'Mantojuma tiesības',
    shortDesc: 'Juridiskas konsultācijas un interešu pārstāvība lietās, kas saistītas ar mantojuma tiesībām un testamentu sagatavošanu.',
    fullDesc: [
      'Mēs nodrošinām juridiskas konsultācijas un interešu pārstāvību lietās, kas saistītas ar mantojuma tiesībām, tajā skaitā:',
    ],
    iconName: 'Users',
    tag: 'Mantojums',
    imageUrl: '/mantojuma-tiesibas.webp',
    bulletPointsTitle: 'Nodrošinām:',
    bulletPoints: [
      'mantojuma pieteikšanas un sadales jautājumos, tajā skaitā – klientiem, kuriem ir aktīvi ārvalstu jurisdikcijās',
      'testamentu projektu sagatavošanas un pēctecības plānošanas jautājumos',
    ],
  },
  {
    id: 'fizisko-personu-maksatnespeja',
    title: 'Fizisko personu maksātnespēja',
    shortDesc: 'Juridiskā palīdzība un konsultācijas privātpersonām kredītsaistību dzēšanai saskaņā ar Maksātnespējas likumu.',
    fullDesc: [
      'Ir daudz iemeslu, kāpēc cilvēki var kļūt maksātnespējīgi. Patstāvīgo ienākumu vai apgādnieka zaudēšana, vai arī iespējams pārsteidzīgu lēmumu pieņemšana par kredītsaistībām, var būtiski ietekmēt mājsaimniecības labklājības līmeni. Turklāt, bieži vien ģimenes mājoklis ir vienīgais kreditoru rīcībā esošais aktīvs, kas līdz ar to ģimenei var radīt vēl lielākas grūtības. Risinājumu šādām situācijām paredz Maksātnespējas likums.',
      'Piedāvājam juridisko palīdzību privātpersonām, kuras ir nonākušas finansiālās grūtībās uzņemto kredītsaistību dēļ. Juridiskā palīdzība un konsultācijas fizisko personu maksātnespējas procesā, tajā skaitā:',
    ],
    iconName: 'ShieldAlert',
    tag: 'Finanses',
    imageUrl: '/fizisko-personu-maksatnespeja.webp',
    bulletPointsTitle: 'Juridiskā palīdzība ietver:',
    bulletPoints: [
      'maksātnespējas pieteikumu sagatavošana iesniegšanai tiesā',
      'saistību dzēšanas plāna un mantas pārdošanas plāna sagatavošana',
      'klientu interešu pārstāvība sarunās ar nodrošinātajiem kreditoriem (piemēram, banku)',
      'klientu interešu pārstāvība sadarbībā ar valsts iestādēm un maksātnespējas administratoru',
    ],
  },
  {
    id: 'tiesvediba',
    title: 'Pārstāvība tiesā',
    shortDesc: 'Klientu interešu pārstāvība tiesvedībā normatīvajos aktos pieļautajā apjomā un procesuālo dokumentu sagatavošana.',
    fullDesc: [
      'Vairums cilvēku tiesas procesu uzskata par pēdējo iespēju, lai sasniegtu sev vēlamo rezultātu. Tāpēc juridiskā pakalpojuma sniedzēja uzdevums šādos gadījumos ir izdarīt visu iespējamo, lai prasība tiesā nemaz nebūtu jāceļ. Nodrošinām klientu interešu pārstāvību tiesvedībā normatīvajos aktos pieļautajā apjomā, tajā skaitā:',
    ],
    iconName: 'Scale',
    tag: 'Tiesvedība',
    imageUrl: '/parstaviba-tiesa.webp',
    bulletPointsTitle: 'Nodrošinām:',
    bulletPoints: [
      'klienta lietas faktisko un tiesisko aspektu rūpīga izvērtēšana',
      'pirmstiesas brīdinājumu sagatavošana',
      'izlīgumu vai vienošanās sagatavošana',
      'prasības pieteikumu sagatavošana vispārējā un vienkāršotajā procedūrā',
      'pieteikumu saistību piespiedu izpildei brīdinājuma kārtībā un bezstrīdus piespiedu izpildei sagatavošana',
      'pieteikumu par īpašuma pārdošanu labprātīgā izsolē tiesas ceļā sagatavošana',
      'īpašuma tiesību aizsardzības prasību sagatavošana',
      'apelācijas un kasācijas sūdzību sagatavošana',
      'procesuālo dokumentu sagatavošana pagaidu aizsardzības līdzekļu piemērošanai',
    ],
  },
  {
    id: 'parrobezu-stridu-risinasana',
    title: 'Pārrobežu strīdu risināšana',
    shortDesc: 'Juridiskā palīdzība jautājumos, kas saistīti ar pārrobežu strīdiem, Eiropas rīkojumu procedūrām un ārvalstu spriedumu izpildi.',
    fullDesc: [
      'Pārrobežu jautājumi aizvien biežāk kļūst aktuāli, jo sadarbība un korporatīvās saites ar ārvalstu biznesa partneriem tiek attīstītas katru dienu. Nodrošinām juridisko palīdzību jautājumos, kas saistīti ar pārrobežu strīdiem, tajā skaitā:',
    ],
    iconName: 'Globe2',
    tag: 'Starptautiski',
    imageUrl: '/parrobezu-stridu-risinasana.webp',
    bulletPointsTitle: 'Nodrošinām:',
    bulletPoints: [
      'pieteikumu sagatavošanu Eiropas kontu apķīlāšanas rīkojuma saņemšanai',
      'pieteikumu un dokumentu sagatavošanu Eiropas procedūrā maza apmēra prasībām',
      'pieteikumu un dokumentu sagatavošanu Eiropas maksājuma rīkojuma un Eiropas izpildes rīkojuma procedūrās',
      'mantiska rakstura prasību celšana tiesās atbilstoši jurisdikcijai',
      'ārvalstu tiesas spriedumu atzīšana un izpilde civillietās un komerclietās Latvijā un citās ES dalībvalstīs',
    ],
  },
  {
    id: 'bezmaksas-juridiskas-konsultacijas',
    title: 'Bezmaksas juridiskās konsultācijas maznodrošinātajiem un daudzbērnu ģimenēm',
    shortDesc: 'Savas kompetences un laika robežās sniedzam bezmaksas konsultācijas maznodrošinātajiem un daudzbērnu ģimenēm.',
    fullDesc: [
      'Nereti mēdz gadīties, ka finansiālā situācija kāda iemesla dēļ ir pasliktinājusies, bet juridiskā konsultācija par turpmāko rīcību ir nepieciešama nekavējoši. Ja šāda situācija Jūs ir piemeklējusi, savas kompetences un laika robežās sniegsim Jums bezmaksas konsultācijas šādos jautājumos:',
    ],
    iconName: 'HeartHandshake',
    tag: 'Sociālā atbildība',
    isSpecial: true,
    imageUrl: '/juridiskas-konsultacijas.webp',
    bulletPointsTitle: 'Sniegsim bezmaksas konsultācijas šādos jautājumos:',
    bulletPoints: [
      'līgumtiesības',
      'parādu piedziņas jautājumos',
      'maksātnespējas jautājumos',
      'jautājumos, kas saistīti ar pašvaldību rīcību',
      'ģimenes un bērnu tiesības',
      'mantojuma tiesības',
    ],
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 1,
    category: 'Vispārīgi',
    question: 'Kā sagatavoties juridiskajai konsultācijai?',
    answer: 'Lai saruna būtu maksimāli produktīva un mērķtiecīga: 1) Formulējiet galveno juridisko jautājumu vai vēlamo rezultātu; 2) Sagrupējiet visus ar lietu saistītos dokumentus (līgumus, saraksti, rēķinus, iestāžu lēmumus); 3) Nosūtiet dokumentus iepriekš uz mūsu e-pastu info@justiopro.lv, lai jurists varētu iepazīties ar tiem pirms sarunas. Konsultācijas nodrošinām gan klātienē birojā, gan attālināti (videozvanā vai telefoniski).',
  },
  {
    id: 2,
    category: 'Cenas & Samaksa',
    question: 'Kā tiek veidotas juridisko pakalpojumu izmaksas?',
    answer: 'Pakalpojumu izmaksas ir caurskatāmas un tiek iepriekš saskaņotas ar klientu. Atkarībā no uzdevuma specifikas mēs piedāvājam stundas likmi, fiksētu maksu par konkrētu dokumentu vai uzdevumu (piemēram, neapstrīdētiem parādiem), vai arī sadarbības līgumu uzņēmumiem. Pirms darba uzsākšanas vienmēr sniedzam skaidru tāmi vai prognozi.',
  },
  {
    id: 3,
    category: 'Konfidencialitāte',
    question: 'Cik droša ir manas informācijas un komercnoslēpuma konfidencialitāte?',
    answer: 'Konfidencialitāte ir mūsu profesionālās ētikas pamatakmens. Visa informācija, ko klients uztic juristam, tiek stingri aizsargāta un nekad netiek izpausta trešajām personām. Pēc klienta vēlēšanās pirms jebkādu datu izskatīšanas noslēdzam atsevišķu Konfidencialitātes (NDA) līgumu.',
  },
  {
    id: 4,
    category: 'Sadarbība',
    question: 'Vai sniedzat pakalpojumus arī attālināti visā Latvijā un ārpus tās?',
    answer: 'Jā, mūsdienīgie digitālie risinājumi un drošs elektroniskais paraksts (eParaksts / Smart-ID) ļauj mums pilnvērtīgi sniegt juridisko palīdzību klientiem visā Latvijas teritorijā, kā arī ārvalstu uzņēmējiem un diasporai bez nepieciešamības ierasties birojā klātienē.',
  },
  {
    id: 5,
    category: 'Tiesvedība',
    question: 'Cik ilgā laikā iespējams sagatavot prasības pieteikumu vai līguma projektu?',
    answer: 'Standarta līgumu vai juridisko atzinumu izstrādes termiņš parasti ir 2–4 darba dienas. Steidzamos gadījumos vai procesuālo termiņu ievērošanai tiesā dokumentu sagatavošanu varam veikt 24 stundu laikā pēc nepieciešamās informācijas saņemšanas.',
  },
  {
    id: 6,
    category: 'Biznesam',
    question: 'Kāpēc uzņēmumam izdevīgāk izvēlēties juridisko ārpakalpojumu nekā štata juristu?',
    answer: 'Juridiskais ārpakalpojums ļauj iegūt augsta līmeņa kompetenci dažādās tiesību nozarēs par būtiski zemākām izmaksām. Jums nav jāmaksā darba spēka nodokļi, atvaļinājuma naudas, jānodrošina darba vieta vai licences. Pakalpojumu apjomu var elastīgi pielāgot uzņēmuma faktiskajām vajadzībām.',
  },
  {
    id: 7,
    category: 'Strīdi',
    question: 'Kādas ir manas iespējas atgūt parādu, ja debitoram nav naudas līdzekļu kontā?',
    answer: 'Mēs veicam padziļinātu debitora mantiskā stāvokļa noskaidrošanu un uzraudzību – apzinām kustamo un nekustamo īpašumu esamību, kapitāldaļas citos uzņēmumos, debitoru prasījumus pret trešajām personām, kā arī izvērtējam valdes locekļu personīgo atbildību un maksātnespējas procesa iespējas.',
  },
];

export const PRIVACY_POLICY_TEXT = `
# Privātuma politika

**JustioPro Juridiskie Pakalpojumi** (turpmāk – Pārzinis) augstu vērtē savu klientu un tīmekļa vietnes apmeklētāju privātumu. Šī Privātuma politika skaidro, kā mēs vācam, apstrādājam un aizsargājam Jūsu personas datus saskaņā ar Vispārīgo datu aizsardzības regulu (VDAR / GDPR) un Latvijas Republikas normatīvajiem aktiem.

### 1. Personas datu apstrādes pārzinis
* **Nosaukums:** JustioPro
* **E-pasts:** info@justiopro.lv
* **Tālrunis:** +371 26841758

### 2. Kādi dati tiek apstrādāti
Mēs apstrādājam personas datus, kurus Jūs mums brīvprātīgi sniedzat saziņas formā vai e-pastā:
* Vārds, uzvārds;
* E-pasta adrese;
* Tālruņa numurs;
* Ziņojuma teksts un pievienotā informācija par Jūsu juridisko jautājumu.

### 3. Datu apstrādes mērķis un tiesiskais pamats
* **Mērķis:** Atbildēt uz Jūsu saņemtajiem jautājumiem, sniegt juridiskās konsultācijas, sagatavot pakalpojumu piedāvājumus un noslēgt sadarbības līgumus.
* **Tiesiskais pamats:** Jūsu piekrišana (iesniedzot formu), līguma sagatavošana vai izpilde, kā arī mūsu leģitīmā interese nodrošināt kvalitatīvu klientu servisu.

### 4. Datu glabāšanas termiņš
Dati tiek glabāti tikai tik ilgi, cik nepieciešams konkrētā mērķa sasniegšanai vai normatīvajos aktos noteiktajā termiņā.

### 5. Datu nodošana trešajām personām
Jūsu dati netiek nodoti, pārdoti vai iznomāti trešajām personām, izņemot gadījumus, kad to tieši pieprasa likums vai tas nepieciešams pakalpojuma sniegšanai ar Jūsu iepriekšēju piekrišanu.

### 6. Jūsu tiesības
Jums ir tiesības pieprasīt piekļuvi saviem personas datiem, to labošanu, dzēšanu vai apstrādes ierobežošanu, rakstot uz mūsu e-pastu: info@justiopro.lv.
`;

export const COOKIE_POLICY_TEXT = `
# Sīkdatņu (Cookies) politika

Šajā tīmekļa vietnē tiek izmantotas sīkdatnes, lai nodrošinātu vietnes pareizu darbību, uzlabotu lietotāju pieredzi un nodrošinātu drošību.

### 1. Kas ir sīkdatnes?
Sīkdatnes ir nelielas teksta datnes, ko tīmekļa vietne saglabā Jūsu datorā vai mobilajā ierīcē, kad Jūs apmeklējat vietni. Tās ļauj vietnei atcerēties Jūsu darbības un izvēles (piemēram, valodas iestatījumus).

### 2. Izmantotās sīkdatnes
* **Nepieciešamās (tehniskās) sīkdatnes:** Nepieciešamas vietnes pamatfunkciju nodrošināšanai, drošībai un navigācijai. Bez šīm sīkdatnēm vietne nevar pilnvērtīgi funkcionēt.
* **Funkcionālās sīkdatnes:** Nodrošina lietotāja pielāgoto iestatījumu (piemēram, valodas izvēles) saglabāšanu nākamajiem apmeklējumiem.
* **Statistikas un analītikas sīkdatnes:** Palīdz mums saprast, kā apmeklētāji mijiedarbojas ar vietni, lai mēs varētu nepārtraukti uzlabot saturu un struktūru.

### 3. Kā kontrolēt un dzēst sīkdatnes?
Jūs varat kontrolēt un dzēst sīkdatnes savas pārlūkprogrammas iestatījumos. Lūdzu, ņemiet vērā, ka dažu sīkdatņu atspējošana var ietekmēt vietnes funkcionalitāti.

Ja Jums ir jautājumi par mūsu sīkdatņu politiku, lūdzu, sazinieties ar mums: info@justiopro.lv.
`;
