import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatIsDNS from "@/components/WhatIsDNS";
import StabilizationChecklist from "@/components/StabilizationChecklist";
import DNSComparison from "@/components/DNSComparison";

import FirstDNSSession from "@/components/FirstDNSSession";
import Services from "@/components/Services";

import DevelopmentalPatterns from "@/components/DevelopmentalPatterns";
import AboutEva from "@/components/AboutEva";

import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StructuredData />
      <GoogleAnalytics />
      <Navigation />
      <main className="pt-16">
        <Hero />
        <WhatIsDNS />
        <StabilizationChecklist />
        <DNSComparison />
        
        <FirstDNSSession />
        <Services />
        
        <DevelopmentalPatterns />
        <AboutEva />
        
        <BookingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
