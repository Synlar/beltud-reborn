import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { EventCard } from "@/components/EventCard";
import { NewsCard } from "@/components/NewsCard";
import { Sidebar } from "@/components/Sidebar";

const Index = () => {
  const events = [
    {
      title: "Nouvelle classe de turc pour débutants",
      startDate: "wo. 17 Jan 2018",
      endDate: "wo. 28 Mar 2018",
      location: "Rue des Palais, 27, Schaerbeek, 1030 Belgium",
      price: "€ 100",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
      description: "Leer Turks in een gezellige en interactieve omgeving met ervaren docenten."
    },
    {
      title: "Atelier de calligraphie ottomane",
      startDate: "za. 10 Feb 2018",
      endDate: "za. 24 Feb 2018",
      location: "Rue du Progrès, 323, Brussel, 1030 Belgium",
      price: "€ 75",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop",
      description: "Ontdek de kunst van de Ottomaanse kalligrafie met meester Mehmet."
    },
    {
      title: "Concert de musique traditionnelle",
      startDate: "vr. 2 Mar 2018",
      endDate: "vr. 2 Mar 2018",
      location: "Bozar, Brussel",
      price: "€ 25",
      image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400&h=300&fit=crop",
      description: "Een avond vol traditionele Turkse muziek met authentieke instrumenten."
    }
  ];

  const news = [
    {
      title: "Une soirée conviviale autour du café turc chez Beltud",
      excerpt: "Un agréable moment de convivialité autour du café turc chez Beltud. Près de 80 personnes étaient présentes au rendez-vous lors du « Turkish Coffee Meeting ». L'occasion de découvrir le café turc, sa place dans le patrimoine turc...",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
      date: "15 Jan 2018"
    },
    {
      title: "Exposition d'art contemporain E/IM-MIGRATION",
      excerpt: "Découvrez notre nouvelle exposition mettant en lumière les artistes contemporains turcs et belges explorant les thèmes de la migration et de l'identité culturelle à travers des œuvres puissantes et émouvantes.",
      image: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=400&h=300&fit=crop",
      date: "8 Jan 2018"
    },
    {
      title: "Succès du festival gastronomique",
      excerpt: "Le festival gastronomique belgo-turc a connu un franc succès avec plus de 200 visiteurs. Les participants ont pu déguster des spécialités des deux cultures dans une ambiance festive et conviviale.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
      date: "20 Dec 2017"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Agenda Section */}
            <section id="activiteiten">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-foreground">Agenda</h2>
                <a 
                  href="#" 
                  className="text-primary hover:text-primary/80 font-medium text-sm flex items-center"
                >
                  Bekijk alle evenementen →
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event, index) => (
                  <EventCard key={index} {...event} />
                ))}
              </div>
            </section>

            {/* News Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-foreground">News!</h2>
                <a 
                  href="#" 
                  className="text-primary hover:text-primary/80 font-medium text-sm flex items-center"
                >
                  Alle nieuws →
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {news.map((item, index) => (
                  <NewsCard key={index} {...item} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-foreground mb-4">Contact</h3>
              <p className="text-sm text-muted-foreground">
                Rue des Palais, 27<br />
                1030 Schaerbeek, Belgium<br />
                info@beltud.be
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-foreground mb-4">Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Sitemap</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-foreground mb-4">Over Beltud</h3>
              <p className="text-sm text-muted-foreground">
                Vereniging voor Belgisch-Turkse Vriendschap sinds 1985.
              </p>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Beltud. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
