import { universityAiTool as en } from "../university-ai-tool";
import type { CaseStudy } from "../types";
import { localizeGallery } from "./helpers";

export const universityAiToolFi: CaseStudy = {
  slug: "university-ai-tool",
  title: "Yliopiston digitaalinen perehdytys ja tekoälyhakukonsepti",
  label: "YLIOPISTON ASIAKASKOKEMUS JA TEKOÄLYTYÖKALUT · 2025–2026",
  headline: "Hajallaan olevat opiskelijapalvelut.\nYksi tekoälyhakuun perustuva portaali.",
  description:
    "Tekoälyllä tehostettu haku- ja palveluportaali, joka kokoaa yliopiston palvelut yhteen, vähentää tukipalvelujen kuormitusta ja auttaa opiskelijoita löytämään tarvitsemansa itse.",
  thumbnail: "/case/university-new-card.png",
  thumbnailAlt: "Yliopiston asiakaskokemus ja tekoälytyökalut",
  projectCount: "1",
  industry: "Korkeakoulutus",
  ctaLabel: "Tutustu koko asiakasprojektiin",
  otherCaseStudyDescription:
    "Suunnittelin älykkäämmän haku- ja palveluportaalin, jotta opiskelijat löytävät ohjeet ja tuen eksymättä hajanaisiin järjestelmiin.",

  intro: [
    "Suuren yliopiston tieto oli hajallaan monilla erillisillä verkkosivustoilla, eivätkä opiskelijat, henkilökunta tai vierailijat usein tienneet, mistä etsiä. Liityin projektiin Senior UX- ja tuotesuunnittelijana: tehtäväni oli muuttaa varhaiset konseptit oikeiksi näkymiksi, testata niitä käyttäjillä ja muotoilla ensimmäinen versio, jota ihmiset pystyivät oikeasti käyttämään.",
  ],
  glance: {
    problem:
      "Suuren yliopiston tieto oli hajallaan monilla erillisillä verkkosivustoilla, eivätkä opiskelijat, henkilökunta tai vierailijat usein tienneet, mistä aloittaa etsiminen.",
    role:
      "Senior UX- ja tuotesuunnittelija. Muutin palvelumuotoilijoiden varhaiset konseptit oikeiksi näkymiksi, testasin niitä käyttäjillä, muotoilin ensimmäisen julkaisun (MVP) ja kehitin palvelua julkaisun jälkeenkin.",
    decisions: [
      "Yksi etusivu ja yksi tekoälyhakuun perustuva sisäänkäynti kaikkiin palveluihin",
      "Saavutettava ja mobiiliystävällinen alusta asti",
      "Nostin suunnittelussa keskiöön palvelun saavutettavuuden, selkeyden ja helppokäyttöisyyden sekä määrittelin työlle selkeät mittarit. Varmistin, että avainkäyttäjäryhmät olivat tiiviisti mukana kehityksessä.",
      "Muotoilun yhtenäisyyden ja laadun takaamiseksi linjasimme, ettei kertarakennelmia käytetä. Ohjasin kehittäjiä hyödyntämään Design Systemin komponentteja ja rakensin toimivan yhteistyömallin kehittäjien ja DS-tiimin välille.",
    ],
    outcome:
      "Vahvistettu julkaisun jälkeisillä käyttäjähaastatteluilla ja kyselyillä: vastaukset löytyivät nopeammin, yksinkertaiset kysymykset siirtyivät itsepalveluun, jolloin henkilökunnalle jäi enemmän aikaa tilanteisiin, jotka vaativat ihmisen apua, ja palvelu toimi puhelimella ja apuvälineillä.",
  },
  roleLabel: "Senior UX- ja tuotesuunnittelija",
  focusLabel:
    "UX/UI-suunnittelu, tekoälyhaun käyttäjäpolku, palveluarkkitehtuuri, suunnittelujärjestelmän käyttöönotto ja julkaisun jälkeinen kehitys",
  categoryTag: "Tekoälyhakualusta",
  skillTags: [
    {
      label: "Tekoälyhaun käyttäjäpolku",
      description: "Suunnittelin luonnollista kieltä käyttävän haun sisäänkäynnin kaikkiin palveluihin",
    },
    {
      label: "Palveluarkkitehtuuri",
      description: "Toin chatin, lomakkeet ja kasvokkain tapahtuvan neuvonnan yhteen rakenteeseen",
    },
    {
      label: "Suunnittelujärjestelmän käyttöönotto",
      description: "Ohjasin kehittäjiä käyttämään yhteisiä komponentteja kertaluonteisten ratkaisujen sijaan",
    },
    {
      label: "Mobile first -suunnittelu",
      description: "Palvelu toimi heti alusta alkaen millä tahansa laitteella",
    },
    {
      label: "Julkaisun jälkeinen kehitys",
      description: "Jatkoin palvelun kehittämistä todellisen käytön perusteella ensimmäisen version julkaisun jälkeen",
    },
    {
      label: "Sidosryhmän mentorointi",
      description: "Tuin uutta tuoteomistajaa tämän ensimmäisessä ketterässä projektissa",
    },
  ],

  gallery: localizeGallery(en.gallery, [
    { alt: "Tekoäly-assistentin etusivu", caption: "Tekoäly-assistentti" },
    { alt: "Tekoälyhaun tulokset, työpöytä", caption: "Tekoälyhaun tulokset" },
    { alt: "Tekoäly-assistentti, mobiili", caption: "Mobiilietusivu" },
    { alt: "Tekoälyhaun tulokset, mobiili", caption: "Mobiilihaku" },
  ]),
  sneakPeekImages: en.sneakPeekImages,

  impactIntro: "Nämä vaikutukset vahvistettiin julkaisun jälkeen tehdyillä käyttäjähaastatteluilla ja kyselyillä.",
  impactCards: [
    {
      number: "01",
      title: "Nopeampi avunsaanti",
      body: "Vastaukset löytyvät aiempaa nopeammin eri kanavista – olipa kyse tekoälyhausta, viesteistä, lomakkeista tai neuvontapisteestä.",
    },
    {
      number: "02",
      title: "Vähemmän painetta henkilökunnan kanaviin",
      body: "Kun tekoälyhaku ja itsepalvelu hoitavat arkikysymykset, henkilökunnalle jää enemmän aikaa henkilökohtaista tukea vaativiin tilanteisiin.",
    },
    {
      number: "03",
      title: "Saavutettava ja mobiiliystävällinen alusta asti",
      body: "Toteutus varmistaa, että palvelua on helppo käyttää itsenäisesti puhelimella, liikkeellä ollessa tai apuvälineiden kanssa.",
    },
    {
      number: "04",
      title: "Vaivaton aloitus uudelle kävijälle",
      body: "Uuden opiskelijan tai vierailijan ei tarvitse tuntea yliopiston rakennetta ennestään – yksi sisäänkäynti ohjaa suoraan oikean tiedon äärelle.",
    },
  ],

  howItStarted: [
    "Suuren yliopiston tieto oli hajallaan monilla eri verkkosivustoilla, minkä vuoksi opiskelijoiden, henkilökunnan ja vierailijoiden oli vaikea löytää apua.",
    "Palvelumuotoilijat olivat jo tehneet alkuvaiheen tutkimuksen ja hahmotelleet idean keskitetystä palveluportaalista. Minun tehtäväni Senior UX- ja tuotesuunnittelijana oli muuttaa nämä varhaiset konseptit oikeiksi käyttöliittymäsuunnitelmiksi, testata niitä oikeilla käyttäjillä ja hioa ne ensimmäistä julkaisua (MVP) varten.",
    "Julkaisun jälkeenkin jäin mukaan keräämään käyttäjäpalautetta ja kehittämään palvelua sen mukaan, miten sitä todella käytettiin.",
  ],

  challenges: [
    {
      number: "01",
      title: "Hajallaan oleva tieto",
      body: "Ennen tätä projektia yliopiston palvelut olivat monilla erillisillä sivustoilla ja järjestelmissä ilman yhteistä lähtöpistettä. Opiskelijat ja henkilökunta eivät usein tienneet, mistä aloittaa etsiminen, tai päätyivät aivan väärälle sivulle. Suunnittelin yhden etusivun ja tekoälyhakuun perustuvan sisäänkäynnin, joka kokoaa palvelut yhteen paikkaan. Nyt ihmiset voivat hakea omin sanoin eivätkä joudu arvaamaan, minkä osaston sivuilla vastaus voisi olla.",
    },
    {
      number: "02",
      title: "Henkilökunnan yksityiset tiedot tekoälyhaun tuloksissa",
      body: "Projektin aikana tuotteen projektipäällikkö nosti esiin ongelman: tekoälyhaku saattoi näyttää henkilökunnan yksityisiä tietoja vierailijoille, jotka eivät olleet kirjautuneet sisään. Keskustelimme asiasta tiiviisti tiimin kanssa ennen kuin lähdin projektista. Ongelma ratkaistiin myöhemmin kirjautumiskehotteella: heti kun käyttäjä aloittaa haun, näkyviin tulee ikkuna, joka pyytää kirjautumaan sisään nähdäkseen kaikki tulokset. Ratkaisu hoitaa yksityisyyden hyvin, ja ymmärrän, miksi se oli silloisissa rajoissa järkevä. Itse nostin keskusteluun saavutettavuuden ja sen, miten palvelusta saadaan selkeä ja helppokäyttöinen kokonaisuus, pyrin ottamaan tärkeät käyttäjäryhmät mukaan ja ehdotin mittarien asettamista. Jos olisin ollut edelleen mukana, olisin ehkä selvittänyt, voisiko kirjautumiskehote tulla vasta hieman myöhemmin polulla, jotta se keskeyttäisi käyttäjän vähemmän heti haun alussa.",
    },
    {
      number: "03",
      title: "Tuoteomistajan tukeminen",
      body: "Ketterä kehitys ja ohjelmistoprojektit olivat tuoteomistajallemme uusia. Palvelumuotoilijan kanssa tuimme häntä: autoin jäsentämään backlogia, järjestämään käyttäjäpalautetta ja kirjoittamaan tiimille selkeitä tehtäviä.",
    },
    {
      number: "04",
      title: "Yhteiset komponentit kertarakennelmien sijaan",
      body: "Muotoilun yhtenäisyyden ja laadun varmistamiseksi linjasimme, ettei kertarakennelmia käytetä. Muistutin kehittäjiä käyttämään Design Systemin komponentteja ja yhdistin heidät keskustelemaan DS-kehittäjien kanssa. Otin suunnittelujärjestelmätiimin mukaan aina, kun tarvittiin jotain aidosti uutta.",
    },
  ],

  whatIWouldDoDifferently: [
    "Määrittelisin suunnittelun säännöt selkeämmin ennen luovutusta. Jälkikäteen olisin kirjannut muutaman keskeisen UX-periaatteen selkeämmin ylös ennen lähtöäni, jotta kokemus pysyisi yhtenäisenä, vaikka en olisi enää arvioimassa muutoksia. Lähtöni jälkeen muutama pieni yksityiskohta kehittyi eri suuntaan kuin alun perin suunniteltiin. Esimerkiksi hakutulokset ilmestyivät hakukentän alapuolelle eikä samalle näkyvälle alueelle, jolloin ei ollut selvää, milloin tuloksia ladataan. Tällaiset pikkuasiat kasautuvat ajan myötä. Opin tästä, että dokumentoida pitää suunnittelun lisäksi sen perustelut, jotta ne ohjaavat päätöksiä silloinkin, kun en ole itse paikalla.",
    "Asettaisin selkeämmät onnistumisen mittarit alusta alkaen, peruskäyttödataa pidemmälle. Käytössämme oli Matomo (yksityisyyttä kunnioittava verkkoanalytiikkatyökalu), joka kertoi esimerkiksi sivunäytöistä ja klikkauskäyttäytymisestä. Suunnittelimme menevämme tätä pidemmälle ja määrittelevämme mittarit, jotka kertoisivat, ratkaiseeko palvelu oikeaa ongelmaa eikä vain sitä, miten sitä käytetään, mutta emme koskaan saaneet niitä toteutettua.",
    "Haluaisin ratkaista tämän lisäämättä käyttäjille ylimääräistä vaivaa, esimerkiksi kevyellä, vapaaehtoisella palautekehotteella keskeisten hetkien, kuten tekoälyhaun tuloksen, jälkeen erillisen kyselyn sijaan. Toinen keino olisi seurata epäsuoria signaaleja, joihin meillä jo oli pääsy, esimerkiksi sitä, muuttuiko henkilökunnan yhteydenottojen määrä yleisissä kysymyksissä ajan myötä. Näin olisimme saaneet selkeämmän vastauksen oikeaan kysymykseen: auttaako tämä oikeasti ihmisiä, eikä vain se, käyttävätkö he sitä.",
    "Tekisin suunnittelun roolista prosessissa jäsennellymmän, en vain reagoivan. Olin koko ajan tiiviisti mukana ja tapasin säännöllisesti kehittäjiä ja scrum masteria, joka huolehtii tiimin työtapojen toimivuudesta. Jälkikäteen ottaisin heti alusta käyttöön muutaman kevyen tarkistuspisteen: lyhyen suunnittelukatselmoinnin ennen UX-muutosten julkaisua, selkeän yhteyshenkilön teknisille kysymyksille ja UX-päätösten perustelut kirjattuina suoraan kehittäjien käyttämiin tehtäväkuvauksiin erillisen dokumentin sijaan, jota kukaan ei ehdi lukea. Mikään näistä ei hidasta tiukkaakaan aikataulua, kun se rakennetaan osaksi työnkulkua alusta asti.",
  ],

  methods: ["Asiakaspolkujen kartoitus", "Käyttäjähaastattelut", "Yhteissuunnittelun työpajat", "Käytettävyystestaus"],
};
