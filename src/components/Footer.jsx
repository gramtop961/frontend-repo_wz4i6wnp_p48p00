import React from 'react';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} IEDC Bootcamp CEC. All rights reserved.</p>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#story" className="text-white/70 hover:text-white transition">Story</a>
          <a href="#highlights" className="text-white/70 hover:text-white transition">Highlights</a>
          <a href="#" className="text-white/70 hover:text-white transition">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
