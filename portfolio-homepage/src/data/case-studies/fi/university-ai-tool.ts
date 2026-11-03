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
      "Nostin henkilökunnan yksityisten tietojen näkymisen tekoälyhaussa ensisijaiseksi ongelmaksi ja kävin ratkaisuja läpi tiimin kanssa; se ratkaistiin myöhemmin kirjautumiskehotteella",
      "Tein yhteiset suunnittelujärjestelmän komponentit helpommin löydettäviksi sen sijaan, että olisin kieltänyt kertarakennelmat",
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
      title: "Nopeampaa ja turvallisempaa apua",
      body: "Vastaukset löytyivät paljon nopeammin, oli kyse sitten tekoälyhausta, viesteistä, lomakkeista tai neuvontapisteestä, ja henkilökunnan yksityiset tiedot pysyivät samalla turvassa kirjautumisen takana.",
    },
    {
      number: "02",
      title: "Vähemmän painetta henkilökunnan kanaviin",
      body: "Kun tekoälyhaku ja itsepalvelu hoitivat yhä useamman yksinkertaisen arkikysymyksen, henkilökunnalle jäi enemmän aikaa tilanteisiin, jotka oikeasti vaativat ihmisen apua.",
    },
    {
      number: "03",
      title: "Saavutettava ja mobiiliystävällinen alusta asti",
      body: "Koska palvelu suunniteltiin alusta asti saavutettavaksi ja mobiiliystävälliseksi, useampi pystyi käyttämään sitä itsenäisesti: puhelimella, liikkeellä tai apuvälineiden avulla.",
    },
    {
      number: "04",
      title: "Nopeampi alku heille, jotka eivät vielä tunne yliopiston palveluja",
      body: "Uudelle tulijalle, olipa hän ensimmäisen vuoden opiskelija tai vierailija, oikean avun löytäminen vaati ennen sitä, että tiesi, mistä etsiä. Nyt riittää yksi sisäänkäynti, eikä yliopiston rakenteessa tarvitse haahuilla sokkona.",
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
      body: "Projektin aikana huomasimme ongelman: tekoälyhaku saattoi näyttää henkilökunnan yksityisiä tietoja vierailijoille, jotka eivät olleet kirjautuneet sisään. Nostimme asian kärkeen ja kävimme ratkaisuvaihtoehtoja läpi tiimin kanssa ennen kuin lähdin projektista. Ongelma ratkaistiin myöhemmin kirjautumiskehotteella: heti kun käyttäjä aloittaa haun, näkyviin tulee ikkuna, joka pyytää kirjautumaan sisään nähdäkseen kaikki tulokset. Ratkaisu hoitaa yksityisyyden hyvin, ja ymmärrän, miksi se oli silloisissa rajoissa järkevä. Jos olisin ollut edelleen mukana, olisin ehkä selvittänyt, voisiko kehote tulla vasta hieman myöhemmin, jotta se keskeyttäisi käyttäjän vähemmän heti haun alussa.",
    },
    {
      number: "03",
      title: "Uuden tuoteomistajan tukeminen",
      body: "Tuoteomistajamme oli täysin uusi ohjelmistoprojekteissa ja ketterässä kehityksessä. Palvelumuotoilijan kanssa tuimme ja mentoroimme häntä: autoin jäsentämään backlogia, järjestämään käyttäjäpalautetta ja kirjoittamaan tiimille selkeitä tehtäviä.",
    },
    {
      number: "04",
      title: "Yhteiset komponentit kertarakennelmien sijaan",
      body: "Jotkut kehittäjät rakensivat omia käyttöliittymäelementtejään sen sijaan, että olisivat käyttäneet suunnittelujärjestelmän valmiita komponentteja, usein yksinkertaisesti siksi, että se oli hetkessä nopeampaa. Tiukalla aikataululla se on varsin luonnollista. Sen sijaan että olisin tehnyt asiasta kurinpitokysymyksen, keskityin siihen, että olemassa olevat komponentit olisi helpompi löytää ja ottaa käyttöön, ja otin suunnittelujärjestelmätiimin mukaan aina, kun tarvittiin jotain aidosti uutta.",
    },
  ],

  whatIWouldDoDifferently: [
    "Määrittelisin suunnittelun säännöt selkeämmin ennen luovutusta. Jälkikäteen olisin kirjannut muutaman keskeisen UX-periaatteen selkeämmin ylös ennen lähtöäni, jotta kokemus pysyisi yhtenäisenä, vaikka en olisi enää arvioimassa muutoksia. Lähtöni jälkeen muutama pieni asia päätyi näyttämään erilaiselta kuin alun perin suunniteltiin. Esimerkiksi hakutulokset ilmestyivät hakukentän alapuolelle eikä samalle näkyvälle alueelle, jolloin ei ollut selvää, milloin tuloksia ladataan. Tällaiset pikkuasiat kasautuvat ajan myötä. Opin tästä, että dokumentoida pitää suunnittelun lisäksi sen perustelut, jotta ne ohjaavat päätöksiä silloinkin, kun en ole itse paikalla.",
    "Asettaisin selkeämmät onnistumisen mittarit alusta alkaen, peruskäyttödataa pidemmälle. Käytössämme oli Matomo (yksityisyyttä kunnioittava verkkoanalytiikkatyökalu), joka kertoi esimerkiksi sivunäytöistä ja klikkauskäyttäytymisestä. Suunnittelimme menevämme tätä pidemmälle ja määrittelevämme mittarit, jotka kertoisivat, ratkaiseeko palvelu oikeaa ongelmaa eikä vain sitä, miten sitä käytetään, mutta emme koskaan saaneet niitä toteutettua.",
    "Haluaisin ratkaista tämän lisäämättä käyttäjille ylimääräistä vaivaa, esimerkiksi kevyellä, vapaaehtoisella palautekehotteella keskeisten hetkien, kuten tekoälyhaun tuloksen, jälkeen erillisen kyselyn sijaan. Toinen keino olisi seurata epäsuoria signaaleja, joihin meillä jo oli pääsy, esimerkiksi sitä, muuttuiko henkilökunnan yhteydenottojen määrä yleisissä kysymyksissä ajan myötä. Näin olisimme saaneet selkeämmän vastauksen oikeaan kysymykseen: auttaako tämä oikeasti ihmisiä, eikä vain se, käyttävätkö he sitä.",
    "Tekisin suunnittelun roolista prosessissa jäsennellymmän, en vain reagoivan. Olin koko ajan tiiviisti mukana ja tapasin säännöllisesti kehittäjiä ja scrum masteria, joka huolehtii tiimin työtapojen toimivuudesta. Jälkikäteen ottaisin heti alusta käyttöön muutaman kevyen tarkistuspisteen: lyhyen suunnittelukatselmoinnin ennen UX-muutosten julkaisua, selkeän yhteyshenkilön teknisille kysymyksille ja UX-päätösten perustelut kirjattuina suoraan kehittäjien käyttämiin tehtäväkuvauksiin erillisen dokumentin sijaan, jota kukaan ei ehdi lukea. Mikään näistä ei hidasta tiukkaakaan aikataulua, kun se rakennetaan osaksi työnkulkua alusta asti.",
  ],

  methods: ["Asiakaspolkujen kartoitus", "Käyttäjähaastattelut", "Yhteissuunnittelun työpajat", "Käytettävyystestaus"],
};
