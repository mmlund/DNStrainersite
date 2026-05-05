import NavigationV2 from "@/components/NavigationV2";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, Wind, Target, Zap, Gauge, TrendingDown, Eye } from "lucide-react";
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
        <NavigationV2 />
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
                    Is your foundation built to support your goals for the next two decades? Ensure your movement patterns can match your ambitions.
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
                    The Functional Gap
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  Every athlete has what DNS founder <a href="https://www.rehabps.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Professor Pavel Kolář</a> calls a <strong className="text-foreground">functional gap</strong>. This is the precise moment when the demands of your activity exceed your deep stabilizing system's capacity to maintain control.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Once you enter this gap, your brain defaults to "primitive" compensatory strategies. You can still perform. But instead of load being managed by the appropriate muscular chains, it is shunted into your discs, joint capsules, and tendons.
                </p>
                <p className="text-lg text-foreground font-medium">
                  While performance may be preserved in the short term, you are essentially "borrowing" from your joint health to pay for your performance — a primary driver of chronic overuse injuries.
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
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Stop the Leaks: Efficiency in Movement</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">
                    In the DNS framework, we look for what we call <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3578435/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"><strong>"force leakage."</strong></a> This is when the energy you generate to move — whether you're pedaling, climbing, or running — dissipates through your joints instead of being directed into your performance. Your lower back, knees, and hips end up absorbing "leaked" force they weren't designed to carry.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    To fix this, we train the <em>punctum fixum</em> — a Latin term for a "fixed point." Think of it as a solid anchor. Before your arms or legs move, your core must automatically stiffen to create a stable platform. When that platform is rock-solid, power transfers cleanly. When it's soft, your effort simply leaks away into your joints.
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
                    Accessing Your Original Blueprint
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    DNS is based on developmental kinesiology — the study of how we moved in our first year of life. As infants, we didn't go to the gym; our nervous system naturally "unlocked" stabilization patterns as we learned to roll, crawl, and sit.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Over time — due to injuries, desk jobs, or specialized sports — we often lose access to these "factory settings." Our brain starts using compensatory shortcuts. DNS uses those same developmental positions from your first year of life to "re-boot" your system. We aren't just building muscle; we are re-establishing the connection of muscle patterns that should be running in the background automatically.{" "}
                    <a
                      href="/what-is-dns"
                      className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors font-medium"
                    >
                      Learn More
                    </a>
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
                    What Happens in a Session
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
                    DNStrainer offers private, one-on-one sessions. DNS is directly dependent on the quality of your movement.
                  </p>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    DNS exercises look simple, but the difference between doing the movement with the right quality is subtle. Without someone watching and correcting in real time, it's easy to perform the exercise while your nervous system still uses the old compensatory pattern. A practitioner can detect that and help you find the correct activation.
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
                  In a session, Eva looks at:
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Activity,
                      title: "Movement Patterns",
                    },
                    {
                      icon: Wind,
                      title: "Breathing & Stabilization",
                    },
                    {
                      icon: Eye,
                      title: "Real-Time Correction",
                    },
                  ].map((item, i) => (
                    <Card key={i} className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 mx-auto">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground">{item.title}</h4>
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
                <p className="text-lg mt-6 mb-2">
                  <a
                    href="/what-is-dns"
                    className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors font-medium"
                  >
                    Learn more about DNS
                  </a>
                </p>
                <p className="text-lg mb-2">
                  <a
                    href="/about"
                    className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors font-medium"
                  >
                    About Eva
                  </a>
                </p>
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
