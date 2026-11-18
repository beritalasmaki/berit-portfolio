import type { BlogPost } from "../types";

export const howIWorkWithAiFi: BlogPost = {
  slug: "nain-tyoskentelen-tekoalyn-kanssa",
  translationOf: "how-i-work-with-ai",
  title: "Näin työskentelen tekoälyn kanssa: pohja suunnitteluun",
  tabTitle: "Näin työskentelen tekoälyn kanssa",
  excerpt:
    "Aloitan suunnitteluprojektit pohjasta, jossa tekoäly luonnostelee, minä päätän ja oikeat ihmiset testaavat. Siinä on kirjallinen konteksti, tarkistuksia joita Claude ei voi ohittaa ja kirjaus siitä, kuka päätti mitä. Tässä kirjoituksessa kerron, mitä pohjassa on, miten käytän sitä ja mitä se ei vielä todista.",
  date: "2026-11-18",
  tags: ["Tekoälytyökalut", "Tekoälyn käyttöönotto"],
  body: [
    {
      type: "paragraph",
      text: "Kun rakensin agenttiajojen katselmointinäkymän, kirjoitin säännöt tekoälyagentille ennen kuin kirjoitin riviäkään koodia: mitä se saa tehdä, mitä ei, ja yksi sääntö muiden edelle: ei väitettä ilman lähdettä. Sääntöjen kirjoittaminen tuntui suunnittelutyöltä. Sen päättäminen, mitä kone saa väittää, on samanlaista harkintaa kuin sen päättäminen, mitä näkymä saa väittää.",
    },
    {
      type: "paragraph",
      text: "Tästä ajatuksesta kasvoi pohja, josta aloitan nykyään suunnitteluprojektit. Se on tehty julkisen sektorin ja B2B-työhön, jossa saavutettavuus ja tietoturva ovat vaatimuksia ja monella ihmisellä on sananvaltaa. Tässä kirjoituksessa kerron, mitä pohjassa on, miten käytän sitä ja mitä se ei vielä todista.",
    },

    {
      type: "heading",
      id: "idea",
      text: "Ydinajatus: Claude luonnostelee, minä päätän, oikeat ihmiset testaavat",
      navLabel: "Ydinajatus yhdellä rivillä",
    },
    {
      type: "paragraph",
      text: "Tekoäly on hyvä rakenteissa ja ensimmäisissä luonnoksissa. Se ei ole hyvä päättämään, eikä se voi olla käyttäjä. Siksi työ jaetaan kolmeen rooliin.",
    },
    {
      type: "list",
      items: [
        "**Claude luonnostelee.** Rakenteen, ensimmäiset versiot, yhteenvedot muistiinpanoistani ja tarkistukset asettamiani kriteerejä vasten.",
        "**Minä päätän.** Suunnan, kompromissit ja sen, mitä jaetaan ja mitä julkaistaan.",
        "**Oikeat ihmiset testaavat.** Käyttäjätestaus, testaus vammaisten ihmisten kanssa, tietoturvakatselmointi ja juridinen neuvonta. Tekoäly ei korvaa mitään näistä.",
      ],
    },
    {
      type: "paragraph",
      text: "Jako on tärkein siellä, missä panokset ovat korkeat. Julkisen sektorin palvelussa minun pitää pystyä sanomaan, mitä tarkistettiin, kuka tarkisti ja mikä oli vain oletus.",
    },

    {
      type: "heading",
      id: "context",
      text: "Kirjallinen konteksti voittaa taitavan kehotteen",
      navLabel: "Konteksti voittaa kehotteen",
    },
    {
      type: "paragraph",
      text: "Claude aloittaa jokaisen istunnon tietämättä projektista mitään. Ilman kirjallista kontekstia se täyttää aukot yleisillä arvauksilla, ja lopputulos voisi kuulua mihin tahansa tuotteeseen.",
    },
    {
      type: "paragraph",
      text: "Siksi jokaiselle asiakasprojektille luodaan oma yksityinen työtila pohjasta. Siinä on lyhyitä dokumentteja, jotka Claude lukee ennen kuin se auttaa: kenelle tuote on tehty, ongelma kirjoitettuna käyttäjän tilanteena ilman ratkaisua sen sisällä, kuka päättää mitä, mitä tuotteen pitää tehdä ja päätösloki. Liitän mukaan raakamuistiinpanoni, Claude luonnostelee ja minä korjaan. Mitä se ei löydä materiaalistani, merkitään aukoksi eikä arvata.",
    },
    {
      type: "paragraph",
      text: "Työtila on minun, ei asiakkaan. En koskaan vie sitä asiakkaan repositorioon. Jos asiakas haluaa siitä dokumentin, esimerkiksi päätöslokin, annan sen tiedostona.",
    },

    {
      type: "heading",
      id: "process",
      text: "Näin projekti etenee",
    },
    {
      type: "paragraph",
      text: "Kuusi vaihetta. Jokaisella on skilli, joka luonnostelee, ja dokumentti, joka tallentaa tuloksen.",
    },
    {
      type: "findings",
      items: [
        {
          title: "Ongelman muotoilu",
          body: "Lainaan toimeksiannon sellaisenaan ja kirjoitan ongelman tilanteena, jossa käyttäjä on. Jos ratkaisu piilee sen sisällä, kirjoitan sen uudelleen.",
        },
        {
          title: "Ihmisten ymmärtäminen",
          body: "Sidosryhmäkartta näyttää, kuka päättää mitä ja missä edut ovat ristiriidassa. Ristiriidat kirjataan rinnakkain. En anna Clauden ratkaista niitä.",
        },
        {
          title: "Suunnittelu",
          body: "Käyttäjävirrat kuvataan virhepolkuineen, ja jokaisen näkymän kaikki tilat otetaan mukaan. Claude aloittaa jokaisen tilan merkinnällä puuttuu, ja vain minä voin merkitä sen suunnitelluksi.",
        },
        {
          title: "Tarkistus",
          body: "Saavutettavuus, tietoturva ja yksityisyys sekä katsaus siihen, mitkä valinnat jäivät oletuksiksi. Kontrastin laskee skripti, sitä ei arvioida.",
        },
        {
          title: "Luovutus",
          body: "Luovutus kertoo, mikä on valmista, kuka hyväksyi sen ja mitä kukin toimittaja toimittaa, jotta mitään ei jää arvattavaksi.",
        },
        {
          title: "Kirjaaminen ja pohdinta",
          body: "Päätökset kirjataan sen kanssa, kuka päätti ja miksi. Projektin lopussa loki toimii pohjana case studylle, josta luottamukselliset tiedot on poistettu.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "Tarkistuksen ja luovutuksen välissä oikeat ihmiset ottavat vastuun: käyttäjätestaus, testaus vammaisten ihmisten kanssa, tietoturvakatselmointi ja juridinen neuvonta. Pohja jättää tälle vaiheelle tilaa. Se ei koskaan korvaa sitä.",
    },

    {
      type: "heading",
      id: "limits",
      text: "Mitä se ei koskaan tee",
    },
    {
      type: "list",
      items: [
        "**Se ei koskaan väitä suunnitelmaa saavutettavaksi, vaatimustenmukaiseksi tai testatuksi.** Jokainen tarkistus päättyy tulokseen läpi, hylätty tai ei voida päätellä suunnitelmasta. Puhdas tulos tarkoittaa, ettei näytetystä löytynyt virheitä, ei muuta.",
        "**Se merkitsee jokaisen väitteen.** Todisteena lähteineen tai aukkona. Ei keksittyjä lainauksia, tutkimustuloksia tai lukuja.",
        "**Se pitää asiakasdatan poissa.** Ei oikeita nimiä, henkilötietoja tai luottamuksellisia lukuja kehotteissa eikä tiedostoissa. Käytän paikkamerkkejä.",
        "**Se kirjaa päätökset roolin mukaan,** ei nimen.",
      ],
    },
    {
      type: "paragraph",
      text: "Asiakasprojekteissa käytän tätä vain, jos asiakas sallii tekoälytyökalut, ja tarkistan sen ennen kuin työ alkaa. Osa asiakkaista, erityisesti julkisella sektorilla, rajoittaa myös sitä, missä heidän aineistoaan saa säilyttää. Projektin asetustiedosto kysyy molemmat heti ensimmäisenä päivänä.",
    },

    {
      type: "heading",
      id: "truth",
      text: "Missä dokumentit asuvat",
    },
    {
      type: "paragraph",
      text: "Dokumentit ovat Markdown-tiedostoja Gitissä, mikä antaa minulle historian ja yhden totuuden lähteen. Jos tiimi lukee niitä jossain muualla, esimerkiksi Confluencessa, se kopio on vain luettavissa. Jira pysyy siellä missä on: tiketit tarvitsevat vastuuhenkilön ja tilan, eikä Git sovellu siihen.",
    },
    {
      type: "paragraph",
      text: "Projektin lopussa toimitan lopulliset versiot asiakkaalle, koska heidän ei pidä olla riippuvaisia minun yksityisestä repositoriostani oman projektinsa historian osalta. Tämän tavan hinta on, että kopion julkaiseminen on käsityötä. En ole vielä automatisoinut sitä.",
    },

    {
      type: "heading",
      id: "checks",
      text: "Näin säännöt pysyvät voimassa",
    },
    {
      type: "paragraph",
      text: "Tiedostoon kirjoitettu sääntö rikkoutuu helposti huomaamatta. Pääsääntötiedosto kasvaa liian pitkäksi, skillin kuvaus estää sitä latautumasta tai värimuutos pudottaa kontrastin alle vähimmäisrajan. Siksi repositorio tarkistaa itse itsensä. Yksi skripti pyörii jokaisen pushin yhteydessä ja epäonnistuu, kun jokin on pielessä, oli muutoksen tehnyt minä tai Claude.",
    },
    {
      type: "paragraph",
      text: "Sama ajattelu ratkaisi sen, miten käsittelen suunnittelun laatua. Suunnittelin ensin listan kielletyistä tyyleistä, jotta tekoälyn työ ei näyttäisi geneeriseltä. Luovuin siitä. Kieltolista nostaa kielletyn asian mallin eteen, ja se vanhenee. Annan nykyään Claudelle annotoituja esimerkkejä hyvästä työstä omista projekteistani, ja jokaisessa kerrotaan, mitä siinä päätettiin ja mistä luovuttiin.",
    },

    {
      type: "heading",
      id: "unknown",
      text: "Mitä en vielä tiedä",
    },
    {
      type: "paragraph",
      text: "Tämä on ensimmäinen versio, enkä ole vielä käyttänyt sitä oikeassa projektissa. Esimerkit siinä ovat fiktiivisiä. Testit, jotka tarkistavat, latautuuko jokainen skilli silloin kun pitää, on kirjoitettu mutta niitä ei ole ajettu. Ja saavutettavuustarkistukset ovat suunnitteluvaiheen katsauksia, eivät auditointeja. Ne eivät korvaa testausta avustavilla teknologioilla ja vammaisten ihmisten kanssa.",
    },
    {
      type: "paragraph",
      text: "Seuraava askeleeni on käyttää sitä yhdessä oikeassa projektissa asiakkaan luvalla ja muuttaa kaikki, mikä ei kestä ensimmäistä viikkoa.",
    },
    {
      type: "quote",
      text: "Tekoäly nopeuttaa luonnostelua. Se ei nopeuta päättämistä, testaamista tai vastuun kantamista, ja juuri ne haluan pitää itselläni.",
    },
    {
      type: "paragraph",
      text: "Pohja on julkinen: [project-set-up-template GitHubissa](https://github.com/beritalasmaki/project-set-up-template). Vaiheittainen ohje on tiedostossa [using-this-template](https://github.com/beritalasmaki/project-set-up-template/blob/main/docs/using-this-template.md).",
    },
  ],
};
