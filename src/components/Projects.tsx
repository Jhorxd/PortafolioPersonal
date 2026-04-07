"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SITE_DATA } from "@/data";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

function ProjectCard({ project }: { project: typeof SITE_DATA.projects[0] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative group rounded-3xl bg-white/5 border border-white/10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="relative h-64 overflow-hidden border-b border-white/10"
      >
        {/* Placeholder if no real img */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <span className="text-sm font-mono text-white/50">{project.title} Image</span>
        </div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="object-cover w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" 
        />
      </div>

      <div style={{ transform: "translateZ(30px)" }} className="p-6 relative z-10 bg-background/80 backdrop-blur-sm h-full">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-6 text-sm line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80 font-mono">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 border-t border-white/10 pt-4 mt-auto">
          <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
            <GithubIcon width={18} height={18} /> Código
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm hover:text-secondary transition-colors">
            <ExternalLink size={18} /> Demo
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
