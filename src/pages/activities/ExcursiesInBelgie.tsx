import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/language-context";
import { MapPin, Clock, Users, Bus } from "lucide-react";

const ExcursiesInBelgie = () => {
  const { language } = useLanguage();

  const excursions = [
    {
      name: language === "nl" ? "Brugge: Het Venetië van het Noorden" : "Bruges: La Venise du Nord",
      image: "https://images.unsplash.com/photo-1604993606986-1c681d6f866f?w=600&h=400&fit=crop",
      duration: language === "nl" ? "Dagtrip" : "Journée",
      price: "€ 35",
      description: language === "nl"
        ? "Wandel door middeleeuwse straatjes, bezoek de Markt en Belfort, en proef Belgische chocolade."
        : "Promenez-vous dans les rues médiévales, visitez le Markt et le Beffroi, et dégustez du chocolat belge."
    },
    {
      name: language === "nl" ? "Gent: Historisch Juweel" : "Gand: Joyau Historique",
      image: "https://images.unsplash.com/photo-1613034492-85ec98f29f31?w=600&h=400&fit=crop",
      duration: language === "nl" ? "Dagtrip" : "Journée",
      price: "€ 30",
      description: language === "nl"
        ? "Ontdek het Gravensteen, Sint-Baafskathedraal en geniet van het levendige stadsleven."
        : "Découvrez le Château des Comtes, la Cathédrale Saint-Bavon et profitez de la vie urbaine animée."
    },
    {
      name: language === "nl" ? "Antwerpen: Stad van Diamanten" : "Anvers: Ville des Diamants",
      image: "https://images.unsplash.com/photo-1555947015-34a4b7d6d634?w=600&h=400&fit=crop",
      duration: language === "nl" ? "Dagtrip" : "Journée",
      price: "€ 25",
      description: language === "nl"
        ? "Bezoek het MAS museum, de kathedraal en ontdek de diamantwijk."
        : "Visitez le musée MAS, la cathédrale et découvrez le quartier des diamants."
    },
    {
      name: language === "nl" ? "Dinant: Aan de Maas" : "Dinant: Sur la Meuse",
      image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=600&h=400&fit=crop",
      duration: language === "nl" ? "Dagtrip" : "Journée",
      price: "€ 40",
      description: language === "nl"
        ? "Verken de indrukwekkende citadel, de geboortepla ats van Adolphe Sax en de prachtige Maasvallei."
        : "Explorez l'impressionnante citadelle, le lieu de naissance d'Adolphe Sax et la magnifique vallée de la Meuse."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            {language === "nl" ? "Excursies in België" : "Excursions en Belgique"}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <img 
              src="https://images.unsplash.com/photo-1600465623533-2f31e0ebbb4a?w=800&h=400&fit=crop" 
              alt="Belgium Excursions" 
              className="w-full h-64 object-cover rounded-xl mb-8"
            />
            
            <p className="text-lg text-muted-foreground mb-6">
              {language === "nl" 
                ? "Ontdek de schoonheid van België met Beltud! Onze dagtochten brengen je naar de mooiste steden en verborgen juweeltjes van het land. Perfect voor zowel nieuwkomers die België willen leren kennen als voor wie al jaren hier woont en meer wil ontdekken."
                : "Découvrez la beauté de la Belgique avec Beltud! Nos excursions d'une journée vous emmènent vers les plus belles villes et joyaux cachés du pays. Parfait pour les nouveaux arrivants qui veulent découvrir la Belgique et pour ceux qui vivent ici depuis des années et veulent en découvrir davantage."}
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Onze Excursies" : "Nos Excursions"}
            </h2>
            
            <div className="grid gap-6 mb-8">
              {excursions.map((exc, index) => (
                <div key={index} className="bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <img 
                      src={exc.image} 
                      alt={exc.name}
                      className="w-full md:w-1/3 h-48 md:h-auto object-cover"
                    />
                    <div className="p-6 flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {exc.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {exc.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary" />
                          {exc.duration}
                        </span>
                        <span className="flex items-center gap-2 font-bold text-primary">
                          {exc.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Wat is inbegrepen?" : "Qu'est-ce qui est inclus?"}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-card p-4 rounded-lg border flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Bus className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">
                    {language === "nl" ? "Busvervoer" : "Transport en Bus"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "nl" 
                      ? "Comfortabele bus met airco, vertrek vanuit Brussel"
                      : "Bus confortable avec climatisation, départ de Bruxelles"}
                  </p>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">
                    {language === "nl" ? "Gids" : "Guide"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "nl" 
                      ? "Nederlandstalige gids met kennis van lokale geschiedenis"
                      : "Guide néerlandophone avec connaissance de l'histoire locale"}
                  </p>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">
                    {language === "nl" ? "Rondleiding" : "Visite Guidée"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "nl" 
                      ? "Georganiseerde stadswandeling met alle highlights"
                      : "Promenade en ville organisée avec tous les points forts"}
                  </p>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">☕</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">
                    {language === "nl" ? "Vrije Tijd" : "Temps Libre"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "nl" 
                      ? "Tijd om zelf te ontdekken, winkelen of lunchen"
                      : "Temps pour découvrir par vous-même, faire du shopping ou déjeuner"}
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Planning & Vertrek" : "Programme & Départ"}
            </h2>
            
            <div className="bg-card p-6 rounded-lg border mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">
                      {language === "nl" ? "Typische Dagplanning" : "Programme Type de Journée"}
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><strong>08:00</strong> - {language === "nl" ? "Vertrek vanuit Brussel (Paleizenstraat)" : "Départ de Bruxelles (Rue des Palais)"}</li>
                      <li><strong>09:30</strong> - {language === "nl" ? "Aankomst + welkomstdrankje" : "Arrivée + boisson de bienvenue"}</li>
                      <li><strong>10:00-12:30</strong> - {language === "nl" ? "Geleide stadswandeling" : "Promenade guidée en ville"}</li>
                      <li><strong>12:30-14:00</strong> - {language === "nl" ? "Vrije tijd voor lunch" : "Temps libre pour le déjeuner"}</li>
                      <li><strong>14:00-16:30</strong> - {language === "nl" ? "Museumbezoek of vrije tijd" : "Visite de musée ou temps libre"}</li>
                      <li><strong>17:00</strong> - {language === "nl" ? "Vertrek terug naar Brussel" : "Retour vers Bruxelles"}</li>
                      <li><strong>18:30</strong> - {language === "nl" ? "Aankomst in Brussel" : "Arrivée à Bruxelles"}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Komende Excursies" : "Excursions à Venir"}
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-card p-4 rounded-lg border flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-foreground mb-1">
                    {language === "nl" ? "Brugge Dagtrip" : "Journée à Bruges"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "nl" ? "Zaterdag 23 maart 2024" : "Samedi 23 mars 2024"}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                    {language === "nl" ? "Nog 12 plaatsen" : "Encore 12 places"}
                  </span>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-foreground mb-1">
                    {language === "nl" ? "Gent Dagtrip" : "Journée à Gand"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "nl" ? "Zaterdag 13 april 2024" : "Samedi 13 avril 2024"}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                    {language === "nl" ? "Nog 18 plaatsen" : "Encore 18 places"}
                  </span>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-foreground mb-1">
                    {language === "nl" ? "Antwerpen & Diamantmuseum" : "Anvers & Musée du Diamant"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "nl" ? "Zaterdag 4 mei 2024" : "Samedi 4 mai 2024"}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 rounded-full text-sm font-medium">
                    {language === "nl" ? "Nog 5 plaatsen" : "Encore 5 places"}
                  </span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Praktische Info" : "Infos Pratiques"}
            </h2>
            
            <div className="bg-card p-6 rounded-lg border mb-8">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    {language === "nl" 
                      ? "Excursies vinden plaats bij elk weer (bij extreem weer wordt een alternatief voorzien)"
                      : "Les excursions ont lieu par tous les temps (en cas de météo extrême, une alternative est prévue)"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    {language === "nl" 
                      ? "Inschrijving uiterlijk 1 week voor vertrek"
                      : "Inscription au plus tard 1 semaine avant le départ"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    {language === "nl" 
                      ? "Minimaal 15 deelnemers voor de excursie doorgaat"
                      : "Minimum 15 participants pour que l'excursion ait lieu"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    {language === "nl" 
                      ? "Lunch niet inbegrepen (€10-20 per persoon)"
                      : "Déjeuner non inclus (€10-20 par personne)"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    {language === "nl" 
                      ? "Leden krijgen 20% korting op alle excursies"
                      : "Les membres bénéficient de 20% de réduction sur toutes les excursions"}
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">
                {language === "nl" ? "Schrijf je in!" : "Inscrivez-vous!"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {language === "nl"
                  ? "Ontdek België met Beltud! Neem contact op om je in te schrijven of voor meer informatie over onze excursies."
                  : "Découvrez la Belgique avec Beltud! Contactez-nous pour vous inscrire ou pour plus d'informations sur nos excursions."}
              </p>
              <div className="flex gap-3">
                <a 
                  href="/contact" 
                  className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  {language === "nl" ? "Inschrijven" : "S'inscrire"}
                </a>
                <a 
                  href="/lidmaatschap" 
                  className="inline-block px-6 py-3 bg-card text-foreground border rounded-md hover:bg-muted transition-colors"
                >
                  {language === "nl" ? "Word lid & bespaar 20%" : "Devenez membre & économisez 20%"}
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

export default ExcursiesInBelgie;

