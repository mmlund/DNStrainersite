import naturalMovementVideo from "@/assets/natural-movement-video.mp4";
import newNaturalMovementVideo from "@/assets/natural-movement-new.mp4";
import restoringMovementVideo from "@/assets/dns-shorter.mp4";
import surfer from "@/assets/surfer.png";
import functionalStrengthVideo from "@/assets/functional-strength-video.mp4";
import babyCrawlReaching from "@/assets/baby-crawl-reaching.png";
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
              <video 
                src={naturalMovementVideo} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Natural Movement Patterns</p>
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
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The DNS Difference</h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unfortunately, it is much easier to understand the basic concepts of DNS than it is to actually do it. That's where expert coaching makes all the difference.
          </p>
        </div>

      </div>
    </section>;

};
export default DevelopmentalPatterns;