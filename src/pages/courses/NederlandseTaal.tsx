import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/language-context";

const NederlandseTaal = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            {language === "nl" ? "Nederlandse Taalcursus" : "Cours de Langue Néerlandaise"}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <img 
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=400&fit=crop" 
              alt="Dutch Language" 
              className="w-full h-64 object-cover rounded-xl mb-8"
            />
            
            <p className="text-lg text-muted-foreground mb-6">
              {language === "nl" 
                ? "Leer Nederlands in een gezellige en ondersteunende omgeving. Onze cursussen zijn speciaal ontworpen voor niet-moedertaalsprekers en richten zich op praktisch taalgebruik voor het dagelijks leven en werk in België."
                : "Apprenez le néerlandais dans un environnement convivial et favorable. Nos cours sont spécialement conçus pour les locuteurs non natifs et se concentrent sur l'utilisation pratique de la langue pour la vie quotidienne et le travail en Belgique."}
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Cursusaanbod" : "Offre de Cours"}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Beginners (A1-A2)" : "Débutants (A1-A2)"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === "nl"
                    ? "Start vanaf nul. Leer de basis: alfabet, uitspraak, eenvoudige zinnen en alledaagse conversatie."
                    : "Commencez à partir de zéro. Apprenez les bases : alphabet, prononciation, phrases simples et conversation quotidienne."}
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  <li>• {language === "nl" ? "3 maanden" : "3 mois"}</li>
                  <li>• {language === "nl" ? "2x per week (avond)" : "2x par semaine (soir)"}</li>
                  <li>• € 120 ({language === "nl" ? "leden" : "membres"}: € 90)</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Gevorderden (B1-B2)" : "Intermédiaire (B1-B2)"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === "nl"
                    ? "Verdiep je kennis. Werk aan grammatica, woordenschat en vloeiender spreken voor werk en sociale situaties."
                    : "Approfondissez vos connaissances. Travaillez sur la grammaire, le vocabulaire et parlez plus couramment pour le travail et les situations sociales."}
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  <li>• {language === "nl" ? "3 maanden" : "3 mois"}</li>
                  <li>• {language === "nl" ? "2x per week (avond)" : "2x par semaine (soir)"}</li>
                  <li>• € 140 ({language === "nl" ? "leden" : "membres"}: € 110)</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Conversatie Workshops" : "Ateliers de Conversation"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === "nl"
                    ? "Oefenen met spreken in een ontspannen groep. Alle niveaus welkom. Focus op praktische communicatie."
                    : "Pratiquez l'expression orale dans un groupe détendu. Tous les niveaux sont les bienvenus. Accent sur la communication pratique."}
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  <li>• {language === "nl" ? "Wekelijks" : "Hebdomadaire"}</li>
                  <li>• {language === "nl" ? "Elke zaterdag 10:00-12:00" : "Chaque samedi 10:00-12:00"}</li>
                  <li>• {language === "nl" ? "Gratis voor leden" : "Gratuit pour les membres"}</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Inburgeringstest Voorbereiding" : "Préparation Test d'Intégration"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === "nl"
                    ? "Specifieke voorbereiding voor de officiële inburgeringstest. Inclusief oefenexamens en tips."
                    : "Préparation spécifique pour le test d'intégration officiel. Comprend des examens pratiques et des conseils."}
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  <li>• {language === "nl" ? "6 weken intensief" : "6 semaines intensif"}</li>
                  <li>• {language === "nl" ? "3x per week" : "3x par semaine"}</li>
                  <li>• € 180 ({language === "nl" ? "leden" : "membres"}: € 150)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Wat je leert" : "Ce que vous apprendrez"}
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">
                    {language === "nl" ? "Dagelijkse Communicatie" : "Communication Quotidienne"}
                  </h4>
                  <p className="text-muted-foreground">
                    {language === "nl"
                      ? "Winkelen, openbaar vervoer, afspraken maken, smalltalk"
                      : "Faire les courses, transports publics, prendre rendez-vous, petite conversation"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">
                    {language === "nl" ? "Zakelijk Nederlands" : "Néerlandais Professionnel"}
                  </h4>
                  <p className="text-muted-foreground">
                    {language === "nl"
                      ? "E-mails schrijven, solliciteren, telefoneren op het werk"
                      : "Rédiger des e-mails, postuler, téléphoner au travail"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">
                    {language === "nl" ? "Belgische Cultuur" : "Culture Belge"}
                  </h4>
                  <p className="text-muted-foreground">
                    {language === "nl"
                      ? "Leer niet alleen de taal maar ook over Belgische gewoonten en cultuur"
                      : "Apprenez non seulement la langue mais aussi les coutumes et la culture belges"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">
                    {language === "nl" ? "Grammatica & Schrijven" : "Grammaire & Écriture"}
                  </h4>
                  <p className="text-muted-foreground">
                    {language === "nl"
                      ? "Solide basis in Nederlandse grammatica en schriftelijke communicatie"
                      : "Base solide en grammaire néerlandaise et communication écrite"}
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Onze Methode" : "Notre Méthode"}
            </h2>
            
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
              <li>{language === "nl" ? "Kleine groepen (max 12 personen)" : "Petits groupes (max 12 personnes)"}</li>
              <li>{language === "nl" ? "Ervaren en gekwalificeerde docenten" : "Enseignants expérimentés et qualifiés"}</li>
              <li>{language === "nl" ? "Interactieve lessen met veel spreek oefeningen" : "Cours interactifs avec beaucoup d'exercices oraux"}</li>
              <li>{language === "nl" ? "Gratis lesmateriaal en online oefeningen" : "Matériel de cours gratuit et exercices en ligne"}</li>
              <li>{language === "nl" ? "Certificaat na afronding van de cursus" : "Certificat après achèvement du cours"}</li>
            </ul>

            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">
                {language === "nl" ? "Inschrijven" : "Inscription"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {language === "nl"
                  ? "De volgende cursus start in september. Plaatsen zijn beperkt, dus schrijf tijdig in!"
                  : "Le prochain cours commence en septembre. Les places sont limitées, inscrivez-vous à temps!"}
              </p>
              <a 
                href="/contact" 
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                {language === "nl" ? "Schrijf je in" : "Inscrivez-vous"}
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NederlandseTaal;

