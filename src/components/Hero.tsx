import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-light to-secondary">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      <div className="container relative z-10 px-4 py-20 text-center">
        <h1 className="mb-6 text-5xl md:text-7xl font-bold text-white leading-tight">
          Transform Your Movement
          <br />
          <span className="text-accent">From the Core</span>
        </h1>
        
        <p className="mx-auto max-w-2xl mb-8 text-xl md:text-2xl text-white/90 leading-relaxed">
          Discover how Dynamic Neuromuscular Stabilization (DNS) can enhance your breathing, posture, and movement patterns for lasting health and performance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="hero"
            asChild
          >
            <a 
              href="https://scandinavianclinic.com/dns-coaching/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              Book Your Session
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary"
            asChild
          >
            <a href="#what-is-dns">
              Learn More
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
