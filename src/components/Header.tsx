import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from "@/assets/bark-and-ride-new-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src={logoImage} 
            alt="Bark and Ride YYC Logo" 
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-2xl font-display font-bold text-foreground">
            Bark & Ride <span className="text-primary">YYC</span>
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
          <a href="#services" className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">
            Services
          </a>
          <a href="#gallery" className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">
            Gallery
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">
            About
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">
            Contact
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        
        {/* Desktop Book Now Button */}
        <div className="hidden md:block">
          <Button variant="hero" size="lg" asChild>
            <a 
              href="https://cal.com/barkandrideyyc/dog-1?user=barkandrideyyc&overlayCalendar=true" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Book your dog's park adventure (opens in new tab)"
            >
              Book Now
            </a>
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div 
          id="mobile-menu" 
          className="md:hidden bg-background border-t border-border"
          role="navigation" 
          aria-label="Mobile navigation"
        >
          <div className="px-4 py-6 space-y-4">
            <a 
              href="#services" 
              className="block text-foreground hover:text-primary transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-primary rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#gallery" 
              className="block text-foreground hover:text-primary transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-primary rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </a>
            <a 
              href="#about" 
              className="block text-foreground hover:text-primary transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-primary rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="block text-foreground hover:text-primary transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-primary rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button variant="hero" size="lg" className="w-full mt-4" asChild>
              <a 
                href="https://cal.com/barkandrideyyc/dog-1?user=barkandrideyyc&overlayCalendar=true" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Book your dog's park adventure (opens in new tab)"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;