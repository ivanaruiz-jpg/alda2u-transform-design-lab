import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import isotipo from "@/assets/alda2u-isotipo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-muted">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={isotipo} 
            alt="ALDA2U - Isotipo" 
            className="h-8 w-8 mr-3"
          />
          <span className="text-2xl font-bold text-primary">alda</span>
          <span className="text-2xl font-bold text-accent">2U</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Inicio
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Quiénes somos
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Qué hacemos
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Proyectos
          </button>
          <Button 
            variant="transform" 
            onClick={() => scrollToSection('contact')}
          >
            Contacto
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background border-b border-muted animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Quiénes somos
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Qué hacemos
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Proyectos
            </button>
            <Button 
              variant="transform" 
              className="w-full"
              onClick={() => scrollToSection('contact')}
            >
              Contacto
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;