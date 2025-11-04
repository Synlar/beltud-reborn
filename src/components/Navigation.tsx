import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import beltudLogo from "@/assets/beltud-logo.png";

export const Navigation = () => {
  const [language, setLanguage] = useState<"nl" | "fr">("nl");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: language === "nl" ? "Home" : "Accueil", href: "#" },
    { label: language === "nl" ? "Over ons" : "À propos", href: "#over-ons" },
    { label: language === "nl" ? "Projecten" : "Projets", href: "#projecten" },
    { label: language === "nl" ? "Activiteiten" : "Activités", href: "#activiteiten" },
    { label: language === "nl" ? "Cursussen" : "Cours", href: "#cursussen" },
    { label: "Multimedia", href: "#multimedia" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3">
            <img src={beltudLogo} alt="Beltud Logo" className="h-12 w-auto" />
            <div className="hidden md:block">
              <div className="text-xs text-muted-foreground">
                {language === "nl" ? "Vereniging voor Belgisch-Turkse Vriendschap" : "Association pour l'Amitié Belgo-Turque"}
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
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
          <div className="lg:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
