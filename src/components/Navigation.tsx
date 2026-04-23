import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import dnsLogo from "@/assets/dns-logo-new.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUsagesOpen, setIsUsagesOpen] = useState(false);

  const usageLinks = [
    { label: "For Chronic Pain", to: "/chronic-pain-movement-assessment" },
    { label: "For Athletes", to: "/the-athletic-foundation" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-1.5">
            <img src={dnsLogo} alt="DNS Trainer Logo" className="h-[4.2rem]" />
            <span className="text-accent font-bold text-lg tracking-wider">DNS TRAINER</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/#what-is-dns" className="text-foreground hover:text-primary transition-colors">
              What is DNS
            </a>
            <a href="/#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors outline-none">
                DNS Usages
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-background z-50">
                {usageLinks.map((link) => (
                  <DropdownMenuItem key={link.to} asChild>
                    <Link to={link.to} className="cursor-pointer">
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="/#about" className="text-foreground hover:text-primary transition-colors">
              About Eva
            </a>
            <Button asChild>
              <Link to="/book-session">Book Session</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="/#what-is-dns" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              What is DNS
            </a>
            <a href="/#services" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Services
            </a>
            <div>
              <button
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors w-full"
                onClick={() => setIsUsagesOpen(!isUsagesOpen)}
              >
                DNS Usages
                <ChevronDown className={`w-4 h-4 transition-transform ${isUsagesOpen ? "rotate-180" : ""}`} />
              </button>
              {isUsagesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {usageLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block text-foreground hover:text-primary transition-colors"
                      onClick={() => {
                        setIsOpen(false);
                        setIsUsagesOpen(false);
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <a href="/#about" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              About Eva
            </a>
            <Button className="w-full" asChild>
              <Link to="/book-session" onClick={() => setIsOpen(false)}>
                Book Session
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
