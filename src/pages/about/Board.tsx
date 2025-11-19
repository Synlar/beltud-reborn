import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/language-context";

const Board = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          {language === "nl" ? "Bestuur" : "Conseil d'administration"}
        </h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p>
            {language === "nl"
              ? "Ons bestuur bestaat uit toegewijde vrijwilligers die zich inzetten voor onze missie."
              : "Notre conseil d'administration est composé de bénévoles dévoués qui s'engagent pour notre mission."
            }
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold text-foreground mb-2">
                {language === "nl" ? "Voorzitter" : "Président"}
              </h3>
              <p className="text-muted-foreground">
                {language === "nl" ? "Naam wordt binnenkort toegevoegd" : "Nom à ajouter prochainement"}
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold text-foreground mb-2">
                {language === "nl" ? "Secretaris" : "Secrétaire"}
              </h3>
              <p className="text-muted-foreground">
                {language === "nl" ? "Naam wordt binnenkort toegevoegd" : "Nom à ajouter prochainement"}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Board;

