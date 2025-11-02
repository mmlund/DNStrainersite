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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
