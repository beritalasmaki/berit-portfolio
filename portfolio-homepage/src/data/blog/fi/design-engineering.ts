import type { BlogPost } from "../types";

export const designEngineeringFi: BlogPost = {
  slug: "design-engineering-muotoilija-koodissa",
  translationOf: "design-engineering",
  title: "Design engineering: kun muotoilija tekee työtä koodissa",
  excerpt:
    "Opiskelin aikoinaan web- ja mobiilipalveluiden kehittäjäksi, mutta päädyin tekemään yhdeksän vuotta UX-suunnittelua kirjoittamatta koodia. Nyt tekoäly on sujuvoittanut ohjelmointia niin paljon, että paluu koodin pariin tuntuu luontevalta. Tässä kirjoituksessa avaan, mitä design engineerin rooli käytännössä tarkoittaa, mitkä taidot ovat pelkkää koodausta tärkeämpiä ja miten muotoilija voi tukea kehittäjien työtä.",
  date: "2026-11-04",
  tags: ["Design engineering", "Tekoälytyökalut", "Design system"],
  body: [
    {
      type: "paragraph",
      text: "Olen tehnyt muotoilutyötä pitkään kehittäjien kanssa. Olemme pohtineet yhdessä, miten jokin ratkaisu kannattaa toteuttaa, mitä teknisiä rajoitteita voi tulla vastaan, mitä komponentteja design systemissä jo on ja mikä kannattaa tehdä uutena. Työnjako on silti ollut lähes aina sama: minä tein suunnitelman suunnittelutyökalussa, esimerkiksi Figmassa, ja kehittäjä rakensi sen koodiksi.",
    },
    {
      type: "paragraph",
      text: "Tekoälyn myötä tämä työnjako on alkanut muuttua. Voin nyt tehdä osan työstä suoraan koodissa: toteuttaa komponentteja valmiiksi, tehdä koodilla toimivia prototyyppejä ja kirjoittaa koodia, joka viittaa tiimin oikeisiin komponentteihin. Siksi olen alkanut siirtyä kohti design engineerin roolia.",
    },
    { type: "paragraph", text: "Siirtymä ei ole minulle täysin uusi suunta, vaan paluu sinne, mistä aloitin." },

    { type: "heading", id: "started-with-code", text: "Aloitin koodauksesta, mutta jatkoin muotoilijana", navLabel: "Aloitin koodauksesta" },
    {
      type: "paragraph",
      text: "Ensimmäiset projektini olivat fanisivuja lempibändeilleni ja videopeleille. Tein niitä 2000-luvulla, kun omien sivujen tekeminen oli trendikästä ja melko helppoa. Lukion toisena vuonna ystäväni pyysi minut mukaan startupiinsa, koska hän oli nähnyt, mitä olin tietokoneella tehnyt. Hän antoi minulle Adoben ohjelmat käyttöön ja oikeita tehtäviä, ja omat projektini muuttuivat kunnianhimoisemmiksi. Jonkin aikaa pidin myös YouTube-kanavaa ja harkitsin videoeditointia ammatikseni.",
    },
    {
      type: "paragraph",
      text: "Valitsin kuitenkin ohjelmoinnin ja opiskelin web- ja mobiilipalveluiden kehittäjäksi Vaasan ammattikorkeakoulussa. Opin siellä, miten koodi saadaan tuotantoon ja miten kehitystiimit toimivat. Harjoittelun aikana innostuin UX:stä niin paljon, että en kirjoittanut koodia seuraavaan yhdeksään vuoteen.",
    },
    {
      type: "paragraph",
      text: "Nuo vuodet UX-konsulttina eivät silti olleet aikaa poissa kehitystyöstä. Työskentelin kehittäjien kanssa päivittäin design systemien, monimutkaisten asiantuntijatyökalujen ja suurten julkisen sektorin palveluiden parissa. Koodia en vain kirjoittanut itse.",
    },
    {
      type: "paragraph",
      text: "Nyt se on taas realistista, mutta ei niin yksinkertaista kuin voisi luulla. Claude Codea ei voi vain pyytää tekemään verkkosivustoa. Työn taustalla pitää olla toimiva järjestelmä, ja jokaisella tiimillä on jo omat tapansa tehdä asioita. Halusin siksi ymmärtää tarkemmin, mitä design engineerin rooli oikeasti vaatii.",
    },

    { type: "heading", id: "what-is-a-design-engineer", text: "Mikä design engineer on?" },
    {
      type: "paragraph",
      text: "Selkein vastaus, jonka löysin, on Peter Bokorilta. Hän on Modeinspectin Founding Design Engineer ja on kirjoittanut kymmenen luvun [oppaan design engineeriksi ryhtymisestä](https://modeinspect.com/design-engineer). Hänen määritelmänsä mukaan design engineer on tuotesuunnittelija, joka työskentelee tuotteen oikeassa koodipohjassa. Hän ei luovuta kuvia toteutettavaksi, vaan toimittaa työnsä pull requestina eli muutosehdotuksena, jonka kehittäjä tarkistaa ennen kuin se yhdistetään tuotteeseen. Bokor tiivistää asian lyhyesti: *\"Ship the thing rather than describe it.\"*",
    },
    {
      type: "paragraph",
      text: "Nimike voi kuitenkin olla harhaanjohtava. Englannin kielessä design engineer tarkoittaa myös koneensuunnittelun insinööriä, joka suunnittelee fyysisiä osia ja tuotteita CAD-ohjelmilla ja ottaa huomioon esimerkiksi valmistustoleranssit. Suomeksi tämä rooli on yleensä suunnitteluinsinööri. Sillä ei ole mitään tekemistä ohjelmistokehityksen kanssa. Bokorin mukaan juuri tämä mekaaninen rooli täyttää suurimman osan esimerkiksi LinkedInin ja Indeedin hakutuloksista, jos nimikettä hakee sellaisenaan. Tässä kirjoituksessa puhun ohjelmistopuolen roolista.",
    },
    {
      type: "paragraph",
      text: "Määritelmässä on kaksi asiaa, jotka ovat suunnittelijan näkökulmasta tärkeitä. Ensinnäkin muotoilija tekee edelleen suunnittelupäätökset, ja tekoälyagentti kirjoittaa suurimman osan koodista. Toiseksi koodikatselmointi (code review) pysyy ennallaan: kehittäjä päättää edelleen, mitä tuotteeseen päätyy. Kyse ei siis ole kehittäjien ohittamisesta vaan uudesta tavasta tehdä työtä yhdessä.",
    },
    {
      type: "paragraph",
      text: "Moni tekee tätä työtä jo, vaikka ei käytä nimikettä. Bokor viittaa Designer Fundin ja Foundation Capitalin [AI in Design Report 2026](https://stateofaidesign.com/) -raporttiin, jonka mukaan puolet kyselyyn vastanneista suunnittelijoista oli vienyt tekoälyllä tuotettua koodia tuotantoon. Silti vain joka viides kutsui itseään design engineeriksi.",
    },

    { type: "heading", id: "two-steps", text: "Suunnitelmasta toteutukseen: kaksi vaihetta", navLabel: "Suunnitelmasta toteutukseen" },
    {
      type: "paragraph",
      text: "Miksi rooli sitten on syntynyt juuri nyt? Modeinspectin artikkeli [uusista suunnittelun tikapuista](https://modeinspect.com/blog/the-new-design-ladder) kuvaa perinteisen luovutuksen (design handoff) kahtena vaiheena. Ensin muotoilijan ajatus piirretään auki suunnittelutyökalussa. Sitten piirrokset toteutetaan koodiksi. Kumpikin vaihe vie aikaa, koska samaa asiaa tehdään kahdessa työkalussa, joilla on eri rajoitteet.",
    },
    { type: "paragraph", text: "Olen omissa projekteissani pyrkinyt tuomaan nämä kaksi vaihetta lähemmäs toisiaan:" },
    {
      type: "list",
      items: [
        "**Yhteinen työkalu.** [Teollisuuden datatyökalussa](/fi/tyot/teollisuuden-data-ja-asiantuntijatyokalut) siirsin komponenttikirjaston Sketchistä Figmaan, jotta muotoilijat ja kehittäjät työskentelivät samassa ympäristössä.",
        "**Yhteinen ymmärrys.** [Koulutuksen digitaalisessa palvelualustassa](/fi/tyot/koulutuksen-digitaalinen-palvelualusta) pidimme kehittäjien kanssa säännöllisiä tapaamisia, joissa kävimme läpi ratkaisujen taustoja ja kuulimme kehittäjien ideoita.",
        "**Yhteiset komponentit.** [Yliopiston projektissa](/fi/tyot/yliopiston-perehdytys-ja-tekoalyhaku) tein design systemin komponenteista helpommin löydettäviä ja otin design system -tiimin mukaan aina, kun tarvittiin aidosti jotain uutta.",
      ],
    },
    {
      type: "paragraph",
      text: "Design engineering vie samaa ajatusta pidemmälle. Kun muotoilija työskentelee koodipohjassa, suunnitelma ja toteutus ovat sama asia. Artikkeli kuvaa tätä niin, että suunnittelijat ovat *\"getting their material back\"*. Vähän samalla tavalla, kuin miten teolliset muotoilijat työskentelevät itse materiaalin kanssa, josta tuote lopulta valmistetaan.",
    },
    {
      type: "flow",
      title: "Kaksi vaihetta vai yksi?",
      rows: [
        {
          eyebrow: "perinteinen",
          heading: "Perinteinen luovutus",
          text: "Sama asia tehdään kahdesti, kahdessa työkalussa.",
          start: "Idea",
          nodes: [
            { eyebrow: "Vaihe 1 · Designer", heading: "Piirros suunnittelutyökalussa", text: "Esimerkiksi Figmassa" },
            { eyebrow: "Vaihe 2 · Kehittäjä", heading: "Rakennus koodina", text: "Piirros tehdään uudelleen koodiksi" },
          ],
          end: "Valmis tuote",
        },
        {
          eyebrow: "design engineer",
          heading: "Suunnittelu koodissa",
          text: "Suunnittelu ja toteutus ovat sama asia.",
          start: "Idea",
          nodes: [
            {
              eyebrow: "Designer + tekoälyagentti",
              heading: "Suunnittelu ja toteutus koodissa",
              text: "Tuotteen oikeassa koodipohjassa",
              highlight: true,
            },
            { eyebrow: "Kehittäjä", heading: "Pull request ja katselmointi", text: "Kehittäjä päättää, mitä tuotteeseen päätyy" },
          ],
          end: "Valmis tuote",
        },
      ],
      quote: { text: "Ship the thing rather than describe it.", cite: "Peter Bokor, Modeinspect" },
    },

    { type: "heading", id: "five-skills", text: "Viisi taitoa, jotka ovat koodausta tärkeämpiä", navLabel: "Koodausta tärkeämmät taidot" },
    {
      type: "paragraph",
      text: "Jos muotoilija ei kirjoita koodia itse, mitä hänen sitten pitää osata? Tärkein taito ei ole koodaus, vaan koodipohjan tunteminen niin hyvin, että osaa ohjata tekoälyagenttia tarkasti. Bokor kuvaa viisi tapaa, jotka avaan tässä omin sanoin.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Viittaa komponentteihin niiden oikeilla nimillä.** Koodissa jokaisella komponentilla on nimi, esimerkiksi `Button`, `Card` tai `TextField`. Jos pyydät agenttia \"tekemään tästä mockupin näköisen\", se joutuu arvaamaan, ja joskus se voi alkaa rakentamaan kokonaan uutta painiketta. Kun pyydät sen sijaan \"käytä lomakkeen lähetyspainikkeena `Button`-komponenttia ja kenttien välissä `spacing-md`-tokenia\", agentti käyttää sitä, mitä tiimillä jo on.",
        "**Tiedä, missä tiedostot sijaitsevat.** Koodipohjaa ei tarvitse osata kirjoittaa uudelleen. Pitää kuitenkin tietää, missä kansiossa komponentit ovat, mitä niiden nimet ovat ja mitkä niistä kuuluvat varsinaiseen design systemiin. Vasta silloin komponenttiin voi viitata nimellä.",
        "**Pilko työ vaiheisiin.** Älä pyydä agenttia rakentamaan koko näkymää kerralla, vaan etene pienissä osissa. Jos teet esimerkiksi kirjautumislomaketta, pyydä ensin pelkkä asettelu eli kenttien ja painikkeen paikat. Sen jälkeen pyydä tilat (states), kuten miltä kenttä näyttää aktiivisena, virheellisenä tai pois käytöstä. Seuraavaksi pyydä validointi eli mitä tapahtuu, jos sähköpostiosoite on väärin. Lopuksi pyydä responsiivisuus, eli miltä lomake näyttää puhelimella. Tarkista jokainen vaihe suunnitelmaa vasten. Yksi laaja ja epämääräinen pyyntö tuottaa helposti paljon koodia, joka näyttää valmiilta mutta ei ole sitä.",
        "**Lue, mitä agentti teki.** Logiikkaa ei tarvitse ymmärtää, mutta tyylit kannattaa tarkistaa. Käytettiinkö tokenia vai kovakoodattua väriä? Onko painike oikea painikekomponentti vai painikkeen näköiseksi muotoiltu `div`? Tekoäly saattaa myös luoda useita lähes samannäköisiä painikkeita, joista yksikään ei ole design systemin oma. Visuaalinen tarkkuus on muotoilijan vastuulla, ja tässä kohdassa se tarkistetaan.",
        "**Vie muutos katselmointiin.** Riittää, että osaa pull requestin työnkulun: luo uusi haara (branch), tee muutos, tallenna se (commit), avaa pull request ja vastaa katselmoijan kommentteihin.",
      ],
    },
    {
      type: "steps",
      title: "Pilko työ vaiheisiin: kirjautumisnäkymän toteuttaminen koodissa",
      mock: {
        email: "Sähköposti",
        password: "Salasana",
        button: "Kirjaudu",
        typed: "matti@",
        wrongEmail: "matti.meikalainen",
        error: "Tarkista sähköpostiosoite",
      },
      steps: [
        { name: "Asettelu", heading: "Kentät ja painike", text: "Mihin kentät ja painike sijoitetaan. Ei vielä värejä eikä toimintaa." },
        {
          name: "Tilat",
          heading: "Aktiivinen, pois käytöstä",
          text: "Miltä kenttä tai painike näyttää eri tilanteissa: kun siihen kirjoitetaan tai kun sitä ei voi käyttää.",
        },
        {
          name: "Validointi",
          heading: "Väärä sähköpostiosoite",
          text: "Lomake tarkistaa, onko syöte kelvollinen, ja näyttää virheilmoituksen, jos ei ole.",
        },
        {
          name: "Puhelin",
          heading: "Responsiivisuus, pieni näyttö",
          text: "Miltä lomake näyttää puhelimella: kentät ja painike asettuvat allekkain.",
        },
      ],
      tip: {
        label: "Vinkki",
        text: "Asettelussa voi aivan hyvin käyttää suunnittelutyökalua apuna (esim. Figma tai Claude Design), jonka jälkeen kuvat voidaan syöttää agentille.",
      },
    },
    {
      type: "paragraph",
      text: "Kaikki viisi taitoa nojaavat samaan asiaan: tiimin oman sanaston tuntemiseen. Vaikeinta design engineerin roolissa ei siis ole koodin lukeminen, vaan eri tiimien toimintatapoihin ja sanastoon pääseminen. Se täytyy opetella uudelleen jokaisessa tiimissä, ja parhaiten sen oppii tekemällä työtä yhdessä kehittäjien kanssa.",
    },

    { type: "heading", id: "design-system", text: "Hyvin rakennettu design system tukee työtä", navLabel: "Design system tukena" },
    {
      type: "paragraph",
      text: "Design engineering toimii parhaiten, kun tiimillä on hyvin rakennettu design system. Silloin agentille on jo valmiina oikeat komponentit, tokenit ja nimet, joihin viitata. Sen ei tarvitse arvata tai keksiä uutta, ja tulos noudattaa tiimin tapaa tehdä asioita.",
    },
    { type: "paragraph", text: "Design system tukee työtä kahdessa tilanteessa:" },
    {
      type: "list",
      items: [
        "**Uusia näkymiä rakennettaessa.** Kun komponentit ja tokenit ovat selkeästi nimettyjä ja helposti löydettäviä, uuden näkymän voi koota niistä pienissä vaiheissa. Näkymä on alusta asti yhdenmukainen muun tuotteen kanssa.",
        "**Vanhaa näkymää parannettaessa.** Kun näkymää muutetaan toimivammaksi, design system kertoo, mitä on jo olemassa. Muutos voidaan tehdä käyttämällä valmiita komponentteja, ja kehittäjän on helpompi katselmoida pienempi ja tutumpi muutos.",
      ],
    },
    {
      type: "paragraph",
      text: "Design system on siis sama sanasto, josta puhuin aiemmin. Mitä selkeämpi se on, sitä helpompi muotoilijan on ohjata agenttia ja sitä vähemmän kehittäjän tarvitsee korjata katselmoinnissa.",
    },

    { type: "heading", id: "support-developers", text: "Miten muotoilija voi tukea kehittäjiä?", navLabel: "Kehittäjien tukeminen" },
    {
      type: "paragraph",
      text: "En näe design engineerin roolia niin, että muotoilijan ratkaisut olisivat valmiita ja niitä pitäisi vain noudattaa. Oma periaatteeni on, että asiat suunnitellaan ja mietitään yhdessä. Koodi on minulle uusi tapa osallistua siihen keskusteluun, ei tapa ohittaa sitä.",
    },
    { type: "paragraph", text: "Käytännössä tarkoitan neljää asiaa:" },
    {
      type: "list",
      items: [
        "**Komponentin ensimmäinen versio.** Voin tehdä komponentista ensimmäisen version koodiin. Kehittäjä katsoo sen, ja päätämme yhdessä, miten se sopii kokonaisuuteen.",
        "**Koodilla toimivat prototyypit.** Prototyyppi, joka käyttää tiimin oikeita komponentteja ja dataa, vastaa kehittäjien kysymyksiin usein paremmin kuin kuva. Siinä näkyvät esimerkiksi latautuminen, virheet ja tyhjät tilat, joita staattisesta kuvasta on vaikea päätellä.",
        "**Käyttöliittymän osien toteutus.** Voin toteuttaa osan käyttöliittymästä itse, esimerkiksi näkymän asettelun, tilat tai visuaaliset korjaukset, ja tarjota sen kehittäjille pull requestina. Kehittäjä katselmoi muutoksen ja päättää, yhdistetäänkö se tuotteeseen. Näin kehittäjillä jää enemmän aikaa logiikkaan, rajapintoihin ja muihin teknisiin kysymyksiin.",
        "**Yhteinen sanasto.** Käytän koodin nimiä kaikkialla, missä puhun kehittäjien kanssa: keskusteluissa, tehtävänkuvauksissa ja Figmassa, jos tiimi sitä käyttää. Kun puhun `Button`-komponentista enkä \"oranssista painikkeesta\", kehittäjän ei tarvitse arvata, mitä tarkoitan.",
      ],
    },

    { type: "heading", id: "where-i-am", text: "Missä olen nyt" },
    {
      type: "paragraph",
      text: "Modeinspectin tikapuumallissa on kolme porrasta. Ensimmäisellä ovat muotoilijat, jotka työskentelevät Figmassa. Toisella ovat ne, jotka tekevät tekoälyllä prototyyppejä, jotka kehittäjät rakentavat myöhemmin uudelleen. Kolmannella ovat design engineerit, joiden pull requestit yhdistetään tuotteeseen. Modeinspectin haastattelemilla suunnittelijoilla ensimmäinen hyväksytty pull request syntyi 2–8 viikossa siitä, kun he saivat pääsyn koodipohjaan. Työ tehtiin tavallisen suunnittelutyön ohessa.",
    },
    {
      type: "ladder",
      eyebrow: "Design engineer",
      title: "Kolme porrasta",
      rungs: [
        {
          name: "Figma",
          text: "Suunnittelija työskentelee Figmassa, ja kehittäjä rakentaa suunnitelman koodiksi.",
          badge: "Tässä olen asiakastöissä",
        },
        {
          name: "Tekoälyprototyypit",
          text: "Suunnittelija tekee tekoälyllä prototyyppejä, jotka kehittäjät rakentavat myöhemmin uudelleen.",
          badge: "Tässä olen asiakastöissä",
        },
        {
          name: "Design engineer",
          text: "Suunnittelijan tekemät pull requestit yhdistetään tuotteeseen.",
          badge: "Tähän tähtään",
        },
      ],
      source: "Lähde: Modeinspect, The New Design Ladder",
    },
    {
      type: "paragraph",
      text: "Asiakastöissä olen tähän asti ollut ensimmäisellä ja toisella portaalla: työskentelen Figmassa ja teen prototyyppejä. Design engineering on se, mihin haluan tähdätä, ja kolmatta porrasta harjoittelen omissa projekteissani. Rakensin esimerkiksi portfolioni Claude Coden kanssa, ja jokainen muutos kulkee oman haaran ja esikatselun kautta. Tämäkin kirjoitus päätyi sivustolle hyväksytyn pull requestin kautta. 😉",
    },
    {
      type: "paragraph",
      text: "Rooli ei silti sovi kaikille muotoilijoille. Mehmet Baytaş, joka teki design engineerin työtä markkinointitiimissä, on varoittanut, että kokeneemmissa rooleissa työ voi olla paljon enemmän ohjelmistokehitystä kuin suunnittelua, erityisesti jos design engineer vastaa myös tuotannosta.",
    },

    { type: "heading", id: "summary", text: "Yhteenveto" },
    {
      type: "quote",
      text: "Design Engineerin tarkoitus ei ole korvata kehittäjän työtä, vaan rooli mahdollistaa sujuvamman yhteistyön muotoilun ja kehitystyön välillä.",
    },
    {
      type: "paragraph",
      text: "Jos olet muotoilija ja mietit samaa siirtymää, aloita pienestä. Avaa tiimisi koodipohja ja etsi komponentti, jonka olet piirtänyt monta kertaa. Opettele sen oikea nimi ja katso, mitä vaihtoehtoja sillä on. Esimerkiksi:",
    },
    {
      type: "list",
      items: [
        "Painike voi olla koodissa `Button`, jolla on vaihtoehdot `variant=\"primary\"` ja `variant=\"secondary\"`, eikä kaksi erillistä komponenttia.",
        "Figman \"Spacing / Medium\" voi olla koodissa token nimeltä `spacing-md` tai Tailwindin luokka `gap-4`.",
        "Modaali voi olla `Dialog`, ja sen otsikko, sisältö ja painikkeet omia alikomponenttejaan.",
      ],
    },
    {
      type: "paragraph",
      text: "Kun tunnet nämä nimet, voit käyttää niitä seuraavassa suunnitelmassasi ja seuraavassa keskustelussa kehittäjän kanssa.",
    },

    { type: "heading", id: "sources", text: "Lähteet" },
    {
      type: "list",
      items: [
        "Peter Bokor: [What does a design engineer do? The software role, explained](https://modeinspect.com/design-engineer/what-does-a-design-engineer-do). Modeinspect, 16.9.2026.",
        "Modeinspect: [The New Design Ladder: Why Design Engineers Are the Only Designers Who Ship](https://modeinspect.com/blog/the-new-design-ladder). 15.9.2026.",
        "Peter Bokor: [Becoming a Design Engineer](https://modeinspect.com/design-engineer). Modeinspect, 2026.",
        "Designer Fund ja Foundation Capital: [AI in Design Report 2026](https://stateofaidesign.com/), Bokorin mukaan.",
      ],
    },
  ],
};
