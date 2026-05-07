import NavigationV2 from "@/components/NavigationV2";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import coreMuscles from "@/assets/core-stability-muscles.png";
import corePrinciples from "@/assets/core-stability-principles.png";
import breathingSpinal from "@/assets/core-stability-breathing-spinal.png";

const CoreStability = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={`Core Stability | It's Not About How Strong Your Core Is | North Vancouver`}
        description="Core stability is about timing and motor control, not muscle strength. DNS retrains the automatic activation your nervous system should be doing. One-on-one sessions in North Vancouver with Eva Andersson."
        canonical="/core-stability"
        keywords="DNS core stability, core stability training, core stability vs core strength, deep core activation, DNS core exercises, core stability North Vancouver, Eva Andersson"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Core Stability", url: "/core-stability" },
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          name: "Core Stability: It's Not About How Strong Your Core Is",
          description:
            "Core stability is about timing and motor control of the deep stabilizing system, not raw muscle strength. DNS retrains the automatic feed-forward activation pattern.",
          url: "https://dnstrainer.com/core-stability",
          about: {
            "@type": "MedicalCondition",
            name: "Core Instability",
            associatedAnatomy: {
              "@type": "AnatomicalStructure",
              name: "Lumbar Spine",
            },
          },
          mainContentOfPage: {
            "@type": "WebPageElement",
            cssSelector: "main",
          },
          specialty: {
            "@type": "MedicalSpecialty",
            name: "Rehabilitation",
          },
          lastReviewed: "2026-05-05",
        }}
      />
      <NavigationV2 />
      <main className="pt-16 flex-1">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                  DNS and Core Stability
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Core Stability: It's Not About How Strong Your Core Is
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  You've probably been training your core — there's no shortage of exercises out there. And they're not bad exercises. But here's something that often gets lost in the conversation: core <em>stability</em> isn't really about how strong those muscles are. It's about when and how they activate.
                </p>
                <Button size="lg" asChild>
                  <a href="/book-session">Book a One-on-One DNS Assessment</a>
                </Button>
              </div>
              <div className="bg-[#e8eeef] rounded-lg p-6">
                <img
                  src={coreMuscles}
                  alt="Anatomical sketch showing core musculature from front, side, and back views"
                  className="w-full mix-blend-multiply rounded"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Strength vs Stability */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Strength and Stability Are Not the Same Thing
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                This is the part that surprises most people. You can have very strong core muscles and still have poor core stability. Research has shown that the difference between backs that function well and backs that don't often comes down to timing — about 20 milliseconds of difference in when the deep stabilizers fire relative to movement.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                That's not a strength issue. It's a motor control issue — the nervous system isn't organizing the sequence correctly.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Your "deep stabilizing muscles" (the diaphragm, the deep abdominal wall, the pelvic floor as a system) are supposed to activate automatically, a fraction of a second <em>before</em> you move. Before you reach, step, lift, or twist. This is called feed-forward activation — your brain anticipates the movement and pre-stiffens the trunk to create a stable base.
              </p>
              <p className="text-lg text-muted-foreground">
                When this works well, it's invisible. You don't feel it happening. When it doesn't work well, other muscles compensate — and over time, that can lead to overload, stiffness, or pain in areas that are picking up the slack.
              </p>
            </div>
          </div>
        </section>

        {/* Exercises miss the point */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Exercises Can Look Right but Miss the Point
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Here's a common scenario: someone does a dead bug with good form. Their spine stays neutral, their legs move smoothly, it looks correct from the outside. But their deep stabilizing system may not actually be doing the work — the superficial muscles (rectus abdominis, external obliques) might be carrying the load instead.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                The exercise gets done. It even feels hard. But the pattern underneath — <em>how</em> the nervous system organizes the stabilization — hasn't necessarily changed.
              </p>
              <p className="text-lg text-muted-foreground">
                This isn't a problem with the exercise itself. It's a problem with what's happening at the level of motor control. And it's very difficult to detect on your own, because the compensatory pattern feels normal to you — it's been your default for years.
              </p>
            </div>
          </div>
        </section>

        {/* Hollowing vs Bracing */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  The Hollowing vs. Bracing Question
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  If you've looked into core training at all, you've probably encountered conflicting advice. "Draw your navel in toward your spine." "No — brace like you're about to be punched." Both cues get taught confidently. Both have research supporting them. It's confusing.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  The DNS perspective is different from both. It doesn't start with a conscious cue at all. The goal is to restore the <em>automatic</em> activation that should be happening before you even think about it.
                </p>
                <p className="text-lg text-muted-foreground">
                  In a well-functioning system, you don't need to hollow or brace — the intra-abdominal pressure regulation happens on its own, driven by the diaphragm descending and the deep muscles co-activating in response. It's not something you consciously manage. It's something your nervous system does for you — if the pattern is intact.
                </p>
              </div>
              <div className="bg-[#e8eeef] rounded-lg p-6">
                <img
                  src={breathingSpinal}
                  alt="Diagram of DNS breathing and spinal connection showing optimal versus dysfunctional intra-abdominal pressure strategies"
                  className="w-full mix-blend-multiply rounded"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What DNS Adds */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                What DNS Adds to the Picture
              </h2>
              <p className="text-lg text-muted-foreground mb-6 text-center max-w-3xl mx-auto">
                <a href="/what-is-dns" className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">Dynamic Neuromuscular Stabilization</a> looks at core stability as a nervous system issue, not a muscle strength issue.
              </p>
              <div className="bg-[#e8eeef] rounded-lg p-6 mb-10">
                <img
                  src={corePrinciples}
                  alt="Three illustrated panels showing developmental kinesiology foundation, intra-abdominal pressure regulation, and clinical applications of DNS"
                  className="w-full mix-blend-multiply rounded"
                />
              </div>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-muted-foreground mb-4">
                  The approach is based on a simple observation: every healthy infant develops perfect core stabilization automatically during the first year of life — without being taught, without exercises, without cues. The nervous system matures and the stabilization patterns emerge in a predictable sequence.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Those patterns are still in your nervous system. But for many adults, they've been "overridden" — by injuries, prolonged sitting, habitual movement patterns, or training that emphasized strength without addressing coordination.
                </p>
                <p className="text-lg text-muted-foreground">
                  DNS uses developmental positions (positions we all moved through as infants) to re-access these patterns. The exercises look deceptively simple. But the goal isn't to "work" the muscles — it's to change <em>how your nervous system organizes</em> the stabilization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What this looks like in practice */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                What This Looks Like in Practice
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
                In a session, <a href="/about" className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">Eva</a> assesses how your stabilizing system is actually functioning — not how strong it is, but how it's coordinating.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {[
                  {
                    title: "Timing and sequencing",
                    text: "Are your deep stabilizers activating before movement begins, or is the superficial system doing all the work?",
                  },
                  {
                    title: "Breathing and stabilization together",
                    text: "Can your diaphragm do both jobs simultaneously? Many people lose stabilization the moment they need to breathe under effort. See DNS breathing training.",
                  },
                  {
                    title: "Real-time feedback",
                    text: "Eva uses manual and visual cues to help your nervous system find the correct pattern. The difference between \"doing the exercise\" and \"activating the system\" is often subtle — sometimes it takes hands-on guidance to feel what correct activation actually is.",
                  },
                ].map((c, i) => (
                  <Card key={i} className="p-6 border-2 hover:border-primary transition-all">
                    <h3 className="text-lg font-bold text-foreground mb-3">{c.title}</h3>
                    <p className="text-muted-foreground">{c.text}</p>
                  </Card>
                ))}
              </div>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-muted-foreground">
                  The training itself is initially slow and simple. The point is to establish correct motor patterns at low load, then gradually build complexity. Typically 10–15 minutes of daily practice is needed until the pattern becomes automatic. Learn more about <a href="/dns-breathing-training" className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">DNS breathing training</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who this is relevant for */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Who This Is Relevant For
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                This applies broadly — whether your interest is resolving pain, improving athletic performance, or just understanding why your core training isn't translating into the stability you'd expect.
              </p>
              <p className="text-lg text-foreground font-medium mb-4">
                Some signs that motor control might be part of your picture:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "You train your core regularly but still feel unstable or get recurring pain",
                  "You can plank for minutes but your back still bothers you",
                  "You've been told you have a \"weak core\" despite being strong",
                  "Your stability disappears under fatigue or when you add speed",
                ].map((s, i) => (
                  <li key={i} className="flex gap-3 text-lg text-muted-foreground">
                    <span className="text-primary font-bold">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-muted-foreground">
                These aren't diagnostic — but they're the kind of situation where looking at <em>how</em> the system is coordinating, not just <em>whether</em> it's strong enough, can sometimes reveal something useful.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Want to Find Out What's Actually Happening?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                If you're curious whether your core is stabilizing effectively — not just working hard — a single session can often clarify that. Eva can assess your timing, your breathing pattern, and how your deep system is coordinating, and tell you what's actually going on underneath the exercises you're already doing.
              </p>
              <Button size="lg" asChild>
                <a href="/book-session">Book a Session</a>
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
                  href="/posture"
                  className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors font-medium"
                >
                  Posture and stabilization
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
      </main>
      <Footer />
    </div>
  );
};

export default CoreStability;
