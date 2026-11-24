import { educationPlatform as en, processShots } from "../education-platform";
import type { CaseStudy, GalleryImage } from "../types";
import { localizeGallery } from "./helpers";

const gallery = localizeGallery(en.gallery, [
  { alt: "Opettajan etusivu, konsepti", caption: "Opettajan etusivu, konsepti" },
  { alt: "Opettajan etusivu mobiililaitteella, konsepti", caption: "Etusivu mobiilissa, konsepti" },
  { alt: "Oppilashallinnon tarkempi näkymä", caption: "Oppilaan tiedot" },
  { alt: "Lukujärjestys ja kurssitarjonta", caption: "Lukujärjestys" },
  { alt: "Lukujärjestys ja kurssitarjonta, valintojen muokkaus", caption: "Valintojen muokkaus" },
  { alt: "Oppilashallinnon tiedot, mobiili", caption: "Mobiilinäkymä: tiedot" },
  { alt: "Oppilaan välilehtivalikko, mobiili", caption: "Mobiilivalikko" },
]);

const processFi = localizeGallery(processShots, [
  {
    alt: "Oppilaaksioton luonnos valkotaululla: miten oppijatunnus, huoltajan lomake, oppijan profiili ja päätös liittyvät toisiinsa",
    caption: "Oppilaaksiottoprosessi käytiin läpi ennen suunnittelua",
  },
  {
    alt: "Retropäivän kollaasi: tiimin lupaukset taululla, post-it-laput tärkeyden ja vaikutuksen mukaan, Lego-rakennelma ja lehtileikekollaasi",
    caption: "Retropäivä",
  },
  {
    alt: "Kehitystiimin lähipäivän kollaasi: prosessikaavio, Jiran eepos, käyttötapaustaulukko ja käsin piirretyt luonnokset",
    caption: "Prosessit, eepokset, käyttötapaukset",
  },
  {
    alt: "Toimintatapatyöpajan kollaasi: post-it-lappujen kirjoittamista, koulusanasto ja koulupäivästä tehty lautapeli",
    caption: "Yhteinen päämäärä, yhteinen kieli",
  },
]);

function shot(file: string): GalleryImage {
  const image = [...gallery, ...processFi].find((g) => g.src === `/case/${file}`);
  if (!image) throw new Error(`education-platform (fi): no gallery image ${file}`);
  return image;
}

