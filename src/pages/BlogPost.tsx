import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { blogPosts, getPostBySlug } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const url = `https://stay-sweetly-home.lovable.app/blog/${post.slug}`;
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>{post.title} | Cozy Heaven Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          author: { "@type": "Organization", name: post.author },
          datePublished: post.date,
          mainEntityOfPage: url,
          publisher: {
            "@type": "Organization",
            name: "Cozy Heaven Girls PG & Hostel",
          },
        })}</script>
      </Helmet>
      <Navbar />
      <main className="flex-1 pt-24 md:pt-32 pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border/50">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" /> {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> {post.readTime}
              </span>
            </div>

            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-muted mb-10">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <div className="prose prose-lg max-w-none text-foreground/90 space-y-5">
              {post.content.split("\n\n").map((para, i) => (
                <p key={i} className="leading-relaxed text-base md:text-lg text-muted-foreground">
                  {para}
                </p>
              ))}
            </div>
          </motion.div>

          {related.length > 0 && (
            <section className="mt-16 pt-12 border-t border-border/50">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">You might also like</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="group p-5 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all"
                  >
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">{p.category}</span>
                    <h3 className="font-serif text-lg font-semibold text-foreground mt-2 group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-2">{p.excerpt}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-12 text-center">
            <Button asChild className="cta-gradient border-0 text-primary-foreground">
              <Link to="/blog">Browse All Posts</Link>
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;