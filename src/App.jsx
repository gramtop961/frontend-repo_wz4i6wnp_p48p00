import React from 'react';
import Hero from './components/Hero.jsx';
import Story from './components/Story.jsx';
import Events from './components/Events.jsx';
import Team from './components/Team.jsx';
import Updates from './components/Updates.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-cyan-500/30 selection:text-white">
      <Hero />
      <main>
        <section aria-label="Narrative" className="scroll-mt-24">
          <Story />
        </section>
        <section id="events" className="scroll-mt-24">
          <Events />
        </section>
        <section id="team" className="scroll-mt-24">
          <Team />
        </section>
        <section id="updates" className="scroll-mt-24">
          <Updates />
        </section>
      </main>
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col gap-4 sm:flex-row items-center justify-between">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} IEDC BOOTCAMP CEC. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#events" className="text-white/70 hover:text-white transition">Events</a>
            <a href="#team" className="text-white/70 hover:text-white transition">Team</a>
            <a href="#updates" className="text-white/70 hover:text-white transition">Updates</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
