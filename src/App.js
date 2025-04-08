import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Education from "./components/Education";
import Publication from "./components/Publications";
import Hackathon from "./components/Hackathon";
import Volunteer from "./components/Volunteers";

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
      <Project />
      <Education />
      <Publication />
      <Hackathon />
      <Volunteer />
    </div>
  );
}

export default App;
