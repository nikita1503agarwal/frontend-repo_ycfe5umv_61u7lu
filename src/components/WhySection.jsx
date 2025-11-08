import React from 'react';
import { motion } from 'framer-motion';

const Panel = ({ title, subtitle }) => (
  <motion.div
    initial={{ y: 24, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="rounded-2xl bg-white/5 p-6 backdrop-blur-md ring-1 ring-white/10 hover:ring-[#00FFF7]/30"
  >
    <div className="text-lg font-semibold text-white">{title}</div>
    <div className="mt-2 text-sm text-white/70">{subtitle}</div>
  </motion.div>
);

const WhySection = () => {
  return (
    <section id="why" className="relative bg-[#0A0A0A] py-24 text-[#F5F5F5]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: 'Mona Sans, Inter, system-ui, sans-serif' }}
        >
          Why PropFlow Labs
        </motion.h3>
        <p className="mt-4 max-w-3xl text-white/70 text-base md:text-lg">
          Your property or HVAC business runs on hundreds of manual tasks — calls, quotes, follow-ups, scheduling, maintenance logs. PropFlow automates them using AI agents, workflows, and data pipelines — so your team can focus on growth.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Panel title="Manual → Automated" subtitle="Replace repetitive tasks with autonomous AI operators that work 24/7." />
          <Panel title="Reactive → Predictive" subtitle="Smart routing and forecasting keep you ahead of issues, not behind them." />
          <Panel title="Time Waste → Profit Engine" subtitle="Reclaim hours weekly and reinvest into growth and customer experience." />
        </div>
      </div>
    </section>
  );
};

export default WhySection;
