import React from 'react';
import Hero from './components/Hero.jsx';
import Story from './components/Story.jsx';
import Highlights from './components/Highlights.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-cyan-500/30 selection:text-white">
      <Hero />
      <Story />
      <Highlights />
      <Footer />
    </div>
  );
}

export default App;
