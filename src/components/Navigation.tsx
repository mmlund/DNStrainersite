import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import dnsLogo from "@/assets/dns-trainer-logo.png";
import BookingPoliciesModal from "@/components/BookingPoliciesModal";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-3">
            <img src={dnsLogo} alt="DNS Training Logo" className="h-12 w-12" />
            <span className="text-2xl font-bold text-primary">DNS Trainer</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/#what-is-dns" className="text-foreground hover:text-primary transition-colors">
              What is DNS
            </a>
            <a href="/#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="/#about" className="text-foreground hover:text-primary transition-colors">
              About Eva
            </a>
            <Button onClick={() => setShowBookingModal(true)}>
              Book Session
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a 
              href="/#what-is-dns" 
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              What is DNS
            </a>
            <a 
              href="/#services" 
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a 
              href="/#about" 
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Eva
            </a>
            <Button 
              className="w-full" 
              onClick={() => {
                setShowBookingModal(true);
                setIsOpen(false);
              }}
            >
              Book Session
            </Button>
          </div>
        )}
      </div>
      
      <BookingPoliciesModal 
        open={showBookingModal} 
        onOpenChange={setShowBookingModal} 
      />
    </nav>
  );
};

export default Navigation;
