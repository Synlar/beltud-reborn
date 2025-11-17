import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const FiftyYears = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">50 Jaar Hand in Hand</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p>
            16 juli 1964, een historische datum waarop het verdrag tussen Turkije en België werd ondertekend. Dit verdrag markeerde het begin van de migratie van Turkse arbeiders naar België. 50 jaar later wil de Federatie van Actieve Verenigingen (Fedactio), in samenwerking met haar lidverenigingen, waaronder Beltud, dit belangrijke evenement herdenken.
          </p>
          
          <p>
            De federatie organiseert verschillende sociale, culturele, artistieke en sportieve activiteiten die de gemeenschap in het zonnetje zetten. Het project biedt een platform voor ontmoeting en vriendschap met mensen uit verschillende gemeenschappen in België.
          </p>
          
          <p>
            Het is nu bijna 50 jaar geleden dat de Turkse gemeenschap aanwezig is in België. Dankzij haar aanpassingsvermogen was zij al snel in staat om samen te werken en de ontwikkeling van gemeenschappelijke waarden met het gastland te bevorderen.
          </p>
          
          <p>
            Ter gelegenheid van de 50 jaar Turkse aanwezigheid in België zullen bepaalde waarden worden bijgewerkt door de Federatie van Actieve Verenigingen van België (Fedactio) door middel van activiteiten die zich tot iedereen richten. Hiervoor heeft Fedactio 50 verschillende activiteiten gepland, waarvan de lancering plaatsvond tijdens een vriendschapsdrankje op donderdag 9 februari 2012 in gezelschap van vooraanstaande persoonlijkheden.
          </p>
          
          <p>
            Aantonen hoe moeilijkheden om samen te leven zich kunnen voordoen als kansen, de rijkdom afbeelden die verschillen vertegenwoordigen en de synergie tonen die een goede sociale cohesie kan creëren, zijn allemaal drijvende krachten die deze activiteiten zullen ontwerpen en dragen.
          </p>
          
          <p>
            De activiteiten vinden plaats in verschillende steden in België en duren tot eind 2014. De Turkse immigratie begon in 1964. We zullen daarom het vijftigjarig jubileum van deze historische gebeurtenis in 2014 vieren.
          </p>
          
          <div className="mt-8">
            <a 
              href="https://www.50ansenbelgique.be/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Bezoek de website
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FiftyYears;
