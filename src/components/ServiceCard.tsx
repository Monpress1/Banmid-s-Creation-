import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  illustration: React.ReactNode;
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, illustration, index }: ServiceCardProps) => {
  return (
    <div
      className={`glass-card rounded-3xl p-8 hover-lift group relative overflow-hidden animate-fade-slide-in opacity-0`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Background illustration */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
        {illustration}
      </div>
      
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 w-full h-1 gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
          <Icon size={28} className="text-primary-foreground" />
        </div>
        
        <h3 className="font-display text-2xl font-semibold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
          {title}
        </h3>
        
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
