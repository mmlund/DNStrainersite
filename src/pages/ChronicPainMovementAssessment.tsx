import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Brain, Target, Eye, Activity } from "lucide-react";
import painMap from "@/assets/musculoskeletal-pain-map.png";
import assessmentImage from "@/assets/movement-assessment-quadruped.jpg";
import assessmentVideo from "@/assets/movement-assessment-video.mp4";

const ChronicPainMovementAssessment = () => {
  return (
    <>
      <SEOHead
        title="Chronic Pain Movement Assessment North Vancouver | DNS Clinical Audit | Eva Andersson"
        description="Stop the pain treatment loop. Individualized DNS clinical movement assessment in North Vancouver uncovers the stabilization architecture driving recurring back, neck, shoulder, and hip pain."
        canonical="/chronic-pain-movement-assessment"
        keywords="chronic pain assessment North Vancouver, DNS clinical movement audit, recurring back pain, Prague School rehabilitation, stabilization architecture, Eva Andersson"
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
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                  Beyond Symptom Management
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Why Your Pain May Keep Coming Back
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  If you have tried many different things—and the pain still returns—it is time to look at the <strong className="text-foreground">stabilization architecture</strong> of your nervous system.
                </p>
                <Button size="lg" asChild>
                  <a href="/book-session">Book Your Individualized DNS Assessment</a>
                </Button>
              </div>
            </div>
          </section>

          {/* The Treatment Loop */}
          <section className="py-20">
            <div className="container px-4">
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    The "Treatment Loop" May End Here
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    You have likely spent years managing your symptoms. You get temporary relief, but within weeks or months, the same pattern in your lower back, neck, shoulder, or hip reasserts itself.
                  </p>
                  <p className="text-lg font-semibold text-foreground mb-4">
                    You are not broken—you are compensating.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Many traditional treatments, that I also use, focus on where you feel the pain. At DNStrainer, we use an individualized clinical assessment to investigate <em>why</em> your body is loading that area incorrectly in the first place.
                  </p>
                </div>
                <div className="bg-[#e8eeef] rounded-lg p-6">
                  <img
                    src={painMap}
                    alt="Diagram of common musculoskeletal pain locations including neck, shoulder, back, hip, leg, and foot"
                    className="w-full mix-blend-multiply"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Core Philosophy */}
          <section className="py-20 bg-muted/30">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                  The Core Philosophy
                </h2>
                <p className="text-xl text-primary font-semibold text-center mb-10 italic">
                  "The source of pain may not be the cause of pain."
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  We utilize the principles of the Prague School of Rehabilitation, founded on the groundbreaking work of Professor Vladimir Janda and developed further.
                </p>
                <Card className="p-8 border-l-4 border-l-primary bg-card">
                  <p className="text-lg text-foreground italic leading-relaxed">
                    "Janda argued that the nervous system and musculoskeletal system cannot be separated clinically—they are one functional unit. When the brain organizes movement suboptimally, predictable patterns of muscle tightness and weakness develop. The place where you feel pain is usually the area being overloaded, not the area causing the overloading."
                  </p>
                </Card>
              </div>
            </div>
          </section>

          {/* Two People, Same Pain */}
          <section className="py-20">
            <div className="container px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                  Why Two People with the Same Pain May Need Different Solutions
                </h2>
                <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                  Because every body is unique, an identical-looking lower back pain could be driven by completely different "weak links":
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      label: "Case A",
                      title: "Pelvic Floor Activation",
                      description: "Insufficient activation of the pelvic floor during breathing.",
                    },
                    {
                      label: "Case B",
                      title: "Scapular & Thoracic",
                      description: "Poor scapular stability combined with a restricted thoracic spine.",
                    },
                    {
                      label: "Case C",
                      title: "Diaphragm Dysfunction",
                      description: "A seated posture that has impaired the diaphragm's ability to function as both a breathing and postural muscle.",
                    },
                  ].map((item, i) => (
                    <Card key={i} className="p-6 border-2 hover:border-primary transition-all">
                      <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">{item.label}</p>
                      <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </Card>
                  ))}
                </div>
                <p className="text-lg text-muted-foreground text-center mt-10 max-w-3xl mx-auto">
                  Without an individualized assessment of how your brain organizes movement, treating the "symptom" is only a temporary fix.
                </p>
              </div>
            </div>
          </section>

          {/* One-on-One Clinical Advantage */}
          <section className="py-20 bg-muted/30">
            <div className="container px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    The One-on-One Clinical Advantage
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    DNStrainer does not offer group classes or generic exercise plans. Because DNS is a detail-sensitive framework, it usually requires a <strong className="text-foreground">practitioner-led, one-on-one assessment</strong>.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                  <div className="bg-[#e8eeef] rounded-lg overflow-hidden">
                    <video
                      src={assessmentVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full mix-blend-multiply"
                    />
                  </div>
                  <div className="bg-[#e8eeef] rounded-lg overflow-hidden">
                    <img
                      src={assessmentImage}
                      alt="Eva demonstrating a quadruped DNS assessment position with controlled reach"
                      className="w-full mix-blend-multiply"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                  What we investigate during your Clinical Movement Audit:
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Target,
                      title: "Movement Patterns",
                      description: "We look at your weight-bearing patterns to find the weak link in your stabilizing chain.",
                    },
                    {
                      icon: Brain,
                      title: "Nervous System Organization",
                      description: "Can your abdominal wall resist pressure symmetrically while you breathe? Can your shoulder blade remain centered when supporting weight?",
                    },
                    {
                      icon: Eye,
                      title: "Real-Time Correction",
                      description: "Eva provides constant visual and manual cueing to ensure your brain 'finds' the correct stabilization pattern before the movement begins. You may need help and guidance to feel what is right.",
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

          {/* In Expert Hands */}
          <section className="py-20">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Activity className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  In Expert Hands: Practitioner-Led Care
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  You deserve a practitioner who explains the mechanism of your recovery.
                </p>
                <p className="text-lg text-muted-foreground">
                  <strong className="text-foreground">Eva Andersson</strong> is a Prague School Certified practitioner who bridges the gap between clinical investigation and movement retraining. By focusing on neuromuscular integrity and movement patterns rather than just muscle strength, Eva helps you stop "managing" your pain and start addressing the stabilization architecture that keeps it locked in place.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Ready to Stop Treating the Symptom?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  If the same body part keeps going wrong despite treatment, it is time to ask why the pattern keeps returning.
                </p>
                <Button size="lg" asChild>
                  <a href="/book-session">Book Your Individualized DNS Assessment</a>
                </Button>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20">
            <div className="container px-4">
              <div className="max-w-3xl mx-auto">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2 text-center">
                  Clinical Deep-Dive into Your Movement Architecture
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
                  FAQ for the Chronic Sufferer
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left text-lg font-semibold">
                      I've tried DNS exercises from YouTube. Why is this different?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      DNS is not a list of exercises; it is a clinical method. Without a practitioner to detect the subtle compensations your brain uses to "cheat" the movement, you may simply be reinforcing the same faulty patterns that cause your pain.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left text-lg font-semibold">
                      How is this different from regular Physiotherapy?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      First of all, it may not be—since it is highly dependent on the therapist. Nothing prevents a physiotherapist or a registered massage therapist from also using the DNS method. But in clinical practice this often has a different focus on acute rehab or more medical referral pathways. DNStrainer focuses on global movement retraining. We look at how your nervous system programs movement across your entire body to find the "source" of your overload. We feel that this requires a more dedicated approach.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left text-lg font-semibold">
                      Do I need a referral to start?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      No. Our private sessions are designed for anyone seeking to understand and solve their recurring movement issues through a clinical lens.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
