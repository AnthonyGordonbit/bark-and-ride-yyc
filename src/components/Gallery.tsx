import { useState } from "react";
import { X, Camera } from "lucide-react";

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
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const images = [
    { src: dog1, alt: "Happy dog at the park" },
    { src: dog2, alt: "Dog enjoying a ride" },
    { src: dog3, alt: "Playful pup adventure" },
    { src: dog4, alt: "Furry friend having fun" },
    { src: dog5, alt: "Dog park playtime" },
    { src: dog6, alt: "Tail-wagging good time" },
    { src: dog7, alt: "Happy pup on the go" },
    { src: dog8, alt: "Dog loving the outdoors" },
    { src: team, alt: "Our amazing team" },
  ];

  return (
    <section id="gallery" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Camera className="w-4 h-4" />
            Photo Gallery
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Happy <span className="text-primary">Tails</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the joy and excitement of our furry friends during their park adventures
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-xl border border-border/50 bg-muted/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 aspect-square"
              onClick={() => setSelectedImage(image)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedImage(image);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View enlarged ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged image view"
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
              aria-label="Close enlarged image"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
