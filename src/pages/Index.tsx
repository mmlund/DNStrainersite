import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatIsDNS from "@/components/WhatIsDNS";
import HowDNSWorks from "@/components/HowDNSWorks";
import DevelopmentalPatterns from "@/components/DevelopmentalPatterns";
import AboutEva from "@/components/AboutEva";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <WhatIsDNS />
        <HowDNSWorks />
        <DevelopmentalPatterns />
        <AboutEva />
        <BookingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
