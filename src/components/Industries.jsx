import React from 'react';
import { motion } from 'framer-motion';
import { Home, Cog } from 'lucide-react';

const Card = ({ icon: Icon, title, text, hoverClass }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md ${hoverClass}`}
  >
    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#007BFF]/10 to-[#00FFF7]/10" />
    <div className="relative z-10 flex items-start gap-4">
      <div className="rounded-xl bg-white/10 p-3 ring-1 ring-white/10">
        <Icon className="h-7 w-7 text-[#00FFF7]" />
      </div>
      <div>
        <h4 className="text-xl font-semibold text-white">{title}</h4>
        <p className="mt-2 text-white/70 text-sm">{text}</p>
      </div>
    </div>
  </motion.div>
);

const Industries = () => {
  return (
    <section id="industries" className="relative bg-[#0A0A0A] py-24 text-[#F5F5F5]">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Mona Sans, Inter, system-ui, sans-serif' }}>
          Industries We Serve
        </h3>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card
            icon={Home}
            title="Property Management"
            text="AI handles rent collection reminders, maintenance calls, scheduling, and tenant inquiries — 24/7."
            hoverClass="hover:ring-1 hover:ring-[#007BFF]/40"
          />
          <Card
            icon={Cog}
            title="HVAC"
            text="Automate service calls, estimate generation, technician dispatch, and client follow-ups — powered by AI."
            hoverClass="hover:ring-1 hover:ring-[#00FFF7]/40"
          />
        </div>
      </div>
    </section>
  );
};

export default Industries;
