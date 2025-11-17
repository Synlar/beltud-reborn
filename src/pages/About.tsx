import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">Over Beltud</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p>
            Beltud (Belgisch-Turkse Vriendschap) is een vzw opgericht in 1985 met als doel het bevorderen van de interculturele dialoog en vriendschap tussen de Belgische en Turkse gemeenschappen.
          </p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8">Onze Missie</h2>
          <p>
            Wij streven ernaar bruggen te bouwen tussen culturen door middel van culturele, educatieve en sociale activiteiten. Beltud organiseert evenementen, cursussen en projecten die mensen van verschillende achtergronden samenbrengen.
          </p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8">Onze Waarden</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Interculturele dialoog en wederzijds respect</li>
            <li>Sociale cohesie en inclusie</li>
            <li>Cultureel erfgoed en identiteit</li>
            <li>Educatie en kennisdeling</li>
            <li>Gemeenschapsopbouw en samenwerking</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-foreground mt-8">Onze Activiteiten</h2>
          <p>
            Beltud organiseert een breed scala aan activiteiten, waaronder culturele festivals, taallessen, sportieve evenementen, kunsttentoonstellingen, muziekoptredens en interculturele ontmoetingen. Al onze activiteiten zijn gericht op het bevorderen van begrip en vriendschap tussen gemeenschappen.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
