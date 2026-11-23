import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";
import logoVertical from "@/assets/alda2u-logo-vertical.png";

const Hero = () => {
  const { t } = useLanguage();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt=t("ALDA2U - Diseño abstracto representando transformación y conexión humana", "ALDA2U - Eraldaketa eta giza lotura irudikatzen dituen diseinu abstraktua") 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70"></div>
      </div>
      
      {/* Background pattern with new brand colors */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full mix-blend-multiply animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full mix-blend-multiply animate-pulse"></div>
        <div className="absolute top-40 right-40 w-32 h-32 bg-warm rounded-full mix-blend-multiply"></div>
        <div className="absolute bottom-40 left-40 w-48 h-48 bg-olive rounded-full mix-blend-multiply"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10 pt-24">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <img 
                src={logoVertical} 
                alt="ALDA2U - Logo vertical" 
                className="h-32 md:h-40"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-lg md:text-xl font-medium">
              <span className="text-primary border-b-2 border-primary/30">{t("Transformamos", "Eraldatzen dugu")}</span>
              <span className="text-muted-foreground">+</span>
              <span className="text-primary border-b-2 border-primary/30">{t("Para ti", "Zuretzat")}</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">{t("Agencia de asesoramiento estratégico y diseño de servicios especializada en los sectores", "Aholkularitza estrategikoko eta zerbitzu-diseinuko agentzia, sektore hauetan espezializatua:")}{" "}<span className="text-primary font-semibold">{t("sanitario, social y sociosanitario", "osasuna, gizarte-arloa eta arlo soziosanitarioa")}</span>
            </p>
            
            <div className="bg-gradient-to-r from-accent/10 to-warm/10 border-l-4 border-accent p-6 rounded-lg max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl font-semibold text-primary italic">{t("\"Diseñamos el cambio contigo, desde la estrategia y la empatía.\"", "\"Aldaketa zurekin diseinatzen dugu, estrategiatik eta enpatiatik.\"")}</p>
            </div>
          </div>
          
          <div className="flex justify-center items-center pt-8 pb-20">
            <Button 
              variant="transform" 
              size="lg"
              onClick={() => scrollToSection('services')}
              className="px-8"
            >{t("Descubre cómo transformamos", "Ezagutu nola eraldatzen dugun")}</Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;