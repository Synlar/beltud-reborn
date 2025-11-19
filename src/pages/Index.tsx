import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { EventCard } from "@/components/EventCard";
import { NewsCard } from "@/components/NewsCard";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/translations";

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const events = [
    {
      title: t.events.event1.title,
      startDate: "wo. 17 Jan 2018",
      endDate: "wo. 28 Mar 2018",
      location: t.events.event1.location,
      price: "€ 100",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
      description: t.events.event1.description
    },
    {
      title: t.events.event2.title,
      startDate: "za. 10 Feb 2018",
      endDate: "za. 24 Feb 2018",
      location: t.events.event2.location,
      price: "€ 75",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop",
      description: t.events.event2.description
    },
    {
      title: t.events.event3.title,
      startDate: "vr. 2 Mar 2018",
      endDate: "vr. 2 Mar 2018",
      location: t.events.event3.location,
      price: "€ 25",
      image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400&h=300&fit=crop",
      description: t.events.event3.description
    }
  ];

  const news = [
    {
      title: t.news.news1.title,
      excerpt: t.news.news1.excerpt,
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
      date: "15 Jan 2018"
    },
    {
      title: t.news.news2.title,
      excerpt: t.news.news2.excerpt,
      image: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=400&h=300&fit=crop",
      date: "8 Jan 2018"
    },
    {
      title: t.news.news3.title,
      excerpt: t.news.news3.excerpt,
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
                <h2 className="text-3xl font-bold text-foreground">{t.sections.agenda}</h2>
                <a 
                  href="#" 
                  className="text-primary hover:text-primary/80 font-medium text-sm flex items-center"
                >
                  {t.sections.viewAllEvents} →
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
                <h2 className="text-3xl font-bold text-foreground">{t.sections.news}</h2>
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

      <Footer />
    </div>
  );
};

export default Index;
