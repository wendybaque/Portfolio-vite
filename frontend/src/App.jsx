import React from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Skills />
      <ProjectList />
      <Footer />
    </div>
  );
}

export default App;
