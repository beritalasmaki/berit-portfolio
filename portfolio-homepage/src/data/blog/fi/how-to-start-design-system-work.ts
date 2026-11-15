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

    { type: "heading", id: "existing-services", text: "Kun yrityksellä on jo digitaalisia palveluita", navLabel: "Kun palveluita on jo" },
    {
      type: "paragraph",
      text: "**1. Nykytilan kartoitus.** Työ kannattaa aloittaa kartoittamalla nykyiset palvelut ja keräämällä niistä yhteen toistuvat elementit ja ratkaisumallit, kuten painikkeet, lomakkeet ja kortit. Kartoituksessa näkee samalla, mikä toimii hyvin ja mikä ei. Toimivista ratkaisuista kannattaa tehdä komponentteja ja heikompia kehittää. Kartoitus kertoo myös, mitä värejä, fonttikokoja ja välistyksiä tokeneihin tarvitaan.",
    },
    {
      type: "paragraph",
      text: "**2. Ensimmäiset komponentit.** Aluksi kannattaa valita muutama eniten käytetty komponentti ja viimeistellä ne huolellisesti, mutta vain niiltä osin kuin palveluissa on todellista tarvetta. Painikkeessa se voi tarkoittaa esimerkiksi variaatioita (primary, secondary, tertiary) ja tarvittavia tiloja. Uusia variaatioita kannattaa lisätä vasta, kun niille tulee oikea käyttötarve. Myös tumma teema ja erilliset mobiiliversiot ovat päätöksiä: ne kannattaa suunnitella vain, jos niitä todella tarvitaan.",
    },
    {
      type: "paragraph",
      text: "**3. Vaiheittainen käyttöönotto.** Uudet palvelut kannattaa rakentaa heti komponenteilla. Vanhojen palveluiden käyttöönotto kannattaa vaiheistaa ja sille kannattaa tehdä oma suunnitelma, jossa on aikataulu, vastuuhenkilöt ja selkeä aloitus. Ilman suunnitelmaa päivitykset jäävät helposti tekemättä. Monet vanhat järjestelmät vaativat uudistamista muutenkin, esimerkiksi tietoturvan vuoksi, ja Design Systemin käyttöönotto kannattaa kytkeä näihin uudistuksiin.",
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
      text: "Käytännössä tokenit voi tallentaa yhteen paikkaan, josta ne muunnetaan automaattisesti esimerkiksi CSS-muuttujiksi, ja samat nimet otetaan käyttöön Figmassa. Komponentit voi rakentaa yhdellä teknologialla, jos kaikki palvelut tehdään sillä. Jos teknologioita on useita, vaihtoehtona ovat Web Componentit, jotka toimivat useimmissa web-teknologioissa mutta vaativat enemmän erityisosaamista.",
    },

    { type: "heading", id: "series-continues", text: "Sarja jatkuu" },
    {
      type: "paragraph",
      text: "Tämä on neliosaisen sarjan ensimmäinen osa. Seuraavassa osassa kirjoitan siitä, miksi hyvin tehty Design System voi silti jäädä käyttämättä.",
    },
    {
      type: "paragraph",
      text: "Sarja perustuu opinnäytetyöhöni *Design Systemin tuotteistaminen ja johtaminen: Palvelumallin kehittäminen julkisen sektorin digitalisaatiohankkeisiin* (Vaasan ammattikorkeakoulu, 2026), joka löytyy [Theseuksesta](https://www.theseus.fi/items/f6a21835-ccc6-496c-b6a3-341a814a798c).",
    },
  ],
};
