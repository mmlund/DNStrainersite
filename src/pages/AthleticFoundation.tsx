import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, Zap, Target, Trophy } from "lucide-react";
import stabilityDiagram from "@/assets/good-vs-poor-stability.jpg";
import surferImg from "@/assets/surfer-wave.jpg";
import sprinterImg from "@/assets/sprinter-blocks.webp";
import foundationVideo from "@/assets/dns-athletic-foundation.mp4";

const AthleticFoundation = () => {
  return (
    <>
      <SEOHead
        title="Athletic Performance & Longevity | DNS Foundation Training North Vancouver"
        description="Build the movement architecture to support 20 more years of trail running, mountain biking, skiing, and climbing. Private DNS performance audits in North Vancouver with Eva Andersson."
        canonical="/the-athletic-foundation"
        keywords="athletic performance North Vancouver, DNS for athletes, trail running stability, mountain bike core, ski longevity, climbing performance, force leakage, Pavel Kolar, Peter Attia DNS, Eva Andersson"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "The Athletic Foundation", url: "/the-athletic-foundation" },
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
                    Performance & Longevity
                  </p>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Athletic Performance & Longevity: The DNS Foundation
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Build a foundation your training cannot create on its own.
                  </p>
                  <Button size="lg" asChild>
                    <a href="/book-session">Book Your Athletic Movement Audit</a>
                  </Button>
                </div>
                <div className="bg-[#e8eeef] rounded-lg overflow-hidden">
                  <img
                    src={sprinterImg}
                    alt="Sprinter set in starting blocks demonstrating athletic stabilization"
                    className="w-full mix-blend-multiply"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* North Shore Intro */}
          <section className="py-20">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-muted-foreground">
                  For the trail runners, mountain bikers, skiers, and climbers of the North Shore, fitness is rarely the problem. You have the strength and the drive—but is your <strong className="text-foreground">"movement architecture"</strong> capable of supporting your goals for the next 20 years?
                </p>
              </div>
            </div>
          </section>

          {/* Functional Threshold */}
          <section className="py-20 bg-muted/30">
            <div className="container px-4">
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-[#e8eeef] rounded-lg overflow-hidden order-2 md:order-1">
                  <img
                    src={surferImg}
                    alt="Surfer in the barrel of a wave demonstrating dynamic stability under load"
                    className="w-full mix-blend-multiply"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Beyond the "Functional Threshold"
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    Every athlete has what Professor Pavel Kolář calls a <strong className="text-foreground">Functional Threshold</strong>. This is the limit at which your deep stabilizing system can keep up with the demands of your sport.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    When you push past this threshold, your brain defaults to "crude" compensatory patterns. You can still perform, but you are now building high-level performance on an immature foundation.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    <strong className="text-foreground">The Result?</strong> The load is misallocated. Instead of being absorbed by your muscles, it is forced into your discs, joint capsules, and tendons. In the short term, you're fast. In the long term, it is a recipe for injury.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Force Leakage */}
          <section className="py-20">
            <div className="container px-4">
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <Zap className="w-12 h-12 text-primary mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Stop "Force Leakage"
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    Longevity physician Peter Attia, a prominent advocate of DNS, identifies a key performance killer: <strong className="text-foreground">Force Leakage</strong>.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    This is the dissipation of effort through joints that were never designed to carry it—your lower back, knees, and hips—instead of transmitting that power cleanly to the ground or the pedals.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Stability is the cornerstone of power. At DNStrainer, we use DNS to retrain your <strong className="text-foreground">Central Stabilizing System</strong>. This ensures that before your limbs move, your core stiffens the "abdominal cylinder" automatically. This creates a <em>Punctum Fixum</em> (fixed point)—a stable platform that allows your limbs to produce maximum power without shearing stress on your spine.
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

          {/* Proven at the Highest Level */}
          <section className="py-20 bg-muted/30">
            <div className="container px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <Trophy className="w-12 h-12 text-primary mx-auto mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Proven at the Highest Level
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    DNS is the "secret weapon" used by elite athletes to extend their careers and recover from "career-ending" imbalances:
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Ester Ledecká",
                      sport: "Skiing & Snowboarding",
                      description:
                        "After a lumbar disc herniation at age 18, DNS was used to change her brain's movement control. She went on to win double Olympic Gold in two different sports, proving that corrected patterns can handle extreme athletic stress.",
                    },
                    {
                      name: "Jaromír Jágr",
                      sport: "Ice Hockey",
                      description:
                        "One of the greatest hockey players in history maintained his elite performance into his late 40s by focusing on the quality of his movement foundation, not just strength.",
                    },
                    {
                      name: "Jan Železný",
                      sport: "Javelin (World Record Holder)",
                      description:
                        "The world-record javelin thrower sustained an extreme career into his late 30s through the continual optimization of his stabilization mechanics.",
                    },
                  ].map((athlete, i) => (
                    <Card key={i} className="p-6 border-2 hover:border-primary transition-all">
                      <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">{athlete.sport}</p>
                      <h3 className="text-xl font-bold text-foreground mb-3">{athlete.name}</h3>
                      <p className="text-muted-foreground">{athlete.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Private Audit */}
          <section className="py-20">
            <div className="container px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Why a Private Athletic Assessment?
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    It is hard to train your stabilizing system in a group class. This is a "feed-forward" mechanism controlled subconsciously by your nervous system.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                  In your 1-on-1 Performance Audit, we investigate:
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Target,
                      title: 'The "Weak Link"',
                      description: "We identify where your force is leaking during sport-specific movements.",
                    },
                    {
                      icon: Activity,
                      title: "Intra-Abdominal Pressure",
                      description: "We ensure your diaphragm is functioning as both a breathing and a postural muscle simultaneously—critical for North Shore climbs and descents.",
                    },
                    {
                      icon: Zap,
                      title: "Neuromuscular Integrity",
                      description: "We move beyond 'strengthening' to 'retraining,' ensuring your brain chooses the most efficient movement pattern every time you hit the trail.",
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

          {/* CTA */}
          <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  High Performance for the Next 20 Years
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Don't wait for an injury to prove your foundation is misaligned. Shift your focus from managing symptoms to building a system that prevents them.
                </p>
                <Button size="lg" asChild>
                  <a href="/book-session">Book Your Athletic Movement Audit</a>
                </Button>
                <p className="text-sm text-muted-foreground mt-6">
                  Private 1-on-1 Sessions in North Vancouver
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

export default AthleticFoundation;
