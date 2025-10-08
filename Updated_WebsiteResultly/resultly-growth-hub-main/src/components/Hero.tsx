import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/resultly-logo.png";

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary-light/70 animate-gradient" 
             style={{ 
               backgroundImage: 'linear-gradient(135deg, hsl(280 70% 50% / 0.95), hsl(280 60% 60% / 0.85), hsl(45 100% 55% / 0.7))',
               backgroundSize: '200% 200%'
             }} 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
          <img 
            src={logo} 
            alt="Resultly - Din tillväxtpartner" 
            className="h-40 sm:h-48 lg:h-56 w-auto mx-auto mb-4 drop-shadow-2xl animate-float"
          />
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-heading">
            Din tillväxtpartner i en digital värld
          </p>
          <p className="text-lg sm:text-xl text-white/95 max-w-2xl mx-auto font-body leading-relaxed">
            Smart marknadsföring för småföretag – få samma kraft som de stora, till ett pris som passar dig
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button 
              onClick={scrollToBooking}
              variant="hero"
              size="lg"
              className="w-full sm:w-auto"
            >
              Boka gratis strategi-samtal
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              onClick={scrollToServices}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary"
            >
              Se våra tjänster
              <Play className="ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
