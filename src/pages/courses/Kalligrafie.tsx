import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/language-context";

const Kalligrafie = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            {language === "nl" ? "Kalligrafie Workshops" : "Ateliers de Calligraphie"}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <img 
              src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=400&fit=crop" 
              alt="Calligraphy" 
              className="w-full h-64 object-cover rounded-xl mb-8"
            />
            
            <p className="text-lg text-muted-foreground mb-6">
              {language === "nl" 
                ? "Ontdek de eeuwenoude kunst van Ottomaanse en Arabische kalligrafie. Onze workshops leiden je door de schoonheid van deze traditionele schrijfkunst, van de basis tot geavanceerde technieken. Geen voorkennis vereist."
                : "Découvrez l'art séculaire de la calligraphie ottomane et arabe. Nos ateliers vous guident à travers la beauté de cet art traditionnel de l'écriture, des bases aux techniques avancées. Aucune connaissance préalable requise."}
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Workshop Niveaus" : "Niveaux d'Atelier"}
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Beginners Workshop" : "Atelier Débutants"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === "nl"
                    ? "Leer de basisprincipes van kalligrafie. We beginnen met de juiste houding, pengrepen en basislijnvormen. Je maakt kennis met verschillende schrijfstijlen en creëert je eerste kalligrafische werk."
                    : "Apprenez les principes de base de la calligraphie. Nous commençons par la bonne posture, les prises de stylo et les formes de lignes de base. Vous découvrirez différents styles d'écriture et créerez votre première œuvre calligraphique."}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-sm text-muted-foreground">📅 {language === "nl" ? "6 sessies" : "6 sessions"}</span>
                  <span className="text-sm text-muted-foreground">⏰ {language === "nl" ? "2 uur per sessie" : "2 heures par session"}</span>
                  <span className="text-sm text-muted-foreground">💰 € 85 ({language === "nl" ? "materiaal inbegrepen" : "matériel inclus"})</span>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Gevorderden Workshop" : "Atelier Avancé"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === "nl"
                    ? "Verdiep je in specifieke kalligrafische stijlen zoals Sülüs, Nesih of Rik'a. Leer composities te maken en werk aan je eigen unieke stijl. Focus op verfijning en persoonlijke expressie."
                    : "Approfondissez des styles calligraphiques spécifiques comme Sülüs, Nesih ou Rik'a. Apprenez à créer des compositions et travaillez sur votre propre style unique. Focus sur le raffinement et l'expression personnelle."}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-sm text-muted-foreground">📅 {language === "nl" ? "8 sessies" : "8 sessions"}</span>
                  <span className="text-sm text-muted-foreground">⏰ {language === "nl" ? "2.5 uur per sessie" : "2.5 heures par session"}</span>
                  <span className="text-sm text-muted-foreground">💰 € 120</span>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Open Atelier" : "Atelier Ouvert"}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === "nl"
                    ? "Voor ervaren kalligrafen. Werk aan je eigen projecten in een inspirerende omgeving. De docent is aanwezig voor vragen en begeleiding. Breng je eigen materiaal mee."
                    : "Pour les calligraphes expérimentés. Travaillez sur vos propres projets dans un environnement inspirant. L'enseignant est disponible pour questions et conseils. Apportez votre propre matériel."}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-sm text-muted-foreground">📅 {language === "nl" ? "Maandelijks" : "Mensuel"}</span>
                  <span className="text-sm text-muted-foreground">⏰ {language === "nl" ? "Hele dag" : "Toute la journée"}</span>
                  <span className="text-sm text-muted-foreground">💰 {language === "nl" ? "€ 15 per sessie" : "€ 15 par session"}</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Kalligrafische Stijlen" : "Styles Calligraphiques"}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-bold text-foreground mb-2">Sülüs (Thuluth)</h4>
                <p className="text-sm text-muted-foreground">
                  {language === "nl"
                    ? "Elegante en monumentale stijl, vaak gebruikt voor architecturale inscripties"
                    : "Style élégant et monumental, souvent utilisé pour les inscriptions architecturales"}
                </p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-bold text-foreground mb-2">Nesih (Naskh)</h4>
                <p className="text-sm text-muted-foreground">
                  {language === "nl"
                    ? "Helder en leesbaar, de meest gebruikte stijl voor boeken en documenten"
                    : "Clair et lisible, le style le plus utilisé pour les livres et documents"}
                </p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-bold text-foreground mb-2">Rik'a (Ruq'ah)</h4>
                <p className="text-sm text-muted-foreground">
                  {language === "nl"
                    ? "Snelle en compacte stijl, populair voor dagelijks gebruik"
                    : "Style rapide et compact, populaire pour l'usage quotidien"}
                </p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-bold text-foreground mb-2">Diwani</h4>
                <p className="text-sm text-muted-foreground">
                  {language === "nl"
                    ? "Decoratieve en vloeiende stijl, gebruikt aan het Ottomaanse hof"
                    : "Style décoratif et fluide, utilisé à la cour ottomane"}
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Wat je leert" : "Ce que vous apprendrez"}
            </h2>
            
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
              <li>{language === "nl" ? "Correcte penhouding en bewegingen" : "Bonne tenue du stylo et mouvements"}</li>
              <li>{language === "nl" ? "Verschillende kalligrafische stijlen herkennen en toepassen" : "Reconnaître et appliquer différents styles calligraphiques"}</li>
              <li>{language === "nl" ? "Composities en lay-outs creëren" : "Créer des compositions et des mises en page"}</li>
              <li>{language === "nl" ? "Werken met traditionele materialen (riet pen, inkt, papier)" : "Travailler avec des matériaux traditionnels (calame, encre, papier)"}</li>
              <li>{language === "nl" ? "Geschiedenis en culturele betekenis van kalligrafie" : "Histoire et signification culturelle de la calligraphie"}</li>
              <li>{language === "nl" ? "Je eigen kalligrafische stijl ontwikkelen" : "Développer votre propre style calligraphique"}</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Docent" : "Enseignant"}
            </h2>
            
            <div className="bg-card p-6 rounded-lg border mb-8">
              <p className="text-muted-foreground">
                {language === "nl"
                  ? "Onze workshops worden gegeven door Hocalar (meesters) die jarenlange ervaring hebben in de kunst van kalligrafie. Ze hebben gestudeerd bij gerenommeerde kalligrafen in Turkije en hebben hun kennis doorgegeven aan honderden studenten."
                  : "Nos ateliers sont donnés par des Hocalar (maîtres) qui ont des années d'expérience dans l'art de la calligraphie. Ils ont étudié auprès de calligraphes renommés en Turquie et ont transmis leurs connaissances à des centaines d'étudiants."}
              </p>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">
                {language === "nl" ? "Inschrijven" : "Inscription"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {language === "nl"
                  ? "Workshops starten meerdere keren per jaar. Alle materialen worden voorzien tijdens de eerste sessie. Plaatsen zijn beperkt tot 10 deelnemers per workshop."
                  : "Les ateliers commencent plusieurs fois par an. Tous les matériaux sont fournis lors de la première session. Les places sont limitées à 10 participants par atelier."}
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

export default Kalligrafie;

