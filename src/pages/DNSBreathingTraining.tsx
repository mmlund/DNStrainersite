import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wind, Activity, AlertCircle, Target, Layers, Hand } from "lucide-react";
import goodVsPoorStability from "@/assets/good-vs-poor-stability.jpg";
import breathingSpinalConnection from "@/assets/breathing-spinal-connection-dns.png";

const DNSBreathingTraining = () => {
  return (
    <>
      <SEOHead
        title="DNS Breathing Training North Vancouver | Diaphragm & Core Stability | Eva Andersson"
        description="Learn how Dynamic Neuromuscular Stabilization breathing retrains the diaphragm for spinal stability and pain relief. Private DNS breathing sessions in North Vancouver."
        canonical="/dns-breathing-training"
        keywords="DNS breathing, diaphragm training, intra-abdominal pressure, 360 breathing, North Vancouver, Eva Andersson, core stability"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "DNS Breathing Training", url: "/dns-breathing-training" },
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
                    DNS Breathing Training
                  </p>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Why Your Diaphragm Does More Than You Think
                  </h1>
                  <p className="text-lg text-muted-foreground mb-4">
                    Most people think of the diaphragm as a breathing muscle — and it is. But it also has a second, less well-known function: it's a key muscle for core stability (spine stability).
                  </p>
                  <p className="text-lg text-muted-foreground mb-8">
                    In Dynamic Neuromuscular Stabilization (DNS), this dual role of the diaphragm is central. When it works well, breathing and stability happen together, automatically. When it doesn't, one function tends to suffer — and that's often where problems begin.
                  </p>
                  <Button size="lg" asChild>
                    <a href="/book-session">Book a One-on-One Session</a>
                  </Button>
                </div>
                <div className="bg-[#e8eeef] rounded-lg p-4">
                  <img
                    src={breathingSpinalConnection}
                    alt="DNS breathing and spinal connection diagram comparing optimal diaphragmatic strategy with dysfunctional chest breathing"
                    className="w-full mix-blend-multiply rounded"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Two Jobs, One Muscle */}
          <section className="py-20">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <Layers className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">Two Jobs, One Muscle</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  When you inhale, the diaphragm descends. If it descends properly — not just in the front, but in all directions — it creates pressure inside the abdominal cavity. This is called <strong className="text-foreground">intra-abdominal pressure (IAP)</strong>.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  That pressure does something important: it stiffen the space around your spine. At the same time, it triggers the pelvic floor and deep abdominal wall to co-activate. Together, these muscles form a cylinder of support around the trunk.
                </p>
                <p className="text-lg text-muted-foreground">
                  This isn't something you have to think about. In a well-functioning system, it happens automatically before you move — before you reach, step, lift, or twist. Your nervous system does it for you. The problem is that for many people, it stops working this way.
                </p>
              </div>
            </div>
          </section>

          {/* How It Gets Disrupted */}
          <section className="py-20 bg-muted/30">
            <div className="container px-4">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-8 justify-center">
                  <AlertCircle className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">How It Gets Disrupted</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
                  There are a number of reasons the diaphragm's stabilization function can become compromised:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      title: "Prolonged sitting",
                      description: "A slouched posture pushes the ribcage down toward the pelvis, limiting the diaphragm's ability to descend fully. Over time, the nervous system adapts to a shallower, chest-dominant pattern.",
                    },
                    {
                      title: "Stress and anxiety",
                      description: "Tend to shift breathing toward the upper chest. The diaphragm still moves, but less effectively, and its stabilization contribution drops.",
                    },
                    {
                      title: "Injury or pain",
                      description: "When something hurts, your body changes how it moves. Breathing patterns often shift as part of that compensation, and they don't always return to normal after the pain resolves.",
                    },
                    {
                      title: "Habitual chest breathing",
                      description: "Some people have simply been breathing this way for so long that their nervous system treats it as the default.",
                    },
                  ].map((item, i) => (
                    <Card key={i} className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </Card>
                  ))}
                </div>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center">
                  The result is the same in each case: the diaphragm does its breathing job (you're still alive, after all), but its stabilization function is reduced. Other muscles have to compensate — and they're often not well-suited for the task long-term.
                </p>
              </div>
            </div>
          </section>

          {/* What Does Correct DNS Breathing Look Like */}
          <section className="py-20">
            <div className="container px-4">
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Wind className="w-8 h-8 text-primary" />
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">What "Correct" DNS Breathing Looks Like</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">
                    DNS breathing isn't about breathing deeper or slower — it's about breathing <em>in the right direction</em>.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    When the diaphragm works fully, you should see expansion in all directions: front, sides, and back of the lower ribcage and abdomen. This is sometimes called <strong className="text-foreground">360-degree expansion</strong>. It's not about pushing your belly out — that's a common misconception. It's about even pressure distribution.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    A useful way to think about it: imagine the trunk as a cylinder. When you breathe in, the entire cylinder should expand slightly — not just the front wall.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    When this works well, the intra-abdominal pressure it generates supports the spine from the inside. Your back muscles don't have to work as hard, and when you move, your core has already "switched on" before the movement begins.
                  </p>
                </div>
                <div className="bg-[#e8eeef] rounded-lg p-4">
                  <img
                    src={goodVsPoorStability}
                    alt="Comparison diagram of good versus poor spinal stability and diaphragm function"
                    className="w-full mix-blend-multiply rounded"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Why This Matters */}
          <section className="py-20 bg-muted/30">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why This Matters</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  There's solid clinical evidence linking diaphragm dysfunction to lower back pain. People who have difficulty using the diaphragm for both breathing and stabilization simultaneously tend to have higher rates of back problems.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  This also matters for performance. If your core doesn't stiffen automatically before you move, force gets lost. Your limbs work harder than they need to, and the load ends up in structures — discs, ligaments, joint capsules — that aren't designed to carry it repeatedly.
                </p>
                <p className="text-lg text-foreground font-medium">
                  For some people, correcting the breathing pattern can have a noticeable effect relatively quickly. For others, it's one piece of a larger puzzle. But it's almost always worth investigating if you have persistent stability or pain issues.
                </p>
              </div>
            </div>
          </section>

          {/* The Gap */}
          <section className="py-20">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <Hand className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">The Gap Between Understanding and Doing</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  Here's the honest part: understanding how DNS breathing works and actually retraining the pattern are two different things.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Some people can read about it, try it, and feel the difference immediately. Others find it surprisingly difficult to change a pattern they've used for years — especially because the diaphragm operates largely below conscious awareness.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  The challenge is that you can <em>think</em> you're doing it correctly while your nervous system is still running the old pattern. It's a bit like trying to correct your own posture in a mirror — you can get close, but you might miss what you can't see.
                </p>
                <p className="text-lg text-muted-foreground">
                  This is why DNS practitioners often use hands-on cues — physically guiding the ribcage or abdomen so you can feel what correct expansion actually feels like. Once you've felt it, it becomes much easier to reproduce.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                  <Activity className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  If You Want to Explore This Further
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  If you're curious about whether your breathing pattern might be affecting your stability or contributing to a pain issue, a single session can often clarify that. Eva assesses how your diaphragm is functioning in different positions and can tell you fairly quickly whether this is a relevant factor for you.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  No commitment beyond that — some people need ongoing work, others just need a few corrections and some exercises to practice at home.
                </p>
                <Button size="lg" asChild>
                  <a href="/book-session">Book a Session</a>
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

export default DNSBreathingTraining;
