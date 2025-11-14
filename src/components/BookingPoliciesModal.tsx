import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Phone } from "lucide-react";

interface BookingPoliciesModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingPoliciesModal = ({ open, onOpenChange }: BookingPoliciesModalProps) => {
  const [agreed, setAgreed] = useState(false);

  const handleBookNow = () => {
    if (agreed) {
      window.open("https://dnstrainer.setmore.com", "_blank");
      onOpenChange(false);
      setAgreed(false); // Reset for next time
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    setAgreed(false); // Reset when closing
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Calendar className="w-6 h-6 text-primary" />
            Before You Book Your Session
          </DialogTitle>
          <DialogDescription className="text-base">
            Please review our booking and visit information before scheduling your appointment.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-primary font-semibold min-w-fit">•</span>
              <div>
                <strong className="text-foreground">Insurance:</strong>{" "}
                <span className="text-muted-foreground">
                  Most extended health plans cover Registered Massage Therapy. Please check your specific plan.
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
                  Cancel at least 24 hours in advance via your email link to avoid a potential late cancellation fee. For urgent changes, please call 604-926-4883.
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-primary font-semibold min-w-fit">•</span>
              <div>
                <strong className="text-foreground">Special Programs:</strong>{" "}
                <span className="text-muted-foreground">
                  (ICBC, WCB, RCMP, DVA, MSP exempt): Do not use online booking. Please call 604-926-4883 directly to schedule your appointment.
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
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
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            onClick={handleClose}
            className="w-full sm:w-auto"
          >
            Cancel
          </Button>
          <Button
            onClick={handleBookNow}
            disabled={!agreed}
            className="w-full sm:w-auto"
            size="lg"
          >
            <Calendar className="mr-2 w-4 h-4" />
            BOOK NOW
          </Button>
        </DialogFooter>

        <div className="text-center text-sm text-muted-foreground border-t pt-4">
          <Phone className="inline w-4 h-4 mr-1" />
          Questions?{" "}
          <a
            href="tel:604-926-4883"
            className="text-primary hover:underline font-semibold"
          >
            Call 604-926-4883
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingPoliciesModal;
