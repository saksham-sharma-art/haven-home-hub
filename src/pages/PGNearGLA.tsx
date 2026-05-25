import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import RoomsSection from "@/components/RoomsSection";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const PGNearGLA = () => {
  const url = "https://stay-sweetly-home.lovable.app/pg-near-gla";
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>PG Near GLA University Mathura | Cozy Heaven Girls PG & Hostel</title>
        <meta
          name="description"
          content="Looking for a girls PG near GLA University Mathura? Cozy Heaven offers fully-furnished rooms, fresh meals, high-speed WiFi and round-the-clock security."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="PG Near GLA University Mathura | Cozy Heaven" />
        <meta
          property="og:description"
          content="Cozy Heaven — premium girls PG near GLA University Mathura with home-style food, WiFi and 24/7 safety."
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "Cozy Heaven Girls PG & Hostel",
          description: "Girls PG near GLA University Mathura with furnished rooms and fresh meals.",
          url,
          telephone: "+91-8679691985",
          address: { "@type": "PostalAddress", addressLocality: "Mathura", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
        })}</script>
      </Helmet>
      <Navbar />
      <HeroSection />
      <AboutSection />
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