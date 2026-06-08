import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import CompetitiveProgramming from "@/components/CompetitiveProgramming";
import Education from "@/components/Education";
import AICopilot from "@/components/AICopilot";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#080a12" }}>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <CompetitiveProgramming />
      <Education />
      <Contact />
      <Footer />
      {/* Floating AI widget — always on top */}
      <AICopilot />
    </main>
  );
}
