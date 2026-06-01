import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MapPin, Shield, Wifi, Utensils, Clock, GraduationCap, Star } from "lucide-react";
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
  const url = "https://www.thecozyheaven.com/girls-hostel-near-gla";

  const highlights = [
    {
      icon: GraduationCap,
      title: "Minutes from GLA Campus",
      text: "A short walk or quick auto ride to GLA University gates — perfect for lectures, labs and library visits without wasting time on commute.",
    },
    {
      icon: Shield,
      title: "Safety First, Always",
      text: "24/7 CCTV surveillance, secure biometric entry, a female warden on-site at all times, and a strict visitor policy that parents actually appreciate.",
    },
    {
      icon: Utensils,
      title: "Home-Style Meals Daily",
      text: "Fresh vegetarian breakfast, lunch and dinner cooked in a hygienic kitchen every single day. No packet food, no skipping meals, no outside dependency.",
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      text: "Reliable internet across every room and common area — for online classes, assignments, video calls home, and everything in between.",
    },
    {
      icon: Clock,
      title: "Built for Studying",
      text: "Quiet study lounge, regular power backup and a calm, distraction-free environment designed around a GLA student's academic schedule.",
    },
    {
      icon: Star,
      title: "4.9★ Rated by Residents",
      text: "Our Google rating is built entirely on honest reviews from current and former residents — and the parents who visited and trusted us with their daughters.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Girls Hostel Near GLA University Mathura | Cozy Heaven PG & Hostel</title>
        <meta
          name="description"
          content="Safe, affordable girls hostel near GLA University Mathura. Home-style meals, high-speed WiFi, 24/7 CCTV & female warden on-site. Rated 4.9★. Book your room today."
        />
        <link rel="canonical" href={url} />
        <meta
          property="og:title"
          content="Girls Hostel Near GLA University Mathura | Cozy Heaven"
        />
        <meta
          property="og:description"
          content="Cozy Heaven — trusted girls hostel near GLA University Mathura with secure entry, hygienic food, high-speed WiFi and 24/7 safety. Rated 4.9★ on Google."
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            name: "Cozy Heaven Girls PG & Hostel",
            description:
              "Girls hostel near GLA University Mathura with safe, comfortable and affordable stay. Fresh meals, WiFi, 24/7 CCTV and female warden included.",
            url,
            telephone: "+91-8679691985",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "10",
            },
            amenityFeature: [
              { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
              { "@type": "LocationFeatureSpecification", name: "Meals Included", value: true },
              { "@type": "LocationFeatureSpecification", name: "24/7 CCTV", value: true },
              { "@type": "LocationFeatureSpecification", name: "Female Warden", value: true },
              { "@type": "LocationFeatureSpecification", name: "Power Backup", value: true },
              { "@type": "LocationFeatureSpecification", name: "Biometric Entry", value: true },
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "Chaumuhan",
              addressLocality: "Mathura",
              addressRegion: "Uttar Pradesh",
              postalCode: "281406",
              addressCountry: "IN",
            },
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* ── Hero Section ── */}
      <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImage}
            alt="Girls hostel near GLA University Mathura — Cozy Heaven"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        </div>
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            4.9★ Trusted by GLA Students & Parents
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
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Cozy Heaven is a safe, homely girls hostel just minutes from GLA University —
            with fresh daily meals, fast WiFi, 24/7 security and a warm community of student residents.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <Button asChild size="lg" className="cta-gradient border-0 text-primary-foreground">
              <a href="#rooms">View Rooms & Pricing</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:+918679691985">Call +91 8679691985</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Why Cozy Heaven ── */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why GLA Students Choose Cozy Heaven
            </h2>
            <p className="text-muted-foreground">
              A girls-only hostel built around what students near GLA University actually need —
              proximity, safety, good food and a genuinely study-friendly atmosphere.
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
                <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
                  {h.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Narrative Content ── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            A Home Away From Home, Right Next to GLA
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Moving to Mathura for studies at GLA University is exciting — but finding a girls
              hostel that feels genuinely safe, clean and homely is harder than it looks. Cozy
              Heaven was built to solve exactly that. Our girls-only hostel is located in
              Chaumuhan, just minutes from the GLA University main gate, so you spend more time
              on what actually matters: academics, friendships and personal growth.
            </p>
            <p>
              Every room is fully furnished with a proper bed, study table, wardrobe and ample
              storage. Fresh home-style vegetarian meals are cooked and served three times a day.
              High-speed WiFi covers every room and common area. A friendly female warden is
              present on the premises at all times — not just during the day, but through the night.
            </p>
            <p>
              With 24/7 CCTV, secure biometric entry and a strict visitor policy, parents feel
              genuinely confident — and residents feel free to focus on their lives without worrying
              about their safety. Whether you're a first-year B.Tech student, an MBA aspirant or a
              working professional near GLA, we have single, double and triple-sharing rooms to
              suit every budget.
            </p>
            <p>
              Our 4.9-star rating on Google is not something we advertised for — it's the honest
              reflection of how our residents feel about living here. Come visit us, see the rooms,
              meet the warden, and have a meal before you decide. We'd love to show you around.
            </p>
          </div>

          {/* ── Internal Links ── */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-8">
            <Button asChild variant="link" className="text-primary">
              <Link to="/pg-near-gla">Looking for a PG near GLA instead? →</Link>
            </Button>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <Button asChild variant="link" className="text-primary">
              <Link to="/blog/girls-hostel-vs-pg-near-gla-university">
                Hostel vs PG — read our guide →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Social Proof Strip ── */}
      <section className="py-10 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            {[
              { value: "4.9★", label: "Google Rating" },
              { value: "10+", label: "Verified Reviews" },
              { value: "24/7", label: "CCTV & Security" },
              { value: "3×", label: "Fresh Meals Daily" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-2xl md:text-3xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
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
