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
    <section id="skills" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-16">Habilidades & <span className="text-gradient">Tecnologías</span></h2>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {SITE_DATA.skills.map((skill, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-black/50 border border-white/5 hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="font-mono font-bold text-xl text-white/40 group-hover:text-primary">{skill.name[0]}</span>
              </div>
              <p className="font-medium text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
