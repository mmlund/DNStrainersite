import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, X, Mail, Phone, MapPin } from "lucide-react";
import NavigationV2 from "@/components/NavigationV2";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import crawlInfant from "@/assets/crawl-infant.png";
import crawlAdult from "@/assets/crawl-adult.png";
import babyCrawlReaching from "@/assets/baby-crawl-reaching.png";
import diaphragmIAP from "@/assets/diaphragm-breathing-iap-dns.png";
import movementAssessment from "@/assets/movement-assessment-quadruped.jpg";
import dnsTherapyFemale from "@/assets/dns-therapy-female.png";
import evaImage from "@/assets/eva-andersson.png";
import pillarKinesiology from "@/assets/pillar-developmental-kinesiology.png";
import pillarIAP from "@/assets/pillar-iap-regulation.png";
import pillarClinical from "@/assets/pillar-clinical-applications.png";
import dnsSupineVideo from "@/assets/dns-supine.mp4";
import newNaturalMovementVideo from "@/assets/natural-movement-new.mp4";
import functionalStrengthVideo from "@/assets/functional-strength-video.mp4";
import naturalMovementVideo from "@/assets/natural-movement-video.mp4";
import restoringMovementVideo from "@/assets/dns-shorter.mp4";
import surfer from "@/assets/surfer.png";

const causes = [
  {
    title: "Prolonged sitting",
    text: "A slouched posture limits the diaphragm's ability to descend fully. Over time, the nervous system adapts to a shallower, chest-dominant pattern.",
  },
  {
    title: "Stress and anxiety",
    text: "These tend to shift breathing toward the upper chest. The diaphragm still moves, but less effectively, and its stabilization contribution drops.",
  },
  {
    title: "Injury or pain",
    text: "When something hurts, your body changes how it moves. Breathing patterns often shift as part of that compensation, and they don't always return to normal after the pain resolves.",
  },
];

const pillars = [
  {
    title: "Developmental Kinesiology Foundation",
    text: "DNS is grounded in the predictable movement patterns infants develop in their first year — the blueprint for ideal adult stability.",
    image: pillarKinesiology,
  },
  {
    title: "Intra-Abdominal Pressure Regulation",
    text: "The coordinated activity of the diaphragm, pelvic floor, and abdominal wall creates the pressure that supports the spine during every movement.",
    image: pillarIAP,
  },
  {
    title: "Clinical Applications",
    text: "From chronic pain rehabilitation to high-level athletic performance, DNS principles apply across the full spectrum of human movement.",
    image: pillarClinical,
  },
];

const traditionalItems = [
  "Focus on isolated muscles",
  "Treat painful areas",
  "Strengthen without changing coordination",
];

const dnsItems = [
  "Restores breathing-core coordination",
  "Improves joint positioning",
  "Retrains movement patterns",
  "Builds stability during real movement",
];

const helpCards = [
  {
    title: "Chronic Pain",
    text: "Your pain keeps coming back despite treatment. DNS looks at how your body stabilizes during movement — not just where it hurts.",
    to: "/chronic-pain",
  },
  {
    title: "Sports Performance & Longevity",
    text: "You have the strength and the drive. But can your stabilization system keep up with your training for the next 20 years?",
    to: "/sports-performance",
  },
  {
    title: "Breathing",
    text: "Most people think of the diaphragm as a breathing muscle. It also has a second, less well-known function: it's one of the most important muscles for stabilizing your spine.",
    to: "/dns-breathing-training",
  },
  {
    title: "Posture",
    text: "You've tried to fix your posture before. It works for a while — then the moment you stop thinking about it, you're back where you started. That's not a willpower problem.",
    to: "/posture",
  },
  {
    title: "Core Stability",
    text: "You can have very strong core muscles and still have poor core stability. The difference often comes down to timing — about 20 milliseconds of difference in when the deep stabilizers fire.",
    to: "/core-stability",
  },
];

