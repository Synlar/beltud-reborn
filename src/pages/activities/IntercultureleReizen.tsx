import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/language-context";

const IntercultureleReizen = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            {language === "nl" ? "Interculturele Reizen" : "Voyages Interculturels"}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <img 
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=400&fit=crop" 
              alt="Travel" 
              className="w-full h-64 object-cover rounded-xl mb-8"
            />
            
            <p className="text-lg text-muted-foreground mb-6">
              {language === "nl" 
                ? "Ontdek nieuwe culturen en maak onvergetelijke herinneringen door onze georganiseerde reizen naar Turkije en België. Beltud organiseert jaarlijks meerdere culturele reizen die de band tussen onze gemeenschappen versterken."
                : "Découvrez de nouvelles cultures et créez des souvenirs inoubliables grâce à nos voyages organisés en Turquie et en Belgique. Beltud organise chaque année plusieurs voyages culturels qui renforcent les liens entre nos communautés."}
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Onze Reizen" : "Nos Voyages"}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Culturele Reis naar Turkije" : "Voyage Culturel en Turquie"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "nl"
                    ? "Bezoek historische steden zoals Istanbul, Ankara en Antalya. Ontdek de rijke geschiedenis en cultuur van Turkije."
                    : "Visitez des villes historiques comme Istanbul, Ankara et Antalya. Découvrez la riche histoire et culture de la Turquie."}
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Belgische Cultuursteden" : "Villes Culturelles Belges"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "nl"
                    ? "Ontdek de schoonheid van Belgische steden zoals Brugge, Gent en Antwerpen met een interculturele groep."
                    : "Découvrez la beauté des villes belges comme Bruges, Gand et Anvers avec un groupe interculturel."}
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Wat is inbegrepen?" : "Qu'est-ce qui est inclus?"}
            </h2>
            
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
              <li>{language === "nl" ? "Vervoer per bus" : "Transport en bus"}</li>
              <li>{language === "nl" ? "Accommodatie in comfortabele hotels" : "Hébergement dans des hôtels confortables"}</li>
              <li>{language === "nl" ? "Gids en begeleiding" : "Guide et accompagnement"}</li>
              <li>{language === "nl" ? "Museumbezoeken en excursies" : "Visites de musées et excursions"}</li>
              <li>{language === "nl" ? "Ontbijt en enkele maaltijden" : "Petit-déjeuner et certains repas"}</li>
            </ul>

            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">
                {language === "nl" ? "Inschrijven" : "Inscription"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {language === "nl"
                  ? "Interesse om mee te gaan op onze volgende reis? Neem contact met ons op voor meer informatie en beschikbaarheid."
                  : "Intéressé à participer à notre prochain voyage? Contactez-nous pour plus d'informations et disponibilité."}
              </p>
              <a 
                href="/contact" 
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                {language === "nl" ? "Contacteer ons" : "Contactez-nous"}
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IntercultureleReizen;

