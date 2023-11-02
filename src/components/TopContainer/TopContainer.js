import React from "react";
import { Element } from "react-scroll";
import TopContent from "../TopContent/TopContent";
import "./TopContainer.css";

const TopContainer = ({ setSelected }) => {
  return (
    <Element className="topcontainer" name="about">
      <h1>About</h1>
      <TopContent setSelected={setSelected} />
    </Element>
  );
};
export default TopContainer;
