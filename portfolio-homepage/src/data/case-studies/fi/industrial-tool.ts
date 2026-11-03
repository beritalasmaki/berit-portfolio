import { industrialTool as en } from "../industrial-tool";
import type { CaseStudy } from "../types";
import { localizeGallery } from "./helpers";

export const industrialToolFi: CaseStudy = {
  slug: "industrial-tool",
  title: "Teollisuuden data ja asiantuntijakäyttöliittymien suunnittelu",
  label: "TEOLLISUUDEN DATATYÖKALUT · 2020–2023",
  headline: "Seuranta, laskenta ja raportointi yhdessä paikassa.",
  description:
    "Alusta seurantaan, laskentaan, raportointiin ja tilastolliseen analyysiin, jota käyttävät sekä yrityksen omat asiantuntijat että sen asiakkaat. Uudistin koko asiantuntijakokemuksen dashboardeista datanäkymiin.",
  thumbnail: "/case/kemira-card.png",
  thumbnailAlt: "Kemiran datatyökalut",
  projectCount: "2",
  industry: "Teollisuus",
  ctaLabel: "Tutustu koko tapaustutkimukseen",
  otherCaseStudyDescription:
    "Rakensin käytännönläheisiä asiantuntijatyökaluja teollisuuden datatyönkulkuihin, jotta monimutkaiset laskennat ja seuranta olisivat asiantuntijoille luotettavampia.",

  intro: [
    "Teollisuuden seuranta- ja raportointialusta oli monimutkaistunut vuosien varrella, ja asiantuntijat joutuivat selviytymään pitkistä tekstilistoista ja käsin tehtävistä laskelmista. Tulin projektiin ainoana suunnittelijana edellisen suunnittelijan jälkeen, jotta työkalu saatiin toimimaan niin kuin asiantuntijat todella tarvitsivat.",
  ],
  roleLabel: "UX-suunnittelija (projektin ainoa suunnittelija)",
  focusLabel: "Asiantuntijatyökalut, datan visualisointi ja suunnittelujärjestelmän uudistaminen",
  categoryTag: "Teollisuusalusta",
  skillTags: [
    {
      label: "UX- ja käyttöliittymäsuunnittelu",
      description: "Muutin tiheän datan yhdellä silmäyksellä luettaviksi dashboardeiksi",
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
      description: "Ratkaisin tiedonmenetykset etätyössä ja aikakriittisessä työssä",
    },
    {
      label: "Kokonaisvastuu",
      description: "Alustan ainoa UX-suunnittelija, vastuullani koko kokonaisuus",
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
    "Uusien ominaisuuksien julkaisun jälkeen järjestimme järjestelmällisesti palaute- ja testaustilaisuuksia oikeiden käyttäjien kanssa. Tämä jatkuva kierre auttoi meitä varmistamaan, mikä toimi päivittäisessä työssä, löytämään kehityskohteet ja kehittämään tuotetta todellisten käyttäjätarpeiden mukaan.",
  impactCards: [
    {
      number: "01",
      title: "Data nopeammin ja selkeämmin yhdellä silmäyksellä",
      body: "Kun dashboardin datapaneelit muutettiin visuaalisiksi korteiksi, asiantuntijoiden ei enää tarvinnut lukea pitkiä tekstilistoja löytääkseen tarvitsemansa. Tieto, jonka hahmottaminen vaati ennen selaamista ja tulkintaa, oli nyt ymmärrettävissä sekunneissa, mikä nopeutti suoraan päivittäistä seuranta- ja raportointityötä.",
    },
    {
      number: "02",
      title: "Monimutkaiset laskennat ilman arvailua",
      body: "Aiemmin monimutkaisen laskennan ajaminen vaati syvää asiantuntemusta ja huolellista käsityötä. Uusi laskentaikkuna ohjasi asiantuntijat prosessin läpi vaihe vaiheelta, mikä vähensi virheiden riskiä ja mahdollisti sen, että useampi tiimin jäsen pystyi ajamaan laskentoja varmoin mielin, ei vain kokeneimmat.",
    },
    {
      number: "03",
      title: "Vähemmän menetettyä työtä, enemmän luottamusta työkaluun",
      body: "Automaattinen tallennus data- ja raporttinäkymiin poisti todellisen, päivittäisen turhautumisen: työn menettämisen unohtuneen tallennuksen tai katkenneen yhteyden vuoksi. Sillä oli suuri merkitys käyttäjille, jotka käsittelivät aikakriittistä dataa etätehtailta.",
    },
    {
      number: "04",
      title: "Perusta, jonka päälle koko tiimi pystyi rakentamaan",
      body: "Suunnittelujärjestelmän siirto Sketchistä Figmaan ei pelkästään uudistanut työkalua, vaan toi kehittäjät ja suunnittelijat vihdoin samaan ympäristöön. Se nopeutti suunnitelmien luovutusta ja vähensi edestakaista selvittelyä, jota kahden irrallisen suunnittelutyökalun käyttö oli aiheuttanut, ja vapautti aikaa, jonka kehittäjät olivat aiemmin käyttäneet suunnitelmien tulkintaan ja muuntamiseen formaatista toiseen. Sain suoraa, myönteistä palautetta sekä kehittäjiltä että projektipäälliköltä, jotka kertoivat, kuinka paljon sujuvammaksi heidän arkityönsä tämän ansiosta muuttui.",
    },
  ],

  howItStarted: [
    "Astuin keskeneräiseen projektiin ja jatkoin edellisen suunnittelijan työtä. Ensimmäisiä painopisteitäni olivat käyttöliittymän visuaaliset parannukset, esimerkiksi dashboardin pienten paneelien muuttaminen pelkistä tekstilistoista visuaalisiksi korteiksi, mikä teki niistä paljon helpommin hahmotettavia yhdellä silmäyksellä. Tämän jälkeen suunnittelimme automaattisen tallennuksen data- ja raporttinäkymiin sekä paransimme raporttien rakennetta ja sisältöä.",
  ],

  challenges: [
    {
      number: "01",
      title: "Monimutkaisten asiantuntijatyönkulkujen suunnittelu",
      body: "Yksi jatkuvista haasteista oli monimutkaisten työprosessien selkeyttäminen asiantuntijakäyttäjille. Suunnittelin laskentaikkunan, joka jakaa monimutkaisen laskennan vaiheisiin, jotta asiantuntijat pystyivät ajamaan sen paljon yksinkertaisemman käyttöliittymän kautta. Johdonmukaisesti auttoi se, etten yrittänyt ratkaista tätä yksin. Työskentelin tiiviisti asiantuntijoiden ja tehdastyöntekijöiden kanssa, jotka käyttivät työkalua päivittäin, ja suunnittelin ratkaisut yhdessä heidän kanssaan sen sijaan, että olisin arvaillut, mitä he tarvitsevat.",
    },
    {
      number: "02",
      title: "Tutkimusta eri aikavyöhykkeillä",
      body: "Iso osa haasteesta oli pelkkää logistiikkaa. Sidosryhmähaastatteluihin osallistui usein ihmisiä Yhdysvalloista tai Aasiasta, mikä tarkoitti huomattavien aikaerojen kanssa työskentelyä ja joustavuutta omassa aikataulussani. Se, että tuoteomistaja, jolla oli jo vahvat suhteet näihin sidosryhmiin, osallistui keskusteluihin, helpotti luottamuksen rakentamista ja ihmisten sitouttamista huomattavasti.",
    },
    {
      number: "03",
      title: "Suunnittelujärjestelmän uudistaminen",
      body: "Olemassa oleva suunnittelujärjestelmä oli Sketchissä, vanhemmassa työkalussa, joka vaikeutti yhteistyötä muun tiimin kanssa. Päivittäisen suunnittelutyön ohella otin vastuulleni kirjaston siirtämisen Figmaan. Siivosin ja rakensin komponentit uudelleen sen sijaan, että olisin vain kopioinut ne sellaisinaan, jotta tiimille jäi käyttökelpoisempi ja helpommin ylläpidettävä suunnitteluperusta, jonka varaan rakentaa jatkossa.",
    },
  ],

  whatIWouldDoDifferently: [
    "Jälkikäteen lähestyisin tämän projektin teknistä puolta nykyään toisin. Sen sijaan, että luottaisin kehittäjille luovutettuihin staattisiin malleihin, rakentaisin toimivia prototyyppejä suoraan tekoälytyökaluilla, kuten Claude Designilla, ja kuroisin suunnittelun ja toteutuksen välisen kuilun umpeen paljon nopeammin. Rakentaisin suunnittelujärjestelmän alusta asti myös koodin näkökulmasta ja tekisin tiiviimpää yhteistyötä kehittäjien kanssa esimerkiksi Cursorilla. Näin siitä ei tulisi vain hyvin järjestetty komponenttikirjasto Figmassa, vaan jotain, mistä kehittäjät voisivat ammentaa suoraan.",
    "Tiimi toimi koko projektin ajan hyvin yhteen, enkä usko, että tiimimme koko tai kokoonpano oli koskaan todellinen ongelma. Kehittymisen paikka on nykyään pikemminkin siinä, miten hyödyntäisin tämän päivän työkaluja ja työtapoja kuroakseni suunnittelun ja kehityksen välisen kuilun umpeen aiemmin ja tehokkaammin.",
  ],

  methods: ["Käyttäjähaastattelut", "Yhteissuunnittelun työpajat", "Käytettävyystestaus", "Esitutkimus"],
};
