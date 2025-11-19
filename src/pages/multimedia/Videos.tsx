import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/language-context";
import { Play } from "lucide-react";

const Videos = () => {
  const { language } = useLanguage();

  const videos = [
    {
      title: language === "nl" ? "50 Jaar Beltud - Jubileumviering" : "50 Ans Beltud - Célébration du Jubilé",
      duration: "15:30",
      views: "1.2K",
      date: "2022",
      thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
      description: language === "nl" 
        ? "Een terugblik op 50 jaar Belgisch-Turkse vriendschap en samenwerking."
        : "Un regard rétrospectif sur 50 ans d'amitié et de coopération belgo-turques."
    },
    {
      title: language === "nl" ? "Traditionele Turkse Dans Performance" : "Performance de Danse Traditionnelle Turque",
      duration: "8:45",
      views: "890",
      date: "2023",
      thumbnail: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=600&h=400&fit=crop",
      description: language === "nl"
        ? "Prachtige voorstelling van traditionele volksdansen uit verschillende regio's van Turkije."
        : "Belle performance de danses folkloriques traditionnelles de différentes régions de Turquie."
    },
    {
      title: language === "nl" ? "Interculturele Dialoog - Interview Series" : "Dialogue Interculturel - Série d'Interviews",
      duration: "22:15",
      views: "654",
      date: "2023",
      thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
      description: language === "nl"
        ? "Gesprekken met gemeenschapsleden over hun ervaringen met interculturele samenwerking."
        : "Conversations avec des membres de la communauté sur leurs expériences de coopération interculturelle."
    },
    {
      title: language === "nl" ? "Kalligrafie Workshop Highlights" : "Temps Forts Atelier Calligraphie",
      duration: "6:20",
      views: "432",
      date: "2023",
      thumbnail: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
      description: language === "nl"
        ? "Kijk mee met onze kalligrafie workshop en leer over deze eeuwenoude kunst."
        : "Suivez notre atelier de calligraphie et découvrez cet art séculaire."
    },
    {
      title: language === "nl" ? "Brusselse Cultuurdagen 2023" : "Journées Culturelles Bruxelloises 2023",
      duration: "12:45",
      views: "1.5K",
      date: "2023",
      thumbnail: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop",
      description: language === "nl"
        ? "Hoogtepunten van het grootste multiculturele festival in Brussel."
        : "Points forts du plus grand festival multiculturel de Bruxelles."
    },
    {
      title: language === "nl" ? "Turkije Reis Vlog 2023" : "Vlog Voyage en Turquie 2023",
      duration: "25:00",
      views: "2.1K",
      date: "2023",
      thumbnail: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&h=400&fit=crop",
      description: language === "nl"
        ? "Volg onze groep tijdens een onvergetelijke culturele reis door Turkije."
        : "Suivez notre groupe lors d'un voyage culturel inoubliable à travers la Turquie."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {language === "nl" ? "Video's" : "Vidéos"}
          </h1>
          
          <p className="text-lg text-muted-foreground mb-12">
            {language === "nl" 
              ? "Bekijk video's van onze evenementen, optredens, interviews en meer. Ervaar de levendige sfeer van onze gemeenschap en activiteiten."
              : "Regardez des vidéos de nos événements, performances, interviews et plus encore. Découvrez l'atmosphère vibrante de notre communauté et de nos activités."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {videos.map((video, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {video.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{video.views} {language === "nl" ? "weergaven" : "vues"}</span>
                      <span>{video.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card p-8 rounded-xl border">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {language === "nl" ? "YouTube Kanaal" : "Chaîne YouTube"}
              </h2>
              <p className="text-muted-foreground mb-6">
                {language === "nl"
                  ? "Abonneer je op ons YouTube kanaal voor meer video's en blijf op de hoogte van nieuwe uploads."
                  : "Abonnez-vous à notre chaîne YouTube pour plus de vidéos et restez informé des nouveaux téléchargements."}
              </p>
              <a 
                href="https://youtube.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                {language === "nl" ? "Bezoek YouTube" : "Visiter YouTube"}
              </a>
            </div>

            <div className="bg-card p-8 rounded-xl border">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {language === "nl" ? "Video Suggesties" : "Suggestions Vidéo"}
              </h2>
              <p className="text-muted-foreground mb-6">
                {language === "nl"
                  ? "Heb je ideeën voor video's die je graag zou willen zien? Laat het ons weten!"
                  : "Avez-vous des idées de vidéos que vous aimeriez voir? Faites-le nous savoir!"}
              </p>
              <a 
                href="/contact" 
                className="inline-block px-6 py-3 bg-card text-foreground border rounded-md hover:bg-muted transition-colors"
              >
                {language === "nl" ? "Contact" : "Contact"}
              </a>
            </div>
          </div>

          <div className="bg-primary/10 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "nl" ? "Live Streams" : "Diffusions en Direct"}
            </h2>
            <p className="text-muted-foreground mb-6">
              {language === "nl"
                ? "Sommige van onze grote evenementen worden live gestreamd. Volg ons op sociale media om te zien wanneer we live gaan!"
                : "Certains de nos grands événements sont diffusés en direct. Suivez-nous sur les réseaux sociaux pour savoir quand nous passons en direct!"}
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="#" 
                className="px-4 py-2 bg-card text-foreground border rounded-md hover:bg-muted transition-colors"
              >
                Facebook
              </a>
              <a 
                href="#" 
                className="px-4 py-2 bg-card text-foreground border rounded-md hover:bg-muted transition-colors"
              >
                Instagram
              </a>
              <a 
                href="#" 
                className="px-4 py-2 bg-card text-foreground border rounded-md hover:bg-muted transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Videos;

