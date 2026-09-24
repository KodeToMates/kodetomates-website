import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Marquee } from "../components/Marquee";
import { StatsBand } from "../components/sections/StatsBand";
import { About } from "../components/sections/About";
import { Programs } from "../components/sections/Programs";
import { HowItWorks } from "../components/sections/HowItWorks";
import { Projects } from "../components/sections/Projects";
import { Community } from "../components/sections/Community";
import { Mentors } from "../components/sections/Mentors";
import { Testimonials } from "../components/sections/Testimonials";
import { Blog } from "../components/sections/Blog";
import { FAQ } from "../components/sections/FAQ";
import { FinalCTA } from "../components/sections/FinalCTA";
import { Footer } from "../components/sections/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <StatsBand />
      <About />
      <Programs />
      <HowItWorks />
      <Projects />
      <Community />
      <Mentors />
      <Testimonials />
      <Blog />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
