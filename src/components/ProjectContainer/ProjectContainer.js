import React from "react";
import { Element } from "react-scroll";
import Project from "../Project/Project";
import "./ProjectContainer.css";
import img0 from "../../Assets/project0.png";
import img1 from "../../Assets/project1.png";
import img2 from "../../Assets/project2.png";
import img3 from "../../Assets/project3.png";

const ProjectContainer = () => {
  const projects = [
    {
      img: img0,
      title: "Swindon Website",
      desc: "A website about my town Swindon ",
      link: "www.google.com",
    },
    {
      img: img1,
      title: "Form Validation",
      desc: "Form validation to validate email credentials",
      link: "www.google.com",
    },

    {
      img: img2,
      title: "My first Project",
      desc: "This is an online booking facility for tours and travels",
      link: "www.google.com",
    },

    {
      img: img3,
      title: "Responsive NavBar",
      desc: "An responsive navbar to view on any type of screen",
      link: "www.google.com",
    },
  ];

  return (
    <Element className="projectContainer" id="projects">
      <h1>Projects</h1>
      <p>
        Here are some projects I have done at my leisure for making lives of
        people easy.
      </p>
      <div className="projectContainer__projects">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              img={project.img}
              title={project.title}
              desc={project.desc}
              link={project.link}
            />
          );
        })}
      </div>
    </Element>
  );
};

export default ProjectContainer;
