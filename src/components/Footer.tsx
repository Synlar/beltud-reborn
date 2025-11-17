import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-foreground mb-4 text-lg">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <div>
                  <p>Rue des Palais 27</p>
                  <p>1030 Schaerbeek</p>
                  <p>Brussels, Belgium</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="mailto:info@beltud.be" className="hover:text-primary transition-colors">
                  info@beltud.be
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="tel:+3222151621" className="hover:text-primary transition-colors">
                  +32 2 215 16 21
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4 text-lg">Snelle links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/over-beltud" className="hover:text-primary transition-colors">Over Beltud</Link></li>
              <li><Link to="/lidmaatschap" className="hover:text-primary transition-colors">Lidmaatschap</Link></li>
              <li><Link to="/#activiteiten" className="hover:text-primary transition-colors">Activiteiten</Link></li>
              <li><Link to="/#agenda" className="hover:text-primary transition-colors">Agenda</Link></li>
              <li><Link to="/cursussen/cursus-turks" className="hover:text-primary transition-colors">Cursussen</Link></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="font-bold text-foreground mb-4 text-lg">Projecten</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/projecten/50-jaar-hand-in-hand" className="hover:text-primary transition-colors">50 Jaar in België</Link></li>
              <li><Link to="/projecten/brusselse-cultuurdagen" className="hover:text-primary transition-colors">Brusselse Cultuurdag</Link></li>
              <li><Link to="/projecten/kleuren-van-belgie" className="hover:text-primary transition-colors">De Kleuren van België</Link></li>
              <li><Link to="/projecten/vriendschappelijke-wedstrijd" className="hover:text-primary transition-colors">Vriendschappelijke wedstrijd</Link></li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="font-bold text-foreground mb-4 text-lg">Volg ons</h3>
            <div className="flex space-x-3 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-3">
                Ontvang onze nieuwsbrief
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email adres" 
                  className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-r-md hover:bg-primary/90 transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Beltud - Belgisch-Turkse Vriendschap. Alle rechten voorbehouden.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-primary transition-colors">Voorwaarden</a>
            <a href="#sitemap" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
