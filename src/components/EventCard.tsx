import { Calendar, MapPin, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface EventCardProps {
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  price: string;
  image: string;
  description?: string;
}

export const EventCard = ({ title, startDate, endDate, location, price, image, description }: EventCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        {description && (
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {description}
          </p>
        )}
        
        <div className="space-y-2 text-sm">
          <div className="flex items-start space-x-2 text-muted-foreground">
            <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <div>
              <div>Start: {startDate}</div>
              <div>Eind: {endDate}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-muted-foreground">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Euro className="w-4 h-4 flex-shrink-0" />
            <span>Prijs: {price}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button variant="default" className="w-full">
          Vervolg
        </Button>
      </CardFooter>
    </Card>
  );
};
