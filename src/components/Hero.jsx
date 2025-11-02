import React, { useMemo, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Parallax for heading, subtext and buttons
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const subY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const subOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Optional performance toggle for users who feel the 3D is heavy
  const [interactive, setInteractive] = useState(true);
  const toggleLabel = useMemo(() => (interactive ? 'Reduce motion' : 'Enable interaction'), [interactive]);

  return (
    <header ref={ref} className="relative w-full min-h-[100vh] overflow-hidden">
      {/* Top navigation inside hero */}
      <div className="absolute inset-x-0 top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-cyan-500 text-neutral-950">
              <Rocket size={18} />
            </span>
            <span className="text-white">IEDC BOOTCAMP CEC</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#events" className="hover:text-white transition">Events</a>
            <a href="#team" className="hover:text-white transition">Team</a>
            <a href="#updates" className="hover:text-white transition">Updates</a>
            <button
              onClick={() => setInteractive((v) => !v)}
              className="px-3 py-2 rounded-md border border-white/15 text-white/80 hover:text-white hover:border-white/40 transition"
            >
              {toggleLabel}
            </button>
            <a href="#register" className="px-4 py-2 rounded-md bg-white text-neutral-900 font-medium hover:bg-white/90 transition">Register</a>
          </nav>
        </div>
      </div>

      {/* Spline scene as interactive visual - new animation asset */}
      <div className="absolute inset-0">
        <div className={interactive ? '' : 'pointer-events-none'}>
          <Spline
            scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        {/* Soft gradient shading that doesn't block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/20 to-neutral-950" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-neutral-950" />
      </div>

      {/* Hero copy with parallax storytelling */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="pt-28 md:pt-36 lg:pt-40 pb-24 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 lg:col-span-6">
              <motion.h1
                style={{ y: titleY, opacity: titleOpacity }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]"
              >
                Build. Learn. Launch.
              </motion.h1>
              <motion.p
                style={{ y: subY, opacity: subOpacity }}
                className="mt-5 text-base sm:text-lg text-white/80 max-w-prose"
              >
                A modern hub for innovators at College of Engineering, Cherthala. Explore hands-on workshops, join community-led
                projects, and stay up to date with talks and bootcamps powered by IEDC.
              </motion.p>
              <motion.div
                style={{ opacity: subOpacity }}
                className="mt-7 flex flex-col sm:flex-row gap-3"
              >
                <a
                  href="#register"
                  className="inline-flex items-center justify-center rounded-md bg-cyan-500 px-5 py-3 font-medium text-neutral-900 shadow-sm hover:bg-cyan-400 transition"
                >
                  Register now
                </a>
                <a
                  href="#events"
                  className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 font-medium text-white hover:border-white/40 transition"
                >
                  Explore events
                </a>
              </motion.div>
              <motion.p style={{ opacity: subOpacity }} className="mt-6 text-white/60 text-sm">
                Fast-loading, mobile-first, and powered by interactive 3D.
              </motion.p>
            </div>
            <div className="md:col-span-5 lg:col-span-6" />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/70 text-xs"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        Scroll to explore
      </motion.div>

      {/* Mobile nav (bottom overlay) */}
      <div className="md:hidden absolute bottom-5 inset-x-0 z-20">
        <div className="mx-auto w-[92%] rounded-xl backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/5 border border-white/10 p-3 flex items-center justify-around text-sm">
          <a href="#events" className="text-white/90">Events</a>
          <span className="w-px h-5 bg-white/10" />
          <a href="#team" className="text-white/90">Team</a>
          <span className="w-px h-5 bg-white/10" />
          <a href="#updates" className="text-white/90">Updates</a>
        </div>
      </div>
    </header>
  );
}
