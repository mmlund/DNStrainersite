import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  // Placeholder testimonials - to be replaced with real client testimonials
  const testimonials = [
    {
      text: "Testimonials and case studies will be added here as they become available. Eva's Prague School DNS training provides evidence-based rehabilitation and performance enhancement for clients across The North Shore and Vancouver.",
      author: "Coming Soon",
      condition: "Client Success Stories"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from DNS training in North Vancouver
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all">
                <CardContent className="pt-8">
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.condition}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              If you're a current or former client and would like to share your experience, please{" "}
              <a href="mailto:info@dnstrainer.com" className="text-primary hover:underline font-semibold">
                contact us
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
