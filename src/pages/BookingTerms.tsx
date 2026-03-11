import { Helmet } from "react-helmet";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from "lucide-react";

const BookingTerms = () => {
  const [agreed, setAgreed] = useState(false);

  const handleBookNow = () => {
    if (agreed) {
      window.location.href = "http://www.booking.dnstrainer.com/";
    }
  };

  return (
    <>
      <Helmet>
        <title>Booking Terms & Conditions | DNS Training North Vancouver</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl max-h-[80vh] overflow-y-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Booking Policies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p className="font-medium">
              Please be advised of the following policies for using the online booking system.
            </p>

            <p>
              Please arrive early for your very first visit to the clinic to fill in the intake form (~10 min) before your appointment. We don't want to take any time from your appointment to complete this form.
            </p>

            <div>
              <h3 className="font-semibold mb-2">Initial Visit (First Appointment)</h3>
              <p>
                I prefer that your initial visit is booked only as such in the online system, which gives us at least 45 minutes (ideally 60 minutes). This allows me to do a thorough history and assessment and get you started on treatment. However, shorter appointments can also be booked for an initial visit.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Subsequent Visits</h3>
              <p>
                Typical sessions are either 30, 45, or 60 minutes long. You can decide what works best for you and your schedule. Of course, we usually have the time to accomplish more during a longer visit.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">ICBC, Workers Compensation Board, RCMP, DVA, MSP exempt status</h3>
              <p>
                If your visit is paid for by the bodies above, or you expect it to be, the online booking system is NOT available for your initial visit. Instead, please call me first at 604-305-1418.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Coverage</h3>
              <p>
                Treatments at the Scandinavian clinic are not covered by the Medical Services Plan of BC, however, your extended health plan usually covers part or all of your treatments as Registered Massage Therapy.
              </p>
            </div>

            <p>
              Booking appointments require a valid email and a valid phone number. The email will be used for reminders and enables you to manage your appointments. You will be sent an email confirmation after the booking.
            </p>

            <p>
              Be sure to arrive at least 10 minutes before any initial visit to complete our intake form.
            </p>

            <p>
              Depending on the area of injury, it may be appropriate to bring a tank top and shorts to allow the therapist to see how the injured area looks and feels.
            </p>

            <p>
              If canceling prior to 24 hours in advance of your appointment, please use the link in the email confirmation that was sent out when making the appointment.
            </p>

            <p>
              If canceling within 24 hours of your appointment please call 604-926-4883. A fee may apply for late cancellations, &lt;24 hours.
            </p>

            <div className="flex items-start gap-3 pt-6 pb-4">
              <Checkbox 
                id="agree" 
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
              />
              <label 
                htmlFor="agree" 
                className="text-sm font-medium leading-none cursor-pointer"
              >
                I agree to the booking policies
              </label>
            </div>

            <Button 
              onClick={handleBookNow}
              disabled={!agreed}
              className="w-full"
              size="lg"
            >
              BOOK NOW
              <ArrowRight className="ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default BookingTerms;
