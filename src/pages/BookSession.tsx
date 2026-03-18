import SEOHead from "@/components/SEOHead";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Phone } from "lucide-react";

const BookSession = () => {
  const [agreed, setAgreed] = useState(false);

  const handleBookNow = () => {
    if (agreed) {
      window.open("http://www.booking.dnstrainer.com/", "_blank");
    }
  };

  return (
    <>
      <Helmet>
        <title>Book Your Session | DNS Training North Vancouver</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl shadow-xl">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Calendar className="w-6 h-6 text-primary" />
              Before You Book Your Session
            </CardTitle>
            <p className="text-base text-muted-foreground">
              Please review our booking and visit information before scheduling your appointment.
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-primary font-semibold min-w-fit">•</span>
                <div>
                  <strong className="text-foreground">Insurance:</strong>{" "}
                  <span className="text-muted-foreground">
                    DNS Trainer sessions focus on movement rehabilitation and neuromuscular retraining. Most sessions are provided as Registered Massage Therapy (RMT), and insurance receipts are issued through Scandinavian Clinic. However, some performance-focused training sessions may not be eligible for insurance reimbursement and are not provided as RMT sessions.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-primary font-semibold min-w-fit">•</span>
                <div>
                  <strong className="text-foreground">Attire:</strong>{" "}
                  <span className="text-muted-foreground">
                    Depending on the area of injury, please bring a tank top and shorts for optimal assessment and treatment.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-primary font-semibold min-w-fit">•</span>
                <div>
                  <strong className="text-foreground">First Visit:</strong>{" "}
                  <span className="text-muted-foreground">
                    Arrive 10 minutes early to complete your intake form. We recommend booking 45-60 minutes (60 minutes is ideal) for your initial appointment to allow for a thorough history and assessment.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-primary font-semibold min-w-fit">•</span>
                <div>
                  <strong className="text-foreground">Cancellations:</strong>{" "}
                  <span className="text-muted-foreground">
                    Cancel at least 24 hours in advance via your email link to avoid a full cancellation fee. For urgent changes, please call 604-305-1418.
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-primary font-semibold min-w-fit">•</span>
                <div>
                  <strong className="text-foreground">Special Programs:</strong>{" "}
                  <span className="text-muted-foreground">
                    (ICBC, WCB, RCMP, DVA, MSP exempt): Do not use online booking. Please call 604-305-1418 directly to schedule your appointment.
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg border">
              <Checkbox
                id="agree"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
                className="mt-1"
              />
              <label
                htmlFor="agree"
                className="text-sm text-foreground leading-relaxed cursor-pointer"
              >
                I have read and agree to the booking and visit policies above.
              </label>
            </div>

            <Button
              onClick={handleBookNow}
              disabled={!agreed}
              className="w-full"
              size="lg"
            >
              <Calendar className="mr-2 w-5 h-5" />
              BOOK NOW
            </Button>

            <div className="text-center text-sm text-muted-foreground border-t pt-4">
              <Phone className="inline w-4 h-4 mr-1" />
              Questions?{" "}
              <a
                href="tel:604-305-1418"
                className="text-primary hover:underline font-semibold"
              >
                Call 604-305-1418
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default BookSession;
