export const SITE_DATA = {
  name: "JHORDAN ROJAS",
  fullName: "JHORDAN ROLY ROJAS ALFARO",
  role: "Ingeniero de Sistemas | Soporte TI & Full Stack Developer",
  location: "Perú, Lima",
  email: "jhordanroly22@gmail.com",
  phone: "+51 936 427 929",
  formspreeId: "mnpkeror", // Reemplaza esto con tu ID de Formspree
  description: "Especializado en sistemas ERP, despliegue con Docker y desarrollo con Laravel, PHP y Vue.js. Enfocado en optimizar procesos y continuidad operativa.",
  about: "Ingeniero de Sistemas colegiado con sólida experiencia en soporte TI nivel N3 y desarrollo de software ERP. Especialista en diagnóstico de incidencias, arquitectura multitenant y facturación electrónica (SUNAT). Apasionado por la automatización de procesos y la gestión eficiente de infraestructura técnica.",
  socials: {
    github: "https://github.com/Jhorxd",
    linkedin: "https://www.linkedin.com/in/jhordan-roly-rojas-alfaro-45b943309",
    twitter: "#",
  },
  education: [
    {
      university: "Universidad César Vallejo",
      degree: "Ingeniería de Sistemas – Titulado",
      notable: "Certificación en Help Desk & CCNA"
    }
  ],
  experience: [
    {
      company: "COSTA TECH",
      role: "SOPORTE N3",
      period: "Feb 2026 - Presente",
      tasks: [
        "Desarrollo y despliegue de ERP con Laravel, Vue.js y Docker.",
        "Integración con API SUNAT para facturación electrónica.",
        "Mantenimiento de entornos productivos y resolución de incidencias críticas."
      ]
    },
    {
      company: "CCAPA TI",
      role: "DESARROLLADOR PHP",
      period: "Marzo 2025 - Enero 2026",
      tasks: [
        "Desarrollo de módulos ERP con CodeIgniter y MySQL.",
        "Soporte técnico funcional asegurando continuidad operativa.",
        "Mantenimiento de páginas web complementarias."
      ]
    },
    {
      company: "WEB HELP (RAPPI)",
      role: "AGENTE DE SOPORTE",
      period: "Junio 2022 - Noviembre 2024",
      tasks: [
        "Atención remota y resolución de incidencias en plataforma digital.",
        "Gestión de configuraciones de catálogos y precios.",
        "Escalamiento de problemas técnicos a niveles superiores."
      ]
    }
  ],
  skills: [
    { name: "PHP / Laravel", icon: "php" },
    { name: "CodeIgniter", icon: "ci" },
    { name: "Vue.js", icon: "vue" },
    { name: "MySQL / SQL", icon: "sql" },
    { name: "Docker", icon: "docker" },
    { name: "Spring Boot", icon: "java" },
    { name: "PostgreSQL", icon: "db" },
    { name: "Networking (CCNA)", icon: "cisco" },
  ],
  projects: [
    {
      id: 1,
      title: "Alcanza ERP para Farmacias",
      description: "Sistema ERP con arquitectura multitenant, facturación SUNAT y despliegue automatizado con Docker.",
      image: "https://images.unsplash.com/photo-1587854680352-936b22b91030?q=80&w=800&auto=format&fit=crop",
      tech: ["Laravel", "Vue.js", "Docker", "MySQL"],
      github: "https://alcanzaerp.com/",
      demo: "https://alcanzaerp.com/"
    },
    {
      id: 2,
      title: "Compuempleo",
      description: "Portal de empleos con registro de empresas, ofertas y búsqueda optimizada de postulantes.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop",
      tech: ["CodeIgniter", "MySQL", "jQuery", "Bootstrap"],
      github: "https://www.compuempleo.com.pe/",
      demo: "https://www.compuempleo.com.pe/"
    },
    {
      id: 3,
      title: "Sistema Warrior Pro",
      description: "Gestión de inventarios, cotizaciones y Kardex multiempresa para Perú y Bolivia.",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop",
      tech: ["PHP", "CodeIgniter", "Tailwind", "JS"],
      github: "https://www.sistemawarrior.pro/",
      demo: "https://www.sistemawarrior.pro/"
    }
  ]
};
