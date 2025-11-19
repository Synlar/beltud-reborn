import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/language-context";
import { Music, Video } from "lucide-react";

const TurkishClassicalMusic = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            {language === "nl" ? "Cursus Klassieke Turkse Muziek" : "Cours de Musique Classique Turque"}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <img 
              src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=400&fit=crop" 
              alt="Turkish Classical Music" 
              className="w-full h-64 object-cover rounded-xl mb-8"
            />
            
            <p className="text-lg text-muted-foreground mb-6">
              {language === "nl" 
                ? "Duik in de rijke traditie van Turkse klassieke muziek. Onze cursussen bieden een unieke kans om deze eeuwenoude kunstvorm te leren onder begeleiding van ervaren muzikanten. Van het begrijpen van makam (toonladders) tot het beheersen van klassieke composities."
                : "Plongez dans la riche tradition de la musique classique turque. Nos cours offrent une opportunité unique d'apprendre cette forme d'art séculaire sous la direction de musiciens expérimentés. De la compréhension des makams (gammes) à la maîtrise des compositions classiques."}
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Instrumenten" : "Instruments"}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <Music className="w-10 h-10 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Ney (Turkse Fluit)" : "Ney (Flûte Turque)"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === "nl"
                    ? "De ney is een end-blown fluit en een van de oudste muziekinstrumenten. Leer de unieke ademtechniek en de spirituele dimensie van dit mystieke instrument."
                    : "Le ney est une flûte soufflée par l'extrémité et l'un des plus anciens instruments de musique. Apprenez la technique de respiration unique et la dimension spirituelle de cet instrument mystique."}
                </p>
                <span className="text-sm text-primary font-medium">
                  {language === "nl" ? "Beginner & Gevorderd" : "Débutant & Avancé"}
                </span>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <Music className="w-10 h-10 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Ud (Luit)" : "Oud (Luth)"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === "nl"
                    ? "De ud is een klassiek snaarinstrument zonder frets. Ontdek de complexe speeltechnieken en de warme, resonerende klanken van dit iconische instrument."
                    : "L'oud est un instrument à cordes classique sans frettes. Découvrez les techniques de jeu complexes et les sons chauds et résonnants de cet instrument iconique."}
                </p>
                <span className="text-sm text-primary font-medium">
                  {language === "nl" ? "Alle niveaus" : "Tous niveaux"}
                </span>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <Music className="w-10 h-10 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Kanun (Citer)" : "Kanun (Cithare)"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === "nl"
                    ? "De kanun is een getokkel snaarinstrument met 78 snaren. Leer de precieze vingertechnieken en het gebruik van mandals voor microtonen."
                    : "Le kanun est un instrument à cordes pincées avec 78 cordes. Apprenez les techniques de doigté précises et l'utilisation des levers pour les microtons."}
                </p>
                <span className="text-sm text-primary font-medium">
                  {language === "nl" ? "Gevorderd" : "Avancé"}
                </span>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <Music className="w-10 h-10 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Kemençe (Viool)" : "Kemençe (Violon)"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === "nl"
                    ? "De kemençe is een kleine viool die rechtop op de knie wordt gespeeld. Perfect voor expressieve melodieën en ornamentatie in Turkse muziek."
                    : "Le kemençe est un petit violon qui se joue debout sur le genou. Parfait pour les mélodies expressives et l'ornementation dans la musique turque."}
                </p>
                <span className="text-sm text-primary font-medium">
                  {language === "nl" ? "Beginner & Gevorderd" : "Débutant & Avancé"}
                </span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Cursusstructuur" : "Structure du Cours"}
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Module 1: Theorie & Makam" : "Module 1: Théorie & Makam"}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {language === "nl"
                    ? "Leer de basis van Turkse muziektheorie, inclusief het makam systeem (modale structuren), usul (ritmische cycli) en het lezen van notatie."
                    : "Apprenez les bases de la théorie musicale turque, y compris le système makam (structures modales), usul (cycles rythmiques) et la lecture de notation."}
                </p>
                <span className="text-sm text-muted-foreground">
                  {language === "nl" ? "8 lessen, 2 uur per sessie" : "8 leçons, 2 heures par session"}
                </span>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Module 2: Techniek & Repertoire" : "Module 2: Technique & Répertoire"}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {language === "nl"
                    ? "Ontwikkel instrumentspecifieke technieken en bouw een repertoire van klassieke Turkse composities, van taksim (improvisaties) tot pesrev en saz semai."
                    : "Développez des techniques spécifiques à l'instrument et construisez un répertoire de compositions classiques turques, de taksim (improvisations) à pesrev et saz semai."}
                </p>
                <span className="text-sm text-muted-foreground">
                  {language === "nl" ? "10 lessen, 2 uur per sessie" : "10 leçons, 2 heures par session"}
                </span>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Module 3: Ensemble & Performance" : "Module 3: Ensemble & Performance"}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {language === "nl"
                    ? "Speel samen in een ensemble en leer de kunst van samenspel in klassieke Turkse muziek. Eindig met een openbare uitvoering."
                    : "Jouez ensemble dans un ensemble et apprenez l'art du jeu collectif dans la musique classique turque. Terminez par une performance publique."}
                </p>
                <span className="text-sm text-muted-foreground">
                  {language === "nl" ? "6 lessen, 2.5 uur per sessie" : "6 leçons, 2.5 heures par session"}
                </span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Video & Audio Materiaal" : "Matériel Vidéo & Audio"}
            </h2>
            
            <div className="bg-card p-6 rounded-lg border mb-8">
              <div className="flex items-start gap-4">
                <Video className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    {language === "nl" ? "Online Leermaterialen" : "Matériel d'Apprentissage en Ligne"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "nl"
                      ? "Alle studenten krijgen toegang tot onze online bibliotheek met video tutorials, opnames van klassieke stukken, notaties en oefenmateriaal. Blijf oefenen tussen lessen door!"
                      : "Tous les étudiants ont accès à notre bibliothèque en ligne avec des tutoriels vidéo, des enregistrements de pièces classiques, des partitions et du matériel d'exercice. Continuez à pratiquer entre les cours!"}
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Docent" : "Professeur"}
            </h2>
            
            <div className="bg-card p-6 rounded-lg border mb-8">
              <p className="text-muted-foreground">
                {language === "nl"
                  ? "Onze docenten zijn professionele muzikanten met jarenlange ervaring in Turkse klassieke muziek. Ze hebben gestudeerd aan gerenommeerde conservatoria in Turkije en treden regelmatig op in binnen- en buitenland."
                  : "Nos professeurs sont des musiciens professionnels avec des années d'expérience en musique classique turque. Ils ont étudié dans des conservatoires renommés en Turquie et se produisent régulièrement en Belgique et à l'étranger."}
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Praktische Info" : "Infos Pratiques"}
            </h2>
            
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
              <li>{language === "nl" ? "Lessen beschikbaar in Nederlands, Frans en Turks" : "Cours disponibles en néerlandais, français et turc"}</li>
              <li>{language === "nl" ? "Eigen instrument vereist (huurinstrumenten beschikbaar)" : "Instrument personnel requis (location d'instruments disponible)"}</li>
              <li>{language === "nl" ? "Klein groepsonderwijs (max 6 studenten) en privélessen" : "Cours en petits groupes (max 6 étudiants) et leçons privées"}</li>
              <li>{language === "nl" ? "Flexibele planning: weekend en avondlessen beschikbaar" : "Horaires flexibles: cours de week-end et du soir disponibles"}</li>
              <li>{language === "nl" ? "Alle leeftijden welkom (vanaf 12 jaar)" : "Tous âges bienvenus (à partir de 12 ans)"}</li>
            </ul>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-bold text-foreground mb-2">
                  {language === "nl" ? "Groepslessen" : "Cours en Groupe"}
                </h4>
                <p className="text-2xl font-bold text-primary mb-1">€ 180</p>
                <p className="text-sm text-muted-foreground">
                  {language === "nl" ? "per maand (wekelijks)" : "par mois (hebdomadaire)"}
                </p>
              </div>

              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-bold text-foreground mb-2">
                  {language === "nl" ? "Privélessen" : "Leçons Privées"}
                </h4>
                <p className="text-2xl font-bold text-primary mb-1">€ 45</p>
                <p className="text-sm text-muted-foreground">
                  {language === "nl" ? "per uur" : "par heure"}
                </p>
              </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">
                {language === "nl" ? "Proefles" : "Leçon d'Essai"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {language === "nl"
                  ? "Niet zeker welk instrument bij je past? Boek een gratis proefles en ontdek de wereld van Turkse klassieke muziek!"
                  : "Pas sûr quel instrument vous convient? Réservez une leçon d'essai gratuite et découvrez le monde de la musique classique turque!"}
              </p>
              <a 
                href="/contact" 
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                {language === "nl" ? "Boek een proefles" : "Réserver une leçon d'essai"}
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TurkishClassicalMusic;

