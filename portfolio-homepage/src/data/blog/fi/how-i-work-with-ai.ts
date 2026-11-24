import type { BlogPost } from "../types";

export const howIWorkWithAiFi: BlogPost = {
  slug: "nain-tyoskentelen-tekoalyn-kanssa",
  translationOf: "how-i-work-with-ai",
  title: "Näin työskentelen tekoälyn kanssa",
  tabTitle: "Näin työskentelen tekoälyn kanssa",
  excerpt:
    "Pelkät kehotteet eivät riitä, kun tekoälyä käytetään vaativassa suunnittelutyössä. Kerron tässä, miten käytän tekoälyä tutkimuksessa ja suunnittelussa, miten rakensin projekteihin kontekstipohjan ja missä kohdissa päätökset ja vastuu pysyvät minulla.",
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
      type: "heading",
      id: "start",
      text: "Lähtökohta",
    },
    {
      type: "paragraph",
      text: "Aiemmin kirjoitin tekoälylle suoraan kehotteen ja tarkensin sitä keskustelun edetessä. Opin kuitenkin nopeasti, että tulos riippuu paljon enemmän siitä, mitä tekoäly tietää projektista, kuin siitä, miten kehotteen muotoilee.",
    },
    {
      type: "paragraph",
      text: "Aloin rakentamaan uutta lähestymistapaa omissa projekteissani, muun muassa [omassa Design Systemissäni](https://design-system-use-case.vercel.app/) ja [agenttiajojen katselmointinäkymässä](https://demo-t-example.vercel.app/). Kirjoitin tekoälylle ensin kontekstin ja säännöt: mikä tuote on, mitä tekoäly saa tehdä ja mitä ei. Tulokset olivat tuolloin jo huomattavasti parempia.",
    },
    {
      type: "paragraph",
      text: "Tästä syntyi pohja, jota käytän nyt uusien projektien lähtökohtana. Tein pohjan erityisesti projekteihin, joissa saavutettavuus ja tietoturva ovat tärkeitä ja sidosryhmiä on useita. Tällaisia ovat usein julkisen sektorin sekä pankki-, vakuutus-, terveydenhuolto- ja turvallisuusalan projektit.",
    },
    {
      type: "paragraph",
      text: "Asiakasprojekteissa käytän tekoälyä vain asiakkaan luvalla. Selvitän asian ennen työn alkua, ja samalla sovimme, mitä tekoälypalvelua saa käyttää ja missä aineistoa saa säilyttää.",
    },

    {
      type: "heading",
      id: "research",
      text: "Tekoäly tutkimuksessa",
    },
    {
      type: "paragraph",
      text: "Tutkimuksessa tekoäly nopeuttaa eniten valmistelua ja jäsentämistä. Luonnostelen tekoälyn kanssa haastattelurungot ja työpajojen materiaalit sekä suunnittelen työn vaiheet ja aikataulun. Tekoälyn avulla teen myös haastatteluista yhteenvedot. Ennen kuin annan haastatteluaineiston tekoälylle, poistan siitä nimet ja muut tunnistettavat tiedot.",
    },
    {
      type: "paragraph",
      text: "Yhteenvetoja tehdessä kirjoitan omat havaintoni ensin. Tekoäly löytää toistuvat teemat nopeasti, mutta inhimilliset tulkinnat teen itse: puhetavan, sävyt, eleet, epäröinnin ja sen, mitä jätettiin sanomatta.",
    },
    {
      type: "paragraph",
      text: "Tekoäly auttaa myös rungoissa. Palvelupiirustuksen (service blueprint), tiekartan ja muiden pohjien ensimmäinen versio syntyy nopeasti, mutta sisältö tulee tutkimuksesta ja sidosryhmiltä.",
    },

    {
      type: "heading",
      id: "design",
      text: "Tekoäly suunnittelussa",
    },
    {
      type: "paragraph",
      text: "Käyttäjäpolkuja piirtäessä tekoäly on hyvä sparrauskumppani. Kun polku pitää avata vaihe vaiheelta, tekoälyn avulla löytyvät haarat ja virhetilanteet, jotka unohtuvat helposti. Ideoinnissa pyydän tekoälyltä variaatioita eli useita tapoja ratkaista sama näkymä tai vaihe. Niistä valitsen ja yhdistelen. Joskus ideointi alkaa silti paperilla ja kynällä.",
    },
    {
      type: "paragraph",
      text: "Prototyypit ja Design Systemin komponentit rakennan tekoälyn kanssa koodiin asti, ja samoin ylläpidän Design Systemiä. Toimiva prototyyppi näyttää heti, kestääkö suunnitelma oikean käytön.",
    },
    {
      type: "paragraph",
      text: "Käytän Figmaa ja Claude Designia, mutta työkalu on minulle sivuseikka. Tärkeintä on, että työ tulee tehtyä.",
    },

    {
      type: "heading",
      id: "roles",
      text: "Työnjako: tekoäly ja ihminen",
      navLabel: "Tekoäly ja ihminen",
    },
    {
      type: "paragraph",
      text: "Hyvä konteksti selkeyttää myös työnjakoa. Joissakin asioissa tekoäly toimii hyvin, toisissa tarvitaan edelleen ihmisen päätöksentekoa ja ohjausta.",
    },
    {
      type: "subheading",
      text: "Missä tekoälyä kannattaa hyödyntää",
    },
    {
      type: "list",
      items: [
        "**Ensimmäinen luonnos.** Raakamuistiinpanoista syntyy nopeasti jäsennelty sidosryhmäkartta, vaatimukset ja käyttäjäpolkujen kuvaus.",
        "**Tiivistäminen.** Pitkän aineiston tiivistäminen ja sen löytäminen, mitä siitä puuttuu.",
        "**Johdonmukaisuus.** Onko jokaisella näkymällä kaikki tilat, ja käytetäänkö käsitettä kaikkialla samalla tavalla?",
        "**Vaihtoehdot.** Useita ratkaisuja, joista voi valita.",
        "**Toistuva työ.** Taulukot, muotoilu ja dokumentointi.",
      ],
    },
    {
      type: "paragraph",
      text: "Luonnokset ja tiivistelmät on silti aina tarkistettava, koska tekoäly voi jättää tärkeitä asioita huomiotta. Siksi kirjoitan yleensä omat nostoni ylös ennen kuin pyydän tekoälyä tiivistämään tai luonnostelemaan. Näin huomaan heti, jos jokin tärkeä asia puuttuu tekoälyn versiosta.",
    },
    {
      type: "subheading",
      text: "Missä tarvitaan ihmistä",
    },
    {
      type: "list",
      items: [
        "**Suunta ja kompromissit.** Mitä rakennetaan, mitä jätetään pois ja mikä on riittävän hyvä.",
        "**Ihmisten ja kontekstin ymmärtäminen.** Empatia käyttäjiä kohtaan, kuka oikeasti päättää, mitä käyttäjä kokee ja mitä organisaatio voi hyväksyä.",
        "**Visuaalinen viimeistely.** Lopputuloksen pitää näyttää ja kuulostaa brändiltä ja tuntua tehdyltä juuri tälle tuotteelle ja sen käyttäjille.",
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
      text: "Tekoäly ei tiedä projektista tai brändistä mitään, kun uusi istunto alkaa. Ilman kirjoitettua kontekstia tekoäly arvailee puuttuvat kohdat oppimateriaalinsa ja todennäköisyyksien perusteella, ja lopputulos muistuttaa helposti mitä tahansa vastaavaa ratkaisua. Lisäksi liiketoiminnan tavoitteet ja asiakaskohtaiset vaatimukset jäävät kokonaan huomioimatta.",
    },
    {
      type: "paragraph",
      text: "Siksi luon jokaiselle uudelle projektille oman yksityisen työtilan (Git-repositorion) pohjastani. Työtilaan lisätään lyhyitä dokumentteja, jotka tekoäly lukee ennen työn aloittamista: kenelle tuote on tehty, ongelma käyttäjän tilanteena, kuka päättää mistäkin, vaatimukset ja päätösloki. Lisäksi liitän mukaan anonymisoidut raakamuistiinpanot, joista tekoäly luonnostelee ensimmäisen version ja minä korjaan sen. Mitä muistiinpanoista ei löydy, merkitään selvitettäväksi asiaksi eli aukoksi.",
    },
    {
      type: "paragraph",
      text: "Työtila on omaa työskentelyäni ja dokumentointiani varten, enkä vie sitä asiakkaan repositorioon, ellei sitä erikseen pyydetä.",
    },

    {
      type: "heading",
      id: "constraints",
      text: "Reunaehdot kieltolistan sijaan",
    },
    {
      type: "paragraph",
      text: "Tekoälyn ohjaamiseen en käytä pelkkää listaa siitä, mitä se ei saa tehdä. Kerron sen sijaan, mitkä reunaehdot suunnittelutehtävää koskevat: brändi, tekniikka, saavutettavuus ja liiketoiminta eli se, mitä tuotteen pitää saada käyttäjä tekemään.",
    },
    {
      type: "paragraph",
      text: "Lisäksi annan vertailukohdaksi esimerkkejä onnistuneesta suunnittelusta vastaavissa projekteissa. Esimerkkien ei tarvitse olla omiani. Kun tietoa löytyy, kerron myös, mitä niissä päätettiin ja mistä luovuttiin, jotta tekoäly ymmärtää perustelut eikä vain lopputulosta.",
    },
    {
      type: "paragraph",
      text: "Reunaehtojen merkityksestä kirjoittaa myös artikkeli [Why Your AI Prompts Aren't Working — And How to Fix Them as a Designer](https://medium.com/design-bootcamp/why-your-ai-prompts-arent-working-and-how-to-fix-them-as-a-designer-18d26592290f) (Medium / Design Bootcamp, 2026). Artikkelin mukaan reunaehdot tekevät tekoälyn tuotoksesta käyttökelpoista. Mitä täsmällisemmin ne kehotteessa kertoo, sitä paremmin tulos sopii juuri siihen ongelmaan, jota ratkaisee.",
    },

    {
      type: "heading",
      id: "process",
      text: "Prosessi",
    },
    {
      type: "paragraph",
      text: "Prosessissa on kuusi vaihetta. Jokaiselle on oma ohje tekoälylle (skill) ja dokumentit, joihin tulos kirjataan. Tarkemmat ohjeet löytyvät pohjasta GitHubissa.",
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
          body: "Toimeksianto muutetaan käyttäjän tilanteeksi, jossa ei ole valmista ratkaisua, ja listataan, mitä tiedetään ja mikä puuttuu. Anonymisoin toimeksiannon ennen kuin tekoäly käsittelee sitä.",
        },
        {
          title: "Ihmisten ymmärtäminen",
          meta: [
            { label: "Skill", values: ["stakeholder-map"] },
            { label: "Artefaktit", values: ["02 stakeholder map", "03 requirements spec"] },
          ],
          body: "Selvitetään, kuka päättää mistäkin, ja kirjataan vaatimukset omistajineen. Ristiriidat kirjataan vierekkäin sitä mukaa kuin ne tulevat esiin, mutta tekoäly ei ratkaise niitä.",
        },
        {
          title: "Suunnittelu",
          meta: [
            { label: "Skill", values: ["user-flow-and-states"] },
            { label: "Artefaktit", values: ["04 user flows and states", "07 design system rules"] },
          ],
          body: "Käyttäjäpolut kuvataan virhetilanteineen, ja jokaisen näkymän tilat listataan Design Systemin sääntöjä vasten. Tekoäly merkitsee tilat puuttuviksi, kunnes vahvistan ne.",
        },
        {
          title: "Tarkistus",
          meta: [
            { label: "Skillit", values: ["a11y-gate", "security-privacy-brief", "sameness-check"] },
            { label: "Artefaktit", values: ["05 accessibility checklist", "06 security and privacy brief"] },
          ],
          body: "Käydään läpi saavutettavuus, tiedot ja käyttöoikeudet sekä valinnat, jotka jäivät oletuksiksi. Kontrastit laskee skripti. Tämä on suunnitteluvaiheen katselmointi, ei auditointi.",
        },
        {
          title: "Luovutus",
          meta: [
            { label: "Skill", values: ["procurement-ready-handoff"] },
            { label: "Artefaktit", values: ["08 handoff spec", "09 stakeholder feedback log (tarvittaessa)"] },
          ],
          body: "Kerrotaan, mikä on valmista, kuka sen hyväksyi ja mitä kukin toimittaja tekee.",
        },
        {
          title: "Kirjaaminen ja pohdinta",
          meta: [
            { label: "Skillit", values: ["decision-log", "nda-safe-case-study"] },
            { label: "Artefaktit", values: ["10 decision log", "11 case study notes"] },
          ],
          body: "Päätökset kirjataan niin, että näkyy, kuka päätti ja miksi. Jos projekti julkaistaan, lokista tehdään lopuksi case study ilman luottamuksellisia tietoja.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "Tarkistuksen ja luovutuksen välissä vastuu siirtyy ihmisille: käyttäjätesteille (mukana myös käyttäjät, joilla on saavutettavuustarpeita), tietoturvatarkastukselle ja juridiselle arviolle.",
    },

    {
      type: "heading",
      id: "flows",
      text: "Käyttäjäpolut ja haastavat polut",
      navLabel: "Haastavat polut",
    },
    {
      type: "paragraph",
      text: "Polku on reitti, jota pitkin käyttäjä etenee tavoitteeseensa. Tila kertoo, missä tilanteessa yksittäinen näkymä on, esimerkiksi virheilmoitus, latausnäkymä tai tyhjä näkymä. Työskentelen polkujen kanssa kolmessa vaiheessa:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Onnistunut polku.** Piirrän ensin polun, jossa käyttäjä pääsee tavoitteeseensa. Jokaisessa vaiheessa näkyy, mitä käyttäjä tekee ja miten järjestelmä vastaa.",
        "**Haastavat kohdat.** Mietin jokaisen vaiheen kohdalla, kenelle se voi olla vaikea ja miksi. Sama polku voi olla yhdelle sujuva ja toiselle sietämättömän vaikea.",
        "**Muut polut ja tilat.** Lopuksi lisätään virheilmoitukset, lisäaika, toinen tapa tehdä vaihe ja se, mitä tapahtuu, kun jokin epäonnistuu.",
      ],
    },
    {
      type: "paragraph",
      text: "Esimerkiksi julkisessa palvelussa vaihe ”kirjaudu vahvalla tunnistautumisella” voi olla helppo käyttäjälle, jolla on pankkisovellus ja älypuhelin, mutta este niille, joilla niitä ei ole. Pitkä lomake aikarajalla voi sopia useimmille ja olla mahdoton käyttäjälle, joka tarvitsee enemmän aikaa tai käyttää ruudunlukijaa.",
    },
    {
      type: "paragraph",
      text: "Jokaisesta tällaisesta vaiheesta kirjaan, kenellä voi olla vaikeuksia ja mitä suunnittelu tarjoaa tilalle. Jos en tiedä, merkitsen sen aukoksi ja selvitän asian.",
    },

    {
      type: "heading",
      id: "boundaries",
      text: "Pelisäännöt ja tietoturva",
    },
    {
      type: "list",
      items: [
        "**Ei liioiteltuja väitteitä.** Suunnitelmaa ei sanota saavutettavaksi, vaatimustenmukaiseksi tai testatuksi. Jokaisen tarkistuksen tulos on läpi, hylätty tai ei voida päätellä suunnitelmasta.",
        "**Todiste tai aukko.** Jokainen väite merkitään todisteeksi lähteineen tai aukoksi. Keksittyjä lainauksia, tutkimustuloksia tai lukuja ei käytetä.",
        "**Ei henkilötietoja tekoälylle.** Kehotteissa ja tiedostoissa ei ole oikeita nimiä, henkilötietoja eikä luottamuksellisia lukuja. Niiden tilalla käytetään korvaavia nimiä ja lukuja.",
        "**Vain hyväksytty palvelu.** Muuta projektitietoa, kuten vaatimuksia ja tietoturvabriefiä, käsittelen vain tekoälypalvelussa, jonka asiakas on hyväksynyt.",
        "**Rooli, ei nimi.** Päätökset kirjataan roolin mukaan. Jos rooli yksinään tunnistaa henkilön, käytän yleisempää kuvausta.",
        "**Case study vain luvalla.** Projektista julkaistaan case study vain asiakkaan luvalla ja ilman luottamuksellisia tietoja.",
      ],
    },

    {
      type: "heading",
      id: "documentation",
      text: "Dokumentointi",
    },
    {
      type: "paragraph",
      text: "Dokumentit ovat Markdown-tiedostoja Gitissä, joten niillä on historia ja yksi oikea versio. Asiakkaalle ne toimitetaan asiakkaan omien käytäntöjen mukaan: Confluence-sivuina, PDF-tiedostoina tai kansiona asiakkaan jaetulla levyllä.",
    },
    {
      type: "paragraph",
      text: "Jotta asiakkaan puolen dokumentaatio ei vanhene, toimitetut versiot numeroidaan ja päivätään. Uusi versio viedään asiakkaan työkaluun aina, kun dokumentti muuttuu, ja vanhat versiot jäävät talteen. Jos asiakas haluaa ylläpitää jotain dokumenttia itse, sovimme heti alussa, että heidän versionsa on siitä lähtien virallinen versio.",
    },
    {
      type: "paragraph",
      text: "Hyvin järjestetyt dokumentit löytyvät myöhemmin helposti tekoälyn tai tavallisen haun avulla, ja niistä näkee, miten asiat ovat edenneet. Siksi järjestän ne kansioihin vuoden ja aiheen mukaan, esimerkiksi 2026/Käyttäjätutkimukset/Tutkimuksen teema ja päivämäärä.",
    },

    {
      type: "heading",
      id: "checks",
      text: "Automaattiset tarkistukset",
    },
    {
      type: "paragraph",
      text: "Sääntöjä on helppo rikkoa huomaamatta. Siksi projektin tiedostoille ajetaan automaattinen tarkistus aina, kun niihin tehdään muutos. Tarkistus huomauttaa esimerkiksi, jos tekoälyn pääohje on kasvanut niin pitkäksi, että tärkeät säännöt hukkuvat muun tekstin sekaan, tiedostossa on rikkinäinen linkki tai värien kontrasti on liian heikko luettavaksi. Se toimii samalla tavalla, tekipä muutoksen minä tai tekoäly.",
    },

    {
      type: "heading",
      id: "weight",
      text: "Prosessin pitäminen kevyenä",
      navLabel: "Kevyenä pitäminen",
    },
    {
      type: "paragraph",
      text: "Tällainen prosessi voi käydä raskaaksi, jos yrittää tehdä kaiken kerralla. Alkuun pääsee kuitenkin pienemmälläkin:",
    },
    {
      type: "list",
      items: [
        "**Aloitus viidellä dokumentilla.** Tuotekonteksti, ongelman muotoilu, sidosryhmäkartta, vaatimukset ja päätösloki. Muut, kuten saavutettavuuslista tai luovutusdokumentti, lisätään, kun vaihe tarvitsee niitä.",
        "**Tekoäly tekee ensimmäisen version.** Liitän esimerkiksi anonymisoidut kick-offin muistiinpanoni ja saan takaisin sidosryhmäkartan, jossa roolit, päätösoikeudet ja aukot on merkitty. Korjaan version sen sijaan, että kirjoittaisin sidosryhmäkartan tyhjältä sivulta.",
        "**Osa säännöistä tarkistuu itse.** Jos tekstiin jää rikkinäinen linkki tai värien kontrasti on liian heikko, automaattinen tarkistus huomauttaa siitä. Näitä minun ei tarvitse muistaa tarkistaa käsin.",
        "**Ei dokumenttia ilman lukijaa.** Dokumentti tehdään vasta, kun joku oikeasti tarvitsee sitä. Palauteloki tehdään esimerkiksi vain silloin, kun usea sidosryhmä antaa ristiriitaista palautetta, ja case study -muistiinpanot vain, jos aion julkaista projektin.",
      ],
    },
    {
      type: "paragraph",
      text: "Asiakkaan työkaluihin vieminen ja päätösten kirjaaminen ovat käsityötä, mutta niitäkin voi keventää:",
    },
    {
      type: "list",
      items: [
        "**Vien vain muuttuneet dokumentit** ja vain sovituissa välietapeissa, kuten kick-offin, katselmoinnin ja luovutuksen jälkeen, en jokaisen pienen muutoksen jälkeen.",
        "**Pyydän tekoälyä valmistelemaan vientiversion.** Tekoäly muotoilee Markdown-dokumentin asiakkaan työkalun tai PDF:n vaatimaan muotoon, ja minä tarkistan lopputuloksen.",
        "**Kirjaan päätöksen yhdellä rivillä heti, kun se tehdään:** päivä, päättäjän rooli, päätös ja syy. Tekoäly voi luonnostella rivin palaverin muistiinpanoista, ja minä hyväksyn tai korjaan sen.",
        "**Kirjaan vain päätökset, joita on vaikea perua tai jotka vaikuttavat muihin.** Pienet valinnat eivät tarvitse omaa merkintää.",
      ],
    },

    {
      type: "heading",
      id: "closing",
      text: "Lopuksi",
    },
    {
      type: "paragraph",
      text: "Pohja varmistaa, että tekoäly tietää, mistä projektissa on kyse, ja että suunnittelija päättää, mitä tekoälyllä tehdään. Aloita pienestä: yksi projekti, muutama dokumentti ja omat muistiinpanot ensin. Loput lisätään sitä mukaa, kun niille on tarvetta.",
    },
  ],
};
