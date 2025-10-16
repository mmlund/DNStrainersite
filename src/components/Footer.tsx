import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">DNS Coach</h3>
            <p className="text-white/80">
              Transform your movement with expert Dynamic Neuromuscular Stabilization coaching.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#what-is-dns" className="text-white/80 hover:text-white transition-colors">
                  What is DNS
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-white/80 hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  About Eva
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <a 
              href="mailto:info@dnstrainer.com" 
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              info@dnstrainer.com
            </a>
            <div className="mt-4">
              <a 
                href="https://scandinavianclinic.com/dns-coaching/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors underline underline-offset-4"
              >
                Book at Scandinavian Clinic
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} DNS Coach. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
