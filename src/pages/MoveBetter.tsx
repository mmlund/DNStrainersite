import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Zap, Shield } from "lucide-react";
import crawlAdult from "@/assets/crawl-adult.png";
import surfer from "@/assets/surfer.jpg";

const MoveBetterPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-secondary via-accent to-primary">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Move Better, Move Stronger
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Transform your movement quality through Dynamic Neuromuscular Stabilization training on The North Shore.
              </p>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-muted rounded-lg mb-8 flex items-center justify-center">
                <p className="text-muted-foreground text-lg">Video: Move Better, Move Stronger (Embed placeholder)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Stability Concept */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-8">What is Dynamic Stability?</h2>
              
              <div className="mb-12">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Dynamic stability is the ability to maintain optimal joint positioning and control during movement. Unlike static stability (holding a plank), dynamic stability involves coordinated muscle activation that responds to changing forces and positions in real-time.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  As emphasized by Dr. Peter Attia and leading movement experts, dynamic stability is the foundation of:
                </p>
                <ul className="space-y-3 text-muted-foreground ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Injury-resistant movement patterns across all activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Efficient force transfer and power generation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Longevity and sustainable athletic performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Prevention of chronic pain and degenerative conditions</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <img 
                    src={crawlAdult} 
                    alt="Adult performing DNS crawling exercise for dynamic stability training" 
                    className="rounded-lg shadow-lg w-full mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-3">Reactivating Optimal Patterns</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    DNS uses developmental positions like quadruped (crawling) to retrain the neuromuscular system. These positions challenge dynamic stability in ways that reveal and correct dysfunction while building resilient movement patterns.
                  </p>
                </div>
                <div>
                  <img 
                    src={surfer} 
                    alt="Surfer demonstrating dynamic stability in athletic performance" 
                    className="rounded-lg shadow-lg w-full mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-3">Real-World Performance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Improved dynamic stability translates directly to enhanced performance in sports, daily activities, and demanding physical challenges. From surfing to skiing to carrying groceries, DNS training builds the foundation for confident, efficient movement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The DNS Difference */}
        <section className="py-16 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-12 text-center">The DNS Training Advantage</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="border-2 hover:border-primary transition-colors">
                  <CardContent className="pt-8">
                    <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Precision Targeting</h3>
                    <p className="text-muted-foreground">
                      DNS identifies specific dysfunctional patterns and targets root causes rather than symptoms. We assess and retrain the exact muscle activation sequences that create dysfunction.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-colors">
                  <CardContent className="pt-8">
                    <div className="mb-4 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Neuroplastic Change</h3>
                    <p className="text-muted-foreground">
                      By working at the level of the central nervous system, DNS creates lasting change in motor control patterns. Results are permanent when properly integrated, not temporary fixes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary transition-colors">
                  <CardContent className="pt-8">
                    <div className="mb-4 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Injury Prevention</h3>
                    <p className="text-muted-foreground">
                      Building authentic dynamic stability through DNS dramatically reduces injury risk. We create resilient movement patterns that adapt to unexpected forces and positions.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-2 bg-primary/5">
                <CardContent className="pt-8">
                  <h3 className="text-2xl font-bold mb-4">Who Benefits from DNS Training?</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">Athletes & Active Individuals</h4>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Enhance sport-specific performance</li>
                        <li>• Build injury resilience</li>
                        <li>• Improve power transfer and efficiency</li>
                        <li>• Accelerate post-injury return to sport</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Anyone with Pain or Dysfunction</h4>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Chronic back or neck pain</li>
                        <li>• Shoulder or hip dysfunction</li>
                        <li>• Post-surgical rehabilitation</li>
                        <li>• Movement quality improvement</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-secondary">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Move Better?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Start your DNS training journey with Eva Andersson at Scandinavian Clinic in North Vancouver.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero" asChild>
                  <a href="https://scandinavianclinic.com/dns-coaching/">
                    Book Your Assessment
                    <ArrowRight className="ml-2" />
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary"
                  asChild
                >
                  <a href="mailto:info@scandinavianclinic.com">
                    Contact Eva
                  </a>
                </Button>
              </div>
              <div className="mt-8 text-white/80">
                <p>Scandinavian Clinic | Suite 202 - 101 West 16th Street</p>
                <p>North Vancouver, BC V7M 1T3 | (604) 926-4883</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MoveBetterPage;