import { AlertTriangle } from "lucide-react";

const checklistItems = [
  "Pain returns despite previous treatment",
  "Your neck and shoulders constantly feel tense",
  "Your lower back is always tight",
  "You have recurring pain on one side of the body",
  "Injuries keep recurring",
  "You avoid certain movements because they trigger pain",
];

const StabilizationChecklist = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Is Your Body Stabilizing the Way It Should?
          </h2>
          <p className="text-xl text-muted-foreground">
            Many persistent pain problems are linked to how the body stabilizes during movement — not just to muscle strength or tissue injury.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {checklistItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-xl border-2 border-border bg-card p-5 hover:border-primary transition-colors duration-300"
            >
              <AlertTriangle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <span className="text-foreground font-medium">{item}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
          These can be signs that your stabilization system is not working efficiently.
        </p>
      </div>
    </section>
  );
};

export default StabilizationChecklist;
