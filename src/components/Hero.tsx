import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Solid color strip on the left 20% with gradient fade into image */}
      <div
        className="absolute left-0 top-0 bottom-0 z-[1]"
        style={{
          width: "30%",
          background: "linear-gradient(to right, hsl(195 85% 30%) 0%, hsl(195 85% 30%) 66%, hsl(195 85% 30% / 0) 100%)",
        }}
      />

      {/* Background image shifted right and zoomed out */}
      <img
        src={heroBg}
        alt="DNS training session demonstrating neuromuscular stabilization"
        className="absolute top-0 bottom-0 h-full object-cover"
        style={{
          transform: "scaleX(-1)",
          left: "20%",
          width: "80%",
          objectPosition: "center center",
        }}
      />

      {/* Gradient overlay: heavy blur/tint on left, fading to clear on right */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(to right, hsl(195 85% 30% / 0.95) 0%, hsl(195 85% 30% / 0.85) 20%, hsl(195 85% 33% / 0.6) 40%, hsl(195 75% 45% / 0.25) 60%, transparent 80%)",
        }}
      />

      {/* Blur layer on left side only */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          maskImage: "linear-gradient(to right, black 0%, black 30%, transparent 60%)",
          WebkitMaskImage: "linear-gradient(to right, black 0%, black 30%, transparent 60%)",
        }}
      />

      <div className="container relative z-10 px-4 py-20 flex flex-col h-full">
        <div className="max-w-2xl mt-[-1vh]">
          <h1 className="mb-6 font-bold leading-tight">
            <span className="text-primary-foreground text-6xl md:text-8xl block">Master Dynamic</span>
            <span className="text-primary-foreground text-6xl md:text-8xl block">Stability</span>
            <span className="text-accent text-4xl md:text-6xl block">Move Better</span>
            <span className="text-accent text-4xl md:text-6xl block">Feel Better</span>
            <span className="text-accent text-4xl md:text-6xl block">Perform Better</span>
          </h1>

          <p className="max-w-xl mb-8 text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
            Dynamic Neuromuscular Stabilization (DNS) optimizes your neuromuscular coordination and core stabilization patterns for injury rehabilitation, chronic pain management, and performance enhancement.
          </p>
        </div>

        <div className="mt-auto mb-[10vh] flex justify-start">
          <Button size="lg" variant="hero" className="group" asChild>
            <Link to="/book-session">
              Book Your Session
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
