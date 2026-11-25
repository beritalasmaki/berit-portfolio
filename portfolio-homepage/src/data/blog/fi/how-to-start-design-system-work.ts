import type { BlogPost } from "../types";

export const howToStartDesignSystemWorkFi: BlogPost = {
  slug: "miten-design-system-tyo-kannattaa-aloittaa",
  translationOf: "how-to-start-design-system-work",
  title: "Miten Design System -työ kannattaa aloittaa?",
  excerpt:
    "Mitä pitää olla kunnossa ennen kuin Design System -työ kannattaa aloittaa? Entä miten ensimmäiset komponentit ja tokenit otetaan käyttöön ja miten brändikirjan värit ja fontit saadaan toimimaan verkossa? Neliosaisen sarjan ensimmäinen osa käy läpi lähtökohdat.",
  date: "2026-11-15",
  tags: ["Design system", "Brändi", "Tokenit"],
  series: {
    name: "Design System -työn aloitus",
    part: 1,
    subtitle: "Edellytykset, lähtötilanne ja rakenne",
  },
  body: [
    {
      type: "quote",
      text: "A design system is the official story of how an organization designs and builds digital interfaces.",
      cite: "Brad Frost",
    },
    {
      type: "paragraph",
      text: "Design System -työssä on yleensä kaksi lähtötilannetta. Joko yrityksellä on jo useita digitaalisia palveluita, joita halutaan yhtenäistää, tai uusi yritys haluaa rakentaa tuotteensa rinnalle Design Systemin. Aloitus on erilainen, mutta onnistumisen edellytykset ovat samat.",
    },

    { type: "heading", id: "check-first", text: "Tämä kannattaa varmistaa ensin" },
    {
      type: "paragraph",
      text: "**Brändin perusta on kunnossa.** Brändi on kaiken design-työn ohjaava ydin. Se määrittää sekä visuaalisen suunnan että periaatteet, joiden mukaan suunnitellaan, ja sen värit ja typografia ovat tokenien pohja. Jos niistä ei ole vielä päätetty, työn voi joutua tekemään myöhemmin uudelleen.",
    },
    {
      type: "paragraph",
      text: "**Johto on antanut mandaatin.** Design System muuttaa tapaa, jolla tiimit suunnittelevat ja toteuttavat palveluita. Siksi johdon pitää antaa työn vastuuhenkilöille, kuten tuoteomistajalle ja tekniselle projektipäällikölle, selkeä mandaatti toimia ja tehdä päätöksiä sekä varata työlle aikaa ja budjetti. Ilman mandaattia heidän linjauksensa jäävät suosituksiksi, ja tiimit palaavat omiin ratkaisuihinsa aina, kun aikataulu kiristyy.",
    },
    {
      type: "paragraph",
      text: "**Vastuuhenkilöt ovat organisaation sisältä.** Design Systemille tarvitaan omistaja, joka päättää sen suunnasta, priorisoi kehitystä ja ratkaisee, mitä järjestelmään lisätään. Ulkopuolinen asiantuntija voi auttaa rakentamisessa ja siirtää osaamista, mutta omistajuuden täytyy jäädä organisaatioon. Muuten kehitys voi pysähtyä, kun konsulttiprojekti päättyy.",
    },
    {
      type: "paragraph",
      text: "**Design System on osa liiketoimintastrategiaa.** Design Systemin pitää tukea yrityksen tavoitteita, kuten nopeampaa kehitystä, yhtenäistä asiakaskokemusta tai saavutettavuutta. Kun yhteys tavoitteisiin näkyy, johdon on helpompi perustella sille resurssit myös jatkossa. Silloin Design System nähdään osana kaikkea digitaalista tekemistä eikä IT-osaston sivuprojektina.",
    },

    {
      type: "heading",
      id: "vacuum",
      text: "Yleinen virhe: rakentaminen tyhjiössä",
      navLabel: "Rakentaminen tyhjiössä",
    },
    {
      type: "paragraph",
      text: "Design System -työ menee usein pieleen samalla tavalla. Dan Mall kuvaa sen kirjassaan *Design that Scales* (2023):",
    },
    {
      type: "quote",
      text: "When design system work is done in a vacuum and a design system team doesn't have specific use cases, their strategy seems to be something akin to “let's provide as many elements as product teams might need at any point,” leading to a bloated design system.",
      cite: "Dan Mall, Design that Scales (2023)",
    },
    {
      type: "paragraph",
      text: "Ulos pääsee lähtemällä liikkeelle oikeasta työstä. Näin lähestyn Design System -projekteja varsinkin silloin, kun tuoteperhe on jo olemassa.",
    },

    {
      type: "heading",
      id: "product-family",
      text: "Näin lähestyn työtä, kun tuoteperhe on jo olemassa",
      navLabel: "Kun tuoteperhe on jo olemassa",
    },
    {
      type: "paragraph",
      text: "Lähden liikkeelle siitä, mikä jo toimii, en tyhjältä pöydältä. Työ etenee neljässä vaiheessa:",
    },
    {
      type: "findings",
      items: [
        {
          title: "Audit",
          body: "Käyn tuotteet läpi ja katson, mitkä UI-osat ovat eniten käytössä ja kuinka monena eri versiona.",
        },
        {
          title: "Parhaat osat",
          body: "Pidän parhaat olemassa olevat ratkaisut ja siivoan ne, jotka sitä tarvitsevat. Rakennan muiden suunnittelijoiden työn päälle sen sijaan, että korvaisin sen.",
        },
        {
          title: "Pilotit",
          body: "Ajan useita erilaisia pilotteja: uusi tuote, uudistettu ominaisuus ja kokonainen näkymä prototyyppinä järjestelmän päälle. Ne näyttävät muille suunnittelijoille ja kehittäjille, mitä järjestelmä heille antaa.",
        },
        {
          title: "Tarve ennen toivetta",
          body: "Rakennan sen, mitä tiimit tarvitsevat, en kaikkea mitä ne pyytävät. Silloin järjestelmä pysyy pienenä ja käytössä.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "**Vaiheittainen käyttöönotto.** Uudet palvelut kannattaa rakentaa heti komponenteilla. Vanhojen palveluiden käyttöönotto kannattaa vaiheistaa ja sille kannattaa tehdä oma suunnitelma, jossa on aikataulu, vastuuhenkilöt ja selkeä aloitus. Käyttöönoton voi kytkeä uudistuksiin, joita vanhat järjestelmät vaativat muutenkin, esimerkiksi tietoturvan vuoksi.",
    },

    {
      type: "heading",
      id: "pilots",
      text: "Pilotit: paras tapa aloittaa ja ylläpitää Design System",
      navLabel: "Pilotit",
    },
    {
      type: "paragraph",
      text: "Pilotti on pieni, oikea projekti, joka tehdään kasvavalla Design Systemillä. Kun Mall ajaa pilottia, sitä ohjaa tämä kysymys:",
    },
    {
      type: "quote",
      text: "What do we NEED to be able to make with our design system? And not: What do we WANT to be able to make with our design system?",
      cite: "Dan Mall, Design that Scales (2023)",
    },
    {
      type: "list",
      items: [
        "**Älä aloita flagship-tuotteista.** Rakenna ensin tuotteet, joissa on vähiten byrokratiaa, ja tee niitä mahdollisimman monta nopeasti. Ole luova pilottien tyypeissä ja katso, miten Design System kasvaa luontevasti.",
        "**Tee kolme pilottia samaan aikaan.** Valitse kolme peräkkäin pilottien tulostaulun avulla. Kolme on pienin määrä, jossa kuviot alkavat näkyä.",
        "**Anna komponenteille konteksti.** Pilotit näyttävät komponentit oikeassa käytössä, mitä ei muuten saisi.",
      ],
    },
    {
      type: "paragraph",
      text: "Kun järjestelmää rakennetaan jo tehdyistä komponenteista ja variaatioista, jokainen valmis variaatio on helpompi tehdä, koska se perustuu tiettyihin tuotevaatimuksiin ja jo testattuun versioon.",
    },

    {
      type: "heading",
      id: "reuse-earlier-work",
      text: "Miksi aiempi työ on lähtökohta",
    },
    {
      type: "paragraph",
      text: "Suunnittelijoiden aiemman työn päälle rakentaminen ei ole oikotie. Mallin sanoin:",
    },
    {
      type: "quote",
      text: "It's not about reinventing the wheel; it's about mass producing the wheel so more people can more easily experience their own adventures.",
      cite: "Dan Mall, Design that Scales (2023)",
    },
    {
      type: "paragraph",
      text: "Design System on myös “a place that spotlights teams' accomplishments”, eli tiimit näkevät siinä oman työnsä. Design System -tiimin tarkoitus on kerätä parhaat käytännöt ja valmistella ne skaalattaviksi. Tuloksena tiimit saavat tarkemman fokuksen tärkeimpiin ja oleellisimpiin asiakastarpeisiin.",
    },

    { type: "heading", id: "no-services-yet", text: "Kun palveluita ei vielä ole" },
    {
      type: "paragraph",
      text: "Uudessa yrityksessä ensimmäinen palvelu kannattaa suunnitella ensin ja rakentaa Design System sen pohjalta. Silloin näkee, mitä komponentteja oikeasti tarvitaan. Jos komponenttikirjasto suunnitellaan ennen palvelua, siihen tulee helposti komponentteja ja variaatioita, joita kukaan ei lopulta käytä.",
    },
    {
      type: "paragraph",
      text: "Tokenit kannattaa silti ottaa käyttöön heti alusta. Se ei tarkoita, että arvot lukitaan. Kun värit, fonttikoot ja välistykset nimetään tokeneiksi jo ensimmäisessä versiossa, niiden arvoja voi muuttaa yhdestä paikasta sitä mukaa, kun palvelua rakennettaessa selviää, mikä toimii. Ilman tokeneita samat arvot päätyvät koodiin kymmeniin paikkoihin, ja jokainen muutos pitää tehdä käsin. Aluksi riittävät brändin värit, typografia ja yksinkertainen välistysasteikko. Komponentin voi tehdä, kun sama elementti tulee vastaan toisen tai kolmannen kerran.",
    },

    { type: "heading", id: "brand-to-web", text: "Brändikirjasta verkkoon" },
    {
      type: "paragraph",
      text: "Brändikirjan värit ja fontit on usein suunniteltu painotuotteisiin ja markkinointiin, eivätkä ne sellaisenaan aina toimi verkossa. Vaalean brändivärin kontrasti voi olla tekstissä liian heikko, ja koristeellinen fontti raskas lukea.",
    },
    {
      type: "paragraph",
      text: "Siksi niistä tehdään verkkoon sopivat variaatiot: sävyt, jotka täyttävät kontrastivaatimukset, sekä koot ja rivinvälit, jotka tekevät sivusta helpon lukea ja silmäillä.",
    },
    {
      type: "paragraph",
      text: "Käytännössä tämä tarkoittaa esimerkiksi sitä, että brändivärien kontrasti tarkistetaan saavutettavuusvaatimuksia vasten ja pääväreistä tehdään sävyasteikot tekstiä, taustoja ja eri tiloja varten. Koristeellinen brändifontti voi toimia otsikoissa, mutta leipätekstin kannattaa olla selkeä. Verkkoon tehdyt variaatiot kannattaa sopia brändistä vastaavien kanssa, jotta ne hyväksytään osaksi brändiä.",
    },
    {
      type: "paragraph",
      text: "Hyviä esimerkkejä löytyy suurista avoimista Design Systemeistä. IBM:n [Carbon Design System](https://carbondesignsystem.com) nimeää värit käyttötarkoituksen mukaan, esimerkiksi `$text-secondary` tai `$layer`, ja jokainen teema antaa niille omat arvonsa. Näin sama token voi olla vaaleassa teemassa tumma ja tummassa teemassa vaalea. Googlen [Material Design 3](https://m3.material.io) puolestaan näyttää, miten yhdestä brändiväristä voidaan johtaa kokonainen sävypaletti ja siihen sopivat väriroolit.",
    },
    {
      type: "paragraph",
      text: "Käytännön neuvoja brändivärien viemisestä Design Systemiin antaa Nathan Curtisin artikkeli [Color in Design Systems](https://medium.com/eightshapes-llc/color-in-design-systems-a1c80f65fa3). Hän suosittelee esimerkiksi sopimaan brändin pääväreistä varhain, ottamaan brändistä vastaavat mukaan ennen kuin niihin tehdään muutoksia ja tarkistamaan kontrastit heti alussa ja uudelleen matkan varrella.",
    },

    { type: "heading", id: "structure-and-technology", text: "Rakenne ja teknologia" },
    {
      type: "paragraph",
      text: "Käytän yleensä Brad Frostin Atomic Design -mallia, jossa pienistä osista kootaan isompia kokonaisuuksia: atomeista molekyylejä ja molekyyleistä organismeja. Rakenne kannattaa valita heti alussa, jotta kaikki käyttävät samoja nimityksiä.",
    },
    {
      type: "paragraph",
      text: "Atomic Design -mallissa esimerkiksi painike ja tekstikenttä ovat atomeja, niistä koottu hakukenttä on molekyyli, ja ylätunniste, jossa on logo, hakukenttä ja navigaatio, on organismi. Mallin lisäksi kannattaa sopia muutamasta käytännöstä:",
    },
    {
      type: "list",
      items: [
        "Komponentit nimetään käyttötarkoituksen eikä ulkonäön mukaan. Nimi `button-primary` kestää värimuutoksen, `button-orange` ei.",
        "Jokaiselle komponentille kirjataan, mihin sitä käytetään ja milloin sitä ei käytetä.",
        "Figman ja koodin komponenteilla ja tokeneilla on samat nimet, jotta suunnittelijat ja kehittäjät puhuvat samoista asioista.",
      ],
    },
    {
      type: "paragraph",
      text: "Alussa päätetään myös, sidotaanko Design System tiettyyn teknologiaan, kuten Reactiin. Suosittelen, että ainakin tokenit määritellään teknologiasta riippumattomasti. Silloin ne voi ottaa käyttöön missä tahansa teknologiassa, vaikka yrityksen valinnat muuttuisivat.",
    },
    {
      type: "paragraph",
      text: "Käytännössä tokenit voi tallentaa yhteen paikkaan, josta ne muunnetaan automaattisesti esimerkiksi CSS-muuttujiksi, ja samat nimet otetaan käyttöön Figmassa. Jos palveluissa on useita teknologioita, Web Componentit toimivat useimmissa niistä mutta vaativat enemmän erityisosaamista.",
    },

    { type: "heading", id: "series-continues", text: "Sarja jatkuu" },
    {
      type: "paragraph",
      text: "Tämä on neliosaisen sarjan ensimmäinen osa. Seuraavassa osassa kirjoitan siitä, miksi hyvin tehty Design System voi silti jäädä käyttämättä.",
    },
    {
      type: "paragraph",
      text: "Sarja perustuu opinnäytetyöhöni *Design Systemin tuotteistaminen ja johtaminen: Palvelumallin kehittäminen julkisen sektorin digitalisaatiohankkeisiin* (Vaasan ammattikorkeakoulu, 2026), joka löytyy [Theseuksesta](https://www.theseus.fi/items/f6a21835-ccc6-496c-b6a3-341a814a798c). Tämän osan lainaukset ovat Dan Mallin kirjasta *Design that Scales: Creating a Sustainable Design System Practice* (2023), lukuun ottamatta avauksen Brad Frostin lainausta.",
    },
  ],
};
