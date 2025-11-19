import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/translations";

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">{t.about.title}</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p>
            {t.about.intro}
          </p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8">{t.about.missionTitle}</h2>
          <p>
            {t.about.missionText}
          </p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8">{t.about.valuesTitle}</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t.about.value1}</li>
            <li>{t.about.value2}</li>
            <li>{t.about.value3}</li>
            <li>{t.about.value4}</li>
            <li>{t.about.value5}</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-foreground mt-8">{t.about.activitiesTitle}</h2>
          <p>
            {t.about.activitiesText}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
