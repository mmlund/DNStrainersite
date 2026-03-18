import Navigation from "@/components/Navigation";
import HowDNSWorks from "@/components/HowDNSWorks";
import DynamicStabilityAdvantage from "@/components/DynamicStabilityAdvantage";
import CorePrinciples from "@/components/CorePrinciples";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const ScienceBehindDNS = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="The Science Behind DNS | Dynamic Neuromuscular Stabilization Research"
        description="Explore the neuroscience behind Dynamic Neuromuscular Stabilization. Learn how DNS uses developmental kinesiology, intra-abdominal pressure, and core stability principles from The Prague School."
        canonical="/science-behind-dns"
        keywords="DNS science, neuromuscular stabilization research, Prague School methodology, developmental kinesiology, intra-abdominal pressure, core stability"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "The Science Behind DNS", url: "/science-behind-dns" },
        ]}
      />
      <Navigation />
      <main className="pt-16">
        <HowDNSWorks />
        <DynamicStabilityAdvantage />
        <CorePrinciples />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default ScienceBehindDNS;
