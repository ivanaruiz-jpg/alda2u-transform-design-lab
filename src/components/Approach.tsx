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
    },
    {
      icon: Cpu,
      title: "Digitalización y tecnología con sentido",
      description: "Integramos tecnología como herramienta para mejorar procesos y aportar valor real a personas y organizaciones."
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
            Trabajamos desde cinco pilares fundamentales que guían nuestra metodología y definen nuestra forma de entender la transformación organizacional.
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

        {/* Technology philosophy */}
        <div className="max-w-5xl mx-auto">
          <Card className="shadow-medium border-accent/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                  <Cpu className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
                  Digitalización y tecnología con sentido
                </h3>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-6 md:p-8">
                <p className="text-lg text-foreground leading-relaxed">
                  Aunque nuestra base metodológica se apoya en la digitalización y el uso de herramientas tecnológicas, 
                  <span className="font-semibold text-primary"> no creemos en la tecnología como fin, sino como un medio</span> para 
                  mejorar procesos, facilitar el trabajo y aportar valor real a las personas y a la organización.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Centrada en personas</h4>
                  <p className="text-sm text-muted-foreground">La tecnología debe servir a las personas, no al revés</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Con propósito claro</h4>
                  <p className="text-sm text-muted-foreground">Cada solución tecnológica tiene un objetivo específico y medible</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Sostenible</h4>
                  <p className="text-sm text-muted-foreground">Soluciones que perduran y se adaptan al crecimiento</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Approach;