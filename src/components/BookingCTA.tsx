import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const BookingCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent via-accent to-accent/90">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Calendar className="w-16 h-16 mx-auto mb-6 text-white" />
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Book Your DNS Training Session
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards better movement, improved posture, and enhanced performance. Experience personalized coaching tailored to your unique needs.
          </p>
          
          <Button 
            size="lg" 
            variant="outline"
            className="bg-white text-accent hover:bg-white/90 hover:text-accent border-0 shadow-xl group"
            asChild
          >
            <Link to="/book-session">
              Schedule Your Session Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <p className="mt-6 text-white/80">
            Or email us at{" "}
            <a 
              href="mailto:info@dnstrainer.com" 
              className="text-white font-semibold underline underline-offset-4 hover:no-underline"
            >
              info@dnstrainer.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
