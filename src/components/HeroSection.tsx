import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-hostel.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Bloom Hostel - Girls Hostel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-lavender-light text-lavender-dark text-sm font-medium mb-6">
              ✨ Premium Women's Accommodation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight"
          >
            Safe, Comfortable &{" "}
            <span className="text-lavender-dark">Affordable</span> Living for
            Women
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8 max-w-xl"
          >
            Experience the perfect blend of comfort, security, and community at
            Bloom Residency. Your home away from home awaits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button
              size="lg"
              className="cta-gradient border-0 text-primary-foreground hover:opacity-90 transition-opacity group"
            >
              Book a Visit
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-lavender hover:bg-lavender-light"
            >
              Explore Rooms
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6"
          >
            {[
              { icon: Shield, label: "24/7 Security" },
              { icon: Heart, label: "Homely Food" },
              { icon: Users, label: "Community Living" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <div className="w-10 h-10 rounded-full bg-lavender-light flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-lavender-dark" />
                </div>
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
