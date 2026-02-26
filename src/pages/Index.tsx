import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BringAFriendPromo from "@/components/BringAFriendPromo";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content link for keyboard navigation */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-primary-foreground"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <BringAFriendPromo />
        <Services />
        <Gallery />
        <About />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
