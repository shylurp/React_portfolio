import React, { useState } from "react";
import "./App.css";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
import SkillContainer from "./components/SkillContainer/SkillContainer";
import TopContainer from "./components/TopContainer/TopContainer";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import TransitionsModal from "./components/Modal/Modal";

function App() {
  const [selected, setSelected] = useState("about");
  const [open, setOpen] = useState(false);
  return (
    <div className="app">
      <Header selected={selected} setSelected={setSelected} setOpen={setOpen} />
      <TransitionsModal open={open} setOpen={setOpen} />
      <TopContainer setSelected={setSelected} />
      <SkillContainer />
      <ProjectContainer />
      <Contact />
    </div>
  );
}

export default App;
