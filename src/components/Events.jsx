import React from 'react';
import { motion } from 'framer-motion';

const events = [
  {
    title: 'Kickoff & Ideation Sprint',
    date: 'Nov 15, 2025',
    type: 'Workshop',
    description:
      'A rapid-fire session to discover problems worth solving and craft compelling value propositions.',
    cta: 'Register',
    link: '#register',
  },
  {
    title: 'Prototype Bootcamp',
    date: 'Nov 22, 2025',
    type: 'Hands-on',
    description:
      'Learn design tools, build interactive prototypes, and validate with mentors in real time.',
    cta: 'Reserve a seat',
    link: '#register',
  },
  {
    title: 'Founder Talks: From Campus to Startup',
    date: 'Nov 29, 2025',
    type: 'Talk',
    description:
      'Stories, playbooks, and pitfalls from founders who started exactly where you are now.',
    cta: 'Get pass',
    link: '#register',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function Events() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="flex items-end justify-between gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Upcoming highlights</h2>
            <p className="mt-2 text-white/70 max-w-prose">
              Explore curated sessions designed to move you from idea to launch — fast.
            </p>
          </div>
          <a
            href="#register"
            className="hidden sm:inline-flex items-center rounded-md bg-cyan-500 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-cyan-400 transition"
          >
            Register once for all
          </a>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => (
            <motion.article
              key={e.title}
              className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 p-5 hover:border-white/20 transition"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.08 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-cyan-400/90">{e.type}</span>
                <span className="text-xs text-white/60">{e.date}</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold leading-snug group-hover:text-white">{e.title}</h3>
              <p className="mt-2 text-sm text-white/70">{e.description}</p>
              <div className="mt-4">
                <a
                  href={e.link}
                  className="inline-flex items-center rounded-md border border-white/15 px-3 py-2 text-sm font-medium hover:border-white/30 transition"
                >
                  {e.cta}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
