import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Call Us",
      value: "+91 89585 98888",
      href: "tel:+918958598888",
      color: "lavender",
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "sks.saksham186@gmail.com",
      href: "mailto:sks.saksham186@gmail.com",
      color: "peach",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with us",
      href: "https://wa.me/918958598888?text=Hi,%20I'm%20interested%20in%20Cozy%20Heaven",
      color: "sky",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-peach-light text-peach-dark text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Get in <span className="text-lavender-dark">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions or want to schedule a visit? We'd love to hear from you.
            Reach out and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 bg-muted/50 border-border/50 focus:border-lavender"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 bg-muted/50 border-border/50 focus:border-lavender"
                  />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12 bg-muted/50 border-border/50 focus:border-lavender"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-muted/50 border-border/50 focus:border-lavender resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 cta-gradient border-0 text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target={info.label === "WhatsApp" ? "_blank" : undefined}
                rel={info.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                className="block bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors ${
                      info.color === "lavender"
                        ? "bg-lavender-light group-hover:bg-lavender"
                        : info.color === "peach"
                        ? "bg-peach-light group-hover:bg-peach"
                        : "bg-sky-light group-hover:bg-sky"
                    }`}
                  >
                    <info.icon
                      className={`w-6 h-6 ${
                        info.color === "lavender"
                          ? "text-lavender-dark"
                          : info.color === "peach"
                          ? "text-peach-dark"
                          : "text-sky-dark"
                      }`}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-semibold text-foreground">{info.value}</p>
                  </div>
                </div>
              </a>
            ))}

            {/* Address Card */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=JH4R%2BPH+Bharthia,+Uttar+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-rose-light group-hover:bg-rose transition-colors flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-rose group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Visit Us</p>
                  <p className="font-semibold text-foreground">
                    Near The Basement Cafe, ON NH2,
                    <br />
                    Just beside GLA University, Mathura,
                    <br />
                    Bharthia, Uttar Pradesh - 281406
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
