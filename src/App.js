import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Education from "./components/Education";
import Publication from "./components/Publications";
import Hackathon from "./components/Hackathon";
import Volunteer from "./components/Volunteers";
import Footer from "./components/Footer";
import GithubStats from "./components/GithubStats";

// index.js
import "./index.css";

// we'll add Projects, About, etc. next

function App() {
  return (
    <div className="font-sans overflow-x-auto md:overflow-x-visible">
      <Navbar />
      <Hero />
      <WorkExperience />
      <Skills />
      <Project />
      <Education />
      <Publication />
      <Hackathon />
      <Volunteer />
      <GithubStats />
      <Footer />
    </div>
  );
}

export default App;
