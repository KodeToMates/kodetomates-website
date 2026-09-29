import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/sections/About";
import { Programs } from "../components/sections/Programs";
import { HowItWorks } from "../components/sections/HowItWorks";
import { Projects } from "../components/sections/Projects";
import { Community } from "../components/sections/Community";
import { Mentors } from "../components/sections/Mentors";
import { Testimonials } from "../components/sections/Testimonials";
import { FAQ } from "../components/sections/FAQ";
import { FinalCTA } from "../components/sections/FinalCTA";
import { Footer } from "../components/sections/Footer";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-[#F8F7F4]">
      {/* Hero Zone: contains Navbar + Hero + orange animation flowing behind both */}
      <div className="relative w-full overflow-hidden background-grid-lines">
        {/* Bitnomial flowing video animation - plays behind transparent Navbar and Hero */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
          <div 
            className="absolute -top-[34vh] md:-top-[38vh] lg:-top-[36vh] left-[20vw] md:left-[20vw] lg:left-[22vw] w-[1800px] md:w-[2000px] lg:w-[2200px] aspect-[16/9] -rotate-[99.48deg] mix-blend-multiply opacity-100"
            style={{
              maskImage: "radial-gradient(ellipse 68% 60% at 50% 50%, #000 75%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 68% 60% at 50% 50%, #000 75%, transparent 100%)",
            }}
            aria-hidden="true"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-contain"
            >
              <source src="/videos/hero-waves-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
              <source src="/videos/hero-waves.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <Navbar />
        <Hero />
      </div>

      {/* Main content: About section brought up naturally, with zero animation overlap */}
      <main className="relative z-10 w-full flex flex-col bg-[#F8F7F4]">
        <About />
        <Programs />
        <HowItWorks />
        <Projects />
        <Community />
        <Mentors />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  );
}
