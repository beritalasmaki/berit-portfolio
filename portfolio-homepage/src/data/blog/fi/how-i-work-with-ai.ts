import type { BlogPost } from "../types";

export const howIWorkWithAiFi: BlogPost = {
  slug: "nain-tyoskentelen-tekoalyn-kanssa",
  translationOf: "how-i-work-with-ai",
  title: "Näin työskentelen tekoälyn kanssa",
  tabTitle: "Näin työskentelen tekoälyn kanssa",
  excerpt:
    "Pelkät kehotteet eivät enää riitä, kun tekoälyä hyödynnetään vaativassa suunnittelutyössä. Jotta työtavat pysyvät tehokkaina mutta kokonaisuus hallinnassa, rakensin projekteihin valmiin kontekstipohjan. Kuvaan tässä kuusivaiheisen prosessini sekä työnjaon: missä tekoäly auttaa parhaiten ja missä tarvitaan ihmisen näkemystä ja vastuuta.",
  date: "2026-11-18",
  tags: ["Tekoälytyökalut", "Tekoälyn käyttöönotto"],
  body: [
    {
      type: "links",
      items: [
        { label: "Katso pohja GitHubissa", href: "https://github.com/beritalasmaki/project-set-up-template" },
        {
          label: "Lue ohje",
          href: "https://github.com/beritalasmaki/project-set-up-template/blob/main/docs/ohjeet-suomeksi.md",
        },
      ],
    },
    {
      type: "paragraph",
      text: "Alkujaan aloitin uuden keskustelun tekoälyn kanssa kirjoittamalla suoraan kehotteen ja tarkentamalla sitä mukaa kuin keskustelu eteni. Opin kuitenkin aika nopeasti, että loppujen lopuksi tulos riippuu paljon enemmän siitä, mitä tekoäly tietää projektista, kuin siitä, miten kehotteen muotoilee. Aloin sitten rakentamaan uutta lähestymistapaa muutaman oman projektini kautta (mm. [omassa Design Systemissäni](https://design-system-use-case.vercel.app/) ja [agenttiajojen katselmointinäkymässä](https://demo-t-example.vercel.app/)). Kirjoitin tekoälylle ensin säännöt ja kontekstin: mikä tuote on, mitkä säännöt pätevät ja mitä tekoäly saa ja ei saa tehdä. Tulokset olivat tuolloin jo huomattavasti parempia.",
    },
    {
      type: "paragraph",
      text: "Tästä syntyi pohja, joka toimii nyt hyvänä lähtökohtana uusissa projekteissa. Ajatuksena oli tehdä se projekteihin, joissa saavutettavuus ja tietoturva ovat tärkeässä roolissa ja sidosryhmiä on useampia. Tällaisia ovat usein julkisen sektorin sekä pankki-, vakuutus-, terveydenhuolto- ja turvallisuusalan projektit.",
    },
    {
      type: "paragraph",
      text: "Asiakasprojekteissa käytän tekoälyä vain silloin, kun asiakas on sen sallinut. Selvitän asian jo ennen työn alkua. Osa asiakkaista rajaa myös sitä, missä heidän aineistoaan saa säilyttää.",
    },

    {
      type: "heading",
      id: "roles",
      text: "Mitä tekoäly osaa tehdä hyvin, ja missä asioissa tarvitaan ihmisen apua",
      navLabel: "Tekoäly ja ihminen",
    },
    {
      type: "paragraph",
      text: "Hyvä konteksti selkeyttää myös työnjakoa: joissakin asioissa tekoäly osaa toimia hyvin, ja joissakin se tarvitsee edelleen ihmisen päätöksentekoa ja ohjausta.",
    },
    {
      type: "subheading",
      text: "Missä asioissa tekoälyä kannattaa hyödyntää",
    },
    {
      type: "list",
      items: [
        "**Raakamuistiinpanoista jäsennelty ensimmäinen luonnos.** Sidosryhmäkartta, vaatimukset ja käyttäjäpolkujen kuvaus syntyvät nopeasti.",
        "**Pitkän aineiston tiivistäminen** ja sen löytäminen, mikä siitä puuttuu.",
        "**Johdonmukaisuuden tarkistus.** Onko jokaisella näkymällä kaikki tilat, ja käytetäänkö käsitettä kaikkialla samalla tavalla.",
        "**Vaihtoehtojen tuottaminen,** joista voi valita.",
        "**Toistuva työ,** kuten taulukot, muotoilu ja dokumentointi.",
      ],
    },
    {
      type: "paragraph",
      text: "Luonnokset ja tiivistelmät on silti aina tarkistettava eikä niitä saa hyväksyä sokeasti, koska tekoäly voi jättää huomioimatta tärkeitä asioita. Siksi yleensä kirjoitan omat nostoni ylös jo ennen kuin pyydän tekoälyä tiivistämään tai luonnostelemaan. Näin huomaan heti, jos jokin tärkeä asia on jäänyt sen versiosta pois.",
    },
    {
      type: "subheading",
      text: "Missä asioissa tarvitaan ihmisen päätöksentekoa ja ohjausta",
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
      text: "Mielestäni tällainen työnjako toimii hyvin ja varmistaa, että suunnittelijan huomiot ja kädenjälki säilyvät lopputuloksessa.",
    },

    {
      type: "heading",
      id: "context",
      text: "Projektin konteksti kirjallisena",
      navLabel: "Konteksti kirjallisena",
    },
    {
      type: "paragraph",
      text: "Tekoäly ei tiedä projektista tai brändistä mitään, kun uusi istunto alkaa. Ilman kirjoitettua kontekstia se arvailee puuttuvat kohdat oppimateriaalinsa ja todennäköisyyksien perusteella, ja lopputuote muistuttaa helposti mitä tahansa muuta vastaavaa ratkaisua. Lisäksi liiketoiminnan tavoitteet ja asiakaskohtaiset vaatimukset jäävät kokonaan huomioimatta.",
    },
    {
      type: "paragraph",
      text: "Siksi luon nykyään jokaiselle uudelle projektille oman yksityisen työtilan (Git-repositorion) omasta pohjastani. Työtilaan lisätään lyhyitä dokumentteja, jotka tekoäly lukee ennen työn aloittamista: kenelle tuote on tehty, ongelma käyttäjän tilanteena, kuka päättää mistäkin, vaatimukset ja päätösloki. Lisäksi liitän mukaan anonymisoidut raakamuistiinpanot, joista tekoäly luonnostelee ensimmäisen version ja minä korjaan sen. Mitä muistiinpanoista ei löydy, merkitään selvitettäväksi asiaksi (aukoksi).",
    },
    {
      type: "paragraph",
      text: "Ajatuksena on, että työtila on omaa työskentelyäni ja dokumentointiani varten, enkä vie sitä asiakkaan omaan repositorioon ellei sitä erikseen pyydetä.",
    },

    {
      type: "heading",
      id: "process",
      text: "Prosessi",
    },
    {
      type: "paragraph",
      text: "Vaiheita on kuusi. Jokaiseen kuuluu yksi tai useampi skill eli tekoälylle kirjoitettu ohje sekä artefaktit eli dokumentit, joihin tulos kirjataan.",
    },
    {
      type: "timeline",
      labelledBy: "process",
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
          meta: [
            { label: "Skill", values: ["problem-framing"] },
            { label: "Artefaktit", values: ["00 product context", "01 problem framing"] },
          ],
          body: "Toimeksianto muutetaan käyttäjän tilanteeksi, jossa ei ole ratkaisua valmiina, ja listataan, mitä tiedetään ja mikä puuttuu. Kirjoitan toimeksiannon ylös sellaisenaan, mutta anonymisoin sen niin, ettei asiakkaan tai kenenkään henkilön nimi näy. Asiakkaan tiedot pidän salaisina.",
        },
        {
          title: "Ihmisten ymmärtäminen",
          meta: [
            { label: "Skill", values: ["stakeholder-map"] },
            { label: "Artefaktit", values: ["02 stakeholder map", "03 requirements spec"] },
          ],
          body: "Selvitetään, kuka päättää mistäkin, ja kirjataan vaatimukset omistajineen. Erimielisyydet nousevat yleensä esiin vasta projektin aikana, joten alussa tärkeintä on tietää, kenen sana painaa. Ristiriidat kirjataan vierekkäin sitä mukaa kuin ne tulevat esiin, enkä anna tekoälyn ratkaista niitä.",
        },
        {
          title: "Suunnittelu",
          meta: [
            { label: "Skill", values: ["user-flow-and-states"] },
            { label: "Artefaktit", values: ["04 user flows and states", "07 design system rules"] },
          ],
          body: "Käyttäjäpolut kuvataan vaihe vaiheelta virhetilanteineen, ja jokaiselle näkymälle listataan kaikki tilat Design Systemin sääntöjä vasten. Tekoäly merkitsee tilat puuttuviksi, kunnes vahvistan niiden olevan suunniteltuja. Jos Design System on asiakkaan oma ja salainen, sen sääntöjä käytetään vain asiakkaan luvalla ja siten kuin asiakkaan kanssa on sovittu.",
        },
        {
          title: "Tarkistus",
          meta: [
            { label: "Skillit", values: ["a11y-gate", "security-privacy-brief", "sameness-check"] },
            { label: "Artefaktit", values: ["05 accessibility checklist", "06 security and privacy brief"] },
          ],
          body: "Käydään läpi saavutettavuus, tiedot ja käyttöoikeudet sekä se, mitkä valinnat jäivät pelkiksi oletuksiksi. Kontrastit laskee skripti. Tämä on suunnitteluvaiheen katselmointi, ei auditointi.",
        },
        {
          title: "Luovutus",
          meta: [
            { label: "Skill", values: ["procurement-ready-handoff"] },
            { label: "Artefaktit", values: ["08 handoff spec", "09 stakeholder feedback log (tarvittaessa)"] },
          ],
          body: "Kerrotaan, mikä on valmista, kuka sen hyväksyi ja mitä kukin toimittaja tekee. Katselmoinnin kommentit kootaan yhteen sen kanssa, kuka niistä päättää.",
        },
        {
          title: "Kirjaaminen ja pohdinta",
          meta: [
            { label: "Skillit", values: ["decision-log", "nda-safe-case-study"] },
            { label: "Artefaktit", values: ["10 decision log", "11 case study notes"] },
          ],
          body: "Päätökset kirjataan niin, että näkyy kuka päätti ja miksi. Jos projekti julkaistaan, sen lopussa lokista tehdään case study ilman luottamuksellisia tietoja.",
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
      text: "Käyttäjäpolut ja haastavat polut",
      navLabel: "Haastavat polut",
    },
    {
      type: "paragraph",
      text: "Yleensä aloitan käyttäjäpolusta, jossa käyttäjä on onnistuneesti päässyt tavoitteeseensa. Mietitään mitä vaiheita käyttäjä käy läpi, jotta pääsee tavoitteeseensa ja miten järjestelmä vastaa joka vaiheessa. Vasta sen jälkeen käyn polun läpi vaihe vaiheelta ja mietin, mitkä kohdat voivat olla osalle käyttäjistä haastavia.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Piirrän onnistuneen polun.** Jokaisessa vaiheessa näkyy mitä käyttäjä tekee ja miten järjestelmä vastaa siihen.",
        "**Mietin jokaisen vaiheen kohdalla, kenelle se voi olla haastava ja miksi.** Sama polku voi olla yhdelle käyttäjälle sujuva ja toiselle sietämättömän vaikea.",
        "**Lopuksi lisätään muut polut ja tilat:** virheilmoitukset, lisäaika, toinen tapa tehdä vaihe ja se, mitä tapahtuu, kun jokin epäonnistuu.",
      ],
    },
    {
      type: "paragraph",
      text: "Polku on reitti, jota pitkin käyttäjä etenee tavoitteeseensa, ja tila kertoo, missä tilanteessa yksittäinen näkymä on. Muita polkuja ovat toinen tapa tehdä sama vaihe ja se, mitä tapahtuu, kun jokin epäonnistuu. Tiloja ovat virheilmoitus, latausnäkymä, tyhjä näkymä ja lisäaika.",
    },
    {
      type: "paragraph",
      text: "Esimerkiksi julkisessa palvelussa vaihe ”kirjaudu vahvalla tunnistautumisella” voi olla helppo sellaiselle käyttäjälle, jolla on pankkisovellus ja älypuhelin, ja este käyttäjille, joilla niitä ei ole. Pitkä lomake aikarajalla voi sopia useimmille ja olla mahdoton käyttäjälle, joka tarvitsee enemmän aikaa tai käyttää ruudunlukijaa. Jokaisesta tällaisesta vaiheesta kirjaan, kenellä voi olla vaikeuksia ja mitä suunnittelu tarjoaa tilalle. Jos en tiedä, merkitsen sen aukoksi ja selvitän asian.",
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
        "**Asiakasdata ei päädy tekoälylle.** Kehotteissa ja tiedostoissa ei ole oikeita nimiä, henkilötietoja eikä luottamuksellisia lukuja. Niiden tilalla käytetään korvaavia nimiä ja lukuja. Poikkeus on asiakkaan oma Design System: se on sidoksissa asiakkaan nimeen ja voi olla salainen, joten sen käytöstä tekoälyn kanssa sovitaan asiakkaan kanssa erikseen.",
        "**Päätökset kirjataan roolin mukaan,** ei nimen.",
      ],
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
      text: "Miten ne päätyvät asiakkaalle, riippuu asiakkaan omista dokumentointitavoista ja -paikoista. Jos asiakas työskentelee Confluencessa, dokumentit viedään sinne sivuina. Toinen asiakas voi haluta PDF-tiedostot tai kansion omalle jaetulle levylleen. Dokumentaatio toimitetaan asiakkaan vaatimusten mukaisesti oikeassa muodossa ja oikeaan paikkaan.",
    },
    {
      type: "paragraph",
      text: "Jotta asiakkaan puolella oleva dokumentaatio ei jää vanhaksi, toimitetut versiot numeroidaan ja päivämäärätään, ja uusi versio viedään asiakkaan työkaluun aina, kun dokumentti muuttuu. Vanhat versiot jäävät talteen. Jos asiakas haluaa ylläpitää jotain dokumenttia itse, sovimme heti alussa, että heidän versionsa on siitä lähtien virallinen versio.",
    },
    {
      type: "paragraph",
      text: "Tästä on hyötyä myös myöhemmin: tekoälyn tai tavallisen hakutoiminnon kautta dokumentit löydetään helposti ja nähdään, miten asiat ovat edistyneet projektin tai tuotekehityksen edetessä. Dokumentit on tärkeää laittaa oikeisiin kansioihin ja vuosiin, esimerkiksi 2026/Käyttäjätutkimukset/Tutkimuksen teeman nimi ja päivämäärä.",
    },

    {
      type: "heading",
      id: "checks",
      text: "Automaattiset tarkistukset",
    },
    {
      type: "paragraph",
      text: "Sääntöjä on helppo rikkoa huomaamatta. Siksi projektin tiedostoille on automaattinen tarkistus, joka ajetaan aina, kun tiedostoihin tehdään muutos. Se huomauttaa esimerkiksi, jos tekoälyn pääohje on kasvanut liian pitkäksi, tiedostossa on rikkinäinen linkki tai värien kontrasti on liian heikko. Tarkistus toimii samalla tavalla, tekipä muutoksen minä tai tekoäly.",
    },
    {
      type: "paragraph",
      text: "Tekoälyn ohjaamiseen en käytä pelkkää listaa siitä, mitä se ei saa tehdä. Kerron sen sijaan, mitkä reunaehdot suunnittelutehtävää koskevat: brändi, tekniikka, saavutettavuus ja liiketoiminta eli se, mitä tuotteen pitää saada käyttäjä tekemään. Lisäksi annan esimerkkejä onnistuneesta suunnittelusta vastaavista projekteista, joita käytän vertailukohtana. Esimerkkien ei tarvitse olla omiani. Niissä esimerkeissä, joista tietoa löytyy, voidaan lisäksi kertoa, mitä päätettiin ja mistä luovuttiin, jotta tekoäly ymmärtää perustelut eikä vain lopputulosta.",
    },
    {
      type: "paragraph",
      text: "Reunaehtojen merkityksestä kirjoittaa myös [Why Your AI Prompts Aren't Working — And How to Fix Them as a Designer](https://medium.com/design-bootcamp/why-your-ai-prompts-arent-working-and-how-to-fix-them-as-a-designer-18d26592290f) (Medium / Design Bootcamp, 2026). Artikkelin mukaan reunaehdot eivät kahlitse tekoälyn luovuutta vaan tekevät siitä käyttökelpoista, ja mitä täsmällisemmin ne kehotteessa kertoo, sitä paremmin tulos soveltuu juuri siihen ongelmaan, jota ratkaisee.",
    },

    {
      type: "heading",
      id: "weight",
      text: "Prosessin pitäminen kevyenä",
      navLabel: "Kevyenä pitäminen",
    },
    {
      type: "paragraph",
      text: "Tällainen prosessi voi käydä raskaaksi, jos yrittää tehdä kaiken kerrallaan. Alkuun kuitenkin pääsee pienemmälläkin tavalla:",
    },
    {
      type: "list",
      items: [
        "**Aloitus viidellä dokumentilla:** tuotekonteksti, ongelman muotoilu, sidosryhmäkartta, vaatimukset ja päätösloki. Muut, kuten saavutettavuuslista tai luovutusdokumentti, lisätään, kun vaihe niitä tarvitsee.",
        "**Tekoäly tekee ensimmäisen version.** Liitän esimerkiksi anonymisoidut kick-offin muistiinpanoni ja saan takaisin sidosryhmäkartan, jossa on roolit, päätösoikeudet ja aukot merkittyinä. Korjaan sen sen sijaan, että kirjoittaisin sen tyhjältä sivulta.",
        "**Osa säännöistä tarkistuu itse.** Jos tekstiin jää rikkinäinen linkki tai värien kontrasti jää liian heikoksi, automaattinen tarkistus huomauttaa siitä. Näitä minun ei tarvitse muistaa tarkistaa käsin.",
        "**Ei dokumenttia ilman tarvetta.** Dokumentti tehdään vasta, kun sille on selkeä tarve. Palauteloki, johon kirjataan sidosryhmien kommentit ja se, kuka niistä päättää, tehdään vain silloin, kun usea sidosryhmä antaa keskenään ristiriitaista palautetta. Case study -muistiinpanot, joista syntyy portfolioon julkaistava projektiesittely, tehdään vain, jos aion julkaista projektin.",
      ],
    },
    {
      type: "paragraph",
      text: "Asiakkaan työkalut ja päätösten kirjaaminen tehdään käsin. Näitäkin voidaan tarvittaessa keventää eri tavoin:",
    },
    {
      type: "list",
      items: [
        "**Vien vain muuttuneet dokumentit,** ja vasta sovituissa välietapeissa, kuten kick-offin, katselmoinnin ja luovutuksen jälkeen, ei jokaisen pienen muutoksen jälkeen.",
        "**Pyydän tekoälyä valmistelemaan vientiversion.** Se muotoilee Markdown-dokumentin asiakkaan työkalun tai PDF:n vaatimaan muotoon, ja minä tarkistan lopputuloksen.",
        "**Kirjaan päätöksen yhdellä rivillä heti, kun se tehdään:** päivä, päättäjän rooli, päätös ja syy. Tekoäly voi luonnostella rivin palaverin muistiinpanoista, ja minä vain hyväksyn tai korjaan sen.",
        "**Kirjaan vain päätökset, joita on vaikea perua tai jotka vaikuttavat muihin.** Pienet valinnat eivät tarvitse omaa merkintää.",
      ],
    },
    {
      type: "paragraph",
      text: "Pohjan tarkoitus ei ole tuottaa lisää dokumentteja vaan varmistaa, että tekoäly tietää, mistä projektissa on kyse, ja että suunnittelija päättää, mitä sen kanssa tehdään. Aloita pienestä: yksi projekti, muutama dokumentti ja omat muistiinpanot ensin. Loput lisätään sitä mukaa, kun niille on tarvetta.",
    },
  ],
};
