import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/translations";

interface NewsCardProps {
  title: string;
  excerpt: string;
  image: string;
  date?: string;
}

export const NewsCard = ({ title, excerpt, image, date }: NewsCardProps) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {date && (
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-semibold">
            {date}
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-3">
          {excerpt}
        </p>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button variant="outline" className="w-full">
          {t.newsCard.continue}
        </Button>
      </CardFooter>
    </Card>
  );
};
