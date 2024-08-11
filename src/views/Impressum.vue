<script lang="ts" setup></script>

<!---- Html ---------------------------------------------------->

<template>
  <div class="content">
    <h1>Impressum</h1>
    <section>
      <h3>Herausgeber:</h3>
      <p>Vorstand des 1. SC Klarenthal e. V. 1968</p>
      <p>Vorsitzender: Nico Hahl</p>
      <p>1. Stellvertr. Vorsitzender: Rachid Rahou</p>
      <p>2. Stellvertr. Vorsitzender: Dieter Leibrich</p>
      <p>Kassenwartin: Nicole Hahl</p>
      <p>Schriftführer: Stefan Müller</p>
    </section>
    <section>
      <h3>Anschrift:</h3>
      <p>1. SC Klarenthal e. V. 1968</p>
      <p>Geschwister-Scholl-Str. 8</p>
      <p>65197 Wiesbaden</p>
    </section>
    <section>
      <h3>Kontakt:</h3>
      <p>Telefon: 0611 / 46 82 21</p>
      <p>Telefax: 0611 / 7 16 29 48</p>
      <p>E-Mail: sc-klarenthal@t-online.de</p>
    </section>
    <section>
      <h3>Registereintrag:</h3>
      <p>Amtsgericht Wiesbaden VR 1712</p>
    </section>
    <section>
      <h3>Inhaltlich verantwortlich für diesen Internetauftritt ist:</h3>
      <p>Nico Hahl</p>
      <p>E-Mail: sc-klarenthal@t-online.de</p>
    </section>
    <section>
      <h3>Haftung für Inhalte:</h3>
      <p>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
        Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
      </p>
      <p>
        Als Diensteanbieter sind wir gemäß § 6 Abs.1 MDStV und § 8 Abs.1 TDG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Diensteanbieter sind jedoch
        nicht verpflichtet, die von ihnen übermittelten oder gespeicherten fremden Informationen zu
        überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
        allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst
        ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
        von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </p>
    </section>
    <section>
      <h3>Haftung für Links:</h3>
      <p>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
        Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
        Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
        Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
        mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung
        nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
        konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei bekannt werden von
        Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>
      <p>
        Links zu den Webseiten der einzelnen Abteilungen werden von den dort Verantwortlichen
        betrieben und der 1. SC Klarenthal 1968 e. V. hat keinen Einfluss auf den Inhalt dieser
        Webseiten. Diese Abteilungen wurden vom Vorstand des 1. SC Klarenthal aufgefordert, den nach
        TMG verantwortlichen Betreiber der Internetseite im Impressum zu benennen. Diese Seiten sind
        rechtlich vom 1. SC Klarenthal unabhängige sogenannte Fanseiten und sind wie die im ersten
        Abschnitt beschriebenen Verlinkungen zu betrachten.
      </p>
    </section>
    <section>
      <h3>Urheberrecht:</h3>
      <p>
        Die Betreiber der Seiten sind bemüht, stets die Urheberrechte anderer zu beachten bzw. auf
        selbst erstellte sowie lizenzfreie Werke zurückzugreifen.
      </p>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
        deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die
        Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
        des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
        Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
        Gebrauch gestattet.
      </p>
      <p>
        Die Rechte an Texten und Bildern liegen beim Vorstand des 1. SC Klarenthal e. V. 1968, wenn
        nichts anderes vermerkt ist.
      </p>
    </section>
  </div>
</template>

<!---- Style ---------------------------------------------------->

<style lang="scss" scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f8f8;
  color: #333;
}

/* Container styling */
.content {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  p {
    margin-left: 20px;
  }
}

/* Heading styles */
h1,
h2 {
  margin-top: 0;
}

/* Section spacing */
section {
  margin-bottom: 20px;
}

/* Paragraph spacing */
p {
  line-height: 1.6;
}

/* Make links more noticeable */
a {
  color: #0056b3;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .content {
    padding: 10px;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.25rem;
  }
}
</style>
