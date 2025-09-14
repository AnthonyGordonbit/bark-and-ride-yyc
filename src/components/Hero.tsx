import { Button } from "@/components/ui/button";
import heroImage from "@/assets/bark-and-ride-logo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
      
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
            <img 
              src={heroImage} 
              alt="Bark and Ride - Professional Dog Transportation Service" 
              className="w-full max-w-md h-auto object-contain"
            />
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