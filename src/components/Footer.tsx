const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🐕</span>
              </div>
              <h3 className="text-2xl font-display font-bold">
                Bark & Ride <span className="text-primary">YYC</span>
              </h3>
            </div>
            <p className="text-background/80 mb-4">
              Calgary's premier dog park transportation service. Making tails wag since 2025.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-hover transition-colors">
                <span className="text-white">📘</span>
              </div>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-hover transition-colors">
                <span className="text-white">📷</span>
              </div>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-hover transition-colors">
                <span className="text-white">🐦</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-background/80 hover:text-background transition-colors">Our Services</a></li>
              <li><a href="#about" className="text-background/80 hover:text-background transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-background transition-colors">Contact</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">FAQ</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-background/80">
              <p>✉️ barkandrideyyc@gmail.com</p>
              <p>📍 Calgary, AB</p>
              <p>⏰ Mondays & Wednesdays at 12pm, Fridays at 9am</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2025 Bark & Ride YYC. All rights reserved. Made with ❤️ for Calgary's dogs.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;