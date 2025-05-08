import {
  useEffect
} from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import {
  ThemeProvider
} from "@/components/ThemeProvider";

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (!targetId) return;

        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for the fixed header
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-background text-foreground w-screen overflow-hidden">
        <Header />
        <main className="w-screen overflow-hidden">
          <Hero />
          <About />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
};

export default Index;