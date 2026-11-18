import type { BlogPost } from "../types";

export const howIWorkWithAiFi: BlogPost = {
  slug: "nain-tyoskentelen-tekoalyn-kanssa",
  translationOf: "how-i-work-with-ai",
  title: "Näin työskentelen tekoälyn kanssa: pohja suunnitteluun",
  tabTitle: "Näin työskentelen tekoälyn kanssa",
  excerpt:
    "Aloitan suunnitteluprojektit pohjasta, jossa tekoäly luonnostelee, minä päätän ja oikeat ihmiset testaavat. Pohjassa on kirjoitettu konteksti, tarkistuksia joita ei voi ohittaa ja kirjaus siitä, kuka päätti mitä. Kerron, mitä pohjassa on, miten käytän sitä ja mitä pohja ei vielä todista.",
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
      text: "Kun rakensin agenttiajojen katselmointinäkymää, kirjoitin tekoälyagentille pelisäännöt ennen kuin tein riviäkään koodia. Mitä se saa tehdä, mitä ei, ja yksi sääntö ennen kaikkia muita: ei väitettä ilman lähdettä. Sääntöjen kirjoittaminen tuntui suunnittelulta. Sen päättäminen, mitä kone saa väittää, on samaa työtä kuin sen päättäminen, mitä näkymä saa väittää.",
    },
    {
      type: "paragraph",
      text: "Tästä ajatuksesta syntyi pohja, josta aloitan nykyään suunnitteluprojektini. Tein sen julkisen sektorin ja B2B-projekteja varten, joissa saavutettavuus ja tietoturva ovat vaatimuksia ja monella on sananvaltaa. Kerron tässä, mitä pohjassa on, miten käytän sitä ja mitä pohja ei vielä todista.",
    },

    {
      type: "heading",
      id: "idea",
      text: "Perusajatus: tekoäly luonnostelee, minä päätän, oikeat ihmiset testaavat",
      navLabel: "Perusajatus yhdellä rivillä",
    },
    {
      type: "paragraph",
      text: "Tekoäly on hyvä tekemään rakenteita ja ensimmäisiä luonnoksia. Päättämään siitä ei ole, eikä se voi olla käyttäjä. Siksi jaan työn kolmeen rooliin.",
    },
    {
      type: "list",
      items: [
        "**Tekoäly luonnostelee.** Rakenteet, ensimmäiset versiot ja tiivistykset muistiinpanoistani. Lisäksi tekoäly tarkistaa työtä kriteereillä, jotka olen asettanut.",
        "**Minä päätän.** Suunnan, kompromissit ja sen, mitä jaetaan ja mitä viedään eteenpäin.",
        "**Oikeat ihmiset testaavat.** Käyttäjätestit, joissa on mukana myös käyttäjiä, joilla on saavutettavuustarpeita, sekä tietoturvatarkastus ja juridinen arvio. Näitä tekoäly ei korvaa.",
      ],
    },
    {
      type: "paragraph",
      text: "Jako painaa eniten silloin, kun panokset ovat isot. Julkisen sektorin palvelussa minun täytyy pystyä kertomaan, mitä on tarkistettu, kuka sen teki ja mikä on vain oletus.",
    },

    {
      type: "heading",
      id: "context",
      text: "Hyvää promptia tärkeämpää on kirjoittaa konteksti ylös",
      navLabel: "Konteksti on promptia tärkeämpi",
    },
    {
      type: "paragraph",
      text: "Kun istunto alkaa, tekoäly ei tiedä projektista mitään. Jos sille ei kerro, se arvaa aukot yleisellä tavalla, ja tulos voisi olla minkä tahansa tuotteen.",
    },
    {
      type: "paragraph",
      text: "Siksi jokaiselle asiakasprojektille tehdään oma yksityinen työtila pohjasta. Siellä on lyhyitä dokumentteja, jotka tekoäly lukee ennen kuin se alkaa auttaa: kenelle tuote on tehty, ongelma kirjoitettuna käyttäjän tilanteena ilman ratkaisua, kuka päättää mistäkin, mitä tuotteen pitää osata ja päätösloki. Annan mukaan omat raakamuistiinpanoni, tekoäly luonnostelee ja minä korjaan. Mitä muistiinpanoistani ei löydy, merkitään aukoksi eikä arvata.",
    },
    {
      type: "paragraph",
      text: "Työtila on minun eikä asiakkaan. En vie sitä koskaan asiakkaan repositorioon. Jos asiakas haluaa jonkin dokumentin, vaikkapa päätöslokin, annan sen heille tiedostona.",
    },

    {
      type: "heading",
      id: "process",
      text: "Näin projekti etenee",
    },
    {
      type: "paragraph",
      text: "Vaiheita on kuusi. Jokaiseen kuuluu skill eli tekoälylle kirjoitettu ohje sekä dokumentti, johon tulos kirjataan.",
    },
    {
      type: "findings",
      items: [
        {
          title: "Ongelman muotoilu",
          body: "Kirjoitan toimeksiannon ylös sellaisenaan. Sen jälkeen kuvaan ongelman tilanteena, jossa käyttäjä on. Jos ratkaisu on jo piilossa ongelman kuvauksessa, kirjoitan sen uusiksi.",
        },
        {
          title: "Ihmisten ymmärtäminen",
          body: "Sidosryhmäkartasta näkee, kuka päättää mistäkin ja missä kohdissa toiveet ovat ristiriidassa. Ristiriidat laitetaan vierekkäin, enkä anna tekoälyn ratkaista niitä.",
        },
        {
          title: "Suunnittelu",
          body: "Käyttäjävirroille kirjataan virhetilanteet ja jokaisen näkymän kaikki tilat. Tekoäly merkitsee aluksi kaikki tilat puuttuviksi, ja vain minä voin merkitä tilan suunnitelluksi.",
        },
        {
          title: "Tarkistus",
          body: "Käyn läpi saavutettavuuden, tietoturvan ja yksityisyyden sekä katson, mitkä valinnat jäivät pelkiksi oletuksiksi. Kontrastit laskee skripti, niitä ei arvioida silmämääräisesti.",
        },
        {
          title: "Luovutus",
          body: "Luovutuksessa kerrotaan, mikä on valmista, kuka sen hyväksyi ja mitä kukin toimittaja tekee. Mitään ei jää arvailun varaan.",
        },
        {
          title: "Kirjaaminen ja pohdinta",
          body: "Päätökset kirjataan niin, että näkyy kuka päätti ja miksi. Projektin lopussa lokista tehdään case study ilman luottamuksellisia tietoja.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "Tarkistuksen ja luovutuksen välissä vastuu siirtyy oikeille ihmisille: käyttäjätesteille (mukana myös käyttäjät, joilla on saavutettavuustarpeita), tietoturvatarkastukselle ja juridiselle arviolle. Pohjassa on tälle vaiheelle oma paikkansa, mutta tekoäly ei korvaa sitä.",
    },

    {
      type: "heading",
      id: "limits",
      text: "Rajat, joista en tingi",
    },
    {
      type: "list",
      items: [
        "**Suunnitelmaa ei koskaan sanota saavutettavaksi, vaatimustenmukaiseksi tai testatuksi.** Jokaisen tarkistuksen tulos on läpi, hylätty tai ei voida päätellä suunnitelmasta. Puhdas tulos tarkoittaa vain sitä, ettei näytetystä löytynyt virheitä.",
        "**Jokainen väite merkitään.** Joko todisteeksi lähteineen tai aukoksi. Keksittyjä lainauksia, tutkimustuloksia tai lukuja ei käytetä.",
        "**Asiakasdata ei päädy tekoälylle.** Kehotteissa ja tiedostoissa ei ole oikeita nimiä, henkilötietoja eikä luottamuksellisia lukuja. Käytän paikkamerkkejä.",
        "**Päätökset kirjataan roolin mukaan,** ei nimen.",
      ],
    },
    {
      type: "paragraph",
      text: "Asiakasprojekteissa käytän tekoälyä vain silloin, kun asiakas on sen sallinut. Selvitän asian jo ennen työn alkua. Osa asiakkaista, etenkin julkisella sektorilla, rajaa myös sitä, missä heidän aineistoaan saa säilyttää. Projektin asetustiedostossa kysytään molemmat heti ensimmäisenä.",
    },

    {
      type: "heading",
      id: "truth",
      text: "Missä dokumentit säilyvät",
    },
    {
      type: "paragraph",
      text: "Dokumentit ovat Markdown-tiedostoja Gitissä. Siellä on historia ja yksi oikea versio. Jos tiimi lukee dokumentteja jossain muualla, esimerkiksi Confluencessa, se kopio on vain luettavissa. Jira pysyy ennallaan, koska tiketit tarvitsevat vastuuhenkilön ja tilan, eikä Git sovellu siihen.",
    },
    {
      type: "paragraph",
      text: "Projektin lopussa annan lopulliset versiot asiakkaalle, koska heidän oman projektinsa historia ei saa riippua minun yksityisestä repositoriostani. Tässä tavassa on yksi huono puoli: kopion julkaiseminen tehdään käsin. En ole vielä automatisoinut sitä.",
    },

    {
      type: "heading",
      id: "checks",
      text: "Näin säännöt pysyvät voimassa",
    },
    {
      type: "paragraph",
      text: "Tiedostoon kirjoitettu sääntö unohtuu helposti. Pääohjetiedosto kasvaa liian pitkäksi, jonkin skillin kuvaus estää sen latautumisen tai värimuutos pudottaa kontrastin alle rajan. Siksi repositorio tarkistaa itse itsensä: yksi skripti ajetaan jokaisen pushin yhteydessä, ja se hälyttää, jos jokin on pielessä. Sama pätee, vaikka muutoksen olisi tehnyt tekoäly.",
    },
    {
      type: "paragraph",
      text: "Sama ajatus ratkaisi sen, miten käsittelen suunnittelun laatua. Suunnittelin alkuun listan kielletyistä tyyleistä, jotta tekoälyn tekemä ei näyttäisi geneeriseltä. Luovuin siitä. Kieltolista nostaa kielletyn asian tekoälyn eteen, ja lista vanhenee. Nykyään annan tekoälylle esimerkkejä hyvästä työstä omista projekteistani. Jokaisessa kerrotaan, mitä siinä päätettiin ja mistä luovuttiin.",
    },

    {
      type: "heading",
      id: "unknown",
      text: "Mitä en vielä tiedä",
    },
    {
      type: "paragraph",
      text: "Tämä on ensimmäinen versio, enkä ole vielä käyttänyt sitä oikeassa projektissa. Pohjan esimerkit ovat keksittyjä. Testit, joilla tarkistetaan, että jokainen skilli latautuu silloin kun pitää, on kirjoitettu mutta ei vielä ajettu. Saavutettavuustarkistukset ovat suunnitteluvaiheen katselmointeja, eivät auditointeja. Ne eivät korvaa testausta apuvälineillä eivätkä käyttäjätestejä käyttäjillä, joilla on saavutettavuustarpeita.",
    },
    {
      type: "paragraph",
      text: "Seuraavaksi aion kokeilla pohjaa yhdessä oikeassa projektissa asiakkaan luvalla ja muuttaa sen, mikä ei kestä ensimmäistä viikkoa.",
    },
    {
      type: "quote",
      text: "Tekoäly nopeuttaa luonnostelua. Päättäminen, testaaminen ja vastuun kantaminen eivät nopeudu, ja ne haluan pitää itselläni.",
    },
  ],
};
