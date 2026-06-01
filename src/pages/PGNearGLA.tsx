import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MapPin, Shield, Wifi, Utensils, Clock, GraduationCap, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import RoomsSection from "@/components/RoomsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-hostel.jpg";

const PGNearGLA = () => {
  const url = "https://www.thecozyheaven.com/pg-near-gla";

  const highlights = [
    { icon: GraduationCap, title: "Steps from GLA Campus", text: "Walk or take a 2-minute auto to GLA University gates — no long commutes, more time for studies." },
    { icon: Shield, title: "Safe & Secure", text: "24/7 CCTV, biometric entry, female warden on-site and a strict visitor policy for complete peace of mind." },
    { icon: Utensils, title: "3 Meals Included", text: "Fresh home-style vegetarian breakfast, lunch and dinner cooked daily. No outside food hunting needed." },
    { icon: Wifi, title: "High-Speed WiFi", text: "Reliable internet across all rooms and common areas — perfect for online classes, assignments and streaming." },
    { icon: Clock, title: "Study-Friendly Environment", text: "Quiet study lounge, power backup and a calm atmosphere designed around a student's academic schedule." },
    { icon: Star, title: "4.9★ Rated by Students", text: "Trusted by GLA University girls for safety, food quality and a genuinely homely atmosphere." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Girls PG Near GLA University Mathura | Cozy Heaven PG & Hostel</title>
        <meta
          name="description"
          content="Best girls PG near GLA University Mathura with furnished rooms, 3 meals/day, high-speed WiFi & 24/7 security. Rated 4.9★. Call +91-8679691985."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Girls PG Near GLA University Mathura | Cozy Heaven" />
        <meta property="og:description" content="Cozy Heaven — top-rated girls PG near GLA University Mathura. Meals, WiFi, CCTV & female warden included." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "Cozy Heaven Girls PG & Hostel",
          description: "Girls PG near GLA University Mathura — furnished rooms, fresh meals, WiFi and 24/7 safety.",
          url,
          telephone: "+91-8679691985",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "10"
          },
          amenityFeature: [
            { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
            { "@type": "LocationFeatureSpecification", name: "Meals Included", value: true },
            { "@type": "LocationFeatureSpecification", name: "24/7 CCTV", value: true },
            { "@type": "LocationFeatureSpecification", name: "Female Warden", value: true },
            { "@type": "LocationFeatureSpecification", name: "Power Backup", value: true },
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Chaumuhan",
            addressLocality: "Mathura",
            addressRegion: "Uttar Pradesh",
            postalCode: "281406",
            addressCountry: "IN"
          },
        })}</script>
      </Helmet>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImage} alt="Girls PG near GLA University Mathura" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        </div>
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            4.9★ Rated by GLA Students
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-5"
          >
            Girls PG Near GLA University, Mathura
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            Cozy Heaven is a premium girls-only PG just minutes from GLA University —
            with fully furnished rooms, fresh daily meals, fast WiFi and round-the-clock safety.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="cta-gradient border-0 text-primary-foreground">
              <a href="#rooms">View Rooms & Pricing</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:+918679691985">Call +91 8679691985</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Why Choose Cozy Heaven PG ── */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Cozy Heaven as Your PG Near GLA?
            </h2>
            <p className="text-muted-foreground">
              A girls-only PG designed around what GLA University students actually need —
              location, safety, food and a peaceful place to study and grow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <h.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">{h.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Narrative content — unique to PG page ── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            More Than a Room — A Place to Actually Thrive
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Finding a reliable girls PG near GLA University Mathura is harder than it sounds.
              There are plenty of options, but very few that genuinely combine safety, good food,
              clean rooms and a warm environment all in one place. Cozy Heaven was built to be
              exactly that.
            </p>
            <p>
              Our PG is located in Chaumuhan, minutes from the GLA University main gate.
              Every room is fully furnished — proper bed, study table with a chair, wardrobe,
              and good ventilation. We know what a student actually needs to sleep well and
              study well, and that's exactly what we provide.
            </p>
            <p>
              Three fresh vegetarian meals are cooked daily in our hygienic kitchen.
              High-speed WiFi covers every room and common area. A female warden is present
              on-site at all times. And with 24/7 CCTV and secure biometric entry, both
              students and parents have genuine peace of mind.
            </p>
            <p>
              We are rated 4.9 stars on Google — not because we asked for it, but because
              our residents feel at home here. That's the standard we hold ourselves to every day.
            </p>
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="link" className="text-primary">
              <Link to="/girls-hostel-near-gla">
                Looking for a Girls Hostel near GLA instead? →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <FacilitiesSection />
      <RoomsSection />
      <LocationSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default PGNearGLA;
