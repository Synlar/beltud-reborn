import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/language-context";

const History = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          {language === "nl" ? "Geschiedenis" : "Histoire"}
        </h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p>
            {language === "nl"
              ? "Beltud werd opgericht in 1985 met als doel het bevorderen van de Belgisch-Turkse vriendschap."
              : "Beltud a été fondée en 1985 dans le but de promouvoir l'amitié belgo-turque."
            }
          </p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8">1985-2000</h2>
          <p>
            {language === "nl"
              ? "De beginjaren waren gericht op het organiseren van culturele evenementen en taalcursussen."
              : "Les premières années étaient axées sur l'organisation d'événements culturels et de cours de langue."
            }
          </p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8">2000-2023</h2>
          <p>
            {language === "nl"
              ? "Uitbreiding van activiteiten met interculturele projecten en internationale samenwerkingen."
              : "Expansion des activités avec des projets interculturels et des collaborations internationales."
            }
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default History;

