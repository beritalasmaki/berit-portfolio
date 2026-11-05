import { educationPlatform as en } from "../education-platform";
import type { CaseStudy } from "../types";
import { localizeGallery } from "./helpers";

export const educationPlatformFi: CaseStudy = {
  slug: "education-platform",
  title: "Koulutuksen digitaalinen palvelualusta",
  label: "KOULUTUKSEN DIGITAALINEN PALVELUALUSTA · 2021–2024",
  headline: "Monta tiimiä, monta järjestelmää.\nYksi yhtenäinen kokemus.",
  description:
    "Yhteinen, standardoitu suunnitteluperusta, joka yhtenäisti käytettävyyden ja toimintalogiikan usealla alustalla.",
  thumbnail: "/case/education-new-card.png",
  thumbnailAlt: "Koulutusalusta",
  projectCount: "1",
  industry: "Julkinen koulutus",
  ctaLabel: "Tutustu koko asiakasprojektiin",
  otherCaseStudyDescription:
    "Tein valtavasta julkisen sektorin alustasta selkeän: kokosin monimutkaiset kuntien koulutyönkulut saavutettavaksi työkaluksi opettajille ja hallintohenkilöstölle.",

  intro: [
    "Tehtävänä oli korvata usean kunnan vanhentuneet opetus- ja lukiojärjestelmät yhtenäisellä ratkaisulla julkisen sektorin konsortiolle. Liityin projektiin UX- ja tuotesuunnittelijana, ja kasvoin kolmen vuoden aikana hankkeen Lead Designeriksi.",
  ],
  glance: {
    problem:
      "Perusopetuksessa ja lukiokoulutuksessa aikaisemmin käytetyt vanhentuneet opetus- ja hallintojärjestelmät piti korvata seitsemän kunnan tarpeisiin. Uutta järjestelmää oli mukana rakentamassa useampi kehitystiimi ja kolmannen osapuolen toimittaja. Sidosryhmiä ja käyttäjäryhmiä oli paljon. Alustan tuli palvella saumattomasti kahta erilaista oppilaitosympäristöä, mikä vaati peruskoulun ja lukion prosessien sekä toiminnallisten vaatimusten tarkkaa yhteensovittamista.",
    role:
      "Kolmen vuoden yhteistyö, jossa toimin UX- ja tuotesuunnittelijana, myöhemmin Lead Designer. Vastasin tuotteen visuaalisesta ilmeestä, käyttäjätutkimuksesta sekä Design Systemin UI Kitistä. Huolehdin saavutettavuudesta ja varmistin suunnittelun yhtenäisyyden eri tiimien välillä. Toimin tiiviissä yhteistyössä tuoteomistajan ja kehittäjien kanssa muun muassa tikettien ja vaatimusten määrittelyssä.",
    decisionsLabel: "Ratkaisu ja toteutus",
    decisions: [
      "**Prosessin kirkastaminen:** Vedin yli 10 työpajaa, joista pari toteutettiin sidosryhmille kolmivaiheisella prosessilla: kartoitettiin nykyiset kipupisteet, määriteltiin ihannetilanne ja suunniteltiin tulevat konseptit yhdessä. Suunnittelun ja iteroinnin aikana vedin lisäksi käyttäjähaastatteluja aina tarpeen mukaan. Esimerkiksi oppilaaksiottonäkymää rakennettaessa otin matalalla kynnyksellä yhteyttä kouluissa oppilaaksiottoasioita hoitaviin opintosihteereihin. Tärkeintä oli aina kuulla jokaisen kunnan edustajia ja sitä, millaiset työtavat heillä oikeasti olivat.",
      "**Yhtenäinen suunnittelu:** Määrittelin tiimeille yhteisen visuaalisen linjan ja komponentit, ja avasin päätösten taustoja säännöllisissä tapaamisissa kehittäjien kanssa.",
      "**Luottamuksen palauttaminen:** Budjettiylityksen jälkeen otin aktiivisen roolin suunnittelutyön edistymisen ja sen arvon viestimisessä sidosryhmille. Rakensimme luottamusta läpinäkyvällä viestinnällä, säännöllisellä läsnäololla ja kirkkaalla päätöksenteon dokumentoinnilla. Tämä selkeytti yhteistyötä eri osapuolten välillä ja varmisti hankkeen etenemisen.",
    ],
    outcome:
      "Pilottikoulujen palaute oli erittäin myönteistä: opettajat ja hallintohenkilöstö kiittivät alustan helppokäyttöisyyttä, nopeutta ja johdonmukaista rakennetta. Alusta otettiin käyttöön viidessä kunnassa keväällä 2026, ja seuraavaksi valmistellaan järjestelmän laajempaa levittämistä kouluverkostossa.",
  },
  roleLabel: "UX- ja tuotesuunnittelija, myöhemmin Lead Designer, kolmen vuoden ajan",
  focusLabel:
    "Palvelumuotoilu, suunnittelujärjestelmät ja suunnittelun yhtenäisyys tiimien välillä usean toimittajan julkisen sektorin alustalla",
  categoryTag: "Julkisen sektorin alusta",
  skillTags: [
    {
      label: "Palvelumuotoilu",
      description: "Kartoitin monimutkaiset koulun työnkulut yhdeksi selkeäksi kokemukseksi",
    },
    {
      label: "Suunnittelujärjestelmän johtaminen",
      description: "Määrittelin visuaalisen ja toiminnallisen linjan kaikille tiimeille",
    },
    {
      label: "Yhtenäisyys toimittajien välillä",
      description: "Yhdistin omat ja kolmansien osapuolten alustat yhdeksi kokemukseksi",
    },
    {
      label: "Työpajojen fasilitointi",
      description: "Ehdotin ja vedin kolmivaiheisen tutkimusmallin, jota tiimi käytti",
    },
    {
      label: "Mobiilikokemus",
      description: "Suunnittelin mobiilisovelluksen, jota oli oikeasti helppo käyttää",
    },
    {
      label: "Tiimin johtaminen",
      description: "Johdin visuaalista linjaa kolmen suunnittelijan tiimissä",
    },
  ],

  gallery: localizeGallery(en.gallery, [
    { alt: "Opettajan etusivu", caption: "Opettajan dashboard" },
    { alt: "Opettajan etusivu, mobiili", caption: "Dashboard mobiilissa" },
    { alt: "Oppilashallinnon tarkempi näkymä", caption: "Oppilaan tiedot" },
    { alt: "Lukujärjestys ja kurssitarjonta", caption: "Lukujärjestys" },
    { alt: "Lukujärjestys ja kurssitarjonta, valintojen muokkaus", caption: "Valintojen muokkaus" },
    { alt: "Oppilashallinnon tiedot, mobiili", caption: "Mobiilinäkymä: tiedot" },
    { alt: "Oppilaan välilehtivalikko, mobiili", caption: "Mobiilivalikko" },
  ]),
  sneakPeekImages: en.sneakPeekImages,

  impactIntro:
    "Pilottikoulujen palaute on ollut pääosin myönteistä. Alustaa on kuvattu helppokäyttöiseksi, monipuoliseksi ja moderniksi. Erityisesti opettajat ja hallintohenkilöstö kiittelivät sitä, kuinka johdonmukaiselta palvelu tuntuu ja kuinka hyvin se tukee koulun arjen rutiineja. Käytettävyys ja nopeus nousivat erityisesti esiin: käyttäjien mukaan tarvittavan löytäminen onnistui nopeasti ja helposti. Käytännön tehtävät, kuten todistusten tulostus ja oppilastietojen siirto, osoittautuivat luotettaviksi päivittäisessä käytössä. Myös loppukäyttäjät, opettajat mukaan lukien, osallistuivat suoraan hyväksymistestaukseen, joten alusta sopii siihen, miten opetustyötä oikeasti tehdään. Alusta otettiin käyttöön vasta keväällä 2026, ja laajempi käyttöönotto kouluissa on tulossa tänä syksynä, joten täysi vaikutus on vielä edessä. Toistaiseksi tiedämme, että tuloksena on yhtenäinen ja saavutettava perusta, jonka varaan useat kunnat rakentavat nyt päivittäistä koulunhallintoaan.",
  impactCards: [
    {
      number: "01",
      title: "Selkeämmät ja käytettävämmät käyttöliittymät",
      body: "Korvasimme monimutkaiset, vanhentuneet järjestelmät käyttöliittymillä, jotka ovat aidosti helpompia ymmärtää ja käyttää niin opettajille, hallintohenkilöstölle, huoltajille kuin oppilaillekin. Ne on rakennettu todellisten käyttäjätarpeiden pohjalta eikä vanhan järjestelmän logiikan mukaan.",
    },
    {
      number: "02",
      title: "Mobiilikokemus, joka oikeasti toimii",
      body: "Vanhoissa järjestelmissä oli mobiilisovelluksia, mutta ne olivat usein sekavia ja turhauttavia käyttää. Monelle huoltajalle ja oppilaalle tämä voi olla ensimmäinen kerta, kun kouluasioiden hoitaminen puhelimella tuntuu helpolta eikä pakkopullalta.",
    },
    {
      number: "03",
      title: "Yksi yhtenäinen kokemus, monta toimittajaa",
      body: "Vaikka useat kehitystiimit ja kolmansien osapuolten alustat työskentelivät rinnakkain, lopputulos näyttää ja toimii yhdenmukaisesti. Tässä mittakaavassa se on todella vaikea saavuttaa.",
    },
  ],

  howItStarted: [
    "Projekti alkoi kolmen suunnittelijan tiimillä (kaksi UX-suunnittelijaa ja yksi palvelumuotoilija), joka veti jäsenneltyjä työpajoja osana kartoitusvaihetta. Työpajat perustuivat kolmivaiheiseen tutkimusmalliin, joka on lähellä Double Diamond -menetelmää. Ensin kartoitimme nykytilan ja olemassa olevat ongelmakohdat. Toiseksi tutkimme, millainen ihanteellinen tulevaisuuden palvelu voisi olla. Kolmanneksi suunnittelimme konkreettisia konsepteja yhdessä sidosryhmien kanssa aiempien vaiheiden oivalluksiin ja luonnoksiin pohjaten. Tutkimus tuotti laajan aineiston, josta tuli perusta sitä seuranneelle palvelumuotoilulle ja kehitykselle.",
    "Tiimissä vastasin ensisijaisesti visuaalisesta suunnittelusta: tein konseptit ja mallit ja huolehdin työn laadusta koko matkan ajan. Ehdotin kolmivaiheista työpajamallia ja vedin sitä yhdessä muiden suunnittelijoiden ja tuoteomistajan kanssa. Myöhemmin vedin tarvittaessa lisätyöpajoja niistä palvelun osista, jotka olivat omalla vastuullani.",
  ],

  challenges: [
    {
      number: "01",
      title: "Suunnittelun yhtenäisyyden varmistaminen monessa tiimissä",
      body: "Tässä isossa projektissa oli kerrallaan vain yhdestä kolmeen suunnittelijaa. Minun tehtäväni oli huolehtia, että kaikki kehitystiimit käyttivät samaa visuaalista tyyliä ja samoja uudelleenkäytettäviä komponentteja. Yhtä tärkeää oli, että tiimit ymmärsivät, miksi jokin tehdään tietyllä tavalla, eikä vain sitä, miltä sen pitää näyttää. Pidimme säännöllisiä tapaamisia kehittäjien kanssa, joissa kerroimme päätösten taustat ja kuuntelimme myös heidän ideansa.",
    },
    {
      number: "02",
      title: "Suunnittelusta oikeaksi tuotteeksi",
      body: "Tein tiivistä yhteistyötä kehitystiimien kanssa, jotta suunnitelmat varmasti toteutettiin tarkoitetulla tavalla. Projektin viimeisenä vuotena Lead Designerina vastasin siitä, että kaikki näytti ja toimi yhdenmukaisesti koko alustalla, myös ulkopuolisten yritysten rakentamissa osissa, joiden räätälöinti osoittautui odotettua vaikeammaksi.",
    },
    {
      number: "03",
      title: "Budjettipaineet ja luottamuksen uudelleenrakentaminen",
      body: "Projekti ylitti jossain vaiheessa budjettinsa, ja kaksi kuntaa vetäytyi, koska jatkaminen kävi niille liian kalliiksi. Luottamus kärsi sekä sidosryhmien että tiimien sisällä. Rakensimme sitä takaisin pysymällä näkyvillä oikeissa palavereissa, kertomalla selkeästi, mitä teimme ja miksi, ja kirjaamalla päätökset ylös, jotta kaikki pystyivät seuraamaan perusteluja. Jälkikäteen ajatellen suunnittelutyön huolellisempi suunnittelu heti alussa olisi voinut estää osan tästä kitkasta. Takaiskuista huolimatta alusta otettiin käyttöön jäljellä olevissa viidessä kunnassa keväällä 2026, ja laajempaa käyttöönottoa kouluissa suunnitellaan tälle syksylle.",
    },
  ],

  whatIWouldDoDifferently: [
    "Selkeämpi viestintä ja suunnittelu heti alusta. Varmistaisin, että kehitystiimi ymmärtää heti alusta alkaen, ei vain mitä rakennamme, vaan myös miksi.",
    "Onnistumisen mittarit määriteltyinä aiemmin. Jos olisimme alusta asti tienneet, mitä halusimme saavuttaa ja miten sitä mitattaisiin, priorisointi olisi ollut koko projektin ajan helpompaa. Yksi konkreettinen esimerkki, jonka projektin tekninen projektipäällikkö ehdotti jälkikäteen, olisi ollut lainmukaisuuden seuranta suoraan: mitkä sääntelyvaatimukset täyttyivät jo ja mitkä eivät vielä, varsinaisena mittarina koko projektin ajan.",
    "Jäsennellympi suunnittelujärjestelmä alusta asti. Vuosi oli 2021, ja vaikka suunnittelujärjestelmät olivat jo tuttu käsite, sellaisen toteuttaminen kokonaan koodiin tässä mittakaavassa ei ollut vielä yleistä. Jos voisin palata ajassa taaksepäin, ajaisin tuon perustan rakentamista määrätietoisemmin heti alusta.",
    "Juridisen ja sääntelyosaamisen mukaan ottaminen aiemmin. Suunnittelujärjestelmän lisäksi projekti olisi hyötynyt juridisen tai sääntelyasiantuntijan mukaantulosta heti alusta, jotta tietosuoja-asetus (GDPR) ja perusopetuslainsäädäntö olisi huomioitu ajoissa. Moni ominaisuustoive perustui siihen, miten edellinen järjestelmä toimi, ja osa niistä ei enää ollut lain mukaan sallittuja.",
    "Ensimmäinen julkaisu aidosti minimituotteena (MVP). Käytännössä emme rakentaneet minimituotetta eli pienintä julkaisemisen arvoista versiota, vaan jotain lopullisen tuotteen kaltaista, joka yritti kattaa kaikki tarpeet heti alusta. Sillä oli todellinen vaikutus sekä aikatauluun että työmäärään.",
    "Päivittäisissä keskusteluissa mukana oleminen aiemmin. Meillä oli säännölliset päivittäiset ja viikoittaiset palaverit, ja tuo rytmi oli oikea, mutta aliarvioin alussa, kuinka paljon arvoa syntyi siitä, että oli jatkuvasti läsnä noissa keskusteluissa.",
    "Suunnittelija mukaan jo kolmansien osapuolten ratkaisuja arvioitaessa. Kun hankitaan valmiita alustoja, suunnittelijan tekemä arvio räätälöintimahdollisuuksista etukäteen olisi auttanut välttämään myöhempiä vaikeita kompromisseja.",
  ],

  methods: [
    "Käyttäjähaastattelut",
    "Yhteissuunnittelun työpajat",
    "Käytettävyystestaus",
    "Kartoittava tutkimus",
    "Asiakaspolkujen kartoitus",
  ],
};
