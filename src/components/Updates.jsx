import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Bootcamp registrations are live',
    date: 'Nov 10, 2025',
    excerpt: 'Sign up once and unlock access to all core sessions. Limited seats available.',
    tag: 'Announcement',
  },
  {
    title: 'Mentor spotlight: Building MVPs that ship',
    date: 'Nov 12, 2025',
    excerpt: 'This week we host alumni founders and product engineers for candid, tactical sessions.',
    tag: 'Update',
  },
  {
    title: 'Workshop kits and prerequisites',
    date: 'Nov 13, 2025',
    excerpt: 'Bring a laptop, charger, and basic Figma + Git setup. We will guide you through the rest.',
    tag: 'Logistics',
  },
];

export default function Updates() {
  return (
    <section className="py-24" id="register">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="flex items-end justify-between gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Latest updates</h2>
            <p className="mt-2 text-white/70 max-w-prose">
              Announcements, logistics, and week-by-week progress from the bootcamp.
            </p>
          </div>
          <a
            href="#register"
            className="hidden sm:inline-flex items-center rounded-md bg-cyan-500 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-cyan-400 transition"
          >
            Quick register
          </a>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
            {posts.map((p, i) => (
              <motion.article
                key={p.title}
                className="rounded-xl border border-white/10 p-5 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.06 }}
              >
                <span className="text-xs uppercase tracking-widest text-cyan-400/90">{p.tag}</span>
                <h3 className="mt-2 text-xl font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.excerpt}</p>
                <p className="mt-4 text-xs text-white/60">{p.date}</p>
              </motion.article>
            ))}
          </div>
          <motion.aside
            className="rounded-xl border border-white/10 p-6 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h4 className="text-lg font-semibold">One form for everything</h4>
            <p className="mt-2 text-sm text-white/70">
              Register once and we’ll keep you updated on sessions, reminders, and new slots.
            </p>
            <form className="mt-4 space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                className="w-full rounded-md bg-neutral-900 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full rounded-md bg-neutral-900 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              />
              <button
                type="button"
                className="w-full rounded-md bg-cyan-500 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-cyan-400 transition"
                onClick={() => alert('Thanks! Registration interest received. (Connect backend to store responses)')}
              >
                Submit interest
              </button>
              <p className="text-[11px] text-white/50">We’ll never share your information.</p>
            </form>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
