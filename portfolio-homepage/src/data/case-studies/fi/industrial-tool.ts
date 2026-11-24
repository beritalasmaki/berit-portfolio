import { alertShots as enAlertShots, autosaveShots as enAutosaveShots, calcShots as enCalcShots, industrialTool as en, widgetBefore } from "../industrial-tool";
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
    alt: "Kuvitus prosessinhoitajasta, joka tarkistaa hälytysjärjestelmän tilan tehdashallissa ruostumattomaan annostelulaitteeseen kiinnitetyltä kosketusnäytöltä",
    caption: "Kuvitus · Tehtaan näyttö annostelulaitteessa",
  },
  {
    alt: "Tehtaan kosketusnäytön versio: hälytyspalkki ja iso kuittauspainike, riskiennuste, suositukset isoina riveinä, prosessin kolme tilaa mittareineen sekä alanavigaatio",
    caption: "Rekonstruktio · Tehtaan kosketusnäyttö",
  },
  {
    alt: "Hälytysjärjestelmän tilanäkymä: neljän tunnin riskiennuste, suositellut toimenpiteet, värikoodatut kemialliset tilat tekstimerkintöineen ja annostelun trendit",
    caption: "Rekonstruktio · Työpöytäsovellus, tilanäkymä",
  },
  {
    alt: "Hälytysasetukset: aktiivinen varoitus ja kuittauspainike, normaali-, keski- ja varoitustaso sekä sähköposti- ja tekstiviestihälytysten vastaanottajat",
    caption: "Rekonstruktio · Työpöytäsovellus, hälytysasetukset",
  },
]);

const autosaveShots = localizeGallery(enAutosaveShots, [
  {
    alt: "Ennen: Edit dashboard -paneelissa on vain Cancel- ja Save-painikkeet, joten muutokset säilyvät vain, jos käyttäjä muistaa tallentaa",
    caption: "Ennen · Muutokset tallentuivat vain Save-painikkeella",
  },
  {
    alt: "Automaattinen tallennus pois päältä: kytkimessä lukee Auto-save: Off, ja sen vieressä ovat Cancel- ja Save-painikkeet",
    caption: "Automaattinen tallennus pois · Cancel ja Save käytössä",
  },
  {
    alt: "Automaattinen tallennus päällä: kytkimessä lukee Auto-save: On ja viimeisin tallennusaika, ja Cancel- ja Save-painikkeiden tilalla on Back to view mode -painike",
    caption: "Automaattinen tallennus päällä · Viimeisin tallennusaika ja paluu katselutilaan",
  },
]);

