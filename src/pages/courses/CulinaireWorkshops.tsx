import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/language-context";

const CulinaireWorkshops = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            {language === "nl" ? "Culinaire Workshops" : "Ateliers Culinaires"}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=400&fit=crop" 
              alt="Culinary Workshop" 
              className="w-full h-64 object-cover rounded-xl mb-8"
            />
            
            <p className="text-lg text-muted-foreground mb-6">
              {language === "nl" 
                ? "Ontdek de rijke smaken van de Turkse keuken in onze interactieve culinaire workshops. Leer authentieke recepten bereiden met traditionele technieken en verse ingrediënten. Van mezze tot hoofdgerechten en desserts - duik in een culinaire reis door Turkije."
                : "Découvrez les saveurs riches de la cuisine turque dans nos ateliers culinaires interactifs. Apprenez à préparer des recettes authentiques avec des techniques traditionnelles et des ingrédients frais. Des mezze aux plats principaux et desserts - plongez dans un voyage culinaire à travers la Turquie."}
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Onze Workshops" : "Nos Ateliers"}
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Turkse Mezze Workshop" : "Atelier Mezze Turcs"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === "nl"
                    ? "Leer de kunst van het maken van traditionele Turkse voorgerechten: humus, ezme, patlıcan salatası, cacık en meer. Perfecte start voor elke maaltijd!"
                    : "Apprenez l'art de préparer des entrées turques traditionnelles : houmous, ezme, salade d'aubergines, cacık et plus encore. Parfait pour commencer tout repas!"}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">
                    {language === "nl" ? "3 uur" : "3 heures"}
                  </span>
                  <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">
                    € 45
                  </span>
                  <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">
                    {language === "nl" ? "Max 12 personen" : "Max 12 personnes"}
                  </span>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Turkse Hoofdgerechten" : "Plats Principaux Turcs"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === "nl"
                    ? "Van karnıyarık tot mantı, leer de geheimen van Turkse hoofdgerechten. We bereiden samen klassieke recepten die generaties lang zijn doorgegeven."
                    : "De karnıyarık à mantı, découvrez les secrets des plats principaux turcs. Nous préparons ensemble des recettes classiques transmises de génération en génération."}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">
                    {language === "nl" ? "4 uur" : "4 heures"}
                  </span>
                  <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">
                    € 55
                  </span>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Baklava & Turkse Desserts" : "Baklava & Desserts Turcs"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === "nl"
                    ? "Ontdek de zoete kant van Turkije! Leer baklava maken met dunne filo deeg, maak sütlaç (rijstpudding), kazandibi en andere heerlijke desserts."
                    : "Découvrez le côté sucré de la Turquie! Apprenez à faire du baklava avec de la pâte filo fine, préparez du sütlaç (riz au lait), kazandibi et d'autres délicieux desserts."}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">
                    {language === "nl" ? "3 uur" : "3 heures"}
                  </span>
                  <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">
                    € 50
                  </span>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Turkse Broodjes & Gebak" : "Pains & Pâtisseries Turcs"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === "nl"
                    ? "Van simit tot börek, van pide tot açma - leer alle geheimen van Turkse broodjes en hartige gebakjes. Inclusief tips voor de perfecte deegbereiding."
                    : "De simit à börek, de pide à açma - apprenez tous les secrets des pains et pâtisseries salées turcs. Conseils inclus pour une préparation parfaite de la pâte."}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">
                    {language === "nl" ? "4 uur" : "4 heures"}
                  </span>
                  <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">
                    € 50
                  </span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Wat is inbegrepen?" : "Qu'est-ce qui est inclus?"}
            </h2>
            
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
              <li>{language === "nl" ? "Alle ingrediënten en materialen" : "Tous les ingrédients et matériaux"}</li>
              <li>{language === "nl" ? "Professionele begeleiding door ervaren koks" : "Accompagnement professionnel par des chefs expérimentés"}</li>
              <li>{language === "nl" ? "Receptenboekje om mee naar huis te nemen" : "Livret de recettes à emporter"}</li>
              <li>{language === "nl" ? "Gezamenlijke proeverij van alle gerechten" : "Dégustation commune de tous les plats"}</li>
              <li>{language === "nl" ? "Koffie, thee en water tijdens de workshop" : "Café, thé et eau pendant l'atelier"}</li>
              <li>{language === "nl" ? "Schort en alle benodigde keukengerei" : "Tablier et tous les ustensiles de cuisine nécessaires"}</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Praktische Info" : "Infos Pratiques"}
            </h2>
            
            <div className="bg-card p-6 rounded-lg border mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    {language === "nl" ? "Wanneer?" : "Quand?"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "nl" 
                      ? "Elke eerste zaterdag van de maand, 10:00 - 14:00"
                      : "Chaque premier samedi du mois, 10:00 - 14:00"}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    {language === "nl" ? "Waar?" : "Où?"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Paleizenstraat 27, 1030 Brussel
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    {language === "nl" ? "Niveau" : "Niveau"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "nl" 
                      ? "Alle niveaus welkom, van beginner tot gevorderd"
                      : "Tous niveaux bienvenus, du débutant à l'avancé"}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    {language === "nl" ? "Taal" : "Langue"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Nederlands & Français
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">
                {language === "nl" ? "Inschrijven" : "Inscription"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {language === "nl"
                  ? "Plaatsen zijn beperkt! Schrijf tijdig in voor de workshop van uw keuze. Groepsreducties beschikbaar voor 4+ personen."
                  : "Les places sont limitées! Inscrivez-vous à temps pour l'atelier de votre choix. Réductions de groupe disponibles pour 4+ personnes."}
              </p>
              <div className="flex gap-3">
                <a 
                  href="/contact" 
                  className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  {language === "nl" ? "Schrijf je in" : "Inscrivez-vous"}
                </a>
                <a 
                  href="/lidmaatschap" 
                  className="inline-block px-6 py-3 bg-card text-foreground border rounded-md hover:bg-muted transition-colors"
                >
                  {language === "nl" ? "Ledenvoordeel: 20% korting" : "Avantage membre: 20% réduction"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CulinaireWorkshops;

