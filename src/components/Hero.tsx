import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/translations";

const slideImages = [
  "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=1200&h=600&fit=crop",
  "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200&h=600&fit=crop",
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&h=600&fit=crop"
];

export const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: t.hero.slide1.title,
      subtitle: t.hero.slide1.tag,
      description: t.hero.slide1.subtitle,
      image: slideImages[0]
    },
    {
      title: t.hero.slide2.title,
      subtitle: t.hero.slide2.tag,
      description: t.hero.slide2.subtitle,
      image: slideImages[1]
    },
    {
      title: t.hero.slide3.title,
      subtitle: t.hero.slide3.tag,
      description: t.hero.slide3.subtitle,
      image: slideImages[2]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden bg-muted">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 container mx-auto px-4 flex items-center">
            <div className="max-w-2xl text-white">
              <div className="inline-block px-4 py-2 bg-secondary rounded-lg mb-4 animate-in fade-in slide-in-from-left-4 duration-500">
                <span className="text-sm font-semibold uppercase tracking-wide">
                  {slide.subtitle}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-left-4 duration-700">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200 animate-in fade-in slide-in-from-left-4 duration-900">
                {slide.description}
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg animate-in fade-in slide-in-from-left-4 duration-1000"
              >
                {t.hero.moreInfo}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? "bg-white w-8" 
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
