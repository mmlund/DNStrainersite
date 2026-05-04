import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, ChevronDown, X } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import dnsLogo from "@/assets/dns-logo-new.png";

const whoItHelps = [
  { label: "Chronic Pain", to: "/chronic-pain" },
  { label: "Sports Performance & Longevity", to: "/sports-performance" },
  { label: "Breathing", to: "/dns-breathing-training" },
  { label: "Posture", to: "/posture" },
  { label: "Core Stability", to: "/core-stability" },
];

const NavigationV2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/home-v2" className="flex items-center gap-1.5">
            <img src={dnsLogo} alt="DNS Trainer Logo" className="h-[4.2rem]" />
            <span className="text-accent font-bold text-lg tracking-wider">DNS TRAINER</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/home-v2" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/what-is-dns" className="text-foreground hover:text-primary transition-colors">
              What is DNS
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors outline-none">
                Who It Helps <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                {whoItHelps.map((item) => (
                  <DropdownMenuItem key={item.to} asChild>
                    <Link to={item.to}>{item.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About Eva
            </Link>
            <Button asChild>
              <Link to="/book-session">Book a Session</Link>
            </Button>
          </div>

          {/* Mobile button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link to="/home-v2" className="block text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/what-is-dns" className="block text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
              What is DNS
            </Link>
            <button
              className="flex items-center justify-between w-full text-foreground hover:text-primary"
              onClick={() => setHelpOpen(!helpOpen)}
            >
              Who It Helps
              <ChevronDown className={`w-4 h-4 transition-transform ${helpOpen ? "rotate-180" : ""}`} />
            </button>
            {helpOpen && (
              <div className="pl-4 space-y-2 border-l border-border">
                {whoItHelps.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block text-sm text-muted-foreground hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
            <Link to="/about" className="block text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
              About Eva
            </Link>
            <Button className="w-full" asChild>
              <Link to="/book-session" onClick={() => setIsOpen(false)}>
                Book a Session
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationV2;
