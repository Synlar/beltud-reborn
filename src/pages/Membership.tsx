import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/translations";

const Membership = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">{t.membership.title}</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-12">
          <p>
            {t.membership.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t.membership.individualTitle}</CardTitle>
              <CardDescription>{t.membership.individualDesc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold text-primary">€25{t.membership.perYear}</div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span>{t.membership.benefit1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span>{t.membership.benefit2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span>{t.membership.benefit3}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span>{t.membership.benefit4}</span>
                </li>
              </ul>
              <Button className="w-full">{t.membership.becomeMember}</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t.membership.familyTitle}</CardTitle>
              <CardDescription>{t.membership.familyDesc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold text-primary">€40{t.membership.perYear}</div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span>{t.membership.benefit5}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span>{t.membership.benefit6}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span>{t.membership.benefit7}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span>{t.membership.benefit8}</span>
                </li>
              </ul>
              <Button className="w-full">{t.membership.becomeMember}</Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-card border border-border rounded-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4">{t.membership.howToJoinTitle}</h2>
          <ol className="space-y-3 text-muted-foreground">
            <li>{t.membership.step1}</li>
            <li>{t.membership.step2}</li>
            <li>{t.membership.step3}</li>
            <li>{t.membership.step4}</li>
          </ol>
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              {t.membership.moreInfoText} <a href="mailto:info@beltud.be" className="text-primary hover:underline">info@beltud.be</a> {t.membership.or} <a href="tel:+3222151621" className="text-primary hover:underline">+32 2 215 16 21</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Membership;
