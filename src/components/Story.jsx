import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const panels = [
  {
    title: 'Kickoff',
    text: 'Meet mentors, form teams, and set your game plan for three days of rapid learning.',
  },
  {
    title: 'Ideate',
    text: 'Discover real problems worth solving and shape bold, testable ideas.',
  },
  {
    title: 'Build',
    text: 'Prototype fast. Validate faster. Ship something you can show and tell.',
  },
  {
    title: 'Pitch',
    text: 'Tell a sharp story, demo with confidence, and get feedback from judges.',
  },
];

export default function Story() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });

  // Create staggered reveal ranges for 4 panels across the scroll
  const ranges = [
    [0.0, 0.2, 0.35],
    [0.25, 0.45, 0.6],
    [0.5, 0.7, 0.85],
    [0.75, 0.95, 1.0],
  ];

  return (
    <section id="story" ref={sectionRef} className="relative bg-neutral-950">
      {/* Scroll track to enable pinning */}
      <div className="h-[350vh]">
        {/* Sticky viewport container */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white/70">
              Your Bootcamp Journey
            </h2>
          </div>

          {/* Narrative panels */}
          <div className="absolute inset-0">
            {panels.map((p, i) => {
              const [start, mid, end] = ranges[i];
              const opacity = useTransform(scrollYProgress, [start, mid, end], [0, 1, 0]);
              const y = useTransform(scrollYProgress, [start, mid], ['20%', '0%']);
              const blur = useTransform(scrollYProgress, [start, mid], ['6px', '0px']);
              return (
                <motion.div
                  key={i}
                  style={{ opacity, y, filter: blur.to((b) => `blur(${b})`) }}
                  className="h-full w-full flex items-center justify-center px-6"
                >
                  <div className="max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs sm:text-sm mb-5">
                      <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
                      <span className="uppercase tracking-wide text-white/80">{`Step ${i + 1}`}</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">{p.title}</h3>
                    <p className="mt-4 text-white/75 text-base sm:text-lg md:text-xl">
                      {p.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Top/Bottom fades for a pleasant edge */}
          <div className="pointer-events-none absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-neutral-950 to-transparent" />
          <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-neutral-950 to-transparent" />
        </div>
      </div>
    </section>
  );
}
