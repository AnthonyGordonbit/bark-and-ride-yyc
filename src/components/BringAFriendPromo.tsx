import { Card } from "@/components/ui/card";
import bringAFriendImage from "@/assets/bring-a-friend-fridays.jpg";

const BringAFriendPromo = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto max-w-6xl">
        <Card className="overflow-hidden border-2 border-primary/20 shadow-xl bg-gradient-to-r from-background to-secondary/5">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden flex items-center justify-center rounded-lg">
              <img 
                src={bringAFriendImage} 
                alt="Two happy dogs playing together during Bring a Friend Friday special promotion"
                className="w-full h-full object-contain transition-transform duration-500 hover:scale-105 rounded-lg"
              />
            </div>
            
            {/* Content Section */}
            <div className="p-8 md:p-12 flex flex-col justify-center text-center md:text-left">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wide uppercase">
                  Special Offer
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Bring a Friend 
                  <span className="text-primary block">Fridays!</span>
                </h2>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  2 friends having a great adventure for the price of 1!!!
                </p>
                
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <p className="text-xl md:text-2xl font-bold text-primary mb-2">
                    Sign up your dog and your dog's best friend
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <span className="text-sm text-muted-foreground">for only</span>
                    <span className="text-4xl font-bold text-primary">$35</span>
                    <span className="text-lg text-muted-foreground">!!!</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <a 
                    href="https://cal.com/barkandrideyyc/dog-1?user=barkandrideyyc&overlayCalendar=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BringAFriendPromo;