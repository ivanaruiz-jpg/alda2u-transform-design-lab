import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Stethoscope, Heart, Users, Phone, Building, Palette, Cog, Lightbulb, Target, Zap, Home, Calendar, Monitor } from "lucide-react";

const Projects = () => {
  const { t } = useLanguage();
  const projects = [
    {
      icon: Stethoscope,
      name: "Nerea Care",
      sector: t("Empresas de cuidados - Atención domiciliaria", "Zaintza-enpresak - Etxeko arreta"),
      intervention: t("Diseño de servicio digital", "Zerbitzu digitalaren diseinua"),
      whatWeDid: t("Diseñamos una plataforma integral que digitaliza y optimiza procesos asistenciales, centrándose en la experiencia tanto de profesionales como de pacientes.", "Asistentzia-prozesuak digitalizatu eta optimizatzen dituen plataforma integrala diseinatu genuen, profesionalen zein pazienteen esperientzian oinarrituta."),
      ourContribution: t("Transformación digital que humaniza la tecnología en el cuidado", "Zaintzan teknologia gizatiartzen duen eraldaketa digitala")
    },
    {
      icon: Heart,
      name: "CARE2U",
      sector: t("Empresas de cuidados - Atención domiciliaria", "Zaintza-enpresak - Etxeko arreta"),
      intervention: t("Acompañamiento estratégico de interoperabilidad", "Elkarreragingarritasunaren laguntza estrategikoa"),
      whatWeDid: t("Facilitamos la creación de un ecosistema de interoperabilidad entre servicios sociales y sanitarios, mejorando la coordinación y continuidad asistencial.", "Gizarte- eta osasun-zerbitzuen arteko elkarreragingarritasun-ekosistema sortzen lagundu genuen, koordinazioa eta asistentziaren jarraitutasuna hobetuz."),
      ourContribution: t("Puente tecnológico que conecta cuidados fragmentados", "Zaintza zatikatuak lotzen dituen zubi teknologikoa")
    },
    {
      icon: Users,
      name: "Elkar Bizitu",
      sector: t("Participación ciudadana", "Herritarren parte-hartzea"),
      intervention: t("Metodología participativa", "Metodologia parte-hartzailea"),
      whatWeDid: t("Desarrollamos una metodología que pone a las personas en situación vulnerable en el centro del diseño de servicios sociales, potenciando su participación activa.", "Egoera ahulean dauden pertsonak gizarte-zerbitzuen diseinuaren erdigunean jartzen dituen metodologia garatu genuen, haien parte-hartze aktiboa sustatuz."),
      ourContribution: t("Empoderamiento real de personas usuarias como co-creadoras", "Erabiltzaileen benetako ahalduntzea, elkarsortzaile gisa")
    },
    {
      icon: Building,
      name: "Helduak Zabaltzen",
      sector: t("Centros de mayores - Entorno comunitario", "Adinekoen zentroak - Komunitate-ingurunea"),
      intervention: t("Innovación social comunitaria", "Komunitateko berrikuntza soziala"),
      whatWeDid: t("Creamos una red de apoyo comunitario que integra herramientas digitales adaptadas para promover el envejecimiento activo en entornos rurales.", "Landa-inguruneetan zahartze aktiboa sustatzeko tresna digital egokituak barne hartzen dituen komunitate-laguntzako sarea sortu genuen."),
      ourContribution: t("Fortalecimiento de vínculos que trasciende lo digital", "Digitala gainditzen duen loturen indartzea")
    },
    {
      icon: Phone,
      name: t("Proyecto de Teleasistencia", "Teleasistentzia proiektua"),
      sector: t("Sector público", "Sektore publikoa"),
      intervention: t("Rediseño de servicio público", "Zerbitzu publikoaren birdiseinua"),
      whatWeDid: t("Lideramos la modernización integral del servicio de teleasistencia regional, aplicando un enfoque centrado en el usuario y optimizando procesos operativos.", "Eskualdeko teleasistentzia-zerbitzuaren modernizazio integrala gidatu genuen, erabiltzailean oinarritutako ikuspegia aplikatuz eta prozesu operatiboak optimizatuz."),
      ourContribution: t("Servicio público más humano y eficiente", "Zerbitzu publiko gizatiarragoa eta eraginkorragoa")
    },
    {
      icon: Zap,
      name: t("Oficina Técnica para la Interoperabilidad Sociosanitaria", "Elkarreragingarritasun Soziosanitariorako Bulego Teknikoa"),
      sector: t("Sector público", "Sektore publikoa"),
      intervention: t("Coordinación técnica estratégica", "Koordinazio tekniko estrategikoa"),
      whatWeDid: t("Acompañamos el desarrollo y consolidación de la interoperabilidad sociosanitaria, coordinando informes de ética, apoyando estrategias regionales, diseñando portales y gestores de casos, y organizando encuentros del sector.", "Elkarreragingarritasun soziosanitarioaren garapena eta finkapena laguntzen ditugu: etika-txostenak koordinatuz, eskualdeko estrategiak babestuz, atariak eta kasu-kudeatzaileak diseinatuz eta sektoreko topaketak antolatuz."),
      ourContribution: t("Metodología y coordinación que fortalece el ecosistema sociosanitario", "Ekosistema soziosanitarioa indartzen duen metodologia eta koordinazioa")
    },
    {
      icon: Home,
      name: t("Proyecto de Cohousing", "Cohousing proiektua"),
      sector: t("Vivienda colaborativa", "Etxebizitza kolaboratiboa"),
      intervention: t("Integración tecnológica", "Integrazio teknologikoa"),
      whatWeDid: t("Diseño de la incorporación de tecnología para el bienestar en espacios convivenciales.", "Ongizaterako teknologia bizikidetza-espazioetan txertatzeko diseinua."),
      ourContribution: t("Tecnología humanizada que potencia la vida comunitaria", "Komunitate-bizitza sustatzen duen teknologia gizatiarra")
    },
    {
      icon: Calendar,
      name: t("Organización de eventos sociosanitarios", "Ekitaldi soziosanitarioen antolaketa"),
      sector: t("Sector público", "Sektore publikoa"),
      intervention: t("Organización y producción de eventos", "Ekitaldien antolaketa eta ekoizpena"),
      whatWeDid: t("Apoyamos en la estructuración del evento, creación del material necesario (guiones, material de promoción, gestión de comunicaciones, etc.).", "Ekitaldiaren egituraketan eta beharrezko materialaren sorreran laguntzen dugu (gidoiak, sustapen-materiala, komunikazioen kudeaketa, etab.)."),
      ourContribution: t("Gestión integral que facilita encuentros significativos del sector", "Sektoreko topaketa esanguratsuak errazten dituen kudeaketa integrala")
    },
    {
      icon: Monitor,
      name: t("Diseño de productos digitales sociosanitarios", "Produktu digital soziosanitarioen diseinua"),
      sector: t("Sector público", "Sektore publikoa"),
      intervention: t("Diseño y supervisión de desarrollo", "Diseinua eta garapenaren gainbegiratzea"),
      whatWeDid: t("Somos responsables de identificar necesidades de la comunidad y/o cliente, y supervisamos el diseño y desarrollo de productos como el portal sociosanitario y su área comunitaria para asegurar una adecuada experiencia de usuario.", "Komunitatearen eta/edo bezeroaren beharrak identifikatzeaz arduratzen gara, eta atari soziosanitarioa eta haren komunitate-eremua bezalako produktuen diseinua eta garapena gainbegiratzen ditugu, erabiltzaile-esperientzia egokia bermatzeko."),
      ourContribution: t("Productos digitales centrados en el usuario que conectan servicios y comunidad", "Zerbitzuak eta komunitatea lotzen dituzten erabiltzailean oinarritutako produktu digitalak")
    }
  ];

  return (
    <div className="pb-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-8">{t("Proyectos", "Proiektuak")}</h3>
          <p className="text-lg md:text-xl text-foreground leading-relaxed">{t("Cada proyecto es una muestra de lo que somos capaces de imaginar, facilitar, diseñar y acompañar. Estas experiencias reflejan nuestro enfoque y metodología en acción.", "Proiektu bakoitza irudikatu, erraztu, diseinatu eta lagun dezakegunaren adibide bat da. Esperientzia hauek gure ikuspegia eta metodologia ekintzan islatzen dituzte.")}</p>
        </div>

        {/* Projects carousel */}
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border border-border/50 h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-4">
                         <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:bg-accent/80 transition-colors">
                            <project.icon className="w-6 h-6 text-primary" />
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
                        <h4 className="font-semibold text-primary mb-2 text-sm">{t("Qué hicimos", "Zer egin genuen")}</h4>
                        <p className="text-muted-foreground leading-relaxed text-sm">{project.whatWeDid}</p>
                      </div>

                      {project.ourContribution && (
                        <div className="bg-accent/5 border-l-3 border-accent p-3 rounded-r-lg">
                          <h4 className="font-semibold text-accent mb-1 text-xs">{t("Nuestra aportación", "Gure ekarpena")}</h4>
                          <p className="text-foreground leading-relaxed text-sm italic">{project.ourContribution}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Projects;