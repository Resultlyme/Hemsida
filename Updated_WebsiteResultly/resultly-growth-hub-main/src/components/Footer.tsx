import { Linkedin, Instagram, Mail } from "lucide-react";
import logo from "@/assets/resultly-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16 lg:py-20 border-t-4 border-accent/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Resultly" className="h-12" />
            <p className="text-white/80 leading-relaxed">
              Din tillväxtpartner i en digital värld. Vi gör professionell marknadsföring tillgänglig för alla småföretag.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-heading">Kontakt</h4>
            <div className="space-y-2">
              <a 
                href="mailto:hello@resultly.se" 
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@resultly.se
              </a>
              <p className="text-white/80">Resultly AB, Sverige</p>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-heading">Följ oss</h4>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Resultly AB. Alla rättigheter förbehållna.</p>
          <p className="mt-2">Design inspiration: Frankly Media & Scream</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
