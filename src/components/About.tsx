import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Handshake, Shield, Lightbulb, Brain, Code, Palette, UserCheck, Sparkles, Cog, Zap, Target, Eye, Puzzle, Network, Compass, Monitor } from "lucide-react";
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
    },
    {
      icon: Sparkles,
      title: "Innovación",
      description: "Exploramos nuevas formas de hacer las cosas, adaptándonos constantemente para ofrecer soluciones creativas y efectivas."
    }
  ];

  const milestones = [
    { year: "2013", event: "Fundación de ALDA2U" },
    { year: "2019", event: "Comienza nuestro camino en consultoría estratégica y diseño de servicios especializados en el sector salud, social y sociosanitario" },
    { year: "2020", event: "Desarrollamos una metodología propia de diseño de servicios para el sector sociosanitario" },
    { year: "2021", event: "Empezamos el diseño y acompañamiento de estrategias del sector público en el ámbito de sistemas de atención social y sociosanitaria" },
    { year: "2022", event: "Somos una empresa 100% online" },
    { year: "2024", event: "Comenzamos también a trabajar en acuerdos de colaboración con terceros" },
    { year: "2025", event: "Nos especializamos en interoperabilidad sociosanitaria" }
  ];

  const workAreas = [
    {
      icon: Heart,
      title: "Transforming Care",
      description: "Área centrada en el diseño de servicios, experiencias y procesos centrados en las personas en el sector salud, social y sociosanitario. Foco en innovación en atención, interacción, participación y rediseño organizacional.",
      color: "bg-gradient-to-br from-accent/20 to-accent/30"
    },
    {
      icon: Cog,
      title: "Technology & Services",
      description: "Es nuestro origen para la prestación de servicios tecnológicos que atiende a diversidad de clientes desde Salesforce hasta soluciones de pesca.",
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
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-8">
            Nuestro recorrido
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center mb-4 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300">
                      <CardContent className="p-4">
                        <div className="text-accent font-bold text-base mb-1">{milestone.year}</div>
                        <p className="text-foreground text-sm">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-accent rounded-full border-3 border-background shadow-soft"></div>
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
                <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center group-hover:bg-accent/80 transition-colors">
                  <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-3">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-12">
            Nuestro Equipo
          </h3>
          
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-4xl mx-auto leading-relaxed">
            En alda2u creemos que el valor no está en cargos ni jerarquías, sino en la diversidad de capacidades que ponemos en juego. Somos un equipo interdisciplinario que piensa, diseña y acompaña procesos de transformación, combinando conocimiento del sector, tecnología y diseño estratégico.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-8 pb-6">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Network className="h-10 w-10 text-primary" />
                </div>
                <h4 className="font-semibold mb-4 text-primary text-lg">Expertos en el ámbito sociosanitario, social y sanitario</h4>
                <div className="text-muted-foreground text-left space-y-3">
                  <p>→ Conocen en profundidad los sistemas, las políticas y las realidades de los servicios de atención.</p>
                  <p>→ Aportan experiencia aplicada y visión estratégica para diseñar propuestas realistas y con impacto.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-8 pb-6">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Monitor className="h-10 w-10 text-primary" />
                </div>
                <h4 className="font-semibold mb-4 text-primary text-lg">Especialistas en tecnología</h4>
                <div className="text-muted-foreground text-left space-y-3">
                  <p>→ Acompañan procesos de digitalización y desarrollo de soluciones tecnológicas con criterio.</p>
                  <p>→ Garantizan que la tecnología sea siempre un medio al servicio de las personas.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-8 pb-6">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-10 w-10 text-primary" />
                </div>
                <h4 className="font-semibold mb-4 text-primary text-lg">Diseñadores estratégicos de productos y servicios</h4>
                <div className="text-muted-foreground text-left space-y-3">
                  <p>→ Impulsan la innovación desde el diseño.</p>
                  <p>→ Facilitan procesos de co-creación y crean experiencias más accesibles, empáticas y sostenibles.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;