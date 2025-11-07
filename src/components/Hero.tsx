import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroIllustration from "@/assets/dns-hero-illustration.jpg";
import dnsLogoLarge from "@/assets/dns-trainer-logo-large.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-light to-secondary">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4 px-6 py-2 bg-accent/20 rounded-full">
              <span className="text-accent font-bold text-xl tracking-wider">DNS TRAINING</span>
            </div>
            
            <h1 className="mb-6 text-5xl md:text-7xl font-bold text-white leading-tight">
              Master Dynamic Stability
              <br />
              <span className="text-accent">Move Better on The North Shore</span>
            </h1>
            
            <p className="max-w-2xl mb-8 text-xl md:text-2xl text-white/90 leading-relaxed">
              Dynamic Neuromuscular Stabilization (DNS) from The Prague School optimizes your neuromuscular coordination and core stabilization patterns for injury rehabilitation, chronic pain management, and performance enhancement in North Vancouver.
            </p>
            
            <div className="flex justify-center lg:justify-start">
              <Button 
                size="lg" 
                variant="hero"
                asChild
              >
                <a 
                  id="Setmore_button_iframe"
                  href="https://dnstrainer.setmore.com"
                  className="group a-btn-iframe"
                >
                  Book Your Session
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative flex flex-col items-center gap-8">
            <div className="flex justify-center">
              <img 
                src={dnsLogoLarge} 
                alt="DNS Trainer Logo" 
                className="w-64 h-64 object-contain"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroIllustration} 
                alt="DNS Core Stability and Movement Illustration" 
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
