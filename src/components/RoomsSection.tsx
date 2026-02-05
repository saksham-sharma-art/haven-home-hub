import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import roomSingle from "@/assets/room-single.jpg";
import roomDouble from "@/assets/room-double.jpg";
import roomTriple from "@/assets/room-triple.jpg";

const rooms = [
  {
    type: "Double Sharing",
    price: "₹8,000",
    period: "/month",
    image: roomDouble,
    features: [
      "Shared with 1 roommate",
      "Attached bathroom",
      "Individual study desk",
      "Personal wardrobe",
      "AC included",
      "All meals included",
    ],
    popular: true,
    color: "peach",
  },
  {
    type: "Triple Sharing",
    price: "₹6,000",
    period: "/month",
    image: roomTriple,
    features: [
      "Shared with 2 roommates",
      "Common bathroom",
      "Shared study area",
      "Personal locker",
      "Fan/Cooler",
      "All meals included",
    ],
    popular: false,
    color: "sky",
  },
  {
    type: "Four Sharing",
    price: "₹5,000",
    period: "/month",
    image: roomSingle,
    features: [
      "Shared with 3 roommates",
      "Common bathroom",
      "Shared study area",
      "Personal locker",
      "Fan/Cooler",
      "All meals included",
    ],
    popular: false,
    color: "lavender",
  },
];

const RoomsSection = () => {
  return (
    <section id="rooms" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-lavender-light text-lavender-dark text-sm font-medium mb-4">
            Room Types
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Choose Your Perfect <span className="text-lavender-dark">Space</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a variety of room configurations to suit your preferences and
            budget. All rooms are fully furnished and well-maintained.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 ${
                room.popular ? "ring-2 ring-peach-dark" : ""
              }`}
            >
              {room.popular && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-peach text-peach-dark text-xs font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.type}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {room.type}
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-bold text-lavender-dark">
                    {room.price}
                  </span>
                  <span className="text-muted-foreground">{room.period}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {room.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-5 h-5 rounded-full bg-lavender-light flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-lavender-dark" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    room.popular
                      ? "cta-gradient border-0 text-primary-foreground"
                      : "bg-lavender-light text-lavender-dark hover:bg-lavender"
                  }`}
                >
                  Enquire Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center text-sm text-muted-foreground"
        >
          <p>
            * Prices are subject to change. Security deposit of 2 months' rent
            applicable.
            <br />
            Special discounts available for long-term stays (6+ months).
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RoomsSection;
