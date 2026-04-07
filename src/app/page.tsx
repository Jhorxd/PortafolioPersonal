import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <footer className="py-8 text-center text-gray-500 border-t border-white/5 mt-20">
        <p>© {new Date().getFullYear()} Creado con Next.js y Docker.</p>
      </footer>
    </main>
  );
}
