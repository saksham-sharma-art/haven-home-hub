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

const GirlsHostelNearGLA = () => {
  const url = "https://stay-sweetly-home.lovable.app/girls-hostel-near-gla";
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

export default GirlsHostelNearGLA;