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
      text: "Design System on organisaation virallinen tarina siitä, miten se suunnittelee ja rakentaa digitaalisia käyttöliittymiä.",
      cite: "Brad Frost, vapaasti suomennettu",
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
      text: "Yleinen virhe: Design Systemiä rakennetaan erillään tuotetiimeistä",
      navLabel: "Rakentaminen erillään tiimeistä",
    },
    {
      type: "paragraph",
      text: "Design System -työ ajautuu usein sivuraiteille, kun järjestelmää rakennetaan erillään käyttäjätiimeistä. Dan Mall kuvaa ilmiön kirjassaan *Design that Scales* (2023):",
    },
    {
      type: "quote",
      text: "Jos Design System -tiimillä ei ole suoraa yhteyttä tuotetiimien arkeen ja todellisiin tarpeisiin, strategia lipsahtaa helposti arvailuksi: tehdään mahdollisimman paljon komponentteja siltä varalta, että joku niitä joskus tarvitsee. Silloin järjestelmä paisuu, monimutkaistuu ja alkaa palvella enemmän itseään kuin tuotteita.",
      cite: "Dan Mall, Design that Scales (2023), vapaasti suomennettu",
    },
    {
      type: "paragraph",
      text: "Erillään tekeminen ei ole pelkkä tekninen virhe, vaan myös ihmisiin liittyvä. Ei voi olettaa, että ihmiset ottavat Design Systemin ilomielin vastaan. Monelle suunnittelijalle ja kehittäjälle se voi näyttäytyä uhkana omalle ammattitaidolle: voi syntyä tunne, että oma työ arvotetaan alas ja korvataan yhteisellä järjestelmällä.",
    },
    {
      type: "paragraph",
      text: "Siksi Design System pitää olla koko organisaation yhteinen projekti, jossa kaikkien kädenjälki otetaan huomioon. Käytännössä tämä tarkoittaa esimerkiksi seuraavia asioita:",
    },
    {
      type: "list",
      items: [
        "**Ota tekijät mukaan alusta asti.** Tuotetiimien suunnittelijat ja kehittäjät ovat mukana päättämässä ratkaisuista, eivät vain ottamassa vastaan valmiiksi pureskeltua järjestelmää.",
        "**Anna kunnia sinne, minne se kuuluu.** Kerro avoimesti, minkä tiimin ratkaisusta komponentti on lähtöisin ja miksi juuri se valittiin osaksi yhteistä järjestelmää.",
        "**Näytä konkreettinen hyöty.** Design Systemin tehtävä on helpottaa tiimien arkea, ei vain tuoda lisää sääntöjä ja rajoitteita. Esimerkiksi valmis lomakekomponentti, jonka saavutettavuus ja virheilmoitukset on jo ratkaistu, säästää jokaisen tiimin tekemästä samaa työtä uudelleen.",
      ],
    },
    {
      type: "paragraph",
      text: "Parhaiten tämä onnistuu, kun lähtee liikkeelle oikeasta työstä ja todellisista tarpeista. Juuri näin lähestyn Design System -projekteja etenkin silloin, kun tuoteperhe on jo olemassa.",
    },

    {
      type: "heading",
      id: "existing-services",
      text: "Kun yrityksellä on jo digitaalisia palveluita",
      navLabel: "Kun palveluita on jo",
    },
    {
      type: "paragraph",
      text: "Lähden liikkeelle siitä, mikä jo toimii, en tyhjältä pöydältä. Työ etenee neljässä vaiheessa:",
    },
    {
      type: "findings",
      items: [
        {
          title: "Kartoitus",
          body: "Käyn nykyiset tuotteet läpi ja selvitän, mitkä käyttöliittymän osat toistuvat eniten – ja kuinka monta erilaista versiota niistä on ehtinyt syntyä.",
        },
        {
          title: "Parhaat osat talteen",
          body: "Säilytän parhaat olemassa olevat ratkaisut ja yhtenäistän ne kohdat, jotka kaipaavat siistimistä. Hyödynnän muiden suunnittelijoiden tekemää työtä sen sijaan, että heittäisin sen roskiin ja aloittaisin alusta.",
        },
        {
          title: "Pilotit",
          body: "Testaan järjestelmää käytännössä muutaman erilaisen pilotin avulla: esimerkiksi uuden tuotteen, uudistettavan ominaisuuden tai kokonaisen näkymän prototyypin kautta. Ne näyttävät muille suunnittelijoille ja kehittäjille suoraan, miten järjestelmä helpottaa heidän työtään.",
        },
        {
          title: "Tarve ennen toivetta",
          body: "Rakennan sitä, mitä tiimit oikeasti tarvitsevat, en kaikkea, mitä keksitään pyytää. Näin järjestelmä pysyy hallittavana ja aktiivisessa käytössä.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "**Käyttöönotto vaiheittain.** Uudet palvelut kannattaa rakentaa komponenteilla heti alusta alkaen. Vanhojen palveluiden kohdalla käyttöönotto taas kannattaa pilkkoa vaiheisiin ja tehdä sille oma suunnitelma, jossa on selkeä aloitus, aikataulu ja vastuuhenkilöt. Helpoiten muutos etenee, kun sen kytkee muihin päivityksiin, jotka vanhoihin järjestelmiin on tehtävä joka tapauksessa – kuten tietoturvauudistuksiin.",
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
      text: "Mitä meidän __täytyy__ pystyä rakentamaan Design Systemillämme? Ei sitä, mitä kaikkea __haluaisimme__ sillä rakentaa.",
      cite: "Dan Mall, Design that Scales (2023), vapaasti suomennettu",
    },
    {
      type: "paragraph",
      text: "Eli ensisijaisesti mennään tarve edellä, ei halu edellä.",
    },
    {
      type: "list",
      items: [
        "**Älä aloita lippulaivatuotteista.** Aloita tuotteista, joissa on vähiten byrokratiaa, ja vie niitä maaliin nopeassa tahdissa. Kokeile rohkeasti erilaisia pilotteja ja anna Design Systemin kasvaa luontevasti niiden mukana.",
        "**Tee kolme pilottia rinnakkain.** Valitse pilotit etukäteen sovittujen perusteiden mukaan, esimerkiksi sen mukaan, kuinka nopeasti ne saa maaliin ja kuinka vähän byrokratiaa niihin liittyy. Kolme on pienin määrä, josta alkaa jo nähdä, mitkä tarpeet ja ratkaisut toistuvat tuotteesta toiseen.",
        "**Anna komponenteille konteksti.** Pilotit näyttävät komponentit oikeassa käyttöympäristössä. Sellaista ymmärrystä ei synny suunnittelemalla osia irrallaan.",
        "**Rakenna aiemman päälle.** Kun uusia versioita tehdään jo olemassa olevien komponenttien pohjalta, jokainen uusi variaatio on edellistä helpompi toteuttaa. Se ei synny arvauksesta, vaan perustuu oikean tuotteen vaatimuksiin ja jo testattuun pohjaan.",
      ],
    },

    {
      type: "heading",
      id: "reuse-earlier-work",
      text: "Miksi Design System kannattaa rakentaa aiemman työn pohjalle?",
      navLabel: "Miksi rakentaa aiemman päälle",
    },
    {
      type: "paragraph",
      text: "Muiden suunnittelijoiden tekemän työn hyödyntäminen ei ole oikotie tai laiskuutta. Kuten Dan Mall asian tiivistää:",
    },
    {
      type: "quote",
      text: "Kyse ei ole pyörän keksimisestä uudelleen, vaan jo toimivan pyörän saamisesta kaikkien käyttöön – jotta useampi pääsee helpommin liikkeelle omille seikkailuilleen.",
      cite: "Dan Mall, Design that Scales (2023), vapaasti suomennettu",
    },
    {
      type: "paragraph",
      text: "Design System toimii näyteikkunana tiimien onnistumisille (“a place that spotlights teams' accomplishments”). Kun tiimit tunnistavat järjestelmästä oman kätensä jäljen, sitoutuminen syntyy luonnostaan.",
    },
    {
      type: "paragraph",
      text: "Design System -tiimin tehtävä on kerätä parhaat käytännöt talteen ja jalostaa ne muidenkin käyttöön. Silloin tuotetiimien ei tarvitse käyttää aikaa perusasioiden ratkomiseen, vaan ne voivat keskittyä siihen, millä on asiakkaille oikeasti merkitystä.",
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
      text: "Käytännön neuvoja brändivärien viemisestä Design Systemiin antaa Nathan Curtisin artikkeli [Color in Design Systems](https://medium.com/eightshapes-llc/color-in-design-systems-a1c80f65fa3). Hän suosittelee esimerkiksi sopimaan brändin pääväreistä varhain, ottamaan brändistä vastaavat mukaan ennen kuin niihin tehdään muutoksia ja tarkistamaan kontrastit heti alussa ja uudelleen matkan varrella.",
    },

    { type: "heading", id: "structure-and-technology", text: "Rakenne ja teknologia" },
    {
      type: "paragraph",
      text: "Käytän yleensä Brad Frostin [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) -mallia, jossa pienistä osista kootaan isompia kokonaisuuksia: atomeista molekyylejä ja molekyyleistä organismeja. Rakenne kannattaa valita heti alussa, jotta kaikki käyttävät samoja nimityksiä.",
    },
    {
      type: "paragraph",
      text: "Atomic Design -mallissa esimerkiksi painike ja tekstikenttä ovat atomeja, niistä koottu lomakekenttä on molekyyli, ja kokonainen monivaiheinen lomake on organismi. Organismeista kootaan vielä sivupohjia (templates) ja valmiita sivuja (pages), joissa osat nähdään kokonaisissa näkymissä ja oikealla sisällöllä.",
    },
    {
      type: "atomic",
      title: "Monivaiheinen lomake pilkottuna osiin",
      levels: [
        {
          name: "Atomi",
          text: "Pienin osa",
          items: [
            {
              label: "Button (Painike)",
              src: "/blog/how-to-start-design-system-work/atomic-button.png",
              alt: "Kaksi painiketta: tumma täytetty painike ja ääriviivapainike.",
              width: 397,
              height: 93,
            },
            {
              label: "Label (Otsikko)",
              src: "/blog/how-to-start-design-system-work/atomic-label.png",
              alt: "Lomakekentän otsikko Full name tähtimerkillä, joka kertoo kentän olevan pakollinen.",
              width: 172,
              height: 52,
            },
            {
              label: "Text field (Tekstikenttä)",
              src: "/blog/how-to-start-design-system-work/atomic-text-field.png",
              alt: "Tyhjä tekstikenttä, jossa on teksti Research workspace.",
              width: 255,
              height: 86,
            },
          ],
        },
        {
          name: "Molekyyli",
          text: "Muutama osa yhdessä",
          items: [
            {
              label: "Form field (Lomakekenttä)",
              src: "/blog/how-to-start-design-system-work/atomic-form-field.png",
              alt: "Lomakekenttä: otsikko Full name, ohjeteksti ja tekstikenttä.",
              width: 795,
              height: 176,
            },
            {
              label: "Form progress and actions (Lomakkeen eteneminen ja painikkeet)",
              src: "/blog/how-to-start-design-system-work/atomic-form-progress-and-actions.png",
              alt: "Lomakkeen eteneminen ja painikkeet: kolme numeroitua vaihetta, joista ensimmäinen on valittuna, sekä painikkeet Cancel ja Next.",
              width: 795,
              height: 232,
            },
          ],
        },
        {
          name: "Organismi",
          text: "Valmis kokonaisuus",
          items: [
            {
              label: "Multi-step form (Monivaiheinen lomake)",
              src: "/blog/how-to-start-design-system-work/atomic-multi-step-form-v3.png",
              alt: "Valmis monivaiheinen lomake: johdanto, vaiheiden eteneminen, lomakekenttä ja painikkeet.",
              width: 813,
              height: 747,
            },
          ],
        },
      ],
      tokens: {
        eyebrow: "Oma kerroksensa",
        name: "Tokenit",
        text: "Nimettyjä arvoja, joita kaikki tasot käyttävät.",
        parts: ["Värit", "Fonttikoot", "Välistykset"],
      },
    },
    {
      type: "paragraph",
      text: "Mielestäni Atomic Design on paras vaihtoehto, koska se toimii sekä suunnittelijoille että kehittäjille ja kasvaa järjestelmän mukana:",
    },
    {
      type: "list",
      items: [
        "**Yhteinen kieli.** Suunnittelijat, kehittäjät ja tuoteomistajat puhuvat samoista asioista samoilla nimillä, eikä jokaisessa keskustelussa tarvitse ensin sopia termeistä.",
        "**Jokainen osa tehdään vain kerran.** Isommat kokonaisuudet koostuvat samoista pienistä osista, joten esimerkiksi painikkeeseen tehty muutos päivittyy kaikkialle, missä sitä käytetään.",
        "**Nopeampi prototypointi.** Valmiista ja testatuista osista kootaan uusia näkymiä nopeasti, ja niitä voi kokeilla oikealla sisällöllä jo sivupohja- ja sivutasolla.",
        "**Sopii olemassa olevan työn päälle.** Kartoituksessa löytyneet toistuvat elementit on helppo sijoittaa tasoille, ja pilotit voi rakentaa pienistä osista isompiin.",
        "**Kasvaa tarpeen mukaan.** Voit aloittaa muutamalla atomilla ja tokeneilla ja lisätä isompia kokonaisuuksia vasta, kun niille on oikea tarve.",
      ],
    },
    {
      type: "paragraph",
      text: "Mallissa on myös rajatapauksia, esimerkiksi se, onko jokin osa molekyyli vai organismi. Joidenkin suunnittelutiimien kokemusten mukaan kaikkia tasoja ei kannata noudattaa orjallisesti: suurin hyöty syntyy siitä, että atomit määritellään huolella ja niihin nojataan, ja molekyyleistä ja organismeista puhutaan vain silloin, kun siitä on apua. Pidän itsekin mallia ennen kaikkea joustavana ajattelutapana, jonka rajat kannattaa sopia yhdessä jo alussa. Mallin lisäksi kannattaa sopia muutamasta käytännöstä:",
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
      text: "Itse järjestän Figma-tiedoston samaa mallia noudattaen: ensin tokenit, sitten atomit, molekyylit ja organismit ja lopuksi sivupohjat. Alla on esimerkki omasta Design System -tiedostostani.",
    },
    {
      type: "image",
      src: "/blog/miten-design-system-tyo-kannattaa-aloittaa/figma-file-organisation.png",
      alt: "Figma-tiedoston rakenne: About, Tokens, Atoms, Molecules, Organisms ja Templates sekä kunkin osion sisältämät komponentit ja sivupohjat.",
      caption: "Figma-tiedoston rakenne: tokenit omana osionaan ja niiden jälkeen atomit, molekyylit, organismit ja sivupohjat.",
      width: 751,
      height: 317,
    },
    {
      type: "links",
      items: [
        { label: "Design System -esimerkkisivusto", href: "https://design-system-use-case.vercel.app/" },
        { label: "UI Kit Figmassa", href: "https://www.figma.com/design/WlwWrwDWzt5shl0sYocASJ/Design-System-by-Berit?node-id=4-4" },
      ],
    },
    {
      type: "paragraph",
      text: "Alussa päätetään myös, sidotaanko Design System tiettyyn teknologiaan. Tokenit määritellään yleensä teknologiariippumattomasti: ne tallennetaan JSON-tiedostoon, josta ne on helppo sovittaa eri teknologioihin, esimerkiksi CSS-muuttujiksi. Samat nimet otetaan käyttöön myös Figmassa.",
    },
    {
      type: "paragraph",
      text: "Komponenttien teknologia riippuu siitä, millä palvelut on tehty. Jos kaikki palvelut käyttävät samaa teknologiaa, komponentit kannattaa rakentaa sillä. Reactia suositellaan usein Design Systemin pohjaksi, kun halutaan joustavuutta. Jos teknologioita on useita, vaihtoehtona ovat Web Componentit, jotka toimivat useimmissa web-teknologioissa mutta vaativat enemmän erityisosaamista.",
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
