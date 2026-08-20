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
  { label: 'DOKUMENTU PARAUGI', path: '/dokumentu-paraugi' },
  { label: 'BUJ', path: '/buj' },
  { label: 'KONTAKTI', path: '/kontakti' },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'ligumtiesibas',
    title: 'Līgumu sagatavošana vai to juridiskā analīze',
    summaryTitle: 'Līgumu sagatavošana',
    shortDesc: 'Civiltiesisko līgumu sagatavošana parakstīšanai, saskaņošana starp iesaistītajām pusēm un to izpildes uzraudzība.',
    fullDesc: [
      'Līgums ir juridiski saistoša vienošanās, kas noslēgta rakstiski vai mutiski starp divām vai vairākām pusēm. Ja kāda no pusēm bez dibināta iemesla nepilda savas līgumsaistības, tas tiek uzskatīts par līguma pārkāpumu un var izraisīt prasības par zaudējumu atlīdzību.',
      'Jo spēcīgāki ir Jūsu līgumi, jo labāk būs aizsargāts Jūsu bizness no neparedzētām situācijām. Tāpēc visdrošākie ir tādi līgumi, kas izstrādāti tieši konkrētā biznesa vajadzībām, aptverot gan tā specifiku, gan līdzšinējo pieredzi un labāko komercpraksi. Mēs nodrošinām visa veida civiltiesisko līgumu sagatavošanu parakstīšanai un saskaņošanu starp iesaistītajām pusēm, kā arī turpmāko to izpildes uzraudzību.',
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
      'konfidencialitātes līgumus un līgumus par personas datu apstrādi',
      'aģentu un mārketinga līgumus',
    ],
  },
  {
    id: 'komerctiesibas',
    title: 'Komerctiesības',
    shortDesc: 'Juridiskā palīdzība uzņēmējiem jaunu sabiedrību reģistrēšanai, izmaiņu veikšanai Uzņēmumu reģistrā un komerclīgumu sagatavošanai.',
    fullDesc: [
      'Klienta un viņa juridiskā pakalpojuma sniedzēja attiecībās ir jāvalda savstarpējai uzticībai, sapratnei, profesionalitātei un konfidencialitātei. Profesionāla un uzticama juridiskā atbalsta sniegšana bieži ir arī uzņēmuma veiksmīgas darbības un pat reputācijas jautājums.',
      'Piedāvājam juridisko palīdzību komerctiesību jomā gan vietējiem, gan ārvalstu uzņēmējiem.',
    ],
    iconName: 'Building2',
    tag: 'Bizness',
    imageUrl: '/komerctiesibu-pakalpojumi.webp',
    bulletPointsTitle: 'Šajā sakarā nodrošinām:',
    bulletPoints: [
      'dokumentu sagatavošanu uzņēmuma dibināšanai LR Uzņēmumu reģistrā',
      'dokumentu sagatavošanu uzņēmuma pamatkapitāla palielināšanai vai samazināšanai',
      'dokumentu sagatavošanu uzņēmuma dalībnieku vai valdes sastāva izmaiņām',
      'visa veida komerclīgumu sagatavošanu un saskaņošanu starp darījuma dalībniekiem',
      'konsultācijas par jautājumiem, kas saistīti ar korporatīvajiem darījumiem',
      'juridisko atbalstu un palīdzību uzņēmumu kapitāldaļu pārdošanas gadījumā',
    ],
  },
  {
    id: 'nekustamais-ipasums-buvnieciba',
    title: 'Nekustamais īpašums',
    shortDesc: 'Juridiski korekta darījumu sagatavošana, būvniecības līgumprojektu izstrāde un īpašuma tiesību jautājumu risināšana.',
    fullDesc: [
      'Daudziem cilvēkiem mājoklis ir lielākais finanšu aktīvs, kurā veikti ieguldījumi visas dzīves laikā. Līdzīgi ir arī ar uzņēmumiem – komerciālais īpašums nereti ir uzņēmuma vērtīgākais aktīvs. Līdz ar to, neatkarīgi no tā, vai nekustamais īpašums kalpo Jūsu personiskajām vajadzībām vai biznesam, tam vienmēr ir svarīga loma katra cilvēka dzīvē.',
      'Juridiski korekta darījumu sagatavošana un to izpildes uzraudzība ir veiksmīga darījuma realizācijas pamatā.',
    ],
    iconName: 'Home',
    tag: 'Īpašums',
    imageUrl: '/nekustamo-ipasumu-darijumu-apkalposana.webp',
    bulletPointsTitle: 'Mēs nodrošinām:',
    bulletPoints: [
      'pirkuma, īres, nomas un apsaimniekošanas līgumu sagatavošanu',
      'nekustamo īpašumu sadalīšanu, apvienošanu un servitūtu nostiprināšanu',
      'kopīpašuma un piespiedu nomas attiecību jautājumu risināšanu',
      'aizdevuma līgumu sagatavošanu ar nekustamā īpašuma ķīlu',
      'ar namīpašumu apsaimniekošanu un pārvaldīšanu saistīto jautājumu risināšanu',
      'ar būvniecību saistīto līgumprojektu izstrādi un saskaņošanu starp iesaistītajām pusēm',
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
      'Saviem klientiem piedāvājam juridisko palīdzību parādu un nodarīto zaudējumu atgūšanā no privātpersonām un juridiskajām personām.',
    ],
    iconName: 'Coins',
    tag: 'Piedziņa',
    imageUrl: '/paradu-piedzina.webp',
    bulletPointsTitle: 'Tajā skaitā, mēs nodrošinām:',
    bulletPoints: [
      'parādnieka brīdināšanu un pārrunu vešana pirmstiesas procesā',
      'izlīguma sagatavošanu pirmstiesas vai tiesas procesā',
      'parādu un zaudējumu piedziņu tiesvedības ceļā',
      'sadarbību ar tiesu izpildītājiem, spriedumu izpildes uzraudzība',
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
    title: 'Konkurences tiesības',
    shortDesc: 'Juridiskā palīdzība konkurences tiesību jomā, atzinumu sniegšana, sūdzības IUB un padziļinātā juridiskā izpēte (Due Diligence).',
    fullDesc: [
      'Godīga konkurence ir ekonomiskās izaugsmes priekšnoteikums. Savukārt, negodīga konkurentu rīcība iecerēto izaugsmi var ne tikai būtiski ierobežot, bet arī apturēt, turklāt nodarot kaitējumu patērētājiem. Piedāvājam juridisko palīdzību konkurences tiesību jomā.',
    ],
    iconName: 'TrendingUp',
    tag: 'Konkurence',
    imageUrl: '/konkurences-tiesibas.webp',
    bulletPointsTitle: 'Mēs nodrošinām:',
    bulletPoints: [
      'juridisko atzinumu sniegšanu par aizliegtām vienošanām un ierobežojošiem noteikumiem komercdarījumos',
      'sūdzību sagatavošanu Iepirkumu uzraudzības birojam par iespējamu konkurentu nelikumīgu rīcību publiskajos iepirkumos',
      'juridisko atzinumu sniegšanu par uzņēmuma darbības atbilstību Negodīgas komercprakses aizlieguma likumam',
      'padziļinātu juridisko izpēti pirms uzņēmumu apvienošanās vai pārdošanas (Legal Due Diligence)',
      'konsultācijas zaudējumu piedziņai par konkurences tiesību pārkāpumiem',
      'uzņēmumu apvienošanās ziņojumu sagatavošanu un iesniegšanu Konkurences padomē',
    ],
  },
  {
    id: 'gimenes-mantojuma-tiesibas',
    title: 'Ģimenes un mantojuma tiesības',
    shortDesc: 'Juridiskas konsultācijas un klientu interešu pārstāvība lietās, kas saistītas ar ģimenes un mantojuma tiesībām.',
    fullDesc: [
      'Sniedzam juridiskas konsultācijas un nodrošinam klientu interešu pārstāvību lietās, kas saistītas ar ģimenes un mantojuma tiesībām.',
    ],
    iconName: 'Users',
    tag: 'Ģimene & Mantojums',
    imageUrl: '/gimenes-un-mantojuma-tiesibas.webp',
    bulletPointsTitle: 'Tajā skaitā nodrošinām juridisko pārstāvību un konsultācijas:',
    bulletPoints: [
      'bērnu tiesību jautājumos',
      'uzturlīdzekļu piedziņas un bērnu aizgādnības jautājumos',
      'jautājumos, kas saistīti ar laulāto kopmantas sadali',
      'laulības šķiršanas jautājumos (laulāto vienošanās, pārstāvība tiesas un ārpustiesas procesā, piedalīšanās mediācijas procesā)',
      'mantojuma pieteikšanas un sadales jautājumos, tajā skaitā – klientiem, kuriem ir aktīvi ārvalstu jurisdikcijās',
      'testamentu sastādīšanas un pēctecības plānošanas jautājumos',
    ],
  },
  {
    id: 'fizisko-personu-maksatnespeja',
    title: 'Fizisko personu maksātnespēja',
    shortDesc: 'Juridiskā palīdzība un konsultācijas privātpersonām fizisko personu maksātnespējas procesā un kredītsaistību dzēšanai.',
    fullDesc: [
      'Ir daudz iemeslu, kāpēc cilvēki var kļūt maksātnespējīgi. Patstāvīgo ienākumu vai apgādnieka zaudēšana, vai arī iespējams pārsteidzīgu lēmumu pieņemšana par kredītsaistībām, var būtiski ietekmēt mājsaimniecības labklājības līmeni. Turklāt, bieži vien ģimenes mājoklis ir vienīgais kreditoru rīcībā esošais aktīvs, kas līdz ar to ģimenei var radīt vēl lielākas grūtības. Risinājumu šādām situācijām paredz Maksātnespējas likums.',
      'Piedāvājam juridisko palīdzību privātpersonām, kuras ir nonākušas finansiālās grūtībās uzņemto kredītsaistību dēļ. Juridiskā palīdzība un konsultācijas fizisko personu maksātnespējas procesā. Mūsu nodrošinātā juridiskā palīdzība ietver:',
    ],
    iconName: 'ShieldAlert',
    tag: 'Finanses',
    imageUrl: '/fizisko-personu-maksatnespeja.webp',
    bulletPointsTitle: 'Mūsu nodrošinātā juridiskā palīdzība ietver:',
    bulletPoints: [
      'maksātnespējas pieteikumu sagatavošanu iesniegšanai tiesā',
      'saistību dzēšanas un mantas pārdošanas plāna sagatavošanu',
      'klientu interešu pārstāvību sarunās ar nodrošinātajiem kreditoriem (piemēram, banku)',
      'klientu interešu pārstāvību sadarbībā ar valsts iestādēm un maksātnespējas administratoru',
    ],
  },
  {
    id: 'administrativas-tiesibas',
    title: 'Administratīvās tiesības',
    shortDesc: 'Juridiskā palīdzība saziņā ar valsts un pašvaldību institūcijām, administratīvo aktu pārsūdzēšana un interešu aizstāvība administratīvajās tiesās.',
    fullDesc: [
      'Attiecības ar valsts un pašvaldību iestādēm nereti prasa ne tikai izpratni par piemērojamo normatīvo regulējumu, bet arī spēju aizstāvēt savas intereses situācijās, kad iestāde ir pieņēmusi nepamatotus vai nelabvēlīgus lēmumus. Sniedzam juridisko palīdzību saziņā ar valsts un pašvaldību institūcijām, kā arī nodrošinām klientu interešu aizsardzību administratīvajos procesos un strīdos ar iestādēm.',
    ],
    iconName: 'Landmark',
    tag: 'Valsts & Pašvaldības',
    imageUrl: '/profesionali-juridiskie-pakalpojumi-riga.webp',
    bulletPointsTitle: 'Tajā skaitā, nodrošinām:',
    bulletPoints: [
      'juridisko pārstāvību attiecībās ar valsts un pašvaldību iestādēm',
      'iestāžu lēmumu un faktiskās rīcības juridisko izvērtēšanu',
      'sūdzību sagatavošanu valsts un pašvaldību iestādēm',
      'iestāžu izdoto administratīvo aktu pārsūdzēšanu',
      'klienta interešu pārstāvību administratīvajās tiesās',
      'juridiskās konsultācijas par iestāžu prasībām un lēmumiem',
    ],
  },
  {
    id: 'tiesvediba',
    title: 'Pārstāvība tiesā un šķīrējtiesā',
    shortDesc: 'Klientu interešu pārstāvība vispārējās jurisdikcijas tiesās un šķīrējtiesās, prasības pieteikumu, izlīgumu un sūdzību sagatavošana.',
    fullDesc: [
      'Vairums cilvēku tiesas procesu uzskata par pēdējo iespēju, lai sasniegtu sev vēlamo rezultātu. Tāpēc juridisko pakalpojumu sniedzēja uzdevums šādos gadījumos ir izdarīt visu iespējamo, lai prasība tiesā nemaz nebūtu jāceļ. Tomēr, ja citas iespējas nav un prasība tiesā ir jāceļ vai tā jau ir iesniegta, tad mēs nodrošinām klientu interešu pārstāvību tiesvedībā gan vispārējās jurisdikcijas tiesā civilprocesā un administratīvajā procesā, gan šķīrējtiesās LR normatīvajos aktos noteiktajā kārtībā.',
    ],
    iconName: 'Scale',
    tag: 'Tiesvedība',
    imageUrl: '/juridiskas-konsultacijas.webp',
    bulletPointsTitle: 'Mēs nodrošinām:',
    bulletPoints: [
      'klienta lietas faktisko un tiesisko aspektu izvērtēšanu, pirms pakalpojuma sniegšanas',
      'pirmstiesas brīdinājumu sagatavošanu',
      'izlīgumu vai vienošanās sagatavošanu',
      'prasības pieteikumu sagatavošanu vispārējā un vienkāršotajā procedūrā',
      'pieteikumu saistību piespiedu izpildei brīdinājuma kārtībā un bezstrīdus piespiedu izpildei sagatavošanu',
      'pieteikumu par īpašuma pārdošanu labprātīgā izsolē tiesas ceļā sagatavošanu',
      'īpašuma tiesību aizsardzības prasību sagatavošanu',
      'apelācijas un kasācijas sūdzību sagatavošanu',
    ],
  },
  {
    id: 'parrobezu-stridu-risinasana',
    title: 'Pārrobežu strīdu risināšana',
    shortDesc: 'Juridiskā palīdzība jautājumos, kas saistīti ar pārrobežu strīdiem, Eiropas maksājuma rīkojumiem un ārvalstu spriedumu izpildi.',
    fullDesc: [
      'Pārrobežu jautājumi biežu kļūst aktuāli, jo sadarbība un korporatīvās saites ar ārvalstu biznesa partneriem tiek uzturētas un attīstītas katru dienu. Nodrošinām juridisko palīdzību jautājumos, kas saistīti ar pārrobežu strīdiem.',
    ],
    iconName: 'Globe2',
    tag: 'Starptautiski',
    imageUrl: '/parrobezu-stridu-risinasana.webp',
    bulletPointsTitle: 'Tajā skaitām, nodrošinām:',
    bulletPoints: [
      'pieteikumu sagatavošanu Eiropas kontu apķīlāšanas rīkojuma saņemšanai',
      'pieteikumu un dokumentu sagatavošanu Eiropas procedūrā maza apmēra prasībām',
      'pieteikumu un dokumentu sagatavošanu Eiropas maksājuma rīkojuma un Eiropas izpildes rīkojuma procedūrās',
      'mantiska rakstura prasību celšana tiesās atbilstoši tiesas jurisdikcijai',
    ],
  },
  {
    id: 'uznemejdarbiba-asv',
    title: 'Uzņēmējdarbība ASV',
    shortDesc: 'Palīdzam uzsākt uzņēmējdarbību ASV no LLC reģistrācijas un EIN saņemšanas līdz bankas un Stripe konta atvēršanai.',
    fullDesc: [
      'Nodrošinam dokumentu sagatavošanu uzņēmējdarbības uzsākšanai ASV, tostarp - sagatavojam visus nepieciešamos dokumentus uzņēmuma dibināšanu ASV Delavēras štatā, juridiskās adreses reģistrācijai, kā arī bankas konta atvēršanai.',
    ],
    iconName: 'Building2',
    tag: 'ASV & Bizness',
    imageUrl: '/uznemumu-dibinasana-asv.webp',
    bulletPointsTitle: 'Nodrošinam:',
    bulletPoints: [
      'Uzņēmuma reģistrāciju ar vienu vai vairākiem dalībniekiem',
      'EIN numura iegūšanu',
      'Biznesa bankas konta atvēršanu',
      'Stripe konta izveidi un pieslēgšanu',
    ],
  },
  {
    id: 'bezmaksas-juridiskas-konsultacijas',
    title: 'Bezmaksas juridiskās konsultācijas maznodrošinātajiem un daudzbērnu ģimenēm',
    summaryTitle: 'Bezmaksas juridiskā palīdzība',
    shortDesc: 'Savas kompetences un laika robežās sniedzam bezmaksas konsultācijas maznodrošinātajiem un daudzbērnu ģimenēm.',
    fullDesc: [
      'Nereti mēdz gadīties, ka finansiālā situācija kāda iemesla dēļ ir pasliktinājusies, bet juridiskā konsultācija par turpmāko rīcību ir nepieciešama nekavējoties. Ja šāda situācija Jūs ir piemeklējusi, tad savas kompetences un laika robežās sniegsim Jums bezmaksas konsultācijas šādos jautājumos:',
    ],
    iconName: 'HeartHandshake',
    tag: 'Sociālā atbildība',
    isSpecial: true,
    imageUrl: '/parstaviba-tiesa.webp',
    bulletPointsTitle: '',
    bulletPoints: [
      'līgumtiesības',
      'parādu piedziņas jautājumos',
      'fizisko personu maksātnespējas jautājumos',
      'jautājumos, kas saistīti ar pašvaldību rīcību',
      'ģimenes un bērnu tiesību jautājumos',
      'mantojuma tiesību jautājumos',
    ],
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 1,
    category: 'Konsultācijas',
    question: 'Kā sagatavoties juridiskajai konsultācijai?',
    answer: 'Lai saruna būtu maksimāli produktīva un mērķtiecīga: 1) Formulējiet galveno juridisko jautājumu vai Jums vēlamo rezultātu; 2) Sagrupējiet hronoloģiskā secībā visus ar lietu saistītos dokumentus (līgumus, saraksti, rēķinus, iestāžu lēmumus); 3) Nosūtiet šos dokumentus iepriekš uz mūsu e-pasta adresi: info@justiopro.lv, lai mūsu komandas juristi varētu iepazīties ar tiem pirms sarunas. Konsultācijas un pakalpojumus nodrošinām attālināti, vai arī klienta birojā.',
  },
  {
    id: 2,
    category: 'Cenas & Samaksa',
    question: 'Kā tiek veidotas juridisko pakalpojumu izmaksas?',
    answer: 'Mūsu pakalpojumu izmaksas ir caurskatāmas un tiek iepriekš saskaņotas ar klientu. Atkarībā no uzdevuma specifikas mēs piedāvājam stundas likmi, fiksētu maksu par konkrētā dokumenta sagatavošanu vai uzdevuma izpildi (piemēram, neapstrīdētiem parādiem), vai arī sadarbības vai abonēšanas līgumu uzņēmumiem.',
  },
  {
    id: 3,
    category: 'Sadarbība',
    question: 'Vai savus pakalpojumus Jūs sniedziet attālināti vai klātienē?',
    answer: 'Pārsvarā savus pakalpojumus mēs nodrošinām attālināti. Mūsdienu digitālie risinājumi ļauj mums pilnvērtīgi sniegt visus klientiem nepieciešamos juridiskos pakalpojumus un palīdzību klientiem visā Latvijas teritorijā, kā arī ārvalstu klientiem bez nepieciešamības tikties klātienē. Nepieciešamības gadījumā tikšanās var notikt klienta birojā vai jebkurā citā vietā pēc vienošanās. Iespējami komandējumi arī ārpus Latvijas.',
  },
  {
    id: 4,
    category: 'Termiņi',
    question: 'Cik ilgā laikā iespējams sagatavot prasības pieteikumu vai līguma projektu?',
    answer: 'Parasti vienkārša vai vidēji sarežģīta līguma vai juridiskā atzinuma sagatavošana parasti ir 2–4 darba dienas. Steidzamos gadījumos vai procesuālo termiņu ievērošanai tiesā dokumentu sagatavošanu varam veikt 24 stundu laikā pēc nepieciešamās informācijas saņemšanas.',
  },
  {
    id: 5,
    category: 'Biznesam',
    question: 'Kāpēc uzņēmumam būtu izdevīgāk izvēlēties juridiskos ārpakalpojumus, nekā pieņemt darbā savu juristu?',
    answer: 'Juridiskais ārpakalpojums ļauj uzņēmumiem saņemt profesionālus juridiskos pakalpojumus un atbalstu par būtiski zemākām izmaksām, salīdzinot ar izmaksām, kādas Jums rastos, pieņemot darbā uzņēmuma juristu. Jums vairs nebūs nepieciešams maksāt visus darba spēka nodokļus, atvaļinājuma naudas, kā arī nodrošināt darba vietu. Jums nepieciešamo juridisko pakalpojumu apjomu var elastīgi pielāgot uzņēmuma faktiskajām vajadzībām vai arī noslēgt abonēšanas līgumu par fiksētu ikmēneša maksu.',
  },
  {
    id: 6,
    category: 'Konfidencialitāte',
    question: 'Cik droša ir manas informācijas un komercnoslēpuma konfidencialitāte?',
    answer: 'Konfidencialitāte ir mūsu profesionālās ētikas pamats. Visa informācija, ko klients uztic mūsu komandai, tiek stingri aizsargāta un nekad netiek izpausta trešajām personām, izņemot LR normatīvajos aktos stingri noteiktajos gadījumos.',
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
