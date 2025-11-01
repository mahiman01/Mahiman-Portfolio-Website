import React from "react";
import Navigation from './components/Navigation';
import Main from './components/Main';
import Timeline from './components/Timeline';
import Project from './components/Project';
import Expertise from './components/Expertise';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <Timeline />
      <Project />
      <Expertise />
      <Contact />
    </div>
  );
}

export default App;
