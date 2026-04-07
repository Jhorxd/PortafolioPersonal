"use client";

import { motion } from "framer-motion";
import { SITE_DATA } from "@/data";

export const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <div className="relative aspect-square w-full max-w-md mx-auto">
            {/* Image placeholder with aesthetic styling */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl transform rotate-6 opacity-50 blur-lg" />
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center">
              <span className="text-white/20 font-mono">Placeholder Imagen</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col gap-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-gradient">Sobre mí</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            {SITE_DATA.about}
          </p>
          
          <div className="pt-6 border-t border-white/10 flex gap-4">
            <div className="flex flex-col">
              <span className="text-3xl font-bold font-mono text-primary">+5</span>
              <span className="text-sm text-gray-500 uppercase tracking-wider">Años Exp.</span>
            </div>
            <div className="w-px bg-white/10" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold font-mono text-secondary">+20</span>
              <span className="text-sm text-gray-500 uppercase tracking-wider">Proyectos</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
