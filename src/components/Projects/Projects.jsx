import React from "react";
import "./Projects.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Projects_Data from "../../assets/projects_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="projects-container">
        {Projects_Data.map((service, index) => {
          return (
            <div key={index} className="projects-format">
              <h2>{service.s_name}</h2>
            </div>
          );
        })}
      </div>
      <div className="projects-showmore">
        <a className="anchor-link" href="https://github.com/Raghavendra469/">
          <p>Show More</p>
        </a>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default Projects;
