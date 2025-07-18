import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Heart, Users, Phone, Building } from "lucide-react";
import nereaCareImage from "@/assets/nerea-care.jpg";
import care2uImage from "@/assets/care2u.jpg";
import elkarBizituImage from "@/assets/elkar-bizitu.jpg";
import heldukZabaltzenImage from "@/assets/helduak-zabaltzen.jpg";
import teleasistenciaImage from "@/assets/teleasistencia.jpg";

const Projects = () => {
  const projects = [
    {
      icon: Stethoscope,
      title: "Nerea Care",
      challenge: "Digitalización de procesos asistenciales",
      solution: "Plataforma integral para gestión de cuidados personalizados",
      impact: "Mejora del 40% en coordinación entre profesionales y mayor satisfacción del paciente",
      tags: ["Digitalización", "Cuidados", "UX/UI"],
      image: nereaCareImage
    },
    {
      icon: Heart,
      title: "CARE2U",
      challenge: "Coordinación sociosanitaria fragmentada",
      solution: "Sistema de interoperabilidad entre servicios sociales y sanitarios",
      impact: "Reducción de tiempos de gestión y mejor continuidad asistencial",
      tags: ["Interoperabilidad", "Coordinación", "Eficiencia"],
      image: care2uImage
    },
    {
      icon: Users,
      title: "Elkar Bizitu",
      challenge: "Inclusión social de personas en situación vulnerable",
      solution: "Metodología participativa para diseño de servicios inclusivos",
      impact: "Aumento del 60% en la participación activa de usuarios en servicios sociales",
      tags: ["Inclusión", "Participación", "Servicios Sociales"],
      image: elkarBizituImage
    },
    {
      icon: Building,
      title: "Helduak Zabaltzen",
      challenge: "Envejecimiento activo en entornos rurales",
      solution: "Red de apoyo comunitario con herramientas digitales adaptadas",
      impact: "Fortalecimiento de vínculos comunitarios y mejora de calidad de vida",
      tags: ["Envejecimiento", "Comunidad", "Innovación Social"],
      image: heldukZabaltzenImage
    },
    {
      icon: Phone,
      title: "Teleasistencia Cantabria",
      challenge: "Modernización del servicio de teleasistencia regional",
      solution: "Rediseño integral del servicio con enfoque centrado en el usuario",
      impact: "Mayor cobertura territorial y mejora en tiempos de respuesta",
      tags: ["Teleasistencia", "Gobierno", "Transformación Digital"],
      image: teleasistenciaImage
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            Lo que somos capaces de imaginar, diseñar y hacer realidad
          </h2>
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            Cada proyecto es una oportunidad de transformación. Trabajamos con organizaciones para crear soluciones 
            que generen un impacto real y duradero en las personas y comunidades.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-strong transition-all duration-500 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Desafío abordado</h4>
                  <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Solución diseñada</h4>
                  <p className="text-foreground leading-relaxed">{project.solution}</p>
                </div>

                <div className="bg-accent/5 border-l-4 border-accent p-4 rounded-r-lg">
                  <h4 className="font-semibold text-accent mb-2">Cambios logrados</h4>
                  <p className="text-foreground leading-relaxed">{project.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="max-w-4xl mx-auto text-center mt-16">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
              ¿Tienes un desafío que resolver?
            </h3>
            <p className="text-lg text-foreground leading-relaxed">
              Cada organización tiene sus propias necesidades y contexto. Nos adaptamos para crear soluciones únicas 
              que respondan a los desafíos específicos de tu sector y organización.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;