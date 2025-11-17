import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const FriendlyMatch = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">Vriendschappelijke Wedstrijd</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p>
            Beltud organiseert regelmatig vriendschappelijke sportwedstrijden die gemeenschappen samenbrengen door middel van sport. Deze evenementen bevorderen teamwork, fair play en interculturele uitwisseling.
          </p>
          
          <p>
            Sport is een universele taal die grenzen overstijgt en mensen van verschillende achtergronden samenbrengt. Onze vriendschappelijke wedstrijden zijn bedoeld om bruggen te bouwen tussen de Turkse en Belgische gemeenschappen.
          </p>
          
          <p>
            Deze sportevenementen maken deel uit van onze bredere missie om sociale cohesie en wederzijds begrip te bevorderen tussen verschillende culturen in België.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FriendlyMatch;
