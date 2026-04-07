"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SITE_DATA } from "@/data";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

function ProjectCard({ project }: { project: typeof SITE_DATA.projects[0] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mX = e.clientX - rect.left;
    const mY = e.clientY - rect.top;
    
    const xPct = mX / width - 0.5;
    const yPct = mY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
    mouseX.set(mX);
    mouseY.set(mY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const glowBackground = useTransform(
    [mouseX, mouseY],
    ([currX, currY]) => `radial-gradient(400px circle at ${currX}px ${currY}px, rgba(139, 92, 246, 0.15), transparent 80%)`
  );

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative group rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden backdrop-blur-md"
    >
      {/* Dynamic Glow Overlay */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: glowBackground }}
      />
      
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="relative h-64 overflow-hidden border-b border-white/10 z-10"
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="object-cover w-full h-full opacity-50 group-hover:opacity-80 transition-all duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div style={{ transform: "translateZ(30px)" }} className="p-8 relative z-20 h-full">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-gray-400 mb-8 text-sm leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t, i) => (
            <span key={i} className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-md bg-white/5 border border-white/5 text-white/60 font-bold">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 border-t border-white/5 pt-6 mt-auto">
          <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors">
            <GithubIcon width={18} height={18} /> Código
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors">
            <ExternalLink size={18} /> Live Demo
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
