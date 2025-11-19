import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/language-context";

const CultuurGeschiedenis = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            {language === "nl" ? "Cultuur & Geschiedenis" : "Culture & Histoire"}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <img 
              src="https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=800&h=400&fit=crop" 
              alt="History" 
              className="w-full h-64 object-cover rounded-xl mb-8"
            />
            
            <p className="text-lg text-muted-foreground mb-6">
              {language === "nl" 
                ? "Verdiep je kennis over de rijke geschiedenis en cultuur van zowel Turkije als België. Onze lezingen en cursussen bieden een fascinerende reis door de tijd, van oude beschavingen tot moderne ontwikkelingen, en de bijzondere band tussen beide landen."
                : "Approfondissez vos connaissances sur la riche histoire et culture de la Turquie et de la Belgique. Nos conférences et cours offrent un voyage fascinant à travers le temps, des anciennes civilisations aux développements modernes, et le lien spécial entre les deux pays."}
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Cursusmodules" : "Modules de Cours"}
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Ottomaans Rijk & Europa" : "Empire Ottoman & Europe"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === "nl"
                    ? "Ontdek de 600-jarige geschiedenis van het Ottomaanse Rijk en zijn invloed op Europa. Van de verovering van Constantinopel tot culturele uitwisselingen, diplomatieke relaties en de val van het rijk."
                    : "Découvrez l'histoire de 600 ans de l'Empire ottoman et son influence sur l'Europe. De la conquête de Constantinople aux échanges culturels, relations diplomatiques et la chute de l'empire."}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">
                    {language === "nl" ? "8 lezingen" : "8 conférences"}
                  </span>
                  <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">
                    € 60
                  </span>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Modern Turkije" : "Turquie Moderne"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === "nl"
                    ? "De transformatie van het Ottomaanse Rijk naar de moderne Turkse Republiek. Hervormingen van Atatürk, modernisering, democratie en de rol van Turkije in de hedendaagse wereld."
                    : "La transformation de l'Empire ottoman en République turque moderne. Réformes d'Atatürk, modernisation, démocratie et le rôle de la Turquie dans le monde contemporain."}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">
                    {language === "nl" ? "6 lezingen" : "6 conférences"}
                  </span>
                  <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">
                    € 50
                  </span>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Belgisch-Turkse Geschiedenis" : "Histoire Belgo-Turque"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === "nl"
                    ? "De bijzondere relatie tussen België en Turkije. Van vroege diplomatieke contacten tot arbeidsmigratie in de jaren '60, en de ontwikkeling van een bloeiende Turkse gemeenschap in België."
                    : "La relation spéciale entre la Belgique et la Turquie. Des premiers contacts diplomatiques à la migration de travail dans les années 60, et le développement d'une communauté turque florissante en Belgique."}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">
                    {language === "nl" ? "5 lezingen" : "5 conférences"}
                  </span>
                  <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">
                    € 40
                  </span>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Turkse Kunst & Architectuur" : "Art & Architecture Turcs"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === "nl"
                    ? "Een visuele reis door eeuwen van Turkse kunst. Ottomaanse architectuur, moskeeën, paleizen, miniaturen, textiel en de invloed op wereldwijde kunstbewegingen."
                    : "Un voyage visuel à travers des siècles d'art turc. Architecture ottomane, mosquées, palais, miniatures, textiles et influence sur les mouvements artistiques mondiaux."}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">
                    {language === "nl" ? "6 lezingen" : "6 conférences"}
                  </span>
                  <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">
                    € 50
                  </span>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Belgische Geschiedenis voor Nieuwkomers" : "Histoire Belge pour Nouveaux Arrivants"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === "nl"
                    ? "Speciaal ontworpen voor nieuwe inwoners. Leer over de Belgische geschiedenis, staatstructuur, cultuur en samenleving. Essentieel voor een betere integratie."
                    : "Spécialement conçu pour les nouveaux résidents. Apprenez l'histoire belge, la structure de l'État, la culture et la société. Essentiel pour une meilleure intégration."}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">
                    {language === "nl" ? "4 lezingen" : "4 conférences"}
                  </span>
                  <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">
                    € 30
                  </span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Gastlezingen" : "Conférences Invitées"}
            </h2>
            
            <p className="text-muted-foreground mb-6">
              {language === "nl"
                ? "Naast onze reguliere cursussen organiseren we maandelijkse gastlezingen met experts, historici, auteurs en andere specialisten die fascinerende inzichten delen over specifieke onderwerpen."
                : "En plus de nos cours réguliers, nous organisons des conférences mensuelles d'invités avec des experts, historiens, auteurs et autres spécialistes qui partagent des aperçus fascinants sur des sujets spécifiques."}
            </p>

            <div className="bg-card p-6 rounded-lg border mb-8">
              <h4 className="font-bold text-foreground mb-3">
                {language === "nl" ? "Recent programma:" : "Programme récent:"}
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {language === "nl" ? "De Zijderoute en culturele uitwisseling" : "La Route de la Soie et l'échange culturel"}</li>
                <li>• {language === "nl" ? "Vrouwen in de Ottomaanse geschiedenis" : "Les femmes dans l'histoire ottomane"}</li>
                <li>• {language === "nl" ? "Belgische architectuur in Istanbul" : "L'architecture belge à Istanbul"}</li>
                <li>• {language === "nl" ? "Turkse literatuur in vertaling" : "La littérature turque en traduction"}</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Lesmethode" : "Méthode d'Enseignement"}
            </h2>
            
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
              <li>{language === "nl" ? "Boeiende presentaties met visueel materiaal" : "Présentations captivantes avec matériel visuel"}</li>
              <li>{language === "nl" ? "Interactieve discussies en Q&A sessies" : "Discussions interactives et sessions Q&R"}</li>
              <li>{language === "nl" ? "Aanbevolen literatuur voor verdere studie" : "Littérature recommandée pour étude approfondie"}</li>
              <li>{language === "nl" ? "Excursies naar musea en historische plaatsen" : "Excursions vers musées et lieux historiques"}</li>
              <li>{language === "nl" ? "Documentaires en filmmateriaal" : "Documentaires et matériel filmé"}</li>
              <li>{language === "nl" ? "Certificaat na voltooiing van cursusmodules" : "Certificat après achèvement des modules de cours"}</li>
            </ul>

            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">
                {language === "nl" ? "Inschrijven" : "Inscription"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {language === "nl"
                  ? "Nieuwe cursuscycli starten elk kwartaal. Je kunt individuele modules volgen of het volledige programma. Leden krijgen 20% korting op alle cursussen."
                  : "De nouveaux cycles de cours commencent chaque trimestre. Vous pouvez suivre des modules individuels ou le programme complet. Les membres bénéficient de 20% de réduction sur tous les cours."}
              </p>
              <div className="flex gap-3">
                <a 
                  href="/contact" 
                  className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  {language === "nl" ? "Meer info" : "Plus d'infos"}
                </a>
                <a 
                  href="/lidmaatschap" 
                  className="inline-block px-6 py-3 bg-card text-foreground border rounded-md hover:bg-muted transition-colors"
                >
                  {language === "nl" ? "Word lid" : "Devenez membre"}
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

export default CultuurGeschiedenis;

