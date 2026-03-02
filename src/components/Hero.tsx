import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Full background image */}
      <img
        src={heroBg}
        alt="DNS training session demonstrating neuromuscular stabilization"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ transform: "scaleX(-1)" }}
      />

      {/* Gradient overlay: heavy blur/tint on left, fading to clear on right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, hsl(195 85% 30% / 0.92) 0%, hsl(195 85% 35% / 0.75) 35%, hsl(195 75% 45% / 0.35) 60%, transparent 85%)",
        }}
      />

      {/* Blur layer on left side only */}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          maskImage: "linear-gradient(to right, black 0%, black 30%, transparent 60%)",
          WebkitMaskImage: "linear-gradient(to right, black 0%, black 30%, transparent 60%)",
        }}
      />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-primary-foreground">Master Dynamic Stability</span>
            <br />
            <span className="text-accent">Move Better, Feel Better, Perform Better</span>
          </h1>

          <p className="max-w-xl mb-8 text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
            Dynamic Neuromuscular Stabilization (DNS) from The Prague School optimizes your neuromuscular coordination and core stabilization patterns for injury rehabilitation, chronic pain management, and performance enhancement.
          </p>

          <div className="flex justify-start">
            <Button size="lg" variant="hero" className="group" asChild>
              <Link to="/book-session">
                Book Your Session
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
