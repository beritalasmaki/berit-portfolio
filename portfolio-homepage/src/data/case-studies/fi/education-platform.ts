import { educationPlatform as en, processShots } from "../education-platform";
import type { CaseStudy, GalleryImage } from "../types";
import { localizeGallery } from "./helpers";

const gallery = localizeGallery(en.gallery, [
  { alt: "Opettajan etusivu", caption: "Opettajan dashboard" },
  { alt: "Opettajan etusivu, mobiili", caption: "Dashboard mobiilissa" },
  { alt: "Oppilashallinnon tarkempi näkymä", caption: "Oppilaan tiedot" },
  { alt: "Lukujärjestys ja kurssitarjonta", caption: "Lukujärjestys" },
  { alt: "Lukujärjestys ja kurssitarjonta, valintojen muokkaus", caption: "Valintojen muokkaus" },
  { alt: "Oppilashallinnon tiedot, mobiili", caption: "Mobiilinäkymä: tiedot" },
  { alt: "Oppilaan välilehtivalikko, mobiili", caption: "Mobiilivalikko" },
]);

const processFi = localizeGallery(processShots, [
  {
    alt: "Oppilaaksioton luonnos valkotaululla: miten oppijatunnus, huoltajan lomake, oppijan profiili ja päätös liittyvät toisiinsa",
    caption: "Oppilaaksiotto piirrettiin ennen kuin suunniteltiin",
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
  label: "KUNTIEN OPETUSJÄRJESTELMÄ · 2021–2024",
  headline: "Monta tiimiä, monta järjestelmää.\nYksi yhtenäinen kokemus.",
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
  categoryTag: "Julkisen sektorin alusta",
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

  story: {
    facts: [
      { label: "Rooli", value: "UX- ja tuotesuunnittelija, myöhemmin Lead Designer" },
      { label: "Aikajänne", value: "2021–2024, kolme vuotta" },
      {
        label: "Tiimi",
        value:
          "Hallintopalvelussa tuoteomistaja, kaksi front end- ja yksi backend-kehittäjä, palvelumuotoilija ja minä. Koko hankkeen toteutusta johti tekninen kehityspäällikkö.",
      },
      {
        label: "Menetelmät",
        value: "Yhteiskehittämisen työpajat, käyttäjähaastattelut, asiakaspolkujen kartoitus, käytettävyys- ja hyväksymistestaus",
      },
    ],
    heroImage: shot("edu-dashboard.png"),
    tldr: [
      "Seitsemän kuntaa tarvitsi yhden järjestelmän perusopetuksen ja lukion vanhentuneiden työkalujen tilalle. Kolmen vuoden aikana kasvoin UX- ja tuotesuunnittelijasta **Lead Designeriksi** ja pidin huolen siitä, että usean tiimin ja toimittajan rakentama alusta näyttää ja toimii yhtenä tuotteena.",
      "Alusta otettiin käyttöön **viidessä kunnassa keväällä 2026**. Pilottikoulut kuvaavat sitä helppokäyttöiseksi, nopeaksi ja johdonmukaiseksi.",
    ],
    background: {
      heading: "Seitsemän kuntaa, kaksi koulumaailmaa",
      paragraphs: [
        "Julkisen sektorin konsortio lähti korvaamaan järjestelmiä, joilla kunnat pyörittävät koulujensa arkea: lukujärjestyksiä, oppilastietoja, poissaoloja ja arviointia. Uuden alustan piti palvella sekä peruskouluja että lukioita, joilla on omat prosessinsa ja sääntönsä.",
        "Alusta koostuu palveluista: koulun henkilöstön opetus- ja hallintopalvelusta sekä huoltajien asiointipalvelusta, jossa hoidetaan esimerkiksi kouluun ilmoittautuminen. Niitä rakensi rinnakkain useampi kehitystiimi ja kolmannen osapuolen toimittaja. Käyttäjiä ovat opettajat ja hallintohenkilöstö sekä huoltajat ja oppilaat, niin tietokoneella kuin puhelimella.",
      ],
    },
    problem: {
      heading: "Monta rakentajaa, yksi tuote",
      statement:
        "Seitsemän kunnan, kahden koulumuodon ja usean toimittajan piti päätyä yhteen järjestelmään, joka tuntuu yhdeltä tuotteelta.",
      paragraphs: [
        "Vanhat järjestelmät noudattivat vanhaa logiikkaa. Osa toiveista oli suoria kopioita siitä, miten edellinen järjestelmä toimi, eikä kaikki siitä ollut enää edes lainmukaista. Uusi alusta piti rakentaa sen ympärille, miten kouluissa tänään oikeasti työskennellään.",
      ],
      constraints: [
        "**Kaksi koulumaailmaa:** peruskoulun ja lukion prosessit ja vaatimukset eroavat, ja molempien piti toimia samassa alustassa.",
        "**Monta rakentajaa:** useampi kehitystiimi ja kolmannen osapuolen alusta työskentelivät rinnakkain, ja suunnittelijoita oli kerrallaan vain 1–3.",
        "**Monta ääntä:** seitsemän kuntaa omine työtapoineen sekä pitkä lista sidosryhmiä ja käyttäjäryhmiä.",
        "**Laki ja tietosuoja:** GDPR ja opetusta koskeva lainsäädäntö asettivat tiukat rajat sille, mitä järjestelmä sai tehdä.",
      ],
    },
    process: {
      heading: "Työpajoista yhteiseen visuaaliseen kieleen",
      steps: [
        {
          title: "Lähtökohtana se, miten koulut oikeasti toimivat",
          paragraphs: [
            "Ehdotin kolmivaiheista työpajamallia, joka on lähellä Double Diamond -mallia, ja vedin sitä yhdessä muiden suunnittelijoiden ja tuoteomistajan kanssa. Ensin kartoitimme nykyiset kipupisteet, sitten määrittelimme ihannetilanteen ja lopuksi suunnittelimme konkreettiset konseptit yhdessä sidosryhmien kanssa. Lukioilla oli oma työryhmänsä, jossa olivat mukana kuntien edustajat.",
            "Kaikkiaan vedin yli 10 työpajaa. Kun jokin vastuullani oleva osa palvelua vaati syvempää ymmärrystä, menin suoraan työn tekijöiden luo. Oppilaaksiottoa varten otin yhteyttä kouluissa oppilaaksiottoa hoitaviin opintosihteereihin. Sitten palasimme perinteisiin työvälineisiin: jos prosessia ei pysty piirtämään, se on vielä epäselvä. Ennen yhtäkään näkymää piirsimme, miten oppijan tunnus, huoltajan hakemus, oppijan profiili ja oppilaaksiottopäätös liittyvät toisiinsa.",
          ],
          figures: [shot("edu-process-admission.jpg"), shot("edu-detail.png")],
        },
        {
          title: "Tiimi samaan huoneeseen",
          paragraphs: [
            "Suurin osa työstä tehtiin etänä, jolloin tiimikaverit jäävät helposti nimiksi ruudulla. Lähipäivät muuttivat tämän. Suunnittelimme ja fasilitoimme ne yhdessä, minä vedin aina oman osuuteni, ja käytin niitä tiimin lähentämiseen. Retropäivänä katsoimme, mitä olimme saaneet aikaan ja mihin suuntaan työtä viedään. Kehitystiimin lähipäivinä tarkensimme yhdessä prosessikuvia, käyttäjätarinoita, eepoksia, tietomalleja ja käyttöliittymiä, ja purimme etätyössä kertyvää kuormaa tunnetoriharjoituksella.",
            "Teimme toimintatavoista konkreettisia myös leikin kautta. Legot, kollaasit ja koulupäivästä tehty lautapeli auttoivat kirkastamaan päämäärää, hiomaan työtapoja ja rakentamaan yhteisen sanaston koulun käsitteille. Näiden päivien jälkeen tiimikaverit eivät tuntuneet enää etäisiltä, ja sovimme, miten työpajoja vedetään paremmin.",
          ],
          figures: [shot("edu-process-retro.jpg"), shot("edu-process-devday.jpg"), shot("edu-process-culture.jpg")],
        },
        {
          title: "Yksi visuaalinen kieli kaikille palveluille",
          paragraphs: [
            "Työskentelin sekä opetus- ja hallintopalvelun että huoltajien asiointipalvelun parissa ja varmistin, että niillä on yhtenäinen visuaalinen ilme ja käyttökokemus. Kun suunnittelijoita oli vähän ja tiimejä paljon, en voinut tarkistaa jokaista näkymää. Sen sijaan määrittelin yhteisen visuaalisen linjan ja uudelleenkäytettävien komponenttien UI Kitin, ja myöhemmin johdin visuaalista linjaa kolmen suunnittelijan tiimissä.",
            "Yhtenäisyys ei ollut pelkkää ulkonäköä. Säännöllisissä tapaamisissa kehittäjien kanssa kerroin, miksi jokin rakennetaan tietyllä tavalla, ja kuuntelin heidän ideoitaan. Näin oikeasta ratkaisusta tuli helppo ratkaisu silloinkin, kun suunnittelija ei ollut paikalla.",
            "Viimeisenä vuotenani Lead Designerina vastasin siitä, että koko alusta näyttää ja toimii johdonmukaisesti, myös kolmannen osapuolen alustoille rakennetut osat. Niiden muokkaaminen osoittautui odotettua vaikeammaksi.",
            "Sama koski puhelimia. Huoltajat ja oppilaat olivat kokeneet vanhat mobiilisovellukset usein sekaviksi, joten mobiilinäkymissä on sama rakenne ja samat komponentit kuin tietokoneella, ja asiat löytyvät odotetusta paikasta näytöstä riippumatta.",
          ],
          figures: [
            [shot("edu-timetable.png"), shot("edu-timetable-edit.png")],
            [shot("edu-mobile-dashboard.png"), shot("edu-mobile-menu.png"), shot("edu-mobile-detail.png")],
          ],
        },
        {
          title: "Luottamuksen palauttaminen budjetin ylittyessä",
          paragraphs: [
            "Kesken projektin budjetti ylittyi, ja kaksi kuntaa vetäytyi, koska jatkaminen kävi niille liian kalliiksi. Luottamus kärsi sekä sidosryhmissä että tiimien sisällä.",
            "Otin aktiivisen roolin suunnittelutyön edistymisen ja arvon näyttämisessä. Olin läsnä oikeissa palavereissa, kerroin mitä teimme ja miksi, ja kirjasin päätökset ylös, jotta kuka tahansa pystyi seuraamaan perusteluja. Tämä selkeytti yhteistyötä ja piti hankkeen liikkeellä.",
          ],
        },
      ],
    },
    shipped: {
      heading: "Alusta, josta opettaja hoitaa päivänsä",
      paragraphs: [
        "Opettajan etusivu kokoaa päivän yhteen: päivän lukujärjestyksen, tulevat tapahtumat, pikalinkit ja oppilaat, jotka tarvitsevat huomiota. Sama rakenne toimii myös puhelimessa.",
      ],
      figures: [shot("edu-dashboard.png"), shot("edu-mobile-dashboard.png")],
    },
    impact: {
      heading: "Käytössä viidessä kunnassa",
      intro: [
        "Näyttö on laadullista: pilottikoulujen palautetta ja hyväksymistestausta, jossa opettajat ja muut loppukäyttäjät testasivat alustaa itse. Emme määritelleet mitattavia onnistumisen mittareita alussa, ja se on yksi alla olevista opeistani.",
        "Opettajat ja hallintohenkilöstö kuvaavat alustaa helppokäyttöiseksi, monipuoliseksi ja moderniksi. Nopeus ja johdonmukaisuus toistuvat palautteessa: tarvittava löytyy nopeasti. Arjen tehtävät, kuten todistusten tulostus ja oppilastietojen siirto, ovat osoittautuneet luotettaviksi päivittäisessä käytössä.",
        "Alusta julkaistiin keväällä 2026, projektikauteni jälkeen, ja laajempi käyttöönotto kouluverkostossa alkoi syksyllä 2026. Täysi vaikutus on siis vielä edessä.",
      ],
      highlights: [
        { value: "5", label: "kuntaa käyttää alustaa keväästä 2026" },
        { value: "10+", label: "työpajaa sidosryhmien ja koulujen henkilöstön kanssa" },
        { value: "3", label: "vuotta projektissa, roolina lopulta Lead Designer" },
      ],
    },
    reflections: {
      heading: "Mitä tekisin toisin",
      items: [
        {
          title: "Mittarit ensimmäisestä päivästä",
          body: "Jos olisimme alusta asti tienneet, mitä tavoittelemme ja miten sitä mitataan, priorisointi olisi ollut helpompaa. Teknisen projektipäällikön konkreettinen ehdotus jälkikäteen: seurataan lainmukaisuutta mittarina, eli mitkä vaatimukset on jo täytetty ja mitkä eivät vielä.",
        },
        {
          title: "Oikea MVP",
          body: "Emme rakentaneet pienintä julkaisemisen arvoista versiota, vaan lähes valmista tuotetta, joka yritti kattaa kaikki tarpeet heti alusta. Se näkyi sekä aikataulussa että työmäärässä.",
        },
        {
          title: "Juridiikka ja Design System mukaan heti",
          body: "Osa toiveista kopioi vanhaa järjestelmää, eikä kaikki siitä ollut enää lainmukaista. GDPR:n ja opetuslainsäädännön asiantuntija heti alusta ja harkiten koodiin rakennettu Design System olisivat säästäneet uudelleentyötä. Vuonna 2021 näin laaja koodattu Design System ei vielä ollut tavallista, mutta nyt vaatisin sitä.",
        },
        {
          title: "Suunnittelija mukaan toimittajavalintaan",
          body: "Kun valmiita alustoja hankitaan, suunnittelijan pitäisi arvioida niiden muokattavuus ennen päätöstä eikä vasta sen jälkeen. Se olisi säästänyt meidät myöhemmiltä vaikeilta kompromisseilta.",
        },
      ],
    },
  },
};
