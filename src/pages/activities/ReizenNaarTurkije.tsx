import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/language-context";
import { MapPin, Calendar, Users, Camera } from "lucide-react";

const ReizenNaarTurkije = () => {
  const { language } = useLanguage();

  const destinations = [
    {
      name: "Istanbul",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&h=400&fit=crop",
      description: language === "nl" 
        ? "De bruisende metropool waar Europa en Azië elkaar ontmoeten. Bezoek de Blauwe Moskee, Hagia Sophia en de Grand Bazaar."
        : "La métropole animée où l'Europe et l'Asie se rencontrent. Visitez la Mosquée Bleue, Sainte-Sophie et le Grand Bazar."
    },
    {
      name: "Cappadocië",
      image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=600&h=400&fit=crop",
      description: language === "nl"
        ? "Een magisch landschap met unieke rotsformaties, ondergrondse steden en heteluchtballonvaarten bij zonsopgang."
        : "Un paysage magique avec des formations rocheuses uniques, des villes souterraines et des vols en montgolfière au lever du soleil."
    },
    {
      name: "Antalya",
      image: "https://images.unsplash.com/photo-1605116955108-c50723c4937d?w=600&h=400&fit=crop",
      description: language === "nl"
        ? "De Turkse Rivièra met prachtige stranden, oude ruïnes en een charmant historisch centrum."
        : "La Riviera turque avec de belles plages, des ruines anciennes et un charmant centre historique."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            {language === "nl" ? "Reizen naar Turkije" : "Voyages en Turquie"}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <img 
              src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&h=400&fit=crop" 
              alt="Turkey Travel" 
              className="w-full h-64 object-cover rounded-xl mb-8"
            />
            
            <p className="text-lg text-muted-foreground mb-6">
              {language === "nl" 
                ? "Ontdek Turkije op een bijzondere manier met Beltud! Onze georganiseerde groepsreizen combineren culturele ontdekkingen, historische bezienswaardigheden en authentieke lokale ervaringen. Reis samen met een groep gelijkgestemden en bouw blijvende vriendschappen op."
                : "Découvrez la Turquie d'une manière spéciale avec Beltud! Nos voyages de groupe organisés combinent découvertes culturelles, sites historiques et expériences locales authentiques. Voyagez avec un groupe de personnes partageant les mêmes idées et construisez des amitiés durables."}
            </p>

            {/* Video Section */}
            <div className="bg-card p-6 rounded-xl border mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {language === "nl" ? "Bekijk onze laatste reis" : "Regardez notre dernier voyage"}
              </h2>
              <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/HE6rSljTwdU"
                  title="Turkey Travel Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Bestemmingen" : "Destinations"}
            </h2>
            
            <div className="grid gap-6 mb-8">
              {destinations.map((dest, index) => (
                <div key={index} className="bg-card rounded-lg border overflow-hidden">
                  <div className="md:flex">
                    <img 
                      src={dest.image} 
                      alt={dest.name}
                      className="w-full md:w-1/3 h-48 md:h-auto object-cover"
                    />
                    <div className="p-6 flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
                        <MapPin className="w-6 h-6 text-primary" />
                        {dest.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {dest.description}
                      </p>
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
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">
                    {language === "nl" ? "Vlucht & Vervoer" : "Vol & Transport"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "nl" 
                      ? "Retourvlucht vanuit Brussel + alle transfers in Turkije"
                      : "Vol aller-retour depuis Bruxelles + tous les transferts en Turquie"}
                  </p>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">
                    {language === "nl" ? "Accommodatie" : "Hébergement"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "nl" 
                      ? "7 nachten in comfortabele 4-sterren hotels"
                      : "7 nuits dans des hôtels 4 étoiles confortables"}
                  </p>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">
                    {language === "nl" ? "Maaltijden" : "Repas"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "nl" 
                      ? "Halfpension: ontbijt + avondeten"
                      : "Demi-pension: petit-déjeuner + dîner"}
                  </p>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">
                    {language === "nl" ? "Gids" : "Guide"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "nl" 
                      ? "Nederlandstalige gids tijdens alle excursies"
                      : "Guide néerlandophone pendant toutes les excursions"}
                  </p>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">
                    {language === "nl" ? "Excursies" : "Excursions"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "nl" 
                      ? "Toegang tot musea en bezienswaardigheden"
                      : "Entrée aux musées et sites touristiques"}
                  </p>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">
                    {language === "nl" ? "Verzekering" : "Assurance"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "nl" 
                      ? "Reisverzekering inbegrepen"
                      : "Assurance voyage incluse"}
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Volgende Reizen" : "Prochains Voyages"}
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {language === "nl" ? "Istanbul & Cappadocië" : "Istanbul & Cappadoce"}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {language === "nl" ? "15-22 April 2024" : "15-22 Avril 2024"}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {language === "nl" ? "25 plaatsen" : "25 places"}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">€ 899</div>
                    <div className="text-sm text-muted-foreground">
                      {language === "nl" ? "per persoon" : "par personne"}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  {language === "nl"
                    ? "8 dagen door het hart van Turkije: Istanbul's historische schatten en Cappadocië's sprookjesachtige landschap."
                    : "8 jours au cœur de la Turquie: les trésors historiques d'Istanbul et le paysage féerique de Cappadoce."}
                </p>
                <span className="inline-block px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                  {language === "nl" ? "Nog 8 plaatsen beschikbaar" : "Encore 8 places disponibles"}
                </span>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {language === "nl" ? "Turkse Rivièra" : "Riviera Turque"}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {language === "nl" ? "10-17 Juni 2024" : "10-17 Juin 2024"}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {language === "nl" ? "30 plaatsen" : "30 places"}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">€ 799</div>
                    <div className="text-sm text-muted-foreground">
                      {language === "nl" ? "per persoon" : "par personne"}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  {language === "nl"
                    ? "Zon, zee en cultuur! Ontspan aan de Middellandse Zee en bezoek de ruïnes van Efeze en Pamukkale."
                    : "Soleil, mer et culture! Détendez-vous sur la Méditerranée et visitez les ruines d'Éphèse et Pamukkale."}
                </p>
                <span className="inline-block px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                  {language === "nl" ? "Nog 15 plaatsen beschikbaar" : "Encore 15 places disponibles"}
                </span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Foto's van Eerdere Reizen" : "Photos de Voyages Précédents"}
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="group relative cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1527838832700-5059252407fa?w=400&h=300&fit=crop" 
                  alt="Travel 1"
                  className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="group relative cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop" 
                  alt="Travel 2"
                  className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="group relative cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=400&h=300&fit=crop" 
                  alt="Travel 3"
                  className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">
                {language === "nl" ? "Interesse?" : "Intéressé?"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {language === "nl"
                  ? "Ontdek Turkije samen met Beltud! Neem contact op voor meer informatie, een gedetailleerd programma of om u in te schrijven."
                  : "Découvrez la Turquie avec Beltud! Contactez-nous pour plus d'informations, un programme détaillé ou pour vous inscrire."}
              </p>
              <div className="flex gap-3">
                <a 
                  href="/contact" 
                  className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  {language === "nl" ? "Meer informatie" : "Plus d'informations"}
                </a>
                <a 
                  href="/multimedia/photos" 
                  className="inline-block px-6 py-3 bg-card text-foreground border rounded-md hover:bg-muted transition-colors"
                >
                  {language === "nl" ? "Bekijk alle foto's" : "Voir toutes les photos"}
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

export default ReizenNaarTurkije;

