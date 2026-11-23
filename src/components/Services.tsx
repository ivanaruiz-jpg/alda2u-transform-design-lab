import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, Cog, Target, Stethoscope, Lightbulb, Globe, Settings, Heart, Eye, Zap, Cpu } from "lucide-react";
import servicesImage from "@/assets/services-design.jpg";

const Services = () => {
  const { t } = useLanguage();
  const areas = [
    {
      icon: Building2,
      title: t("Organización", "Antolaketa"),
      description: t("Rediseño de estructuras y procesos organizacionales para optimizar el funcionamiento y la eficiencia.", "Antolaketa-egiturak eta -prozesuak birdiseinatzea, funtzionamendua eta eraginkortasuna hobetzeko.")
    },
    {
      icon: Users,
      title: t("Experiencia", "Esperientzia"),
      description: t("Mejora de la experiencia de usuarios, pacientes y profesionales a través del diseño centrado en personas.", "Erabiltzaileen, pazienteen eta profesionalen esperientzia hobetzea, pertsonetan oinarritutako diseinuaren bidez.")
    },
    {
      icon: Cog,
      title: t("Servicio", "Zerbitzua"),
      description: t("Diseño e implementación de servicios innovadores que respondan a las necesidades reales del sector.", "Sektorearen benetako beharrei erantzuten dieten zerbitzu berritzaileak diseinatzea eta ezartzea.")
    },
    {
      icon: Target,
      title: t("Estrategia", "Estrategia"),
      description: t("Desarrollo de estrategias sostenibles y planes de transformación adaptados a cada contexto.", "Testuinguru bakoitzera egokitutako estrategia jasangarriak eta eraldaketa-planak garatzea.")
    }
  ];

  const keyServices = [
    {
      icon: Lightbulb,
      title: t("Diseño de servicios", "Zerbitzu-diseinua"),
      description: t("Creación de servicios centrados en las personas y adaptados al contexto sociosanitario.", "Pertsonetan oinarritutako eta testuinguru soziosanitariora egokitutako zerbitzuak sortzea.")
    },
    {
      icon: Globe,
      title: t("Innovación y gestión del cambio", "Berrikuntza eta aldaketaren kudeaketa"),
      description: t("Acompañamiento en procesos de transformación e implementación de innovaciones.", "Eraldaketa-prozesuetan eta berrikuntzen ezarpenean laguntzea.")
    },
    {
      icon: Stethoscope,
      title: t("Consultoría de negocios", "Negozio-aholkularitza"),
      description: t("Asesoramiento estratégico para el desarrollo y crecimiento sostenible de organizaciones del sector sociosanitario.", "Sektore soziosanitarioko erakundeen garapen eta hazkunde jasangarrirako aholkularitza estrategikoa.")
    },
    {
      icon: Settings,
      title: t("Oficina técnica", "Bulego teknikoa"),
      description: t("Soporte técnico especializado para proyectos complejos del ámbito sociosanitario.", "Arlo soziosanitarioko proiektu konplexuetarako laguntza tekniko espezializatua.")
    },
    {
      icon: Building2,
      title: t("Interoperabilidad sociosanitaria", "Elkarreragingarritasun soziosanitarioa"),
      description: t("Soluciones para la integración, coordinación y comunicación entre sistemas y organizaciones.", "Sistemen eta erakundeen arteko integraziorako, koordinaziorako eta komunikaziorako irtenbideak.")
    },
    {
      icon: Cpu,
      title: t("Asesoramiento tecnológico", "Aholkularitza teknologikoa"),
      description: t("Asesoramos y apoyamos en el uso de tecnología según las necesidades del cliente y/o proyecto.", "Teknologiaren erabileran aholkatzen eta laguntzen dugu, bezeroaren eta/edo proiektuaren beharren arabera.")
    }
  ];

  const methodologyPillars = [
    {
      icon: Heart,
      title: t("Diseño centrado en las personas", "Pertsonetan oinarritutako diseinua"),
      description: t("Ponemos a las personas en el centro de cada decisión, considerando sus necesidades, emociones y experiencias.", "Pertsonak erabaki bakoitzaren erdigunean jartzen ditugu, haien beharrak, emozioak eta esperientziak kontuan hartuta.")
    },
    {
      icon: Users,
      title: t("Participación como motor de cambio", "Parte-hartzea aldaketaren motor gisa"),
      description: t("Involucramos activamente a todos los actores relevantes en el proceso de diseño y transformación.", "Eragile garrantzitsu guztiak modu aktiboan inplikatzen ditugu diseinu- eta eraldaketa-prozesuan.")
    },
    {
      icon: Eye,
      title: t("Mirada sistémica", "Ikuspegi sistemikoa"),
      description: t("Analizamos el contexto completo, considerando todas las interacciones y dependencias del sistema.", "Testuinguru osoa aztertzen dugu, sistemaren elkarreragin eta mendekotasun guztiak kontuan hartuta.")
    },
    {
      icon: Zap,
      title: t("Adaptabilidad y acompañamiento", "Egokitzapena eta laguntza"),
      description: t("Acompañamos durante todo el proceso, adaptándonos a las necesidades cambiantes de cada organización.", "Prozesu osoan zehar laguntzen dugu, erakunde bakoitzaren behar aldakorretara egokituz.")
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">{t("Qué hacemos", "Zer egiten dugu")}</h2>
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">{t("Aplicamos diseño estratégico centrado en las personas, combinado con tecnología con sentido, para crear soluciones que realmente transformen las organizaciones del sector sociosanitario.", "Pertsonetan oinarritutako diseinu estrategikoa aplikatzen dugu, zentzuzko teknologiarekin konbinatuta, sektore soziosanitarioko erakundeak benetan eraldatzen dituzten irtenbideak sortzeko.")}</p>
        </div>

        {/* Areas of action */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-12">{t("Nuestras 4 áreas de actuación", "Gure 4 jarduera-arloak")}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {areas.map((area, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <area.icon className="w-10 h-10 text-primary" />
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

        {/* Methodology and Approach */}
        <div className="mb-16 max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-12">{t("Nuestro enfoque y metodología", "Gure ikuspegia eta metodologia")}</h3>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="relative">
              <img 
                src={servicesImage} 
                alt=t("Metodología de diseño centrado en las personas", "Pertsonetan oinarritutako diseinu-metodologia")
                className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-soft"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-8">
              <h4 className="text-2xl font-semibold text-primary mb-4">{t("Metodología A2U", "A2U metodologia")}</h4>
              <p className="text-lg text-foreground leading-relaxed mb-4">{t("Nuestra metodología propia basada en", "Gure metodologia propioa")}{" "}<span className="font-semibold text-primary">Human-Centered Design</span>{t("", "-ean oinarritzen da,")}{" "}{t("aplicado específicamente al ámbito sociosanitario, adaptada a las particularidades y necesidades de este sector.", "arlo soziosanitarioari berariaz aplikatua eta sektore honen berezitasun eta beharretara egokitua.")}</p>
              <p className="text-foreground leading-relaxed">{t("Trabajamos desde cuatro pilares fundamentales que guían nuestra metodología y definen nuestra forma de entender la transformación organizacional.", "Lau oinarri nagusitatik lan egiten dugu; horiek gidatzen dute gure metodologia eta zehazten dute antolaketa-eraldaketa ulertzeko dugun modua.")}</p>
            </div>
          </div>

          {/* Methodology Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologyPillars.map((pillar, index) => (
              <Card key={index} className="group hover:shadow-strong transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-6 bg-accent rounded-full flex items-center justify-center group-hover:bg-accent/80 group-hover:scale-110 transition-all duration-300">
                    <pillar.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-primary text-lg leading-tight">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed text-sm">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key services */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-12">{t("Servicios clave", "Funtsezko zerbitzuak")}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {keyServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:bg-accent/80 transition-colors flex-shrink-0">
                      <service.icon className="w-6 h-6 text-primary" />
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
            <p className="text-xl text-foreground leading-relaxed italic text-center">{t("\"No llevamos recetas. Escuchamos, analizamos y diseñamos procesos que respondan al propósito de cada organización.\"", "\"Ez dugu errezetarik ekartzen. Entzun, aztertu eta erakunde bakoitzaren helburuari erantzuten dioten prozesuak diseinatzen ditugu.\"")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;