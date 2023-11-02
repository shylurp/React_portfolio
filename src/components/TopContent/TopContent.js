import React from "react";
import "./TopContent.css";
import { Link } from "react-scroll";

const TopContent = ({ setSelected }) => {
  return (
    <div className="topContent">
      <div className="topContent__container">
        <h1>Mrs.Shylajadevi Arunprasth</h1>
        <p>A Professional Web and App Developer</p>
        <a
          href="https://drive.google.com/file/d/1j9pWWCEH8S0RHL115Bw1x9JDJ_VoSI8Y/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="topContent__downloadButton">Download CV</button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
          <button
            className="topContent__workButton"
            onClick={() => setSelected("projects")}
          >
            My Work
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopContent;
