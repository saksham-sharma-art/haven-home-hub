export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "best-girls-hostel-near-gla-university-mathura",
    title: "Best Girls Hostel Near GLA University Mathura — A Complete Guide",
    excerpt:
      "Looking for a safe, comfortable girls hostel near GLA University? Here's everything you need to know before booking your stay at Cozy Heaven.",
    content: `Choosing the right hostel near GLA University Mathura is one of the most important decisions for any student or working professional. At Cozy Heaven Girls PG & Hostel, we have spent years curating a living experience that feels just like home.\n\nOur hostel is located within easy reach of GLA University, making the daily commute simple and stress-free. With 24/7 CCTV surveillance, biometric entry, and a dedicated female warden, parents can rest assured that their daughters are in safe hands.\n\nBeyond safety, we focus on creating a nurturing environment — home-style meals prepared in a hygienic kitchen, high-speed WiFi for studies, comfortable beds, and quiet study zones. Whether you're an undergraduate student or a working girl, Cozy Heaven offers the perfect balance of independence and care.`,
    author: "Cozy Heaven Team",
    date: "2026-05-10",
    readTime: "5 min read",
    image: "/placeholder.svg",
    category: "Student Life",
  },
  {
    slug: "what-to-pack-for-girls-hostel-mathura",
    title: "What to Pack for Your Girls Hostel Stay in Mathura",
    excerpt:
      "A practical checklist for girls moving into a hostel or PG in Mathura — essentials, comfort items, and what to leave behind.",
    content: `Moving into a hostel for the first time can feel overwhelming. To help you settle in quickly at Cozy Heaven Girls PG & Hostel, we've put together a friendly packing checklist.\n\nEssentials: bedsheets and a comfortable pillow, toiletries, a sturdy water bottle, a small first-aid kit, and your study materials. Don't forget chargers, an extension cord, and a reliable lock for your personal locker.\n\nComfort items: a few photos from home, your favourite throw blanket, slippers, and a journal. These small touches make your room feel uniquely yours.\n\nLeave behind: bulky furniture, expensive jewellery, and anything fragile. We provide a bed, study desk, wardrobe, and all standard amenities — so you can travel light and arrive ready to enjoy your new home.`,
    author: "Cozy Heaven Team",
    date: "2026-05-18",
    readTime: "4 min read",
    image: "/placeholder.svg",
    category: "Hostel Tips",
  },
  {
    slug: "healthy-hostel-food-cozy-heaven",
    title: "Healthy & Tasty Hostel Food at Cozy Heaven",
    excerpt:
      "A peek into the kitchen — how we plan weekly menus, source fresh ingredients, and serve home-style meals our girls actually look forward to.",
    content: `Food can make or break a hostel experience. At Cozy Heaven Girls PG & Hostel, we treat every meal as a chance to make our residents feel cared for.\n\nOur weekly menu is rotated to keep things interesting — fresh chapatis, seasonal sabzis, dal, rice, salad, and curd at lunch and dinner. Breakfast includes options like poha, paratha, sandwiches, and seasonal fruit.\n\nWe source vegetables and groceries locally and prepare everything in a hygienic kitchen supervised daily. Special meals are arranged during festivals, and we're always open to feedback from residents on dishes they'd love to see on the menu.\n\nHealthy food, warm flavours, and a little bit of home — that's our promise.`,
    author: "Cozy Heaven Team",
    date: "2026-05-25",
    readTime: "3 min read",
    image: "/placeholder.svg",
    category: "Food & Wellness",
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);