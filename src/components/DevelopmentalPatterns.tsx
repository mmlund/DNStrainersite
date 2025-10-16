import babyCrawl from "@/assets/baby-crawl.png";
import womanCrawl from "@/assets/woman-crawl.png";
import womanCore from "@/assets/woman-core.png";
import manCrawl from "@/assets/man-crawl.png";
import womanSquat from "@/assets/woman-squat.png";

const DevelopmentalPatterns = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Based on Developmental Kinesiology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Central movement patterns are innate and established during the first critical years of life. These patterns form the basis for ideal posture, breathing, and joint function throughout life.
          </p>
        </div>

        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl">
              <img 
                src={babyCrawl} 
                alt="Baby demonstrating natural crawling pattern" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Natural Movement Patterns</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl">
              <img 
                src={womanCrawl} 
                alt="Woman performing developmental crawling exercise" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Restoring Movement Quality</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl">
              <img 
                src={manCrawl} 
                alt="Man performing DNS crawling position" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">For All Ages & Abilities</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl">
              <img 
                src={womanCore} 
                alt="Woman performing core stabilization exercise" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Core Integration</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl">
              <img 
                src={womanSquat} 
                alt="Woman in functional squat position" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                <p className="text-white font-semibold text-lg">Functional Strength</p>
              </div>
            </div>

            <div className="bg-accent/10 rounded-xl p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">The DNS Difference</h3>
              <p className="text-muted-foreground">
                Unfortunately, it is much easier to understand the basic concepts of DNS than it is to actually do it. That's where expert coaching makes all the difference.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 md:p-12 text-white">
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
    </section>
  );
};

export default DevelopmentalPatterns;
