import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/translations";

export const Sidebar = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="space-y-6">
      {/* Become Member Card */}
      <Card className="bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle className="text-2xl">{t.sidebar.becomeMember}</CardTitle>
          <CardDescription className="text-primary-foreground/80">
            {t.sidebar.membershipText}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            asChild 
            variant="secondary" 
            className="w-full"
          >
            <Link to="/lidmaatschap">{t.sidebar.joinNow}</Link>
          </Button>
        </CardContent>
      </Card>

      {/* Recent Activity Card */}
      <Card>
        <CardHeader>
          <CardTitle>{t.sidebar.recentActivity}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="text-sm font-medium text-foreground">
              {t.events.event1.title}
            </div>
            <div className="text-xs text-muted-foreground">wo. 17 Jan 2018</div>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium text-foreground">
              {t.events.event2.title}
            </div>
            <div className="text-xs text-muted-foreground">za. 10 Feb 2018</div>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium text-foreground">
              {t.events.event3.title}
            </div>
            <div className="text-xs text-muted-foreground">vr. 2 Mar 2018</div>
          </div>
        </CardContent>
      </Card>

      {/* Useful Links Card */}
      <Card>
        <CardHeader>
          <CardTitle>{t.sidebar.usefulLinks}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <a
            href="https://www.turkey.be"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-primary hover:underline"
          >
            {t.sidebar.turkishEmbassy}
          </a>
          <a
            href="https://www.belgium.be"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-primary hover:underline"
          >
            {t.sidebar.belgianCulture}
          </a>
          <a
            href="/cursussen/cursus-turks"
            className="block text-sm text-primary hover:underline"
          >
            {t.sidebar.languageCourses}
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

