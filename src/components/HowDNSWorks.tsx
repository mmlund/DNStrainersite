import iapDiagram from "@/assets/iap-diagram.jpg";
import abBreathingDiagram from "@/assets/ab-breathing-diagram.png";
const HowDNSWorks = () => {
  return <section id="how-it-works" className="py-12 bg-background">
      <div className="container px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Science Behind DNS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DNS leverages motor control principles from early development to optimize physical performance and well-being.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center mb-10">
          <div className="max-w-sm">
            <h3 className="text-3xl font-bold mb-4">Core Stability System</h3>
            <p className="text-muted-foreground mb-4">
              DNS emphasizes the importance of the Integrated Spinal Stabilization System, which involves the coordinated action of several key muscle groups:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                <span><strong>Diaphragm</strong></span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                <span><strong>Pelvic floor muscles</strong></span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                <span><strong>Abdominal wall</strong></span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                <span><strong>Deep spinal muscles</strong></span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <img alt="Intra-abdominal pressure stabilizes the spine" className="rounded-lg shadow-lg max-w-xs w-full h-auto" src="/lovable-uploads/28566379-5b5a-4f17-811e-b218ee067831.png" />
          </div>
        </div>

        <div className="bg-card rounded-2xl p-6 md:p-8 shadow-md">
          <h3 className="text-3xl font-bold mb-4">The Role of Breathing in Movement</h3>
          
          <div className="flex flex-col md:flex-row gap-6 items-end justify-center">
            <div className="flex flex-col justify-end max-w-sm">
              <h4 className="text-xl font-semibold mb-3 text-primary">Proper Breathing</h4>
              <p className="text-muted-foreground">
                When you breathe correctly using your diaphragm, it helps maintain good posture and spinal stability. This creates optimal intra-abdominal pressure that supports your spine during movement.
              </p>
            </div>
            
            <div className="flex justify-center">
              <img src={abBreathingDiagram} alt="A/B comparison of proper breathing mechanics for spinal stability" className="rounded-lg max-w-xs w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HowDNSWorks;