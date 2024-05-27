import "./App.css";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Reasons from "./components/Reasons/Reasons";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ProjectsApp from "./components/Projects/ProjectA";
import ProjectsWeb from "./components/Projects/ProjectW";
import ProjectsUi from "./components/Projects/ProjectU";
import ProjectsGraphic from "./components/Projects/ProjectG";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Reasons />
      <ProjectsApp />
      <ProjectsWeb />
      <ProjectsUi />
      <ProjectsGraphic />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
