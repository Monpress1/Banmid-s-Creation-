import { useState } from "react";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: gallery1, alt: "Elegant royal blue ball gown with flowing fabric", category: "Gowns" },
    { src: gallery2, alt: "Detailed corset back design with ribbon lacing", category: "Details" },
    { src: gallery3, alt: "Ankara print corset with traditional patterns", category: "Ankara" },
    { src: gallery4, alt: "Runway floral dress with ruffled sleeves", category: "Runway" },
    { src: gallery5, alt: "Royal blue flowing gown with tulle details", category: "Gowns" },
    { src: gallery6, alt: "African print runway dress with bold patterns", category: "Runway" },
    { src: gallery7, alt: "White bridal gown with cascading ruffles", category: "Bridal" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-6">
            Our <span className="text-primary">Gallery</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our collection of stunning creations. Each piece tells a story of 
            craftsmanship, elegance, and attention to detail.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                  <div className="p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-body uppercase tracking-wider rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-background hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image enlarged view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;