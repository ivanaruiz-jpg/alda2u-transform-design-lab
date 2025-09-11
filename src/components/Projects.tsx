import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Heart, Users, Phone, Building, Palette, Cog, Lightbulb, Target, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Stethoscope,
      name: "Nerea Care",
      sector: "Empresas de cuidados - Atención domiciliaria",
      intervention: "Diseño de servicio digital",
      whatWeDid: "Diseñamos una plataforma integral que digitaliza y optimiza procesos asistenciales, centrándose en la experiencia tanto de profesionales como de pacientes.",
      ourContribution: "Transformación digital que humaniza la tecnología en el cuidado"
    },
    {
      icon: Heart,
      name: "CARE2U",
      sector: "Empresas de cuidados - Atención domiciliaria",
      intervention: "Acompañamiento estratégico de interoperabilidad",
      whatWeDid: "Facilitamos la creación de un ecosistema de interoperabilidad entre servicios sociales y sanitarios, mejorando la coordinación y continuidad asistencial.",
      ourContribution: "Puente tecnológico que conecta cuidados fragmentados"
    },
    {
      icon: Users,
      name: "Elkar Bizitu",
      sector: "Participación ciudadana",
      intervention: "Metodología participativa",
      whatWeDid: "Desarrollamos una metodología que pone a las personas en situación vulnerable en el centro del diseño de servicios sociales, potenciando su participación activa.",
      ourContribution: "Empoderamiento real de personas usuarias como co-creadoras"
    },
    {
      icon: Building,
      name: "Helduak Zabaltzen",
      sector: "Centros de mayores - Entorno comunitario",
      intervention: "Innovación social comunitaria",
      whatWeDid: "Creamos una red de apoyo comunitario que integra herramientas digitales adaptadas para promover el envejecimiento activo en entornos rurales.",
      ourContribution: "Fortalecimiento de vínculos que trasciende lo digital"
    },
    {
      icon: Phone,
      name: "Proyecto de Teleasistencia – Gobierno de Cantabria",
      sector: "Sector público",
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
            Proyectos
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
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    {project.intervention}
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                    {project.sector}
                  </Badge>
                </div>
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
      </div>
    </section>
  );
};

export default Projects;