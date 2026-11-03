import { environmentalDataTool as en } from "../environmental-data-tool";
import type { CaseStudy } from "../types";
import { localizeGallery } from "./helpers";

export const environmentalDataToolFi: CaseStudy = {
  slug: "environmental-data-tool",
  title: "Ympäristödatajärjestelmien uudistaminen",
  label: "YMPÄRISTÖDATAJÄRJESTELMÄT · 2020–2024",
  headline: "Vanhentuneet järjestelmät.\nNyt jotain, mihin tutkijat todella luottavat.",
  description:
    "Ympäristödatan seuranta- ja raportointityökalut, joilla asiantuntijat löytävät, vertailevat ja julkaisevat tuloksia ilman, että käyttöliittymä on jatkuvasti tiellä.",
  thumbnail: "/case/syke-new-card.png",
  thumbnailAlt: "Ympäristödatajärjestelmät",
  projectCount: "5+",
  industry: "Ympäristötutkimus",
  ctaLabel: "Tutustu koko asiakasprojektiin",
  otherCaseStudyDescription:
    "Muutin vanhentuneet järjestelmät nykyaikaisiksi, tehokkaiksi työkaluiksi, jotka auttavat ympäristötutkijoita hallitsemaan ja analysoimaan kriittistä dataa.",

  intro: [
    "Ympäristötutkimuslaitos hallitsi ja analysoi kriittistä dataansa vanhentuneilla työkaluilla ja turvautui usein Exceliin, jotta datasta sai edes jotain selvää. Vuosina 2020–2023 tein laitokselle useita projekteja ainoana UX-suunnittelijana ja uudistin näitä työkaluja.",
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
      title: "Vanhoista työkaluista tutkijoiden työtä tukeviin välineisiin",
      body: "Emme vain uudistaneet vanhojen järjestelmien ulkoasua, vaan rakensimme useita niistä uudelleen sen mukaan, miten tutkijat nykyään oikeasti työskentelevät: miten he yhdistävät kartta- ja taulukkodataa ja miten he lisäävät uusia tuloksia työn edetessä.",
    },
    {
      number: "02",
      title: "Parempia oivalluksia oikean datavisualisoinnin avulla",
      body: "Näistä projekteista suurimmassa tutkijat olivat aiemmin turvautuneet paljon Exceliin ymmärtääkseen dataansa. Rakensimme järjestelmään kunnolliset analytiikkanäkymät, joiden avulla kuviot ja poikkeamat huomaa selvästi nopeammin ilman, että dataa tarvitsee ensin viedä muualle.",
    },
    {
      number: "03",
      title: "Näytteiden seuranta helpompaa ja selkeämpää",
      body: "Parannetut käyttöliittymät helpottivat asiantuntijoiden arkityötä selvästi. Uusien näytteiden tallentaminen ja niiden muutosten seuraaminen ajan mittaan oli paljon yksinkertaisempaa kuin vanhoissa järjestelmissä.",
    },
  ],

  howItStarted: [
    "Jokainen järjestelmä, jonka parissa työskentelin, oli vanhentunut ja piti rakentaa uudelleen, mutta harvoin täsmälleen vanhan kopiona. Useimmiten vanhaa järjestelmää ei voinut vain pukea uuteen käyttöliittymään. Piti miettiä uudelleen, miten datan ja työnkulkujen oikeasti kuuluisi toimia, ja rakentaa uusi järjestelmä sen pohjalta. Parissa projektissa aloitin itse lyhyellä tutkimuskierroksella, joka oli lähellä niin sanottua Lean Designia: kerätään vain sen verran, että pääsee liikkeelle, ja opitaan loput rakentamalla. Tein sen suoraan järjestelmän asiantuntijoiden kanssa, jotta sain tarvittavan aineiston ennen kuin pääsin varsinaisen käyttöliittymän kimppuun.",
  ],

  challenges: [
    {
      number: "01",
      title: "Karttojen ja taulukoiden yhdistäminen",
      body: "Useissa näistä järjestelmistä toistuva haaste oli karttanäkymien ja taulukkonäkymien yhdistäminen yhdeksi johdonmukaiseksi kokonaisuudeksi. Minun piti selvittää, kuinka monta saraketta taulukossa voi olla, ennen kuin sitä on vaikea käyttää, ja mitä ominaisuuksia karttanäkymä tarvitsee, jotta eri tyyppiset datapisteet erottuvat selvästi ilman, että käyttäjä hukkuu informaatioon.",
    },
    {
      number: "02",
      title: "Suunnittelu kasvavalle, reaaliaikaiselle datalle",
      body: "Nämä eivät olleet staattisia järjestelmiä. Käyttäjien piti pystyä lisäämään uusia näytteenottotuloksia suoraan järjestelmään, joten data kasvoi ja muuttui jatkuvasti. Tein tiivistä yhteistyötä järjestelmiä päivittäin käyttävien asiantuntijoiden kanssa, jotta suunnittelu kestäisi uuden datan lisäämisen rikkoutumatta.",
    },
    {
      number: "03",
      title: "Projektirakenne vaihteli, hyödynsin sitä silloin kun sellainen oli",
      body: "Kaikissa projekteissa ei ollut yhtä paljon rakennetta. Yhdessä projektissa oli oma projektipäällikkö, joka piti työn raiteillaan ja varmisti, että ratkaisimme oikeita ongelmia, ja tuin häntä suunnittelun puolelta. Muut projektit olivat pienempiä ja väljempiä, lähempänä epävirallista jatkuvaa yhteistyötä asiantuntijoiden kanssa.",
    },
    {
      number: "04",
      title: "Kunnollisten data-analytiikkanäkymien rakentaminen",
      body: "Yhdessä isoimmista projekteista menimme perusnäkymiä pidemmälle ja rakensimme kunnolliset analytiikkanäkymät, kuten pylväs- ja hajontakaaviot sekä muita visualisointeja. Ne antoivat tutkijoille paljon monipuolisemmat keinot tutkia ja ymmärtää dataansa kuin vanhat järjestelmät koskaan. Kaikissa näissä projekteissa ratkaisevaa oli pysyä lähellä päivittäin työkalua käyttäviä asiantuntijoita. Työ oli vaativaa, mutta rinta rinnan heidän kanssaan suunnittelu teki siitä myös aidosti hauskaa, ei pelkästään tehokasta.",
    },
  ],

  whatIWouldDoDifferently: [
    "Jos voisin palata ajassa taaksepäin, ajaisin suunnittelujärjestelmän aloittamista aiemmin. Organisaatiolla oli suunnitelmia aloittaa sellainen jossain vaiheessa, mutta kun hyvin pieni kehitystiimi ylläpiti jo yli 200:aa eri järjestelmää, priorisointi oli vaikeaa. Lisäksi sisäisesti oli vielä paljon epäselvää, esimerkiksi se, millä tasolla suunnittelujärjestelmä kannattaisi rakentaa organisaatiolle, jolla on niin monta järjestelmää ja niin vähän resursseja.",
    "Tämä on hyvä muistutus siitä, ettei suunnittelujärjestelmä ole pelkkä suunnittelupäätös. Organisaatiolla pitää olla myös kapasiteettia ja selkeyttä sen tukemiseen. Ajaisin sitä edelleen aiemmin ensi kerralla, mutta lähtisin liikkeelle realistisemmin: pienellä ja riittävän hyödyllisellä kokonaisuudella, joka osoittaa arvonsa nopeasti, sen sijaan että odottaisin ihanteellisia olosuhteita, joita ei ehkä koskaan tule.",
  ],

  methods: ["Kevyt kartoitus", "Yhteissuunnittelun työpajat", "Käytettävyystestaus", "Lean-suunnittelu"],
};
