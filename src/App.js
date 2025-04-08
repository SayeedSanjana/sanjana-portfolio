import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Project from "./components/Project.jsx"
import Education from "./components/Education.jsx"

// index.js
import "./index.css";

// we'll add Projects, About, etc. next

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <WorkExperience />
      <Skills />
      <Project/>
      <Education/>
    </div>
  );
}

export default App;
