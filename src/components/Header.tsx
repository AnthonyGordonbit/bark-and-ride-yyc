import { Button } from "@/components/ui/button";
import logoImage from "@/assets/bark-and-ride-logo.jpg";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src={logoImage} 
            alt="Bark and Ride YYC Logo" 
            className="w-8 h-8 rounded-full object-cover"
          />
          <h1 className="text-2xl font-display font-bold text-foreground">
            Bark & Ride <span className="text-primary">YYC</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
            Gallery
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
        
        <Button variant="hero" size="lg" asChild>
          <a 
            href="https://cal.com/barkandrideyyc/dog-1?user=barkandrideyyc&overlayCalendar=true" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;