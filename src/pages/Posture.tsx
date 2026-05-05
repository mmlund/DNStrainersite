import NavigationV2 from "@/components/NavigationV2";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import maleKyphosis from "@/assets/posture-male-kyphosis.png";
import developmentalKinesiology from "@/assets/posture-developmental-kinesiology.png";
import femaleKyphosis from "@/assets/posture-female-kyphosis.png";
import femaleKyphosis2 from "@/assets/posture-female-kyphosis-2.png";

const Posture = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={`DNS and Posture | Why "Sit Up Straight" Doesn't Work | North Vancouver`}
        description="Posture isn't a position you hold through willpower — it's a reflection of whether your stabilization system is working automatically. DNS posture training in North Vancouver with Eva Andersson."
        canonical="/posture"
        keywords="DNS posture, posture correction North Vancouver, why posture correction doesn't work, posture and stabilization, posture training North Vancouver, DNS posture training, Eva Andersson"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Posture", url: "/posture" },
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          name: "DNS and Posture: Why Sit Up Straight Doesn't Work Long-Term",
          description:
            "Posture isn't a position you hold through willpower — it's a reflection of whether your stabilization system is working automatically.",
          url: "https://dnstrainer.com/posture",
          about: {
            "@type": "MedicalCondition",
            name: "Poor Posture",
            associatedAnatomy: {
              "@type": "AnatomicalStructure",
              name: "Spine",
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
                  DNS and Posture
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  DNS and Posture: Why "Sit Up Straight" Doesn't Work Long-Term
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  You've probably tried to fix your posture before. Pulled your shoulders back. Tucked your chin. Maybe bought a standing desk or a posture corrector. It works for a while — then the moment you stop thinking about it, you're back where you started.
                </p>
                <p className="text-lg text-foreground font-medium mb-8">
                  That's not a willpower problem. It may be a stabilization problem.
                </p>
                <Button size="lg" asChild>
                  <a href="/book-session">Book a One-on-One DNS Assessment</a>
                </Button>
              </div>
              <div className="bg-[#e8eeef] rounded-lg p-6">
                <img
                  src={femaleKyphosis2}
                  alt="Side-by-side comparison of kyphotic (slouched) posture and upright posture in a woman"
                  className="w-full mix-blend-multiply rounded"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Posture Isn't a Position */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Posture Isn't a Position — It's a System
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Here's the thing that changes how you think about this: posture isn't really about holding a shape. It's a reflection of how your nervous system organizes stabilization in the background.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                When your deep stabilizing muscles are doing their job well — automatically, without you thinking about it — upright posture happens with relatively little effort. Your skeleton stacks efficiently. Your muscles don't have to overwork to keep you from collapsing forward.
              </p>
              <p className="text-lg text-muted-foreground">
                When that system isn't working well, your body still has to stay upright somehow. So it compensates. Superficial muscles take over — the upper trapezius, the back extensors, the neck muscles. They can do the job, but they're not designed for it all day long. That's when you start feeling stiff, tight, and sore.
              </p>
            </div>
          </div>
        </section>

        {/* Willpower fades */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-[#e8eeef] rounded-lg p-6 order-2 md:order-1">
                <img
                  src={maleKyphosis}
                  alt="Side-by-side comparison of upright posture and kyphotic (slouched) posture in a man"
                  className="w-full mix-blend-multiply rounded"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Willpower-Based Corrections Fade
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  When someone tells you to "sit up straight," what typically happens is you engage the muscles you <em>can</em> consciously control — you pull your shoulders back, tighten your back, lift your chest. This looks like good posture from the outside.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  But the deep stabilizing system — the diaphragm, the deep abdominal wall, the pelvic floor — is still not doing its part. You're essentially holding a posture on top of a system that hasn't changed. The moment your attention goes elsewhere, the old pattern reasserts itself.
                </p>
                <p className="text-lg text-muted-foreground">
                  This is why postural corrections based purely on "hold this position" tend not to last. The underlying motor program — how your brain organizes the task of staying upright — hasn't been addressed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What DNS Looks At */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                What DNS Looks At Differently
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
                <a href="/what-is-dns" className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">Dynamic Neuromuscular Stabilization</a> approaches posture as an output of the whole stabilization system, not as an isolated thing to correct. The assessment starts from the inside out:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Is the diaphragm contributing to stability?",
                    text: "If your breathing pattern is chest-dominant, the diaphragm's stabilization role is reduced. Without that internal support, the spine has to rely on the outer muscles to stay upright — and those muscles fatigue.",
                  },
                  {
                    title: "Are the deep abdominal muscles active?",
                    text: "Not in the \"ab exercise\" sense — but in the sense of creating even intra-abdominal pressure that supports the spine from the inside. Many people with poor posture have plenty of superficial abdominal strength but very little deep stabilization happening automatically.",
                  },
                  {
                    title: "What's happening at the ribcage and pelvis?",
                    text: "The position of the ribcage relative to the pelvis determines whether the deep system can work. If the ribcage is flared or tilted, the geometry is wrong for the diaphragm and abdominal wall to function optimally — no amount of cueing \"engage your core\" will fix that.",
                  },
                ].map((c, i) => (
                  <Card key={i} className="p-6 border-2 hover:border-primary transition-all">
                    <h3 className="text-lg font-bold text-foreground mb-3">{c.title}</h3>
                    <p className="text-muted-foreground">{c.text}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Developmental Angle */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  The Developmental Angle
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Here's something interesting: as infants, we all developed posture automatically. No one taught a baby to sit upright. The nervous system matured, the stabilizing muscles activated in the right sequence, and sitting happened — with perfect alignment.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  DNS uses this principle. The positions we moved through in our first year of life — lying on the back, on the belly, sitting, transitioning to all fours — each required specific stabilization patterns. Those patterns are still in the nervous system. In many adults, they've been overridden by years of compensatory habits, but they can often be re-accessed.
                </p>
                <p className="text-lg text-muted-foreground">
                  The exercises in DNS look surprisingly simple — often resembling infant positions. But the goal isn't the position itself. It's to re-activate the stabilization pattern that should accompany that position. When those patterns start working again, posture tends to improve as a consequence — not as something you have to consciously maintain.
                </p>
              </div>
              <div className="bg-[#e8eeef] rounded-lg p-6">
                <img
                  src={developmentalKinesiology}
                  alt="Hand-drawn illustration of developmental kinesiology stages from supine to prone to quadruped"
                  className="w-full mix-blend-multiply rounded"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Practical signs */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What This Means Practically
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                If your posture bothers you — or if you have pain that seems connected to how you sit or stand — it may be worth looking at whether the stabilization system underneath is functioning well.
              </p>
              <p className="text-lg text-foreground font-medium mb-4">Some signs that it might not be:</p>
              <ul className="space-y-3 mb-6">
                {[
                  "You can correct your posture temporarily, but it doesn't hold",
                  "You feel like you're fighting gravity all day",
                  "Your neck, upper back, or shoulders are chronically tight despite stretching",
                  "You feel better when you're moving, worse when you're still",
                ].map((s, i) => (
                  <li key={i} className="flex gap-3 text-lg text-muted-foreground">
                    <span className="text-primary font-bold">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-muted-foreground">
                These aren't diagnostic — many things can cause these patterns. But they're the kind of presentation where looking at the stabilization system sometimes turns up something useful.
              </p>
            </div>
          </div>
        </section>

        {/* How a Session Works */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                How a Session Works
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                In a one-on-one session, <a href="/about" className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">Eva</a> assesses how your deep system is functioning — whether the diaphragm is stabilizing (see <a href="/dns-breathing-training" className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">DNS breathing training</a>), whether intra-abdominal pressure is being generated evenly, how your ribcage and pelvis relate to each other.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                From there, the work is about re-establishing correct patterns through specific positions and cues. Some people feel the difference in one session. For others, it takes a few sessions plus daily practice (usually 10–15 minutes) before the new pattern starts to become the default.
              </p>
              <p className="text-lg text-muted-foreground">
                The goal isn't to give you something to think about all day. It's the opposite — to retrain the system so that good posture happens without effort, the way it did when you were one year old.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Curious?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                If you'd like to find out whether your stabilization patterns are playing a role in your posture (or in pain that seems related to it), a single session can often clarify that.
              </p>
              <Button size="lg" asChild>
                <a href="/book-session">Book a One-on-One DNS Assessment</a>
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
      </main>
      <Footer />
    </div>
  );
};

export default Posture;
