import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";
import { Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const SportsPerformance = () => {
  return (
    <>
      <Helmet>
        <title>Sports Performance Training North Vancouver | DNS | Eva Andersson</title>
        <meta name="description" content="Enhance athletic performance with DNS training in North Vancouver. Improve dynamic stability, power transfer, and movement efficiency for competitive advantage on The North Shore." />
        <meta name="keywords" content="sports performance North Vancouver, DNS athletic training, dynamic stability, movement optimization North Shore, Eva Andersson" />
        <link rel="canonical" href={`${window.location.origin}/sports-performance`} />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  DNS Sports Performance Training
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Unlock athletic potential through optimized dynamic stability and neuromuscular efficiency - The Prague School advantage for North Shore athletes
                </p>
                <Button size="lg" asChild>
                  <a href="/booking-terms">Elevate Your Performance</a>
                </Button>
              </div>
            </div>
          </section>

          {/* Performance Benefits */}
          <section className="py-20">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                  Performance Outcomes with DNS Training
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Enhanced Power Transfer",
                      description: "Optimize kinetic chain efficiency for explosive movements and force generation"
                    },
                    {
                      title: "Improved Movement Economy",
                      description: "Reduce energy waste through efficient neuromuscular coordination patterns"
                    },
                    {
                      title: "Injury Resistance",
                      description: "Build robust dynamic stability to withstand training loads and competition demands"
                    },
                    {
                      title: "Faster Recovery",
                      description: "Proper stabilization patterns enhance recovery between training sessions"
                    },
                    {
                      title: "Sport-Specific Integration",
                      description: "Transfer optimal patterns to your specific athletic movements and demands"
                    },
                    {
                      title: "Competitive Longevity",
                      description: "Sustainable performance through reduced injury risk and efficient movement"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="bg-card p-6 rounded-lg border-2 hover:border-primary transition-all">
                      <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Dynamic Stability in Sport */}
          <section className="py-20 bg-muted/30">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  Why Dynamic Stability Matters for Athletes
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    As emphasized by performance experts like <strong>Dr. Peter Attia</strong>, dynamic stability is the differentiator between good athletes and elite performers. Unlike static strength, dynamic stability involves maintaining optimal joint positioning and force control during rapid, multi-directional movements.
                  </p>
                  <p>
                    DNS training from The Prague School specifically develops this capacity by retraining the <strong>Integrated Spinal Stabilization System (ISSS)</strong> - the coordinated activation of deep core stabilizers, diaphragm, pelvic floor, and multifidus that creates a stable platform for peripheral mobility.
                  </p>
                  <p>
                    This neuromuscular foundation enables efficient power transfer through the kinetic chain, reduces energy leaks, and provides the stability necessary for explosive movements without compensation patterns that lead to injury.
                  </p>
                </div>

                <div className="mt-12 bg-card p-8 rounded-lg border-2">
                  <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                    <Target className="w-7 h-7 text-primary" />
                    The Performance Advantage
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Eva Andersson's Prague School DNS certification enables precise assessment of your stabilization patterns and systematic development of sport-specific dynamic stability. This translates to measurable improvements in strength expression, movement velocity, and injury resistance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Athletes We Work With */}
          <section className="py-20">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                  Athletes Who Benefit from DNS
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      category: "Endurance Athletes",
                      sports: ["Runners", "Cyclists", "Triathletes", "Cross-country skiers"]
                    },
                    {
                      category: "Power & Strength",
                      sports: ["Weightlifters", "CrossFit athletes", "Powerlifters", "Strongman competitors"]
                    },
                    {
                      category: "Team & Court Sports",
                      sports: ["Hockey", "Basketball", "Soccer", "Tennis"]
                    }
                  ].map((group, index) => (
                    <div key={index} className="bg-card p-6 rounded-lg border">
                      <h3 className="text-xl font-bold mb-4 text-foreground">{group.category}</h3>
                      <ul className="space-y-2">
                        {group.sports.map((sport, idx) => (
                          <li key={idx} className="text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            {sport}
                          </li>
                        ))}
                      </ul>
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

export default SportsPerformance;
