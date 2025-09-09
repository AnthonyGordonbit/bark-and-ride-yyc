import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What exactly is Bark & Ride?",
      answer: "We're your dog's personal chauffeur and playdate planner! We pick up your pup, whisk them off to the park or playgroup, let them run wild (safely!), and return them home happy and tired."
    },
    {
      question: "How do I schedule a pick-up?",
      answer: "Easy! Just use our website, or send us a message on Instagram. You choose the day, time slot, and your pup's preferences—we'll handle the rest."
    },
    {
      question: "Do you go to specific parks or rotate locations?",
      answer: "We've got a few dog parks and hot spots we love, and we rotate based on weather, crowd levels, and sniff-worthy vibes. All locations are safe, secure, and tail-tested."
    },
    {
      question: "What kind of dogs do you accept?",
      answer: "Big, small, sassy, or shy—we love them all! We do a quick meet-and-sniff at the first pick up to make sure your pup's social and safe for group play."
    },
    {
      question: "Do I need to be home for pick-up/drop-off?",
      answer: "Nope! If we have access (a code, key, or secret pawshake), we can grab and return your pup without disrupting your day."
    },
    {
      question: "How long is each outing?",
      answer: "Our standard Bark & Ride adventures last about 120 minutes—60 minutes at the park, including pick-up/drop-off time. Perfect for getting the zoomies out."
    },
    {
      question: "How much does it cost?",
      answer: "We offer several pricing packages depending on frequency and type of outing. One-time rides are $35; bark-tastic bundles (10 rides for $300). Check our website or contact us for all the deets, including second-dog rates!"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers! Here's everything you need to know about our tail-wagging service.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;