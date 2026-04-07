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
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-white/10 hover:border-primary/50 transition-colors group"
            >
              {/* Dot on timeline */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:scale-125 transition-transform" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                    <Briefcase size={20} className="text-primary" />
                    {exp.role}
                  </h3>
                  <p className="text-lg text-secondary font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500 font-mono text-sm bg-white/5 px-3 py-1 rounded-full w-fit">
                  <Calendar size={14} />
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-3">
                {exp.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 leading-relaxed">
                    <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                    {task}
                  </li>
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
