import React from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <ProjectList />
    </div>
  );
}

export default App;
