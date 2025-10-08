import { Target, TrendingUp, Users } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Tydlighet",
      description: "Vi kommunicerar klart och transparent i varje steg"
    },
    {
      icon: TrendingUp,
      title: "Resultat",
      description: "Mätbara resultat som driver din verksamhet framåt"
    },
    {
      icon: Users,
      title: "Tillväxt",
      description: "Hållbar tillväxt anpassad efter dina förutsättningar"
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-bold font-heading text-primary">
                Professionell marknadsföring för alla
              </h2>
              <p className="text-xl text-foreground/80 leading-relaxed font-medium">
                Vi startade Resultly för att göra professionell marknadsföring tillgänglig för småföretag.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Vi tror på resultat, tydlighet och enkelhet – och hjälper dig växa med rätt strategi och rätt verktyg.
              </p>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg hover:bg-card transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold font-heading text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={aboutImage} 
                alt="Resultly team collaboration" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