export const educationPlatformFi: CaseStudy = {
  slug: "education-platform",
  title: "Kuntien opetusjärjestelmä",
  cardTitle: "Kuntien opetus\u00adjärjestelmä",
  label: "KUNTIEN OPETUSJÄRJESTELMÄ · 2021–2024",
  headline: "Seitsemän kunnan koulujärjestelmät yhdeksi palveluksi",
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
      "Pilottikoulujen palaute oli erittäin myönteistä: opettajat ja hallintohenkilöstö kiittivät alustan helppokäyttöisyyttä, nopeutta ja johdonmukaista rakennetta. Alusta otettiin käyttöön viidessä kunnassa keväällä 2026, ja laajempi käyttöönotto kouluverkostossa alkoi syksyllä 2026.",
  },
  roleLabel: "UX- ja tuotesuunnittelija, myöhemmin Lead Designer, kolmen vuoden ajan",
  focusLabel:
    "Palvelumuotoilu, Design Systemit ja suunnittelun yhtenäisyys tiimien välillä usean toimittajan julkisen sektorin alustalla",
  skillTags: [
    {
      label: "Palvelumuotoilu",
      description: "Kartoitin monimutkaiset koulun työnkulut yhdeksi selkeäksi kokemukseksi",
    },
    {
      label: "Design Systemin johtaminen",
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

  gallery,
  sneakPeekImages: en.sneakPeekImages,

  impactIntro:
    "Pilottikoulujen palaute on ollut pääosin myönteistä. Alustaa on kuvattu helppokäyttöiseksi, monipuoliseksi ja moderniksi. Erityisesti opettajat ja hallintohenkilöstö kiittelivät sitä, kuinka johdonmukaiselta palvelu tuntuu ja kuinka hyvin se tukee koulun arjen rutiineja. Käytettävyys ja nopeus nousivat erityisesti esiin: käyttäjien mukaan tarvittavan löytäminen onnistui nopeasti ja helposti. Käytännön tehtävät, kuten todistusten tulostus ja oppilastietojen siirto, osoittautuivat luotettaviksi päivittäisessä käytössä. Myös loppukäyttäjät, opettajat mukaan lukien, osallistuivat suoraan hyväksymistestaukseen, joten alusta sopii siihen, miten opetustyötä oikeasti tehdään. Alusta otettiin käyttöön vasta keväällä 2026, ja laajempi käyttöönotto kouluissa alkoi syksyllä 2026, joten täysi vaikutus on vielä edessä. Toistaiseksi tiedämme, että tuloksena on yhtenäinen ja saavutettava perusta, jonka varaan useat kunnat rakentavat nyt päivittäistä koulunhallintoaan.",
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
    "Jäsennellympi Design System alusta asti. Vuosi oli 2021, ja vaikka Design Systemit olivat jo tuttu käsite, sellaisen toteuttaminen kokonaan koodiin tässä mittakaavassa ei ollut vielä yleistä. Jos voisin palata ajassa taaksepäin, ajaisin tuon perustan rakentamista määrätietoisemmin heti alusta.",
    "Juridisen ja sääntelyosaamisen mukaan ottaminen aiemmin. Design Systemin lisäksi projekti olisi hyötynyt juridisen tai sääntelyasiantuntijan mukaantulosta heti alusta, jotta tietosuoja-asetus (GDPR) ja perusopetuslainsäädäntö olisi huomioitu ajoissa. Moni ominaisuustoive perustui siihen, miten edellinen järjestelmä toimi, ja osa niistä ei enää ollut lain mukaan sallittuja.",
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

  categoryTag: "Julkisen sektorin koulutusjärjestelmä",
  story: {
    facts: [
      { label: "Rooli", value: ["UX- ja tuotesuunnittelija", "Myöhemmin Lead Designer"] },
      { label: "Aikajänne", value: ["2021–2024, kolme vuotta"] },
      {
        label: "Tiimi",
        value: [
          "Kolme tiimiä (opetus, hallinto ja asiointipalvelu)",
          "Jokaisessa oma tuoteomistaja ja kehittäjät",
          "Minä suunnittelijana kaikissa kolmessa",
          "Palvelumuotoilija mukana 2021–2023, toinen suunnittelija 2021–2022",
          "Toteutusta johti tekninen kehityspäällikkö",
        ],
      },
      {
        label: "Menetelmät",
        value: ["Yhteiskehittämisen työpajat", "Käyttäjähaastattelut", "Asiakaspolkujen kartoitus", "Käytettävyys- ja hyväksymistestaus"],
      },
      {
        label: "Mitä tein",
        wide: true,
        value: [
          "Fasilitoin työpajoja ja tein käyttäjähaastatteluja",
          "Suunnittelin Design Systemin UI Kitin",
          "Suunnittelin hallintopalvelun käyttöliittymät",
          "Pidin visuaalisen ilmeen ja käyttökokemuksen yhtenäisenä",
          "Vastasin saavutettavuudesta ja autoin järjestämään auditoinnit",
          "Pidin suunnitelmat ajan tasalla ja autoin määrittelemään Jira-tiketit",
        ],
      },
    ],
    heroImage: { src: "/case/edu-hero-bundle.png", alt: "Kaksi alustan näkymää: lukujärjestys ja kurssitarjotin tietokoneella sekä oppilaan tiedot hallinnon palvelussa mobiililaitteella", caption: "", width: 1241, height: 1008 },
    heroBundle: true,
    tldr: [
      "Seitsemän kuntaa tarvitsi yhden järjestelmän perusopetuksen ja lukion vanhentuneiden työkalujen tilalle. Kolmen vuoden aikana kasvoin UX- ja tuotesuunnittelijasta **Lead Designeriksi** ja pidin huolen siitä, että usean tiimin ja toimittajan rakentama alusta näyttää ja toimii yhtenä tuotteena.",
      "Alusta otettiin käyttöön **viidessä kunnassa syksyllä 2026**. Pilottikoulut kuvaavat alustaa helppokäyttöiseksi, nopeaksi ja johdonmukaiseksi.",
    ],
    background: {
      heading: "Seitsemän kuntaa, kaksi koulumaailmaa",
      paragraphs: [
        "Julkisen sektorin konsortio lähti korvaamaan järjestelmiä, joilla kunnat pyörittävät koulujensa arkea: lukujärjestyksiä, oppilastietoja, poissaoloja ja arviointia. Uuden alustan piti palvella sekä peruskouluja että lukioita, joilla on omat prosessinsa ja sääntönsä.",
        "Alusta koostuu mikropalveluista: koulun henkilöstön opetus- ja hallintopalvelusta sekä huoltajien asiointipalvelusta, jossa hoidetaan esimerkiksi kouluun ilmoittautuminen. Lisäksi alustaan kuuluu viestintäpalvelu. Niitä rakensi rinnakkain useampi kehitystiimi ja kolmannen osapuolen toimittaja. Käyttäjiä ovat opettajat ja hallintohenkilöstö sekä huoltajat ja oppilaat, niin tietokoneella kuin mobiililaitteella.",
      ],
    },
    problem: {
      heading: "Monta rakentajaa, yksi tuote",
      statement:
        "Seitsemän kunnan hajanaiset koulujärjestelmät piti koota yhdeksi turvalliseksi tuotteeksi, jota rakensi moni toimittaja.",
      paragraphs: [
        "Vanhat järjestelmät noudattivat vanhaa logiikkaa. Osa toiveista oli suoria kopioita siitä, miten edellinen järjestelmä toimi, eikä kaikki siitä ollut enää edes lainmukaista. Uusi alusta piti rakentaa sen ympärille, miten kouluissa tänään oikeasti työskennellään. Kaikki rakennettiin uudelleen: vanhasta otettiin talteen se, mikä toimi, ja huonosti toimivat prosessit mietittiin uusiksi.",
      ],
      constraints: [
        "**Kaksi koulumaailmaa:** peruskoulun ja lukion prosessit ja vaatimukset eroavat, ja molempien piti toimia samassa alustassa.",
        "**Monta rakentajaa:** useampi kehitystiimi ja kolmannen osapuolen alusta työskentelivät rinnakkain, ja suunnittelijoita oli kerrallaan vain 1–3.",
        "**Monta ääntä:** seitsemän kuntaa omine työtapoineen sekä pitkä lista sidosryhmiä ja käyttäjäryhmiä.",
        "**Laki, tietosuoja ja saavutettavuus:** GDPR ja opetusta koskeva lainsäädäntö asettivat tiukat rajat sille, mitä järjestelmä sai tehdä. Julkisen sektorin palveluna sen piti myös täyttää saavutettavuusvaatimukset, jotta jokainen opettaja, huoltaja ja oppilas pystyy käyttämään sitä.",
      ],
      closingLabel: "Kun budjetti ylittyi",
      closing: [
        "Kesken projektin budjetti ylittyi, ja kaksi kuntaa vetäytyi, koska jatkaminen kävi niille liian kalliiksi. Luottamus kärsi sekä sidosryhmissä että tiimien sisällä.",
        "Otin aktiivisen roolin suunnittelutyön edistymisen ja arvon näyttämisessä. Olin läsnä oikeissa palavereissa, kerroin mitä teimme ja miksi, ja kirjasin päätökset ylös, jotta kuka tahansa pystyi seuraamaan perusteluja. Tämä selkeytti yhteistyötä ja piti hankkeen liikkeellä.",
      ],
    },
    process: {
      heading: "Tutkimuksesta toteutukseen",
      steps: [
        {
          title: "Tutkimus koulujen arjesta",
          paragraphs: [
            "Menetelmä riippui siitä, kuinka laajasta kokonaisuudesta oli kyse. Uusissa ja laajoissa kokonaisuuksissa käytimme kolmivaiheista työpajamallia, jota ehdotin ja fasilitoin yhdessä muiden suunnittelijoiden ja tuoteomistajan kanssa. Ensin kartoitimme nykyiset kipupisteet, sitten määrittelimme ihannetilanteen ja lopuksi suunnittelimme konkreettiset konseptit yhdessä sidosryhmien kanssa. Lukioilla oli oma työryhmänsä, jossa olivat mukana kuntien edustajat.",
            "Pienemmissä konsepteissa riitti muutama käyttäjähaastattelu ja co-design-tilaisuus, joihin otin mukaan 1–2 loppukäyttäjää kustakin kunnasta. Kaikkiaan fasilitoin kymmenkunta työpajaa, ja aina kun vastuullani oleva osuus vaati syvempää ymmärrystä, haastattelin käyttäjiä nopeasti ja kevyesti.",
            "Suurin osa työstä tehtiin etänä, joten järjestimme myös lähipäiviä, jotka suunnittelimme ja fasilitoimme yhdessä. Ne lähensivät tiimiä ja tekivät yhteistyöstä sujuvampaa. Retropäivänä arvioimme, mitä olimme saaneet aikaan ja mihin suuntaan työtä kannattaa viedä. Kehitystiimin lähipäivinä tarkensimme yhdessä prosessikuvauksia, käyttäjätarinoita, eepoksia, tietomalleja ja käyttöliittymiä.",
            "Teimme toimintatavoista konkreettisia myös leikin kautta. Legot, kollaasit ja koulupäivästä tehty lautapeli auttoivat kirkastamaan päämäärää, hiomaan työtapoja ja rakentamaan yhteisen sanaston koulun käsitteille. Näiden päivien jälkeen tiimikaverit eivät tuntuneet enää etäisiltä. Kirkastimme myös tiimin työtapoja eli sitä, miten tieto kulkee suunnittelun ja kehityksen välillä ja miten työtä voisi jatkossa sujuvoittaa.",
          ],
          figures: [shot("edu-process-retro.jpg"), shot("edu-process-devday.jpg"), shot("edu-process-culture.jpg")],
        },
        {
          title: "Prosessit auki ennen näkymiä",
          paragraphs: [
            "Ennen näkymiä piirsimme prosessit auki. Periaatteemme oli, että jos prosessia ei pysty piirtämään, se on vielä epäselvä. Oppilaaksiottoa suunnitellessa otin yhteyttä kouluissa oppilaaksiottoa hoitaviin opintosihteereihin, ja piirsimme auki, miten oppijan tunnus, huoltajan hakemus, oppijan profiili ja oppilaaksiottopäätös liittyvät toisiinsa.",
            "Samalla tarkistimme tekniset reunaehdot ja sovitimme ne yhteen käyttäjäpolkujen kanssa. Kun jokin jäi epäselväksi, palasimme käyttäjien ja kehittäjien luo, tarkensimme ja piirsimme uudelleen, kunnes käyttäjien tarpeet ja järjestelmän vaatimukset sopivat yhteen. Vasta sitten suunnittelin näkymät.",
          ],
          figures: [shot("edu-process-admission.jpg"), shot("edu-detail.png")],
        },
        {
          title: "Yksi visuaalinen kieli kaikille palveluille",
          paragraphs: [
            "Työskentelin sekä opetus- ja hallintopalvelun että huoltajien asiointipalvelun parissa ja varmistin, että niillä on yhtenäinen visuaalinen ilme ja käyttökokemus. Kun suunnittelijoita oli vähän ja tiimejä paljon, en voinut tarkistaa jokaista näkymää. Sen sijaan määrittelin yhteisen visuaalisen linjan ja uudelleenkäytettävien komponenttien UI Kitin, ja myöhemmin johdin hankkeen visuaalista linjaa.",
            "Yhtenäisyys ei ollut pelkkää ulkonäköä. Tein tiivistä yhteistyötä kehittäjien kanssa. Kerroin säännöllisesti, miksi jokin rakennetaan tietyllä tavalla, kuuntelin heidän ideoitaan ja selvitin kunkin osan tekniset reunaehdot. Sovelluskehityksen AMK-tutkintoni ansiosta ymmärsin toteutuksen haasteet ja pystyin keskustelemaan niistä kehittäjien kanssa suoraan.",
            "Sama koski mobiililaitteita. Huoltajat ja oppilaat olivat kokeneet vanhat mobiilisovellukset usein sekaviksi, joten mobiilinäkymissä on sama rakenne ja samat komponentit kuin tietokoneella, ja asiat löytyvät odotetusta paikasta näytöstä riippumatta.",
            "Julkisen sektorin palvelun on oltava saavutettava, joten saavutettavuus kulki mukana koko suunnittelun ajan eikä jäänyt viimeiseksi tarkistukseksi. Varmistin, että saavutettavuusvaatimukset oli kirjattu kehittäjien tiketteihin, jotta ne toteutettiin osana jokaista ominaisuutta.",
          ],
          figures: [
            [shot("edu-timetable.png"), shot("edu-timetable-edit.png")],
            [shot("edu-mobile-dashboard.png"), shot("edu-mobile-menu.png"), shot("edu-mobile-detail.png")],
          ],
        },
        {
          title: "Testaus ja iterointi",
          paragraphs: [
            "Testasin näkymiä käyttäjillä, osan yhdessä palvelumuotoilijan kanssa ja osan itsenäisesti. Iteroin suunnitelmia havaintojen pohjalta ja testasin ne uudelleen ennen kuin ne siirtyivät kehitykseen.",
            "Autoin myös järjestämään kaksi ulkoisen toimijan tekemää saavutettavuusauditointia. Ensimmäisessä tarkistettiin käyttäjäpolut ja visuaalinen ilme, toisessa tekninen toteutus.",
          ],
          flowLabel: "Testaussykli",
          flow: ["Testaus käyttäjillä", "Iterointi havaintojen pohjalta", "Uusi testaus", "Kehitykseen"],
        },
        {
          title: "Luovutus ja jälkiseuranta",
          paragraphs: [
            "Luovutin suunnitelmat kehittäjille ja autoin määrittelemään toteutustiketit Jirassa. Huolehdin, että kehitystiimillä oli aina ajantasaiset suunnitelmat, ja seurasin toteutusta loppuun asti.",
            "Viimeisenä vuotenani Lead Designerina vastasin siitä, että koko alusta näyttää ja toimii johdonmukaisesti, myös kolmannen osapuolen alustoille rakennetut osat. Niiden muokkaaminen osoittautui odotettua vaikeammaksi. Värien ja logon avulla saimme ne kuitenkin sovitettua niin, ettei palvelu tuntunut irralliselta.",
          ],
        },
      ],
    },
    shipped: {
      eyebrow: "Esimerkki konseptityöstä",
      heading: "Opettajan etusivu",
      paragraphs: [
        "Työpajoissa toistui sama toive. Opettajat kaipasivat selkeää etusivua, joka kokoaisi kaiken heidän työnsä kannalta olennaisen yhteen paikkaan. Lähdin hahmottelemaan konseptia omasta aloitteestani.",
        "Ennen kuin piirsin mitään, pohdin muutamaa kysymystä opettajan työpäivästä. Sen jälkeen piirsin näkymän auki ja hain vastaukset kysymyksiin.",
        "Tarkoitukseni oli viedä konseptia eteenpäin, kun se tulisi ajankohtaiseksi, mutta projektini päättyi ennen sitä. Konseptia ei siis julkaistu sellaisenaan.",
      ],
      listLabel: "Kysymyksistä suunnittelupäätöksiksi",
      qa: [
        {
          question: "Mitä opettaja tarvitsee työssään eniten?",
          answers: [
            {
              title: "Päivän lukujärjestys tilamerkinnöin",
              body: "Opettaja näkee yhdellä silmäyksellä, millä tunneilla läsnäolo on jo kirjattu ja mistä se vielä puuttuu.",
            },
            {
              title: "Huomiota tarvitsevat oppilaat",
              body: "Poissaolot ja opinnoissa jälkeen jääminen näkyvät ajoissa, joten opettaja voi puuttua niihin ennen kuin tilanne pahenee.",
            },
          ],
        },
        {
          question: "Miten näkymä tukee siirtymää tunnilta toiselle?",
          answers: [
            {
              title: "Seuraava oppitunti ja läsnäolon kirjaus ylimpänä",
              body: "Tunnin alussa tehtävä kirjaus onnistuu yhdellä painalluksella.",
            },
          ],
        },
        {
          question: "Missä tilanteissa opettaja avaa näkymän?",
          answers: [
            {
              title: "Pikalinkit",
              body: "Yleisimpiin tehtäviin, kuten opintosuunnitteluun, tukitoimiin, arviointeihin ja huoltajien viesteihin, pääsee suoraan ilman valikoita.",
            },
          ],
        },
        {
          question: "Millä laitteella opettaja tulee sivulle?",
          answers: [
            {
              title: "Sama rakenne mobiililaitteella",
              body: "Opettaja ei ole aina tietokoneen ääressä, joten näkymän piti toimia myös mobiililaitteella.",
            },
          ],
        },
      ],
      closing: [
        "**Mitä tekisin nyt toisin:** Erottaisin lukujärjestyksen ja tapahtumat selkeämmin toisistaan ja antaisin Tapahtumat-osiolle tarkemman käyttötarpeen, esimerkiksi tulevat kokeet, jotta opettaja näkee heti, milloin kokeita on tulossa. Ennen kaikkea tekisin perusteellisemman käyttäjätutkimuksen, sillä konsepti perustui kevyisiin käyttäjähaastatteluihin ja muista työpajoista tehtyihin havaintoihin.",
      ],
      figures: [shot("edu-dashboard.png"), shot("edu-mobile-dashboard.png")],
    },
    impact: {
      heading: "Käytössä viidessä kunnassa",
      intro: [
        "Vuoden 2024 pilotoinneissa alustaa testasi eri puolilla Suomea yhteensä 350 tulevaa käyttäjää. Alkuvuonna 2026 kymmenet käyttäjät eri rooleista, myös opettajat, testasivat hyväksymistestauksessa kokonaisia, useita palveluita yhdistäviä prosesseja. Koska MVP:tä ei julkaistu, emme päässeet testaamaan alustaa oikeassa käytössä riittävän aikaisin, eikä mitattavia tavoitteita voitu asettaa. Palaan tähän opeissani.",
        "Pilotoijien mukaan alusta on helppokäyttöinen, monipuolinen ja moderni. Palvelun koettiin olevan helppo oppia, ja se toimii loogisesti ja yksinkertaisesti. Erityisesti käyttöliittymän selkeyttä ja raikasta ulkoasua kiitettiin. Arjen tehtävät, kuten todistusten tulostus ja oppilastietojen siirto, toimivat luotettavasti päivittäisessä käytössä.",
        "Pilotointi toi myös runsaasti kehitysideoita. Käyttäjät löysivät kohtia, joissa he toimivat eri tavalla kuin oli oletettu, ja niiden pohjalta koottiin tarkistuslista ennen käyttöönottoa.",
        "Alusta siirtyi tuotantokäyttöön pilottikouluissa keväällä 2026. Pilottikoulujen oppilaat saivat ensimmäiset alustalla tuotetut lukuvuositodistukset, ja myös huoltajat ottivat palvelun käyttöön. Lukuvuonna 2026–2027 käyttö laajenee perusopetuksen kouluihin viidessä kunnassa, joten koko vaikutus näkyy vasta myöhemmin.",
        "Kunnille yhteinen alusta tarkoittaa, ettei jokaisen tarvitse hankkia ja ylläpitää omia erillisiä järjestelmiään. Tietoturva hoidetaan yhdessä paikassa, ja yhteisen UI-kitin ansiosta eri toimittajat eivät rakenna samoja osia uudelleen.",
      ],
      highlights: [
        { value: "8+", label: "käyttäjäryhmää kunnan virkahenkilöistä rehtoreihin, opettajiin, oppijoihin ja huoltajiin" },
        { value: "5", label: "kuntaa ottaa alustan käyttöön lukuvuonna 2026–2027" },
        { value: "~100 000", label: "oppijaa viidessä kunnassa" },
      ],
    },
    reflections: {
      heading: "Mitä tekisin toisin",
      items: [
        {
          title: "Oikea MVP",
          body: "Emme rakentaneet pienintä julkaisemisen arvoista versiota, vaan lähes valmista tuotetta, joka yritti kattaa kaikki tarpeet heti alusta. Se näkyi sekä aikataulussa että työmäärässä. Julkaistu MVP olisi tuonut oikeat käyttäjät mukaan aikaisemmin, ja sen avulla olisi voitu asettaa mittarit ja seurata, miten kehitys etenee ajan myötä.",
        },
        {
          title: "Mittarit ensimmäisestä päivästä",
          body: "Jos olisimme alusta asti tienneet, mitä tavoittelemme ja miten sitä mitataan, priorisointi olisi ollut helpompaa. Julkaistussa MVP:ssä olisimme voineet mitata esimerkiksi tehtävien onnistumisprosenttia (Task Success Rate) ja suppiloanalyysilla sitä, missä vaiheessa käyttäjät keskeyttävät monivaiheisen prosessin, kuten oppilaaksioton. Yhdessä ne olisivat näyttäneet, missä ja miksi käyttäjät epäonnistuvat. Mittareista olisi ollut hyötyä myös silloin, kun kuntien luottamusta piti rakentaa uudelleen, sillä luvut tekevät suunnittelun arvon näkyväksi päättäjille. Tekninen projektipäällikkö ehdotti jälkikäteen myös lainmukaisuuden seuraamista mittarina, eli sitä, mitkä vaatimukset on jo täytetty ja mitkä eivät vielä.",
        },
        {
          title: "Juridiikka mukaan heti",
          body: "Osa toiveista kopioi vanhaa järjestelmää, eikä kaikki siitä ollut enää lainmukaista. Jos GDPR:n ja opetuslainsäädännön asiantuntija olisi ollut mukana heti alusta, olisin voinut suunnitella näkymät lakivaatimukset huomioiden ensimmäisestä luonnoksesta lähtien. Nyt osa näkymistä jouduttiin suunnittelemaan uudelleen, kun vaatimukset selvisivät myöhemmin.",
        },
        {
          title: "Design System -työlle omistaja ja resurssit",
          body: "Komponentit perustuivat Chakra-kirjastoon ja ne oli koottu Storybookiin, mutta useampi tiimi ja toimittaja koodasi silti samoja komponentteja uudelleen. Kun rakentajia on monta, pelkkä kirjasto ei riitä. Jonkun pitää vastata siitä, että olemassa olevia komponentteja käytetään. Projektin edetessä varmistin itse, että kehittäjät käyttivät jo koodattuja komponentteja, kuten painikkeita. Nyt vaatisin alusta asti, että Design Systemillä on nimetty omistaja ja aikaa myös DesignOpsin kehittämiseen.",
        },
        {
          title: "Suunnittelija mukaan toimittajavalintaan",
          body: "Kun valmiita alustoja kilpailutetaan, suunnittelijan pitäisi olla mukana arvioimassa, istuuko palvelu joustavasti alustan visuaaliseen ilmeeseen ja käyttökokemukseen. Arvio kuuluu ennen päätöstä, ei vasta sen jälkeen. Se olisi säästänyt meidät myöhemmiltä vaikeilta kompromisseilta.",
        },
      ],
    },
  },
};
