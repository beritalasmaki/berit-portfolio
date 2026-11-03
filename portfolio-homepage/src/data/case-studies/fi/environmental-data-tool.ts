import { environmentalDataTool as en } from "../environmental-data-tool";
import type { CaseStudy } from "../types";
import { localizeGallery } from "./helpers";

export const environmentalDataToolFi: CaseStudy = {
  slug: "environmental-data-tool",
  title: "Ympäristödatajärjestelmien uudistaminen",
  label: "YMPÄRISTÖDATAJÄRJESTELMÄT · 2020–2024",
  headline: "Vanhentuneet järjestelmät.\nNyt jotain, mihin tutkijat todella luottavat.",
  description:
    "Ympäristödatan seuranta- ja raportointityökalut, jotka on rakennettu niin, että asiantuntijat voivat löytää, vertailla ja julkaista tuloksia taistelematta käyttöliittymää vastaan.",
  thumbnail: "/case/syke-new-card.png",
  thumbnailAlt: "Ympäristödatajärjestelmät",
  projectCount: "5+",
  industry: "Ympäristötutkimus",
  ctaLabel: "Tutustu koko tapaustutkimukseen",
  otherCaseStudyDescription:
    "Muutin vanhentuneet järjestelmät nykyaikaisiksi, tehokkaiksi työkaluiksi, jotka auttavat ympäristötutkijoita hallitsemaan ja analysoimaan kriittistä dataa.",

  intro: [
    "Ympäristötutkimuslaitos käytti vanhentuneita työkaluja kriittisen datan hallintaan ja analysointiin ja turvautui usein Exceliin pelkästään saadakseen datasta selvää. Useissa projekteissa vuosina 2020–2023 tulin mukaan laitoksen ainoaksi UX-suunnittelijaksi uudistamaan näitä työkaluja.",
  ],
  roleLabel: "UI/UX-suunnittelija (ainoa suunnittelija, pitkäaikainen asiakassuhde)",
  focusLabel:
    "Vanhentuneiden datajärjestelmien uudistaminen, UX/UI-suunnittelun ja kevyen palvelumuotoilun yhdistäminen",
  categoryTag: "Data-alusta",
  skillTags: [
    {
      label: "Vanhojen järjestelmien uudistaminen",
      description: "Rakensin työkalut uudelleen sen mukaan, miten tutkijat nykyään oikeasti työskentelevät",
    },
    {
      label: "Datan visualisointi",
      description: "Korvasin käsin tehdyn Excel-työn järjestelmän omilla analytiikkanäkymillä",
    },
    {
      label: "Kevyt palvelumuotoilu",
      description: "Yhdistin UX/UI-työn ja yksinkertaisen palveluajattelun",
    },
    {
      label: "Kevyt kartoitus",
      description: "Julkaisin nopeasti jotain pientä ja hyödyllistä ja kehitin sitä sen jälkeen",
    },
    {
      label: "Kokonaisvastuu",
      description: "Ainoa suunnittelija useassa erillisessä projektissa",
    },
    {
      label: "Pitkäaikainen asiakassuhde",
      description: "Ylläpidin luottamusta ja jatkuvuutta kolmen vuoden ajan",
    },
  ],

  gallery: localizeGallery(en.gallery, [
    { alt: "Havaintodatan kuvaajanäkymä", caption: "Havaintodata" },
    { alt: "Seurantapaikkojen taulukko", caption: "Seurantapaikat" },
    { alt: "Seurantapaikkojen kartta", caption: "Paikkakartta" },
    { alt: "Luontotyyppien uhanalaisuuden palvelu (punainen lista)", caption: "Punaisen listan palvelu" },
    { alt: "Luontotyyppien uhanalaisuuden palvelu, mobiili", caption: "Punainen lista, mobiili" },
  ]),
  sneakPeekImages: en.sneakPeekImages,

  impactIntro: "Nämä vaikutukset perustuvat palautteeseen, jota keräsimme suoraan käyttäjiltä projektien aikana.",
  impactCards: [
    {
      number: "01",
      title: "Vanhoista työkaluista työtapoja vastaaviin välineisiin",
      body: "Emme vain uudistaneet vanhojen järjestelmien ulkoasua, vaan rakensimme useita niistä uudelleen sen mukaan, miten tutkijat nykyään oikeasti työskentelevät, mukaan lukien se, miten he yhdistävät kartta- ja taulukkodataa ja miten he lisäävät uusia tuloksia työn edetessä.",
    },
    {
      number: "02",
      title: "Rikkaampia oivalluksia oikean datavisualisoinnin avulla",
      body: "Näistä projekteista suurimmassa tutkijat olivat aiemmin tukeutuneet vahvasti Exceliin saadakseen datastaan selvää. Rakensimme sen sijaan kunnolliset analytiikkanäkymät suoraan järjestelmään, mikä antoi heille paljon selkeämmän ja nopeamman tavan havaita kuvioita ja ymmärtää dataansa ilman, että sitä piti ensin viedä muualle.",
    },
    {
      number: "03",
      title: "Näytteiden seuranta helpompaa ja selkeämpää",
      body: "Parannetut käyttöliittymät helpottivat asiantuntijoiden arkityötä selvästi. Uusien näytteiden tallentaminen ja niiden muutosten seuraaminen ajan mittaan oli paljon yksinkertaisempaa kuin vanhoissa järjestelmissä.",
    },
  ],

  howItStarted: [
    "Jokainen järjestelmä, jonka parissa työskentelin, oli vanhentunut ja piti rakentaa uudelleen, mutta harvoin täsmälleen vanhan kopiona. Useimmiten emme voineet vain luoda vanhaa järjestelmää uudelleen uudella käyttöliittymällä. Meidän piti miettiä uudelleen, miten datan ja työnkulkujen pitäisi oikeasti toimia, ja rakentaa sen päälle jotain uutta. Parissa projektissa tämä tarkoitti sitä, että aloitin itse lyhyellä tutkimuskierroksella, lähellä sitä, mitä kutsutaan Lean Designiksi: kerätään juuri sen verran, että pääsee alkuun, ja opitaan loput rakentamalla. Tein tämän suoraan järjestelmän asiantuntijoiden kanssa kerätäkseni tarvittavan aineiston, ennen kuin pääsin varsinaisen käyttöliittymän kimppuun.",
  ],

  challenges: [
    {
      number: "01",
      title: "Karttojen ja taulukoiden yhdistäminen",
      body: "Useissa näistä järjestelmistä toistuva haaste oli karttanäkymien ja taulukkonäkymien yhdistäminen yhdeksi johdonmukaiseksi kokemukseksi. Minun piti selvittää, kuinka monta saraketta taulukossa voi järkevästi olla, ennen kuin sitä on vaikea käyttää, ja miten karttanäkymälle saadaan oikeat ominaisuudet, jotta se esittää eri tyyppiset datapisteet selkeästi ylikuormittamatta käyttäjää.",
    },
    {
      number: "02",
      title: "Suunnittelu kasvavalle, reaaliaikaiselle datalle",
      body: "Nämä eivät olleet staattisia järjestelmiä. Käyttäjien piti pystyä lisäämään uusia näytteenottotuloksia suoraan järjestelmään, mikä tarkoitti, että data itse kasvoi ja muuttui koko ajan. Tein tiivistä yhteistyötä asiantuntijoiden kanssa, jotka käyttivät näitä järjestelmiä päivittäin, jotta suunnittelu kestäisi uuden datan lisäämisen rikkomatta rakentamaamme rakennetta.",
    },
    {
      number: "03",
      title: "Todellisen projektirakenteen hyödyntäminen, kun sellainen oli",
      body: "Kaikissa projekteissa ei ollut samaa rakenteen tasoa. Yhdessä projektissa oli erityisesti oma projektipäällikkö, joka piti työn raiteillaan ja varmisti, että ratkaisimme oikeita ongelmia, ja tuin tätä työtä suunnittelun puolelta. Muut projektit olivat pienempiä ja löyhempiä, lähempänä epävirallista, jatkuvaa yhteistyötä asiantuntijoiden kanssa.",
    },
    {
      number: "04",
      title: "Kunnollisten data-analytiikkanäkymien rakentaminen",
      body: "Yhdessä isommista projekteista menimme perusliittymiä pidemmälle ja rakensimme kunnolliset data-analytiikkanäkymät, kuten pylväs- ja hajontakaaviot sekä muita visualisointeja. Ne antoivat tutkijoille paljon rikkaamman tavan tutkia ja ymmärtää dataansa kuin vanhat järjestelmät koskaan. Kaikissa näissä projekteissa ratkaisevaa oli pysyä lähellä asiantuntijoita, jotka käyttivät työkaluja päivittäin. Työ oli vaativaa, mutta heidän kanssaan rinnakkain suunnitteleminen teki siitä aidosti nautittavaa, ei pelkästään tehokasta.",
    },
  ],

  whatIWouldDoDifferently: [
    "Jos voisin palata ajassa taaksepäin, ajaisin kovemmin suunnittelujärjestelmätyön aloittamista aiemmin. Organisaatiolla oli suunnitelmia aloittaa sellainen jossain vaiheessa, mutta kun hyvin pieni kehitystiimi oli jo venytetty ylläpitämään yli 200:aa eri järjestelmää, priorisointi oli vaikeaa. Lisäksi sisäisesti oli vielä paljon epäselvää, muun muassa se, millä tasolla suunnittelujärjestelmä pitäisi edes rakentaa organisaatiolle, jolla on niin monta järjestelmää ja niin vähän resursseja.",
    "Se on hyvä muistutus siitä, ettei suunnittelujärjestelmä ole vain suunnittelupäätös, vaan se edellyttää myös, että organisaatiolla on kapasiteettia ja selkeyttä tukea sitä. Ajaisin sitä edelleen aiemmin ensi kerralla, mutta tulisin mukaan realistisemmalla lähtökohdalla: jollain pienellä ja riittävän hyödyllisellä, joka todistaa arvonsa nopeasti, sen sijaan että odottaisin ihanteellisia olosuhteita, joita ei ehkä koskaan tule.",
  ],

  methods: ["Kevyt kartoitus", "Yhteissuunnittelun työpajat", "Käytettävyystestaus", "Lean-suunnittelu"],
};
