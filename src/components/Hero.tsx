import { Button } from "@/components/ui/button";
import heroImage from "@/assets/bark-and-ride-logo.jpg";
import dogBackground from "@/assets/hero-dog-park.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${dogBackground})` }}
      />
      
      {/* Subtle Left-to-Right Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
            Your Dog's 
            <span className="block text-transparent bg-gradient-hero bg-clip-text">
              Adventure
            </span>
            Awaits
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Professional dog park transportation in Calgary. We pick up your furry friend, 
            take them to their favorite park, and bring them home happy and tired.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
              <a 
                href="https://cal.com/barkandrideyyc/dog-1?user=barkandrideyyc&overlayCalendar=true" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Book Your Dog's Adventure
              </a>
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#services">
                Learn More
              </a>
            </Button>
          </div>
          </div>
          
          {/* Logo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Bark and Ride - Professional Dog Transportation Service" 
                className="w-full max-w-md h-auto object-contain rounded-2xl shadow-2xl hover:shadow-warm transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/10 border border-white/20 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 fill-background"
        >
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;