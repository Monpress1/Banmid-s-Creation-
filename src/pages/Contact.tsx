import { Mail, Phone, MapPin, Facebook, Instagram, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct mailto link
    const subject = encodeURIComponent(`Inquiry from ${formData.name} - ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:banmidnneka@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client...",
      description: "Your inquiry will be sent via email.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
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
              <h2 className="font-display text-3xl font-semibold text-foreground mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:banmidnneka@gmail.com"
                      className="font-body text-muted-foreground hover:text-primary transition-colors"
                    >
                      banmidnneka@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+2348160247730"
                      className="font-body text-muted-foreground hover:text-primary transition-colors"
                    >
                      0816 024 7730
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                      Location
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Services available across Nigeria
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/nnekababey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors group"
                  >
                    <Facebook size={22} className="text-primary group-hover:text-primary-foreground" />
                  </a>
                  <a
                    href="https://www.instagram.com/banmidcreation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors group"
                  >
                    <Instagram size={22} className="text-primary group-hover:text-primary-foreground" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-display text-3xl font-semibold text-foreground mb-8">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-body text-sm font-medium text-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-md font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-body text-sm font-medium text-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-md font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-body text-sm font-medium text-foreground mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-md font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block font-body text-sm font-medium text-foreground mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-md font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="Aso Oke">Aso Oke</option>
                    <option value="Bead Works">Bead Works</option>
                    <option value="Aso Ebi">Aso Ebi</option>
                    <option value="Male Clothing">Male Clothing</option>
                    <option value="Female Clothing">Female Clothing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-body text-sm font-medium text-foreground mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-md font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground px-8 py-4 rounded-md font-body text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;