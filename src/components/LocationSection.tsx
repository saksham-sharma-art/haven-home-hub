import { motion } from "framer-motion";
import { MapPin, Building2, Clock, Hospital } from "lucide-react";

const nearbyPlaces = [
  { icon: Building2, name: "GLA University", distance: "Just beside" },
  { icon: Hospital, name: "KD Hospital", distance: "2 km" },
];

const LocationSection = () => {
  return (
    <section id="location" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-sky-light text-sky-dark text-sm font-medium mb-4">
            Location
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Centrally Located, <span className="text-lavender-dark">Easily Accessible</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Strategically situated near major educational institutions, hospitals,
            and excellent public transport connectivity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-card"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.8234567890123!2d77.50902361234567!3d27.49456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI5JzQwLjQiTiA3N8KwMzAnMzIuNSJF!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bloom Residency Location"
              className="w-full"
            />
          </motion.div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="bg-card rounded-xl p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-lavender-light flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-lavender-dark" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    Our Address
                  </h3>
                  <p className="text-muted-foreground">
                    Near The Basement Cafe, ON NH2,
                    <br />
                    Just beside GLA University, Mathura,
                    <br />
                    Bharthia, Uttar Pradesh - 281406
                  </p>
                </div>
              </div>
            </div>

            {/* Nearby Places */}
            <div className="bg-card rounded-xl p-6 shadow-card">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                Nearby Landmarks
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {nearbyPlaces.map((place, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <place.icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{place.name}</p>
                      <p className="text-xs text-muted-foreground">{place.distance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timings */}
            <div className="bg-card rounded-xl p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-peach-light flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-peach-dark" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    Visiting Hours
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Monday - Saturday: 10:00 AM - 6:00 PM
                    <br />
                    Sunday: By Appointment Only
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
