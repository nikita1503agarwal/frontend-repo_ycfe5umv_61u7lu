import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const GradientGlow = () => (
  <div className="pointer-events-none absolute inset-0" aria-hidden>
    <div className="absolute -top-40 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,#007BFF_0%,#00FFF7_35%,transparent_60%)] opacity-20 blur-3xl" />
    <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-[radial-gradient(circle_at_center,#00FFF7_0%,transparent_60%)] opacity-20 blur-2xl" />
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0A0A0A] text-[#F5F5F5]">
      <GradientGlow />

      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <header className="relative z-10 flex items-center justify-between px-6 md:px-10 py-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[#007BFF] to-[#00FFF7]" />
          <span className="font-semibold tracking-wide">PropFlow Labs</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#why" className="hover:text-white transition-colors">Why Us</a>
          <a href="#industries" className="hover:text-white transition-colors">Industries</a>
          <a href="#how" className="hover:text-white transition-colors">How It Works</a>
          <motion.a
            href="#audit"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full border border-[#007BFF]/50 bg-white/5 px-4 py-2 text-sm backdrop-blur-md hover:border-[#00FFF7]/60"
          >
            Book Free AI Audit
          </motion.a>
        </nav>
      </header>

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 text-xs uppercase tracking-[0.2em] text-white/60">AI Automation for Property Management & HVAC</div>
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[44px] leading-[1.05] font-[800] md:text-[72px] lg:text-[96px]"
            style={{ fontFamily: 'Mona Sans, Inter, system-ui, sans-serif' }}
          >
            <span className="block">Automate the Boring.</span>
          </motion.h1>
          <motion.h2
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[28px] md:text-[44px] lg:text-[56px] font-[700] text-white/90"
            style={{ fontFamily: 'Mona Sans, Inter, system-ui, sans-serif' }}
          >
            Scale What Matters.
          </motion.h2>
        </div>

        <p className="mt-6 max-w-2xl text-white/70 text-base md:text-lg">
          Premium AI automations, agents, and data pipelines that turn manual operations into a profit engine.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <motion.a
            href="#audit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative rounded-full border border-[#007BFF] bg-[#0A0A0A]/40 px-6 py-3 font-medium text-[#F5F5F5] shadow-[0_0_20px_rgba(0,123,255,0.25)] backdrop-blur-md"
          >
            <span className="relative z-10">Book Free AI Audit</span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#007BFF]/20 to-[#00FFF7]/20 opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.a>

          <motion.a
            href="#demo"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur-md hover:border-white/30"
          >
            See Live Demo
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
