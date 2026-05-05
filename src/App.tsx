import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MoveBetter from "./pages/MoveBetter";
import InjuryRehabilitation from "./pages/InjuryRehabilitation";
import SportsPerformance from "./pages/SportsPerformance";
import ChronicPain from "./pages/ChronicPain";
import ChronicPainMovementAssessment from "./pages/ChronicPainMovementAssessment";
import DraftPain from "./pages/DraftPain";
import AthleticFoundation from "./pages/AthleticFoundation";
import StructuralDurabilityProtocol from "./pages/StructuralDurabilityProtocol";
import PerformanceLongevityDNS from "./pages/PerformanceLongevityDNS";
import DNSBreathingTraining from "./pages/DNSBreathingTraining";
import BookingTerms from "./pages/BookingTerms";
import BookSession from "./pages/BookSession";
import Payment from "./pages/Payment";
import ScienceBehindDNS from "./pages/ScienceBehindDNS";
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
          <Route path="/move-better" element={<MoveBetter />} />
          <Route path="/injury-rehabilitation" element={<InjuryRehabilitation />} />
          <Route path="/sports-performance" element={<SportsPerformance />} />
          <Route path="/chronic-pain" element={<ChronicPain />} />
          <Route path="/chronic-pain-movement-assessment" element={<ChronicPainMovementAssessment />} />
          <Route path="/draft-pain" element={<DraftPain />} />
          <Route path="/the-athletic-foundation" element={<AthleticFoundation />} />
          <Route path="/structural-durability-protocol" element={<StructuralDurabilityProtocol />} />
          <Route path="/performance-longevity-dns" element={<PerformanceLongevityDNS />} />
          <Route path="/dns-breathing-training" element={<DNSBreathingTraining />} />
          <Route path="/booking-terms" element={<BookingTerms />} />
          <Route path="/book-session" element={<BookSession />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/science-behind-dns" element={<ScienceBehindDNS />} />
          
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
