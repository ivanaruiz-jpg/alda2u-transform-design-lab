import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EMAILJS_SERVICE_ID = "service_y39a8b8";
const EMAILJS_TEMPLATE_ID = "template_96q8i8o";
const EMAILJS_PUBLIC_KEY = "lnko6JvFsggW4H93C";
const RECAPTCHA_SITE_KEY = "6LcdWC0sAAAAALXvQGfMYZSnVgUsake5c2J23-kE";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          organization: formData.organization,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarnos. Te responderemos pronto.",
      });
      setFormData({ name: "", email: "", organization: "", message: "" });
      setCaptchaVerified(false);
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error al enviar",
        description: "No se pudo enviar el mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            Contacto
          </h2>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
              ¿Qué podemos imaginar juntos?
            </h3>
            <p className="text-lg text-foreground leading-relaxed">
              Cada desafío es único y requiere una aproximación específica. Exploremos las posibilidades 
              que se abren cuando combinamos tu experiencia con nuestra metodología.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Envíanos un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organización</Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Nombre de tu organización"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Cuéntanos sobre tu desafío o proyecto..."
                    />
                  </div>

                  <div className="flex justify-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={RECAPTCHA_SITE_KEY}
                      onChange={(value) => setCaptchaVerified(!!value)}
                      onExpired={() => setCaptchaVerified(false)}
                    />
                  </div>

                  <Button type="submit" variant="gradient" className="w-full" size="lg" disabled={isSubmitting || !captchaVerified}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar mensaje
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Información de contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                     <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Email</p>
                      <p className="text-muted-foreground">info@alda2u.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                     <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Ubicación</p>
                      <p className="text-muted-foreground">País Vasco, España</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    ¿Listo para transformar tu organización?
                  </h3>
                  <p className="text-foreground leading-relaxed mb-6">
                    Cada conversación es el inicio de una posible transformación. 
                    Nos adaptamos a tus tiempos y necesidades para encontrar la mejor forma de colaborar.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">• Consulta inicial sin compromiso</p>
                    <p className="text-sm text-muted-foreground">• Análisis personalizado de necesidades</p>
                    <p className="text-sm text-muted-foreground">• Propuesta adaptada a tu contexto</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;