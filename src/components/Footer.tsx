import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/translations";

export const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">{t.footer.contact}</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">{t.footer.address}</p>
              <p>Rue des Palais, 27</p>
              <p>1030 Schaerbeek, Belgium</p>
              <p className="mt-4">
                <a href="tel:+3222151621" className="hover:text-primary">
                  +32 2 215 16 21
                </a>
              </p>
              <p>
                <a href="mailto:info@beltud.be" className="hover:text-primary">
                  info@beltud.be
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/over-beltud" className="hover:text-primary">
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link to="/lidmaatschap" className="hover:text-primary">
                  {t.footer.membership}
                </Link>
              </li>
              <li>
                <Link to="#activiteiten" className="hover:text-primary">
                  {t.footer.activities}
                </Link>
              </li>
              <li>
                <Link to="/cursussen/cursus-turks" className="hover:text-primary">
                  {t.footer.courses}
                </Link>
              </li>
              <li>
                <Link to="#projecten" className="hover:text-primary">
                  {t.footer.projects}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">{t.footer.followUs}</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">{t.footer.newsletter}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t.footer.newsletterText}
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder={t.footer.emailPlaceholder}
                className="flex-1"
              />
              <Button>{t.footer.subscribe}</Button>
            </div>
          </div>
        </div>

        {/* Fedactio Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-muted-foreground mb-4 font-medium">
              {language === "nl" ? "Beltud is lid van" : "Beltud est membre de"}
            </p>
            <a 
              href="https://www.fedactio.be" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <div className="bg-[#4A90A4] px-8 py-4 rounded-lg flex items-center gap-3">
                <div className="flex items-center gap-2">
                  {/* Fedactio Logo - Honeycomb pattern */}
                  <div className="grid grid-cols-3 gap-1">
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                    <div className="w-3 h-3 bg-white/70 rounded-sm"></div>
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                    <div className="w-3 h-3 bg-white/70 rounded-sm"></div>
                  </div>
                  <span className="text-white text-2xl font-bold tracking-wide">FEDACTIO</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} Beltud. {t.footer.allRightsReserved}.
            </p>
            <div className="flex gap-6">
              <Link to="#privacy" className="hover:text-primary">
                {t.footer.privacy}
              </Link>
              <Link to="#terms" className="hover:text-primary">
                {t.footer.terms}
              </Link>
              <Link to="#sitemap" className="hover:text-primary">
                {t.footer.sitemap}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

