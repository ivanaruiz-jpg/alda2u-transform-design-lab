import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Handshake, Shield, Lightbulb, Brain, Code, Palette, UserCheck, Sparkles, Cog, Zap, Target, Eye, Puzzle, Network, Compass } from "lucide-react";
import teamCollaboration from "@/assets/team-collaboration.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compromiso y personalización",
      description: "Cada proyecto es único y merece una atención personalizada que refleje las necesidades específicas de la organización."
    },
    {
      icon: Handshake,
      title: "Colaboración genuina",
      description: "Trabajamos codo a codo con nuestros clientes, creando alianzas duraderas basadas en la confianza mutua."
    },
    {
      icon: Users,
      title: "Cuidado del vínculo",
      description: "Priorizamos las relaciones humanas y el bienestar de todas las personas involucradas en el proceso."
    },
    {
      icon: Shield,
      title: "Discreción y respeto",
      description: "Mantenemos la máxima confidencialidad y respeto hacia la información y procesos de nuestros clientes."
    },
    {
      icon: Lightbulb,
      title: "Transformación con sentido",
      description: "Cada cambio que proponemos tiene un propósito claro y aporta valor real a la organización y las personas."
    }
  ];

  const milestones = [
    { year: "2018", event: "Fundación de ALDA2U" },
    { year: "2019", event: "Primer proyecto de interoperabilidad" },
    { year: "2021", event: "Expansión al sector sociosanitario" },
    { year: "2022", event: "Desarrollo de metodología A2U" },
    { year: "2024", event: "Más de 50 organizaciones transformadas" }
  ];

  const workAreas = [
    {
      icon: Heart,
      title: "Transforming Care",
      description: "Área centrada en el diseño de servicios, experiencias y procesos centrados en las personas. Foco en innovación en atención, interacción, participación y rediseño organizacional.",
      color: "bg-gradient-to-br from-accent/20 to-accent/30"
    },
    {
      icon: Cog,
      title: "Technology & Services",
      description: "Área dedicada a la integración de soluciones tecnológicas con propósito.",
      color: "bg-gradient-to-br from-primary/20 to-primary/30"
    }
  ];

  const teamMembers = [
    { icon: Compass, role: "Visionario estratégico", symbol: "compass", color: "text-primary" },
    { icon: Puzzle, role: "Integrador de sistemas", symbol: "puzzle", color: "text-accent" },
    { icon: Eye, role: "Observador empático", symbol: "eye", color: "text-secondary" },
    { icon: Sparkles, role: "Catalizador creativo", symbol: "sparkles", color: "text-primary" },
    { icon: Network, role: "Conector humano", symbol: "network", color: "text-accent" },
    { icon: Target, role: "Enfocador de resultados", symbol: "target", color: "text-secondary" },
    { icon: Zap, role: "Energizador de cambio", symbol: "zap", color: "text-primary" },
    { icon: Brain, role: "Arquitecto de soluciones", symbol: "brain", color: "text-accent" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            Quiénes somos
          </h2>
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            Somos un equipo multidisciplinario con enfoque integral y amplia experiencia en el ámbito sociosanitario. 
            Combinamos diseño estratégico, innovación tecnológica y sensibilidad humana para acompañar a las organizaciones 
            en sus procesos de transformación y mejora continua.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-12">
            Nuestro recorrido
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="text-accent font-bold text-lg mb-2">{milestone.year}</div>
                        <p className="text-foreground">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-soft"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-12">
            Nuestros valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-3">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team and Structure */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-12">
            Nuestro equipo y estructura
          </h3>
          
          {/* Work Areas Structure */}
          <div className="mb-16">
            <h4 className="text-xl font-semibold text-primary text-center mb-8">
              Cómo nos organizamos
            </h4>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              {workAreas.map((area, index) => (
                <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden">
                  <div className={`h-2 ${area.color}`}></div>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors">
                        <area.icon className="w-7 h-7 text-accent" />
                      </div>
                      <h5 className="text-xl font-bold text-primary">{area.title}</h5>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team composition */}
          <div>
            <h4 className="text-xl font-semibold text-primary text-center mb-8">
              Quiénes somos
            </h4>
            
            <div className="text-center mb-12">
              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg max-w-4xl mx-auto mb-8">
                <p className="text-lg text-foreground leading-relaxed italic">
                  "Ocho personas únicas que se complementan, cada una con su esencia y especialidad, trabajando como un ecosistema colaborativo."
                </p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Representamos a nuestro equipo a través de símbolos que evocan cómo trabajamos, qué nos representa y cómo nos complementamos en cada proyecto.
              </p>
            </div>

          {/* Symbolic Team Representation */}
          <div className="relative bg-gradient-to-br from-background via-accent/5 to-primary/5 rounded-2xl p-12 mb-12">
            {/* Central connecting element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent/30">
              <Users className="w-10 h-10 text-accent" />
            </div>
            
            {/* Team members arranged in a circle */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
              {teamMembers.map((member, index) => {
                const positions = [
                  "top-0 left-1/4", "top-0 right-1/4", "top-1/2 left-0", "top-1/2 right-0",
                  "bottom-1/2 left-0", "bottom-1/2 right-0", "bottom-0 left-1/4", "bottom-0 right-1/4"
                ];
                
                return (
                  <div 
                    key={index} 
                    className="relative group"
                  >
                    <Card className="hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-border/50 backdrop-blur-sm bg-background/60">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110`}>
                          <member.icon className={`w-8 h-8 ${member.color}`} />
                        </div>
                        <h4 className="text-sm font-semibold text-primary mb-2">{member.role}</h4>
                        <div className="w-8 h-0.5 bg-accent mx-auto opacity-50"></div>
                      </CardContent>
                    </Card>
                    
                    {/* Connecting lines */}
                    <div className="absolute top-1/2 left-1/2 w-8 h-0.5 bg-gradient-to-r from-accent/30 to-transparent transform -translate-y-1/2 translate-x-full hidden md:block"></div>
                  </div>
                );
              })}
            </div>
            
            {/* Floating connection symbols */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <div className="absolute bottom-4 left-4 w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center animate-pulse delay-1000">
              <Heart className="w-4 h-4 text-accent" />
            </div>
            <div className="absolute top-4 left-4 w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center animate-pulse delay-2000">
              <Lightbulb className="w-4 h-4 text-secondary" />
            </div>
          </div>

          {/* Team stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">8</div>
              <div className="text-muted-foreground">Profesionales especializados</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-accent mb-2">∞</div>
              <div className="text-muted-foreground">Posibilidades de colaboración</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-secondary mb-2">1</div>
              <div className="text-muted-foreground">Visión compartida</div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;