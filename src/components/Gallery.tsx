import { useState } from "react";
import { X } from "lucide-react";
import dog1 from "@/assets/gallery/dog-1.jpg";
import dog2 from "@/assets/gallery/dog-2.jpg";
import dog3 from "@/assets/gallery/dog-3.jpg";
import dog4 from "@/assets/gallery/dog-4.jpg";
import dog5 from "@/assets/gallery/dog-5.jpg";
import dog6 from "@/assets/gallery/dog-6.jpg";
import dog7 from "@/assets/gallery/dog-7.jpg";
import dog8 from "@/assets/gallery/dog-8.jpg";
import team from "@/assets/gallery/team.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: dog1, alt: "Golden retriever running happily at the dog park" },
    { src: dog2, alt: "Happy golden retriever with tongue out enjoying park time" },
    { src: dog3, alt: "Multiple dogs playing together at the park" },
    { src: dog4, alt: "Dogs running and playing in the outdoor area" },
    { src: dog5, alt: "Dog supervisor with multiple dogs during park visit" },
    { src: team, alt: "Our dedicated Bark & Ride team members" },
    { src: dog6, alt: "Small dog enjoying supervised playtime" },
    { src: dog7, alt: "Dog relaxing during park adventure" },
    { src: dog8, alt: "Dogs playing and socializing together" },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Happy <span className="text-primary">Tails</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the joy and excitement of our furry friends during their park adventures
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-2xl shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-2"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;