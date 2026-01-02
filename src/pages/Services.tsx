import { Link } from "react-router-dom";
import { Scissors, Sparkles, Users, Crown, Heart, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const Services = () => {
  const services = [
    {
      icon: Crown,
      title: "Aso Oke",
      description:
        "Traditional handwoven Yoruba fabric transformed into breathtaking ceremonial attire. Perfect for weddings, chieftaincy titles, and cultural celebrations. Each piece is meticulously crafted to honor heritage while embracing modern elegance.",
      image: gallery1,
      features: ["Wedding Attire", "Cultural Celebrations", "Custom Designs", "Premium Fabrics"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Sparkles,
      title: "Bead Works",
      description:
        "Exquisite beadwork embellishments that transform any outfit into a masterpiece. From delicate accents to bold statement pieces, our bead artistry adds luxury and uniqueness to your wardrobe.",
      image: gallery3,
      features: ["Custom Embellishments", "Jewelry Design", "Dress Accents", "Traditional Beading"],
      gradient: "from-pink-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Aso Ebi",
      description:
        "Coordinated family and group outfits that make every occasion memorable. We specialize in creating cohesive, stunning ensembles for weddings, parties, and celebrations that keep your group looking unified and elegant.",
      image: gallery4,
      features: ["Family Coordination", "Group Orders", "Custom Colors", "Event Styling"],
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: Heart,
      title: "Wedding Gowns",
      description:
        "Breathtaking bridal gowns designed to make your special day unforgettable. From classic elegance to modern glamour, we create the dress of your dreams with meticulous attention to detail.",
      image: gallery5,
      features: ["Custom Bridal Design", "Fittings Included", "Premium Materials", "Veil & Accessories"],
      gradient: "from-rose-400 to-pink-600",
    },
    {
      icon: Scissors,
      title: "Male & Female Clothing",
      description:
        "Bespoke tailoring for both men and women with attention to perfect fits and timeless style. From traditional attire to contemporary fashion, we create pieces that reflect your personality and enhance your presence.",
      image: gallery7,
      features: ["Bespoke Fitting", "Traditional Wear", "Modern Styles", "Alterations"],
      gradient: "from-teal-500 to-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 gradient-primary rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-96 h-96 gradient-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-4 py-2 rounded-full bg-background/10 text-background font-body text-sm uppercase tracking-widest mb-6">
            Premium Tailoring
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-6">
            Our{" "}
            <span className="gradient-text" style={{ WebkitTextFillColor: 'transparent', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
              Services
            </span>
          </h1>
          <p className="font-body text-background/70 max-w-2xl mx-auto text-lg">
            From traditional craftsmanship to contemporary designs, we offer a comprehensive 
            range of tailoring services to meet all your fashion needs.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 lg:gap-20 items-center`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    {/* Glow effect */}
                    <div className={`absolute -inset-4 bg-gradient-to-r ${service.gradient} opacity-20 rounded-3xl blur-2xl group-hover:opacity-30 transition-opacity duration-500`} />
                    
                    <div className="relative overflow-hidden rounded-3xl shadow-elevated">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                      
                      {/* Floating badge */}
                      <div className="absolute top-6 right-6 px-4 py-2 glass-card rounded-full">
                        <service.icon size={20} className="text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center shadow-glow`}>
                      <service.icon size={28} className="text-primary-foreground" />
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>

                  <p className="font-body text-muted-foreground mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3 font-body text-foreground"
                      >
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center`}>
                          <Check size={14} className="text-primary-foreground" />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 gradient-primary text-primary-foreground px-8 py-4 rounded-2xl font-body text-sm uppercase tracking-widest hover:opacity-90 transition-all duration-300 shadow-glow hover:shadow-elevated"
                  >
                    Inquire Now
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 gradient-primary opacity-10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 gradient-secondary opacity-10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-background mb-6">
            Ready to Create Something{" "}
            <span className="gradient-text" style={{ WebkitTextFillColor: 'transparent', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
              Beautiful?
            </span>
          </h2>
          <p className="font-body text-background/70 max-w-xl mx-auto mb-10">
            Let us bring your fashion vision to life. Contact us today to discuss your project 
            and discover how we can create the perfect outfit for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 gradient-primary text-primary-foreground px-10 py-5 rounded-2xl font-body text-sm uppercase tracking-widest hover:opacity-90 transition-all duration-300 shadow-glow hover:shadow-elevated"
          >
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
