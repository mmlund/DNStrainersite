import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";
import { AlertCircle } from "lucide-react";
import DNSComparison from "@/components/DNSComparison";
import FirstDNSSession from "@/components/FirstDNSSession";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import chronicPainIcon from "@/assets/chronic-pain-icon.png";
import painCollage from "@/assets/pain-collage-new.png";

const ChronicPain = () => {
  return (
    <>
      <Helmet>
        <title>Chronic Pain Management North Vancouver | DNS Treatment | Eva Andersson</title>
        <meta name="description" content="DNS-based chronic pain treatment in North Vancouver. Address back pain, neck dysfunction, and musculoskeletal pain through neuromuscular retraining on The North Shore." />
        <meta name="keywords" content="chronic pain North Vancouver, back pain treatment, DNS pain management, neck pain North Shore, Eva Andersson" />
        <link rel="canonical" href={`${window.location.origin}/chronic-pain`} />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <img src={chronicPainIcon} alt="Chronic pain icon" className="w-8 h-8" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Chronic Pain Management with DNS
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Address the root neuromuscular causes of persistent pain through Dynamic Neuromuscular Stabilization in North Vancouver
                </p>
                <Button size="lg" asChild>
                  <a href="/book-session">Start Your Recovery</a>
                </Button>
              </div>
            </div>
          </section>

          {/* Pain Conditions */}
          <section className="py-20">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                  Chronic Pain Conditions We Treat
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      condition: "Chronic Low Back Pain",
                      description: "Non-specific back pain, disc-related pain"
                    },
                    {
                      condition: "Neck Pain & Dysfunction",
                      description: "Cervical pain, tension headaches, postural dysfunction, whiplash sequelae"
                    },
                    {
                      condition: "Shoulder Pain",
                      description: "Rotator cuff dysfunction, impingement syndrome, chronic shoulder instability"
                    },
                    {
                      condition: "Hip & Pelvic Pain",
                      description: "Hip impingement, sacroiliac dysfunction, pelvic floor dysfunction"
                    },
                    {
                      condition: "Persistent Knee Pain",
                      description: "Patellofemoral pain, post-surgical dysfunction, movement-related pain"
                    },
                    {
                      condition: "Movement Disorders",
                      description: "Chronic compensations, postural pain syndromes, breathing dysfunction"
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-card p-6 rounded-lg border-2 hover:border-primary transition-all">
                      <h3 className="text-xl font-bold mb-3 text-foreground">{item.condition}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Why Pain Persists */}
          <section className="py-12 bg-muted/30">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">
                <img src={painCollage} alt="Collage showing common chronic pain areas including back, neck, shoulder, knee, and wrist" className="w-full rounded-lg shadow-lg" />
              </div>
            </div>
          </section>

          <section className="py-20 bg-muted/30">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-card p-8 rounded-lg border-2 border-primary/20 mb-12">
                  <div className="flex items-start gap-4 mb-4">
                    <AlertCircle className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-4">
                        Why Traditional Treatment Often Fails
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Most chronic pain persists not because of ongoing tissue damage, but due to <strong>dysfunctional neuromuscular patterns</strong> that perpetuate abnormal loading and movement compensation. Conventional approaches that focus solely on symptom management fail to address these root causes.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  The DNS Approach to Chronic Pain
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Dynamic Neuromuscular Stabilization addresses chronic pain by <strong>retraining the central nervous system</strong> to activate optimal stabilization patterns. This corrects faulty movement strategies that create excessive joint stress, muscle tension, and pain perpetuation.
                  </p>
                  <p>
                    Through systematic progression of developmental positions, DNS restores proper <strong>intra-abdominal pressure regulation</strong>, joint centration, and coordinated muscle activation - the foundation for pain-free movement.
                  </p>
                  <p>
                    Eva Andersson's Prague School training enables precise identification of dysfunctional patterns and targeted intervention to restore optimal neuromuscular coordination, breaking the chronic pain cycle.
                  </p>
                </div>

              </div>
            </div>
          </section>

          <FirstDNSSession />

          {/* What Makes DNS Different */}
          <section className="py-20">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  What Makes DNS Different?
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Treats Root Causes, Not Symptoms",
                      description: "Addresses the underlying neuromuscular dysfunction rather than masking pain"
                    },
                    {
                      title: "Evidence-Based Methodology",
                      description: "Developed by The Prague School through decades of neuroscience research and clinical validation"
                    },
                    {
                      title: "Whole-System Approach",
                      description: "Recognizes that chronic pain reflects systemic movement dysfunction, not isolated tissue pathology"
                    },
                    {
                      title: "Sustainable Results",
                      description: "Creates lasting change through neuromuscular retraining rather than temporary symptom relief"
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

export default ChronicPain;
