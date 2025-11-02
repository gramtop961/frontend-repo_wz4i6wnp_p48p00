import React from 'react';
import { motion } from 'framer-motion';

const people = [
  { name: 'Ananya Rao', role: 'Faculty Coordinator', color: 'from-fuchsia-500 to-pink-500' },
  { name: 'Rahul Menon', role: 'Student Lead', color: 'from-cyan-500 to-blue-500' },
  { name: 'Meera Varma', role: 'Tech Lead', color: 'from-emerald-500 to-teal-500' },
  { name: 'Adithya Das', role: 'Design Lead', color: 'from-amber-400 to-orange-500' },
  { name: 'Sneha Pillai', role: 'Community Manager', color: 'from-indigo-500 to-violet-500' },
  { name: 'Arjun Nair', role: 'Operations', color: 'from-rose-500 to-red-500' },
];

function Avatar({ name, color }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  return (
    <div className={`h-14 w-14 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-neutral-950 font-bold`}>
      {initials}
    </div>
  );
}

export default function Team() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="flex items-end justify-between gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Meet the team</h2>
            <p className="mt-2 text-white/70 max-w-prose">
              Coordinators, leads, and volunteers who keep the energy high and the projects moving.
            </p>
          </div>
          <a
            href="#register"
            className="hidden sm:inline-flex items-center rounded-md border border-white/15 px-4 py-2 text-sm font-medium hover:border-white/30 transition"
          >
            Become a volunteer
          </a>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((p, i) => (
            <motion.div
              key={p.name}
              className="rounded-xl border border-white/10 p-5 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.06 }}
            >
              <div className="flex items-center gap-4">
                <Avatar name={p.name} color={p.color} />
                <div>
                  <p className="font-semibold leading-tight">{p.name}</p>
                  <p className="text-sm text-white/70">{p.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
