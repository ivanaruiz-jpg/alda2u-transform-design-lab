import isotipo from "@/assets/alda2u-isotipo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src={isotipo} 
                alt="ALDA2U - Isotipo" 
                className="h-8 w-8 mr-3"
              />
              <span className="text-2xl font-bold text-primary-foreground">alda</span>
              <span className="text-2xl font-bold text-accent">2U</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Transformamos organizaciones desde el diseño, la estrategia y la empatía.
            </p>
            <p className="text-accent/90 text-sm mt-2 italic">
              Diseñamos el cambio contigo • Para ti • ALDA to you
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Diseño de servicios</li>
              <li>Innovación y gestión del cambio</li>
              <li>Transformación sociodigital</li>
              <li>Interoperabilidad sociosanitaria</li>
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Sectores</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Sanitario</li>
              <li>Social</li>
              <li>Sociosanitario</li>
              <li>Administración Pública</li>
            </ul>
          </div>
        </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60">
              © {new Date().getFullYear()} ALDA2U • Transformamos para ti • Todos los derechos reservados.
            </p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;