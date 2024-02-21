import { useState } from "react";
import projectsData from "../Data/projects.json";
import Project from "../Components/Project/Project";
import { RxDoubleArrowRight } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import SectionTitle from "../Components/sectionTitle";

const RecentProjects = () => {
  const [projects] = useState(projectsData.slice(-5));
  return (
    <section>
      <div className="container">
        <SectionTitle title="Recent Projects" />
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
