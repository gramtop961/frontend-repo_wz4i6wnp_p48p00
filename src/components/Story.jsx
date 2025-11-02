import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Panel = ({ title, text, index, progress }) => {
  const baseStart = index * 0.25;
  const baseEnd = baseStart + 0.25;

  const opacity = useTransform(progress, [baseStart, baseEnd], [0, 1]);
  const y = useTransform(progress, [baseStart, baseEnd], [60, 0]);
  const blur = useTransform(progress, [baseStart, baseEnd], [8, 0]);

  return (
    <motion.div
      style={{ opacity, y, filter: blur.to(b => `blur(${b}px)`) }}
      className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 sm:p-8"
    >
      <h3 className="text-2xl sm:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-white to-cyan-300">
        {title}
      </h3>
      <p className="mt-3 text-white/80 text-base sm:text-lg leading-relaxed">{text}</p>
    </motion.div>
  );
};

const Story = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end end'] });

  return (
    <section id="story" ref={container} className="relative w-full">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background gradients */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-neutral-950" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[60vh] w-[80vw] rounded-full bg-cyan-500/20 blur-3xl" />
        </div>

        {/* Pinned track */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-10 px-6">
          <Panel
            index={0}
            progress={scrollYProgress}
            title="Spark the Idea"
            text="Start with curiosity. Sketch fast, prototype faster, and let constraints spark creativity."
          />
          <Panel
            index={1}
            progress={scrollYProgress}
            title="Build with Momentum"
            text="Pair up, break down problems, and ship small wins. Momentum beats perfection every time."
          />
          <Panel
            index={2}
            progress={scrollYProgress}
            title="Test in the Wild"
            text="Show, don’t tell. Put it in hands early, listen hard, and iterate with intent."
          />
          <Panel
            index={3}
            progress={scrollYProgress}
            title="Launch and Learn"
            text="Celebrate the launch, then measure impact. Capture learnings and prep for the next sprint."
          />
        </div>
      </div>

      {/* Scroll length for pinning */}
      <div className="h-[350vh]" />
    </section>
  );
};

export default Story;
