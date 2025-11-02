import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Launch Fast',
    text: 'Learn how to validate and ship ideas with speed and clarity.',
    accent: 'from-fuchsia-500/20 via-fuchsia-400/10 to-transparent',
  },
  {
    icon: Users,
    title: 'Mentor-Led',
    text: 'Get guided by founders and experts who have built and scaled.',
    accent: 'from-indigo-500/20 via-indigo-400/10 to-transparent',
  },
  {
    icon: Sparkles,
    title: 'Showtime',
    text: 'End with a strong pitch and a demo you are proud to share.',
    accent: 'from-cyan-500/20 via-cyan-400/10 to-transparent',
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="relative py-20 sm:py-28 bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">Bootcamp Highlights</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Three intense days of building, mentorship, and storytelling — with output that counts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map(({ icon: Icon, title, text, accent }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 overflow-hidden"
            >
              {/* Accent gradient on hover - does not block interaction */}
              <div className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${accent}`} />

              <div className="relative z-[1]">
                <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
                <p className="mt-2 text-white/70">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
