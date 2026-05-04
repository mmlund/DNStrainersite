import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Award, GraduationCap, BadgeCheck, Activity, Wind, Eye } from "lucide-react";
import NavigationV2 from "@/components/NavigationV2";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import evaImage from "@/assets/eva-andersson.png";

const credentials = [
  {
    icon: Award,
    title: "Prague School of Rehabilitation and Manual Medicine",
    text: "DNS certification from Professor Pavel Kolář's institution — the world authority on Dynamic Neuromuscular Stabilization.",
  },
  {
    icon: GraduationCap,
    title: "Scandinavian College of Naprapathic Manual Medicine",
    text: "Doctor of Naprapathy — five years of post-secondary clinical education covering biomechanics, neuromuscular therapy, orthopedic examination, and manual medicine.",
  },
  {
    icon: BadgeCheck,
    title: "Registered Massage Therapist",
    text: "Licensed and registered with the College of Massage Therapists of British Columbia.",
  },
];

const assessmentAreas = [
  {
    icon: Activity,
    title: "Movement patterns",
    text: "How you bear weight and where the \"weak link\" in your stabilizing chain might be.",
  },
  {
    icon: Wind,
    title: "Breathing and stabilization",
    text: "Whether your diaphragm is contributing to both breathing and postural stability. There's good clinical evidence that people with reduced ability to use the diaphragm for both functions are more likely to experience back pain.",
  },
  {
    icon: Eye,
    title: "Real-time correction",
    text: "Eva provides visual and manual cues to help your nervous system find the correct stabilization pattern. Sometimes you need guidance to feel what \"right\" actually feels like.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Eva Andersson | DNS Certified Practitioner | Prague School Trained"
        description="Eva Andersson is a Prague School-certified DNS practitioner and Doctor of Naprapathy with over 25 years of clinical experience. One-on-one DNS training in North Vancouver."
        canonical="/about"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "About Eva", url: "/about" },
        ]}
      />
      <NavigationV2 />

      <main className="pt-16">
        {/* Intro */}
        <AboutEva headline="Eva Andersson" />


        {/* How a Session Works */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
              How a Session Works
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed mb-12">
              <p>
                Eva focuses on identifying dysfunctional stabilization patterns and helping patients retrain them through specific manual treatment and exercises.
              </p>
              <p>
                Sessions are one-on-one. DNS is detail-sensitive — it's difficult to assess and correct stabilization patterns in a group setting. The nervous system has to learn to fire correctly before movement begins, and that requires individual attention.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {assessmentAreas.map((a) => {
                const Icon = a.icon;
                return (
                  <Card key={a.title} className="border-2 h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{a.title}</h3>
                      <p className="text-muted-foreground">{a.text}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The exercises are initially slow and simple — the goal is to establish correct stabilization before adding complexity. Typically, 10–15 minutes of daily practice is needed until the patterns become automatic.
            </p>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-20 bg-background">
          <div className="container px-4 max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Training & Credentials
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {credentials.map((c) => {
                const Icon = c.icon;
                return (
                  <Card key={c.title} className="border-2 h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3">{c.title}</h3>
                      <p className="text-muted-foreground">{c.text}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* The Practice */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
              The Practice
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                DNStrainer is a movement training and education practice located in North Vancouver, operating out of Liberation Fitness / Scandinavian Clinic.
              </p>
              <p>
                Eva works with people dealing with chronic pain, athletes looking to improve performance or longevity, and anyone whose movement doesn't feel right despite conventional treatment.
              </p>
            </div>
            <div className="mt-10 grid sm:grid-cols-3 gap-6 text-foreground">
              <div>
                <h4 className="font-semibold mb-2">Address</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  DNStrainer at Liberation Fitness / Scandinavian Clinic<br />
                  Suite 202B - 101 West 16th Street<br />
                  North Vancouver, BC V7M 1T3
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Phone</h4>
                <a href="tel:604-305-1418" className="text-primary hover:underline">(604) 305-1418</a>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <a href="mailto:info@dnstrainer.com" className="text-primary hover:underline">info@dnstrainer.com</a>
              </div>
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="py-20 bg-gradient-to-br from-accent via-accent to-accent/90">
          <div className="container px-4 max-w-3xl mx-auto text-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-accent hover:bg-white/90 hover:text-accent border-0 shadow-xl"
              asChild
            >
              <Link to="/book-session">
                Book a One-on-One Session <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <p className="mt-6 text-white/90">
              Or email us at{" "}
              <a href="mailto:info@dnstrainer.com" className="text-white font-semibold underline underline-offset-4 hover:no-underline">
                info@dnstrainer.com
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
