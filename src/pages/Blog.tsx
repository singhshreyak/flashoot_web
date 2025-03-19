import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { Link } from 'wouter';
import NavHeader from '../components/NavHeader';
import { Footer } from '../components/Footer';
import { FloatingNav } from '@/components/FloatingNav';
import { SparklesCore } from '@/components/ui/aceternity';
import { getPosts } from '@/lib/ghost';

export default function Blog() {
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts()
  });

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

        {/* Hero Section */}
        <section className="relative py-12">
          <div className="container mx-auto px-4">
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
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              >
                Our <span className="gradient-text">Blog</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 max-w-2xl mx-auto text-lg"
              >
                Insights, updates, and stories from the Flashoot team
              </motion.p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {isLoading ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-pulse text-gray-400">Loading posts...</div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post: any) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <motion.article
                      whileHover={{ y: -5 }}
                      className="group relative rounded-3xl overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 h-full cursor-pointer"
                    >
                      {post.feature_image && (
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={post.feature_image}
                            alt={post.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/50" />
                        </div>
                      )}

                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          {post.primary_tag && (
                            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs text-gray-300">
                              {post.primary_tag.name}
                            </span>
                          )}
                          <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs text-gray-300">
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
                          <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-1 text-primary/80 hover:text-primary"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <Footer />
        </div>
      </main>

      <FloatingNav />
    </div>
  );
}