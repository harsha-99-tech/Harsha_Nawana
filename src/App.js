import "./App.css";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Reasons from "./components/Reasons/Reasons";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Project";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Reasons />
      <Services />
      <Projects />
    </div>
  );
}

export default App;
