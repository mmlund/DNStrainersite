import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";
import babyCrawlIcon from "@/assets/baby-crawl-icon.png";
import firstAidIcon from "@/assets/first-aid-icon.png";

const WhatIsDNS = () => {
  return (
    <section id="what-is-dns" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            What is Dynamic Neuromuscular Stabilization?
          </h2>
          <div>
            <p className="text-xl text-muted-foreground mb-6 text-left">
              DNS is a rehabilitation and training approach developed by The Prague School of Rehabilitation and Manual Medicine that uses principles of developmental kinesiology to improve movement by correcting dysfunctional motor patterns.
            </p>
            <p className="text-xl text-muted-foreground mb-6 text-left">
              DNS focuses on reactivating the central nervous system to activate optimal movement patterns learned in infancy.
            </p>
            <p className="text-xl text-muted-foreground text-left">
              Dynamic Neuromuscular Stabilization (DNS) is grounded in developmental kinesiology.
            </p>
            <p className="text-xl text-muted-foreground text-left">
              Its guiding principle—<span className="font-semibold text-foreground">"central stability for peripheral mobility"</span>—highlights the importance of a well-functioning spine, diaphragm, and pelvis. When these core structures are stable, your limbs and extremities can perform with greater precision and efficiency.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-2 hover:border-primary transition-colors duration-300">
            <CardContent className="pt-8">
              <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <img src={babyCrawlIcon} alt="Baby crawling" className="w-6 h-6" style={{ filter: "invert(32%) sepia(85%) saturate(1200%) hue-rotate(170deg) brightness(95%) contrast(101%)" }} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Developmental Kinesiology Foundation</h3>
              <p className="text-muted-foreground">
                DNS leverages innate, hard-wired motor programs that develop predictably in infancy. By reactivating these optimal movement patterns through specific developmental positions (supine, prone, quadruped), we restore proper neuromuscular coordination and postural-locomotion function.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors duration-300">
            <CardContent className="pt-8">
              <div className="mb-4 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Intra-Abdominal Pressure Regulation</h3>
              <p className="text-muted-foreground">
                Proper DNS training establishes optimal intra-abdominal pressure (IAP) through coordinated breathing mechanics and core muscle activation. This creates a stable cylinder that protects the spine during all functional movements and athletic performance.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors duration-300">
            <CardContent className="pt-8">
              <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <img src={firstAidIcon} alt="Clinical applications" className="w-6 h-6" style={{ filter: "invert(32%) sepia(85%) saturate(1200%) hue-rotate(170deg) brightness(95%) contrast(101%)" }} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Clinical Applications</h3>
              <p className="text-muted-foreground">
                DNS is effective for injury rehabilitation, chronic pain management (back pain, neck pain, shoulder and knee problems), sports performance enhancement, and pre-habilitation programs. Research demonstrates improvements in pain, disability scores, and quality of life metrics across diverse patient populations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhatIsDNS;
