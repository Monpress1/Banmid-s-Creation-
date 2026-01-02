import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  compact?: boolean;
}

const ContactForm = ({ compact = false }: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Inquiry from ${formData.name} - ${formData.service || 'General'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service || 'Not specified'}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:banmidnneka@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Email client opened!",
        description: "Complete sending the email in your mail app.",
      });
    }, 500);
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 font-body text-sm";
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={`grid ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"} gap-4`}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className={inputClasses}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>
      
      <div className={`grid ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"} gap-4`}>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className={inputClasses}
        />
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Select Service</option>
          <option value="Aso Oke">Aso Oke</option>
          <option value="Bead Works">Bead Works</option>
          <option value="Aso Ebi">Aso Ebi</option>
          <option value="Wedding Gowns">Wedding Gowns</option>
          <option value="Male Clothing">Male Clothing</option>
          <option value="Female Clothing">Female Clothing</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <textarea
        name="message"
        placeholder="Tell us about your project..."
        rows={compact ? 3 : 5}
        required
        value={formData.message}
        onChange={handleChange}
        className={inputClasses + " resize-none"}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-body text-sm uppercase tracking-widest hover:opacity-90 transition-all duration-300 shadow-glow hover:shadow-elevated flex items-center justify-center gap-3 disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <CheckCircle size={18} className="animate-pulse" />
            Opening Email...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
