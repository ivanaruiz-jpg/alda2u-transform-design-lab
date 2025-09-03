import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Heart, Users, Phone, Building, Palette, Cog, Lightbulb, Target, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Stethoscope,
      name: "Nerea Care",
      intervention: "Diseño de servicio digital",
      whatWeDid: "Diseñamos una plataforma integral que digitaliza y optimiza procesos asistenciales, centrándose en la experiencia tanto de profesionales como de pacientes.",
      ourContribution: "Transformación digital que humaniza la tecnología en el cuidado"
    },
    {
      icon: Heart,
      name: "CARE2U",
      intervention: "Acompañamiento estratégico de interoperabilidad",
      whatWeDid: "Facilitamos la creación de un ecosistema de interoperabilidad entre servicios sociales y sanitarios, mejorando la coordinación y continuidad asistencial.",
      ourContribution: "Puente tecnológico que conecta cuidados fragmentados"
    },
    {
      icon: Users,
      name: "Elkar Bizitu",
      intervention: "Metodología participativa",
      whatWeDid: "Desarrollamos una metodología que pone a las personas en situación vulnerable en el centro del diseño de servicios sociales, potenciando su participación activa.",
      ourContribution: "Empoderamiento real de personas usuarias como co-creadoras"
    },
    {
      icon: Building,
      name: "Helduak Zabaltzen",
      intervention: "Innovación social comunitaria",
      whatWeDid: "Creamos una red de apoyo comunitario que integra herramientas digitales adaptadas para promover el envejecimiento activo en entornos rurales.",
      ourContribution: "Fortalecimiento de vínculos que trasciende lo digital"
    },
    {
      icon: Phone,
      name: "Proyecto de Teleasistencia – Gobierno de Cantabria",
      intervention: "Rediseño de servicio público",
      whatWeDid: "Lideramos la modernización integral del servicio de teleasistencia regional, aplicando un enfoque centrado en el usuario y optimizando procesos operativos.",
      ourContribution: "Servicio público más humano y eficiente"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            Capacidades y experiencias diseñadas
          </h2>
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            Cada proyecto es una muestra de lo que somos capaces de imaginar, facilitar, diseñar y acompañar. 
            Estas experiencias reflejan nuestro enfoque y metodología en acción.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border border-border/50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <project.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg text-primary leading-tight">{project.name}</CardTitle>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs w-fit">
                  {project.intervention}
                </Badge>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2 text-sm">Qué hicimos</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">{project.whatWeDid}</p>
                </div>

                {project.ourContribution && (
                  <div className="bg-accent/5 border-l-3 border-accent p-3 rounded-r-lg">
                    <h4 className="font-semibold text-accent mb-1 text-xs">Nuestra aportación</h4>
                    <p className="text-foreground leading-relaxed text-sm italic">{project.ourContribution}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Capabilities showcase */}
        <div className="max-w-6xl mx-auto mt-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-12">
            Lo que sabemos hacer
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Palette, label: "Diseño de experiencias", description: "Creamos experiencias centradas en personas" },
              { icon: Cog, label: "Integración de sistemas", description: "Conectamos tecnologías con propósito" },
              { icon: Lightbulb, label: "Innovación metodológica", description: "Desarrollamos nuevas formas de trabajar" },
              { icon: Target, label: "Acompañamiento estratégico", description: "Guiamos procesos de transformación" }
            ].map((capability, index) => (
              <Card key={index} className="text-center hover:shadow-soft transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <capability.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2 text-sm">{capability.label}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="max-w-4xl mx-auto text-center mt-16">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
              ¿Qué podemos imaginar juntos?
            </h3>
            <p className="text-lg text-foreground leading-relaxed">
              Cada desafío es único y requiere una aproximación específica. Exploremos las posibilidades 
              que se abren cuando combinamos tu experiencia con nuestra metodología.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;