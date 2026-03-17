const steps = [
  {
    emoji: "1️⃣",
    title: "Movement Assessment",
    description: "Breathing, posture, stabilization patterns.",
  },
  {
    emoji: "2️⃣",
    title: "DNS Position Training",
    description: "Guided developmental positions.",
  },
  {
    emoji: "3️⃣",
    title: "Integration",
    description: "Applying stability into daily movement or sport.",
  },
  {
    emoji: "4️⃣",
    title: "Home Practice Plan",
    description: "Simple exercises to reinforce progress.",
  },
];

const FirstDNSSession = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your First DNS Session
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-2xl border-2 border-border bg-card p-6 text-center hover:border-primary transition-colors duration-300"
            >
              <span className="text-4xl mb-4 block">{step.emoji}</span>
              <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
          Most people need a few sessions combined with regular practice.
        </p>
      </div>
    </section>
  );
};

export default FirstDNSSession;
