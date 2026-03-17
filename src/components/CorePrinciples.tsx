const CorePrinciples = () => {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-light p-8 md:p-12 text-white w-full">
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
    </section>
  );
};

export default CorePrinciples;
