import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">DNS Training North Vancouver</h3>
            <p className="text-white/80 mb-3">
              Prague School-certified Dynamic Neuromuscular Stabilization training and rehabilitation on The North Shore.
            </p>
            <p className="text-white/80 text-sm">
               <strong>DNStrainer</strong><br />
               at Liberation Fitness / Scandinavian Clinic<br />
              Suite 202B - 101 West 16th Street<br />
              North Vancouver, BC V7M 1T3
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#what-is-dns" className="text-white/80 hover:text-white transition-colors">
                  What is DNS
                </a>
              </li>
              <li>
                <a href="/#services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#about" className="text-white/80 hover:text-white transition-colors">
                  About Eva
                </a>
              </li>
              <li>
                <a href="/what-is-dns" className="text-white/80 hover:text-white transition-colors">
                  Learn More: What is DNS?
                </a>
              </li>
              <li>
                <a href="/move-better" className="text-white/80 hover:text-white transition-colors">
                  Move Better, Move Stronger
                </a>
              </li>
              <li>
                <a href="/booking-terms" className="text-white/80 hover:text-white transition-colors">
                  Booking Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a 
                href="tel:604-305-1418" 
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                📞 (604) 305 1418
              </a>
              <a 
                href="mailto:info@dnstrainer.com" 
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@dnstrainer.com
              </a>
              <div className="mt-4">
                <Link 
                  to="/book-session"
                  className="inline-block px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  Book Your Session
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} DNS Training North Vancouver - Eva Andersson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
