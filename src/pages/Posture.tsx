import NavigationV2 from "@/components/NavigationV2";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Posture = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title='DNS and Posture | Why "Sit Up Straight" Doesn&apos;t Work | North Vancouver'
        description="Posture isn't a position you hold through willpower — it's a reflection of whether your stabilization system is working automatically. DNS posture training in North Vancouver with Eva Andersson."
        canonical="/posture"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Posture", url: "/posture" },
        ]}
      />
      <NavigationV2 />
      <main className="pt-16 flex-1 flex items-center justify-center">
        <div className="container px-4 py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            DNS and Posture: Why "Sit Up Straight" Doesn't Work Long-Term
          </h1>
          <p className="text-xl text-muted-foreground">Under construction.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Posture;
