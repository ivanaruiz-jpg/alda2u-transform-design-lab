import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/alda2u-logo-vertical.png";

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
            src={logo} 
            alt="ALDA2U - Logo" 
            className="h-10 w-auto"
          />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Button 
            variant="ghost"
            onClick={() => scrollToSection('home')}
          >
            Inicio
          </Button>
          <Button 
            variant="ghost"
            onClick={() => scrollToSection('about')}
          >
            Quiénes somos
          </Button>
          <Button 
            variant="ghost"
            onClick={() => scrollToSection('services')}
          >
            Qué hacemos
          </Button>
          <Button 
            variant="ghost"
            onClick={() => scrollToSection('projects')}
          >
            Proyectos
          </Button>
          <Button 
            variant="default"
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
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Button 
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection('home')}
            >
              Inicio
            </Button>
            <Button 
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection('about')}
            >
              Quiénes somos
            </Button>
            <Button 
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection('services')}
            >
              Qué hacemos
            </Button>
            <Button 
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection('projects')}
            >
              Proyectos
            </Button>
            <Button 
              variant="default"
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