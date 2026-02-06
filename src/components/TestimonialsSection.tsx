import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "GLA University Student",
    avatar: "PS",
    rating: 5,
    text: "Cozy Heaven has been my home for 2 years now. Being right next to GLA University makes it so convenient. The staff is incredibly caring, and I feel completely safe here!",
    color: "lavender",
  },
  {
    name: "Anjali Gupta",
    role: "Software Engineer",
    avatar: "AG",
    rating: 5,
    text: "As a working professional near Mathura, I needed a place that's safe and convenient. Cozy Heaven exceeded my expectations. The location on NH2 is perfect!",
    color: "peach",
  },
  {
    name: "Sneha Reddy",
    role: "Medical Student",
    avatar: "SR",
    rating: 5,
    text: "The study environment at Cozy Heaven is excellent. Being close to GLA and having quiet hours strictly maintained makes it perfect for students like me.",
    color: "sky",
  },
  {
    name: "Kavitha Menon",
    role: "Parent",
    avatar: "KM",
    rating: 5,
    text: "My daughter stays at Cozy Heaven while studying at GLA. The security measures, location near The Basement Cafe, and regular updates give me complete peace of mind.",
    color: "rose",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-lavender-light text-lavender-dark text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            What Our <span className="text-lavender-dark">Residents Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our residents and their
            families have to say about their experience at Cozy Heaven.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-muted/50" />
              
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center font-semibold text-lg ${
                    testimonial.color === "lavender"
                      ? "bg-lavender-light text-lavender-dark"
                      : testimonial.color === "peach"
                      ? "bg-peach-light text-peach-dark"
                      : testimonial.color === "sky"
                      ? "bg-sky-light text-sky-dark"
                      : "bg-rose-light text-rose"
                  }`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-peach text-peach" />
                ))}
              </div>

              <p className="text-muted-foreground">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
