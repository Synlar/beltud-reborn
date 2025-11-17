import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Membership = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">Lidmaatschap</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-12">
          <p>
            Word lid van Beltud en maak deel uit van een levendige gemeenschap die interculturele dialoog en vriendschap bevordert. Als lid krijgt u toegang tot al onze activiteiten, cursussen en evenementen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Individueel Lidmaatschap</CardTitle>
              <CardDescription>Voor individuen die onze missie willen ondersteunen</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold text-primary">€25/jaar</div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span>Toegang tot alle evenementen</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span>Kortingen op cursussen</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span>Maandelijkse nieuwsbrief</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span>Stemrecht op algemene vergaderingen</span>
                </li>
              </ul>
              <Button className="w-full">Lid worden</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Gezinslidmaatschap</CardTitle>
              <CardDescription>Voor gezinnen die samen willen deelnemen</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold text-primary">€40/jaar</div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span>Alle voordelen van individueel lidmaatschap</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span>Voor maximaal 4 gezinsleden</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span>Extra kortingen op familie-evenementen</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5" />
                  <span>Prioritaire registratie voor populaire activiteiten</span>
                </li>
              </ul>
              <Button className="w-full">Lid worden</Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-card border border-border rounded-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4">Hoe word ik lid?</h2>
          <ol className="space-y-3 text-muted-foreground">
            <li>1. Kies uw lidmaatschapstype</li>
            <li>2. Vul het aanmeldingsformulier in</li>
            <li>3. Doe de betaling via overschrijving</li>
            <li>4. Ontvang uw lidkaart per e-mail</li>
          </ol>
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Voor meer informatie, contacteer ons via <a href="mailto:info@beltud.be" className="text-primary hover:underline">info@beltud.be</a> of bel <a href="tel:+3222151621" className="text-primary hover:underline">+32 2 215 16 21</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Membership;
