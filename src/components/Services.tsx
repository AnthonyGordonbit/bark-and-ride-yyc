import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Target, Calendar, Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Park Transportation",
      description: "$35 per ride - Safe, comfortable 2-hour park adventures",
      features: ["House pickup service", "Experienced drivers", "2-hour park visits", "$35 flat rate"],
      icon: Car
    },
    {
      title: "Supervised Playtime",
      description: "Professional supervision during park visits",
      features: ["Trained supervisors", "Small group sizes", "Social interaction", "Exercise monitoring"],
      icon: Target
    },
    {
      title: "Advance Booking",
      description: "Plan ahead for your dog's park adventures",
      features: ["24-hour advance booking", "Recurring schedules", "Reliable scheduling"],
      icon: Calendar
    }
  ];

  return (
    <section id="services" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything your dog needs for the perfect park adventure
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-display font-semibold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-foreground">
                      <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;