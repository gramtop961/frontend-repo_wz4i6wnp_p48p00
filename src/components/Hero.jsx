import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const fade = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section ref={ref} className="relative h-[120vh] w-full overflow-hidden">
      {/* Spline 3D Cover */}
      <div className="absolute inset-0">
        {!prefersReducedMotion && (
          <Spline
            scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        )}
        {prefersReducedMotion && (
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-fuchsia-500/20 to-emerald-500/30" />
        )}
      </div>

      {/* Soft Vignette & Glass Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute -inset-10 blur-3xl bg-cyan-500/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <motion.h1
          style={{ y: titleY, opacity: fade }}
          className="font-bold tracking-tight text-4xl sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-cyan-300"
        >
          IEDC BOOTCAMP CEC
        </motion.h1>
        <motion.p
          style={{ y: subtitleY, opacity: fade }}
          className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-white/80"
        >
          Build, break, and launch ideas in an immersive, future-forward experience.
        </motion.p>
        <motion.div
          style={{ opacity: fade }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#story"
            className="rounded-full bg-white/10 backdrop-blur px-5 py-3 text-sm font-medium hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
          >
            Explore the story
          </a>
          <a
            href="#highlights"
            className="rounded-full bg-cyan-500 text-neutral-950 px-5 py-3 text-sm font-semibold hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition"
          >
            Join the bootcamp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
