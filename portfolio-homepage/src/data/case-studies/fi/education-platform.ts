import { educationPlatform as en } from "../education-platform";
import type { CaseStudy } from "../types";
import { localizeGallery } from "./helpers";

export const educationPlatformFi: CaseStudy = {
  slug: "education-platform",
  title: "Valtakunnallinen koulutuksen hallinnon alusta",
  label: "VALTAKUNNALLINEN KOULUTUKSEN HALLINNON ALUSTA · 2021–2024",
  headline: "Monta tiimiä, monta järjestelmää.\nYksi yhtenäinen kokemus.",
  description:
    "Yhteinen, standardoitu suunnitteluperusta monimutkaisille kuntien opetusjärjestelmille, joka yhtenäistää käytettävyyden ja logiikan usealla alustalla.",
  thumbnail: "/case/education-new-card.png",
  thumbnailAlt: "Koulutusalusta",
  projectCount: "1",
  industry: "Julkinen koulutus",
  ctaLabel: "Tutustu koko tapaustutkimukseen",
  otherCaseStudyDescription:
    "Toin rakennetta valtavaan julkisen sektorin alustaan yhdistämällä monimutkaiset kuntien koulutyönkulut selkeäksi ja saavutettavaksi työkaluksi opettajille ja hallintohenkilöstölle.",

  intro: [
    "Julkisen sektorin organisaatioiden konsortio tarvitsi korvaajan perusopetuksessa ja lukiokoulutuksessa käytetyille vanhentuneille järjestelmille, ja palveltavana oli monta kuntaa erilaisine tarpeineen. Tulin mukaan UX- ja tuotesuunnittelijaksi, ja kolmen vuoden aikana minusta tuli Lead Designer.",
  ],
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
      description: "Asetin visuaalisen ja toiminnallisen standardin tiimien yli",
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
      description: "Toteutin mobiilisovelluksen, jonka käyttö tuntui oikeasti helpolta",
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
    "Pilottikoulujen palaute on ollut pääosin myönteistä. Alustaa on kuvattu helppokäyttöiseksi, monipuoliseksi ja modernaksi. Erityisesti opettajat ja hallintohenkilöstö kiittivät palvelun johdonmukaisuutta ja sitä, kuinka hyvin se tukee koulun arjen rutiineja. Käytettävyys ja nopeus nousivat erityisesti esiin: käyttäjien mukaan tarvittavan löytäminen onnistui nopeasti ja helposti. Käytännön käyttötapaukset, kuten todistusten tulostus ja oppilastietojen siirto, osoittautuivat luotettaviksi päivittäisessä käytössä. Myös loppukäyttäjät, opettajat mukaan lukien, osallistuivat suoraan hyväksymistestaukseen, mikä auttoi varmistamaan, että alusta sopii siihen, miten opetustyö käytännössä tehdään. Alusta otettiin käyttöön vasta keväällä 2026, ja laajempi käyttöönotto kouluissa tapahtuu tänä syksynä, joten täysi vaikutus on vielä edessä. Toistaiseksi tiedämme, että olemme toimittaneet yhtenäisen, saavutettavan perustan, jonka varaan useat kunnat rakentavat nyt päivittäistä koulunhallintoaan.",
  impactCards: [
    {
      number: "01",
      title: "Selkeämmät ja käytettävämmät käyttöliittymät",
      body: "Korvasimme monimutkaiset, vanhentuneet järjestelmät käyttöliittymillä, jotka ovat aidosti helpommin ymmärrettäviä ja käytettäviä niin opettajille, hallintohenkilöstölle, huoltajille kuin oppilaillekin. Ne on rakennettu todellisten käyttäjätarpeiden pohjalta vanhan järjestelmälogiikan sijaan.",
    },
    {
      number: "02",
      title: "Mobiilikokemus, joka oikeasti toimii",
      body: "Vanhoissa järjestelmissä oli mobiilisovelluksia, mutta ne olivat usein sekavia ja ärsyttäviä käyttää. Monelle huoltajalle ja oppilaalle tämä voi olla ensimmäinen kerta, kun kouluasioiden hoitaminen puhelimella tuntuu oikeasti helpolta eikä rasitteelta.",
    },
    {
      number: "03",
      title: "Yksi yhtenäinen kokemus, monta toimittajaa",
      body: "Vaikka useat kehitystiimit ja kolmansien osapuolten alustat työskentelivät rinnakkain, toimitimme kokemuksen, joka näyttää ja käyttäytyy yhdenmukaisesti. Tämä on tässä mittakaavassa todella vaikea saavuttaa.",
    },
  ],

  howItStarted: [
    "Projekti alkoi kolmen suunnittelijan tiimillä (kaksi UX-suunnittelijaa ja yksi palvelumuotoilija), joka veti jäsenneltyjä työpajoja osana kartoitusvaihetta. Työpajat perustuivat kolmivaiheiseen tutkimusmalliin, joka on lähellä Double Diamond -menetelmää. Ensin kartoitimme nykytilan ja olemassa olevat kipupisteet. Toiseksi tutkimme, miltä ihanteellinen tulevaisuuden palvelu voisi näyttää. Kolmanneksi suunnittelimme konkreettisia konsepteja yhdessä sidosryhmien kanssa aiempien vaiheiden oivalluksiin ja luonnoksiin tukeutuen. Tutkimus tuotti laajan aineiston, josta tuli perusta sitä seuranneelle palvelumuotoilulle ja kehitykselle.",
    "Tiimissä vastasin ensisijaisesti visuaalisesta suunnittelusta: tein konseptit ja mallit ja huolehdin siitä, että työn laatu pysyi hyvänä koko matkan. Ehdotin kolmivaiheista työpajamallia ja vedin sitä yhdessä muiden suunnittelijoiden ja tuoteomistajan kanssa. Myöhemmin vedin lisätyöpajoja aina, kun niitä tarvittiin suunnitellessani vastuullani olleita palvelun osia.",
  ],

  challenges: [
    {
      number: "01",
      title: "Suunnittelun yhtenäisyyden varmistaminen monessa tiimissä",
      body: "Tässä suuressa projektissa työskenteli kerrallaan vain yhdestä kolmeen suunnittelijaa. Tehtäväni oli varmistaa, että jokainen kehitystiimi käytti samaa visuaalista tyyliä ja samoja uudelleenkäytettäviä rakennuspalikoita sen sijaan, että kukin tekisi omaansa. Yhtä tärkeää oli varmistaa, että tiimit ymmärsivät, miksi jokin rakennetaan tietyllä tavalla, eikä vain sitä, miltä sen pitäisi näyttää. Pidimme säännöllisiä tapaamisia kehittäjien kanssa, joissa selitimme päätösten perusteluja ja kuuntelimme myös heidän ideoitaan.",
    },
    {
      number: "02",
      title: "Suunnittelusta oikeaksi tuotteeksi",
      body: "Tein tiivistä yhteistyötä kehitystiimien kanssa varmistaakseni, että suunnitelmamme todella rakennettiin tarkoitetulla tavalla. Projektin viimeisenä vuotena Lead Designerina vastasin siitä, että kaikki näytti ja toimi yhdenmukaisesti koko alustalla, myös ulkopuolisten yritysten rakentamissa osissa, joiden mukauttaminen osoittautui odotettua vaikeammaksi.",
    },
    {
      number: "03",
      title: "Budjettipaineet ja luottamuksen uudelleenrakentaminen",
      body: "Jossain vaiheessa projekti ylitti budjettinsa, ja kaksi kuntaa vetäytyi, koska jatkaminen kävi niille liian kalliiksi. Luottamus kärsi sekä sidosryhmien kesken että tiimien sisällä. Rakensimme sitä uudelleen pysymällä näkyvillä oikeissa palavereissa, kertomalla selkeästi, mitä teimme ja miksi, ja kirjaamalla päätökset ylös, jotta kaikki pystyivät seuraamaan perusteluja. Jälkikäteen suunnittelutyön huolellisempi suunnittelu aivan alusta alkaen olisi voinut estää osan tästä kitkasta. Takaiskuista huolimatta alusta otettiin käyttöön jäljellä olevissa viidessä kunnassa keväällä 2026, ja laajempaa käyttöönottoa kouluissa suunnitellaan tälle syksylle.",
    },
  ],

  whatIWouldDoDifferently: [
    "Selkeämpi viestintä ja suunnittelu heti alusta. Varmistaisin, että kehitystiimi ymmärtää heti alusta alkaen, ei vain mitä rakennamme, vaan myös miksi.",
    "Onnistumisen mittarit määriteltyinä aiemmin. Jos olisimme alusta asti tienneet, mitä halusimme saavuttaa ja miten sitä mitattaisiin, priorisointi olisi ollut helpompaa koko projektin ajan. Yksi konkreettinen esimerkki, jonka projektin tekninen projektipäällikkö ehdotti jälkikäteen, olisi ollut lainmukaisuuden seuranta suoraan: mitkä sääntelyvaatimukset täyttyivät jo ja mitkä eivät vielä, varsinaisena mittarina koko projektin ajan.",
    "Jäsennellympi suunnittelujärjestelmä alusta asti. Tämä oli vuosi 2021, ja vaikka suunnittelujärjestelmät olivat tunnettu käsite, sellaisen toteuttaminen kokonaan koodiin tässä mittakaavassa ei ollut vielä yleistä. Jos voisin palata ajassa taaksepäin, ajaisin tuon perustan rakentamista määrätietoisemmin heti alusta.",
    "Juridisen ja sääntelyosaamisen mukaan ottaminen aiemmin. Suunnittelujärjestelmän ohella projekti olisi hyötynyt juridisen tai sääntelyasiantuntijan mukaantulosta heti alusta, jotta tietosuoja-asetus (GDPR) ja perusopetuslainsäädäntö olisi huomioitu ajoissa. Useat ominaisuuspyynnöt perustuivat siihen, miten edellinen järjestelmä toimi, ilman että ymmärrettiin, ettei osa siitä ollut enää lain mukaan sallittua.",
    "Ensimmäisen julkaisun käsitteleminen aidosti minimituotteena (MVP). Käytännössä emme rakentaneet minimituotetta eli pienintä julkaisemisen arvoista versiota. Rakensimme jotain lopullista tuotetta lähempänä, joka yritti kattaa kaikki tarpeet heti alusta, ja sillä oli todellinen vaikutus sekä aikatauluun että työmäärään.",
    "Päivittäisissä keskusteluissa mukana oleminen aiemmin. Meillä oli säännölliset päivittäiset ja viikoittaiset palaverit, ja tuo rytmi oli oikea, mutta aliarvioin alussa, kuinka paljon arvoa syntyi siitä, että oli jatkuvasti läsnä noissa keskusteluissa.",
    "Suunnittelijan mukaan ottaminen aiemmin kolmansien osapuolten ratkaisuja arvioitaessa. Kun hankitaan valmiita alustoja, suunnittelijan tekemä räätälöintimahdollisuuksien arviointi etukäteen olisi auttanut välttämään myöhemmin eteen tulleita vaikeita kompromisseja.",
  ],

  methods: [
    "Käyttäjähaastattelut",
    "Yhteissuunnittelun työpajat",
    "Käytettävyystestaus",
    "Kartoittava tutkimus",
    "Asiakaspolkujen kartoitus",
  ],
};
