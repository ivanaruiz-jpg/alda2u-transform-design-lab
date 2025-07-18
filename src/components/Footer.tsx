const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ALDA2U</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Transformamos organizaciones desde el diseño, la estrategia y la empatía.
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
            © {new Date().getFullYear()} ALDA2U. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;