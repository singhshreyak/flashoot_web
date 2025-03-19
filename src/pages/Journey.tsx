import React from 'react';
import { motion } from 'framer-motion';
import { History, Star, Users, Code, Rocket, ArrowRightCircle, Gift, Building, Users2, TrendingUp, Coins, Github, Linkedin, Twitter } from 'lucide-react';
import NavHeader from '../components/NavHeader';
import { Footer } from '../components/Footer';
import { FloatingNav } from '@/components/FloatingNav';
import { SparklesCore } from '@/components/ui/aceternity';
import { Card3D } from '@/components/ui/3d-card';
import { AnimatedTooltip } from '@/components/ui/aceternity';

const teamMembers = [
  {
    id: 1,
    name: "Voleti Karthik",
    designation: "Co-Founder & CEO",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=256&h=256&auto=format&fit=crop",
    bio: "Visionary leader with expertise in product strategy and business development.",
    social: {
      linkedin: "https://linkedin.com/in/voletikarthik",
      twitter: "https://twitter.com/voletikarthik"
    }
  },
  {
    id: 2,
    name: "Manikanta Bukka",
    designation: "Co-Founder & CTO",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=256&h=256&auto=format&fit=crop",
    bio: "Tech innovator with a passion for building scalable solutions.",
    social: {
      github: "https://github.com/manikantabukka",
      linkedin: "https://linkedin.com/in/manikantabukka"
    }
  },
  {
    id: 3,
    name: "Shreyak Singh",
    designation: "Co-Founder & COO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&h=256&auto=format&fit=crop",
    bio: "Operations expert focused on delivering exceptional user experiences.",
    social: {
      linkedin: "https://linkedin.com/in/shreyaksingh",
      twitter: "https://twitter.com/shreyaksingh"
    }
  },
  {
    id: 4,
    name: "Dinesh Bolla",
    designation: "Lead Designer",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=256&h=256&auto=format&fit=crop",
    bio: "Creative mind behind Flashoot's stunning visual identity.",
    social: {
      linkedin: "https://linkedin.com/in/dineshbolla"
    }
  },
  {
    id: 5,
    name: "Aman Singh",
    designation: "Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop",
    bio: "Full-stack developer with expertise in modern web technologies.",
    social: {
      github: "https://github.com/amansingh",
      linkedin: "https://linkedin.com/in/amansingh"
    }
  }
];

