import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ChronicPainMovementAssessment from "./pages/ChronicPainMovementAssessment";
import PerformanceLongevityDNS from "./pages/PerformanceLongevityDNS";
import DNSBreathingTraining from "./pages/DNSBreathingTraining";
import BookSession from "./pages/BookSession";
import HomeV2 from "./pages/HomeV2";
import WhatIsDnsV2 from "./pages/WhatIsDnsV2";
import About from "./pages/About";
import Posture from "./pages/Posture";
import CoreStability from "./pages/CoreStability";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeV2 />} />
          <Route path="/posture" element={<Posture />} />
          <Route path="/core-stability" element={<CoreStability />} />
          <Route path="/what-is-dns" element={<WhatIsDnsV2 />} />
          <Route path="/chronic-pain-movement-assessment" element={<ChronicPainMovementAssessment />} />
          <Route path="/performance-longevity-dns" element={<PerformanceLongevityDNS />} />
          <Route path="/dns-breathing-training" element={<DNSBreathingTraining />} />
          <Route path="/book-session" element={<BookSession />} />
          
          <Route path="/about" element={<About />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
