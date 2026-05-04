import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, AlertTriangle, Mail, Phone, MapPin } from "lucide-react";
import NavigationV2 from "@/components/NavigationV2";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import heroBg from "@/assets/hero-dns-exercise-flipped.jpeg";
import evaImage from "@/assets/eva-andersson.png";

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

const checklist = [
  "Pain returns despite previous treatment",
  "Your neck and shoulders constantly feel tense",
  "Your lower back is always tight",
  "You have recurring pain on one side of the body",
  "Injuries keep recurring",
  "You avoid certain movements because they trigger pain",
];

const steps = [
  { n: "1", title: "Movement Assessment", text: "Breathing, posture, stabilization patterns." },
  { n: "2", title: "DNS Position Training", text: "Guided developmental positions." },
  { n: "3", title: "Integration", text: "Applying stability into daily movement or sport." },
  { n: "4", title: "Home Practice Plan", text: "Simple exercises to reinforce progress." },
];

const HomeV2 = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="DNS Training North Vancouver | Eva Andersson | Prague School Certified"
        description="Prague School-certified Dynamic Neuromuscular Stabilization (DNS) training in North Vancouver. One-on-one sessions for chronic pain, sports performance, and movement quality."
        canonical="/"
      />
      <NavigationV2 />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative min-h-[80vh] w-full flex items-center overflow-hidden">
          <div
            className="absolute left-0 top-0 bottom-0 z-[1]"
            style={{
              width: "30%",
              background:
                "linear-gradient(to right, hsl(195 85% 30%) 0%, hsl(195 85% 30%) 66%, hsl(195 85% 30% / 0) 100%)",
            }}
          />
          <img
            src={heroBg}
            alt="DNS training session in North Vancouver"
            className="absolute top-0 bottom-0 h-full object-cover"
            style={{ transform: "scaleX(-1)", left: "20%", width: "80%", objectPosition: "center center" }}
          />
          <div
            className="absolute inset-0 z-[2]"
            style={{
              background:
                "linear-gradient(to right, hsl(195 85% 30% / 0.95) 0%, hsl(195 85% 30% / 0.85) 20%, hsl(195 85% 33% / 0.6) 40%, hsl(195 75% 45% / 0.25) 60%, transparent 80%)",
            }}
          />
          <div className="container relative z-10 px-4 py-20">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
                DNS Training in North Vancouver
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 leading-relaxed">
                One-on-one Dynamic Neuromuscular Stabilization sessions with Prague School-certified practitioner Eva Andersson.
              </p>
              <p className="text-lg text-accent font-semibold mb-8">
                Move Better. Feel Better. Perform Better.
              </p>
              <Button size="lg" variant="hero" asChild>
                <Link to="/book-session">
                  Book Your Session <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* What is DNS teaser */}
        <section className="py-20 bg-background">
          <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
              What is Dynamic Neuromuscular Stabilization?
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                DNS is based on a fairly simple idea: humans are genetically wired for correct muscle patterns for stability. During our first year of life, as the central nervous system matures, we all reach developmental milestones — sitting, crawling, walking — with perfect stabilization patterns.
              </p>
              <p>
                But then, "stuff" happens. Injuries, posture issues, incorrect training, stress — those patterns get disrupted. Compensation develops, and the muscle balance needed for correct stability is compromised. In adults, the first sign is often discomfort and pain.
              </p>
              <p>
                DNS aims to restore those innate movement patterns through specific assessment, manual treatment, and training.
              </p>
            </div>
            <div className="mt-8 text-center">
              <Link to="/what-is-dns" className="text-primary font-semibold hover:underline">
                Learn more about DNS →
              </Link>
            </div>
          </div>
        </section>

        {/* How DNS Can Help — routing cards */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              How DNS Training Can Help
            </h2>
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

        {/* Stabilization checklist */}
        <section className="py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Is Your Body Stabilizing the Way It Should?
              </h2>
              <p className="text-xl text-muted-foreground">
                Many persistent pain problems are linked to how the body stabilizes during movement — not just to muscle strength or tissue injury.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
              {checklist.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border-2 border-border bg-card p-5 hover:border-primary transition-colors"
                >
                  <AlertTriangle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
              These can be signs that your stabilization system is not working efficiently.
            </p>
          </div>
        </section>

        {/* First DNS Session */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Your First DNS Session
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              {steps.map((s) => (
                <div
                  key={s.n}
                  className="rounded-2xl border-2 border-border bg-card p-6 text-center hover:border-primary transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {s.n}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-lg text-muted-foreground font-medium">
              Most people need a few sessions combined with regular practice.
            </p>
          </div>
        </section>

        {/* About Eva brief */}
        <section className="py-20 bg-background">
          <div className="container px-4 max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Meet Eva Andersson
            </h2>
            <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
              <img
                src={evaImage}
                alt="Eva Andersson — DNS Certified Practitioner"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-4 border-primary/10 mx-auto"
              />
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Eva Andersson is certified by the Prague School of Rehabilitation — the group that developed DNS under Professor Pavel Kolář. She focuses on identifying dysfunctional stabilization patterns and helping patients retrain them through specific manual treatment and exercises.
                </p>
                <p>
                  With five years of post-secondary training as a Doctor of Naprapathy from the Scandinavian College of Naprapathic Manual Medicine, Eva brings advanced expertise in biomechanics, neuromuscular therapy, and manual medicine to her DNS practice.
                </p>
                <Link to="/about" className="text-primary font-semibold hover:underline inline-block">
                  More about Eva →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Location + Booking CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
          <div className="container px-4 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              DNS Training in North Vancouver
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 mb-10 text-left sm:text-center">
              <div className="flex flex-col items-center gap-2">
                <MapPin className="w-6 h-6" />
                <p className="text-sm leading-relaxed">
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
                Book Your DNS Training Session <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomeV2;
