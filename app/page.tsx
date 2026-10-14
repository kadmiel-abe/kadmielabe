import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Preloader from "@/components/motion/Preloader";
import SmoothScroll from "@/components/motion/SmoothScroll";
import ScrollProgressBar from "@/components/motion/ScrollProgressBar";
import CustomCursor from "@/components/motion/CustomCursor";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] dark:bg-[#0B0B0C] text-gray-900 dark:text-[#EDEDED] flex flex-col selection:bg-emerald-500/25 selection:text-emerald-400 transition-colors duration-300">
      <Preloader />
      <SmoothScroll />
      <ScrollProgressBar />
      <CustomCursor />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Tools />
        <Pricing />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

