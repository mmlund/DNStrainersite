import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, Wind, Target, Zap, Gauge, TrendingDown } from "lucide-react";
import sprinterComparison from "@/assets/perf-sprinter-comparison.png";
import surferDns from "@/assets/perf-surfer-dns.png";
import babySwimmer from "@/assets/perf-baby-swimmer.png";
import iapNapkin from "@/assets/perf-iap-napkin.png";

const PerformanceLongevityDNS = () => {
  return (
    <>
      <SEOHead
        title="Athletic Performance & Longevity | DNS North Vancouver | Eva Andersson"
        description="For trail runners, mountain bikers, skiers and climbers — extend your athletic career with Dynamic Neuromuscular Stabilization. Private 1-on-1 sessions in North Vancouver."
        canonical="/performance-longevity-dns"
        keywords="DNS athletes North Vancouver, athletic longevity, performance training, trail running, mountain biking, skiing, climbing, Pavel Kolar, functional threshold"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Performance & Longevity", url: "/performance-longevity-dns" },
        ]}
      />

      <div className="min-h-screen">
        <Navigation />
        <main className="pt-16">
          {/* Hero */}
          <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="container px-4">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                    DNS for Athletes
                  </p>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Athletic Performance & Longevity
                  </h1>
                  <p className="text-lg text-muted-foreground mb-4">
                    For the trail runners, mountain bikers, skiers, and climbers on the North Shore — fitness is rarely the problem. You have the strength and the drive.
                  </p>
                  <p className="text-lg text-muted-foreground mb-8">
                    But there's a question worth asking: can your core and "movement stabilization" system keep up with your training for the next 20 years?
                  </p>
                  <Button size="lg" asChild>
                    <a href="/book-session">Book a One-on-One Movement Session</a>
                  </Button>
                </div>
                <div className="bg-[#e8eeef] rounded-lg p-4">
                  <img
                    src={sprinterComparison}
                    alt="Comparative analysis of infant bear crawl and elite sprinter showing DNS-derived functional stability"
                    className="w-full mix-blend-multiply rounded"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Functional Threshold */}
          <section className="py-20">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <Gauge className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    The Functional Threshold
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  Every athlete has what DNS founder <a href="https://www.rehabps.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Professor Pavel Kolář</a> calls a <strong className="text-foreground">Functional Threshold</strong>. This is the point at which your deep stabilizing system can no longer keep up with the demands of your sport.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  When you push past this threshold, your brain defaults to cruder compensatory patterns. You can still perform — but the load gets distributed differently. Instead of being absorbed by the muscles designed for the job, it gets forced into structures like discs, joint capsules, and tendons.
                </p>
                <p className="text-lg text-foreground font-medium">
                  In the short term, you're fast. Over time, this can become a recipe for overuse injuries.
                </p>
              </div>
            </div>
          </section>

          {/* Force Leakage */}
          <section className="py-20 bg-muted/30">
            <div className="container px-4">
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-[#e8eeef] rounded-lg p-4 order-2 md:order-1">
                  <img
                    src={iapNapkin}
                    alt="Sketch explaining IAP intra-abdominal pressure and DNS stabilization principles"
                    className="w-full mix-blend-multiply rounded"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-3 mb-6">
                    <TrendingDown className="w-8 h-8 text-primary" />
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Force Leakage</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">
                    There's a concept in DNS called <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3578435/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"><strong>force leakage</strong></a> — the dissipation of effort through joints that aren't designed to carry it. Your lower back, knees, and hips end up absorbing force that should be transmitted cleanly to the ground (or the pedals, or the rock face).
                  </p>
                  <p className="text-lg text-muted-foreground">
                    This happens when the core doesn't stiffen automatically before your limbs move. DNS calls this the <em>punctum fixum</em> — a stable platform that your limbs can pull against. When it's working well, power transfers efficiently. When it's not, some of that effort just leaks away.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Fitness Alone */}
          <section className="py-20">
            <div className="container px-4">
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Why Fitness Alone May Not Be Enough
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    You can build substantial strength on top of compensatory patterns. Many people do — and perform well for years. But the core and "movement stabilization" system underneath is a feed-forward mechanism controlled by the nervous system. It's not something you can strengthen in the conventional sense. It needs to be <strong className="text-foreground">retrained</strong>.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    DNS uses developmental postures — positions we all moved through in our first year of life — to re-establish the stabilization patterns that should be running in the background automatically.
                  </p>
                </div>
                <div className="bg-[#e8eeef] rounded-lg p-4">
                  <img
                    src={babySwimmer}
                    alt="Infant developmental position alongside an elite swimmer demonstrating shared stabilization principles"
                    className="w-full mix-blend-multiply rounded"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Used in Elite Sport */}
          <section className="py-20 bg-muted/30">
            <div className="container px-4">
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-[#e8eeef] rounded-lg p-4 order-2 md:order-1">
                  <img
                    src={surferDns}
                    alt="Surfer in a barrel illustrating dynamic stability, with DNS developmental annotations"
                    className="w-full mix-blend-multiply rounded"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Used in Elite Sport
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    DNS has been used by a number of high-level athletes to maintain performance and extend careers.
                  </p>
                  <ul className="space-y-3 text-lg text-muted-foreground mb-4">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Olympic gold medallist <strong className="text-foreground">Ester Ledecká</strong> used DNS to address a lumbar disc issue at age 18.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Hockey player <strong className="text-foreground">Jaromír Jágr</strong> maintained elite performance into his late 40s with a focus on movement quality.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>World-record javelin thrower <strong className="text-foreground">Jan Železný</strong> sustained his career into his late 30s through attention to stabilization mechanics.</span>
                    </li>
                  </ul>
                  <p className="text-lg text-muted-foreground">
                    These are exceptional cases, but the underlying principle is the same: the quality of your stabilization foundation matters for how long you can keep doing what you do.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Private Session */}
          <section className="py-20">
            <div className="container px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    What Happens in a Private Session
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    It's difficult to retrain your stabilizing system in a group class. This is a subconscious mechanism — your nervous system has to learn to fire correctly before movement begins, and that requires individual attention.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
                  <div className="bg-[#e8eeef] rounded-lg overflow-hidden">
                    <video
                      src="/videos/perf-dns-short.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full"
                    />
                  </div>
                  <div className="bg-[#e8eeef] rounded-lg overflow-hidden">
                    <video
                      src="/videos/perf-session-clip.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                  In a one-on-one session, Eva investigates:
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Zap,
                      title: "Where Force is Leaking",
                      description: "Identifying which sport-specific movements are being compromised by poor stabilization.",
                    },
                    {
                      icon: Wind,
                      title: "Diaphragm Function",
                      description: "Whether your diaphragm is working as both a breathing and a postural muscle simultaneously. This matters particularly for climbing, descending, and sustained effort.",
                    },
                    {
                      icon: Target,
                      title: "Movement Pattern Retraining",
                      description: "Moving beyond strengthening to ensure your nervous system chooses efficient patterns when it counts.",
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

          {/* Looking Ahead / CTA */}
          <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <Activity className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Looking Ahead
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  If you're training hard and thinking about longevity — whether that's staying on the trails at 60 or avoiding the injuries that accumulate over decades — it may be worth looking at what's happening underneath the fitness.
                </p>
                <Button size="lg" asChild>
                  <a href="/book-session">Book a One-on-One Movement Session</a>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Or email us at <a href="mailto:info@dnstrainer.com" className="text-primary hover:underline">info@dnstrainer.com</a>
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

export default PerformanceLongevityDNS;
