import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Target } from "lucide-react";
import painCollage from "@/assets/pain-collage.png";
import bandaidIcon from "@/assets/bandaid-icon.png";
import soccerPlayerIcon from "@/assets/soccer-player-icon.png";
import chronicPainIcon from "@/assets/chronic-pain-icon.png";

const accentFilter = "invert(52%) sepia(78%) saturate(1200%) hue-rotate(345deg) brightness(95%) contrast(90%)";

const Services = () => {
  const services = [
    {
      icon: null as any,
      customIcon: bandaidIcon,
      customIconAlt: "Bandaid icon for injury rehabilitation",
      title: "Injury Rehabilitation",
      description: "Evidence-based DNS protocols for post-injury recovery. We address musculoskeletal dysfunctions by restoring optimal movement patterns and neuromuscular coordination, accelerating healing and preventing re-injury.",
      link: "/injury-rehabilitation"
    },
    {
      icon: null as any,
      customIcon: soccerPlayerIcon,
      customIconAlt: "Soccer player icon for sports performance",
      title: "Sports Performance Enhancement",
      description: "Elevate athletic performance through improved dynamic stability, power transfer efficiency, and movement quality. DNS training optimizes the kinetic chain for sport-specific demands and competitive advantage.",
      link: "/sports-performance"
    },
    {
      icon: null as any,
      customIcon: chronicPainIcon,
      customIconAlt: "Pain management icon",
      title: "Chronic Pain Management",
      description: "Address persistent pain conditions (chronic low back pain, neck and shoulder pain, hip, knee, and foot problems) by correcting underlying movement dysfunction and restoring proper muscle function patterns.",
      link: "/chronic-pain"
    },
    {
      icon: TrendingUp,
      title: "Movement Quality Improvement",
      description: "Enhance everyday functional movement through DNS developmental positions. Improve posture, breathing mechanics, and motor control for better quality of life and long-term musculoskeletal health.",
      link: "/#services"
    },
    {
      icon: Target,
      title: "Pre-Habilitation Programs",
      description: "Proactive injury prevention for athletes and active individuals. Build resilient movement patterns and address biomechanical vulnerabilities before they become injuries.",
      link: "/#services"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            DNS Training in North Vancouver
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized Dynamic Neuromuscular Stabilization training and rehabilitation services for The North Shore community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <a key={index} href={service.link} className="block group">
                <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg h-full">
                  <CardHeader>
                    <div className="mb-4 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </a>
            );
          })}
          
          <Card className="border-2 h-full overflow-hidden">
            <img 
              src={painCollage} 
              alt="Common pain areas treated with DNS - neck, back, shoulder, knee, and joint pain management" 
              className="w-full h-full object-cover"
            />
          </Card>
        </div>

        <div className="bg-card border-2 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            The Dynamic Stability Advantage
          </h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Dynamic stability, as emphasized by experts like Dr. Peter Attia, is the foundation of injury-resistant, high-performing movement. Dynamic stability involves maintaining control and optimal joint positioning during movement through coordinated muscle activation patterns.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            DNS training specifically targets the development of dynamic stability by reactivating the central nervous system to activate stabilizing muscles in proper sequence and intensity. This creates a stable platform for force generation and movement efficiency across all activities - from daily tasks to elite athletic performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;