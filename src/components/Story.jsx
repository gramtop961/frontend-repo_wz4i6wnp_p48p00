import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Panel({ title, subtitle, accent, children }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative h-[180vh]">
      <div className="sticky top-0 h-screen">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            style={{ y, opacity }}
            className="will-change-transform max-w-3xl mx-auto px-6 text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className={`h-2 w-2 rounded-full ${accent}`} />
              {subtitle}
            </span>
            <h3 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              {title}
            </h3>
            <p className="mt-4 text-white/75 text-base sm:text-lg leading-relaxed">
              {children}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Story() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950/80" />
      <div className="max-w-7xl mx-auto">
        <Panel title="From spark to startup" subtitle="The journey" accent="bg-cyan-400">
          Start with curiosity. We help you turn questions into bold ideas and actionable problems worth solving.
        </Panel>
        <Panel title="Learn by doing" subtitle="Workshops" accent="bg-emerald-400">
          Level up with hands-on sessions in design, code, and pitching. Build real prototypes — not just slides.
        </Panel>
        <Panel title="Build with peers" subtitle="Community" accent="bg-violet-400">
          Collaborate with teammates, mentors, and alumni. Share feedback, iterate fast, and keep momentum high.
        </Panel>
        <Panel title="Launch with confidence" subtitle="Demo day" accent="bg-amber-400">
          Ship the MVP, tell a tight story, and get it in front of people. We celebrate launches, not intentions.
        </Panel>
      </div>
    </div>
  );
}
