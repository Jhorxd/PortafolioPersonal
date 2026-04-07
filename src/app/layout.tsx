import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jbMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jb-mono" });

export const metadata: Metadata = {
  title: "Jhordan Rojas | Ingeniero de Sistemas",
  description: "Portafolio profesional de Jhordan Roly Rojas Alfaro - Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jbMono.variable} font-sans antialiased bg-[#0a0a0a] text-white selection:bg-primary/30 selection:text-white`}
      >
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
