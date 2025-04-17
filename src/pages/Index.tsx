
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Add a CSS class for the grid pattern background
    const style = document.createElement('style');
    style.innerHTML = `
      .bg-grid-pattern {
        background-size: 20px 20px;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
      }
      
      .dark .bg-grid-pattern {
        background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
