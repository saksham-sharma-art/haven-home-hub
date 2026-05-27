import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  const url = "https://stay-sweetly-home.lovable.app/blog";
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Blog | Cozy Heaven Girls PG & Hostel — Tips, Stories & Guides</title>
        <meta
          name="description"
          content="Read the Cozy Heaven blog for hostel tips, student life in Mathura, food guides, safety advice, and stories from our girls' PG & hostel community."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Blog | Cozy Heaven Girls PG & Hostel" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <main className="flex-1 pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1 mb-4 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary">
              Cozy Heaven Blog
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Stories, Tips & Guides
            </h1>
            <p className="text-muted-foreground">
              Everything you need to know about hostel life, studying near GLA University, and making the most of your stay in Mathura.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden bg-card border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={post.image}
                      alt={`${post.title} - Cozy Heaven Girls PG & Hostel blog`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {post.category}
                    </span>
                    <h2 className="font-serif text-xl font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;