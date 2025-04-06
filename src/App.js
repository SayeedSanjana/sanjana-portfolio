import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";

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
    </div>
  );
}

export default App;
