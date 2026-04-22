import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, Zap, Target, Shield, Trophy, Wind } from "lucide-react";
import pikeImg from "@/assets/structural-durability-pike.jpg";
import stabilityDiagram from "@/assets/good-vs-poor-stability.jpg";

const StructuralDurabilityProtocol = () => {
  return (
    <>
      <SEOHead
        title="Structural Durability Protocol | DNS Movement Optimization for Longevity"
        description="Optimize your movement architecture for the next 30 years. Practitioner-led DNS sessions in North Vancouver address force leakage, intra-abdominal pressure, and joint centration for healthspan-focused athletes."
        canonical="/structural-durability-protocol"
        keywords="structural durability, healthspan, longevity training, DNS North Vancouver, force leakage, intra-abdominal pressure, joint centration, Pavel Kolar, Prague School, Eva Andersson"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Structural Durability Protocol", url: "/structural-durability-protocol" },
        ]}
      />

      <div className="min-h-screen">
        <Navigation />
        <main className="pt-16">
          {/* Hero */}
          <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="container px-4">
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                    Healthspan & Longevity
                  </p>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    The Architecture of Durability: Optimizing Your Movement Foundation
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    If you prioritize VO2 Max, Zone 2 output, and Hypertrophy, you are building a high-performance engine. But is your "chassis" designed to handle the load for the next 30 years?
                  </p>
                  <Button size="lg" asChild>
                    <a href="/book-session">Book Your 1-on-1 Movement Optimization Session</a>
                  </Button>
                </div>
                <div className="bg-[#e8eeef] rounded-lg overflow-hidden">
                  <img
                    src={pikeImg}
                    alt="Practitioner demonstrating a precise pike position with optimal joint centration"
                    className="w-full mix-blend-multiply"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Intro */}
          <section className="py-20">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-muted-foreground">
                  In the pursuit of healthspan, the greatest risk to the proactive athlete isn't a lack of fitness—it is building <strong className="text-foreground">high-level performance on an immature foundation</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Stability Cornerstone */}
          <section className="py-20 bg-muted/30">
            <div className="container px-4">
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <Shield className="w-12 h-12 text-primary mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Stability: The Cornerstone of the "Blueprint for 100-Year Performance"
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    Stability is the essential layer that allows strength and aerobic performance to be delivered safely. Without it, you experience what is known as <strong className="text-foreground">Force Leakage</strong>—the dissipation of energy through joints that were never designed to carry it, such as the lumbar spine, hips, and knees.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    DNStrainer focuses on the <strong className="text-foreground">Integrated Spinal Stabilizing System (ISSS)</strong>. This is a feed-forward mechanism controlled by your nervous system. It ensures that your diaphragm and deep stabilizers fire a fraction of a second before you move, creating a stable "fixed point" (<em>punctum fixum</em>) for your limbs to pull against.
                  </p>
                </div>
                <div className="bg-[#e8eeef] rounded-lg p-6">
                  <img
                    src={stabilityDiagram}
                    alt="Diagram comparing good versus poor intra-abdominal stabilization patterns"
                    className="w-full mix-blend-multiply"
                  />
                  <p className="text-sm text-muted-foreground text-center mt-4 italic">
                    Good (A) vs. poor (B) stabilization of the abdominal cylinder.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Functional Threshold */}
          <section className="py-20">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why "Good Baseline Fitness" Isn't Enough
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Many high-functioning individuals cross their <strong className="text-foreground">Functional Threshold</strong> without realizing it. When the demand of your training exceeds the capacity of your deep stabilizers, your brain defaults to crude, compensatory patterns.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 border-2">
                    <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">The Problem</p>
                    <p className="text-muted-foreground">
                      You can build enormous strength on top of these compensations, but the "bill" eventually comes due in the form of joint degradation and chronic overuse.
                    </p>
                  </Card>
                  <Card className="p-6 border-2 border-primary">
                    <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">The DNS Solution</p>
                    <p className="text-muted-foreground">
                      We don't just train muscles; we retrain the motor programs in your brain. By utilizing the same developmental postures you mastered in your first year of life, we "re-groove" the optimal patterns that protect your structure.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Clinical Audit */}
          <section className="py-20 bg-muted/30">
            <div className="container px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    The Precision of a Practitioner-Led Assessment
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
                    The difference between "doing the movement" and "activating the system" is small.
                  </p>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    For the Longevity Optimizer, precision is the only variable that matters. In a private one-on-one session at DNStrainer, Eva Andersson provides the clinical scrutiny required to detect the subtle "cheats" your nervous system uses to bypass proper stabilization.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                  A Clinical Audit includes:
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Wind,
                      title: "Diaphragm Integration",
                      description: "Assessing the diaphragm's ability to function as both a breathing and postural muscle simultaneously.",
                    },
                    {
                      icon: Activity,
                      title: "Intra-Abdominal Pressure (IAP) Regulation",
                      description: "Ensuring your abdominal wall resists pressure symmetrically to protect the spine under load.",
                    },
                    {
                      icon: Target,
                      title: "Joint Centration",
                      description: "Optimizing the position of your joints to ensure maximum mechanical advantage and minimum wear.",
                    },
                  ].map((item, i) => (
                    <Card key={i} className="p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-3">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Prague School */}
          <section className="py-20">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Trophy className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Proven by the Prague School
                </h2>
                <p className="text-lg text-muted-foreground">
                  Our approach is grounded in the <strong className="text-foreground">Prague School of Rehabilitation</strong>, the clinical standard for elite athletes like hockey legend Jaromír Jágr and Olympic champion Ester Ledecká. These athletes maintained elite mechanics for decades not through more "fitness," but through the constant optimization of their stabilization foundation.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto text-center">
                <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Secure Your Future Movement Quality
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Healthspan is an investment in your future self. Shift your focus from "more load" to <strong className="text-foreground">"better architecture."</strong>
                </p>
                <Button size="lg" asChild>
                  <a href="/book-session">Book Your 1-on-1 Movement Optimization Session</a>
                </Button>
                <p className="text-sm text-muted-foreground mt-6">
                  Practitioner-Led | North Vancouver
                </p>
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

export default StructuralDurabilityProtocol;
