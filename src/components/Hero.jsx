import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const subtitleY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const fade = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.7, 0]);

  return (
    <section ref={containerRef} id="hero" className="relative min-h-[100svh] overflow-hidden isolate">
      <div className="absolute inset-0 z-0">
        {prefersReducedMotion ? (
          <div className="w-full h-full bg-gradient-to-br from-fuchsia-600/30 via-indigo-500/20 to-cyan-500/20" />
        ) : (
          <Spline
            scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </div>

      {/* Soft vignette and top gradient accents - do not block interactions */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.6))]" />
      <div className="pointer-events-none absolute top-0 inset-x-0 z-[1] h-64 bg-gradient-to-b from-neutral-950/70 to-transparent" />

      <div className="relative z-[2] mx-auto max-w-6xl px-6 sm:px-8 h-[100svh] flex flex-col items-center justify-center text-center">
        <motion.h1
          style={{ y: titleY, opacity: fade }}
          className="font-extrabold tracking-tight text-4xl sm:text-6xl md:text-7xl leading-none drop-shadow-md"
        >
          IEDC BOOTCAMP CEC
        </motion.h1>
        <motion.p
          style={{ y: subtitleY, opacity: fade }}
          className="mt-5 max-w-2xl text-base sm:text-lg md:text-xl text-white/80"
        >
          A hands-on immersion into innovation, startups, and real-world product building.
        </motion.p>

        <motion.div
          style={{ opacity: fade }}
          className="mt-8 flex items-center gap-3 sm:gap-4"
        >
          <a
            href="#story"
            className="inline-flex items-center rounded-xl bg-white text-neutral-900 px-4 py-2 sm:px-5 sm:py-3 font-semibold shadow-lg shadow-white/10 hover:shadow-white/20 transition"
          >
            Explore the Journey
          </a>
          <a
            href="#highlights"
            className="inline-flex items-center rounded-xl bg-transparent border border-white/30 px-4 py-2 sm:px-5 sm:py-3 font-semibold hover:bg-white/10 transition"
          >
            Highlights
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient to blend into next section */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 z-[1] h-40 bg-gradient-to-t from-neutral-950 to-transparent" />
    </section>
  );
}
