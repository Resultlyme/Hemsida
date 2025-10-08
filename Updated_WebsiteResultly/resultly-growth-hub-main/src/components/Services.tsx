import { Sprout, Target, Globe, LineChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Sprout,
      title: "Organisk tillväxt",
      description: "Innehåll, sociala medier och SEO som driver trafik och engagemang naturligt över tid.",
    },
    {
      icon: Target,
      title: "Betald annonsering",
      description: "Smarta kampanjer på Google, Meta och TikTok som ger resultat direkt.",
    },
    {
      icon: Globe,
      title: "Webb & system",
      description: "Vi bygger hemsidor, AI-lösningar och automationer som får din verksamhet att flyta.",
    },
    {
      icon: LineChart,
      title: "Strategi & struktur",
      description: "Vi skapar tillväxtplaner och strukturer som fungerar i praktiken – inte bara på pappret.",
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center space-y-5 mb-20 animate-fade-up">
          <h2 className="text-4xl lg:text-6xl font-bold font-heading text-primary">
            Våra tjänster
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Allt du behöver för att växa – från strategi till genomförande
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-strong transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] border-border/50 animate-fade-up shadow-soft"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <CardTitle className="text-2xl font-heading">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
