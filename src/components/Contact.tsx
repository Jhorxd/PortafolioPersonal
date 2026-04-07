"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { SITE_DATA } from "@/data";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";

export const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${SITE_DATA.formspreeId}`, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Vías de contacto
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
            Hablemos de tu <br />
            <span className="text-gradient">próximo proyecto</span>
          </h2>
          <p className="text-gray-400 mb-12 text-xl max-w-md leading-relaxed">
            ¿Tienes una idea innovadora o buscas fortalecer tu equipo técnico? Estoy listo para aportar mi experiencia.
          </p>
          
          <div className="flex gap-4">
            {[
              { icon: <GithubIcon />, href: SITE_DATA.socials.github, color: "hover:bg-primary" },
              { icon: <LinkedinIcon />, href: SITE_DATA.socials.linkedin, color: "hover:bg-[#0A66C2]" },
              { icon: <TwitterIcon />, href: SITE_DATA.socials.twitter, color: "hover:bg-[#1DA1F2]" },
              { icon: <Mail />, href: `mailto:${SITE_DATA.email}`, color: "hover:bg-secondary" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                target="_blank"
                rel="noreferrer"
                className={`p-5 rounded-2xl bg-white/5 border border-white/5 transition-all duration-300 hover:-translate-y-2 ${social.color} hover:text-white`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-secondary/10 blur-3xl opacity-50 -z-10" />
          
          <form 
            className="bg-white/[0.03] backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 flex flex-col gap-8 shadow-2xl"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Nombre</label>
                <input 
                  name="user_name"
                  type="text" 
                  required
                  className="bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all text-white placeholder:text-gray-600" 
                  placeholder="Tu nombre" 
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Correo</label>
                <input 
                  name="email"
                  type="email" 
                  required
                  className="bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all text-white placeholder:text-gray-600" 
                  placeholder="tu@email.com" 
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Mensaje</label>
              <textarea 
                name="message"
                rows={5} 
                required
                className="bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all text-white resize-none placeholder:text-gray-600" 
                placeholder="Cuéntame sobre tu proyecto..." 
              />
            </div>

            <button 
              type="submit"
              disabled={status === "loading"}
              className="relative group bg-white text-black font-black rounded-2xl px-8 py-5 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <AnimatePresence mode="wait">
                {status === "idle" && (
                  <motion.div 
                    key="send"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center justify-center gap-3 text-lg"
                  >
                    Enviar Mensaje <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.div>
                )}
                {status === "loading" && (
                  <motion.div 
                    key="loading"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-3 text-lg"
                  >
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Enviando...
                  </motion.div>
                )}
                {status === "success" && (
                  <motion.div 
                    key="success"
                    initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className="flex items-center justify-center gap-3 text-lg text-green-600 font-bold"
                  >
                    <CheckCircle size={24} /> ¡Mensaje Enviado!
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div 
                    key="error"
                    initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className="flex items-center justify-center gap-3 text-lg text-red-500 font-bold"
                  >
                    <AlertCircle size={24} /> Error al enviar
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
