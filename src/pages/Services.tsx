import { Link } from "react-router-dom";
import { Scissors, Sparkles, Users, Crown, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery7 from "@/assets/gallery-7.jpg";

const Services = () => {
  const services = [
    {
      icon: Crown,
      title: "Aso Oke",
      description:
        "Traditional handwoven Yoruba fabric transformed into breathtaking ceremonial attire. Perfect for weddings, chieftaincy titles, and cultural celebrations. Each piece is meticulously crafted to honor heritage while embracing modern elegance.",
      image: gallery1,
      features: ["Wedding Attire", "Cultural Celebrations", "Custom Designs", "Premium Fabrics"],
    },
    {
      icon: Sparkles,
      title: "Bead Works",
      description:
        "Exquisite beadwork embellishments that transform any outfit into a masterpiece. From delicate accents to bold statement pieces, our bead artistry adds luxury and uniqueness to your wardrobe.",
      image: gallery3,
      features: ["Custom Embellishments", "Jewelry Design", "Dress Accents", "Traditional Beading"],
    },
    {
      icon: Users,
      title: "Aso Ebi",
      description:
        "Coordinated family and group outfits that make every occasion memorable. We specialize in creating cohesive, stunning ensembles for weddings, parties, and celebrations that keep your group looking unified and elegant.",
      image: gallery4,
      features: ["Family Coordination", "Group Orders", "Custom Colors", "Event Styling"],
    },
    {
      icon: Scissors,
      title: "Male & Female Clothing",
      description:
        "Bespoke tailoring for both men and women with attention to perfect fits and timeless style. From traditional attire to contemporary fashion, we create pieces that reflect your personality and enhance your presence.",
      image: gallery7,
      features: ["Bespoke Fitting", "Traditional Wear", "Modern Styles", "Alterations"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            From traditional craftsmanship to contemporary designs, we offer a comprehensive 
            range of tailoring services to meet all your fashion needs.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative overflow-hidden rounded-lg shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] md:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                  </div>
                </div>

                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <service.icon size={28} className="text-primary" />
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                      {service.title}
                    </h2>
                  </div>

                  <p className="font-body text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm font-body text-foreground"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-body text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
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
      <section className="py-20 bg-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-background mb-6">
            Ready to Create Something Beautiful?
          </h2>
          <p className="font-body text-background/70 max-w-xl mx-auto mb-8">
            Let us bring your fashion vision to life. Contact us today to discuss your project 
            and discover how we can create the perfect outfit for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-body text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
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