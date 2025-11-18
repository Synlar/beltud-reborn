import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, Home } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import beltudLogo from "@/assets/beltud-logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Navigation = () => {
  const [language, setLanguage] = useState<"nl" | "fr">("nl");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const aboutItems = [
    { label: "Beltud", href: "/over-beltud" },
    { label: language === "nl" ? "Lidmaatschap" : "Adhésion", href: "/lidmaatschap" },
    { label: language === "nl" ? "Gastenboek" : "Livre d'or", href: "#gastenboek" },
  ];

  const projectItems = [
    { label: language === "nl" ? "50 Jaar in België" : "50 ans en Belgique", href: "/projecten/50-jaar-hand-in-hand" },
    { label: language === "nl" ? "Brusselse Cultuurdag" : "Journées culturelles bruxelloises", href: "/projecten/brusselse-cultuurdagen" },
    { label: language === "nl" ? "Cartoonconcours" : "Concours de BD", href: "#cartoon-concours" },
    { label: language === "nl" ? "De Kleuren van België" : "Les couleurs de la Belgique", href: "/projecten/kleuren-van-belgie" },
    { label: language === "nl" ? "Vriendschappelijke wedstrijd" : "Match amical", href: "/projecten/vriendschappelijke-wedstrijd" },
  ];

  const activityItems = [
    { label: language === "nl" ? "Interculturele reizen" : "Voyages interculturels", href: "#interculturele-reizen" },
    { label: language === "nl" ? "De kunst van het samenleven" : "L'art de vivre ensemble", href: "#kunst-samenleven" },
    { label: language === "nl" ? "Interculturele ontmoetingen" : "Rencontres interculturelles", href: "#interculturele-ontmoetingen" },
    { label: language === "nl" ? "Concerten & Tentoonstellingen" : "Concerts & Expositions", href: "#concerten-tentoonstellingen" },
  ];

  const courseItems = [
    { label: language === "nl" ? "Turks voor beginners" : "Turc pour débutants", href: "/cursussen/cursus-turks" },
    { label: language === "nl" ? "Nederlandse taal" : "Langue néerlandaise", href: "#nederlandse-taal" },
    { label: language === "nl" ? "Kalligrafie workshops" : "Ateliers de calligraphie", href: "#kalligrafie" },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={beltudLogo} alt="Beltud Logo" className="h-12 w-auto" />
            <div className="hidden md:block">
              <div className="text-xs text-muted-foreground">
                {language === "nl" ? "Vereniging voor Belgisch-Turkse Vriendschap" : "Association pour l'Amitié Belgo-Turque"}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <Link to="/" className="px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors rounded-md hover:bg-muted inline-flex items-center">
                    <Home className="w-4 h-4" />
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-primary font-medium">
                    {language === "nl" ? "Over ons" : "À propos"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-48 p-2">
                      {aboutItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                            >
                              {item.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/#agenda" className="px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors rounded-md hover:bg-muted">
                    {language === "nl" ? "Dagboek" : "Journal"}
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-primary font-medium">
                    {language === "nl" ? "Projecten" : "Projets"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-64 p-2">
                      {projectItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                            >
                              {item.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-primary font-medium">
                    {language === "nl" ? "Activiteiten" : "Activités"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-64 p-2">
                      {activityItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                            >
                              {item.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-primary font-medium">
                    {language === "nl" ? "Cursussen" : "Cours"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-56 p-2">
                      {courseItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                            >
                              {item.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/#multimedia" className="px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors rounded-md hover:bg-muted">
                    Multimedia
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" className="px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors rounded-md hover:bg-muted">
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-muted rounded-lg p-1">
              <button
                onClick={() => setLanguage("nl")}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  language === "nl"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                NL
              </button>
              <button
                onClick={() => setLanguage("fr")}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  language === "fr"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                FR
              </button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-3">
            <Link to="/" className="block px-4 py-2 text-sm font-medium text-primary hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>
              <Home className="w-4 h-4 inline mr-2" />
              {language === "nl" ? "Home" : "Accueil"}
            </Link>
            
            <div>
              <div className="px-4 py-2 text-sm font-bold text-foreground">{language === "nl" ? "Over ons" : "À propos"}</div>
              {aboutItems.map((item) => (
                <Link key={item.href} to={item.href} className="block px-8 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>

            <Link to="/#agenda" className="block px-4 py-2 text-sm font-medium text-primary hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>
              {language === "nl" ? "Dagboek" : "Journal"}
            </Link>

            <div>
              <div className="px-4 py-2 text-sm font-bold text-foreground">{language === "nl" ? "Projecten" : "Projets"}</div>
              {projectItems.map((item) => (
                <Link key={item.href} to={item.href} className="block px-8 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>

            <div>
              <div className="px-4 py-2 text-sm font-bold text-foreground">{language === "nl" ? "Activiteiten" : "Activités"}</div>
              {activityItems.map((item) => (
                <Link key={item.href} to={item.href} className="block px-8 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>

            <div>
              <div className="px-4 py-2 text-sm font-bold text-foreground">{language === "nl" ? "Cursussen" : "Cours"}</div>
              {courseItems.map((item) => (
                <Link key={item.href} to={item.href} className="block px-8 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>

            <Link to="/#multimedia" className="block px-4 py-2 text-sm font-medium text-primary hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>
              Multimedia
            </Link>

            <Link to="/contact" className="block px-4 py-2 text-sm font-medium text-primary hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
