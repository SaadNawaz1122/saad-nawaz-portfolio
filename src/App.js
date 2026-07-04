import "./App.css";

import Navbar from "./components/Navbar";
import HeroPremium from "./components/HeroPremium";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#030712] min-h-screen">
      <Navbar />
      <HeroPremium />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;