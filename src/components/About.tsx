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
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">🛡️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Licensed & Insured</h3>
                  <p className="text-muted-foreground">Full commercial insurance and bonded drivers</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">❤️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Dog Lovers</h3>
                  <p className="text-muted-foreground">Our team consists of certified dog enthusiasts</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Real-Time Updates</h3>
                  <p className="text-muted-foreground">Photos and updates throughout the adventure</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-orange rounded-3xl p-8 text-white">
              <div className="text-center">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-2xl font-display font-bold mb-4">Calgary's #1 Choice</h3>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm opacity-90">Happy Dogs</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">98%</div>
                    <div className="text-sm opacity-90">Satisfaction Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">2+</div>
                    <div className="text-sm opacity-90">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm opacity-90">Support</div>
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