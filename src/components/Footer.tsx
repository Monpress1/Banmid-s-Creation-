import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl font-semibold mb-4">
              Banmid's <span className="text-primary">Creation</span>
            </h3>
            <p className="font-body text-background/70 text-sm leading-relaxed">
              Crafting elegance and tradition with every stitch. Premium tailoring services 
              available across Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="font-body text-sm text-background/70 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/services" className="font-body text-sm text-background/70 hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/gallery" className="font-body text-sm text-background/70 hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link to="/contact" className="font-body text-sm text-background/70 hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:banmidnneka@gmail.com" 
                className="flex items-center gap-3 font-body text-sm text-background/70 hover:text-primary transition-colors"
              >
                <Mail size={16} />
                banmidnneka@gmail.com
              </a>
              <a 
                href="tel:+2348160247730" 
                className="flex items-center gap-3 font-body text-sm text-background/70 hover:text-primary transition-colors"
              >
                <Phone size={16} />
                0816 024 7730
              </a>
              <div className="flex items-center gap-3 font-body text-sm text-background/70">
                <MapPin size={16} />
                Available Nationwide, Nigeria
              </div>
              <div className="flex items-center gap-4 mt-4">
                <a 
                  href="https://www.facebook.com/nnekababey" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/banmidcreation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="font-body text-sm text-background/50">
            © {new Date().getFullYear()} Banmid's Creation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;