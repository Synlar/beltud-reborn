import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Twitter, Facebook, Instagram, Youtube } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="space-y-6">
      {/* Membership CTA */}
      <Card className="bg-primary text-primary-foreground overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <CardContent className="p-6 relative">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Users className="w-8 h-8" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-center mb-3">
            Lid worden
          </h3>
          
          <p className="text-center text-primary-foreground/90 text-sm mb-6">
            Word lid van onze vereniging en ontdek de Belgisch-Turkse cultuur
          </p>
          
          <Button 
            className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
            size="lg"
          >
            Lid worden
          </Button>
        </CardContent>
      </Card>

      {/* Social Media */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">
            Volg ons
          </h3>
          
          <div className="grid grid-cols-2 gap-3">
            <Button 
              variant="outline" 
              className="flex items-center justify-center space-x-2 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary"
            >
              <Twitter className="w-4 h-4" />
              <span className="text-sm">Twitter</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="flex items-center justify-center space-x-2 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary"
            >
              <Facebook className="w-4 h-4" />
              <span className="text-sm">Facebook</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="flex items-center justify-center space-x-2 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary"
            >
              <Instagram className="w-4 h-4" />
              <span className="text-sm">Instagram</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="flex items-center justify-center space-x-2 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary"
            >
              <Youtube className="w-4 h-4" />
              <span className="text-sm">YouTube</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* About Widget */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-3">
            Over Beltud
          </h3>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            Beltud is een vereniging die de culturele banden tussen België en Turkije versterkt door middel van evenementen, cursussen en projecten.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
