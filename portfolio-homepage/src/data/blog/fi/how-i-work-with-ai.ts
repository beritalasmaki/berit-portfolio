import type { BlogPost } from "../types";

export const howIWorkWithAiFi: BlogPost = {
  slug: "nain-tyoskentelen-tekoalyn-kanssa",
  translationOf: "how-i-work-with-ai",
  title: "Näin työskentelen tekoälyn kanssa",
  tabTitle: "Näin työskentelen tekoälyn kanssa",
  excerpt:
    "Hyvin laadittu konteksti ja tietoarkkitehtuuri tuottavat tekoälyltä paljon parempia tuloksia kuin pelkät komennot. Kuvaan pohjan, josta aloitan uudet projektit, sekä sen, missä tekoäly on vahva ja missä ihminen yhä päättää.",
  date: "2026-11-18",
  tags: ["Tekoälytyökalut", "Tekoälyn käyttöönotto"],
  body: [
    {
      type: "links",
      items: [
        { label: "Katso pohja GitHubissa", href: "https://github.com/beritalasmaki/project-set-up-template" },
        {
          label: "Lue ohje (englanniksi)",
          href: "https://github.com/beritalasmaki/project-set-up-template/blob/main/docs/using-this-template.md",
        },
      ],
    },
    {
      type: "paragraph",
      text: "Aluksi käytin tekoälyä komento kerrallaan: pyysin jotain, katsoin tuloksen ja tarkensin pyyntöä. Opin, että tulos riippuu paljon enemmän siitä, mitä tekoäly tietää projektista, kuin siitä, miten pyynnön muotoilee. Omissa projekteissani, design systemissä ja agenttiajojen katselmointinäkymässä, kirjoitin tekoälylle ensin säännöt ja kontekstin: mikä tuote on, mitkä säännöt pätevät ja mitä tekoäly saa ja ei saa tehdä. Tulokset olivat huomattavasti parempia.",
    },
    {
      type: "paragraph",
      text: "Tästä syntyi pohja, joka on lähtökohtani uusiin suunnitteluprojekteihin. Tein sen julkisen sektorin ja B2B-projekteja varten, joissa saavutettavuus ja tietoturva ovat vaatimuksia ja monella on sananvaltaa. Ajatuksena on, että hyvin laadittu konteksti ja tietoarkkitehtuuri tekoälyn taustalla tuottavat paljon parempia tuloksia kuin pelkät komennot.",
    },

    {
      type: "heading",
      id: "roles",
      text: "Missä tekoäly on vahva ja missä ihminen päättää",
      navLabel: "Tekoäly ja ihminen",
    },
    {
      type: "paragraph",
      text: "Hyvin rakennettu konteksti auttoi eniten, mutta se selkiytti myös työnjakoa. Joissakin asioissa tekoäly on vahva, ja joissakin tarvitaan yhä ihmisen päätöksiä ja ohjausta. Mielestäni niin kuuluukin olla.",
    },
    {
      type: "subheading",
      text: "Missä tekoäly on vahva",
    },
    {
      type: "list",
      items: [
        "**Raakamuistiinpanoista jäsennelty ensimmäinen luonnos.** Sidosryhmäkartta, vaatimukset ja käyttäjävirtojen kuvaus syntyvät nopeasti.",
        "**Pitkän aineiston tiivistäminen** ja sen löytäminen, mikä siitä puuttuu.",
        "**Johdonmukaisuuden tarkistus.** Onko jokaisella näkymällä kaikki tilat, ja käytetäänkö käsitettä kaikkialla samalla tavalla.",
        "**Vaihtoehtojen tuottaminen,** joista voi valita.",
        "**Toistuva työ,** kuten taulukot, muotoilu ja dokumentointi.",
      ],
    },
    {
      type: "subheading",
      text: "Missä ihminen päättää ja ohjaa",
    },
    {
      type: "list",
      items: [
        "**Suunta ja kompromissit.** Mitä rakennetaan, mitä jätetään pois ja mikä on riittävän hyvä.",
        "**Ihmisten ja kontekstin ymmärtäminen.** Kuka oikeasti päättää, mitä käyttäjä kokee ja mitä organisaatio voi hyväksyä.",
        "**Vastuu.** Saavutettavuus, tietoturva ja juridiset kysymykset tarvitsevat ihmisen, joka vastaa niistä.",
        "**Testaus oikeilla käyttäjillä,** myös käyttäjillä, joilla on saavutettavuustarpeita. Tekoäly ei voi olla käyttäjä.",
      ],
    },
    {
      type: "paragraph",
      text: "Tämä työnjako ei ole rajoite, jota pitäisi kiertää. Siinä säilyy suunnittelijan työ.",
    },

    {
      type: "heading",
      id: "context",
      text: "Projektin konteksti kirjallisena",
      navLabel: "Konteksti kirjallisena",
    },
    {
      type: "paragraph",
      text: "Kun istunto alkaa, tekoäly ei tiedä projektista mitään. Ilman kirjoitettua kontekstia se arvaa aukot, ja tulos voisi olla minkä tahansa tuotteen.",
    },
    {
      type: "paragraph",
      text: "Jokaiselle asiakasprojektille tehdään oma yksityinen työtila pohjasta. Siellä on lyhyitä dokumentteja, jotka tekoäly lukee ennen kuin se alkaa auttaa: kenelle tuote on tehty, ongelma käyttäjän tilanteena, kuka päättää mistäkin, vaatimukset ja päätösloki. Annan mukaan raakamuistiinpanoni, tekoäly luonnostelee ja minä korjaan. Mitä muistiinpanoista ei löydy, merkitään aukoksi.",
    },
    {
      type: "paragraph",
      text: "Työtila on minun eikä asiakkaan, enkä vie sitä koskaan asiakkaan repositorioon.",
    },

    {
      type: "heading",
      id: "process",
      text: "Prosessi",
    },
    {
      type: "paragraph",
      text: "Vaiheita on kuusi. Jokaiseen kuuluu skill eli tekoälylle kirjoitettu ohje sekä artefakti eli dokumentti, johon tulos kirjataan.",
    },
    {
      type: "timeline",
      title: "Prosessi yhdellä rivillä",
      items: [
        { label: "Ongelman muotoilu" },
        { label: "Ihmisten ymmärtäminen" },
        { label: "Suunnittelu" },
        { label: "Tarkistus" },
        { label: "Oikeat ihmiset testaavat", note: "Käyttäjät, tietoturva, juridiikka", highlight: true },
        { label: "Luovutus" },
        { label: "Kirjaaminen ja pohdinta" },
      ],
    },
    {
      type: "findings",
      items: [
        {
          title: "Ongelman muotoilu",
          body: "**Skill** `problem-framing` · **Artefaktit** `00 product context`, `01 problem framing`. Muuttaa toimeksiannon käyttäjän tilanteeksi, jossa ei ole ratkaisua sisällä, ja listaa, mitä tiedetään ja mikä puuttuu. Kirjoitan toimeksiannon ylös sellaisenaan, mutta pyrin anonymisoimaan tekstin niin, ettei asiakkaan tai kenenkään henkilön nimi näy missään. Asiakkaan tiedot pidän salaisina.",
        },
        {
          title: "Ihmisten ymmärtäminen",
          body: "**Skill** `stakeholder-map` · **Artefaktit** `02 stakeholder map`, `03 requirements spec`. Näyttää, kuka päättää mistäkin, sekä vaatimukset omistajineen. Erimielisyydet nousevat yleensä esiin vasta projektin aikana, joten alussa tärkeintä on tietää, kenen sana painaa. Ristiriidat kirjataan vierekkäin sitä mukaa kuin ne tulevat esiin, enkä anna tekoälyn ratkaista niitä.",
        },
        {
          title: "Suunnittelu",
          body: "**Skill** `user-flow-and-states` · **Artefaktit** `04 user flows and states`, `07 design system rules`. Kuvaa käyttäjävirrat vaihe vaiheelta virhepolkuineen ja jokaisen näkymän kaikkine tiloineen suunnittelujärjestelmän sääntöjä vasten. Tekoäly merkitsee tilat puuttuviksi, kunnes vahvistan niiden olevan suunniteltuja.",
        },
        {
          title: "Tarkistus",
          body: "**Skillit** `a11y-gate`, `security-privacy-brief`, `sameness-check` · **Artefaktit** `05 accessibility checklist`, `06 security and privacy brief`. Käy läpi saavutettavuuden, tiedot ja käyttöoikeudet sekä sen, mitkä valinnat jäivät pelkiksi oletuksiksi. Kontrastit laskee skripti. Tämä on suunnitteluvaiheen katselmointi, ei auditointi.",
        },
        {
          title: "Luovutus",
          body: "**Skill** `procurement-ready-handoff` · **Artefaktit** `08 handoff spec`, `09 stakeholder feedback log`. Kertoo, mikä on valmista, kuka sen hyväksyi ja mitä kukin toimittaja tekee, ja pitää katselmoinnin kommentit yhdessä sen kanssa, kuka niistä päättää.",
        },
        {
          title: "Kirjaaminen ja pohdinta",
          body: "**Skillit** `decision-log`, `nda-safe-case-study` · **Artefaktit** `10 decision log`, `11 case study notes`. Kirjaa päätökset niin, että näkyy kuka päätti ja miksi. Projektin lopussa lokista tehdään case study ilman luottamuksellisia tietoja.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "Tarkistuksen ja luovutuksen välissä vastuu siirtyy oikeille ihmisille: käyttäjätesteille (mukana myös käyttäjät, joilla on saavutettavuustarpeita), tietoturvatarkastukselle ja juridiselle arviolle.",
    },

    {
      type: "heading",
      id: "flows",
      text: "Käyttäjävirrat ja haastavat polut",
      navLabel: "Haastavat polut",
    },
    {
      type: "paragraph",
      text: "Aloitan perusvirrasta: mitä vaiheita käyttäjä käy läpi tavoitteeseensa ja miten järjestelmä vastaa joka vaiheessa. Vasta sen jälkeen käyn virran läpi vaihe vaiheelta ja mietin, mitkä kohdat voivat olla osalle käyttäjistä haastavia.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Piirrän perusvirran.** Jokaisessa vaiheessa on käyttäjän tekeminen ja järjestelmän vastaus.",
        "**Kysyn jokaisesta vaiheesta, kenelle se voi olla haastava ja miksi.** Sama polku voi olla yhdelle käyttäjälle sujuva ja toiselle sietämättömän vaikea.",
        "**Lisään tarvittavat polut ja tilat:** virheilmoitukset, lisäaika, toinen tapa tehdä vaihe ja se, mitä tapahtuu, kun jokin epäonnistuu.",
      ],
    },
    {
      type: "paragraph",
      text: "Esimerkiksi julkisessa palvelussa vaihe ”kirjaudu vahvalla tunnistautumisella” voi olla helppo sille, jolla on pankkisovellus ja älypuhelin, ja este sille, jolla niitä ei ole. Pitkä lomake aikarajalla voi sopia useimmille ja olla mahdoton sille, joka tarvitsee enemmän aikaa tai käyttää ruudunlukijaa. Jokaisesta tällaisesta vaiheesta kirjaan, kenellä voi olla vaikeuksia ja mitä suunnittelu tarjoaa tilalle. Jos en tiedä, merkitsen sen aukoksi ja selvitän asian.",
    },

    {
      type: "heading",
      id: "boundaries",
      text: "Pelisäännöt",
    },
    {
      type: "list",
      items: [
        "**Suunnitelmaa ei sanota saavutettavaksi, vaatimustenmukaiseksi tai testatuksi.** Jokaisen tarkistuksen tulos on läpi, hylätty tai ei voida päätellä suunnitelmasta.",
        "**Jokainen väite merkitään** todisteeksi lähteineen tai aukoksi. Keksittyjä lainauksia, tutkimustuloksia tai lukuja ei käytetä.",
        "**Asiakasdata ei päädy tekoälylle.** Kehotteissa ja tiedostoissa ei ole oikeita nimiä, henkilötietoja eikä luottamuksellisia lukuja. Käytän paikkamerkkejä.",
        "**Päätökset kirjataan roolin mukaan,** ei nimen.",
      ],
    },
    {
      type: "paragraph",
      text: "Asiakasprojekteissa käytän tekoälyä vain silloin, kun asiakas on sen sallinut. Selvitän asian jo ennen työn alkua. Osa asiakkaista rajaa myös sitä, missä heidän aineistoaan saa säilyttää. Projektin asetustiedostossa kysytään molemmat heti ensimmäisenä päivänä.",
    },

    {
      type: "heading",
      id: "documentation",
      text: "Dokumentointi",
    },
    {
      type: "paragraph",
      text: "Dokumentit ovat Markdown-tiedostoja Gitissä, jolloin niillä on historia ja yksi oikea versio.",
    },
    {
      type: "paragraph",
      text: "Miten ne päätyvät asiakkaalle, riippuu asiakkaan omista dokumentointitavoista ja -paikoista. Jos asiakas työskentelee Confluencessa, dokumentit viedään sinne sivuina. Toinen asiakas voi haluta PDF-tiedostot tai kansion omalle jaetulle levylleen. Tämä on dokumentaation luovutus: tiedostot toimitetaan siinä muodossa ja siinä paikassa, jota asiakas jo käyttää.",
    },
    {
      type: "paragraph",
      text: "Asiakkaan työkaluun viety kopio on vain luettavissa. Sisältö kopioidaan sinne Git-tiedostosta, esimerkiksi Confluence-sivuksi tai PDF-liitteeksi, ja kopio merkitään lukukopioksi. Muutokset tehdään aina alkuperäiseen ja kopio päivitetään siitä, joten kilpailevia versioita ei synny.",
    },

    {
      type: "heading",
      id: "checks",
      text: "Automaattiset tarkistukset",
    },
    {
      type: "paragraph",
      text: "Tiedostoon kirjoitettu sääntö unohtuu helposti. Skripti ajetaan jokaisen pushin yhteydessä, ja se hälyttää esimerkiksi silloin, kun pääohjetiedosto kasvaa liian pitkäksi, skilli lakkaa latautumasta tai väri putoaa kontrastin vähimmäisrajan alle. Ei ole väliä, teinkö muutoksen minä vai tekoäly.",
    },
    {
      type: "paragraph",
      text: "Suunnittelun laadussa en nojaa kiellettyjen tyylien listaan. Annan tekoälylle sen sijaan esimerkkejä hyvästä työstä omista projekteistani, ja jokaisessa kerrotaan, mitä siinä päätettiin ja mistä luovuttiin.",
    },

    {
      type: "heading",
      id: "weight",
      text: "Prosessin pitäminen kevyenä",
      navLabel: "Kevyenä pitäminen",
    },
    {
      type: "paragraph",
      text: "Tällainen prosessi on raskas, jos yrittää tehdä kaiken. Se on rakennettu niin, että alkuun pääsee pienellä.",
    },
    {
      type: "list",
      items: [
        "**Aloitus viidellä dokumentilla:** tuotekonteksti, ongelman muotoilu, sidosryhmäkartta, vaatimukset ja päätösloki. Muut, kuten saavutettavuuslista tai luovutusdokumentti, lisätään, kun vaihe niitä tarvitsee.",
        "**Tekoäly tekee ensimmäisen version.** Liitän esimerkiksi kick-offin muistiinpanoni ja saan takaisin sidosryhmäkartan, jossa on roolit, päätösoikeudet ja aukot merkittyinä. Korjaan sen sen sijaan, että kirjoittaisin sen tyhjältä sivulta.",
        "**Säännöt tarkistuvat itse.** Esimerkiksi skilli, josta puuttuu maininta siitä, milloin sitä ei käytetä, rikkinäinen linkki tai väripari, jonka kontrasti jää alle rajan, pysäyttää tarkistuksen. Kenenkään ei tarvitse muistaa katsoa.",
        "**Ei dokumenttia ilman lukijaa.** Palautelokia ylläpidetään esimerkiksi vain silloin, kun usea sidosryhmä antaa keskenään ristiriitaista palautetta, ja case study -muistiinpanoja vain, jos aion julkaista projektin.",
      ],
    },
    {
      type: "paragraph",
      text: "Kaksi kohtaa on yhä käsityötä: lukukopion julkaiseminen asiakkaan työkaluihin ja päätösten kirjaaminen. Niiden keventäminen on seuraavana vuorossa.",
    },
  ],
};
