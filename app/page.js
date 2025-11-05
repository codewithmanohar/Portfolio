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
    <div className="mx-auto container px-6 relative">
        <Header /> 
        <HeroSection />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact /> 
        <Footer />
    </div>
  );
}
