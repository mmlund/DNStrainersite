import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-light to-secondary">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="mb-6 text-5xl md:text-7xl font-bold text-white leading-tight">
              Master Dynamic Stability
              <br />
              <span className="text-accent">Move Better, Feel Better, Perform Better</span>
            </h1>

            <p className="max-w-2xl mb-8 text-xl md:text-2xl text-white/90 leading-relaxed">
              Dynamic Neuromuscular Stabilization (DNS) from The Prague School optimizes your neuromuscular coordination and core stabilization patterns for injury rehabilitation, chronic pain management, and performance enhancement.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Button size="lg" variant="hero" className="group" asChild>
                <Link to="/book-session">
                  Book Your Session
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative flex flex-col items-center gap-8">
            <div className="flex justify-center" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
