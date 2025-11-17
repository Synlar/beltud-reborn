import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const ColorsOfBelgium = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">De Kleuren van België</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p>
            "De Kleuren van België" is een cultureel evenement dat tot doel heeft de verschillende gemeenschappen die in België wonen dichter bij elkaar te brengen en bij te dragen aan wederzijds begrip en interculturele dialoog door vriendschapsbruggen te bouwen.
          </p>
          
          <p>
            Deze culturele manifestatie bestaat uit een wedstrijd gericht op jongeren jonger dan 16 jaar die worden uitgenodigd om op te treden in de categorieën zang, poëzie en speciale talenten, maar in een andere taal dan hun moedertaal. Dankzij de universele taal van muziek treden kinderen uit verschillende culturen op het podium om een boodschap van empathie, dialoog, vriendschap en samenleven te geven.
          </p>
          
          <p>
            Tijdens deze show presenteren de deelnemers hun talent in het Turks, Frans of Nederlands. Een dubbele uitdaging dus voor deze kinderen die geboren zijn in een multiculturele samenleving. Ze moeten niet alleen hun artistieke talent bewijzen, maar ook hun interculturele competentie en hun empathie voor andere culturen.
          </p>
          
          <p>
            De finale wordt afwisselend georganiseerd in de Franstalige en Nederlandstalige regio's van België. Het publiek dat vorig jaar de show bijwoonde in het Stadstheater van Antwerpen bewijst dat het een succes is. De show ging ook op tournee en trok in totaal 3000 toeschouwers.
          </p>
          
          <p>
            "De Kleuren van België" is ook een springplank voor jonge talenten die streven naar een toekomstige carrière in het veld. De jonge cellist die in 2012 laureaat was, werd dit jaar toegelaten tot de prestigieuze Kronberg Academie in Duitsland.
          </p>
          
          <p>
            Beltud kan rekenen op de steun en expertise van de jury: Johan Verminnen, Eva De Roovere, Francesca Vanthielen, Koen De Bouw, Merdan Taplak, Saddie Choua, Bart Cannaerts, Anke Buckinx, Erwin Jans, Jean-Louis Sbille, Walid en Olivier Battesti.
          </p>
          
          <div className="mt-8">
            <a 
              href="https://www.couleursdelabelgique.be" 
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

export default ColorsOfBelgium;
