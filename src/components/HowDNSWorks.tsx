import goodVsPoorStability from "@/assets/good-versus-poor-stability.jpg";
import abBreathingDiagram from "@/assets/ab-breathing-diagram.png";

const HowDNSWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Science Behind DNS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DNS leverages motor control principles from early development to optimize physical performance and well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Core Stability Card */}
          <div className="bg-muted/40 rounded-2xl p-8 flex flex-col">
            <div className="flex items-center justify-center mb-6">
              <img
                src={goodVsPoorStability}
                alt="Good versus poor spinal stability comparison"
                className="max-h-56 w-auto object-contain mix-blend-multiply"
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">Core Stability System</h3>
            <p className="text-muted-foreground mb-4">
              DNS emphasizes the importance of the Integrated Spinal Stabilization System, which involves the coordinated action of several key muscle groups:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                <span className="font-semibold">Diaphragm</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                <span className="font-semibold">Pelvic floor muscles</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                <span className="font-semibold">Abdominal wall</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                <span className="font-semibold">Deep spinal muscles</span>
              </li>
            </ul>
          </div>

          {/* Breathing Card */}
          <div className="bg-muted/40 rounded-2xl p-8 flex flex-col">
            <div className="flex items-center justify-center mb-6">
              <img
                src={abBreathingDiagram}
                alt="A/B comparison of proper breathing mechanics for spinal stability"
                className="max-h-56 w-auto object-contain mix-blend-multiply"
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">The Role of Breathing in Movement</h3>
            <h4 className="text-lg font-semibold mb-3 text-primary">Proper Breathing</h4>
            <p className="text-muted-foreground">
              When you breathe correctly using your diaphragm, it helps maintain good posture and spinal stability. This creates optimal intra-abdominal pressure that supports your spine during movement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowDNSWorks;
