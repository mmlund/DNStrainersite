import NavigationV2 from "@/components/NavigationV2";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const CoreStability = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead title="Core Stability | DNStrainer" description="Core Stability page — under construction." canonical="/core-stability" />
      <NavigationV2 />
      <main className="pt-16 flex-1 flex items-center justify-center">
        <div className="container px-4 py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Core Stability</h1>
          <p className="text-xl text-muted-foreground">Under construction.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CoreStability;
