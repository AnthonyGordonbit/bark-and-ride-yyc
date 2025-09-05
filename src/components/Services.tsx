import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Park Transportation",
      description: "Safe, comfortable rides to Calgary's best dog parks",
      features: ["Door-to-door service", "Experienced drivers", "GPS tracking", "Photo updates"],
      icon: "🚗"
    },
    {
      title: "Supervised Playtime",
      description: "Professional supervision during park visits",
      features: ["Trained supervisors", "Small group sizes", "Social interaction", "Exercise monitoring"],
      icon: "🎾"
    },
    {
      title: "Flexible Scheduling",
      description: "Book rides that fit your busy schedule",
      features: ["Same-day booking", "Recurring schedules", "Emergency pickup", "Holiday service"],
      icon: "📅"
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
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
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
                      <span className="text-primary mr-3">✓</span>
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