import { motion } from "framer-motion";
import {
  Wifi,
  Utensils,
  Shield,
  BookOpen,
  WashingMachine,
  Tv,
  Wind,
  Droplets,
  Car,
  Coffee,
  Dumbbell,
  Sparkles,
} from "lucide-react";

const facilities = [
  { icon: Wifi, name: "High-Speed Wi-Fi", description: "Unlimited internet access" },
  { icon: Utensils, name: "Homely Meals", description: "3 nutritious meals daily" },
  { icon: Shield, name: "24/7 Security", description: "CCTV & trained guards" },
  { icon: BookOpen, name: "Study Area", description: "Quiet zones for focus" },
  { icon: WashingMachine, name: "Laundry Service", description: "Weekly wash included" },
  { icon: Tv, name: "Common Lounge", description: "TV & recreation area" },
  { icon: Wind, name: "Air Conditioning", description: "Climate controlled rooms" },
  { icon: Droplets, name: "Hot Water", description: "24/7 geyser facility" },
  { icon: Car, name: "Parking", description: "Two-wheeler parking" },
  { icon: Coffee, name: "Pantry", description: "Self-service kitchen" },
  { icon: Dumbbell, name: "Fitness Area", description: "Basic gym equipment" },
  { icon: Sparkles, name: "Housekeeping", description: "Daily room cleaning" },
];

const FacilitiesSection = () => {
  return (
    <section id="facilities" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-sky-light text-sky-dark text-sm font-medium mb-4">
            Facilities
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Everything You Need, <span className="text-lavender-dark">All in One Place</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From modern amenities to thoughtful services, we've designed every detail
            to ensure your comfort and convenience.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-card rounded-xl p-4 md:p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-lavender-light flex items-center justify-center mb-4 group-hover:bg-lavender transition-colors">
                <facility.icon className="w-6 h-6 text-lavender-dark" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{facility.name}</h3>
              <p className="text-sm text-muted-foreground">{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
