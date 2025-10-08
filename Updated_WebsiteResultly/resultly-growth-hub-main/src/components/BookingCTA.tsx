import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const BookingCTA = () => {
  return (
    <section id="booking" className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden animate-gradient" style={{ backgroundSize: '200% 200%' }}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10 animate-fade-up">
          <div className="w-20 h-20 mx-auto rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <Calendar className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-white">
            Boka ett gratis strategi-samtal
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Fyll i en tid som passar dig – vi hjälper dig ta nästa steg i din marknadsföring. 
            Inga krångliga formulär, inga dolda kostnader. Bara 30 minuter som kan förändra din verksamhet.
          </p>

          {/* Placeholder for Calendly/HubSpot integration */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-strong max-w-2xl mx-auto">
            <div className="space-y-6">
              <p className="text-foreground text-lg font-medium">
                📅 Booking-integration kommer här
              </p>
              <p className="text-muted-foreground">
                Integrationsplats för Calendly eller HubSpot Meetings. Lägg till din bookninglänk för att aktivera direktbokning.
              </p>
             <div
  className="w-full"
  dangerouslySetInnerHTML={{
    __html: `<iframe
      src="https://meetings-eu1.hubspot.com/christian-wohnberg"
      width="100%"
      height="700"
      style="border:none;"
      title="Boka ett möte"
      loading="lazy"
    ></iframe>`,
  }}
/>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 pt-8 max-w-3xl mx-auto">
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-2">30 min</p>
              <p className="text-white/80">Gratis samtal</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-2">0 kr</p>
              <p className="text-white/80">Ingen kostnad</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white mb-2">100%</p>
              <p className="text-white/80">Skräddarsytt</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
