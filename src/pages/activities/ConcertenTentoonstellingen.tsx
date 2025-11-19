import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/language-context";

const ConcertenTentoonstellingen = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            {language === "nl" ? "Concerten & Tentoonstellingen" : "Concerts & Expositions"}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <img 
              src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=400&fit=crop" 
              alt="Concert" 
              className="w-full h-64 object-cover rounded-xl mb-8"
            />
            
            <p className="text-lg text-muted-foreground mb-6">
              {language === "nl" 
                ? "Kunst en muziek overbruggen taalbarrières en brengen mensen samen. Beltud organiseert het hele jaar door culturele evenementen met kunstenaars uit zowel België als Turkije. Van traditionele folkloremuziek tot hedendaagse kunsttentoonstellingen - er is voor elk wat wils."
                : "L'art et la musique transcendent les barrières linguistiques et rassemblent les gens. Beltud organise tout au long de l'année des événements culturels avec des artistes de Belgique et de Turquie. De la musique folklorique traditionnelle aux expositions d'art contemporain - il y en a pour tous les goûts."}
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Muzikale Evenementen" : "Événements Musicaux"}
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Traditionele Turkse Muziek" : "Musique Traditionnelle Turque"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "nl"
                    ? "Ontdek de rijke muzikale traditie van Turkije met optredens van gerenommeerde artiesten. Van klassieke Ottomaanse muziek tot hedendaagse interpretaties van folk melodieën."
                    : "Découvrez la riche tradition musicale de la Turquie avec des performances d'artistes renommés. De la musique ottomane classique aux interprétations contemporaines de mélodies folk."}
                </p>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                    {language === "nl" ? "Klassiek" : "Classique"}
                  </span>
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm ml-2">
                    Folk
                  </span>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Fusion Concerten" : "Concerts Fusion"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "nl"
                    ? "Spannende collaboraties tussen Belgische en Turkse muzikanten die verschillende stijlen samenbrengen. Jazz meets traditional, classical meets folk."
                    : "Collaborations passionnantes entre musiciens belges et turcs qui fusionnent différents styles. Le jazz rencontre le traditionnel, le classique rencontre le folk."}
                </p>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                    Jazz
                  </span>
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm ml-2">
                    Fusion
                  </span>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Volksdans Voorstellingen" : "Spectacles de Danse Folklorique"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "nl"
                    ? "Levendige voorstellingen van traditionele Turkse dansen uit verschillende regio's. Vaak gecombineerd met live muziek en in kleurrijke traditionele kostuums."
                    : "Performances vibrantes de danses traditionnelles turques de différentes régions. Souvent combinées avec de la musique live et des costumes traditionnels colorés."}
                </p>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                    {language === "nl" ? "Dans" : "Danse"}
                  </span>
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm ml-2">
                    {language === "nl" ? "Traditioneel" : "Traditionnel"}
                  </span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Kunsttentoonstellingen" : "Expositions d'Art"}
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Hedendaagse Kunst" : "Art Contemporain"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "nl"
                    ? "Tentoonstellingen van hedendaagse Turkse en Belgische kunstenaars. Schilderijen, sculpturen, fotografie en mixed media installaties die actuele thema's verkennen."
                    : "Expositions d'artistes contemporains turcs et belges. Peintures, sculptures, photographie et installations mixtes explorant des thèmes actuels."}
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Kalligrafie & Traditionele Kunst" : "Calligraphie & Art Traditionnel"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "nl"
                    ? "De prachtige kunst van Ottomaanse kalligrafie, miniaturen en decoratieve kunst. Deze tentoonstellingen tonen de rijke artistieke erfenis van eeuwenoude tradities."
                    : "Le bel art de la calligraphie ottomane, des miniatures et de l'art décoratif. Ces expositions présentent le riche héritage artistique de traditions séculaires."}
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Fotografie Exposities" : "Expositions Photographiques"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "nl"
                    ? "Fotografische reizen door Turkije en België, portretten van gemeenschappen, en documentaires over culturele tradities en moderne ontwikkelingen."
                    : "Voyages photographiques à travers la Turquie et la Belgique, portraits de communautés, et documentaires sur les traditions culturelles et les développements modernes."}
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Bezoek een evenement" : "Assister à un événement"}
            </h2>
            
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
              <li>{language === "nl" ? "De meeste evenementen zijn gratis toegankelijk" : "La plupart des événements sont gratuits"}</li>
              <li>{language === "nl" ? "Sommige concerten hebben beperkte plaatsen - reserveer op tijd" : "Certains concerts ont des places limitées - réservez à temps"}</li>
              <li>{language === "nl" ? "Tentoonstellingen zijn vaak enkele weken te bezichtigen" : "Les expositions sont souvent visibles pendant plusieurs semaines"}</li>
              <li>{language === "nl" ? "Leden krijgen voorrang bij reserveringen" : "Les membres ont la priorité pour les réservations"}</li>
            </ul>

            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">
                {language === "nl" ? "Blijf op de hoogte" : "Restez informé"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {language === "nl"
                  ? "Mis geen enkel evenement! Bekijk onze agenda voor komende concerten en tentoonstellingen."
                  : "Ne manquez aucun événement! Consultez notre agenda pour les concerts et expositions à venir."}
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

export default ConcertenTentoonstellingen;

