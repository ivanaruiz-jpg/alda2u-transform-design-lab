// Brand Messaging Component for ALDA2U
// Demonstrates how to use the dual meaning wordplay throughout the site

export const BrandMessages = {
  // Hero slogans
  heroSlogans: [
    "Transformamos para ti",
    "Diseñamos el cambio contigo",
    "ALDA to you: transformación personalizada",
    "Del cambio a ti: acompañamiento estratégico"
  ],

  // Section headers with wordplay
  sectionHeaders: {
    about: "Quiénes somos → Para ti",
    services: "Qué hacemos → Contigo", 
    projects: "Casos de éxito → Para ti",
    contact: "Conectamos → Contigo"
  },

  // Microcopy examples
  microcopy: [
    "Transformamos. Para ti.",
    "Cada proyecto es único. Como tú.",
    "Del diseño estratégico a tu organización",
    "Innovación personalizada. ALDA to you.",
    "Cambio + cercanía = ALDA2U"
  ],

  // Call-to-action variations
  cta: [
    "Transforma con nosotros",
    "Diseñemos juntos el cambio",
    "ALDA to you: empezamos",
    "Tu transformación empieza aquí"
  ],

  // Footer messaging
  footer: [
    "Transformamos para ti",
    "Diseñamos el cambio contigo",
    "ALDA to you: innovación cercana"
  ]
};

// Brand Voice Guidelines Component
const BrandMessaging = () => {
  return (
    <div className="bg-gradient-to-br from-accent/5 to-warm/5 p-8 rounded-lg border border-accent/20">
      <h3 className="text-2xl font-bold text-primary mb-6">
        Identidad de Marca ALDA2U
      </h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-accent">
            🔄 Transformación (Aldatu)
          </h4>
          <ul className="space-y-2 text-foreground/80">
            <li>• Cambio estratégico</li>
            <li>• Innovación organizacional</li>
            <li>• Evolución continua</li>
            <li>• Diseño de servicios</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-warm">
            🤝 Cercanía (To You)
          </h4>
          <ul className="space-y-2 text-foreground/80">
            <li>• Acompañamiento personalizado</li>
            <li>• Empatía en cada proyecto</li>
            <li>• Soluciones a medida</li>
            <li>• Conexión humana</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
        <p className="text-primary font-medium">
          Tono de marca: Profesional y cercano, experto y empático, 
          transformador y personal.
        </p>
      </div>
    </div>
  );
};

export default BrandMessaging;