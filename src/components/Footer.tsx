import logo from "@/assets/alda2u-logo-vertical.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <img 
              src={logo} 
              alt="ALDA2U - Logo" 
              className="h-8 w-auto"
            />
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} ALDA2U • Todos los derechos reservados.
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="/aviso-legal" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Aviso legal
            </a>
            <a href="/politica-privacidad" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Política de privacidad
            </a>
            <a href="/politica-cookies" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Política de cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;