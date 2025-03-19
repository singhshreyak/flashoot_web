import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Download, ChevronRight, Mail, Calendar, Tag, ArrowRight, Newspaper } from 'lucide-react';
import { Link } from 'wouter';
import { format } from 'date-fns';
import NavHeader from '../components/NavHeader';
import { Footer } from '../components/Footer';
import { FloatingNav } from '@/components/FloatingNav';
import { SparklesCore } from '@/components/ui/aceternity';
import { getPosts } from '@/lib/ghost';

const pressArticles = [
  {
    title: "Flashoot: India's Only Platform Where You Can Book Reelmakers",
    source: "Business Standard",
    date: "April 8, 2024",
    category: "Press Release",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2000&auto=format&fit=crop",
    url: "https://www.business-standard.com/content/press-releases-ani/flashoot-india-s-only-platform-where-you-can-book-reelmakers-124040800529_1.html",
    excerpt: "Flashoot, India's pioneering platform, is revolutionizing the content creation industry by offering a unique service that connects businesses with professional reel makers..."
  },
  {
    title: "Flashoot Raises $6 Million in Seed Funding, Valuating it at $55 Million",
    source: "Outlook India",
    date: "April 2024",
    category: "Featured",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2000&auto=format&fit=crop",
    url: "https://www.outlookindia.com/hub4business/flashoot-raises-6-million-in-seed-funding-valuating-it-at-55-million",
    excerpt: "In a significant milestone for the content creation industry, Flashoot has successfully secured $6 million in seed funding, achieving a remarkable valuation of $55 million..."
  },
  {
    title: "How Flashoot is Transforming Content Creation in India",
    source: "YourStory",
    date: "March 2024",
    category: "Feature",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop",
    url: "#",
    excerpt: "With its innovative platform connecting businesses to professional reel makers, Flashoot is making high-quality content creation accessible to all..."
  }
];

export default function Press() {
  // Fetch all posts from Ghost
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts()
  });

  const PressArticleCard = ({ article }: { article: typeof pressArticles[0] }) => (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative rounded-3xl overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm text-xs border border-primary/20">
            {article.source}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs">
            {article.category}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-3 line-clamp-2">
          {article.title}
        </h3>

        <p className="text-gray-400 text-sm mb-6 line-clamp-3">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400">{article.date}</span>
          </div>
          <motion.a
            href={article.url}
            whileHover={{ x: 5 }}
            className="flex items-center gap-1 text-primary/80 hover:text-primary"
          >
            Read More
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );

  const BlogPostCard = ({ post }: { post: any }) => (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative rounded-3xl overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10"
    >
      {post.feature_image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.feature_image}
            alt={post.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          {post.primary_tag && (
            <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm text-xs border border-primary/20">
              {post.primary_tag.name}
            </span>
          )}
          <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs">
            {format(new Date(post.published_at), 'MMM dd, yyyy')}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-3 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-400 text-sm mb-6 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            {post.primary_author?.profile_image && (
              <img
                src={post.primary_author.profile_image}
                alt={post.primary_author.name}
                className="w-8 h-8 rounded-full"
              />
            )}
            <div className="text-sm">
              <p className="font-medium">{post.primary_author?.name}</p>
              <p className="text-gray-400">{post.reading_time} min read</p>
            </div>
          </div>
          <Link href={`/blog/${post.slug}`}>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-1 text-primary/80 hover:text-primary cursor-pointer"
            >
              Read More
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />

      <main className="relative pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#ff000022,#00000000)]" />
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <section className="relative py-12">
            <div className="text-center relative">
              <div className="absolute inset-0 -z-10">
                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={100}
                  className="w-full h-full"
                  particleColor="#fff"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
              >
                <Newspaper className="w-4 h-4 text-primary" />
                <span>Latest Updates</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              >
                Press & <span className="gradient-text">Blog</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 max-w-2xl mx-auto text-lg"
              >
                Stay updated with our latest news, announcements, and insights
              </motion.p>
            </div>
          </section>

          {/* Press Coverage Section */}
          <section className="py-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Latest <span className="gradient-text">Press Coverage</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {pressArticles.map((article, index) => (
                <PressArticleCard key={index} article={article} />
              ))}
            </div>
          </section>

          {/* Blog Posts Section */}
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-pulse text-gray-400">Loading posts...</div>
            </div>
          ) : posts.length > 0 ? (
            <section className="py-20">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold mb-12 text-center"
              >
                Latest from the <span className="gradient-text">Blog</span>
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>
            </section>
          ) : null}

          {/* Contact Section */}
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 p-8">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>press@flashoot.com</span>
                <span className="hidden sm:inline-block">•</span>
                <span className="hidden sm:inline-block">+91 (800) 123-4567</span>
              </div>

              <div className="flex items-center gap-3">
                <button className="px-4 py-2 text-sm rounded-lg bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm border border-white/10 flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Press Kit</span>
                </button>
                <button className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-primary/90 to-primary/70 hover:from-primary hover:to-primary/80 transition-colors font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Contact PR</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <Footer />
        </div>
      </main>

      <FloatingNav />
    </div>
  );
}