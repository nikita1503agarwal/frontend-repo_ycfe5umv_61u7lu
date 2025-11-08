import React from 'react';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import Industries from './components/Industries';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="bg-[#0A0A0A] text-[#F5F5F5] antialiased">
      <Hero />
      <WhySection />
      <Industries />
      <HowItWorks />
      <footer className="border-t border-white/10 bg-[#0A0A0A] py-10 text-center text-white/60">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">© {new Date().getFullYear()} PropFlow Labs. All rights reserved.</div>
          <nav className="flex items-center gap-6 text-sm">
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#contact">Contact</a>
            <a className="hover:text-white" href="#privacy">Privacy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
