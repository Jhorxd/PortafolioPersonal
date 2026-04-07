"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SITE_DATA } from "@/data";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

function ProjectCard({ project }: { project: typeof SITE_DATA.projects[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mX = e.clientX - rect.left;
    const mY = e.clientY - rect.top;
    mouseX.set(mX);
    mouseY.set(mY);
  };

  const glowBackground = useTransform(
    [mouseX, mouseY],
    ([currX, currY]) => `radial-gradient(450px circle at ${currX}px ${currY}px, rgba(139, 92, 246, 0.15), transparent 80%)`
  );

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12, scale: 1.02 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative group rounded-[2rem] bg-white/[0.03] border border-white/10 overflow-hidden backdrop-blur-md transition-shadow hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)]"
    >
      {/* Dynamic Glow Overlay */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: glowBackground }}
      />
      
      <div className="relative h-64 overflow-hidden border-b border-white/10 z-10">
        <img 
          src={project.image} 
          alt={project.title} 
          className="object-cover w-full h-full opacity-50 group-hover:opacity-80 transition-all duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="p-8 relative z-20 h-full flex flex-col">
        <div className="mb-4">
          <h3 className="text-2xl font-black mb-2 group-hover:text-primary transition-colors tracking-tight uppercase">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {project.tech.map((t, i) => (
            <span key={i} className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-md bg-white/5 border border-white/5 text-white/60 font-bold">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 border-t border-white/5 pt-6">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-2 text-sm font-black text-gray-400 hover:text-white transition-colors uppercase tracking-tighter"
          >
            <GithubIcon width={18} height={18} /> Código
          </a>
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noreferrer" 
            className="group/btn flex items-center gap-2 text-sm font-black text-primary hover:text-white transition-all uppercase tracking-tighter"
          >
            <div className="p-2 rounded-lg bg-primary/10 group-hover/btn:bg-primary transition-colors">
              <ExternalLink size={16} /> 
            </div>
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold">Mis <span className="text-gradient">Proyectos</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
          {SITE_DATA.projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
