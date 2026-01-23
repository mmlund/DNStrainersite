import iapDiagram from "@/assets/iap-diagram.jpg";
import abBreathingDiagram from "@/assets/ab-breathing-diagram.png";
const HowDNSWorks = () => {
  return <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Science Behind DNS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DNS leverages motor control principles from early development to optimize physical performance and well-being.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">Core Stability System</h3>
            <p className="text-lg text-muted-foreground mb-6">
              DNS emphasizes the importance of the Integrated Spinal Stabilization System, which involves the coordinated action of several key muscle groups:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                <span className="text-lg"><strong>Diaphragm</strong></span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                <span className="text-lg"><strong>Pelvic floor muscles</strong></span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                <span className="text-lg"><strong>Abdominal wall</strong></span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                <span className="text-lg"><strong>Deep spinal muscles</strong></span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <img src={iapDiagram} alt="Intra-abdominal pressure stabilizes the spine" className="rounded-lg shadow-lg max-w-md w-full h-auto" />
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-md">
          <h3 className="text-3xl font-bold mb-6">The Role of Breathing in Movement</h3>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-primary">Proper Breathing</h4>
              <p className="text-muted-foreground">
                When you breathe correctly using your diaphragm, it helps maintain good posture and spinal stability. This creates optimal intra-abdominal pressure that supports your spine during movement.
              </p>
            </div>
            
            <div className="flex justify-center">
              <img src={abBreathingDiagram} alt="A/B comparison of proper breathing mechanics for spinal stability" className="rounded-lg max-w-md w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HowDNSWorks;