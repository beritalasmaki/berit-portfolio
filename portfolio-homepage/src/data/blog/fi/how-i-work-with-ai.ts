import type { BlogPost } from "../types";

export const howIWorkWithAiFi: BlogPost = {
  slug: "nain-tyoskentelen-tekoalyn-kanssa",
  translationOf: "how-i-work-with-ai",
  title: "Näin työskentelen tekoälyn kanssa",
  tabTitle: "Näin työskentelen tekoälyn kanssa",
  excerpt:
    "Uusien suunnitteluprojektieni lähtökohta on pohja, jossa tekoäly luonnostelee, minä päätän ja oikeat ihmiset testaavat. Kuvaan, mitä pohjassa on ja miten käytän sitä.",
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
      text: "Kun rakensin agenttiajojen katselmointinäkymää, kirjoitin tekoälyagentille pelisäännöt ennen kuin tein riviäkään koodia: mitä se saa tehdä, mitä ei, ja yksi sääntö muiden edelle: ei väitettä ilman lähdettä. Sen päättäminen, mitä kone saa väittää, on samaa työtä kuin sen päättäminen, mitä näkymä saa väittää.",
    },
    {
      type: "paragraph",
      text: "Tästä ajatuksesta syntyi pohja, joka on lähtökohtani uusiin suunnitteluprojekteihin. Tein sen julkisen sektorin ja B2B-projekteja varten, joissa saavutettavuus ja tietoturva ovat vaatimuksia ja monella on sananvaltaa.",
    },

    {
      type: "heading",
      id: "roles",
      text: "Roolit ja vastuut",
    },
    {
      type: "paragraph",
      text: "Tekoäly on hyvä tekemään rakenteita ja ensimmäisiä luonnoksia. Päättämään siitä ei ole, eikä se voi olla käyttäjä. Siksi työ on jaettu kolmeen rooliin.",
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
      text: "Työtila on minun eikä asiakkaan, enkä vie sitä koskaan asiakkaan repositorioon. Jos asiakas tarvitsee jonkin dokumentin, vaikkapa päätöslokin, annan sen tiedostona.",
    },

    {
      type: "heading",
      id: "process",
      text: "Prosessi",
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
          body: "Kirjoitan toimeksiannon ylös sellaisenaan, mutta pyrin anonymisoimaan tekstin niin, ettei asiakkaan tai kenenkään henkilön nimi näy missään. Asiakkaan tiedot pidän salaisina. Sen jälkeen kuvaan ongelman tilanteena, jossa käyttäjä on, ja kirjoitan sen uusiksi, jos ratkaisu on jo piilossa kuvauksessa.",
        },
        {
          title: "Ihmisten ymmärtäminen",
          body: "Sidosryhmäkartasta näkee, kuka päättää mistäkin. Erimielisyydet nousevat yleensä esiin vasta projektin aikana, joten alussa tärkeintä on tietää, kenen sana painaa. Ristiriidat kirjataan vierekkäin sitä mukaa kuin ne tulevat esiin, enkä anna tekoälyn ratkaista niitä.",
        },
        {
          title: "Suunnittelu",
          body: "Käyttäjävirroille kirjataan virhetilanteet ja jokaisen näkymän kaikki tilat. Tekoäly merkitsee tilat puuttuviksi, kunnes vahvistan niiden olevan suunniteltuja.",
        },
        {
          title: "Tarkistus",
          body: "Käyn läpi saavutettavuuden, tietoturvan ja yksityisyyden sekä katson, mitkä valinnat jäivät pelkiksi oletuksiksi. Kontrastit laskee skripti. Tämä on suunnitteluvaiheen katselmointi, ei auditointi.",
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
      text: "Tarkistuksen ja luovutuksen välissä vastuu siirtyy oikeille ihmisille: käyttäjätesteille (mukana myös käyttäjät, joilla on saavutettavuustarpeita), tietoturvatarkastukselle ja juridiselle arviolle.",
    },

    {
      type: "heading",
      id: "flows",
      text: "Käyttäjävirrat ja hankalat polut",
      navLabel: "Käyttäjävirrat",
    },
    {
      type: "paragraph",
      text: "Käyttäjävirta on enemmän kuin onnistunut polku. Kartoitan myös tilanteet, joissa jokin menee pieleen tai on käyttäjälle vaikea: virheilmoitukset, istunnon vanheneminen, yhteyden katkeaminen ja se, mitä tapahtuu, kun käyttäjällä ei ole oikeutta tehdä jotain.",
    },
    {
      type: "paragraph",
      text: "Sama polku voi olla yhdelle käyttäjälle sujuva ja toiselle sietämättömän vaikea. Kysyn jokaisesta vaiheesta, kenelle se on hankala. Se voi olla esimerkiksi käyttäjä, jolla on vähän digitaitoja, käyttäjä, joka käyttää apuvälineitä, kiireessä puhelimella asioiva tai joku, jonka tekeminen keskeytyy kesken kaiken.",
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
      text: "Dokumentit ovat Markdown-tiedostoja Gitissä, jolloin niillä on historia ja yksi oikea versio. Jos tiimi lukee niitä muualla, esimerkiksi Confluencessa, kopio on vain luettavissa. Jira säilyy tikettityölle. Projektin lopussa annan lopulliset versiot asiakkaalle, jotta heidän oman projektinsa historia ei riipu minun yksityisestä repositoriostani.",
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
        "**Aloitus viidellä dokumentilla.** Muut lisätään vasta, kun joku oikeasti lukee ja käyttää niitä.",
        "**Tekoäly tekee ensimmäisen version.** Annan raakamuistiinpanoni ja korjaan tuloksen.",
        "**Säännöt tarkistuvat itse,** joten kenenkään ei tarvitse muistaa pitää niitä voimassa.",
        "**Ei dokumenttia ilman lukijaa.** Jokaiselle on nimetty lukija ja käyttö.",
      ],
    },
    {
      type: "paragraph",
      text: "Kaksi kohtaa on yhä käsityötä: lukukopion julkaiseminen asiakkaan työkaluihin ja päätösten kirjaaminen. Niiden keventäminen on seuraavana vuorossa.",
    },
  ],
};
