import { Link } from "react-router-dom";
import { ArrowRight, Scissors, Sparkles, Users, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AutoScrollGallery from "@/components/AutoScrollGallery";
import gallery5 from "@/assets/gallery-5.jpg";

const Index = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Aso Oke",
      description: "Traditional handwoven fabric crafted into stunning ceremonial outfits.",
    },
    {
      icon: Scissors,
      title: "Bead Works",
      description: "Exquisite beadwork embellishments that add luxury to every piece.",
    },
    {
      icon: Users,
      title: "Aso Ebi",
      description: "Coordinated family and group outfits for special occasions.",
    },
    {
      icon: Users,
      title: "Male & Female Clothing",
      description: "Bespoke tailoring for both men and women with perfect fits.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${gallery5})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-background mb-6 animate-fade-in">
            Banmid's <span className="text-primary">Creation</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-background/80 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Where tradition meets elegance. Premium tailoring services crafted with passion 
            and delivered with excellence across Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-body text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
            >
              Our Services
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-background text-background px-8 py-4 rounded-md font-body text-sm uppercase tracking-widest hover:bg-background hover:text-foreground transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-background/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-background/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Our Services
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              From traditional wear to modern designs, we bring your fashion vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow text-center group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon size={28} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-body text-sm uppercase tracking-widest hover:text-primary/80 transition-colors"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Our Creations
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Explore our portfolio of stunning designs and masterful craftsmanship.
            </p>
          </div>
        </div>
        
        <AutoScrollGallery />

        <div className="container mx-auto px-4 text-center mt-8">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-primary font-body text-sm uppercase tracking-widest hover:text-primary/80 transition-colors"
          >
            View Full Gallery
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Location Banner */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin size={24} className="text-primary-foreground" />
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground">
              Available Across Nigeria
            </h3>
          </div>
          <p className="font-body text-primary-foreground/80 max-w-2xl mx-auto">
            No matter where you are in Nigeria, we bring our exceptional tailoring services to you. 
            Contact us today to start your fashion journey.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;