import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Resultly hjälpte oss nå fler kunder på bara några veckor. Proffsigt och resultatinriktat!",
      author: "Anna Bergström",
      company: "Bergström Design AB",
    },
    {
      quote: "Tydlig kommunikation och mätbara resultat. Precis vad vi behövde för att växa.",
      author: "Erik Johansson",
      company: "Johansson Consulting",
    },
    {
      quote: "Äntligen en marknadsföringsbyrå som förstår småföretagens utmaningar och möjligheter.",
      author: "Maria Svensson",
      company: "Svensson & Co",
    },
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center space-y-5 mb-20 animate-fade-up">
          <h2 className="text-4xl lg:text-6xl font-bold font-heading text-primary">
            Vad våra kunder säger
          </h2>
          <p className="text-xl text-muted-foreground">
            Vi är stolta över de resultat vi uppnår tillsammans
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card border-border/50 hover:shadow-strong transition-all duration-500 hover:-translate-y-1 animate-fade-up shadow-soft"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold font-heading text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
