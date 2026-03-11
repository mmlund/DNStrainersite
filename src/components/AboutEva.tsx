import { Button } from "@/components/ui/button";
import { Mail, Award, Heart, Clock } from "lucide-react";
import evaImage from "@/assets/eva-andersson.png";

const AboutEva = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet Eva Andersson
            </h2>
            <p className="text-xl text-primary font-semibold mb-2">DNS Certified Practitioner | The Prague School</p>
            <p className="text-lg text-muted-foreground">Doctor of Naprapathy | Scandinavian College</p>
          </div>

          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex justify-center mb-8">
              <img 
                src={evaImage} 
                alt="Eva Andersson - DNS Certified Practitioner" 
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-4 border-primary/10"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center text-center p-6 bg-muted/50 rounded-xl">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Prague School Certified</h3>
                <p className="text-sm text-muted-foreground">DNS from Prof. Pavel Kolar's Institution</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-muted/50 rounded-xl">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">5+ Years Training</h3>
                <p className="text-sm text-muted-foreground">Post-Secondary Clinical Education</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-muted/50 rounded-xl">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Evidence-Based</h3>
                <p className="text-sm text-muted-foreground">Research-Driven Practice</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Eva Andersson is a DNS-certified practitioner trained directly by <a href="https://www.rehabps.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">The Prague School of Rehabilitation and Manual Medicine</a>, the world-leading authority on Dynamic Neuromuscular Stabilization founded by Prof. Pavel Kolar.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                With five years of post-secondary training as a Doctor of Naprapathy from the <a href="https://naprapathogskolan.se/the-scandinavian-college-of-naprapathic-manual-medicine" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Scandinavian College of Naprapathic Manual Medicine</a>, Eva brings advanced expertise in biomechanics, neuromuscular therapy, and manual medicine to her DNS practice.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Eva combines cutting-edge research on dynamic stability and motor control with Prague School DNS methodology to provide comprehensive rehabilitation and performance training for clients across The North Shore and Vancouver. Whether you're recovering from injury, managing chronic pain, or optimizing athletic performance, Eva's evidence-based approach delivers measurable results.
              </p>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button size="lg" variant="default" asChild>
                  <a href="mailto:info@dnstrainer.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Eva
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:604-926-4883">
                    Call: (604) 926-4883
                  </a>
                </Button>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold">Liberation Fitness / Scandinavian Clinic</p>
                <p>Suite 202B - 101 West 16th Street</p>
                <p>North Vancouver, BC V7M 1T3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEva;
