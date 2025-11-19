import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/context/language-context";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Mission from "./pages/about/Mission";
import Board from "./pages/about/Board";
import History from "./pages/about/History";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";
import FiftyYears from "./pages/projects/FiftyYears";
import BrusselsCulturalDays from "./pages/projects/BrusselsCulturalDays";
import ColorsOfBelgium from "./pages/projects/ColorsOfBelgium";
import FriendlyMatch from "./pages/projects/FriendlyMatch";
import CartoonContest from "./pages/projects/CartoonContest";
import TurkishCourse from "./pages/courses/TurkishCourse";
import IntercultureleReizen from "./pages/activities/IntercultureleReizen";
import KunstSamenleven from "./pages/activities/KunstSamenleven";
import IntercultureleOntmoetingen from "./pages/activities/IntercultureleOntmoetingen";
import ConcertenTentoonstellingen from "./pages/activities/ConcertenTentoonstellingen";
import ReizenNaarTurkije from "./pages/activities/ReizenNaarTurkije";
import ExcursiesInBelgie from "./pages/activities/ExcursiesInBelgie";
import NederlandseTaal from "./pages/courses/NederlandseTaal";
import Kalligrafie from "./pages/courses/Kalligrafie";
import CultuurGeschiedenis from "./pages/courses/CultuurGeschiedenis";
import CulinaireWorkshops from "./pages/courses/CulinaireWorkshops";
import TurkishClassicalMusic from "./pages/courses/TurkishClassicalMusic";
import Photos from "./pages/multimedia/Photos";
import Videos from "./pages/multimedia/Videos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* About Routes */}
            <Route path="/over-beltud" element={<About />} />
            <Route path="/about/mission" element={<Mission />} />
            <Route path="/about/board" element={<Board />} />
            <Route path="/about/history" element={<History />} />
            <Route path="/lidmaatschap" element={<Membership />} />
            
            {/* Activity Routes */}
            <Route path="/activities/interculturele-reizen" element={<IntercultureleReizen />} />
            <Route path="/activities/reizen-naar-turkije" element={<ReizenNaarTurkije />} />
            <Route path="/activities/excursies-in-belgie" element={<ExcursiesInBelgie />} />
            <Route path="/activities/kunst-samenleven" element={<KunstSamenleven />} />
            <Route path="/activities/interculturele-ontmoetingen" element={<IntercultureleOntmoetingen />} />
            <Route path="/activities/concerten-tentoonstellingen" element={<ConcertenTentoonstellingen />} />
            
            {/* Project Routes */}
            <Route path="/projecten/50-jaar-hand-in-hand" element={<FiftyYears />} />
            <Route path="/projecten/brusselse-cultuurdagen" element={<BrusselsCulturalDays />} />
            <Route path="/projecten/cartoon-concours" element={<CartoonContest />} />
            <Route path="/projecten/kleuren-van-belgie" element={<ColorsOfBelgium />} />
            <Route path="/projecten/vriendschappelijke-wedstrijd" element={<FriendlyMatch />} />
            
            {/* Course Routes */}
            <Route path="/cursussen/cursus-turks" element={<TurkishCourse />} />
            <Route path="/cursussen/nederlandse-taal" element={<NederlandseTaal />} />
            <Route path="/cursussen/kalligrafie" element={<Kalligrafie />} />
            <Route path="/cursussen/cultuur-geschiedenis" element={<CultuurGeschiedenis />} />
            <Route path="/cursussen/culinaire-workshops" element={<CulinaireWorkshops />} />
            <Route path="/cursussen/klassieke-turkse-muziek" element={<TurkishClassicalMusic />} />
            
            {/* Multimedia Routes */}
            <Route path="/multimedia/photos" element={<Photos />} />
            <Route path="/multimedia/videos" element={<Videos />} />
            
            {/* Contact */}
            <Route path="/contact" element={<Contact />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
