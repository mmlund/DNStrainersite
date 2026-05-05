import NavigationV2 from "@/components/NavigationV2";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const CoreStability = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Core Stability Training | DNS North Vancouver | Eva Andersson"
        description="Core stability is about timing and motor control, not muscle strength. DNS retrains the automatic activation your nervous system should be doing. One-on-one sessions in North Vancouver."
        canonical="/core-stability"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Core Stability", url: "/core-stability" },
        ]}
      />
      <NavigationV2 />
      <main className="pt-16 flex-1 flex items-center justify-center">
        <div className="container px-4 py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Core Stability: It's Not About How Strong Your Core Is
          </h1>
          <p className="text-xl text-muted-foreground">Under construction.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CoreStability;
