import { useContext, useState } from "react";
import projectsData from "../Data/projects.json";
import Project from "../Components/Project/Project";
import { RxDoubleArrowRight } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { DarkModeContext } from "../Context/DarkModeContext";

const RecentProjects = () => {
  const [projects] = useState(projectsData.slice(0, 6));
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section className={darkMode ? "dark-mode" : "white-mode"}>
      <div className="container">
        <div className="section__title">
          <h2 className={darkMode ? "text-white" : "txt-black-mode"}>
            Recent Projects
          </h2>
          <div className="big__bar"></div>
          <div className="small__bar"></div>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
        <div className="viewAllProjectBtn">
          <NavLink to={"/projects"}>
            View All Project{" "}
            <RxDoubleArrowRight style={{ position: "relative", top: "3px" }} />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
