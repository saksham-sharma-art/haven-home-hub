import { motion } from "framer-motion";
import { Shield, Heart, Users, Sparkles } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Round-the-clock security with CCTV surveillance and trained guards ensure your complete peace of mind.",
    color: "lavender",
  },
  {
    icon: Heart,
    title: "Comfort & Care",
    description:
      "Well-maintained rooms, hygienic facilities, and attentive staff to make you feel right at home.",
    color: "peach",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Join a supportive community of like-minded women pursuing their dreams together.",
    color: "sky",
  },
  {
    icon: Sparkles,
    title: "Quality Living",
    description:
      "Premium amenities and services that elevate your everyday living experience.",
    color: "rose",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-peach-light text-peach-dark text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            A Home Designed for <span className="text-lavender-dark">Women</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Bloom Hostel has been providing safe, comfortable, and affordable
            accommodation for women since 2015. We understand the unique needs of
            working women and students, creating spaces where you can thrive.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-shadow duration-300"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                  value.color === "lavender"
                    ? "bg-lavender-light"
                    : value.color === "peach"
                    ? "bg-peach-light"
                    : value.color === "sky"
                    ? "bg-sky-light"
                    : "bg-rose-light"
                }`}
              >
                <value.icon
                  className={`w-7 h-7 ${
                    value.color === "lavender"
                      ? "text-lavender-dark"
                      : value.color === "peach"
                      ? "text-peach-dark"
                      : value.color === "sky"
                      ? "text-sky-dark"
                      : "text-rose"
                  }`}
                />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 gap-8 max-w-md mx-auto"
        >
          {[
            { number: "12+", label: "Furnished Rooms" },
            { number: "4.9", label: "Google Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-bold text-lavender-dark mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
