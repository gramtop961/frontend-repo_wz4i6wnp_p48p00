import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, Sparkles } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'Rapid Prototyping',
    desc: 'Turn napkin sketches into clickable demos in hours, not weeks.',
    accent: 'from-cyan-500/30 to-cyan-400/10',
  },
  {
    icon: Users,
    title: 'Mentor Pods',
    desc: 'Work shoulder-to-shoulder with industry mentors in tight feedback loops.',
    accent: 'from-fuchsia-500/30 to-fuchsia-400/10',
  },
  {
    icon: Sparkles,
    title: 'Demo Night',
    desc: 'Ship, pitch, and showcase to a live audience — celebrate the craft.',
    accent: 'from-emerald-500/30 to-emerald-400/10',
  },
];

const Highlights = () => {
  return (
    <section id="highlights" className="relative py-24">
      {/* background flair */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-72 w-[70vw] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
        >
          Bootcamp Highlights
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
          className="mt-3 text-center text-white/70 max-w-2xl mx-auto"
        >
          An immersive sprint where ideas meet execution, supported by mentors and a maker culture.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.08 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-6 overflow-hidden"
            >
              <div className={`pointer-events-none absolute inset-px rounded-2xl bg-gradient-to-b ${item.accent} opacity-0 group-hover:opacity-100 transition`} />
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-white/10 p-3">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="mt-3 text-white/75 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
