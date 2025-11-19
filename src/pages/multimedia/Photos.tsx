import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/language-context";

const Photos = () => {
  const { language } = useLanguage();

  const galleries = [
    {
      title: language === "nl" ? "Culturele Festivals 2023" : "Festivals Culturels 2023",
      date: "2023",
      count: 45,
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop"
    },
    {
      title: language === "nl" ? "Turkije Reis 2023" : "Voyage en Turquie 2023",
      date: "2023",
      count: 120,
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&h=400&fit=crop"
    },
    {
      title: language === "nl" ? "Kalligrafie Workshops" : "Ateliers de Calligraphie",
      date: "2023",
      count: 32,
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop"
    },
    {
      title: language === "nl" ? "Brusselse Cultuurdagen" : "Journées Culturelles Bruxelloises",
      date: "2022",
      count: 67,
      image: "https://images.unsplash.com/photo-1559564484-e48bf2f6e8d9?w=600&h=400&fit=crop"
    },
    {
      title: language === "nl" ? "Taalcafé Momenten" : "Moments Café Linguistique",
      date: "2023",
      count: 28,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop"
    },
    {
      title: language === "nl" ? "50 Jaar Beltud Jubileum" : "Jubilé 50 Ans Beltud",
      date: "2022",
      count: 89,
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {language === "nl" ? "Foto Galerij" : "Galerie Photos"}
          </h1>
          
          <p className="text-lg text-muted-foreground mb-12">
            {language === "nl" 
              ? "Bekijk foto's van onze evenementen, activiteiten en bijzondere momenten. Van culturele festivals tot educatieve workshops, hier vind je herinneringen aan onze gemeenschapsactiviteiten."
              : "Consultez les photos de nos événements, activités et moments spéciaux. Des festivals culturels aux ateliers éducatifs, vous trouverez ici des souvenirs de nos activités communautaires."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {galleries.map((gallery, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl border bg-card hover:shadow-lg transition-all duration-300">
                  <img 
                    src={gallery.image} 
                    alt={gallery.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-1">{gallery.title}</h3>
                    <div className="flex items-center justify-between text-sm">
                      <span>{gallery.date}</span>
                      <span>{gallery.count} {language === "nl" ? "foto's" : "photos"}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card p-8 rounded-xl border">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "nl" ? "Deel je foto's" : "Partagez vos photos"}
            </h2>
            <p className="text-muted-foreground mb-6">
              {language === "nl"
                ? "Was je aanwezig bij een van onze evenementen? We zouden graag jouw foto's zien! Stuur ze naar ons en misschien verschijnen ze in onze galerij."
                : "Étiez-vous présent à l'un de nos événements? Nous aimerions voir vos photos! Envoyez-les-nous et peut-être qu'elles apparaîtront dans notre galerie."}
            </p>
            <a 
              href="/contact" 
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              {language === "nl" ? "Contact" : "Contact"}
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Photos;

