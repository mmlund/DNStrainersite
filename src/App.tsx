import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
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
          <Route path="/index-old" element={<Index />} />
          <Route path="/posture" element={<Posture />} />
          <Route path="/core-stability" element={<CoreStability />} />
          <Route path="/what-is-dns" element={<WhatIsDnsV2 />} />
          <Route path="/chronic-pain-movement-assessment" element={<ChronicPainMovementAssessment />} />
          <Route path="/performance-longevity-dns" element={<PerformanceLongevityDNS />} />
          <Route path="/dns-breathing-training" element={<DNSBreathingTraining />} />
          <Route path="/book-session" element={<BookSession />} />
          
          <Route path="/about" element={<About />} />

          {/* 301-style client-side redirects for retired URLs */}
          <Route path="/chronic-pain" element={<Navigate to="/chronic-pain-movement-assessment" replace />} />
          <Route path="/draft-pain" element={<Navigate to="/chronic-pain-movement-assessment" replace />} />
          <Route path="/injury-rehabilitation" element={<Navigate to="/chronic-pain-movement-assessment" replace />} />
          <Route path="/sports-performance" element={<Navigate to="/performance-longevity-dns" replace />} />
          <Route path="/the-athletic-foundation" element={<Navigate to="/performance-longevity-dns" replace />} />
          <Route path="/structural-durability-protocol" element={<Navigate to="/performance-longevity-dns" replace />} />
          <Route path="/move-better" element={<Navigate to="/what-is-dns" replace />} />
          <Route path="/science-behind-dns" element={<Navigate to="/what-is-dns" replace />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
