import { X, Check } from "lucide-react";

const traditionalItems = [
  "Focus on isolated muscles",
  "Treat painful areas",
  "Strengthen without changing coordination",
];

const dnsItems = [
  "Restores breathing-core coordination",
  "Improves joint positioning",
  "Retrains movement patterns",
  "Builds stability during real movement",
];

const DNSComparison = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            DNS Is Not Traditional Strength Training or Massage
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {/* Traditional */}
          <div className="rounded-2xl border-2 border-border bg-card p-8">
            <h3 className="text-2xl font-bold text-muted-foreground mb-6">Traditional Approaches</h3>
            <ul className="space-y-4">
              {traditionalItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-destructive" />
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DNS */}
          <div className="rounded-2xl border-2 border-primary bg-card p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">DNS Approach</h3>
            <ul className="space-y-4">
              {dnsItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </span>
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
          The goal is not simply to reduce pain — but to improve how the body functions.
        </p>
      </div>
    </section>
  );
};

export default DNSComparison;
