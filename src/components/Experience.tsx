"use client";

import { motion } from "framer-motion";
import { SITE_DATA } from "@/data";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Trayectoria <span className="text-gradient">Profesional</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {SITE_DATA.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative pl-12 border-l border-white/10 hover:border-primary/50 transition-colors group pb-12 last:pb-0"
            >
              {/* Dot on timeline with ripple effect */}
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:scale-150 transition-transform" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-3">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-primary transition-colors tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-secondary font-bold tracking-wide uppercase mt-1">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500 font-mono text-xs bg-white/5 border border-white/5 px-4 py-1.5 rounded-full w-fit">
                  <Calendar size={12} className="text-primary" />
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-4">
                {exp.tasks.map((task, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.05) }}
                    className="flex items-start gap-4 text-gray-400 leading-relaxed text-base"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2.5 shrink-0" />
                    {task}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Educación extra al final de experiencia */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-8 rounded-3xl bg-white/[0.02] border border-white/10"
        >
           <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gradient">
             Educación
           </h3>
           {SITE_DATA.education.map((edu, index) => (
             <div key={index} className="flex flex-col gap-1">
               <p className="text-xl font-bold">{edu.university}</p>
               <p className="text-secondary">{edu.degree}</p>
               <p className="text-gray-500 text-sm mt-2">{edu.notable}</p>
             </div>
           ))}
        </motion.div>
      </div>
    </section>
  );
};
