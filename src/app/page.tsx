'use client'
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tech from "@/components/Tech";
import Education from "@/components/Education";
import Project from "@/components/Project";
import Contact from "@/components/Contact";

function App() {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          {" "}
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-transparent"></div>
        </div>

        <div className="container mx-auto px-8 page-section">
          <Navbar />
          <Hero />
          <div className="h-20"></div>
          <About />
          <Tech />
          <Education />
          <Project />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
