const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Why Choose <span className="text-primary">Bark & Ride</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We understand that your dog is family. That's why we've created Calgary's most 
              trusted dog transportation service, ensuring your furry friend gets the exercise 
              and socialization they need while you focus on your busy day.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mt-1" aria-hidden="true">
                  <span className="text-white text-sm">❤️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Dog Lovers</h3>
                  <p className="text-muted-foreground">Our team consists of certified dog enthusiasts</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-orange rounded-3xl p-8 text-white">
              <div className="text-center">
                <div className="text-6xl mb-4" aria-hidden="true">🏆</div>
                <h3 className="text-2xl font-display font-bold mb-4">Ready to Start!</h3>
                <div className="text-center">
                  <div>
                    <div className="text-3xl font-bold">NEW</div>
                    <div className="text-sm opacity-90">Service Launching</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;