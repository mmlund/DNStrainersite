import Navigation from "@/components/Navigation";
import HowDNSWorks from "@/components/HowDNSWorks";
import Footer from "@/components/Footer";

const ScienceBehindDNS = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <HowDNSWorks />
      </main>
      <Footer />
    </div>
  );
};

export default ScienceBehindDNS;
