import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MapPin, Shield, Wifi, Utensils, Clock, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import RoomsSection from "@/components/RoomsSection";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-hostel.jpg";

const GirlsHostelNearGLA = () => {
  const url = "https://stay-sweetly-home.lovable.app/girls-hostel-near-gla";
  const highlights = [
    { icon: GraduationCap, title: "Minutes from GLA Campus", text: "A short walk / quick auto ride to GLA University gates — perfect for lectures, labs and library." },
    { icon: Shield, title: "Safety First", text: "24/7 CCTV, secure biometric entry, female warden on-site and strict visitor policy." },
    { icon: Utensils, title: "Home-style Meals", text: "Fresh vegetarian breakfast, lunch and dinner cooked daily in a hygienic kitchen." },
    { icon: Wifi, title: "High-Speed WiFi", text: "Reliable internet across rooms and common areas for online classes and study." },
    { icon: Clock, title: "Study-Friendly", text: "Quiet study lounge, regular power backup and a peaceful environment for GLA students." },
    { icon: MapPin, title: "Prime Location", text: "Located in a safe, well-connected neighbourhood close to GLA University, Mathura." },
  ];
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Girls Hostel Near GLA University Mathura | Cozy Heaven PG & Hostel</title>
        <meta
          name="description"
          content="Safe, affordable girls hostel near GLA University Mathura. Home-style meals, high-speed WiFi, 24/7 CCTV & female warden. Book your room at Cozy Heaven today."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Girls Hostel Near GLA University Mathura | Cozy Heaven" />
        <meta
          property="og:description"
          content="Cozy Heaven — trusted girls hostel near GLA University Mathura with secure entry, hygienic food and high-speed WiFi."
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "Cozy Heaven Girls PG & Hostel",
          description: "Girls hostel near GLA University Mathura with safe, comfortable and affordable stay.",
          url,
          telephone: "+91-8679691985",
          address: { "@type": "PostalAddress", addressLocality: "Mathura", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
        })}</script>
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImage} alt="Girls hostel near GLA University Mathura" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        </div>
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Trusted by GLA Students
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-5"
          >
            Girls Hostel Near GLA University, Mathura
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            Cozy Heaven is a safe, homely girls PG & hostel just minutes from GLA University —
            with fresh meals, fast WiFi, 24/7 security and a warm community of student residents.
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

      {/* Why Cozy Heaven for GLA students */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why GLA Students Choose Cozy Heaven
            </h2>
            <p className="text-muted-foreground">
              A girls-only hostel built around what students near GLA University actually need —
              proximity, safety, good food and a study-friendly atmosphere.
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

      {/* Intro narrative */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            A Home Away From Home, Right Next to GLA
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Moving to Mathura for studies at GLA University is exciting — but finding a girls
              hostel that feels safe, clean and genuinely homely is hard. Cozy Heaven was built to
              solve exactly that. Our girls-only PG & hostel is located minutes from the GLA campus,
              so you save time on commute and spend more on what matters: academics, friendships
              and self-growth.
            </p>
            <p>
              Every room is fully furnished with a bed, study table, wardrobe and ample storage.
              Fresh home-style meals are served three times a day, high-speed WiFi runs across the
              property, and a friendly female warden is always on-site. With 24/7 CCTV, secure
              entry and a strict visitor policy, parents feel confident — and residents feel free.
            </p>
            <p>
              Whether you're a first-year B.Tech student, an MBA aspirant or a working
              professional near GLA, Cozy Heaven offers single, double and triple-sharing rooms to
              suit your budget and lifestyle.
            </p>
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="link" className="text-primary">
              <Link to="/pg-near-gla">Looking for a PG near GLA instead? →</Link>
            </Button>
          </div>
        </div>
      </section>

      <RoomsSection />
      <LocationSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default GirlsHostelNearGLA;