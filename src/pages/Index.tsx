import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import RoomsSection from "@/components/RoomsSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
  <title>Cozy Heaven Girls PG & Hostel Near GLA University Mathura</title>
  <meta name="description" content="Best girls PG and hostel near GLA University, Mathura. Safe, affordable, home-style meals, WiFi & 24/7 security. Call +91-8679691985." />
  <link rel="canonical" href="https://www.thecozyheaven.com/" />
  <meta property="og:title" content="Cozy Heaven Girls PG & Hostel Near GLA University Mathura" />
  <meta property="og:url" content="https://www.thecozyheaven.com/" />
</Helmet>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FacilitiesSection />
      <RoomsSection />
      <GallerySection />
      <LocationSection />
      <TestimonialsSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
