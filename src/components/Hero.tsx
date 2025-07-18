import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
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
          alt="ALDA2U - Transformación en salud y servicios sociales" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70"></div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full mix-blend-multiply"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full mix-blend-multiply"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
            ALDA2U
          </h1>
          
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
              Agencia de asesoramiento estratégico y diseño de servicios especializada en los sectores 
              <span className="text-primary font-semibold"> sanitario, social y sociosanitario</span>
            </p>
            
            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl font-semibold text-primary italic">
                "Transformamos organizaciones desde el diseño, la estrategia y la empatía."
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="gradient" 
              size="lg"
              onClick={() => scrollToSection('approach')}
              className="px-8"
            >
              Conoce nuestro enfoque
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('about')}
              className="px-8"
            >
              Descubre cómo trabajamos
            </Button>
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