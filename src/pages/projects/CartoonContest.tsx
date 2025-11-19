import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/language-context";
import { Award, Users, Calendar, Trophy } from "lucide-react";

const CartoonContest = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            {language === "nl" ? "Cartoon Concours" : "Concours de Bande Dessinée"}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <img 
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=400&fit=crop" 
              alt="Cartoon Contest" 
              className="w-full h-64 object-cover rounded-xl mb-8"
            />
            
            <p className="text-lg text-muted-foreground mb-6">
              {language === "nl" 
                ? "De Cartoon Concours is een jaarlijkse wedstrijd die de creativiteit en het artistieke talent van jonge cartoonisten in België bevordert. Door middel van humor en illustratie onderzoeken deelnemers thema's als multicultureel samenleven, diversiteit en interculturele dialoog."
                : "Le Concours de Bande Dessinée est un concours annuel qui encourage la créativité et le talent artistique des jeunes dessinateurs de bande dessinée en Belgique. À travers l'humour et l'illustration, les participants explorent des thèmes tels que la cohabitation multiculturelle, la diversité et le dialogue interculturel."}
            </p>

            {/* Video Section */}
            <div className="bg-card p-6 rounded-xl border mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {language === "nl" ? "Bekijk de Highlights" : "Regardez les Temps Forts"}
              </h2>
              <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Cartoon Contest Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                {language === "nl" 
                  ? "Bekijk de beste momenten van de vorige editie van onze Cartoon Concours."
                  : "Regardez les meilleurs moments de l'édition précédente de notre Concours de Bande Dessinée."}
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Thema & Doelstellingen" : "Thème & Objectifs"}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <Users className="w-10 h-10 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Bruggen Bouwen" : "Construire des Ponts"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "nl"
                    ? "Gebruik humor en creativiteit om stereotypen te doorbreken en begrip te bevorderen tussen verschillende culturen."
                    : "Utilisez l'humour et la créativité pour briser les stéréotypes et promouvoir la compréhension entre différentes cultures."}
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <Award className="w-10 h-10 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-3">
                  {language === "nl" ? "Talent Ontwikkelen" : "Développer le Talent"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "nl"
                    ? "Jonge kunstenaars krijgen een platform om hun werk te tonen en professionele feedback te ontvangen."
                    : "Les jeunes artistes bénéficient d'une plateforme pour présenter leur travail et recevoir des retours professionnels."}
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Deelname Voorwaarden" : "Conditions de Participation"}
            </h2>
            
            <div className="bg-card p-6 rounded-lg border mb-8">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    {language === "nl" 
                      ? "Open voor alle amateur en professionele cartoonisten in België"
                      : "Ouvert à tous les dessinateurs de bande dessinée amateurs et professionnels en Belgique"}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    {language === "nl" 
                      ? "Leeftijd: 16 jaar en ouder"
                      : "Âge: 16 ans et plus"}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    {language === "nl" 
                      ? "Maximum 3 inzendingen per persoon"
                      : "Maximum 3 soumissions par personne"}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    {language === "nl" 
                      ? "Cartoons moeten origineel werk zijn en niet eerder gepubliceerd"
                      : "Les bandes dessinées doivent être des œuvres originales et non publiées auparavant"}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    {language === "nl" 
                      ? "Digitaal of traditioneel medium toegestaan"
                      : "Support numérique ou traditionnel autorisé"}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    {language === "nl" 
                      ? "Minimale resolutie: 300 DPI voor digitale inzendingen"
                      : "Résolution minimale: 300 DPI pour les soumissions numériques"}
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Prijzen" : "Prix"}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 p-6 rounded-lg border-2 border-yellow-500/20">
                <Trophy className="w-12 h-12 text-yellow-600 mb-3" />
                <h3 className="text-xl font-bold mb-2">
                  {language === "nl" ? "1e Plaats" : "1ère Place"}
                </h3>
                <p className="text-3xl font-bold text-yellow-600 mb-2">€ 1.000</p>
                <p className="text-sm text-muted-foreground">
                  {language === "nl" 
                    ? "+ Tentoonstelling in Beltud galerij"
                    : "+ Exposition dans la galerie Beltud"}
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-400/10 to-gray-500/10 p-6 rounded-lg border-2 border-gray-400/20">
                <Trophy className="w-12 h-12 text-gray-500 mb-3" />
                <h3 className="text-xl font-bold mb-2">
                  {language === "nl" ? "2e Plaats" : "2ème Place"}
                </h3>
                <p className="text-3xl font-bold text-gray-600 mb-2">€ 600</p>
                <p className="text-sm text-muted-foreground">
                  {language === "nl" 
                    ? "+ Publicatie in Beltud magazine"
                    : "+ Publication dans le magazine Beltud"}
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 p-6 rounded-lg border-2 border-orange-500/20">
                <Trophy className="w-12 h-12 text-orange-600 mb-3" />
                <h3 className="text-xl font-bold mb-2">
                  {language === "nl" ? "3e Plaats" : "3ème Place"}
                </h3>
                <p className="text-3xl font-bold text-orange-600 mb-2">€ 400</p>
                <p className="text-sm text-muted-foreground">
                  {language === "nl" 
                    ? "+ Certificaat en online feature"
                    : "+ Certificat et présentation en ligne"}
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Jury" : "Jury"}
            </h2>
            
            <div className="bg-card p-6 rounded-lg border mb-8">
              <p className="text-muted-foreground mb-4">
                {language === "nl"
                  ? "Onze jury bestaat uit gerenommeerde Belgische cartoonisten, kunstcritici en culturele experts. Zij beoordelen de inzendingen op originaliteit, technisch vakmanschap, humor en relevantie ten opzichte van het thema."
                  : "Notre jury est composé de dessinateurs de bande dessinée belges renommés, de critiques d'art et d'experts culturels. Ils évaluent les soumissions sur l'originalité, le savoir-faire technique, l'humour et la pertinence par rapport au thème."}
              </p>
              <p className="text-sm text-muted-foreground italic">
                {language === "nl"
                  ? "* De jury behoudt zich het recht voor om extra eervolle vermeldingen toe te kennen."
                  : "* Le jury se réserve le droit d'attribuer des mentions honorables supplémentaires."}
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Belangrijke Data" : "Dates Importantes"}
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-card p-4 rounded-lg border">
                <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground">
                    {language === "nl" ? "Inschrijving Opening" : "Ouverture des Inscriptions"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "nl" ? "1 september 2024" : "1er septembre 2024"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-card p-4 rounded-lg border">
                <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground">
                    {language === "nl" ? "Deadline Inzendingen" : "Date Limite de Soumission"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "nl" ? "31 december 2024, 23:59" : "31 décembre 2024, 23:59"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-card p-4 rounded-lg border">
                <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground">
                    {language === "nl" ? "Aankondiging Winnaars" : "Annonce des Gagnants"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "nl" ? "15 februari 2025" : "15 février 2025"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-card p-4 rounded-lg border">
                <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground">
                    {language === "nl" ? "Award Ceremony & Tentoonstelling" : "Cérémonie de Remise des Prix & Exposition"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === "nl" ? "1 maart 2025" : "1er mars 2025"}
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery of Previous Winners */}
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
              {language === "nl" ? "Vorige Winnaars" : "Gagnants Précédents"}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1604871000636-074fa5117945?w=400&h=300&fit=crop" 
                  alt="Winner 1"
                  className="w-full h-48 object-cover rounded-lg mb-2 group-hover:scale-105 transition-transform"
                />
                <p className="text-sm font-medium text-foreground">
                  {language === "nl" ? "Editie 2023 - 1e Plaats" : "Édition 2023 - 1ère Place"}
                </p>
              </div>
              <div className="group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop" 
                  alt="Winner 2"
                  className="w-full h-48 object-cover rounded-lg mb-2 group-hover:scale-105 transition-transform"
                />
                <p className="text-sm font-medium text-foreground">
                  {language === "nl" ? "Editie 2022 - 1e Plaats" : "Édition 2022 - 1ère Place"}
                </p>
              </div>
              <div className="group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=300&fit=crop" 
                  alt="Winner 3"
                  className="w-full h-48 object-cover rounded-lg mb-2 group-hover:scale-105 transition-transform"
                />
                <p className="text-sm font-medium text-foreground">
                  {language === "nl" ? "Editie 2021 - 1e Plaats" : "Édition 2021 - 1ère Place"}
                </p>
              </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">
                {language === "nl" ? "Doe Mee!" : "Participez!"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {language === "nl"
                  ? "Heb je een creatieve cartoon die de brug slaat tussen culturen? Dien je werk in voor de volgende editie van onze Cartoon Concours!"
                  : "Avez-vous une bande dessinée créative qui fait le lien entre les cultures? Soumettez votre travail pour la prochaine édition de notre Concours de Bande Dessinée!"}
              </p>
              <a 
                href="/contact" 
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                {language === "nl" ? "Meer informatie" : "Plus d'informations"}
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CartoonContest;

