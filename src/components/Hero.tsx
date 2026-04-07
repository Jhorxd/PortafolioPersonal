"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SITE_DATA } from "@/data";
import { ChevronDown, Sparkles, Send, Eye } from "lucide-react";
import { Particles } from "./Particles";

const RevealText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  return (
    <div className="overflow-hidden">
      <motion.p
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {text}
      </motion.p>
    </div>
  );
};

const MagneticButton = ({ children, href, className, variant = "primary" }: { children: React.ReactNode; href: string; className?: string; variant?: "primary" | "outline" }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Solo atrae si el mouse está cerca (radio de atracción)
    if (Math.abs(distanceX) < 150 && Math.abs(distanceY) < 150) {
      x.set(distanceX * 0.3);
      y.set(distanceY * 0.3);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`group relative flex items-center gap-3 px-10 py-5 rounded-full font-bold transition-all active:scale-95 ${
        variant === "primary" ? "bg-white text-black" : "bg-white/5 border border-white/20 backdrop-blur-md text-white"
      } ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-full" />
      )}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-xl bg-primary/30 transition-opacity" />
    </motion.a>
  );
};

export const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX / window.innerWidth - 0.5);
    mouseY.set(clientY / window.innerHeight - 0.5);
  };

  const textX = useTransform(mouseX, [-0.5, 0.5], [10, -10]);
  const textY = useTransform(mouseY, [-0.5, 0.5], [10, -10]);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
    >
      <Particles />
      
      {/* Background Orbs con Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="glow-mesh top-[10%] left-[15%] w-[400px] h-[400px] bg-primary"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 20, repeat: Infinity, delay: 2 }}
          className="glow-mesh bottom-[15%] right-[10%] w-[500px] h-[500px] bg-secondary"
        />
      </div>

      <motion.div 
        style={{ x: textX, y: textY }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center"
      >
        <motion.div
           initial={{ opacity: 0, scale: 0.8, y: 30 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="mb-8 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-secondary text-sm font-black tracking-widest uppercase flex items-center gap-3 backdrop-blur-sm"
        >
          <div className="w-2 h-2 rounded-full bg-secondary animate-ping" />
          Disponible para nuevos retos
        </motion.div>

        <h1 className="text-6xl md:text-[7rem] font-black tracking-tighter mb-6 leading-[0.85] filter drop-shadow-2xl">
          <RevealText text="JHORDAN" />
          <span className="text-gradient block">
             <RevealText text="ROJAS ALFARO" delay={0.2} />
          </span>
        </h1>
        
        <div className="text-xl md:text-3xl mt-2 text-white/50 font-mono tracking-tighter">
           <RevealText text={SITE_DATA.role} delay={0.4} />
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-lg md:text-2xl text-gray-400 max-w-3xl text-balance leading-relaxed"
        >
          {SITE_DATA.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-16 flex flex-col md:flex-row gap-8"
        >
          <MagneticButton href="#contact">
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">Hablemos</span>
            <Send size={20} className="group-hover:rotate-12 transition-transform duration-500 group-hover:text-white" />
          </MagneticButton>
          
          <MagneticButton href="#projects" variant="outline">
             Mis Proyectos <Eye size={20} className="group-hover:scale-110 transition-transform" />
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 15, 0] }}
        transition={{ delay: 3, duration: 3, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/20"
      >
        <ChevronDown size={48} strokeWidth={1} />
      </motion.div>
    </section>
  );
};
