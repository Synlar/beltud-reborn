import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/language-context";

const Mission = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          {language === "nl" ? "Missie & Visie" : "Mission & Vision"}
        </h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p>
            {language === "nl" 
              ? "Onze missie is het bevorderen van interculturele dialoog en vriendschap tussen België en Turkije."
              : "Notre mission est de promouvoir le dialogue interculturel et l'amitié entre la Belgique et la Turquie."
            }
          </p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8">
            {language === "nl" ? "Onze Visie" : "Notre Vision"}
          </h2>
          <p>
            {language === "nl"
              ? "Wij streven naar een samenleving waar diversiteit gevierd wordt en waar iedereen zich thuis voelt."
              : "Nous aspirons à une société où la diversité est célébrée et où chacun se sent chez soi."
            }
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Mission;

