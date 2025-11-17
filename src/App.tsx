import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";
import FiftyYears from "./pages/projects/FiftyYears";
import BrusselsCulturalDays from "./pages/projects/BrusselsCulturalDays";
import ColorsOfBelgium from "./pages/projects/ColorsOfBelgium";
import FriendlyMatch from "./pages/projects/FriendlyMatch";
import TurkishCourse from "./pages/courses/TurkishCourse";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/over-beltud" element={<About />} />
          <Route path="/lidmaatschap" element={<Membership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projecten/50-jaar-hand-in-hand" element={<FiftyYears />} />
          <Route path="/projecten/brusselse-cultuurdagen" element={<BrusselsCulturalDays />} />
          <Route path="/projecten/kleuren-van-belgie" element={<ColorsOfBelgium />} />
          <Route path="/projecten/vriendschappelijke-wedstrijd" element={<FriendlyMatch />} />
          <Route path="/cursussen/cursus-turks" element={<TurkishCourse />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
