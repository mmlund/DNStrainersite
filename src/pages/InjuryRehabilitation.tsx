import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";
import FirstDNSSession from "@/components/FirstDNSSession";
import { Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const InjuryRehabilitation = () => {
  return (
    <>
      <Helmet>
        <title>Injury Rehabilitation North Vancouver | DNS Recovery | Eva Andersson</title>
        <meta name="description" content="Evidence-based DNS injury rehabilitation in North Vancouver. Post-injury recovery for sports injuries, back pain, and musculoskeletal dysfunction using Prague School methodology." />
        <meta name="keywords" content="injury rehabilitation North Vancouver, DNS recovery, sports injury treatment, post-injury rehab North Shore, Eva Andersson" />
        <link rel="canonical" href={`${window.location.origin}/injury-rehabilitation`} />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  DNS Injury Rehabilitation in North Vancouver
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Evidence-based rehabilitation using Dynamic Neuromuscular Stabilization to restore optimal movement patterns and accelerate recovery
                </p>
                <Button size="lg" asChild>
                  <a href="/book-session">Book Your Assessment</a>
                </Button>
              </div>
            </div>
          </section>

          {/* What We Treat */}
          <section className="py-20">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                  Conditions We Treat with DNS
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Sports injuries (ACL, rotator cuff, ankle sprains)",
                    "Chronic back and neck pain",
                    "Shoulder dysfunction and impingement",
                    "Hip and knee pain",
                    "Movement compensations and asymmetries",
                    "Core instability and weakness"
                  ].map((condition, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">{condition}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* DNS Approach */}
          <section className="py-20 bg-muted/30">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  The DNS Rehabilitation Approach
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Unlike conventional rehabilitation that treats symptoms in isolation, DNS addresses the <strong>root neuromuscular causes</strong> of injury and dysfunction. The Prague School methodology recognizes that most injuries result from faulty movement patterns and inadequate dynamic stability.
                  </p>
                  <p>
                    Through DNS rehabilitation, we <strong>retrain your central nervous system</strong> to activate optimal stabilization patterns established during infant development. This restores proper joint centration, muscle coordination, and intra-abdominal pressure regulation - the foundation for injury-resistant movement.
                  </p>
                  <p>
                    Eva Andersson's DNS training enables precise assessment of dysfunctional patterns and systematic progression through developmental positions to rebuild dynamic stability from the ground up.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* Why Choose DNS */}
          <section className="py-20">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  Why DNS for Injury Rehabilitation?
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Addresses Root Causes",
                      description: "Rather than managing symptoms, DNS corrects the underlying neuromuscular patterns that caused injury"
                    },
                    {
                      title: "Prevents Re-Injury",
                      description: "By establishing optimal movement patterns, DNS significantly reduces recurrence risk"
                    },
                    {
                      title: "Evidence-Based Methodology",
                      description: "Developed by The Prague School over decades of clinical research and neuroscience"
                    },
                    {
                      title: "Whole-Body Integration",
                      description: "Treats the kinetic chain as an integrated system rather than isolated body parts"
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-card p-6 rounded-lg border">
                      <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <BookingCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default InjuryRehabilitation;
