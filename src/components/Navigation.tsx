import { Menu, Home, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/translations";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const aboutItems = [
    { label: t.nav.overOnsBeltud, href: "/over-beltud", isAnchor: false },
    { label: t.nav.overOnsMission, href: "/about/mission", isAnchor: false },
    { label: t.nav.overOnsBoard, href: "/about/board", isAnchor: false },
    { label: t.nav.overOnsHistory, href: "/about/history", isAnchor: false },
    { label: t.nav.overOnsLidmaatschap, href: "/lidmaatschap", isAnchor: false },
  ];

  const projectItems = [
    { label: t.nav.projecten50Jaar, href: "/projecten/50-jaar-hand-in-hand", isAnchor: false },
    { label: t.nav.projectenBrusselseCultuurdag, href: "/projecten/brusselse-cultuurdagen", isAnchor: false },
    { label: t.nav.projectenCartoonconcours, href: "/projecten/cartoon-concours", isAnchor: false },
    { label: t.nav.projectenKleurenBelgie, href: "/projecten/kleuren-van-belgie", isAnchor: false },
    { label: t.nav.projectenVriendschappelijk, href: "/projecten/vriendschappelijke-wedstrijd", isAnchor: false },
  ];

  const activityItems = [
    { label: language === "nl" ? "Reizen naar Turkije" : "Voyages en Turquie", href: "/activities/reizen-naar-turkije", isAnchor: false },
    { label: language === "nl" ? "Excursies in België" : "Excursions en Belgique", href: "/activities/excursies-in-belgie", isAnchor: false },
    { label: t.nav.activitiesKunstSamenleven, href: "/activities/kunst-samenleven", isAnchor: false },
    { label: t.nav.activitiesOntmoetingen, href: "/activities/interculturele-ontmoetingen", isAnchor: false },
    { label: t.nav.activitiesConcerten, href: "/activities/concerten-tentoonstellingen", isAnchor: false },
  ];

  const courseItems = [
    { label: t.nav.cursussenTurks, href: "/cursussen/cursus-turks", isAnchor: false },
    { label: t.nav.cursussenNederlands, href: "/cursussen/nederlandse-taal", isAnchor: false },
    { label: t.nav.cursussenKalligrafie, href: "/cursussen/kalligrafie", isAnchor: false },
    { label: t.nav.cursussenCultuur, href: "/cursussen/cultuur-geschiedenis", isAnchor: false },
    { label: language === "nl" ? "Culinaire Workshops" : "Ateliers Culinaires", href: "/cursussen/culinaire-workshops", isAnchor: false },
    { label: language === "nl" ? "Klassieke Turkse Muziek" : "Musique Classique Turque", href: "/cursussen/klassieke-turkse-muziek", isAnchor: false },
  ];

  const multimediaItems = [
    { label: language === "nl" ? "Foto's" : "Photos", href: "/multimedia/photos", isAnchor: false },
    { label: language === "nl" ? "Video's" : "Vidéos", href: "/multimedia/videos", isAnchor: false },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
                      {/* Logo */}
                      <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
                        <img src="/beltud-logo.png" alt="Beltud Logo" className="h-16 w-auto md:h-20" />
                        <div className="hidden lg:block">
                          <div className="text-xs text-muted-foreground leading-tight max-w-[200px]">
                            {language === "nl" ? "Vereniging voor Belgisch-Turkse Vriendschap" : "Association pour l'Amitié Belgo-Turque"}
                          </div>
                        </div>
                      </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/" className="px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors rounded-md hover:bg-muted inline-flex items-center">
              <Home className="w-4 h-4" />
            </Link>

            {/* Over ons Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors rounded-md hover:bg-muted inline-flex items-center gap-1">
                {t.nav.overOns}
                <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full mt-2 w-[260px] bg-popover border border-border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul className="py-2">
                  {aboutItems.map((item) => (
                    <li key={item.href}>
                      {item.isAnchor ? (
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Projecten Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors rounded-md hover:bg-muted inline-flex items-center gap-1">
                {t.nav.projecten}
                <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full mt-2 w-[300px] bg-popover border border-border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul className="py-2">
                  {projectItems.map((item) => (
                    <li key={item.href}>
                      {item.isAnchor ? (
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Activiteiten Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors rounded-md hover:bg-muted inline-flex items-center gap-1">
                {t.nav.activities}
                <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full mt-2 w-[280px] bg-popover border border-border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul className="py-2">
                  {activityItems.map((item) => (
                    <li key={item.href}>
                      {item.isAnchor ? (
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cursussen Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors rounded-md hover:bg-muted inline-flex items-center gap-1">
                {t.nav.cursussen}
                <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full mt-2 w-[260px] bg-popover border border-border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul className="py-2">
                  {courseItems.map((item) => (
                    <li key={item.href}>
                      {item.isAnchor ? (
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Multimedia Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors rounded-md hover:bg-muted inline-flex items-center gap-1">
                {t.nav.multimedia}
                <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full mt-2 w-[200px] bg-popover border border-border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul className="py-2">
                  {multimediaItems.map((item) => (
                    <li key={item.href}>
                      {item.isAnchor ? (
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors rounded-md hover:bg-muted inline-flex items-center"
            >
              {t.nav.contact}
            </Link>

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
          <button
            className="lg:hidden text-primary p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
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
                    item.isAnchor ? (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  ))}
                </div>
              </div>

              <div className="px-4 py-2">
                <div className="text-sm font-semibold text-foreground mb-2">{t.nav.projecten}</div>
                <div className="pl-4 space-y-1">
                  {projectItems.map((item) => (
                    item.isAnchor ? (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  ))}
                </div>
              </div>

              <div className="px-4 py-2">
                <div className="text-sm font-semibold text-foreground mb-2">{t.nav.activities}</div>
                <div className="pl-4 space-y-1">
                  {activityItems.map((item) => (
                    item.isAnchor ? (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  ))}
                </div>
              </div>

              <div className="px-4 py-2">
                <div className="text-sm font-semibold text-foreground mb-2">{t.nav.cursussen}</div>
                <div className="pl-4 space-y-1">
                  {courseItems.map((item) => (
                    item.isAnchor ? (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  ))}
                </div>
              </div>

              <div className="px-4 py-2">
                <div className="text-sm font-semibold text-foreground mb-2">{t.nav.multimedia}</div>
                <div className="pl-4 space-y-1">
                  {multimediaItems.map((item) => (
                    item.isAnchor ? (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  ))}
                </div>
              </div>

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

