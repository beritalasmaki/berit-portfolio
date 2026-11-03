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
    contact: "Yhteys",
    openMenu: "Avaa valikko",
    closeMenu: "Sulje valikko",
  },

  hero: {
    photoAlt: "Berit Alasmäki",
    greeting: "Moi, olen Berit",
    title: "Senior UX- ja tuotesuunnittelija",
    headline: ["Kumppanisi", "vyyhtien", "selvittämiseen."],
    stats: [
      { value: "10+", label: "vuotta" },
      { value: "25+", label: "projektia" },
      { value: "10+", label: "asiakasta" },
    ],
    lead: "Autan tiimejä tekemään monimutkaisista tuotteista ja palveluista kokemuksia, joita on helpompi käyttää ja helpompi rakentaa.",
    primaryCta: "Ota yhteyttä",
    secondaryCta: "Katso työni",
    play: "Muuta kaaos selkeydeksi",
    replay: "Toista uudelleen",
    story: [
      "Jokainen projekti alkaa *vyyhdistä.*",
      "Ensin *kartoitan,* missä mennään.",
      "Sitten *suunnittelemme,* mitä tarvitaan: järjestelmä ja tavoite.",
      "Pystytämme *järjestelmät* ja sovimme, miten edistymistä mitataan.",
      "*Etenemme,* opimme ja mukaudumme matkan varrella.",
      "Ja saavutamme yhdessä *tavoitteen.*",
    ],
  },

  clients: {
    eyebrowNumber: "01 / ",
    heading: "Kokemusta tunnetuista organisaatioista",
  },

  mindTabs: {
    eyebrow: "02 / seuraava siirtosi",
    heading: "Kysymykset ansioluettelon takana",
    aside: "Hyvä yhteistyö alkaa paremmasta kysymyksestä.",
    tablistLabel: "Kysymykset",
    tabs: [
      {
        question: "Pitääkö hän yhteistyötaitonsa ajan tasalla?",
        body: "Yhteistyö kehittäjien kanssa on muuttunut muutamassa vuodessa, ja mukaudun muutokseen jatkuvasti. En luovuta valmista suunnitelmaa ja katoa, vaan pysyn mukana keskustelussa koko toteutuksen ajan. Rakennan myös itse toimivia prototyyppejä esimerkiksi Claude Designilla ja VS Codella, jotta kehittäjät näkevät toimivia komponentteja jo varhain eivätkä vain staattisia kuvia, joita pitäisi tulkita.",
        highlight:
          "Valtakunnallisessa koulutusalustahankkeessa, jossa oli mukana useita kuntia ja toimittajia, vedin tiimin päivittäiset palaverit ja suunnittelin työpajaprosessin, jonka avulla tiimi eteni tutkimuksesta konkreettisiin konsepteihin.",
        linkLabel: "Lue tapaustutkimus: valtakunnallinen koulutusalusta →",
        study: "education-platform",
      },
      {
        question: "Miten hän lähestyy monimutkaisia ongelmia?",
        body: "Kartoitan ongelman, rakennan varhaisia konsepteja ja mukaudun nopeasti sen sijaan, että yrittäisin suunnitella jokaisen yksityiskohdan etukäteen.",
        highlight:
          "Vanhojen ympäristödatajärjestelmien uudistaminen tarkoitti työtä välineillä, joita tutkijat olivat käyttäneet vuosia ilman selkeää rakennetta. Sen sijaan, että olisin odottanut täydellistä ratkaisua, keskityin julkaisemaan nopeasti jotain hyödyllistä ja parantamaan sitä sen mukaan, mitä opimme.",
        linkLabel: "Lue tapaustutkimus: ympäristödatajärjestelmät →",
        study: "environmental-data-tool",
      },
      {
        question: "Kestääkö hänen työnsä, kun kehittäjät alkavat rakentaa sitä?",
        body: "Ennen kuin luovutan suunnitelman eteenpäin, käyn sen läpi kehittäjien kanssa ja kerron jokaisen ratkaisun perustelut, en pelkästään sitä, mitä pitää rakentaa.",
        highlight:
          "Siirsin suunnittelujärjestelmän Sketchistä Figmaan kesken käynnissä olevan projektin ja rakensin komponentit kunnolla uudelleen sen sijaan, että olisin kopioinut ne sellaisinaan. Sekä kehittäjät että projektipäällikkö kertoivat, kuinka paljon sujuvammaksi heidän työnsä tämän ansiosta muuttui.",
        linkLabel: "Lue tapaustutkimus: teollisuuden data →",
        study: "industrial-tool",
      },
      {
        question: "Mistä hän tietää, että jokin on valmis julkaistavaksi?",
        body: "Julkaisen mieluummin jotain, opin todellisesta palautteesta ja parannan sitä sen sijaan, että viilaisin liian pitkään ensimmäistä versiota, jota kukaan ei ole vielä testannut.",
        highlight:
          "Yliopiston digitaalinen portaali julkaistiin ensimmäisenä versiona ja kehittyi sen jälkeen jatkuvasti todellisen käytön perusteella.",
        linkLabel: "Lue tapaustutkimus: yliopiston digitaalinen perehdytys →",
        study: "university-ai-tool",
      },
    ],
  },

  caseStudies: {
    eyebrow: "03 / valitut työt",
    heading: "Tarkempi katsaus töihin.",
    projectOne: "projekti",
    projectMany: "projektia",
  },

  about: {
    eyebrow: "04 / minusta",
    heading: "Minusta",
    aside: "Ihminen pikselien takana.",
    closing: "Sovimme yhdessä, miltä onnistuminen näyttää, ennen kuin työ alkaa.",
    greeting: "Hei, kiva kun tulit käymään! ♥",
    photoAlt: "Berit Alasmäki",
    paragraphs: [
      "Kasvoin pienessä kaupungissa Suomessa enkä koskaan kuvitellut päätyväni teknologia-alalle, saati suunnittelijaksi. Opiskelin tietotekniikkaa ja web-kehitystä, mutta varsinainen alkuni suunnittelussa oli lähes sattumaa: ystäväni otti minut mukaan startup-yritykseensä jo lukioaikana, ja siellä pääsin ensimmäistä kertaa käytännössä tekemään töitä sekä suunnittelutyökaluilla että koodilla. Molemmat ovat kiinnostaneet minua siitä lähtien.",
      "Kymmenen vuotta suunnittelun parissa, yhdeksän niistä konsulttina, on opettanut minut liikkumaan hyvin erilaisten maailmojen välillä: julkisen sektorin alustoissa, teollisuuden työkaluissa ja ympäristödatajärjestelmissä, usein ainoana suunnittelijana pöydässä. UX-suunnittelijana olen työskennellyt yli 25 projektissa, ja jokainen niistä on muokannut tapaani tehdä töitä. Tällainen työ pakottaa välittämään ammattitaidostaan, koska kukaan muu ei välttämättä ehdi huomata sitä, mitä itse jättää huomaamatta.",
      "Arvostan laadukasta työtä, selkeää fokusta ja toimivaa yhteistyötä. Sen sijaan, että murehtisin sitä, miten tekoäly muuttaa suunnittelua, suhtaudun asiaan käytännönläheisesti: käytän työkaluja, joissa on järkeä, kehitän työtapojani jatkuvasti ja rakennan edelleen toimivia tuotekokemuksia.",
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
          statement: "Sanon vastaan, kunnioittavasti.",
          detail:
            "Jos jokin ei toimi käyttäjille tai kehittäjille, sanon sen ajoissa. Perustelen aina syyn enkä vain kerro mielipidettäni.",
        },
        {
          statement: "Keitän kahvit ja tuon naposteltavaa.",
          detail: "Hyvä työ syntyy hyvässä mielentilassa. Pidän ilmapiirin kevyenä silloinkin, kun kiire on kovimmillaan.",
        },
        {
          statement: "Huomaan ne yksityiskohdat, joilla on merkitystä.",
          detail:
            "Kaikkiin yksityiskohtiin ei tarvitse tarttua, mutta luottamukseen ja käytettävyyteen vaikuttavat saavat aina huomioni.",
        },
        {
          statement: "Pyydän palautetta jo alussa, en vasta lopussa.",
          detail: "Näytän mieluummin keskeneräisen version ajoissa kuin viimeistellyn liian myöhään, kun mitään ei enää voi muuttaa.",
        },
        {
          statement: "Puolustan sekä käyttäjää että kehittäjää, joka sen rakentaa.",
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
        title: "Tutkimus ja ymmärrys",
        body: "Käyttäjätutkimukset ja haastattelut, käytettävyystestaus, asiakaspolkujen kartoitus ja palvelukaaviot (service blueprint). Selvitän, miten työ oikeasti tehdään, ennen kuin päätän, mitä rakennetaan.",
      },
      {
        title: "Suunnittelu ja toteutus",
        body: "Käyttäjäpolut ja käyttöliittymäsuunnittelu, prosessikaaviot sekä suunnittelujärjestelmät design tokeneista komponentteihin. Luen ja muokkaan frontend-koodia ja rakennan toimivia komponentteja pelkkien staattisten näkymien sijaan.",
      },
      {
        title: "Työskentely tekoälytyökalujen kanssa",
        body: "Rakennan prototyyppejä ja oikeita komponentteja tekoälytyökaluilla, ja osaan ohjata tekoälyagenttia sen sijaan, että hyväksyisin sen tuotokset sellaisinaan: kirjoitan säännöt, joiden mukaan se työskentelee, ja tarkastan lopputuloksen. Rakensin oman suunnittelujärjestelmäni näin.",
      },
      {
        title: "Työn vetäminen",
        body: "Yhteissuunnittelun työpajat ja fasilitointi, mittarit, joiden avulla nähdään, onnistuiko suunnittelu, tuotteen omistajan tukeminen suunnittelussa ja priorisoinnissa sekä kevyt tapa saada jotain käyttökelpoista ihmisten eteen jo varhain.",
      },
    ],
  },

  process: {
    eyebrow: "05 / prosessini",
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
        name: "Rautalankamallit",
        block: "Rautalanka",
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
    breadcrumbEyebrow: "Tapaustutkimus",
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
    other: "Muut tapaustutkimukset",
    viewCaseStudy: "Lue tapaustutkimus →",
    backToMain: "Takaisin etusivulle",
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
