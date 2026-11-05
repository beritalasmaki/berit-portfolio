// Suomenkielinen sisältö kaikelle muulle paitsi tapaustutkimuksille ja
// blogikirjoituksille (ne ovat kansiossa `src/data`). Rakenteen on oltava
// täsmälleen sama kuin `en.ts`:ssä; tyyppi johdetaan sieltä.
//
// Tekstin sävy: asiantunteva mutta lämmin, sinuttelu, puhekielisyyttä
// välttäen ("minä" vain silloin, kun se on luontevaa).

import type { Dictionary } from "./en";

export const fi: Dictionary = {
  site: {
    name: "Berit Alasmäki",
    role: "UX-suunnittelija",
    // Nimi on 152 px leveä normaalilla kirjainvälillä; 16 merkin roolirivi
    // venytetään saman levyiseksi (ks. Logo.tsx).
    nameTracking: "0em",
    roleTracking: "0.26em",
    homeLabel: "Berit Alasmäki — etusivu",
  },

  meta: {
    titleSuffix: "Berit Alasmäki",
    home: {
      title: "UX-suunnittelija (UX Designer) Suomessa | Berit Alasmäki",
      description:
        "Berit Alasmäki on senior UX- ja UI/UX-suunnittelija Suomessa. Yli 10 vuoden kokemus asiantuntijatyökaluista, julkisen sektorin palveluista ja suunnittelujärjestelmistä. Tutustu töihin.",
    },
    blog: {
      title: "Blogi",
      description:
        "Kirjoituksia UX-suunnittelusta, tuotesuunnittelusta ja tekoälyn tuomisesta organisaatioihin: ajatuksia kymmenen vuoden suunnittelutyöstä.",
    },
    jsonLd: {
      jobTitle: "Senior UX- ja tuotesuunnittelija",
      description:
        "Suomessa toimiva senior UX- ja UI/UX-suunnittelija, jolla on yli kymmenen vuoden kokemus asiantuntijatyökalujen, julkisen sektorin palveluiden ja suunnittelujärjestelmien suunnittelusta.",
      knowsAbout: [
        "UX-suunnittelu",
        "UI-suunnittelu",
        "Tuotesuunnittelu",
        "Palvelumuotoilu",
        "Suunnittelujärjestelmät",
        "Käyttäjätutkimus",
        "Käytettävyystestaus",
        "Tietoarkkitehtuuri",
        "Saavutettavuus",
        "Tekoälyavusteinen suunnittelu ja prototypointi",
      ],
      blogName: "Berit Alasmäki — Blogi",
    },
  },

  common: {
    backToTop: "Takaisin ylös",
    primaryNav: "Päävalikko",
    otherLanguage: { code: "EN", name: "English", aria: "Switch to English", lang: "en" },
  },

  header: {
    nav: {
      caseStudies: { label: "Valitut työt", short: "Työt" },
      about: "Minusta",
      process: "Prosessini",
      blog: "Blogi",
    },
    backToWork: "Takaisin töihin",
    backToBlog: "Takaisin blogiin",
    linkedin: "Ota yhteyttä LinkedInissä",
    github: "Katso GitHub-profiilini",
    linkedinShort: "LinkedIn",
    githubShort: "GitHub",
    contact: "Ota yhteyttä",
    openMenu: "Avaa valikko",
    closeMenu: "Sulje valikko",
  },

  hero: {
    photoAlt: "Berit Alasmäki",
    greeting: "Moikka! Olen Berit. 🙂",
    greetingSeparator: "",
    title: "Senior UX- ja tuotesuunnittelija",
    headline: ["Kumppanisi", "solmujen", "avaamiseen."],
    stats: [
      { value: "10+", label: "vuotta" },
      { value: "25+", label: "projektia" },
      { value: "10+", label: "asiakasta" },
    ],
    lead: "Autan tiimejä tekemään monimutkaisista tuotteista ja palveluista kokemuksia, joita on helpompi käyttää ja helpompi rakentaa.",
    primaryCta: "Ota yhteyttä",
    secondaryCta: "Katso työni",
    play: "Selvennä sekamelska",
    replay: "Toista uudelleen",
    story: [
      "Jokainen projekti alkaa *kirkastamisesta.*",
      "Ensin *kartoitan,* missä mennään.",
      "Sitten *suunnitellaan,* mitä tarvitaan. Mietitään järjestelmät ja toimintavat.",
      "Rakennetaan *järjestelmät* ja sovitaan, millä mittareilla edistymistä seurataan.",
      "*Etenemme,* opimme ja mukaudumme matkan varrella.",
      "Yhdessä saavuttaen lopullisen *tavoitteen.* 😊",
    ],
  },

  clients: {
    heading: "Asiakkaat, joiden kanssa olen työskennellyt",
  },

  mindTabs: {
    heading: "Miten työskentelen?",
    aside: "Hyvä yhteistyö alkaa paremmasta kysymyksestä.",
    tablistLabel: "Kysymykset",
    tabs: [
      {
        question: "Miten pidän yhteistyötaidot ajan tasalla?",
        body: "Yhteistyö kehittäjien kanssa on muuttunut muutamassa vuodessa, ja mukaudun muutokseen jatkuvasti. En luovuta valmista suunnitelmaa ja katoa, vaan pysyn mukana keskustelussa koko toteutuksen ajan. Rakennan itse toimivia prototyyppejä esimerkiksi Claude Designilla, ja teen töitä myös suoraan koodissa: rakennan komponentin tai tietyn osan sivustosta ensimmäiseksi versioksi, jonka kehittäjä katselmoi. Näin kehittäjät näkevät oikeita komponentteja ja niiden lataus-, virhe- ja tyhjätilat jo varhain eivätkä vain staattisia kuvia, joita pitäisi tulkita. Käytän keskusteluissa koodin nimiä, jolloin ei tarvitse arvailla, mitä painiketta tarkoitetaan.",
        highlight:
          "Valtakunnallisessa koulutusalustahankkeessa, jossa oli mukana useita kuntia ja toimittajia, vedin tiimin päivittäiset palaverit ja suunnittelin työpajaprosessin, jonka avulla tiimi eteni tutkimuksesta konkreettisiin konsepteihin.",
        linkLabel: "Lue asiakasprojekti: koulutuksen digitaalinen palvelualusta →",
        study: "education-platform",
      },
      {
        question: "Miten lähestyn monimutkaisia ongelmia?",
        body: "Aloitan kartoittamalla ongelman: keitä asia koskee, miten työ tehdään nykyään ja missä se tökkii. Sen jälkeen rakennan varhaisia konsepteja ja vien ne niiden ihmisten eteen, jotka niitä käyttävät. Näin nähdään, mikä kestää, kun suunnan muuttaminen on vielä halpaa. En yritä suunnitella jokaista yksityiskohtaa etukäteen, vaan suunnittelen sen verran, että pääsen liikkeelle, ja mukaudun oppimisen mukana. Pidän tavoitteen ja onnistumisen mittarit näkyvissä, jotta muutokset pysyvät tarkoituksenmukaisina.",
        highlight:
          "Vanhojen ympäristödatajärjestelmien uudistaminen tarkoitti työtä välineillä, joita tutkijat olivat käyttäneet vuosia ilman selkeää rakennetta. Sen sijaan, että olisin odottanut täydellistä ratkaisua, keskityin julkaisemaan nopeasti jotain hyödyllistä ja parantamaan sitä sen mukaan, mitä opimme.",
        linkLabel: "Lue asiakasprojekti: ympäristödatajärjestelmät →",
        study: "environmental-data-tool",
      },
      {
        question: "Mistä tiedän, että suunnitelma on valmis toteutettavaksi?",
        body: "Julkaisen mieluummin jotain, opin todellisesta palautteesta ja parannan sitä sen sijaan, että viilaisin liian pitkään ensimmäistä versiota, jota kukaan ei ole vielä testannut.",
        highlight:
          "Yliopiston digitaalinen portaali julkaistiin ensimmäisenä versiona ja kehittyi sen jälkeen jatkuvasti todellisen käytön perusteella.",
        linkLabel: "Lue asiakasprojekti: yliopiston digitaalinen perehdytys →",
        study: "university-ai-tool",
      },
    ],
  },

  caseStudies: {
    heading: "Tarkempi katsaus projekteihini.",
    projectOne: "projekti",
    projectMany: "projektia",
  },

  about: {
    heading: "Minusta",
    aside: "Ihminen pikselien takana.",
    closing: "Sovimme yhdessä, miltä onnistuminen näyttää, ennen kuin työ alkaa.",
    greeting: "Moi! Mukava että poikkesit sivuillani. ♥",
    photoAlt: "Berit Alasmäki",
    paragraphs: [
      "Tulen alun perin pieneltä paikkakunnalta Satakunnasta enkä koskaan ajatellut päätyväni teknologia-alalle, saati suunnittelijaksi. Opiskelin aikoinaan tietojenkäsittelyä ja sovelluskehitystä, mutta polkuni alalle alkoi lukioaikana, kun eräs kaverini pyysi mukaan hänen startup-yritykseensä. Olin mukana nelisen vuotta, minkä aikana sain vankan kokemuksen sekä koodaus- että suunnittelutyökaluista. Siitä lähtien muotoilu ja koodaus ovat pitäneet otteessaan.",
      "Olen työskennellyt suunnittelijana kymmenen vuotta, joista yhdeksän konsulttina. Taustani julkisen sektorin alustoista, teollisuuden työkaluista ja ympäristödatasta on opettanut mutkattomaan liikkumiseen eri toimialojen välillä. Yli 25 projektia on opettanut ottamaan työn jäljestä täyden vastuun, tein töitä sitten yksin tai tiimissä.",
      "Minulle on tärkeää, että töissä on selkeä suunta, tiimissä hyvä henki ja että hommat tehdään kunnolla ja huolella.",
    ],
    linkedin: "Ota yhteyttä LinkedInissä",
    musicLabel: "Musiikkia, jota kuuntelen yhä uudestaan",
    musicTitle: "Spotify-soittolista: musiikkia, jota kuuntelen yhä uudestaan",
    workingWithMe: {
      heading: "Yhteistyö kanssani",
      hintHover: "vie hiiri päälle",
      hintPress: "napauta",
      items: [
        {
          statement: "Haastan ajatuksia, en ihmisiä.",
          detail:
            "Jos jokin ei toimi käyttäjille tai kehittäjille, sanon sen ajoissa. Perustelen aina syyn enkä vain kerro mielipidettäni.",
        },
        {
          statement: "Keitän kahvit ja huolehdin hyvästä tekemisen meiningistä.",
          detail: "Hyvä työ syntyy hyvässä mielentilassa. Pidän ilmapiirin kevyenä silloinkin, kun kiire on kovimmillaan.",
        },
        {
          statement: "Huomaan yksityiskohdat, joilla on merkitystä.",
          detail:
            "Kaikkiin yksityiskohtiin ei tarvitse tarttua, mutta luottamukseen ja käytettävyyteen vaikuttavat saavat aina huomioni.",
        },
        {
          statement: "Pyydän palautetta heti alussa, en vasta lopussa.",
          detail: "Näytän mieluummin keskeneräisen version ajoissa kuin viimeistellyn liian myöhään, kun mitään ei enää voi muuttaa.",
        },
        {
          statement: "Ymmärrän sekä käyttäjän tarpeita että kehittäjän arkea.",
          detail:
            "Hyvän suunnittelun täytyy toimia sekä sen käyttäjälle että toteuttajalle. Yritän olla unohtamatta kumpaakaan.",
        },
      ],
    },
  },

  whatIDo: {
    heading: "Mitä teen",
    groups: [
      {
        title: "Käyttäjätutkimus ja arjen ymmärrys",
        body: "Tutkin ja haastattelen käyttäjiä, testaan käytettävyyttä sekä kartoitan asiakaspolkuja ja palvelukaavioita. Haluan ymmärtää, miten työ arjessa todella tehdään, ennen kuin linjataan, mitä lähdetään rakentamaan.",
      },
      {
        title: "UI/UX-suunnittelu- ja kehitystyö (Software Design Engineering)",
        body: "Suunnittelen käyttöliittymiä ja käyttäjäpolkuja sekä luon prosessikaavioita ja prototyyppejä. Koska osaan lukea ja muokata frontend-koodia, teen staattisten kuvien sijaan suoraan koodattuja prototyyppejä tai tuotantoon meneviä sivuja ja komponentteja.",
      },
      {
        title: "Design System ja DesignOps",
        body: "Rakennan Design Systemejä tokeneista komponentteihin niin, että kehittäjät voivat hyödyntää niitä suoraan. DesignOps pitää suunnittelun ja kehityksen samassa tahdissa: yhteiset työkalut, selkeä nimeäminen, dokumentaatio ja työtavat, joiden avulla tiimi toimittaa johdonmukaisesti.",
      },
      {
        title: "Tekoälyavusteinen muotoilu ja kehitys",
        body: "Hyödynnän tekoälytyökaluja protojen ja komponenttien rakentamisessa. En vain hyväksy tekoälyn tuotoksia sellaisenaan, vaan ohjaan sitä: määrittelen pelisäännöt ja tarkastan lopputuloksen kriittisesti. Esimerkiksi oma Design Systemini on syntynyt tällä tavoin.",
      },
      {
        title: "Fasilitointi ja yhteissuunnittelu",
        body: "Fasilitoin työpajoja, joissa käyttäjät, sidosryhmät ja kehittäjät pääsevät samaan pöytään: nykyisten kipupisteiden kartoituksesta tulevan yhteissuunnitteluun.",
      },
      {
        title: "Suunnittelu ja mittaaminen",
        body: "Autan tiimiä priorisoinnissa ja suunnittelussa. Varmistan mittareiden avulla, että tekeminen menee oikeaan suuntaan, ja uskon siihen, että keskeneräinenkin mutta käyttökelpoinen versio kannattaa viedä ihmisten eteen mahdollisimman aikaisin.",
      },
    ],
  },

  process: {
    headingLines: ["Jokainen projekti saa", "tarvitsemansa lähestymistavan."],
    intro:
      "Joskus se tarkoittaa viikkojen tutkimusta ennen kuin mitään piirretään. Joskus prototyyppi on jonkun käsissä jo samana iltapäivänä. Valitse projektityyppi, niin näet, miten kokonaisuus muuttuu.",
    kindQuestion: "Millainen projekti?",
    tablistLabel: "Projektityyppi",
    timelineHeading: "Tyypillinen aikajana",
    weekPrefix: "Vk",
    weekUnit: "vk",
    decimal: ",",
    emptyTitle: "Valitse vaihe, niin näet, miten työskentelen.",
    emptyBody: "Jokaisella vaiheella on syynsä, ja syynsä sille, miksi joskus jätän sen pois.",
    whenLabel: "Milloin käytän tätä",
    skipLabel: "Jätän tämän väliin, kun…",
    categories: {
      research: "Tutkimus",
      design: "Suunnittelu",
      code: "Koodi",
      testing: "Testaus",
      systems: "Järjestelmät",
      ship: "Julkaisu",
    },
    tabs: {
      zeroToOne: { label: "Uusi tuote (0→1)", duration: "~10 viikkoa" },
      prototype: { label: "Nopea prototyyppi", duration: "~2 viikkoa" },
      designSystem: { label: "Suunnittelujärjestelmä", duration: "~6 viikkoa" },
      redesign: { label: "Uudistus", duration: "~8 viikkoa" },
    },
    stages: {
      research: {
        name: "Tutkimus",
        block: "Tutkimus",
        when: "Kun työskentelen uudella alalla tai ongelma on hankala. Puhun oikeiden käyttäjien kanssa, katselen ympärilleni ja selvitän, mikä oikeasti kaipaa ratkaisua.",
        skip: "Ongelma on jo hyvin ymmärretty tai meidän on edettävä nopeasti ja opittava oikeasta julkaisusta.",
      },
      discovery: {
        name: "Kartoitus",
        block: "Kartoitus",
        when: "Keskustelen osallisten (sidosryhmien) kanssa, tutustun vastaaviin tuotteisiin (kilpailija-analyysi) ja selvitän, mitkä reunaehdot liiketoiminnalla on.",
        skip: "Kyseessä on pieni henkilökohtainen projekti tai reunaehdot ovat jo selvillä.",
      },
      flows: {
        name: "Käyttäjäpolut ja tietoarkkitehtuuri",
        block: "Polut & rakenne",
        when: "Suurille tuotteille, joissa on monta eri polkua. Piirrän koko matkan (käyttäjäpolut, tietoarkkitehtuuri) ennen kuin suunnittelen yhtään näkymää.",
        skip: "Kyseessä on yksinkertainen työkalu, jossa on käytännössä vain yksi tapa edetä.",
      },
      wireframes: {
        name: "Wireframet",
        block: "Wireframet",
        when: "Kun haluan testata, onko rakenne järkevä, ennen kuin teen siitä kauniin.",
        skip: "Suunta on jo selvä tai on nopeampaa vain rakentaa se.",
      },
      ui: {
        name: "UI-suunnittelu",
        block: "UI-suunnittelu",
        when: "Teen siitä oikean näköisen ja tuntuisen (komponentit, vuorovaikutus, visuaalinen viimeistely).",
        skip: "Teemme nopeita prototyyppejä, joilla halutaan oppia jotain nopeasti eikä tehdä siitä kaunista.",
      },
      testing: {
        name: "Käyttäjätestaus",
        block: "Käyttäjätestaus",
        when: "Ennen isoja päätöksiä tai julkaisuja. Katson, kuinka oikeat käyttäjät käyttävät sitä, ja kuuntelen, mitä he sanovat.",
        skip: "Kyseessä on pieni muutos, jonka vaikutuksen voi tarkistaa jälkikäteen luvuista.",
      },
      iterate: {
        name: "Iterointi",
        block: "Iterointi",
        when: "Jokaisen palautekierroksen jälkeen. Ensimmäinen versio ei ole koskaan lopullinen.",
        skip: "Ei koskaan. Tämä vaihe on aina mukana.",
      },
      handoff: {
        name: "Luovutus kehitykseen",
        block: "Luovutus",
        when: "Kirjaan ylös tarkasti, mitä pitää rakentaa, ja teen tiivistä yhteistyötä kehittäjien kanssa, jotta mikään ei katoa matkalla.",
        skip: "Rakennan sen itse tai työskentelen jo rinnakkain kehittäjän kanssa.",
      },
      ship: {
        name: "Julkaisu",
        block: "Julkaisu",
        when: "Julkaisen sen oikeille käyttäjille ja opin siitä, miten sitä todella käytetään.",
        skip: "Ei koskaan. Julkaisemalla selviää, toimiiko se.",
      },
      aiAssisted: {
        name: "Tekoälyavusteinen työ",
        block: "Tekoäly",
        when: "Käytän tekoälyä ideoiden luonnosteluun, koodin kirjoittamiseen tai vaihtoehtojen kokeilemiseen nopeammin.",
        skip: "Työ vaatii huolellista ajattelua ja aitoa ammattitaitoa, ei nopeutta.",
      },
      buildInCode: {
        name: "Rakentaminen koodilla",
        block: "Koodaus",
        when: "Kun rakentaminen on nopein tapa selvittää, toimiiko se, erityisesti asioissa, jotka käyttäjän täytyy päästä kokemaan ja kokeilemaan itse.",
        skip: "Emme vielä tiedä, mitä olemme rakentamassa.",
      },
      tokens: {
        name: "Tokenit ja järjestelmät",
        block: "Tokenit & järjestelmät",
        when: "Pystytän rakennuspalikat ja säännöt (komponentit ja design tokenit), joita koko tiimi voi käyttää uudelleen, sekä niihin kuuluvan dokumentaation.",
        skip: "Kyseessä on kertaluonteinen projekti, jonka ei tarvitse kasvaa eikä tulla uudelleen käytetyksi.",
      },
    },
  },

  contact: {
    headingLine1: "Mitä voisimme",
    headingLine2Before: "tehdä ",
    headingAccent: "paremmin?",
    lead: "Kerro, mitä olet rakentamassa, mikä on tiellä ja minne haluat päästä.",
    linkedin: "Ota yhteyttä LinkedInissä",
    statuses: ["Avoin työtarjouksille", "Avoin verkostoitumiselle", "Avoin ideoinnille"],
    statusWidth: "200px",
    statusSrOnly: "Avoin työtarjouksille, verkostoitumiselle ja ideoinnille",
  },

  footer: {
    credit: "Suunnitellut ja rakentanut Berit. Toteutettu Clauden ja Vercelin avulla.",
  },

  caseStudy: {
    backLink: "Takaisin töihin",
    breadcrumbEyebrow: "Asiakasprojekti",
    liveProject: "Katso toimiva projekti ↗",
    role: "Rooli:",
    focus: "Painopiste:",
    readingTime: "~{min} min lukuaika",
    startingPointEyebrow: "Toimeksianto",
    startingPoint: "Lähtötilanne",
    aboutProject: "Tietoa projektista",
    screensToc: "Esimerkkejä käyttöliittymänäkymistä",
    selectedScreens: "Valittuja näkymiä",
    screensNote: "Työpöytä ja mobiili, yksi alusta",
    screensHeading: "Esimerkkejä käyttöliittymänäkymistä",
    prevScreenshot: "Edellinen kuvakaappaus",
    nextScreenshot: "Seuraava kuvakaappaus",
    zoomIn: "Lähennä",
    zoomOut: "Loitonna",
    close: "Sulje ✕",
    impactEyebrow: "Tulokset",
    impact: "Vaikutus",
    startedEyebrow: "Tausta",
    started: "Näin kaikki alkoi",
    challengesEyebrow: "Vaikeat kohdat",
    challenges: "Haasteet ja ongelmanratkaisu",
    differentlyEyebrow: "Jälkiviisaana",
    differently: "Mitä tekisin toisin",
    otherEyebrow: "Lue lisää",
    other: "Muut asiakasprojektit",
    viewCaseStudy: "Lue asiakasprojekti →",
    backToMain: "Takaisin etusivulle",
    glance: { eyebrow: "Lyhyesti", heading: "Tiivistettynä", problem: "Ongelma", role: "Roolini", decisions: "Ratkaisu ja toteutus", outcome: "Lopputulos" },
    onThisPage: "Tällä sivulla",
    navigateTo: "Siirry kohtaan...",
    showMore: "Näytä lisää",
    showLess: "Näytä vähemmän",
  },

  blog: {
    eyebrow: "Blogi",
    heading: ["Ajatuksia suunnittelusta ja ", "muutoksesta"],
    intro:
      "Kirjoituksia UX-suunnittelusta, tuotesuunnittelusta ja tekoälyn tuomisesta organisaatioihin, tekemieni projektien pohjalta.",
    postsLabel: "Kirjoitukset",
    filterLabel: "Rajaa kirjoituksia aiheen mukaan",
    allPosts: "Kaikki kirjoitukset",
    countAll: "{count} kirjoitusta",
    countTopic: "{count} kirjoitusta aiheesta {topic}",
    noPosts: "Kirjoituksia ei vielä ole — palaa pian uudelleen.",
    topics: "Aiheet",
    readPost: "Lue kirjoitus →",
    seriesPart: "Osa {part}",
    seriesPartOf: "Osa {part}/{total}",
    readingTime: "~{min} min lukuaika",
    updated: "Päivitetty",
    series: "Sarja",
    youAreHere: "(olet tässä)",
    intro_toc: "Johdanto",
    keepReading: "Lue lisää",
    moreFromBlog: "Lisää blogista",
    backToAll: "Takaisin kaikkiin kirjoituksiin",
    share: "Jaa",
    opensNewTab: " (avautuu uuteen välilehteen)",
    copyLink: "Kopioi linkki",
    linkCopied: "Linkki kopioitu",
    copyFailed: "Kopiointi ei onnistunut — kopioi osoite selaimen osoiterivistä",
    more: "Lisää…",
    diagram: "Kaavio",
    ladderRung: "porras",
    okr: {
      objective: "Tavoite",
      objectiveQuestion: "Mihin olemme menossa?",
      measuredBy: "mitataan avaintuloksilla",
      keyResults: "Avaintulokset",
      keyResultsQuestion: "Mistä tiedämme päässeemme perille?",
      keyResultsHint: "Luku, jonka voi tarkistaa",
      achievedThrough: "saavutetaan toimenpiteillä",
      initiatives: "Toimenpiteet",
      initiativesQuestion: "Mitä teemme sen eteen?",
      initiativesHint: "Voivat muuttua matkan varrella",
    },
  },
};
