import { alertShots as enAlertShots, calcShots as enCalcShots, industrialTool as en } from "../industrial-tool";
import type { CaseStudy, GalleryImage } from "../types";
import { localizeGallery } from "./helpers";

const gallery = localizeGallery(en.gallery, [
    { alt: "Dashboard", caption: "Dashboard" },
    { alt: "Dashboardin muokkaus", caption: "Dashboardin muokkaus" },
    { alt: "Widget-valikko", caption: "Widget-valikko" },
    { alt: "Säiliön tiedot", caption: "Säiliön tiedot" },
    { alt: "Datapisteet", caption: "Datapisteet" },
    { alt: "Mobiililista", caption: "Mobiililista" },
    { alt: "Mobiilinavigaatio", caption: "Mobiilinavigaatio" },
  ]);

function screen(file: string): GalleryImage {
  const image = gallery.find((g) => g.src === `/case/${file}`);
  if (!image) throw new Error(`industrial-tool (fi): no gallery image ${file}`);
  return image;
}

const calcShots = localizeGallery(enCalcShots, [
  { alt: "Laskentamodaalin vaihe 1: tehtaan, prosessialueen, annostelulaitteen ja laskentatyypin valinta", caption: "Rekonstruktio · 1 Kohde" },
  { alt: "Vaihe 2: aikavälin valinta ja datapisteiden valinta haettavasta taulukosta, jossa on 312 datapistettä", caption: "Rekonstruktio · 2 Data" },
  { alt: "Vaihe 3: datasta täytetyt lähtöarvot, joista jokaisessa lukee, mistä arvo tuli", caption: "Rekonstruktio · 3 Lähtöarvot" },
  { alt: "Vaihe 4: valmiin kaavan valinta tai oman, taulukkolaskennan tapaisen kaavan kirjoittaminen", caption: "Rekonstruktio · 4 Kaava" },
  { alt: "Vaihe 5: tulokset, suositeltu annostus, yhteenveto lähtötiedoista ja tallennus raporttiin", caption: "Rekonstruktio · 5 Tulokset" },
]);

const alertShots = localizeGallery(enAlertShots, [
  {
    alt: "Hälytysjärjestelmän tilanäkymä: neljän tunnin riskiennuste, suositellut toimenpiteet, värikoodatut kemialliset tilat tekstimerkintöineen ja annostelun trendit",
    caption: "Rekonstruktio · Tilanäkymä",
  },
  {
    alt: "Hälytysasetukset: aktiivinen hälytys ja kuittauspainike, varoitus- ja hälytysrajat sekä vastaanottajat kanavittain (sähköposti, tehtaan tabletti, sovellus)",
    caption: "Rekonstruktio · Hälytysasetukset",
  },
]);

