export const SITE_DATA = {
  name: "John Doe",
  role: "Full Stack Developer",
  description: "Construyendo experiencias web modernas, rápidas y accesibles.",
  about: "Soy un desarrollador apasionado por crear aplicaciones escalables con tecnologías modernas. Con experiencia en React, Next.js y ecosistemas de backend, me enfoco en entregar código limpio y mantenible.",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  skills: [
    { name: "Next.js", icon: "nextjs" },
    { name: "React", icon: "react" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Docker", icon: "docker" },
    { name: "Framer Motion", icon: "framer" },
    { name: "PostgreSQL", icon: "database" },
  ],
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plataforma completa de comercio electrónico con carrito, pagos y panel de admin.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
      tech: ["Next.js", "Tailwind CSS", "Stripe", "Prisma"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      description: "Panel de control para análisis de datos en tiempo real con gráficos.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      tech: ["React", "Framer Motion", "Recharts", "Supabase"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 3,
      title: "AI Chat Application",
      description: "Una aplicación de chat inteligente impulsada por modelos de lenguaje genéricos.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
      tech: ["TypeScript", "Next.js", "OpenAI", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ]
};
