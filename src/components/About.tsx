import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Handshake, Shield, Lightbulb, Brain, Code, Palette, UserCheck } from "lucide-react";
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
        <div className="mb-16">
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

        {/* Team */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-12">
            Nuestro equipo
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual representation */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-soft">
                <img 
                  src={teamCollaboration} 
                  alt="Equipo ALDA2U trabajando colaborativamente" 
                  className="w-full h-80 object-cover"
                />
              </div>
              {/* Floating elements representing team diversity */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-medium animate-pulse">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div className="absolute top-1/2 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-medium">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 left-1/3 w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-medium">
                <Palette className="w-7 h-7 text-primary" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg">
                <p className="text-lg text-foreground leading-relaxed italic">
                  "Un equipo interdisciplinario que piensa, diseña y acompaña. Sumamos capacidades según las necesidades de cada proyecto."
                </p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Trabajamos como una comunidad de práctica, donde cada miembro aporta su expertise para crear soluciones integrales y sostenibles.
              </p>

              {/* Team expertise areas */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: Brain, label: "Estrategia" },
                  { icon: Code, label: "Tecnología" },
                  { icon: Palette, label: "Diseño" },
                  { icon: UserCheck, label: "Experiencia" }
                ].map((area, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-border/50">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                      <area.icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{area.label}</span>
                  </div>
                ))}
              </div>

              <div className="text-center pt-4">
                <span className="text-2xl font-bold text-primary">8</span>
                <span className="text-muted-foreground ml-2">profesionales especializados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;