export const industrialToolFi: CaseStudy = {
  slug: "industrial-tool",
  title: "Teollisuuden data ja asiantuntijakäyttöliittymien suunnittelu",
  label: "TEOLLISUUDEN DATATYÖKALUT · 2021–2023",
  headline: "Monimutkainen teollisuusdata selkeäksi kahdeksalle käyttäjäryhmälle",
  description:
    "Uudistin kansainvälisen kemianteollisuuden yrityksen data-alustan käyttökokemusta vuosina 2021–2023 alustan ainoana suunnittelijana. Alustalla seurataan asiakkaiden tehtaiden kemikaalisäiliöitä ja laitteita, lasketaan kemikaalien annostelua ja kulutusta ja tehdään raportteja.",
  thumbnail: "/case/kemira-card.png",
  thumbnailAlt: "Teollisuuden data-alustan dashboard",
  projectCount: "2",
  industry: "Teollisuus",
  ctaLabel: "Tutustu koko asiakasprojektiin",
  otherCaseStudyDescription:
    "Rakensin käytännönläheisiä asiantuntijatyökaluja teollisuuden datatyönkulkuihin, jotta monimutkaiset laskennat ja seuranta olisivat asiantuntijoille luotettavampia.",

  intro: [
    "Teollisuuden seuranta- ja raportointialustasta oli vuosien mittaan tullut monimutkainen. Asiantuntijat kahlasivat pitkiä tekstilistoja ja tekivät laskelmia käsin. Tulin mukaan projektin ainoaksi suunnittelijaksi edellisen suunnittelijan jälkeen, ja tavoitteena oli saada työkalu toimimaan niin kuin asiantuntijat oikeasti tarvitsivat.",
  ],
  glance: {
    problem:
      "Teollisuuden asiantuntijoiden seuranta- ja raportointialustasta oli tullut hankala käyttää: pitkiä tekstilistoja, käsin tehtyjä laskelmia, unohtuneiden tallennusten takia katoavaa työtä ja vanhaan työkaluun jumittunut komponenttikirjasto.",
    role:
      "Alustan ainoa UX-suunnittelija vuosina 2021–2023. Jatkoin edellisen suunnittelijan työtä ja vastasin koko kokonaisuudesta.",
    decisionsLabel: "Ratkaisut ja kädenjälki",
    outcomeLabel: "Lopputulos ja vaikutus",
    decisions: [
      "**Tiedon hahmotettavuus:** Tiivistin monimutkaisen datan ja pitkät listat selkeiksi visuaalisiksi kokonaisuuksiksi, jotta olennainen tieto löytyy yhdellä silmäyksellä.",
      "**Käyttöprosessien selkeyttäminen:** Pilkoin raskaat ja monivaiheiset tehtävät ohjatuiksi, steppi stepiltä eteneviksi kokonaisuuksiksi (wizard).",
      "**Käyttökokemuksen varmuus:** Paransin työn jatkuvuutta ja vähensin käyttäjän kuormitusta tuomalla näkymiin automaattisen tallennuksen.",
      "**Design Systemin uudistus:** Siirsin Design Systemin Sketchistä Figmaan ja rakensin komponentit samalla skaalautuvasti uudelleen.",
    ],
    outcome:
      "Asiantuntijat hahmottivat tarvitsemansa datan nopeasti, ja monimutkaisten laskentojen tekeminen muuttui varmaksi ja helppokäyttöiseksi koko tiimille. Automaattisen tallennuksen ansiosta työvaiheita ei enää menetetty.\n\nSuunnittelijoiden ja kehittäjien siirtyminen yhteiseen työkaluun selkeytti yhteistyötä, ja sekä kehitystiimi että projektipäällikkö kertoivat päivittäisen työn sujuvoituneen huomattavasti.",
  },
  roleLabel: "UX-suunnittelija (projektin ainoa suunnittelija)",
  focusLabel: "Asiantuntijatyökalut, datan visualisointi ja Design Systemin uudistaminen",
  categoryTag: "Teollisuusalusta",
  skillTags: [
    {
      label: "UX- ja käyttöliittymäsuunnittelu",
      description: "Muutin tiheän datan helposti silmäiltäviksi dashboardeiksi",
    },
    {
      label: "Design Systemin siirto",
      description: "Rakensin komponenttikirjaston uudelleen Sketchistä Figmaan",
    },
    {
      label: "Datan visualisointi",
      description: "Suunnittelin monivaiheiset laskentapolut asiantuntijoiden työhön",
    },
    {
      label: "Sidosryhmätutkimus",
      description: "Haastattelin asiantuntijoita ja tehdastyöntekijöitä eri aikavyöhykkeillä",
    },
    {
      label: "Luotettavuuden parantaminen",
      description: "Ratkaisin datan katoamisen ongelmat etätehtailla ja aikakriittisessä työssä",
    },
    {
      label: "Kokonaisvastuu",
      description: "Alustan ainoa UX-suunnittelija, koko kokonaisuus oli minun vastuullani",
    },
  ],

  gallery,
  sneakPeekImages: en.sneakPeekImages,

  impactIntro:
    "Uusien ominaisuuksien julkaisun jälkeen kävimme systemaattisesti läpi palautetta ja testasimme niitä oikeiden käyttäjien kanssa. Tämän jatkuvan kierron ansiosta näimme, mikä toimi arjessa, missä oli parannettavaa ja miten tuotetta kannatti kehittää todellisten tarpeiden mukaan.",
  impactCards: [
    {
      number: "01",
      title: "Data selkeänä yhdellä silmäyksellä",
      body: "Kun dashboardin datapaneelit muutettiin visuaalisiksi korteiksi, asiantuntijoiden ei enää tarvinnut kahlata pitkiä tekstilistoja löytääkseen tarvitsemansa. Tieto, jonka hahmottaminen vaati ennen selaamista ja tulkintaa, ymmärrettiin nyt sekunneissa, mikä nopeutti suoraan päivittäistä seuranta- ja raportointityötä.",
    },
    {
      number: "02",
      title: "Monimutkaiset laskennat ilman arvailua",
      body: "Aiemmin monimutkaisen laskennan ajaminen vaati syvää asiantuntemusta ja huolellista käsityötä. Uusi laskentaikkuna vei asiantuntijat läpi prosessin vaihe vaiheelta. Virheiden riski pieneni, ja laskentoja pystyi ajamaan varmoin mielin useampi tiimiläinen, ei vain kokeneimmat.",
    },
    {
      number: "03",
      title: "Vähemmän menetettyä työtä, enemmän luottamusta työkaluun",
      body: "Automaattinen tallennus data- ja raporttinäkymiin poisti arkisen ja todella ärsyttävän ongelman: työ ei enää kadonnut unohtuneen tallennuksen tai katkenneen yhteyden takia. Sillä oli iso merkitys käyttäjille, jotka työskentelivät aikakriittisen datan parissa etätehtailta.",
    },
    {
      number: "04",
      title: "Perusta, jonka päälle koko tiimi pystyi rakentamaan",
      body: "Design Systemin siirto Sketchistä Figmaan ei vain uudistanut työkalua, vaan toi kehittäjät ja suunnittelijat vihdoin samaan ympäristöön. Suunnitelmien luovutus nopeutui ja edestakainen viestittely väheni, kun kahden irrallisen suunnittelutyökalun välillä ei enää tarvinnut tulkita ja muuntaa suunnitelmia. Sain suoraa ja myönteistä palautetta sekä kehittäjiltä että projektipäälliköltä, jotka kertoivat työn sujuvoituneen selvästi.",
    },
  ],

  howItStarted: [
    "Hyppäsin mukaan käynnissä olevaan projektiin ja jatkoin edellisen suunnittelijan työtä. Aloitin käyttöliittymän visuaalisista parannuksista: muutin esimerkiksi dashboardin pienet paneelit tekstilistoista visuaalisiksi korteiksi, jolloin ne hahmotti yhdellä silmäyksellä. Sen jälkeen suunnittelimme data- ja raporttinäkymiin automaattisen tallennuksen ja paransimme raporttien rakennetta ja sisältöä.",
  ],

  challenges: [
    {
      number: "01",
      title: "Monimutkaisten asiantuntijatyönkulkujen suunnittelu",
      body: "Yksi jatkuva haaste oli selkeyttää monimutkaisia työprosesseja asiantuntijakäyttäjille. Suunnittelin laskentaikkunan, joka pilkkoo monimutkaisen laskennan vaiheisiin, jolloin asiantuntijat pystyivät ajamaan sen paljon yksinkertaisemmalla käyttöliittymällä. Ratkaisevaa oli, etten yrittänyt selvittää tätä yksin. Työskentelin tiiviisti työkalua päivittäin käyttävien asiantuntijoiden ja tehdastyöntekijöiden kanssa ja suunnittelimme ratkaisut yhdessä sen sijaan, että olisin arvaillut heidän tarpeitaan.",
    },
    {
      number: "02",
      title: "Tutkimusta eri aikavyöhykkeillä",
      body: "Iso osa haasteesta oli pelkkää logistiikkaa. Sidosryhmähaastatteluihin osallistui usein ihmisiä Yhdysvalloista, joten jouduin sovittamaan aikatauluni suuriin aikaeroihin ja joustamaan. Luottamuksen rakentaminen ja ihmisten mukaan saaminen kävi paljon helpommin, kun keskusteluissa oli mukana projektipäällikkö, jolla oli jo hyvät suhteet näihin sidosryhmiin.",
    },
    {
      number: "03",
      title: "Design Systemin uudistaminen",
      body: "Alkuperäinen Design System oli Sketchissä, vanhemmassa työkalussa, joka hankaloitti yhteistyötä muun tiimin kanssa. Päivittäisen suunnittelutyön ohella otin vastuulleni kirjaston siirtämisen Figmaan. Siivosin ja rakensin komponentit uudelleen sen sijaan, että olisin vain kopioinut ne sellaisinaan, jotta tiimille jäi käyttökelpoisempi ja helpommin ylläpidettävä perusta, jonka päälle oli hyvä rakentaa jatkossa.",
    },
  ],

  whatIWouldDoDifferently: [
    "Jälkikäteen lähestyisin projektin teknistä puolta nykyään toisin. Staattisten mallien luovuttamisen sijaan rakentaisin toimivia prototyyppejä suoraan tekoälytyökaluilla, kuten Claude Designilla, ja kuroisin suunnittelun ja toteutuksen välisen kuilun umpeen paljon nopeammin. Rakentaisin Design Systemin alusta asti myös koodin näkökulmasta, tekisin tiivistä yhteistyötä kehittäjien kanssa ja rakentaisin sitä Claude Codella. Näin siitä ei tulisi vain hyvin järjestetty komponenttikirjasto Figmassa, vaan jotain, mitä kehittäjät voisivat hyödyntää suoraan.",
    "Tiimi toimi koko projektin ajan hyvin yhteen, eikä tiimin koko tai kokoonpano ollut mielestäni koskaan varsinainen ongelma. Oppimista on pikemminkin siinä, miten hyödyntäisin nykypäivän työkaluja ja työtapoja kaventaakseni suunnittelun ja kehityksen välistä kuilua aiemmin ja tehokkaammin.",
  ],

  story: {
    facts: [
      { label: "Rooli", value: ["UX-suunnittelija", "Alustan ainoa suunnittelija"] },
      { label: "Aikajänne", value: ["2021–2023"] },
      {
        label: "Tiimi",
        value: ["Projektipäällikkö ja scrum master", "Kaksi frontend- ja kaksi backend-kehittäjää", "Minä ainoana suunnittelijana"],
      },
      {
        label: "Menetelmät",
        value: ["Yhteissuunnittelu asiantuntijoiden kanssa", "Sidosryhmähaastattelut", "Käytettävyystestaus", "Esitutkimus"],
      },
      {
        label: "Mitä tein",
        wide: true,
        value: [
          "Jatkoin edellisen suunnittelijan työtä ja vastasin koko alustan käyttökokemuksesta",
          "Haastattelin käyttäjiä Euroopassa ja Pohjois-Amerikassa",
          "Suunnittelin laskentatyökalun yhdessä laskenta-asiantuntijan kanssa",
          "Suunnittelin automaattisen tallennuksen data- ja raporttinäkymiin",
          "Suunnittelin hälytysjärjestelmän säiliöiden ja virhetilanteiden seurantaan",
          "Siirsin Design Systemin UI kitin Sketchistä Figmaan ja rakensin komponentit uudelleen",
        ],
      },
    ],
    heroImage: {
      ...en.story!.heroImage,
      alt: "Alustan dashboard, jossa on KPI-, trendi-, mittari- ja kaaviowidgettejä",
    },
    tldr: [
      "Kansainvälisen kemianteollisuuden yrityksen data-alustalla on **yli kahdeksan käyttäjäryhmää** tehtaiden prosessinhoitajista myyjiin ja data-analyytikoihin, ja jokainen tarvitsee siitä eri asioita. Olin alustan ainoa suunnittelija vuosina 2021–2023.",
      "Asiantuntijat tekivät vaativia laskelmia Excelissä. Suunnittelin niistä yhdessä asiantuntijan kanssa **viisivaiheisen laskentatyökalun**, jossa omaa kaavaa voi käyttää silloin, kun vakiovaiheet eivät riitä. Automaattinen tallennus lopetti työn katoamisen, hälytysjärjestelmä varoittaa, kun säiliö on täyttymässä tai laitteessa on vika, ja UI kitin siirto Figmaan toi suunnittelijat ja kehittäjät samaan työkaluun.",
    ],
    background: {
      heading: "Etädataa asiakkaiden tehtailta",
      paragraphs: [
        "Yritys toimittaa kemikaaleja teollisuudelle ja vedenpuhdistamoille. Asiakkaiden tehtailla on yrityksen kemikaalisäiliöitä ja annostelulaitteita, joiden dataa seurataan etänä.",
        "Ennen alustaa data oli monessa erillisessä tietokannassa. Alusta koottiin, jotta datan voi kerätä, katsoa ja analysoida yhdessä paikassa. Asiakkaat seuraavat sillä omia prosessejaan, ja yrityksen asiantuntijat auttavat heitä analyysissä ja vianselvityksessä. Myynti käyttää dataa palvelujen myynnin tukena.",
        "Tulin mukaan käynnissä olevaan projektiin vuonna 2021 edellisen suunnittelijan jälkeen. Olin alustan ainoa suunnittelija, joten vastasin koko käyttökokemuksesta.",
      ],
      listLabel: "Käyttäjät",
      list: [
        "Tehtaiden prosessinhoitajat, jotka seuraavat säiliöitä ja laitteita arjessa",
        "Kenttähuollon asiantuntijat, jotka kiertävät tehtailla ja varmistavat laitteiden toiminnan",
        "Tuotantopäälliköt ja tehtaanjohtajat",
        "Laskenta-asiantuntijat ja data-analyytikot, jotka arvioivat dataa ja tekevät sen pohjalta suunnitelmia ja tilauksia",
        "Myyjät, jotka esittelevät ja myyvät alustaa asiakkaille",
        "Tehtaiden ostajat, jotka tilaavat kemikaaleja lisää",
      ],
    },
    problem: {
      heading: "Yksi alusta, hyvin erilaiset käyttäjät",
      statement: "Monimutkaisen datan piti palvella hyvin erilaisia käyttäjiä tehtaan prosessinhoitajasta data-analyytikkoon.",
      paragraphs: [
        "Alusta oli kasvanut vuosien mittaan. Dashboardin paneelit olivat pitkiä tekstilistoja, laskelmat tehtiin Excelissä käsin, ja työ katosi, jos tallennus unohtui tai yhteys katkesi.",
      ],
      constraints: [
        "Käyttäjät olivat eri maissa ja aikavyöhykkeillä, ja osa työskenteli etänä tehtailla.",
        "Laskennat vaativat syvää asiantuntemusta, eikä kaikkea voinut vakioida.",
        "Data oli aikakriittistä, joten virheet ja kadonnut työ maksoivat.",
        "Design System oli Sketchissä, mikä hankaloitti yhteistyötä kehittäjien kanssa.",
      ],
    },
    process: {
      heading: "Jatkuvaa kehitystä asiantuntijoiden kanssa",
      steps: [
        {
          title: "Haastattelut: mitä eri käyttäjät tarvitsevat",
          paragraphs: [
            "Haastattelin kolmea asiakasta, paria kenttähuollon asiantuntijaa, jotka kävivät tarkistamassa laitteita asiakkaiden tehtailla, sekä myyjiä. Myyjät tekivät asiakkaiden kulutuksen pohjalta raportteja ja tarjosivat niiden avulla kustannustehokkaampia ratkaisuja.",
            "Selvitin kahta asiaa. Ensin dashboardia eli sitä, mitä asiantuntijat siltä tarvitsevat ja miten he sitä käyttävät. Sitten raportointia eli sitä, miten raportteja rakennetaan ja mihin niitä käytetään. Myyjä, asiantuntija ja tehtaan ostaja etsivät samasta raportista eri asioita, joten selvitin, mikä on tärkeää kullekin.",
            "Oli koronan aika, joten haastattelut tehtiin etänä. Haastateltavat olivat Euroopassa ja Yhdysvalloissa, joten sovitin aikatauluni suuriin aikaeroihin. Mukana oli projektipäällikkö, jolla oli jo hyvät suhteet asiakkaisiin, mikä helpotti luottamuksen rakentamista. Tiimin kanssa tapasimme muutaman kerran yrityksen toimistolla tiimipäivissä.",
            "**Mitä haastatteluista nousi esiin:** työ katosi, jos tallennus unohtui tai yhteys katkesi, ja widgettejä oli vaikea selata ja vertailla ennen kuin ne lisättiin dashboardille. Nämä havainnot ohjasivat dashboardin ja automaattisen tallennuksen suunnittelua.",
          ],
        },
        {
          title: "Selkeämpi dashboard",
          paragraphs: [
            "Aloitin näkymistä, joissa ongelma oli selvin. Muutin dashboardin paneelit tekstilistoista visuaalisiksi korteiksi, jolloin tilanteen näkee yhdellä silmäyksellä.",
            "Suunnittelin myös uudelleen sen, miten widgettejä lisätään. Ne näkyvät esikatseluina, joten jokaisen ulkoasun näkee ennen kuin sen raahaa dashboardille.",
          ],
          figures: [screen("kem-dash-menu.png")],
        },
        {
          title: "Laskentatyökalu yhdessä asiantuntijan kanssa",
          paragraphs: [
            "Laskenta-asiantuntija teki kemikaalien annostelun ja kulutuksen laskelmia Excelissä. Hän toivoi työkalua, joka jakaa laskennan selkeisiin vaiheisiin. Lopputuloksena oli viisivaiheinen laskentatyökalu, joka avautuu modaaliin Tee laskelma -painikkeesta.",
            "Suunnittelimme työkalun yhdessä. Kävimme läpi laskennan vaiheet ja mietimme, missä järjestyksessä tietoja tarvitaan. Viimeistelin suunnitelmat itsenäisesti ja näytin ne asiantuntijalle ennen kehitystä.",
            "Kaikkea ei voinut vakioida. Siksi työkaluun tuli mahdollisuus kirjoittaa oma kaava silloin, kun vakiovaiheet eivät riitä. Näin työkalu ohjaa tavallisissa tapauksissa mutta ei estä asiantuntijaa poikkeustilanteissa.",
            "Työkalusta ei ole jäljellä kuvakaappauksia, joten kuvat ovat rekonstruktio. Vaiheet vastaavat alkuperäistä, yksityiskohdat voivat poiketa.",
          ],
          flowLabel: "Miten laskentatyökalu suunniteltiin",
          flow: ["Asiantuntijan Excel-laskenta", "Yhteissuunnittelu", "Viimeistely", "Tarkistus asiantuntijan kanssa", "Kehitykseen"],
          figures: [
            [calcShots[0], calcShots[1], calcShots[2]],
            [calcShots[3], calcShots[4]],
          ],
        },
        {
          title: "Automaattinen tallennus",
          paragraphs: [
            "Haastatteluissa selvisi, että data- ja raporttinäkymissä työ katosi, jos käyttäjä unohti tallentaa tai yhteys katkesi. Se oli erityisen hankalaa etänä tehtailla työskenteleville. Suunnittelin näkymiin automaattisen tallennuksen, jonka tila näkyy aina, ja paransin samalla raporttien rakennetta ja sisältöä.",
          ],
          figures: [screen("kem-dash-edit.png")],
        },
        {
          title: "Hälytysjärjestelmä sivuprojektina",
          paragraphs: [
            "Erillisellä budjetilla suunnittelin hälytysjärjestelmän. Se oli oma web-sovelluksensa eikä osa pääalustaa, ja sitä käytettiin myös tehtaiden tableteilla. Järjestelmä seuraa prosessin kemiallista tilaa ja varoittaa, kun säiliö on täyttymässä tai jokin muu menee vikaan.",
            "Tilanäkymässä näkyvät neljän tunnin riskiennuste, suositellut toimenpiteet ja prosessin eri osien tila. Jokaisella tilalla on värin lisäksi tekstimerkintä, joten tieto ei ole pelkän värin varassa.",
            "Käyttäjä asettaa hälytysrajat, valitsee vastaanottajat ja kuittaa hälytykset. Hälytys tulee sähköpostiin, tehtaan tabletille ja sovellukseen, jotta se tavoittaa sekä tehtaan prosessinhoitajan että kenttähuollon.",
            "Alkuperäisestä ei ole jäljellä kuvakaappauksia, joten kuvat ovat rekonstruktio yhden säilyneen kuvan pohjalta. Tuotenimet on poistettu.",
          ],
          figures: [alertShots[0], alertShots[1]],
        },
        {
          title: "Design System Figmaan",
          paragraphs: [
            "Design System oli Sketchissä, mikä hankaloitti yhteistyötä kehittäjien kanssa. Päivittäisen suunnittelutyön ohessa siirsin kirjaston Figmaan. Siivosin ja rakensin komponentit uudelleen sen sijaan, että olisin kopioinut ne sellaisinaan.",
          ],
        },
      ],
    },
    shipped: {
      heading: "Valmis alusta",
      paragraphs: ["Kaikki casessa esitellyt näkymät julkaistiin. Alusta toimii myös mobiililaitteilla."],
      figures: [screen("kem-datapoints.png"), screen("kem-mob-a2.png"), screen("kem-mob-b.png")],
    },
    impact: {
      heading: "Vähemmän käsityötä, enemmän luottamusta työkaluun",
      intro: [
        "Julkaisujen jälkeen kävimme palautetta läpi ja testasimme ominaisuuksia käyttäjien kanssa. Tarkkoja mittareita ei kerätty, joten vaikutus perustuu käyttäjiltä ja tiimiltä saatuun palautteeseen.",
        "Asiantuntijoiden ei enää tarvinnut lukea pitkiä tekstilistoja löytääkseen tarvitsemansa. Laskentoja pystyi ajamaan useampi tiimiläinen, ei vain kokeneimmat. Työ ei enää kadonnut unohtuneen tallennuksen tai katkenneen yhteyden takia.",
        "Kehittäjät ja projektipäällikkö kertoivat, että työ sujui selvästi paremmin, kun suunnittelu ja kehitys toimivat samassa työkalussa.",
        "Yrityksen tavoite oli koota erilliset tietokannat yhdeksi alustaksi ja käyttää dataa palvelujen myynnin tukena. Selkeämpi alusta palvelee molempia. Myyjät voivat näyttää asiakkaalle datan ymmärrettävässä muodossa, ja asiantuntijat käyttävät vähemmän aikaa käsin laskemiseen.",
      ],
      highlights: [
        { value: "8+", label: "käyttäjäryhmää tehtaiden prosessinhoitajista myyjiin ja data-analyytikoihin" },
        { value: "5", label: "vaihetta laskentatyökalussa, joka korvasi Excelin" },
        { value: "1", label: "suunnittelija koko alustalle" },
      ],
    },
    reflections: {
      heading: "Mitä tekisin toisin",
      items: [
        {
          title: "Mittarit alusta asti",
          body: "Mittaisin esimerkiksi laskentaan kuluvaa aikaa, laskentavirheitä ja kadonneeseen työhön liittyviä tukipyyntöjä ennen muutoksia ja niiden jälkeen. Silloin vaikutuksen voisi näyttää lukuina eikä vain palautteena.",
        },
        {
          title: "Prosessin dokumentointi",
          body: "Minulla ei ole tästä projektista luonnoksia, työpajakuvia eikä kuvia vanhoista näkymistä. Nykyään tallentaisin ne alusta asti, koska ne näyttävät, miten ratkaisuihin päädyttiin.",
        },
        {
          title: "Toimivat prototyypit",
          body: "Staattisten kuvien sijaan rakentaisin toimivia prototyyppejä tekoälytyökaluilla. Asiantuntija pääsisi kokeilemaan laskentatyökalua oikealla datalla jo ennen kehitystä.",
        },
        {
          title: "Design System myös koodiin",
          body: "Rakentaisin Design Systemin tiiviisti kehittäjien kanssa niin, että se on käytössä myös koodissa eikä vain Figmassa.",
        },
      ],
    },
  },

  methods: ["Käyttäjähaastattelut", "Yhteissuunnittelun työpajat", "Käytettävyystestaus", "Esitutkimus"],
};
