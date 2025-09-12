import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-accent/50 to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Ready to Get <span className="text-primary">Started</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Book your dog's first adventure today and see why Calgary pet owners trust us
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <Card className="shadow-soft">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-display font-semibold text-foreground">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">✉️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-muted-foreground">barkandrideyyc@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Service Area</h3>
                  <p className="text-muted-foreground">Calgary & Surrounding Areas</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">⏰</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Schedule</h3>
                  <p className="text-muted-foreground">Mondays & Wednesdays at 12pm<br />Fridays at 9am</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-display font-semibold text-foreground">
                Online Booking
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-6xl mb-4">🐕‍🦺</div>
                <p className="text-lg text-muted-foreground mb-6">
                  Book your dog's park adventure online - 24 hours advance booking required
                </p>
                
                <div className="space-y-4">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full text-lg py-6"
                    asChild
                  >
                    <a 
                      href="https://cal.com/barkandrideyyc/dog-1?user=barkandrideyyc&overlayCalendar=true" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      📅 Book Your Adventure Online
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full text-lg py-6" asChild>
                    <a href="mailto:barkandrideyyc@gmail.com">
                      📧 Send Email Inquiry
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;