const TeamMemberCard = ({ member }: { member: typeof teamMembers[0] }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="relative group"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-primary/30 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500" />
    <div className="relative h-full rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 p-6 flex flex-col items-center">
      <div className="relative mb-4">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary/30 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white/10"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
          <div className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
            <p className="text-xs font-medium text-primary">{member.designation}</p>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold mb-2 text-center">
        {member.name}
      </h3>

      <p className="text-sm text-gray-400 text-center mb-4">
        {member.bio}
      </p>

      <div className="mt-auto flex items-center gap-2">
        {member.social.github && (
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={member.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-colors"
          >
            <Github className="w-4 h-4" />
          </motion.a>
        )}
        {member.social.linkedin && (
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={member.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </motion.a>
        )}
        {member.social.twitter && (
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={member.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-colors"
          >
            <Twitter className="w-4 h-4" />
          </motion.a>
        )}
      </div>
    </div>
  </motion.div>
);

const timelineData = [
  {
    date: "October 2023",
    title: "The Beginning",
    content: "Found a painpoint and came up with this idea.",
    icon: Star,
    color: "from-blue-500/20 to-blue-500/5"
  },
  {
    date: "November 2023",
    title: "Team Formation",
    content: "Formed our Xmen Army. Voleti Karthik, Manikanta Bukka and Shreyak Singh joined hands.",
    icon: Users,
    color: "from-purple-500/20 to-purple-500/5"
  },
  {
    date: "December 2023",
    title: "Research Phase",
    content: "Research and UX started on the app. Dinesh Bolla (our UI/UX designer joined us during this phase).",
    icon: Code,
    color: "from-green-500/20 to-green-500/5"
  },
  {
    date: "February 2024",
    title: "First Prototype",
    content: "First Prototype was ready.",
    icon: Rocket,
    color: "from-yellow-500/20 to-yellow-500/5"
  },
  {
    date: "March 2024",
    title: "Fresh Start",
    content: "We were still not happy, so we scrapped the working prototype and started again.",
    icon: ArrowRightCircle,
    color: "from-orange-500/20 to-orange-500/5"
  },
  {
    date: "May 2024",
    title: "Development Phase",
    content: "Things started falling in to place. Thanks to our developer Aman Singh.",
    icon: Code,
    color: "from-cyan-500/20 to-cyan-500/5"
  },
  {
    date: "July 2024",
    title: "Seed Funding",
    content: "We close a Seed Funding round from Mr.Raghu Nandan for Rs.60,00,000 valuating the company at Rs.5,50,00,000.",
    icon: Coins,
    color: "from-emerald-500/20 to-emerald-500/5"
  },
  {
    date: "August 2024",
    title: "Grand Launch",
    content: "Grand Launch of the Product. Launch Party held at Akan.",
    icon: Gift,
    color: "from-pink-500/20 to-pink-500/5"
  },
  {
    date: "September 2024",
    title: "Community Growth",
    content: "Onboarded First 100 Partners to start shooting with Flashoot building a community.",
    icon: Users2,
    color: "from-indigo-500/20 to-indigo-500/5"
  },
  {
    date: "February 2025",
    title: "Expansion Plans",
    content: "Flashoot plans on expanding to 10+ cities and create a strong brand presence.",
    icon: Building,
    color: "from-violet-500/20 to-violet-500/5"
  },
  {
    date: "March 2025",
    title: "Series A Funding",
    content: "Closed another round of funding from Mr.Prashant and Mr.Arun for Rs.2,50,00,000 valuating the company at Rs.22,00,00,000.",
    icon: TrendingUp,
    color: "from-amber-500/20 to-amber-500/5"
  }
];

const TimelineItem = ({ event, index }: { event: typeof timelineData[0], index: number }) => {
  const isLast = index === timelineData.length - 1;

  return (
    <div className="relative">
      {/* Connecting Line */}
      {!isLast && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: '100%' }}
          transition={{ duration: 1, delay: index * 0.2 }}
          className="absolute left-[1.75rem] top-16 w-px h-[calc(100%-4rem)] bg-gradient-to-b from-primary/30 via-primary/20 to-transparent"
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative flex gap-4"
      >
        {/* Timeline Point */}
        <div className="relative flex-shrink-0">
          <motion.div
            className="relative z-10 w-14 h-14"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="absolute inset-0 rounded-xl bg-black/40 backdrop-blur-xl border border-primary/50" />
            <motion.div
              className={`absolute inset-0 rounded-xl bg-gradient-to-br ${event.color}`}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="absolute inset-0 rounded-xl bg-black/40 backdrop-blur-sm flex items-center justify-center">
              <event.icon className="w-6 h-6 text-primary" />
            </div>
          </motion.div>
        </div>

        {/* Content Card */}
        <motion.div
          whileHover={{ scale: 1.02, translateY: -2 }}
          className="flex-1 relative group mb-12"
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${event.color} rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          <div className="relative p-4 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
                {event.date}
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2">
              {event.title}
            </h3>
            <p className="text-sm text-gray-400">
              {event.content}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default function Journey() {
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

        {/* Team Section */}
        <section className="relative py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
              >
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm">Meet Our Team</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                The Minds Behind <span className="gradient-text">Flashoot</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto"
              >
                Meet the passionate individuals who are revolutionizing content creation
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TeamMemberCard member={member} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="relative py-12 md:py-20 bg-black/20">
          <div className="max-w-5xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
              >
                <History className="w-4 h-4 text-primary" />
                <span className="text-sm">Our Journey</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                From Vision to <span className="gradient-text">Reality</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto"
              >
                Follow our journey of innovation, growth, and success as we transform the way content is created
              </motion.p>
            </div>

            {/* Timeline */}
            <div className="max-w-3xl mx-auto">
              <div className="space-y-0">
                {timelineData.map((event, index) => (
                  <TimelineItem 
                    key={event.date} 
                    event={event} 
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>

      <FloatingNav />
    </div>
  );
}