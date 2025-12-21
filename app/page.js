import { Certification } from "@/components/Certification";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";



export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 relative">
      <Header /> 
      <HeroSection />
      <Projects />
      <Experience />
      <Skills />
      <Certification />
      <Education />
      <Contact /> 
      <Footer />
    </div>
  );
}

