import { Card, CardContent } from "@/components/ui/card";
import { Activity, Users, TrendingUp } from "lucide-react";

const WhatIsDNS = () => {
  return (
    <section id="what-is-dns" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Understanding Dynamic Neuromuscular Stabilization
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DNS is a revolutionary approach that enhances movement patterns by focusing on spinal stability and functional alignment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-2 hover:border-primary transition-colors duration-300">
            <CardContent className="pt-8">
              <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Holistic Approach</h3>
              <p className="text-muted-foreground">
                DNS emphasizes a holistic approach to rehabilitation, integrating principles of early human development to optimize movement. This method trains the body's movement systems effectively and safely.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors duration-300">
            <CardContent className="pt-8">
              <div className="mb-4 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Coaching</h3>
              <p className="text-muted-foreground">
                With one-on-one coaching sessions, clients receive personalized guidance tailored to their unique needs. This ensures effective learning and application of DNS principles for better health outcomes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors duration-300">
            <CardContent className="pt-8">
              <div className="mb-4 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-muted-foreground">
                Many clients have experienced significant improvements in their movement patterns and overall well-being through DNS. Join the success stories and start your journey towards better health.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhatIsDNS;
