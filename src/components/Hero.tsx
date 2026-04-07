"use client";

import { motion } from "framer-motion";
import { SITE_DATA } from "@/data";
import { ChevronDown, Sparkles } from "lucide-react";

const RevealText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  return (
    <div className="overflow-hidden">
      <motion.p
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {text}
      </motion.p>
    </div>
  );
};

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="glow-mesh top-[10%] left-[15%] w-[400px] h-[400px] bg-primary"
        />
        <motion.div 
          animate={{ 
            x: [0, -60, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="glow-mesh bottom-[10%] right-[10%] w-[500px] h-[500px] bg-secondary"
        />

        {/* CSS Mesh Grid simulation */}
        <div className="absolute inset-0 opacity-[0.15]" 
             style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           className="mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-secondary text-sm font-medium flex items-center gap-2"
        >
          <Sparkles size={14} className="animate-pulse" />
          Disponible para nuevos proyectos
        </motion.div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-4">
          <RevealText text="JHORDAN" />
          <span className="text-gradient leading-tight block">
            <RevealText text="ROJAS ALFARO" delay={0.2} />
          </span>
        </h1>
        
        <div className="text-xl md:text-2xl mt-4 text-gray-400 font-mono">
           <RevealText text={SITE_DATA.role} delay={0.4} />
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl text-balance leading-relaxed"
        >
          {SITE_DATA.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="mt-12 flex flex-col md:flex-row gap-5"
        >
          <a href="#contact" className="group relative px-10 py-4 rounded-full bg-white text-black font-bold overflow-hidden transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10">Trabajemos juntos</span>
            <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-20 transition-opacity" />
          </a>
          <a href="#projects" className="px-10 py-4 rounded-full border border-white/20 bg-white/5 font-bold hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-sm">
            Ver Proyectos
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, y: [0, 10, 0] }}
        transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
      >
        <ChevronDown size={40} strokeWidth={1} />
      </motion.div>
    </section>
  );
};
