import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import { Link, useParams } from 'wouter';
import NavHeader from '../components/NavHeader';
import { Footer } from '../components/Footer';
import { FloatingNav } from '@/components/FloatingNav';
import { getPost } from '@/lib/ghost';

export default function BlogPost() {
  const [, params] = useParams();
  const { slug } = params;

  const { data: post, isLoading } = useQuery({
    queryKey: ['post', slug],
    queryFn: () => getPost(slug)
  });

  return (
    <div className="min-h-screen bg-background">
      <NavHeader />

      <main className="relative pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#ff000022,#00000000)]" />
        </div>

        <div className="container mx-auto px-4 py-12">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-pulse text-gray-400">Loading post...</div>
            </div>
          ) : post ? (
            <article className="max-w-4xl mx-auto">
              <Link href="/blog">
                <motion.button
                  whileHover={{ x: -5 }}
                  className="flex items-center gap-2 text-gray-400 hover:text-white mb-8"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </motion.button>
              </Link>

              {post.feature_image && (
                <div className="relative h-[400px] rounded-3xl overflow-hidden mb-8">
                  <img
                    src={post.feature_image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                </div>
              )}

              <div className="flex items-center gap-4 mb-6">
                {post.primary_tag && (
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm">
                    {post.primary_tag.name}
                  </span>
                )}
                <span className="text-gray-400">
                  {format(new Date(post.published_at), 'MMMM dd, yyyy')}
                </span>
                <span className="text-gray-400">{post.reading_time} min read</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold mb-6">{post.title}</h1>

              {post.primary_author && (
                <div className="flex items-center gap-4 mb-12">
                  {post.primary_author.profile_image && (
                    <img
                      src={post.primary_author.profile_image}
                      alt={post.primary_author.name}
                      className="w-12 h-12 rounded-full"
                    />
                  )}
                  <div>
                    <p className="font-medium">{post.primary_author.name}</p>
                    <p className="text-gray-400">{post.primary_author.bio}</p>
                  </div>
                </div>
              )}

              <div 
                className="prose prose-invert prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </article>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Post not found</h2>
              <Link href="/blog">
                <button className="text-primary hover:text-primary/80">
                  Return to Blog
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm mt-20">
          <Footer />
        </div>
      </main>

      <FloatingNav />
    </div>
  );
}