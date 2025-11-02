import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <nav className="flex items-center gap-4 text-white/70 text-sm">
          <a href="#story" className="hover:text-white transition">Story</a>
          <span className="opacity-30">•</span>
          <a href="#highlights" className="hover:text-white transition">Highlights</a>
        </nav>
        <p className="text-white/50 text-sm">© {new Date().getFullYear()} IEDC BOOTCAMP CEC</p>
      </div>
    </footer>
  );
}
