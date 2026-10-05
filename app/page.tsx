import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
