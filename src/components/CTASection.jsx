import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section id="audit" className="relative bg-[#0A0A0A] py-24 text-[#F5F5F5] overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-x-0 top-[-10%] mx-auto h-72 w-[70%] rounded-full bg-[radial-gradient(circle_at_center,#007BFF_0%,#00FFF7_40%,transparent_70%)] opacity-10 blur-2xl" />
      </div>
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h3 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: 'Mona Sans, Inter, system-ui, sans-serif' }}>
          Your competitors are already automating.
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#00FFF7]">You’re one click away.</span>
        </h3>
        <p className="mt-4 text-white/70">Custom AI solutions for HVAC & Property Management workflows.</p>
        <motion.a
          href="#book"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 inline-flex items-center justify-center rounded-full border border-[#007BFF] bg-[#0A0A0A]/40 px-8 py-3 font-medium text-[#F5F5F5] shadow-[0_0_24px_rgba(0,123,255,0.3)] backdrop-blur-md"
        >
          Book Your AI Audit
        </motion.a>
      </div>
    </section>
  );
};

export default CTASection;
