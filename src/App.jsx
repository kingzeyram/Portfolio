import { Navbar } from "../src/layout/Navbar";
import { Hero } from "../src/sections/Hero";
import { About } from "../src/sections/About";
import { Projects } from "../src/sections/Projects";
import { Experience } from "../src/sections/Experience";
import { Testimonials } from "../src/sections/Testimonials";
import { Contact } from "../src/sections/Contact";
import { Footer } from "./layout/Footer";

function App() {
  

  return ( <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
    </main>
      <Footer />
  </div>
  );
};

export default App
