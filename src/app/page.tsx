import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Expertise from "@/components/Expertise";
import Architecture from "@/components/Architecture";
import Education from "@/components/Education";
import GithubSection from "@/components/GithubSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Expertise />
        <Architecture />
        <Education />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
