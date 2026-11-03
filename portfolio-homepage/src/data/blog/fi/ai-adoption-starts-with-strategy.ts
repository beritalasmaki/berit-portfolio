import type { BlogPost } from "../types";

export const aiAdoptionStrategyFi: BlogPost = {
  slug: "tekoalyn-kayttoonotto-alkaa-strategiasta",
  translationOf: "ai-adoption-starts-with-strategy",
  title: "Tekoälyn käyttöönotto alkaa strategiasta",
  excerpt:
    "Organisaatiot, jotka hyötyvät tekoälystä, aloittavat yleensä määrittelemällä ongelman, jonka haluavat ratkaista, testaavat ideoitaan pienissä kokeiluissa ja ottavat työntekijänsä mukaan jo alkuvaiheessa. Tämä artikkeli käy läpi nämä kolme vaihetta. Osassa 2 tarkastellaan, miten muutoksesta saadaan pysyvä.",
  date: "2026-10-24",
  tags: ["Tekoälyn käyttöönotto", "Strategia", "Muutosjohtaminen"],
  series: {
    name: "Tekoälyn käyttöönotto",
    part: 1,
    subtitle: "Suunta, kokeilut ja ihmiset",
  },
  body: [
    {
      type: "paragraph",
      text: "Kun työskentelin yliopiston tekoälyhaun parissa, vaikein ongelma, johon törmäsimme, liittyi vain vähän itse malliin. Haku saattoi näyttää henkilökunnan yksityisiä tietoja kirjautumattomille vierailijoille, ja sen ratkaiseminen vaati suunnittelupäätöksen sekä tiimin sisäisen sopimuksen siitä, miten yksityisyys hoidetaan.",
    },
    {
      type: "paragraph",
      text: "Olen nähnyt vastaavia tilanteita monissa projekteissa viimeisen kymmenen vuoden aikana. Teknologia toimii yleensä riittävän hyvin. Vaikeudet johtuvat epäselvistä tavoitteista, kokeiluista, jotka eivät johda mihinkään, ja ihmisistä, joita ei ole otettu muutokseen mukaan. Tekoälyn kanssa nämä ongelmat tulevat esiin nopeammin, koska alkuun pääsee niin helposti: lisenssit ovat halpoja ja pilotit käynnistyvät nopeasti.",
    },
    {
      type: "paragraph",
      text: "Minusta on hyödyllistä ajatella tekoälyn käyttöönottoa neljänä vaiheena. Tämä artikkeli käsittelee kolme ensimmäistä.",
    },

    {
      type: "heading",
      id: "phase-1",
      text: "Vaihe 1: Määritä suunta ennen teknologian valintaa",
      navLabel: "Vaihe 1: Määritä suunta",
    },
    {
      type: "paragraph",
      text: "Tekoäly on hyödyllinen vain, kun tiedät, minkä liiketoiminnallisen tai yhteiskunnallisen ongelman ratkaisemisessa haluat sen auttavan. Ongelmasta lähteminen suojaa myös tekoälyhuumalta, jossa organisaatio ostaa lisenssejä ja kokeilee työkaluja ilman mitattavaa hyötyä.",
    },
    { type: "paragraph", text: "Aloitan yleensä kolmella kysymyksellä." },
    { type: "subheading", text: "Missä olemme nyt?" },
    {
      type: "paragraph",
      text: "Kuinka hyvälaatuista datamme on, mitä alustoja meillä on ja millaista osaamista ihmisillämme on? Joillakin organisaatioilla on jo hyvin toimiva data-alusta, ja ne voivat keskittyä sen hyödyntämiseen. Toisten täytyy korjata datansa ensin, eikä sitä työtä voi ohittaa.",
    },
    { type: "subheading", text: "Missä haluamme olla kolmen–viiden vuoden kuluttua?" },
    {
      type: "paragraph",
      text: "Skenaariotyö auttaa tässä. Tarkastele, miten alasi todennäköisesti muuttuu ja millainen rooli tekoälyllä voisi siinä olla. Tuloksena voi olla lyhyt visiolause, jonka ihmiset muistavat, esimerkiksi: *\"Tekoälyn avulla meistä tulee johtava kestävän [toimialasi] tarjoaja.\"*",
    },
    { type: "subheading", text: "Miten tämä liittyy jo olemassa oleviin tavoitteisiimme?" },
    {
      type: "paragraph",
      text: "Tekoälystrategia, joka elää omassa kalvosarjassaan, unohtuu helposti. Se toimii paremmin, kun se kytketään organisaation vuositavoitteisiin ja mittareihin, joita ihmiset jo seuraavat. OKR-malli on yksi tapa tehdä tämä.",
    },
    { type: "subheading", text: "Lyhyt johdatus OKR-malliin" },
    {
      type: "paragraph",
      text: "OKR tulee sanoista Objectives and Key Results eli tavoitteet ja avaintulokset. Se on tavoiteasetannan menetelmä, jossa on kolme tasoa:",
    },
    {
      type: "list",
      items: [
        "**Tavoite (Objective)** kuvaa, minne haluat päästä. Se kirjoitetaan sanoin eikä numeroin, ja sen pitäisi tuntua tavoittelemisen arvoiselta. Useimmilla tiimeillä on korkeintaan kolmesta viiteen tavoitetta.",
        "**Avaintulokset (Key results)** kertovat, pääsitkö perille. Jokainen on mitattavissa, ja yhtä tavoitetta kohden niitä on yleensä kolmesta viiteen.",
        "**Toimenpiteet (Initiatives)** ovat konkreettisia asioita, joita teet avaintulosten saavuttamiseksi. Voit muuttaa niitä neljänneksen aikana, jos ne eivät toimi.",
      ],
    },
    {
      type: "okr",
      title: "OKR-malli esimerkin avulla",
      subtitle: "Esimerkki: tekoälyn käyttöönotto yliopistossa, yksi neljännes",
      objective: "Opiskelijat ja henkilökunta käyttävät tekoälyä itsevarmasti ja vastuullisesti opinnoissaan ja opetuksessaan.",
      keyResults: [
        { value: "70 %", label: "opettajista on suorittanut tekoälyn perusteiden kurssin" },
        { value: "15", label: "kurssilla on kokeiltu tekoälyavusteisia opetusmenetelmiä" },
        { value: "3,1 → 3,8", label: "kuinka hyödylliseksi opiskelijat kokevat tekoälyn kyselyssä (asteikko 1–5)" },
      ],
      initiatives: [
        "Kolme työpajaa tiedekunnissa",
        "Ideakeskus opettajien kokeiluille",
        "Tekoälyvastaava jokaisessa tiedekunnassa",
        "Ohjeet tekoälyn vastuulliseen käyttöön",
      ],
      note: "Tulokset käydään läpi ja tavoitteet päivitetään noin kolmen kuukauden välein.",
    },
    {
      type: "paragraph",
      text: "Toimenpiteet kirjoitetaan usein erehdyksessä avaintuloksiksi. \"Järjestetään tekoälykoulutuksia\" on toimenpide, koska sen voi toteuttaa, vaikka kukaan ei osallistuisi. \"70 % opettajista suorittaa tekoälyn perusteiden kurssin\" on avaintulos, koska se mittaa sitä, mitä tapahtui.",
    },
    {
      type: "paragraph",
      text: "OKR-tavoitteet asetetaan yleensä yhdeksi neljännekseksi kerrallaan ja jaetaan avoimesti koko organisaatiolle. Ne pidetään tavallisesti erillään bonuksista, jotta ihmiset uskaltavat asettaa kunnianhimoisia tavoitteita. Ne eroavat myös KPI-mittareista: KPI:t seuraavat jatkuvaa suorituskykyä, kun taas OKR-tavoitteilla ohjataan jotakin tiettyä muutosta.",
    },

    {
      type: "heading",
      id: "phase-2",
      text: "Vaihe 2: Kokeile pienessä mittakaavassa ja näytä tulokset varhain",
      navLabel: "Vaihe 2: Kokeile pienesti",
    },
    {
      type: "paragraph",
      text: "Organisaatiot jumittuvat usein pitkiin suunnitteluvaiheisiin tai ajavat monia pieniä pilotteja, joilla on vain vähän tekemistä keskenään. Parempi tapa on jakaa iso tavoite pieniin kokeiluihin, jotka voivat osoittaa arvonsa nopeasti eivätkä vaadi suurta alkuinvestointia.",
    },
    { type: "paragraph", text: "Muutama käytäntö, joka auttaa:" },
    {
      type: "list",
      items: [
        "**Innovaatiokeskus** antaa työntekijöille paikan, johon ideat voi jättää, sekä yksinkertaisen prosessin niiden arviointiin ja kokeiltavien valintaan.",
        "**Testaus oikeassa ympäristössä** tuo ongelmat ja sivuvaikutukset esiin varhain. Yksi vaihtoehto on vertailupilotti, jossa yksi tiimi jatkaa työskentelyä kuten ennen ja toinen käyttää tekoälyavusteista tapaa. Sovi mittarit ennen pilotin alkua.",
        "**Sellaisten pilottien valinta, joissa tulokset näkyvät helposti**, kuten raaka-aineiden käyttö tai kunnossapito, helpottaa päätöstä siitä, jatketaanko konseptitodistuksesta (proof of concept) MVP-versioon.",
      ],
    },
    {
      type: "paragraph",
      text: "Omissa projekteissani pienen, hyödyllisen version julkaiseminen varhain ja sen parantaminen palautteen perusteella on toiminut paljon paremmin kuin kaiken toimittaminen kerralla.",
    },

    {
      type: "heading",
      id: "phase-3",
      text: "Vaihe 3: Ota ihmiset mukaan alusta asti",
      navLabel: "Vaihe 3: Ota ihmiset mukaan",
    },
    {
      type: "paragraph",
      text: "Teknologiamuutokset epäonnistuvat harvoin teknisistä syistä. Useammin ihmiset vastustavat muutosta, pelkäävät sen vaikutusta omaan työhönsä tai eivät yksinkertaisesti tiedä asiasta tarpeeksi. Tästä syystä tekoälyn käyttöönotossa pitää olla mukana koko organisaatio, ei vain IT-osasto.",
    },
    {
      type: "list",
      items: [
        "**Työpajat ja haastattelut heti alussa.** Kun ihmiset voivat kertoa, mikä hidastaa heidän päivittäistä työtään, he tukevat muutosta todennäköisemmin.",
        "**Psykologinen turvallisuus.** Tekoäly voi tehdä tiimin työn näkyvämmäksi. Ihmisten täytyy luottaa siihen, ettei tätä tietoa käytetä heitä vastaan, muuten he lopettavat osaamisensa jakamisen.",
        "**Tekoälylukutaito kaikille.** Kaikissa rooleissa olevien työntekijöiden pitäisi ymmärtää, miten data ja tekoäly vaikuttavat heidän omaan työhönsä. Sisäinen koulutusohjelma, kuten tekoälyakatemia, on yksi tapa tarjota tämä.",
      ],
    },

    {
      type: "heading",
      id: "next",
      text: "Seuraavaksi: muutoksen pysyväksi tekeminen",
    },
    {
      type: "paragraph",
      text: "Kun suunta on selvä, kokeilut käynnissä ja ihmiset mukana, seuraava haaste on muuttaa onnistunut pilotti normaaliksi toimintatavaksi. Käsittelen sen [osassa 2](/fi/blogi/tekoalypilotista-arjen-kaytantoon).",
    },
  ],
};
