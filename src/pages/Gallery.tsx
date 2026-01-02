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
      <section className="pt-32 pb-20 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 gradient-primary rounded-full blur-3xl animate-float" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-4 py-2 rounded-full bg-background/10 text-background font-body text-sm uppercase tracking-widest mb-6">
            Portfolio
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-6">
            Our{" "}
            <span className="gradient-text" style={{ WebkitTextFillColor: 'transparent', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
              Gallery
            </span>
          </h1>
          <p className="font-body text-background/70 max-w-2xl mx-auto text-lg">
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
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-3xl shadow-card hover-lift"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <span className="inline-block px-4 py-2 gradient-primary text-primary-foreground text-xs font-body uppercase tracking-wider rounded-full shadow-glow">
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
          className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-background/10 hover:bg-primary rounded-xl flex items-center justify-center text-background transition-all duration-300"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image enlarged view"
            className="max-w-full max-h-[90vh] object-contain rounded-3xl shadow-elevated"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;

