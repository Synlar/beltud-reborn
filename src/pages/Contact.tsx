import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/translations";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">{t.contact.title}</h1>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">{t.contact.contactDetailsTitle}</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t.contact.addressLabel}</h3>
                    <p className="text-muted-foreground">
                      Rue des Palais 27<br />
                      1030 Schaerbeek<br />
                      Brussels, {language === "nl" ? "België" : "Belgique"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t.contact.emailLabel}</h3>
                    <a href="mailto:info@beltud.be" className="text-primary hover:underline">
                      info@beltud.be
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t.contact.phoneLabel}</h3>
                    <a href="tel:+3222151621" className="text-primary hover:underline">
                      +32 2 215 16 21
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t.contact.hoursLabel}</h3>
                    <p className="text-muted-foreground">
                      {t.contact.hoursWeekday}<br />
                      {t.contact.hoursWeekend}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">{t.contact.sendMessageTitle}</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.nameLabel} {t.contact.required}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.emailFieldLabel} {t.contact.required}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.subjectLabel} {t.contact.required}
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.messageLabel} {t.contact.required}
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
              >
                {t.contact.sendButton}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
