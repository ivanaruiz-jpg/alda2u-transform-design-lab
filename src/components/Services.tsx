import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, Cog, Target, Stethoscope, Lightbulb, Globe, Settings } from "lucide-react";
import servicesImage from "@/assets/services-design.jpg";

const Services = () => {
  const areas = [
    {
      icon: Building2,
      title: "Organización",
      description: "Rediseño de estructuras y procesos organizacionales para optimizar el funcionamiento y la eficiencia."
    },
    {
      icon: Users,
      title: "Experiencia",
      description: "Mejora de la experiencia de usuarios, pacientes y profesionales a través del diseño centrado en personas."
    },
    {
      icon: Cog,
      title: "Servicio",
      description: "Diseño e implementación de servicios innovadores que respondan a las necesidades reales del sector."
    },
    {
      icon: Target,
      title: "Estrategia",
      description: "Desarrollo de estrategias sostenibles y planes de transformación adaptados a cada contexto."
    }
  ];

  const keyServices = [
    {
      icon: Lightbulb,
      title: "Diseño de servicios",
      description: "Creación de servicios centrados en las personas y adaptados al contexto sociosanitario."
    },
    {
      icon: Globe,
      title: "Innovación y gestión del cambio",
      description: "Acompañamiento en procesos de transformación e implementación de innovaciones."
    },
    {
      icon: Stethoscope,
      title: "Transformación sociodigital",
      description: "Integración de tecnología con propósito en organizaciones del sector sanitario y social."
    },
    {
      icon: Settings,
      title: "Oficina técnica",
      description: "Soporte técnico especializado para proyectos complejos del ámbito sociosanitario."
    },
    {
      icon: Building2,
      title: "Interoperabilidad sociosanitaria",
      description: "Soluciones para la integración y comunicación entre sistemas y organizaciones."
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            Qué hacemos
          </h2>
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
            Aplicamos diseño estratégico centrado en las personas, combinado con tecnología con sentido, 
            para crear soluciones que realmente transformen las organizaciones del sector sociosanitario.
          </p>
        </div>

        {/* Areas of action */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-12">
            Nuestras 4 áreas de actuación
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {areas.map((area, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <area.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-primary">{area.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Methodology */}
        <div className="mb-16 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img 
                src={servicesImage} 
                alt="Metodología de diseño centrado en las personas"
                className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-soft"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Metodología A2U
              </h3>
              <p className="text-lg text-foreground leading-relaxed">
                Nuestra metodología propia basada en <span className="font-semibold text-accent">Human-Centered Design</span> aplicado 
                específicamente al ámbito sociosanitario, adaptada a las particularidades y necesidades de este sector.
              </p>
            </div>
          </div>
        </div>

        {/* Key services */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-12">
            Servicios clave
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {keyServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">{service.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-lg">
            <p className="text-xl text-foreground leading-relaxed italic text-center">
              "No llevamos recetas. Escuchamos, analizamos y diseñamos procesos que respondan al propósito de cada organización."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;