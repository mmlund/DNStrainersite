import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Eye, Wind, Activity } from "lucide-react";
import painCollage from "@/assets/cpma-pain-collage.png";
import developmentalFoundation from "@/assets/cpma-developmental-foundation.png";
import dnsNapkin from "@/assets/cpma-dns-napkin.png";
import assessmentImage from "@/assets/movement-assessment-quadruped.jpg";

const ChronicPainMovementAssessment = () => {
  return (
    <>
      <SEOHead
        title="Chronic Pain Movement Assessment | DNS North Vancouver | Eva Andersson"
        description="When pain keeps coming back, the underlying stabilization pattern may not have been addressed. Book a one-on-one DNS movement assessment in North Vancouver."
        canonical="/chronic-pain-movement-assessment"
        keywords="chronic pain assessment North Vancouver, DNS movement assessment, recurring back pain, Prague School, Eva Andersson"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Chronic Pain Movement Assessment", url: "/chronic-pain-movement-assessment" },
        ]}
      />

      <div className="min-h-screen">
        <Navigation />
        <main className="pt-16">
          {/* Hero */}
          <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="container px-4">
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                    DNS Movement Assessment
                  </p>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    When Pain Keeps Coming Back
                  </h1>
                  <p className="text-lg text-muted-foreground mb-4">
                    You have probably tried a number of things already. Maybe you've had some relief — but then, weeks or months later, the same pattern in your lower back, neck, shoulder, or hip shows up again.
                  </p>
                  <p className="text-lg text-muted-foreground mb-8">
                    That's frustrating. And it doesn't mean something is fundamentally wrong with you. It may mean that imbalances in your muscle patterns haven't been addressed yet.
                  </p>
                  <Button size="lg" asChild>
                    <a href="/book-session">Book a One-on-One DNS Assessment</a>
                  </Button>
                </div>
                <div className="bg-[#e8eeef] rounded-lg p-6">
                  <img
                    src={painCollage}
                    alt="Sketches of common chronic pain areas including wrist, shoulder, neck, knee, back and hip"
                    className="w-full mix-blend-multiply rounded"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* What DNS Looks At */}
          <section className="py-20">
            <div className="container px-4">
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-[#e8eeef] rounded-lg p-6 order-2 md:order-1">
                  <img
                    src={developmentalFoundation}
                    alt="Illustration showing innate developmental movement foundation in an infant and reconnecting to stability as an adult"
                    className="w-full mix-blend-multiply rounded"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    What DNS Looks At
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    Dynamic Neuromuscular Stabilization (DNS) is based on a fairly simple idea: the way your brain organizes movement matters.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    When we're infants, our nervous system develops stabilization patterns automatically — we all reach milestones like sitting and crawling in roughly the same way, with efficient muscle coordination. For various reasons — injuries, poor postures, stress, habits — those patterns can get disrupted over time. When they do, the body compensates. And those compensations can lead to areas being repeatedly overloaded.
                  </p>
                  <p className="text-lg text-foreground font-medium">
                    DNS uses an individualized assessment to look at your biomechanical function.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why same spot */}
          <section className="py-20 bg-muted/30">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                  Why Does the Pain Come Back?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 text-center">
                  Two people with identical-looking lower back pain might have completely different reasons for it.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {[
                    { label: "Person 1", text: "Poor posture." },
                    { label: "Person 2", text: "Poor core." },
                    { label: "Person 3", text: "Poor ergonomics." },
                  ].map((c, i) => (
                    <Card key={i} className="p-6 border-2 hover:border-primary transition-all">
                      <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">{c.label}</p>
                      <p className="text-muted-foreground">{c.text}</p>
                    </Card>
                  ))}
                </div>
                <p className="text-lg text-muted-foreground text-center">
                  Without looking at how your nervous system organizes movement as a whole, you may only achieve temporary relief.
                </p>
              </div>
            </div>
          </section>

          {/* What Happens in a Session */}
          <section className="py-20">
            <div className="container px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    What Happens in a Session
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    DNStrainer offers private, one-on-one sessions. DNS is directly dependent on the quality of your movement.
                  </p>
                </div>

                <div className="bg-[#e8eeef] rounded-lg p-6 mb-12 max-w-3xl mx-auto">
                  <video
                    src="/videos/cpma-3m-supine.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full mix-blend-multiply rounded"
                  />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                  In a session, Eva looks at:
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Activity,
                      title: "Movement Patterns",
                      description: "How you bear weight and where the 'weak link' in your stabilizing chain might be.",
                    },
                    {
                      icon: Wind,
                      title: "Breathing & Stabilization",
                      description: "Whether your diaphragm is contributing to both breathing and postural stability. There's good clinical evidence that people with reduced ability to use the diaphragm for both functions are more likely to experience back pain.",
                    },
                    {
                      icon: Eye,
                      title: "Real-Time Correction",
                      description: "Eva provides visual and manual cues to help your nervous system find the correct stabilization pattern. Sometimes you need guidance to feel what 'right' actually feels like.",
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

          {/* It Starts with Breathing */}
          <section className="py-20 bg-muted/30">
            <div className="container px-4">
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    It Often Starts with Breathing
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    A common factor in poor stability is an incorrect breathing pattern. The diaphragm isn't just for breathing — it also plays an important role in stabilization.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    When it contracts properly, it stimulates the pelvic floor and abdominal wall muscles to co-activate, creating intra-abdominal pressure that supports the spine.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    If this isn't happening well, other muscles have to pick up the slack — and they often aren't designed for that job long-term.
                  </p>
                </div>
                <div className="bg-[#e8eeef] rounded-lg p-6">
                  <img
                    src={dnsNapkin}
                    alt="Sketch explaining intra-abdominal pressure, diaphragm and DNS stabilization principles"
                    className="w-full mix-blend-multiply rounded"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* About Eva */}
          <section className="py-20">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  About Eva
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Eva Andersson is certified by the Prague School of Rehabilitation — the group that developed DNS under Professor Pavel Kolář. She focuses on identifying dysfunctional stabilization patterns and helping patients retrain them through specific manual treatment and exercises.
                </p>
                <p className="text-lg text-muted-foreground">
                  The exercises themselves are initially slow and simple — the goal is to establish correct stabilization before adding complexity. Typically, 10–15 minutes of daily practice is needed until the patterns become automatic.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20 bg-muted/30">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left text-lg font-semibold">
                      I've tried DNS exercises from YouTube. How is this different?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      DNS exercises look simple, but the difference between doing the movement and actually activating the correct stabilization pattern is subtle. Without someone watching and correcting in real time, it's easy to perform the exercise while your nervous system still uses the old compensatory pattern. A practitioner can detect that and help you find the correct activation.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left text-lg font-semibold">
                      Do I need a referral to start?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      No. You can book directly.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Ready to Look at This Differently?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  If your pain keeps returning, it may be worth investigating whether your stabilization patterns are part of the picture.
                </p>
                <Button size="lg" asChild>
                  <a href="/book-session">Book a One-on-One DNS Assessment</a>
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

export default ChronicPainMovementAssessment;
