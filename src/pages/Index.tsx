import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Scissors, 
  Sparkles, 
  Users, 
  MapPin, 
  Crown,
  Heart,
  Phone,
  Mail,
  Facebook,
  Instagram
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedHero from "@/components/AnimatedHero";
import DraggableGallery from "@/components/DraggableGallery";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  const services = [
    {
      icon: Crown,
      title: "Aso Oke",
      description: "Traditional handwoven fabric crafted into stunning ceremonial outfits for royalty.",
      illustration: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <pattern id="weave" patternUnits="userSpaceOnUse" width="10" height="10">
            <path d="M0 5h10M5 0v10" stroke="currentColor" strokeWidth="2" fill="none"/>
          </pattern>
          <rect width="100" height="100" fill="url(#weave)"/>
        </svg>
      ),
    },
    {
      icon: Sparkles,
      title: "Bead Works",
      description: "Exquisite beadwork embellishments that add luxury and sparkle to every piece.",
      illustration: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="20" cy="20" r="8" fill="currentColor"/>
          <circle cx="50" cy="30" r="6" fill="currentColor"/>
          <circle cx="80" cy="20" r="8" fill="currentColor"/>
          <circle cx="35" cy="55" r="7" fill="currentColor"/>
          <circle cx="65" cy="60" r="5" fill="currentColor"/>
          <circle cx="50" cy="85" r="8" fill="currentColor"/>
        </svg>
      ),
    },
    {
      icon: Users,
      title: "Aso Ebi",
      description: "Coordinated family and group outfits for weddings and special occasions.",
      illustration: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="30" cy="30" r="15" fill="currentColor"/>
          <circle cx="70" cy="30" r="15" fill="currentColor"/>
          <circle cx="50" cy="70" r="15" fill="currentColor"/>
          <path d="M30 45 L50 55 L70 45" stroke="currentColor" strokeWidth="3" fill="none"/>
        </svg>
      ),
    },
    {
      icon: Heart,
      title: "Wedding Gowns",
      description: "Breathtaking bridal gowns designed to make your special day unforgettable.",
      illustration: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 20 C30 20 20 40 20 50 C20 70 50 90 50 90 C50 90 80 70 80 50 C80 40 70 20 50 20Z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      icon: Scissors,
      title: "Male & Female Clothing",
      description: "Bespoke tailoring for both men and women with perfect fits guaranteed.",
      illustration: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M40 10 L40 40 L25 70 L40 70 L50 50 L60 70 L75 70 L60 40 L60 10" stroke="currentColor" strokeWidth="3" fill="none"/>
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      name: "Oluwaseun A.",
      role: "Bride",
      content: "My wedding gown was beyond perfect. The attention to detail in the beadwork was incredible!",
    },
    {
      name: "Chidi O.",
      role: "Business Executive",
      content: "Best bespoke tailoring I've experienced in Nigeria. The fit is always perfect every single time.",
    },
    {
      name: "Amina Z.",
      role: "Event Host",
      content: "The Aso Oke was stunning. I received so many compliments at the gala. Truly royal work!",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <AnimatedHero />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-background/20 mb-8 animate-fade-slide-in opacity-0">
            <Sparkles size={16} className="text-primary" />
            <span className="font-body text-sm text-background/90">Premium Tailoring Services</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-background mb-6 animate-fade-slide-in opacity-0 stagger-1">
            Banmid's{" "}
            <span className="gradient-text bg-clip-text" style={{ WebkitTextFillColor: 'transparent', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
              Creation
            </span>
          </h1>
          
          <p className="font-body text-lg md:text-xl text-background/80 max-w-2xl mx-auto mb-10 animate-fade-slide-in opacity-0 stagger-2">
            Where tradition meets elegance. Premium tailoring services crafted with passion 
            and delivered with excellence across Nigeria.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-slide-in opacity-0 stagger-3">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-3 gradient-primary text-primary-foreground px-8 py-4 rounded-2xl font-body text-sm uppercase tracking-widest hover:opacity-90 transition-all duration-300 shadow-glow hover:shadow-elevated"
            >
              Explore Services
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-background/10 backdrop-blur-sm border-2 border-background/30 text-background px-8 py-4 rounded-2xl font-body text-sm uppercase tracking-widest hover:bg-background hover:text-foreground transition-all duration-300"
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
      <section className="py-24 bg-secondary relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 gradient-primary opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 gradient-secondary opacity-5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-body text-sm uppercase tracking-widest mb-4">
              What We Offer
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Our <span className="gradient-text" style={{ WebkitTextFillColor: 'transparent', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>Services</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              From traditional wear to modern designs, we bring your fashion vision to life with exceptional craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                illustration={service.illustration}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-body text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300 group"
            >
              View All Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-body text-sm uppercase tracking-widest mb-4">
              Portfolio
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Our <span className="gradient-text" style={{ WebkitTextFillColor: 'transparent', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>Creations</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Explore our portfolio of stunning designs and masterful craftsmanship.
            </p>
          </div>
        </div>
        
        <DraggableGallery />

        <div className="container mx-auto px-4 text-center mt-8">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-body text-sm uppercase tracking-widest hover:opacity-90 transition-all duration-300 shadow-soft"
          >
            View Full Gallery
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-secondary/30 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-body text-sm uppercase tracking-widest mb-4">
              Reviews
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Client <span className="gradient-text" style={{ WebkitTextFillColor: 'transparent', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>Stories</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-background p-8 rounded-3xl shadow-soft border border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, star) => (
                    <Sparkles key={star} size={14} className="text-orange-400 fill-orange-400" />
                  ))}
                </div>
                <p className="font-body text-muted-foreground mb-6 italic">"{t.content}"</p>
                <div>
                  <p className="font-display font-bold text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-primary uppercase tracking-tighter">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 gradient-primary opacity-10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 gradient-secondary opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Contact Info */}
            <div className="text-background">
              <span className="inline-block px-4 py-2 rounded-full bg-background/10 text-background font-body text-sm uppercase tracking-widest mb-6">
                Get In Touch
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Let's Create Something{" "}
                <span className="gradient-text" style={{ WebkitTextFillColor: 'transparent', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>Beautiful</span>
              </h2>
              <p className="font-body text-background/70 mb-10 leading-relaxed">
                Ready to bring your fashion vision to life? Contact us today and let's discuss 
                how we can create the perfect outfit for your special occasion.
              </p>

              <div className="space-y-6">
                <a href="mailto:banmidnneka@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                    <Mail size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-background/60">Email Us</p>
                    <p className="font-body text-background">banmidnneka@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+2348160247730" className="flex items-center gap-4 group">
                  <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                    <Phone size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-background/60">Call Us</p>
                    <p className="font-body text-background"> 07032405793 </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                    <MapPin size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-background/60">Location</p>
                    <p className="font-body text-background">Makurdi</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-10">
                <a
                  href="https://www.facebook.com/nnekababey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-background/10 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-glow"
                >
                  <Facebook size={20} className="text-background" />
                </a>
                <a
                  href="https://www.instagram.com/banmidcreation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-background/10 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-glow"
                >
                  <Instagram size={20} className="text-background" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card rounded-3xl p-8 md:p-10 bg-card">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Send Us a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Location Banner */}
      <section className="py-16 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-background rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-background rounded-full blur-2xl" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <MapPin size={24} className="text-primary-foreground" />
            </div>
          </div>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Available Across Nigeria
          </h3>
          <p className="font-body text-primary-foreground/80 max-w-2xl mx-auto">
            No matter where you are in Nigeria, we bring our exceptional tailoring services to you. 
            Contact us today to start your fashion journey.
          </p>
        </div>
      </section>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2348160247730"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-transform duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.63 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="absolute right-20 bg-white text-black px-3 py-1 rounded-lg text-xs font-body opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md border border-border">
          Chat with us
        </span>
      </a>
    </div>
  );
};

export default Index;
