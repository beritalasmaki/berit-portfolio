import { universityAiTool as en } from "../university-ai-tool";
import type { CaseStudy } from "../types";
import { localizeGallery } from "./helpers";

export const universityAiToolFi: CaseStudy = {
  slug: "university-ai-tool",
  title: "Yliopiston digitaalinen perehdytys ja tekoälyhakukonsepti",
  label: "YLIOPISTON ASIAKASKOKEMUS JA TEKOÄLYTYÖKALUT · 2025–2026",
  headline: "Hajallaan olevat opiskelijapalvelut.\nYksi tekoälyllä toimiva keskus.",
  description:
    "Tekoälyyn perustuva haku- ja palvelukeskus, joka vähentää tukipalvelujen kuormitusta ja auttaa opiskelijoita löytämään tarvitsemansa itse.",
  thumbnail: "/case/university-new-card.png",
  thumbnailAlt: "Yliopiston asiakaskokemus ja tekoälytyökalut",
  projectCount: "1",
  industry: "Korkeakoulutus",
  ctaLabel: "Tutustu koko tapaustutkimukseen",
  otherCaseStudyDescription:
    "Suunnittelin älykkäämmän haku- ja palvelukeskuksen, jotta opiskelijat löytävät ohjeet ja tuen eksymättä hajanaisiin järjestelmiin.",

  intro: [
    "Suuren yliopiston tieto oli hajallaan monilla erillisillä verkkosivustoilla, joten opiskelijat, henkilökunta ja vierailijat eivät usein tienneet, mistä aloittaa etsiminen. Tulin mukaan Senior UX- ja tuotesuunnittelijaksi muuttamaan varhaiset konseptit oikeiksi näkymiksi, testaamaan niitä käyttäjillä ja muotoilemaan ensimmäisen version, jota ihmiset pystyivät oikeasti käyttämään.",
  ],
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
      description: "Palvelu oli käytettävissä heti alusta alkaen millä tahansa laitteella",
    },
    {
      label: "Julkaisun jälkeinen kehitys",
      description: "Kehitin palvelua jatkuvasti todellisen käytön perusteella ensimmäisen version julkaisun jälkeen",
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
      body: "Ihmiset löysivät vastaukset paljon nopeammin joko tekoälyhaulla, viesteillä, lomakkeilla tai kasvokkain palvelevassa neuvontapisteessä, ja henkilökunnan yksityiset tiedot pysyivät samalla turvassa kirjautumisen takana.",
    },
    {
      number: "02",
      title: "Vähemmän painetta henkilökunnan kanaviin",
      body: "Kun tekoälyhaku ja itsepalvelu hoitivat yhä useamman yksinkertaisen arkikysymyksen, henkilökunnalle jäi enemmän tilaa keskittyä tilanteisiin, jotka todella vaativat ihmisen huomiota.",
    },
    {
      number: "03",
      title: "Saavutettava ja mobiiliystävällinen alusta asti",
      body: "Koska palvelu suunniteltiin alusta alkaen saavutettavaksi ja mobiiliystävälliseksi, useampi pystyi käyttämään sitä itsenäisesti, myös puhelimella, liikkeellä ollessaan tai apuvälineiden avulla.",
    },
    {
      number: "04",
      title: "Nopeampi alku niille, jotka eivät vielä tunne paikkoja",
      body: "Uudelle tulijalle, olipa kyse ensimmäisen vuoden opiskelijasta tai vierailijasta, oikean avun löytäminen tarkoitti ennen sitä, että piti tietää, mistä etsiä. Nyt riittää yksi sisäänkäynti sen sijaan, että kulkisi yliopiston rakenteessa sokkona.",
    },
  ],

  howItStarted: [
    "Suuren yliopiston tieto oli hajallaan monilla eri verkkosivustoilla, minkä vuoksi opiskelijoiden, henkilökunnan ja vierailijoiden oli vaikea löytää apua.",
    "Palvelumuotoilijat olivat jo tehneet varhaisen tutkimuksen ja hahmotelleet alustavan idean keskitetystä palveluportaalista. Tehtäväni Senior UX- ja tuotesuunnittelijana oli muuttaa nämä varhaiset konseptit oikeiksi näkymäsuunnitelmiksi, testata niitä oikeilla käyttäjillä ja hioa ne ensimmäistä tuotejulkaisua (MVP) varten.",
    "Julkaisun jälkeen jäin mukaan keräämään oikeaa käyttäjäpalautetta ja kehittämään palvelua sen mukaan, miten ihmiset sitä todella käyttivät.",
  ],

  challenges: [
    {
      number: "01",
      title: "Hajallaan oleva tieto",
      body: "Ennen tätä projektia yliopiston palvelut olivat monilla erillisillä sivustoilla ja järjestelmissä ilman yhteistä lähtöpistettä. Opiskelijat ja henkilökunta eivät usein tienneet, mistä aloittaa etsiminen, tai päätyivät aivan väärälle sivulle. Suunnittelin yhden etusivun ja tekoälyhaun sisäänkäynnin, joka kokoaa palvelut yhteen paikkaan, jotta ihmiset voivat hakea omin sanoin sen sijaan, että arvailisivat, minkä osaston sivustolla vastaus voisi olla.",
    },
    {
      number: "02",
      title: "Henkilökunnan yksityiset tiedot tekoälyhaun tuloksissa",
      body: "Projektissa ollessani huomasimme ongelman: tekoälyhaku saattoi näyttää henkilökunnan yksityisiä tietoja vierailijoille, jotka eivät olleet kirjautuneet sisään. Nostimme asian ensisijaiseksi ja kävimme mahdollisia ratkaisuja läpi tiimin kanssa ennen kuin lähdin projektista. Se ratkaistiin myöhemmin kirjautumiskehotteella: heti kun käyttäjä aloittaa haun, avautuu ikkuna, joka pyytää kirjautumaan nähdäkseen koko tulokset. Ratkaisu hoitaa yksityisyysongelman hyvin, ja ymmärrän, miksi se oli järkevä silloisissa reunaehdoissa. Jos olisin ollut edelleen mukana, olisin ehkä selvittänyt, voisiko kehote tulla vasta hieman myöhemmin polulla, jotta se keskeyttäisi käyttäjän vähemmän heti haun alussa.",
    },
    {
      number: "03",
      title: "Uuden tuoteomistajan tukeminen",
      body: "Tuoteomistajamme oli täysin uusi ohjelmistoprojekteissa ja ketterässä kehityksessä. Astuin mukaan yhdessä palvelumuotoilijamme kanssa mentoroimaan ja tukemaan häntä: autoin jäsentämään tekemättömien töiden listaa, järjestämään käyttäjäpalautetta ja kirjoittamaan tiimille selkeitä tehtäviä.",
    },
    {
      number: "04",
      title: "Yhteisten komponenttien suosiminen kertaluonteisten sijaan",
      body: "Jotkut kehittäjät rakensivat omia räätälöityjä käyttöliittymäelementtejään sen sijaan, että olisivat käyttäneet suunnittelujärjestelmästä jo löytyvää, usein vain siksi, että se oli hetkessä nopeampaa, mikä on tiukalla aikataululla varsin luonnollista. Sen sijaan, että olisin tehnyt asiasta vaatimustenmukaisuuskysymyksen, keskityin siihen, että olemassa olevat komponentit olisi helpompi löytää ja käyttää uudelleen, ja otin suunnittelujärjestelmätiimin mukaan aina, kun tarvittiin jotain aidosti uutta.",
    },
  ],

  whatIWouldDoDifferently: [
    "Määrittelisin suunnittelun säännöt selkeämmin ennen luovutusta. Jälkikäteen olisin dokumentoinut muutaman keskeisen UX-periaatteen selkeämmin ennen projektista lähtöäni, jotta kokemus pysyisi yhtenäisenä, vaikka en olisi enää paikalla arvioimassa muutoksia. Lähtöni jälkeen muutama pieni asia päätyi näyttämään erilaiselta kuin alun perin oli suunniteltu. Esimerkiksi hakutulokset ilmestyivät hakukentän alapuolelle eikä samalle näkyvälle alueelle, jolloin ei ole selvää, milloin tuloksia ladataan. Tällaiset pikkuasiat voivat kasautua ajan myötä. Se opetti minulle hyödyllisen asian: dokumentoida täytyy suunnittelun lisäksi sen perustelut, jotta ne ohjaavat päätöksiä silloinkin, kun en ole enää mukana.",
    "Asettaisin selkeämmät onnistumisen mittarit alusta alkaen, peruskäyttödataa pidemmälle. Käytössämme oli Matomo (yksityisyyttä kunnioittava verkkoanalytiikkatyökalu), joka antoi hyödyllistä tietoa esimerkiksi sivunäytöistä ja klikkauskäyttäytymisestä. Suunnittelimme itse asiassa menevämme tätä pidemmälle ja määrittelevämme mittarit, jotka kertoisivat, ratkaiseeko palvelu oikeaa ongelmaa käyttäjille eikä vain sitä, miten sitä käytetään, mutta emme koskaan saaneet niitä toteutettua.",
    "Jälkikäteen haluaisin ratkaista tämän lisäämättä käyttäjille ylimääräistä taakkaa, esimerkiksi kevyellä, vapaaehtoisella palautekehotteella keskeisten hetkien, kuten tekoälyhaun tuloksen, jälkeen erillisen kyselyn sijaan. Toinen keino olisi ollut tarkastella epäsuoria signaaleja, joihin meillä jo oli pääsy, kuten sitä, muuttuivatko henkilökunnan yhteydenotot yleisistä kysymyksistä ajan myötä. Jos tällainen olisi ollut käytössä alusta asti, meillä olisi ollut selkeämpi tapa vastata todelliseen kysymykseen: auttaako tämä oikeasti ihmisiä, eikä vain käyttävätkö ihmiset sitä.",
    "Tekisin suunnittelun roolista prosessissa jäsennellymmän, en vain reagoivan. Pysyin tiiviisti mukana koko ajan ja tapasin säännöllisesti kehittäjiä ja scrum masteria, eli henkilöä, joka pitää tiimin työtavat raiteillaan. Jälkikäteen perustaisin heti alusta muutaman kevyen tarkistuspisteen: lyhyen suunnittelukatselmoinnin ennen UX-muutosten julkaisua, selkeän yhteyshenkilön teknisille kysymyksille ja UX-päätösten perustelut kirjattuna suoraan kehittäjien käyttämiin tehtäväkuvauksiin erillisen dokumentin sijaan, jota kukaan ei ehdi lukea. Mikään näistä ei hidasta tiukkaa aikataulua, kun se rakennetaan työnkulkuun alusta asti.",
  ],

  methods: ["Asiakaspolkujen kartoitus", "Käyttäjähaastattelut", "Yhteissuunnittelun työpajat", "Käytettävyystestaus"],
};
