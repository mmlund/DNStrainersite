import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList, Users, TrendingUp, Calendar } from "lucide-react";

const WhatToExpect = () => {
  return (
    <section id="what-to-expect" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What to Expect from DNS Training
            </h2>
            <p className="text-xl text-muted-foreground">
              Your journey to optimal movement and dynamic stability
            </p>
          </div>

          <div className="space-y-8 mb-16">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <ClipboardList className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Initial Assessment (60-75 minutes)</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p><strong>Medical History Review:</strong> Comprehensive evaluation of injury history, pain patterns, training background, and functional goals</p>
                <p><strong>Movement Assessment:</strong> DNS-specific evaluation of developmental positions, breathing mechanics, and dynamic stability patterns</p>
                <p><strong>Neuromuscular Testing:</strong> Assessment of deep stabilizer activation, joint centration, and movement compensations</p>
                <p><strong>Treatment Plan:</strong> Customized DNS program based on your specific dysfunction patterns and goals</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Follow-Up Sessions (45-60 minutes)</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p><strong>Hands-On Facilitation:</strong> Manual guidance to activate proper stabilization patterns and breathing mechanics</p>
                <p><strong>Developmental Positions:</strong> Progressive training through infant developmental sequence to restore optimal motor patterns</p>
                <p><strong>Integration Exercises:</strong> Sport-specific and functional movement training with optimal stability patterns</p>
                <p><strong>Home Program:</strong> Tailored exercises and self-treatment strategies for continued progress</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Treatment Progression</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p><strong>Phase 1 (Weeks 1-4):</strong> Foundation - Establish basic stabilization patterns and breathing coordination</p>
                <p><strong>Phase 2 (Weeks 5-8):</strong> Integration - Progress through developmental positions with increasing complexity</p>
                <p><strong>Phase 3 (Weeks 9-12):</strong> Application - Transfer optimal patterns to sport-specific and functional movements</p>
                <p><strong>Maintenance:</strong> Ongoing optimization and performance enhancement as needed</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Session Frequency</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p><strong>Acute Rehabilitation:</strong> 2x per week for initial 2-4 weeks, then transition to weekly sessions</p>
                <p><strong>Chronic Pain Management:</strong> 1-2x per week for 8-12 weeks, with gradual spacing as patterns improve</p>
                <p><strong>Performance Enhancement:</strong> 1x per week ongoing, or periodic intensive blocks</p>
                <p><strong>Maintenance:</strong> Monthly sessions for continued optimization and assessment</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card p-8 rounded-lg border-2">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              What to Bring
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                <span>Comfortable athletic clothing that allows full range of motion</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                <span>Any recent imaging reports (X-rays, MRI) if applicable</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                <span>List of current medications or supplements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                <span>Training log or activity history if relevant to your goals</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
