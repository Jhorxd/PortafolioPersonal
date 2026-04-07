"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SITE_DATA } from "@/data";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Empecemos a <span className="text-gradient">crear juntos</span></h2>
          <p className="text-gray-400 mb-10 text-lg">
            ¿Tienes un proyecto en mente o simplemente quieres saludar? Compártelo conmigo y lo hacemos realidad.
          </p>
          
          <div className="flex gap-4">
            <a href={SITE_DATA.socials.github} className="p-4 rounded-xl bg-white/5 hover:bg-primary hover:text-white transition-all">
              <GithubIcon />
            </a>
            <a href={SITE_DATA.socials.linkedin} className="p-4 rounded-xl bg-white/5 hover:bg-[#0A66C2] hover:text-white transition-all">
              <LinkedinIcon />
            </a>
            <a href={SITE_DATA.socials.twitter} className="p-4 rounded-xl bg-white/5 hover:bg-[#1DA1F2] hover:text-white transition-all">
              <TwitterIcon />
            </a>
            <a href="mailto:hola@ejemplo.com" className="p-4 rounded-xl bg-white/5 hover:bg-secondary hover:text-white transition-all">
              <Mail />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <form className="bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400">Nombre</label>
              <input type="text" className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white" placeholder="John Doe" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400">Correo Electrónico</label>
              <input type="email" className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white" placeholder="john@doe.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400">Mensaje</label>
              <textarea rows={4} className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white resize-none" placeholder="Hola..." />
            </div>
            <button className="bg-white text-black font-semibold rounded-xl px-4 py-3 hover:bg-gray-200 transition-colors mt-2 text-lg">
              Enviar Mensaje
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
