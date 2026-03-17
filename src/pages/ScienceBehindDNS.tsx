import Navigation from "@/components/Navigation";
import HowDNSWorks from "@/components/HowDNSWorks";
import DynamicStabilityAdvantage from "@/components/DynamicStabilityAdvantage";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const ScienceBehindDNS = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <HowDNSWorks />
        <DynamicStabilityAdvantage />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default ScienceBehindDNS;
