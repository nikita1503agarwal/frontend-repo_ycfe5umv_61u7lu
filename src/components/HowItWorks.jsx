import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Step = ({ index, title, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6 }}
    className="rounded-2xl bg-white/5 p-6 backdrop-blur-md ring-1 ring-white/10"
  >
    <div className="text-[#00FFF7] text-sm tracking-widest">{String(index).padStart(2, '0')}</div>
    <h4 className="mt-2 text-2xl font-semibold text-white">{title}</h4>
    <p className="mt-2 text-white/70 text-sm">{text}</p>
  </motion.div>
);

const ParallaxBackdrop = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <motion.div style={{ y: y1 }} className="absolute left-1/4 top-10 h-52 w-52 rounded-full bg-[#007BFF]/20 blur-3xl" />
      <motion.div style={{ y: y2 }} className="absolute right-1/4 bottom-10 h-80 w-80 rounded-full bg-[#00FFF7]/20 blur-3xl" />
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section id="how" className="relative bg-[#0A0A0A] py-24 text-[#F5F5F5] overflow-hidden">
      <ParallaxBackdrop />
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Mona Sans, Inter, system-ui, sans-serif' }}>
          How It Works
        </h3>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Step index={1} title="Discovery" text="We audit your workflows and map the highest-leverage automations." />
          <Step index={2} title="Automation" text="We integrate AI where it saves time — agents, RPA, data pipelines." />
          <Step index={3} title="Deployment" text="You grow while AI runs the backend. We iterate with real metrics." />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
