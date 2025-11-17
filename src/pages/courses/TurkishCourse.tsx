import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const TurkishCourse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">Cursus Turks</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p className="text-2xl font-semibold text-primary">Hoşgeldiniz! Welkom!</p>
          
          <p>
            Een taal leren opent deuren naar nieuwe mensen, culturen en gemeenschappen. De afgelopen jaren heeft Turkije steeds meer aan belang gewonnen. Turkije, de brug tussen Oost en West, is een populaire vakantiebestemming met zijn prachtige landschappen en gastvrije inwoners.
          </p>
          
          <p>
            Bovendien is Turkije een dynamisch land en kandidaat-lid van de EU. De mogelijkheden voor samenwerking op politiek, wetenschappelijk, economisch en cultureel gebied met deze nieuwe partner zijn dan ook eindeloos.
          </p>
          
          <p>
            Velen hebben Turkije en de Turken ontdekt tijdens een reis en zijn onder de indruk geraakt van de landschappen, de levenswijze, de vriendelijkheid en de gastvrijheid van de Turken. Turks leren is een stap naar het ontdekken en begrijpen van een rijke cultuur. Het is ook de manier om te communiceren en relaties op te bouwen met de mensen die je ontmoet, degenen die je verwelkomen of die je door hun land leiden.
          </p>
          
          <p>
            Maar Turks is niet alleen de officiële taal van Turkije. Het is ook een erkende taal op Cyprus en in Macedonië en wordt ook gesproken in verschillende landen zoals Irak, Griekenland, Bulgarije, Kosovo, Bosnië-Herzegovina, Syrië, Roemenië, Moldavië en Azerbeidzjan.
          </p>
          
          <p>
            Sinds de bilaterale overeenkomsten van 1964 heeft België ook een grote Turkse gemeenschap in Brussel. Turks leren met Beltud is een eerste stap om de rijke cultuur van het land te verkennen en te begrijpen.
          </p>
          
          <div className="bg-card border border-border rounded-lg p-6 my-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Cursusdetails</h2>
            <ul className="space-y-3">
              <li>• <strong>Niveaus:</strong> Beginners, Gevorderden beginner, Gevorderden</li>
              <li>• <strong>Frequentie:</strong> 1 sessie van 2 uur per week (behalve schoolvakanties)</li>
              <li>• <strong>Module:</strong> Serie van 10 sessies</li>
              <li>• <strong>Groepsgrootte:</strong> Kleine groepen voor persoonlijke aandacht</li>
              <li>• <strong>Docent:</strong> Ervaren en gespecialiseerd in het onderwijzen van Turks als vreemde taal</li>
            </ul>
          </div>
          
          <p>
            Aan het einde van het jaar worden de deelnemers ontvangen in een Turkstalig gezin om in praktijk te brengen wat is geleerd in een warme en gezellige sfeer.
          </p>
          
          <div className="mt-8">
            <a 
              href="/#contact" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Inschrijven
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TurkishCourse;
