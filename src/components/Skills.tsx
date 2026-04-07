"use client";

import { motion } from "framer-motion";
import { SITE_DATA } from "@/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: { opacity: 1, scale: 1, y: 0 }
};

export const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Habilidades <span className="text-gradient">& Tecnologías</span></h2>
          <p className="text-gray-500 mb-20 max-w-lg mx-auto">Dominio de herramientas modernas para el desarrollo de software escalable y eficiente.</p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {SITE_DATA.skills.map((skill, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                backgroundColor: "rgba(255, 255, 255, 0.05)"
              }}
              className="group flex flex-col items-center justify-center p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center mb-5 group-hover:rotate-12 transition-transform duration-500">
                <span className="font-mono font-bold text-2xl text-white/20 group-hover:text-primary transition-colors">{skill.name[0]}</span>
              </div>
              <p className="font-bold text-sm tracking-widest uppercase text-gray-400 group-hover:text-white transition-colors">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
