import { Button } from "@/components/ui/button";
import { Menu, Home } from "lucide-react";
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
import { useLanguage } from "@/context/language-context";
import { translations } from "@/translations";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const aboutItems = [
    { label: t.nav.overOnsBeltud, href: "/over-beltud" },
    { label: t.nav.overOnsMission, href: "/about/mission" },
    { label: t.nav.overOnsBoard, href: "/about/board" },
    { label: t.nav.overOnsHistory, href: "/about/history" },
    { label: t.nav.overOnsLidmaatschap, href: "/lidmaatschap" },
    { label: t.nav.overOnsGastenboek, href: "#gastenboek" },
  ];

  const projectItems = [
    { label: t.nav.projecten50Jaar, href: "/projecten/50-jaar-hand-in-hand" },
    { label: t.nav.projectenBrusselseCultuurdag, href: "/projecten/brusselse-cultuurdagen" },
    { label: t.nav.projectenCartoonconcours, href: "#cartoon-concours" },
    { label: t.nav.projectenKleurenBelgie, href: "/projecten/kleuren-van-belgie" },
    { label: t.nav.projectenVriendschappelijk, href: "/projecten/vriendschappelijke-wedstrijd" },
  ];

  const activityItems = [
    { label: t.nav.activitiesReizen, href: "#interculturele-reizen" },
    { label: t.nav.activitiesKunstSamenleven, href: "#kunst-samenleven" },
    { label: t.nav.activitiesOntmoetingen, href: "#interculturele-ontmoetingen" },
    { label: t.nav.activitiesConcerten, href: "#concerten-tentoonstellingen" },
  ];

  const courseItems = [
    { label: t.nav.cursussenTurks, href: "/cursussen/cursus-turks" },
    { label: t.nav.cursussenNederlands, href: "#nederlandse-taal" },
    { label: t.nav.cursussenKalligrafie, href: "#kalligrafie" },
    { label: t.nav.cursussenCultuur, href: "#cultuur-geschiedenis" },
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
                    {t.nav.overOns}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-4 w-[260px]">
                      {aboutItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.label}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-primary font-medium">
                    {t.nav.projecten}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-4 w-[300px]">
                      {projectItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.label}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-primary font-medium">
                    {t.nav.activities}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-4 w-[280px]">
                      {activityItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.label}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-primary font-medium">
                    {t.nav.cursussen}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 p-4 w-[260px]">
                      {courseItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.label}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    to="#multimedia" 
                    className="px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors rounded-md hover:bg-muted inline-flex items-center"
                  >
                    {t.nav.multimedia}
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    to="/contact" 
                    className="px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors rounded-md hover:bg-muted inline-flex items-center"
                  >
                    {t.nav.contact}
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Language Switcher */}
            <div className="flex gap-2 ml-4">
              <button
                className={cn(
                  "px-3 py-1 text-sm font-medium rounded-full border transition-colors",
                  language === "nl" 
                    ? "bg-primary text-primary-foreground border-primary" 
                    : "bg-background text-foreground border-border hover:bg-muted"
                )}
                onClick={() => setLanguage("nl")}
              >
                NL
              </button>
              <button
                className={cn(
                  "px-3 py-1 text-sm font-medium rounded-full border transition-colors",
                  language === "fr" 
                    ? "bg-primary text-primary-foreground border-primary" 
                    : "bg-background text-foreground border-border hover:bg-muted"
                )}
                onClick={() => setLanguage("fr")}
              >
                FR
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className="px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.home}
              </Link>

              <div className="px-4 py-2">
                <div className="text-sm font-semibold text-foreground mb-2">{t.nav.overOns}</div>
                <div className="pl-4 space-y-1">
                  {aboutItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="px-4 py-2">
                <div className="text-sm font-semibold text-foreground mb-2">{t.nav.projecten}</div>
                <div className="pl-4 space-y-1">
                  {projectItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="px-4 py-2">
                <div className="text-sm font-semibold text-foreground mb-2">{t.nav.activities}</div>
                <div className="pl-4 space-y-1">
                  {activityItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="px-4 py-2">
                <div className="text-sm font-semibold text-foreground mb-2">{t.nav.cursussen}</div>
                <div className="pl-4 space-y-1">
                  {courseItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="#multimedia"
                className="px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.multimedia}
              </Link>

              <Link
                to="/contact"
                className="px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.contact}
              </Link>

              {/* Mobile Language Switcher */}
              <div className="flex gap-2 px-4 pt-4 border-t border-border">
                <button
                  className={cn(
                    "flex-1 px-3 py-2 text-sm font-medium rounded-md border transition-colors",
                    language === "nl" 
                      ? "bg-primary text-primary-foreground border-primary" 
                      : "bg-background text-foreground border-border"
                  )}
                  onClick={() => setLanguage("nl")}
                >
                  Nederlands
                </button>
                <button
                  className={cn(
                    "flex-1 px-3 py-2 text-sm font-medium rounded-md border transition-colors",
                    language === "fr" 
                      ? "bg-primary text-primary-foreground border-primary" 
                      : "bg-background text-foreground border-border"
                  )}
                  onClick={() => setLanguage("fr")}
                >
                  Français
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
