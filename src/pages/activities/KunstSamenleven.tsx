import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/language-context";

const KunstSamenleven = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            {language === "nl" ? "De Kunst van het Samenleven" : "L'Art de Vivre Ensemble"}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <img 
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=400&fit=crop" 
              alt="Community" 
              className="w-full h-64 object-cover rounded-xl mb-8"
            />
            
            <p className="text-lg text-muted-foreground mb-6">
              {language === "nl" 
                ? "In een diverse samenleving is de kunst van het samenleven essentieel. Beltud organiseert workshops, seminaries en interactieve sessies die mensen van verschillende achtergronden samenbrengen om van elkaar te leren en respect voor elkaar te ontwikkelen."
                : "Dans une société diversifiée, l'art de vivre ensemble est essentiel. Beltud organise des ateliers, séminaires et sessions interactives qui rassemblent des personnes d'horizons différents pour apprendre les uns des autres et développer le respect mutuel."}
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Onze Activiteiten" : "Nos Activités"}
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Interculturele Dialoog" : "Dialogue Interculturel"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "nl"
                    ? "Gestructureerde gesprekssessies waar deelnemers hun ervaringen, tradities en perspectieven kunnen delen in een veilige en respectvolle omgeving."
                    : "Sessions de discussion structurées où les participants peuvent partager leurs expériences, traditions et perspectives dans un environnement sûr et respectueux."}
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Workshops Conflictoplossing" : "Ateliers de Résolution de Conflits"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "nl"
                    ? "Leer praktische vaardigheden om culturele misverstanden te overbruggen en constructieve oplossingen te vinden voor dagelijkse uitdagingen."
                    : "Apprenez des compétences pratiques pour surmonter les malentendus culturels et trouver des solutions constructives aux défis quotidiens."}
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Gemeenschapsevenementen" : "Événements Communautaires"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "nl"
                    ? "Gezamenlijke activiteiten zoals potluck diners, sporttoernooien en culturele festivals die mensen op een informele manier samenbrengen."
                    : "Activités communes comme des repas-partage, tournois sportifs et festivals culturels qui rassemblent les gens de manière informelle."}
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Waarom deelnemen?" : "Pourquoi participer?"}
            </h2>
            
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
              <li>{language === "nl" ? "Ontwikkel interculturele competenties" : "Développez des compétences interculturelles"}</li>
              <li>{language === "nl" ? "Bouw betekenisvolle connecties" : "Construisez des connexions significatives"}</li>
              <li>{language === "nl" ? "Leer van diverse perspectieven" : "Apprenez de perspectives diverses"}</li>
              <li>{language === "nl" ? "Draag bij aan een inclusieve samenleving" : "Contribuez à une société inclusive"}</li>
              <li>{language === "nl" ? "Verrijk je eigen culturele bewustzijn" : "Enrichissez votre propre conscience culturelle"}</li>
            </ul>

            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">
                {language === "nl" ? "Doe mee!" : "Rejoignez-nous!"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {language === "nl"
                  ? "Onze workshops vinden regelmatig plaats. Blijf op de hoogte van komende sessies door lid te worden of ons te volgen."
                  : "Nos ateliers ont lieu régulièrement. Restez informé des prochaines sessions en devenant membre ou en nous suivant."}
              </p>
              <a 
                href="/lidmaatschap" 
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                {language === "nl" ? "Word lid" : "Devenez membre"}
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default KunstSamenleven;

