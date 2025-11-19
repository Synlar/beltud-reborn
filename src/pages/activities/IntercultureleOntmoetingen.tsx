import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/language-context";

const IntercultureleOntmoetingen = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            {language === "nl" ? "Interculturele Ontmoetingen" : "Rencontres Interculturelles"}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=400&fit=crop" 
              alt="Meeting" 
              className="w-full h-64 object-cover rounded-xl mb-8"
            />
            
            <p className="text-lg text-muted-foreground mb-6">
              {language === "nl" 
                ? "Interculturele ontmoetingen vormen het hart van onze missie. We creëren ruimtes waar mensen uit verschillende culturen elkaar kunnen ontmoeten, uitwisselen en vriendschappen kunnen opbouwen. Deze ontmoetingen vinden plaats in een ontspannen en gastvrije sfeer."
                : "Les rencontres interculturelles sont au cœur de notre mission. Nous créons des espaces où des personnes de différentes cultures peuvent se rencontrer, échanger et construire des amitiés. Ces rencontres se déroulent dans une atmosphère détendue et accueillante."}
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Soorten Ontmoetingen" : "Types de Rencontres"}
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Taalcafés" : "Cafés Linguistiques"}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {language === "nl"
                    ? "Informele bijeenkomsten waar deelnemers verschillende talen kunnen oefenen terwijl ze genieten van thee, koffie en gezelschap. Nederlands, Turks, Frans en Engels worden gesproken."
                    : "Réunions informelles où les participants peuvent pratiquer différentes langues tout en profitant de thé, café et compagnie. Néerlandais, turc, français et anglais sont parlés."}
                </p>
                <span className="text-sm text-primary font-medium">
                  {language === "nl" ? "Elke donderdag, 18:00 - 20:00" : "Chaque jeudi, 18:00 - 20:00"}
                </span>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Culinaire Avonden" : "Soirées Culinaires"}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {language === "nl"
                    ? "Maandelijkse dinners waar deelnemers traditionele gerechten uit verschillende culturen delen. Elke avond wordt georganiseerd door een andere gemeenschap."
                    : "Dîners mensuels où les participants partagent des plats traditionnels de différentes cultures. Chaque soirée est organisée par une communauté différente."}
                </p>
                <span className="text-sm text-primary font-medium">
                  {language === "nl" ? "Laatste vrijdag van de maand" : "Dernier vendredi du mois"}
                </span>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Gezinsactiviteiten" : "Activités Familiales"}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {language === "nl"
                    ? "Activiteiten speciaal voor gezinnen met kinderen: speelmiddagen, kinderworkshops, picknicks in het park en familiefeesten tijdens feestdagen."
                    : "Activités spécialement pour les familles avec enfants : après-midis de jeux, ateliers pour enfants, pique-niques au parc et fêtes familiales pendant les vacances."}
                </p>
                <span className="text-sm text-primary font-medium">
                  {language === "nl" ? "Tweewekelijks op zaterdag" : "Tous les quinze jours le samedi"}
                </span>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Culturele Uitwisselingen" : "Échanges Culturels"}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {language === "nl"
                    ? "Presentaties, lezingen en demonstraties over verschillende aspecten van Turkse en Belgische cultuur, geschiedenis en tradities."
                    : "Présentations, conférences et démonstrations sur différents aspects de la culture, de l'histoire et des traditions turques et belges."}
                </p>
                <span className="text-sm text-primary font-medium">
                  {language === "nl" ? "Maandelijks" : "Mensuel"}
                </span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Wat te verwachten?" : "À quoi s'attendre?"}
            </h2>
            
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
              <li>{language === "nl" ? "Een gastvrije en inclusieve sfeer" : "Une atmosphère accueillante et inclusive"}</li>
              <li>{language === "nl" ? "Mensen van alle leeftijden en achtergronden" : "Des personnes de tous âges et horizons"}</li>
              <li>{language === "nl" ? "Geen druk, kom en ga wanneer het je past" : "Aucune pression, venez et partez quand cela vous convient"}</li>
              <li>{language === "nl" ? "Activiteiten zijn vaak gratis of tegen kleine bijdrage" : "Les activités sont souvent gratuites ou contre une petite contribution"}</li>
              <li>{language === "nl" ? "Verfrissingen en snacks worden meestal voorzien" : "Rafraîchissements et collations sont généralement fournis"}</li>
            </ul>

            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">
                {language === "nl" ? "Kom langs!" : "Venez nous rejoindre!"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {language === "nl"
                  ? "Je bent altijd welkom bij onze ontmoetingen. Geen inschrijving nodig voor de meeste activiteiten. Kom gewoon binnen en maak kennis!"
                  : "Vous êtes toujours les bienvenus à nos rencontres. Aucune inscription nécessaire pour la plupart des activités. Venez simplement et faites connaissance!"}
              </p>
              <a 
                href="/#activiteiten" 
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                {language === "nl" ? "Bekijk agenda" : "Voir l'agenda"}
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IntercultureleOntmoetingen;

