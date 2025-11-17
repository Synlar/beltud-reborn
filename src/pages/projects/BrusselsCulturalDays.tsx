import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const BrusselsCulturalDays = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">Brusselse Cultuurdagen</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p>
            "De Brusselse Cultuurdagen" is een vierdaags cultureel festival dat een breed scala aan Turkse en Belgische cultuur presenteert en dat zich uitstrekt van literatuur tot traditionele keuken via ambachten, muziek, kunst, theater en volksdans. Met dit project met feestelijke sfeer brengt Beltud de vereniging van het cultureel en artistiek erfgoed van Anatolië in de schijnwerpers, wat een rijk platform creëert voor ontmoetingen en uitwisselingen.
          </p>
          
          <p>
            Het festival maakt deel uit van het project "50 jaar Turkse migratie" dat in 2014 wordt gevierd. Veel leden van de Turkse gemeenschap zijn hier geboren en beschouwen België niet alleen meer als een "gastheer", maar als een nieuw moederland. Niettemin blijft de Turkse cultuur een belangrijk facet van hun identiteit, aangezien het de geschiedenis van hun voorouders en hun cultureel erfgoed vertegenwoordigt.
          </p>
          
          <p>
            Het festival is een ideale gelegenheid om bruggen te bouwen tussen de Turkse gemeenschap en de andere gemeenschappen die in België aanwezig zijn.
          </p>
          
          <div className="mt-8">
            <a 
              href="https://bkg2013.beltud.be" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Meer informatie
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BrusselsCulturalDays;
