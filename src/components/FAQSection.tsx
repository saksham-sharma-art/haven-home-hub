import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    q: "Is Cozy Heaven a girls hostel near GLA University Mathura?",
    a: "Yes. Cozy Heaven Girls PG & Hostel is one of the closest girls-only PG & hostel accommodations to GLA University, Mathura, offering a safe and comfortable stay for students and working professionals.",
  },
  {
    q: "How far is Cozy Heaven from GLA University?",
    a: "We are located just a short walk / minutes' drive from GLA University, Mathura, making it ideal for daily classes, library visits and campus events without long commutes.",
  },
  {
    q: "What kind of food is served at the hostel?",
    a: "We provide fresh, home-style vegetarian meals — breakfast, lunch and dinner — prepared in a clean, hygienic kitchen with a weekly rotating menu and special items on festivals.",
  },
  {
    q: "Is high-speed WiFi available in the rooms?",
    a: "Yes. High-speed WiFi is available throughout the property, including all rooms and common areas, so residents can study, attend online classes and stream without interruption.",
  },
  {
    q: "How safe is the hostel for girls?",
    a: "Safety is our top priority. The property has 24/7 CCTV surveillance, secure entry, a female warden on-site, biometric / register-based entry logs and strict visitor policies to ensure a safe environment for every resident.",
  },
  {
    q: "Do you offer single, double and triple sharing rooms?",
    a: "We offer double and triple sharing rooms with attached / common washroom options, study table, wardrobe and comfortable bedding. Pricing varies by room type — contact us for current availability.",
  },
  {
    q: "What is the monthly rent for girls PG near GLA University Mathura?",
    a: "Our rooms start from an affordable monthly rent covering accommodation, three meals daily, WiFi, electricity and security. Pricing varies by room type — single occupancy, double sharing or triple sharing. Contact us directly for current pricing and availability.",
  },
  {
    q: "Is there power backup at the hostel?",
    a: "Yes. We have regular power backup to ensure uninterrupted study, charging and comfort — especially important during Mathura summers when power cuts can occur.",
  },
  {
    q: "Can parents visit the hostel before admission?",
    a: "Absolutely. We warmly welcome parents to visit Cozy Heaven, see the rooms, meet the warden, and even have a meal with us before making any decision. We believe transparency builds trust.",
  },
  {
    q: "What is the difference between your Girls Hostel and PG options?",
    a: "Both are girls-only and include meals, WiFi and security. The hostel setup is more structured with shared rooms and common facilities, while PG rooms offer slightly more privacy. Visit our Girls Hostel page or PG Near GLA page to compare.",
  },
  {
    q: "How do I book a room at Cozy Heaven Girls PG & Hostel?",
    a: "You can call us directly at +91-8679691985, fill out the enquiry form on our website, or visit us in person at Chaumuhan, near GLA University, Mathura. We recommend visiting before confirming your booking.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Answers about our girls hostel near GLA University Mathura — food, WiFi, safety and more.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left font-medium">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
};

export default FAQSection;