export const industrialToolFi: CaseStudy = {
  slug: "industrial-tool",
  title: "Teollisuuden data-alusta",
  label: "TEOLLISUUDEN DATA-ALUSTA · 2021–2023",
  headline: "Teollisuuden data selkeäksi, jotta kemikaalit annostellaan oikein",
  description:
    "Suunnittelin kansainvälisen kemianteollisuuden yrityksen data-alustan käyttökokemusta alustan ainoana suunnittelijana. Kun tehtaat ja vedenpuhdistamot näkivät prosessinsa selvästi, kemikaalia kului vähemmän, parhaimmillaan alle puolet entisestä.",
  thumbnail: "/case/kemira-card.png",
  thumbnailAlt: "Teollisuuden data-alustan dashboard",
  projectCount: "2",
  industry: "Teollisuus",
  ctaLabel: "Tutustu koko asiakasprojektiin",
  otherCaseStudyDescription:
    "Tein teollisuuden data-alustasta selkeän, jotta asiakkaat pystyvät annostelemaan kemikaalit oikein ja käyttämään niitä vähemmän.",

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
      alt: "Alustan dashboard, jossa on KPI-, trendi-, mittari- ja kaaviowidgettejä, sekä säiliönäkymä mobiililaitteella",
    },
    heroBundle: true,
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
            "Suunnittelin myös uudelleen sen, miten widgettejä lisätään. Aiemmin ne olivat pelkkä nimilista, jota selattiin alaspäin, kunnes sopiva löytyi. Uudessa versiossa jokainen widget näkyy korttina, jossa on esikatselukuva, joten sen ulkoasun näkee ennen kuin sen raahaa dashboardille.",
            "Jätin listan korttien rinnalle. Listaan tottuneet käyttäjät löysivät sen yhä, ja siirtymä kortteihin sai tapahtua vaiheittain. Lisäsimme seurannan, jolla näimme, kuinka moni alkoi käyttää kortteja listan sijaan, ja kortit otettiin hyvin käyttöön.",
          ],
          figures: [
            { ...widgetBefore, alt: "Ennen: Edit dashboard -paneelissa widgetit näkyvät vain sinisinä nimipalkkeina, joita selataan sopivan löytämiseksi", caption: "Ennen (rekonstruktio) · Widgetit listana" },
            { ...autosaveShots[0], alt: "Jälkeen: widgetit kortteina esikatselukuvineen, ja Card view -valinnan vieressä on yhä List view", caption: "Jälkeen · Kortit esikatselukuvineen, listanäkymä yhä käytössä" },
          ],
        },
        {
          title: "Laskentatyökalu yhdessä asiantuntijan kanssa",
          paragraphs: [
            "Laskenta-asiantuntija teki kemikaalien annostelun ja kulutuksen laskelmia Excelissä. Hän toivoi työkalua, joka jakaa laskennan selkeisiin vaiheisiin. Lopputuloksena oli viisivaiheinen laskentatyökalu, joka avautuu modaaliin Tee laskelma -painikkeesta.",
            "Suunnittelimme työkalun yhdessä. Kävimme läpi laskennan vaiheet ja mietimme, missä järjestyksessä tietoja tarvitaan. Viimeistelin suunnitelmat itsenäisesti ja näytin ne asiantuntijalle ennen kehitystä.",
            "Kaikkea ei voinut vakioida. Siksi työkaluun tuli mahdollisuus kirjoittaa oma kaava silloin, kun vakiovaiheet eivät riitä. Näin työkalu ohjaa tavallisissa tapauksissa mutta ei estä asiantuntijaa poikkeustilanteissa.",
            "Työkalusta ei ole jäljellä kuvakaappauksia, joten kuvat ovat rekonstruktio. Vaiheet vastaavat alkuperäistä, yksityiskohdat voivat poiketa.",
          ],
          figures: [
            [calcShots[0], calcShots[1], calcShots[2]],
            [calcShots[3], calcShots[4]],
          ],
        },
        {
          title: "Automaattinen tallennus",
          paragraphs: [
            "Haastatteluissa selvisi, että työ katosi, jos käyttäjä unohti tallentaa tai yhteys katkesi. Se oli erityisen hankalaa etänä tehtailla työskenteleville.",
            "Aiemmin dashboardin muutokset tallentuivat vain Save-painikkeella. Lisäsin Edit dashboard -paneeliin automaattisen tallennuksen kytkimen. Kun automaattinen tallennus on päällä, paneelissa näkyy, milloin muutokset viimeksi tallennettiin, ja Cancel- ja Save-painikkeiden tilalla on paluu katselutilaan. Kun se on pois päältä, käyttäjä tallentaa tai peruu muutokset itse kuten ennenkin.",
            "Kytkin jätti valinnan käyttäjälle, joten muutoksia ennen tallentamista kokeilevat pystyivät jatkamaan omalla tavallaan. Paransin samalla myös raporttien rakennetta ja sisältöä.",
          ],
          figures: [[autosaveShots[0]], [autosaveShots[1], autosaveShots[2]]],
        },
        {
          title: "Hälytysjärjestelmä sivuprojektina",
          paragraphs: [
            "Erillisellä budjetilla suunnittelin hälytysjärjestelmän. Se oli oma sovelluksensa eikä osa pääalustaa, ja siitä oli kaksi versiota: työpöytäsovellus ja versio tehtailla annostelulaitteisiin kiinnitetyille kosketusnäytöille. Järjestelmä seuraa prosessin kemiallista tilaa ja varoittaa, kun säiliö on täyttymässä tai jokin muu menee vikaan.",
            "Tilanäkymässä näkyvät neljän tunnin riskiennuste, suositellut toimenpiteet ja prosessin eri osien tila. Jokaisella tilalla on värin lisäksi tekstimerkintä, joten tieto ei ole pelkän värin varassa.",
            "Työpöytäsovelluksessa käyttäjä asettaa datalle kolme tasoa: normaali (vihreä), keskitaso (oranssi) ja varoitustaso (punainen). Lisäksi hän valitsee, kuka saa hälytykset sähköpostiin tai tekstiviestinä, ja lisää uudet vastaanottajat sähköpostiosoitteella. Näin hälytys tavoittaa sekä tehtaan prosessinhoitajan että kenttähuollon.",
            "Tehtaan näytöllä hälytykset näkyvät aina, ja ne kuitataan suoraan näytöltä. Näyttöä käytetään sormella, joten tekstit, painikkeet ja navigaatio ovat isompia kuin työpöytäsovelluksessa. Samat tiedot näkyvät yhdellä silmäyksellä, ja annostelun trendit ovat omalla välilehdellään alareunan navigaatiossa.",
            "Ensimmäinen kuva on kuvitus käyttötilanteesta. Alkuperäisestä järjestelmästä ei ole jäljellä kuvakaappauksia, joten näkymät ovat rekonstruktio yhden säilyneen kuvan pohjalta. Tuotenimet on poistettu.",
          ],
          figures: [[alertShots[0], alertShots[1]], [alertShots[2], alertShots[3]]],
        },
        {
          title: "Design System Figmaan",
          paragraphs: [
            "Aloitimme suunnittelun Sketchillä, mutta siirryin itse tekemään suunnittelutyötä Figmassa, koska se oli nopeampaa. Ehdotin asiakkaalle, että koko tiimi siirtyisi Figmaan. Siinä UI kitin voi rakentaa selkeämmin, ja prototyypit voi tehdä suoraan Figmassa ilman erillistä InVision-palvelua.",
            "Siirsin UI kitin Figmaan automaattisella tuonnilla, mutta komponentit hajosivat pahasti. Rakensin ne siksi uudelleen ja järjestin komponentit ja tokenit omiin selkeisiin kansioihinsa.",
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
        "**Työni vaikutus asiakkaiden tuloksiin.** Tehtaat ja vedenpuhdistamot käyttävät kemikaaleja veden käsittelyyn. Kun kemikaalia annostellaan juuri oikea määrä, sitä kuluu vähemmän ja kustannukset laskevat. Oikea määrä löytyy, kun prosessia seurataan luotettavan datan avulla, ja asiakkaat ja asiantuntijat tekivät nämä päätökset juuri niissä näkymissä, jotka suunnittelin.",
        "Yksi puhdistamo oli annostellut kemikaalit käsin, koska sen vanhoihin mittalaitteisiin ei voinut luottaa. Kun annostelu muuttui automaattiseksi ja prosessia pystyi seuraamaan dashboardeilta, puhdistamon prosessiasiantuntija kuvasi muutosta näin: ”Nyt tiedämme, mitä tapahtuu ympäri vuorokauden. Dashboardit ovat hyviä ja raportit tarkkoja.”",
        "**Raportit tukivat myyntiä.** Yrityksen tavoitteena oli koota erilliset tietokannat yhdelle alustalle ja hyödyntää dataa palvelujen myynnissä. Raporttien avulla myyjät ja asiantuntijat pystyvät näyttämään asiakkaalle säästöt selkeästi.",
        "Tulokset ovat kemian, laskenta-algoritmien, asiantuntijoiden ja käyttöliittymän yhteistyön ansiota. Minun osuuteni oli tehdä datasta ja laskennasta niin selkeää, että asiakkaat ja asiantuntijat voivat seurata sitä ja tehdä päätöksiä sen pohjalta.",
        "**Käyttäjien ja tiimin palaute.** Haastattelut olivat lyhyitä ja aikataulut tiukkoja, joten käytettävyydelle ei asetettu kattavia mittareita widgettikorttien käyttöönoton seurantaa lukuun ottamatta. Siihen, mitä kannatti korjata ensin, mittareita ei tarvittu, sillä muutama haastattelu riitti näyttämään, mikä hankaloitti työtä eniten. Muutosten vaikutus perustuu siksi käyttäjiltä ja tiimiltä saatuun palautteeseen.",
        "Asiantuntijoiden ei enää tarvinnut etsiä tietoa pitkistä tekstilistoista. Laskelmia pystyivät tekemään muutkin kuin tiimin kokeneimmat. Työ ei enää kadonnut, vaikka tallennus unohtui tai yhteys katkesi.",
        "Kehittäjien ja projektipäällikön mukaan yhteistyö sujui selvästi paremmin, kun suunnittelijat ja kehittäjät käyttivät samaa työkalua.",
      ],
      highlights: [
        {
          value: "55\u00a0%",
          work: "Laskentatyökalu",
          enabled: "Asiantuntija laski oikean kemikaalimäärän vaihe vaiheelta",
          label: "vähemmän kemikaalia: alle puolet entisestä",
        },
        {
          value: "15\u00a0%",
          work: "Laskentatyökalu",
          enabled: "Kemikaalia annosteltiin vain sen verran kuin tarvittiin",
          label: "vähemmän kemikaalia samaan puhdistustulokseen",
        },
        {
          value: "19\u00a0%",
          work: "Dashboardit ja raportit",
          enabled: "Prosessin näki ympäri vuorokauden, joten käsin annostelusta voitiin luopua",
          label: "vähemmän kemikaalia: lähes viidennes jäi tarpeettomaksi",
        },
      ],
    },
    reflections: {
      heading: "Mitä tekisin toisin",
      items: [
        {
          title: "Mittarit, jotka kytkeytyvät liiketoiminnan lukuihin",
          body: "Haastattelut kertoivat, mitä korjata, mutta eivät sitä, kuinka paljon muutos auttoi. Yrityksellä oli jo KPI-mittareita asiakkaiden ostokäyttäytymiselle ja tyytyväisyydelle. Nyt kytkisin suunnittelutyön niihin ja seuraisin muutamaa kevyttä mittaria, jotka saa suoraan järjestelmästä ilman erillistä tutkimusta. Seuraisin esimerkiksi sitä, kuinka moni asiantuntija tekee laskelmat työkalussa Excelin sijaan, kuinka kauan laskelma kestää, kuinka monta tukipyyntöä kadonneesta työstä tulee ja kuinka usein asiakkaat avaavat dashboardeja. Näin vaikutus näkyisi sekä käyttäjien arjessa että liiketoiminnassa.",
        },
        {
          title: "Prosessin dokumentointi",
          body: "Vanhoista näkymistä minulla on kuvia, mutta luonnoksia ja työpajakuvia ei ole tallessa. Nykyään tallentaisin koko prosessin alusta asti, koska juuri luonnokset ja työpajat näyttävät, miten ratkaisuihin päädyttiin.",
        },
        {
          title: "Toimivat prototyypit",
          body: "Staattisten kuvien sijaan rakentaisin toimivia prototyyppejä tekoälytyökaluilla. Asiantuntija pääsisi kokeilemaan laskentatyökalua oikealla datalla jo ennen kehitystä.",
        },
        {
          title: "Design Systemille selkeä prosessi",
          body: "Kehittäjillä oli käytössä Storybook, joten komponenttikirjasto oli olemassa myös koodissa. Työtä ei kuitenkaan ollut järjestetty Design Systemiksi, eikä ollut sovittu, miten esimerkiksi uusi komponentti päätyy kirjastoon. Nyt sopisin tiimin kanssa heti alussa, kuka päättää uusista komponenteista, miten ne dokumentoidaan ja miten Figman UI kit ja Storybook pysyvät samassa tahdissa.",
        },
      ],
    },
  },

  methods: ["Käyttäjähaastattelut", "Yhteissuunnittelun työpajat", "Käytettävyystestaus", "Esitutkimus"],
};
