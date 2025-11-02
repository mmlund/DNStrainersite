import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import crawlInfant from "@/assets/crawl-infant.png";
import surfingBaby from "@/assets/surfing-baby.jpg";

const WhatIsDNSPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary via-primary-light to-secondary">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                What is Dynamic Neuromuscular Stabilization?
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Discover the science-based approach that transforms movement patterns through developmental kinesiology and neuromuscular retraining.
              </p>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-muted rounded-lg mb-8 flex items-center justify-center">
                <p className="text-muted-foreground text-lg">Video: What is DNS? (Embed placeholder)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Concept */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-8">The Foundation: Developmental Kinesiology</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <img 
                    src={crawlInfant} 
                    alt="Infant demonstrating natural crawling pattern - foundational DNS movement" 
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Innate Motor Programs</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    DNS is founded on the principle that infants are born with genetically determined, hard-wired motor programs that develop in a predictable sequence. These programs represent optimal movement patterns that emerge naturally during the first year of life.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    From supine positioning to rolling, crawling, and eventually upright stance, each developmental stage establishes critical neuromuscular coordination patterns that form the foundation for all future movement.
                  </p>
                </div>
              </div>

              <Card className="border-2 mb-12">
                <CardContent className="pt-8">
                  <h3 className="text-2xl font-bold mb-4">Why Adults Need DNS</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Modern lifestyle factors - chronic stress, sedentary behavior, repetitive movement patterns, and injury - disrupt these innate motor programs. The central nervous system adapts by developing compensatory patterns that may reduce pain in the short term but create dysfunction, inefficiency, and injury risk long-term.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    DNS exercises systematically reactivate optimal developmental movement patterns, essentially "reminding" the nervous system how to move efficiently. This neuroplastic retraining restores proper muscle activation sequences, joint centration, and dynamic stability.
                  </p>
                </CardContent>
              </Card>

              <h2 className="text-4xl font-bold text-foreground mb-8">Central Stability for Peripheral Mobility</h2>
              
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4">The Stabilization System</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    At the core of DNS is the concept of <strong>Integrated Spinal Stabilization System (ISSS)</strong>. This system comprises:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span><strong>Diaphragm</strong> - Primary respiratory muscle and superior stabilizer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span><strong>Pelvic floor</strong> - Inferior stabilizer and pressure regulator</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span><strong>Transversus abdominis & obliques</strong> - Anterior and lateral stabilizers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span><strong>Multifidus & deep spinal muscles</strong> - Posterior stabilizers</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Intra-Abdominal Pressure</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Coordinated activation of these muscles creates optimal <strong>intra-abdominal pressure (IAP)</strong>, forming a stable cylinder that supports the spine during all activities.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Proper IAP regulation through DNS training:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Protects spinal structures from excessive load</li>
                    <li>• Enables efficient force transfer through the kinetic chain</li>
                    <li>• Improves breathing mechanics and respiratory efficiency</li>
                    <li>• Enhances athletic performance and power generation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Clinical Applications in North Vancouver</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3">Injury Rehabilitation</h3>
                    <p className="text-muted-foreground text-sm">
                      Post-surgical recovery, sports injuries, chronic musculoskeletal pain, movement dysfunction correction
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3">Performance Training</h3>
                    <p className="text-muted-foreground text-sm">
                      Athletic optimization, power development, movement efficiency, sport-specific stability training
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3">Pain Management</h3>
                    <p className="text-muted-foreground text-sm">
                      Chronic back pain, neck dysfunction, shoulder impingement, postural correction
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button size="lg" variant="default" asChild>
                  <a href="https://scandinavianclinic.com/dns-coaching/">
                    Book Your Assessment
                    <ArrowRight className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhatIsDNSPage;