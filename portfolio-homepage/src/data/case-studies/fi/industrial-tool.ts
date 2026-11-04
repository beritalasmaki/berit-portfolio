import { industrialTool as en } from "../industrial-tool";
import type { CaseStudy } from "../types";
import { localizeGallery } from "./helpers";

export const industrialToolFi: CaseStudy = {
  slug: "industrial-tool",
  title: "Teollisuuden data ja asiantuntijakäyttöliittymien suunnittelu",
  label: "TEOLLISUUDEN DATATYÖKALUT · 2020–2023",
  headline: "Seuranta, laskenta ja raportointi yhdessä paikassa.",
  description:
    "Alusta seurantaan, laskentaan, raportointiin ja tilastolliseen analyysiin. Sitä käyttävät sekä yrityksen omat asiantuntijat että asiakkaat. Uudistin asiantuntijakokemusta monipuolisesti dashboardeista datanäkymiin.",
  thumbnail: "/case/kemira-card.png",
  thumbnailAlt: "Kemiran datatyökalut",
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
      "Alustan ainoa UX-suunnittelija vuosina 2020–2023. Jatkoin edellisen suunnittelijan työtä ja vastasin koko kokonaisuudesta.",
    decisionsLabel: "Ratkaisut ja kädenjälki",
    outcomeLabel: "Lopputulos ja vaikutus",
    decisions: [
      "**Tiedon hahmotettavuus:** Tiivistin monimutkaisen datan ja pitkät listat selkeiksi visuaalisiksi kokonaisuuksiksi, jotta olennainen tieto löytyy yhdellä silmäyksellä.",
      "**Käyttöprosessien selkeyttäminen:** Pilkoin raskaat ja monivaiheiset tehtävät ohjatuiksi, steppi stepiltä eteneviksi kokonaisuuksiksi (wizard).",
      "**Käyttökokemuksen varmuus:** Paransin työn jatkuvuutta ja vähensin käyttäjän kuormitusta tuomalla näkymiin automaattisen tallennuksen.",
      "**Design Systemin uudistus:** Siirsin suunnittelujärjestelmän Sketchistä Figmaan ja rakensin komponentit samalla skaalautuvasti uudelleen.",
    ],
    outcome:
      "Asiantuntijat hahmottivat tarvitsemansa datan nopeasti, ja monimutkaisten laskentojen tekeminen muuttui varmaksi ja helppokäyttöiseksi koko tiimille. Automaattisen tallennuksen ansiosta työvaiheita ei enää menetetty.\n\nSuunnittelijoiden ja kehittäjien siirtyminen yhteiseen työkaluun selkeytti yhteistyötä, ja sekä kehitystiimi että projektipäällikkö kertoivat päivittäisen työn sujuvoituneen huomattavasti.",
  },
  roleLabel: "UX-suunnittelija (projektin ainoa suunnittelija)",
  focusLabel: "Asiantuntijatyökalut, datan visualisointi ja suunnittelujärjestelmän uudistaminen",
  categoryTag: "Teollisuusalusta",
  skillTags: [
    {
      label: "UX- ja käyttöliittymäsuunnittelu",
      description: "Muutin tiheän datan helposti silmäiltäviksi dashboardeiksi",
    },
    {
      label: "Suunnittelujärjestelmän siirto",
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

  gallery: localizeGallery(en.gallery, [
    { alt: "Dashboard", caption: "Dashboard" },
    { alt: "Dashboardin muokkaus", caption: "Dashboardin muokkaus" },
    { alt: "Widget-valikko", caption: "Widget-valikko" },
    { alt: "Säiliön tiedot", caption: "Säiliön tiedot" },
    { alt: "Datapisteet", caption: "Datapisteet" },
    { alt: "Mobiililista", caption: "Mobiililista" },
    { alt: "Mobiilinavigaatio", caption: "Mobiilinavigaatio" },
  ]),
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
      body: "Suunnittelujärjestelmän siirto Sketchistä Figmaan ei vain uudistanut työkalua, vaan toi kehittäjät ja suunnittelijat vihdoin samaan ympäristöön. Suunnitelmien luovutus nopeutui ja edestakainen viestittely väheni, kun kahden irrallisen suunnittelutyökalun välillä ei enää tarvinnut tulkita ja muuntaa suunnitelmia. Sain suoraa ja myönteistä palautetta sekä kehittäjiltä että projektipäälliköltä, jotka kertoivat työn sujuvoituneen selvästi.",
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
      body: "Iso osa haasteesta oli pelkkää logistiikkaa. Sidosryhmähaastatteluihin osallistui usein ihmisiä Yhdysvalloista tai Aasiasta, joten jouduin sovittamaan aikatauluni suuriin aikaeroihin ja joustamaan. Luottamuksen rakentaminen ja ihmisten mukaan saaminen kävi paljon helpommin, kun keskusteluissa oli mukana tuoteomistaja, jolla oli jo hyvät suhteet näihin sidosryhmiin.",
    },
    {
      number: "03",
      title: "Suunnittelujärjestelmän uudistaminen",
      body: "Alkuperäinen suunnittelujärjestelmä oli Sketchissä, vanhemmassa työkalussa, joka hankaloitti yhteistyötä muun tiimin kanssa. Päivittäisen suunnittelutyön ohella otin vastuulleni kirjaston siirtämisen Figmaan. Siivosin ja rakensin komponentit uudelleen sen sijaan, että olisin vain kopioinut ne sellaisinaan, jotta tiimille jäi käyttökelpoisempi ja helpommin ylläpidettävä perusta, jonka päälle oli hyvä rakentaa jatkossa.",
    },
  ],

  whatIWouldDoDifferently: [
    "Jälkikäteen lähestyisin projektin teknistä puolta nykyään toisin. Staattisten mallien luovuttamisen sijaan rakentaisin toimivia prototyyppejä suoraan tekoälytyökaluilla, kuten Claude Designilla, ja kuroisin suunnittelun ja toteutuksen välisen kuilun umpeen paljon nopeammin. Rakentaisin suunnittelujärjestelmän alusta asti myös koodin näkökulmasta ja tekisin tiiviimpää yhteistyötä kehittäjien kanssa esimerkiksi Cursorilla. Näin siitä ei tulisi vain hyvin järjestetty komponenttikirjasto Figmassa, vaan jotain, mitä kehittäjät voisivat hyödyntää suoraan.",
    "Tiimi toimi koko projektin ajan hyvin yhteen, eikä tiimin koko tai kokoonpano ollut mielestäni koskaan varsinainen ongelma. Oppimista on pikemminkin siinä, miten hyödyntäisin nykypäivän työkaluja ja työtapoja kaventaakseni suunnittelun ja kehityksen välistä kuilua aiemmin ja tehokkaammin.",
  ],

  methods: ["Käyttäjähaastattelut", "Yhteissuunnittelun työpajat", "Käytettävyystestaus", "Esitutkimus"],
};
