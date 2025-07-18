import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });
    setFormData({ name: "", email: "", organization: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            Contacto
          </h2>
          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed italic">
              "¿Querés conversar sobre cómo acompañar un cambio en tu organización? Estamos para eso."
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

                  <Button type="submit" variant="gradient" className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Enviar mensaje
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
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Email</p>
                      <p className="text-muted-foreground">info@alda2u.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Teléfono</p>
                      <p className="text-muted-foreground">+34 XXX XXX XXX</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent" />
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