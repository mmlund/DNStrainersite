import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WhatIsDNS from "./pages/WhatIsDNS";
import MoveBetter from "./pages/MoveBetter";
import InjuryRehabilitation from "./pages/InjuryRehabilitation";
import SportsPerformance from "./pages/SportsPerformance";
import ChronicPain from "./pages/ChronicPain";
import ChronicPainMovementAssessment from "./pages/ChronicPainMovementAssessment";
import AthleticFoundation from "./pages/AthleticFoundation";
import StructuralDurabilityProtocol from "./pages/StructuralDurabilityProtocol";
import BookingTerms from "./pages/BookingTerms";
import BookSession from "./pages/BookSession";
import Payment from "./pages/Payment";
import ScienceBehindDNS from "./pages/ScienceBehindDNS";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/what-is-dns" element={<WhatIsDNS />} />
          <Route path="/move-better" element={<MoveBetter />} />
          <Route path="/injury-rehabilitation" element={<InjuryRehabilitation />} />
          <Route path="/sports-performance" element={<SportsPerformance />} />
          <Route path="/chronic-pain" element={<ChronicPain />} />
          <Route path="/chronic-pain-movement-assessment" element={<ChronicPainMovementAssessment />} />
          <Route path="/the-athletic-foundation" element={<AthleticFoundation />} />
          <Route path="/structural-durability-protocol" element={<StructuralDurabilityProtocol />} />
          <Route path="/booking-terms" element={<BookingTerms />} />
          <Route path="/book-session" element={<BookSession />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/science-behind-dns" element={<ScienceBehindDNS />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
