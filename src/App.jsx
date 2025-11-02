import React from 'react';
import Hero from './components/Hero.jsx';
import Story from './components/Story.jsx';
import Highlights from './components/Highlights.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="bg-neutral-950 text-white min-h-screen selection:bg-fuchsia-500/30 selection:text-white">
      <Hero />
      <Story />
      <Highlights />
      <Footer />
    </div>
  );
}
