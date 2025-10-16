import { Button } from "@/components/ui/button";
import { Mail, Award, Heart } from "lucide-react";
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
            <p className="text-xl text-primary font-semibold">Your Expert DNS Trainer</p>
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
                <h3 className="font-semibold mb-2">Certified Expert</h3>
                <p className="text-sm text-muted-foreground">DNS Certified Practitioner</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-muted/50 rounded-xl">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Personalized Care</h3>
                <p className="text-sm text-muted-foreground">Tailored to Your Needs</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-muted/50 rounded-xl">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Always Available</h3>
                <p className="text-sm text-muted-foreground">Ready to Help</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Eva Andersson is a certified DNS trainer with extensive experience in optimizing movement patterns. Her approach focuses on enhancing spinal stability and joint alignment, helping clients achieve their physical goals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a deep understanding of motor control principles, Eva tailors each session to meet individual needs, ensuring effective and personalized training. Whether you're an athlete looking to optimize performance or recovering from injury, Eva provides expert guidance to help you move better and feel better.
              </p>
            </div>

            <div className="text-center">
              <Button size="lg" asChild>
                <a href="mailto:info@dnstrainer.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEva;
