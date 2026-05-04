import NavigationV2 from "@/components/NavigationV2";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Posture = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead title="Posture | DNStrainer" description="Posture page — under construction." canonical="/posture" />
      <NavigationV2 />
      <main className="pt-16 flex-1 flex items-center justify-center">
        <div className="container px-4 py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Posture</h1>
          <p className="text-xl text-muted-foreground">Under construction.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Posture;