const WhatIsDnsV2 = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="What is Dynamic Neuromuscular Stabilization (DNS)? | DNStrainer"
        description="DNS uses developmental kinesiology to restore correct core stability. Learn how it works — from breathing and joint centration to why expert coaching matters. Prague School-certified training in North Vancouver."
        canonical="https://www.dnstrainer.com/what-is-dns"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "What is DNS?", url: "/what-is-dns" },
        ]}
      />
      <NavigationV2 />

      <main className="pt-16">
        {/* 1. Hero + Intro */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  What is Dynamic Neuromuscular Stabilization?
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Dynamic Neuromuscular Stabilization (DNS) — it's an intimidating mouthful, but bear with me while I explain this exciting approach for the restoration of correct core stability. Its applications are wide — from prevention and rehabilitation of chronic pain to the optimization of athletic performance.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src={crawlInfant} alt="Infant crawling — innate movement pattern" className="rounded-2xl shadow-lg w-full" />
                <img src={crawlAdult} alt="Adult reconnecting to developmental movement" className="rounded-2xl shadow-lg w-full mt-8" />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Perfect Patterns */}
        <section className="py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_auto] gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  We Start Out With Perfect Stabilization Patterns
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  DNS is based on the fact that humans are genetically wired for correct muscle patterns for stability. During our first year of life, as the central nervous system matures, there is a gradual and automatic development of movement. The vast majority of us reach developmental milestones like sitting, crawling, and walking in the same way, at about the same age, and with perfect stabilization patterns.
                </p>
              </div>
              <img
                src={babyCrawlReaching}
                alt="Baby reaching while crawling — innate stabilization pattern"
                className="rounded-2xl shadow-lg w-full max-w-sm mx-auto"
              />
            </div>
          </div>
        </section>

        {/* 3. But Then "Stuff" Happens */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                But Then, "Stuff" Happens…
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ideally, these innate stabilization patterns should stay with us all our life, but for a variety of reasons — injuries, posture issues, incorrect training, stress, anxiety — they are disturbed. Consequently, compensation develops and the required muscle balance for correct stability is compromised. In adults, the first indication of dysfunctional movement patterns is often discomfort and pain.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {causes.map((c) => (
                <Card key={c.title} className="border-2">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary">{c.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 4. The DNS Strategy */}
        <section className="py-20 bg-background">
          <div className="container px-4 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The DNS Strategy: Restore the Pattern
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The DNS strategy aims to restore our innate movement patterns through specific manual treatment and training. An initial assessment identifies dysfunctional stabilization patterns. Some patients can correct the pattern themselves with just instructions, others might need manual treatments. DNS treatment and training rely heavily on basic neurophysiological principles of the movement system.
            </p>
          </div>
        </section>

        {/* 5b. Three Pillars of DNS */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                The Three Pillars of DNS
              </h2>
              <p className="text-lg text-muted-foreground">
                The framework that guides every assessment, treatment, and training session.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pillars.map((p) => (
                <Card key={p.title} className="border-2 hover:border-primary transition-colors overflow-hidden flex flex-col">
                  <div className="bg-[#e8eeef] flex items-center justify-center p-4">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-64 object-contain mix-blend-multiply"
                    />
                  </div>
                  <CardContent className="p-6 flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">{p.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{p.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Breathing */}
        <section className="py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-16">
              <img
                src={diaphragmIAP}
                alt="Diaphragm, pelvic floor and abdominal wall forming the cylinder of intra-abdominal pressure"
                className="rounded-2xl shadow-lg w-full"
              />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  It Often Starts with Breathing
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A common cause of poor stability is an incorrect breathing pattern. Therefore, the DNS approach begins with an assessment and correction of breathing. The diaphragm is a respiratory–inhalation muscle, but it also performs a very important stabilization function. There is strong clinical evidence that back pain is more prevalent in those individuals with reduced ability to activate the diaphragm's dual function of postural stability and breathing. The correct use of the diaphragm stimulates the contraction of pelvic floor and abdominal wall muscles — "the cylinder" — which increases Intra-Abdominal Pressure (IAP). The co-contraction of these muscles regulates IAP and is key for core stability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Joint Centration */}
        <section className="py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Then, There's Something Called Joint Centration
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The goal with DNS training is to achieve joint centration — where a joint is in its correct biomechanical position during motion and load. A joint that is poorly centrated will have ineffective stabilizing muscles that can lead to instability or stiffness, increasing the risk for injuries. In ideal alignment of a joint there is an efficient movement pattern. This also means that you can load more in your training. Joint centration is crucial, and sometimes the DNS practitioner has to manually place the individual's joints in centration to facilitate proper stabilization.
                </p>
              </div>
              <img
                src={dnsTherapyFemale}
                alt="DNS practitioner manually guiding a patient into joint centration"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </section>

        {/* 7. Exercises */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Then There Are Exercises
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The focus of DNS exercises is learning good quality core function and joint centration in extremities using proper IAP (remember… breathing). With incorrect breathing patterns, stability is compromised and exercises are not functional. This is why we start with slow and simple motions so that we can later maintain stability in quick, complex, sport-specific exercises. To correct, reinforce, and make permanent, this neuromuscular training requires 10–15 minutes of daily training using specific exercises until proper movement becomes automatic.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="group relative overflow-hidden rounded-xl">
                <img src={babyCrawlReaching} alt="Baby crawling and reaching demonstrating natural developmental movement" className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold text-lg">Natural Movement Patterns</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl">
                <video src={newNaturalMovementVideo} autoPlay loop muted playsInline className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="group relative overflow-hidden rounded-xl">
                <video src={functionalStrengthVideo} autoPlay loop muted playsInline className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold text-lg">Functional Strength</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl">
                <video src={naturalMovementVideo} autoPlay loop muted playsInline className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold text-lg">For All Ages & Abilities</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl">
                <img src={surfer} alt="Surfer demonstrating dynamic stability on a wave" className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold text-lg">Core Integration</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl">
                <video src={restoringMovementVideo} autoPlay loop muted playsInline className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold text-lg">Restoring Movement Quality</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. The DNS Difference */}
        <section className="py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                The DNS Difference
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unfortunately, it is much easier to understand the basic concepts of DNS than it is to actually do it. That's where expert coaching makes all the difference.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
              <div className="rounded-2xl border-2 border-border bg-card p-8">
                <h3 className="text-2xl font-bold text-muted-foreground mb-6">Traditional Approaches</h3>
                <ul className="space-y-4">
                  {traditionalItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 text-destructive" />
                      </span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-primary bg-card p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">DNS Approach</h3>
                <ul className="space-y-4">
                  {dnsItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </span>
                      <span className="text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-center text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
              The goal is not simply to reduce pain — but to improve how the body functions.
            </p>
          </div>
        </section>

        {/* 9. Who Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Who Benefits From DNS?
              </h2>
              <p className="text-lg text-muted-foreground">
                DNS has applications across a range of situations. Here's how it applies to specific concerns:
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {helpCards.map((c) => (
                <Link key={c.to} to={c.to} className="group">
                  <Card className="h-full border-2 hover:border-primary transition-colors">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {c.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{c.text}</p>
                      <span className="text-primary font-semibold inline-flex items-center gap-1">
                        Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Where DNS Comes From */}
        <section className="py-20 bg-background">
          <div className="container px-4 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Where DNS Comes From
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              DNS was developed by Professor Pavel Kolář and his research group at Charles University in Prague, Czech Republic. It has been rapidly gaining attention and acceptance worldwide as an effective functional rehabilitation approach.
            </p>
          </div>
        </section>

        {/* 11. Meet Eva + Booking */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Meet Eva Andersson
            </h2>
            <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center mb-16">
              <img
                src={evaImage}
                alt="Eva Andersson — DNS Certified Practitioner"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-4 border-primary/10 mx-auto"
              />
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Eva Andersson is certified by the Prague School of Rehabilitation — the group that developed DNS under Professor Pavel Kolář. She focuses on identifying dysfunctional stabilization patterns and helping patients retrain them through specific manual treatment and exercises.
                </p>
                <Link to="/about" className="text-primary font-semibold hover:underline inline-block">
                  More about Eva →
                </Link>
              </div>
            </div>
          </div>

          <div className="container px-4 max-w-4xl mx-auto">
            <div className="rounded-3xl bg-gradient-to-br from-primary to-primary/90 text-primary-foreground p-10 md:p-14 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Book Your DNS Training Session
              </h2>
              <div className="grid sm:grid-cols-3 gap-6 mb-10 text-sm">
                <div className="flex flex-col items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  <p className="leading-relaxed">
                    DNStrainer at Liberation Fitness / Scandinavian Clinic<br />
                    Suite 202B - 101 West 16th Street<br />
                    North Vancouver, BC V7M 1T3
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Phone className="w-6 h-6" />
                  <a href="tel:604-305-1418" className="hover:underline">(604) 305-1418</a>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Mail className="w-6 h-6" />
                  <a href="mailto:info@dnstrainer.com" className="hover:underline">info@dnstrainer.com</a>
                </div>
              </div>
              <Button size="lg" variant="hero" asChild>
                <Link to="/book-session">
                  Book a Session <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhatIsDnsV2;
