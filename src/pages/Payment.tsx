import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Payment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Payment - DNS Trainer</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <Navigation />
      
      <main className="flex-grow">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Payment
            </h1>
            <p className="text-lg text-muted-foreground">
              This page is currently under construction.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Payment;
