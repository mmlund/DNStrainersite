import babyCrawl from "@/assets/baby-crawl.png";
import restoringMovementVideo from "@/assets/restoring-movement-video.mp4";
import surfer from "@/assets/surfer.png";
import dnsTherapyFemale from "@/assets/dns-therapy-female.png";
import functionalStrengthVideo from "@/assets/functional-strength-video.mp4";
import babyStanding from "@/assets/baby-standing.jpg";
const DevelopmentalPatterns = () => {
  return <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Based on Developmental Kinesiology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DNS is a versatile approach that can be tailored to individuals of all ages and fitness levels, making it an effective tool for both rehabilitation and performance enhancement
          </p>
        </div>

        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl">
              <img src={babyCrawl} alt="Baby demonstrating natural crawling pattern" className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Natural Movement Patterns</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl">
              <video 
                src={restoringMovementVideo} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Restoring Movement Quality</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl">
              <img src={dnsTherapyFemale} alt="Therapist guiding client through DNS position" className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">For All Ages & Abilities</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl">
              <img src={surfer} alt="Surfer demonstrating dynamic stability on a wave" className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Core Integration</p>
              </div>
            </div>

            

            <div className="group relative overflow-hidden rounded-xl">
              <video 
                src={functionalStrengthVideo} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Functional Strength</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The DNS Difference</h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unfortunately, it is much easier to understand the basic concepts of DNS than it is to actually do it. That's where expert coaching makes all the difference.
          </p>
        </div>

      </div>
      
      <div className="bg-gradient-to-br from-primary to-primary-light p-8 md:p-12 text-white w-full">
        <div className="container px-4">
          <h3 className="text-3xl font-bold mb-6">Core Principles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-3">Joint Centration</h4>
              <p className="text-white/90">
                Optimal joint positioning for efficient force transfer and movement quality.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">Muscle Coordination</h4>
              <p className="text-white/90">
                Restoring ideal patterns of muscle activation and timing.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">Breathing Integration</h4>
              <p className="text-white/90">
                Synchronizing breath with movement for optimal performance.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">Postural Control</h4>
              <p className="text-white/90">
                Dynamic stability that adapts to any movement or position.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default DevelopmentalPatterns;