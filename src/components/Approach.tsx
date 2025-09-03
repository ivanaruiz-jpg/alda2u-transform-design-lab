import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Eye, Zap, Cpu } from "lucide-react";

const Approach = () => {
  const pillars = [
    {
      icon: Heart,
      title: "Diseño centrado en las personas",
      description: "Ponemos a las personas en el centro de cada decisión, considerando sus necesidades, emociones y experiencias."
    },
    {
      icon: Users,
      title: "Participación como motor de cambio",
      description: "Involucramos activamente a todos los actores relevantes en el proceso de diseño y transformación."
    },
    {
      icon: Eye,
      title: "Mirada sistémica",
      description: "Analizamos el contexto completo, considerando todas las interacciones y dependencias del sistema."
    },
    {
      icon: Zap,
      title: "Adaptabilidad y acompañamiento",
      description: "Acompañamos durante todo el proceso, adaptándonos a las necesidades cambiantes de cada organización."
    }
  ];

  return (
    <section id="approach" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            Nuestro enfoque
          </h2>
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            Trabajamos desde cuatro pilares fundamentales que guían nuestra metodología y definen nuestra forma de entender la transformación organizacional.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {pillars.map((pillar, index) => (
            <Card key={index} className="group hover:shadow-strong transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <pillar.icon className="w-10 h-10 text-accent" />
                </div>
                <CardTitle className="text-primary text-xl leading-tight">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;