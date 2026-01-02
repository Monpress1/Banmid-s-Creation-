import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
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
            Contact Us
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-6">
            Get in{" "}
            <span className="gradient-text" style={{ WebkitTextFillColor: 'transparent', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
              Touch
            </span>
          </h1>
          <p className="font-body text-background/70 max-w-2xl mx-auto text-lg">
            Ready to start your fashion journey? Contact us today to discuss your 
            tailoring needs and bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <a href="mailto:banmidnneka@gmail.com" className="flex items-center gap-4 group glass-card p-5 rounded-2xl hover-lift">
                  <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                    <Mail size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">Email Us</p>
                    <p className="font-body font-medium text-foreground">banmidnneka@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+2348160247730" className="flex items-center gap-4 group glass-card p-5 rounded-2xl hover-lift">
                  <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                    <Phone size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">Call Us</p>
                    <p className="font-body font-medium text-foreground">0816 024 7730</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 glass-card p-5 rounded-2xl">
                  <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                    <MapPin size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">Location</p>
                    <p className="font-body font-medium text-foreground">Available Across Nigeria</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/nnekababey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 glass-card hover:gradient-primary rounded-2xl flex items-center justify-center transition-all duration-300 hover:shadow-glow group"
                  >
                    <Facebook size={24} className="text-foreground group-hover:text-primary-foreground" />
                  </a>
                  <a
                    href="https://www.instagram.com/banmidcreation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 glass-card hover:gradient-primary rounded-2xl flex items-center justify-center transition-all duration-300 hover:shadow-glow group"
                  >
                    <Instagram size={24} className="text-foreground group-hover:text-primary-foreground" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
