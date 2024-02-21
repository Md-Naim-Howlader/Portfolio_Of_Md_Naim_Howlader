import { useEffect } from "react";
import projectsData from "../Data/projects.json";
import Project from "../Components/Project/Project";

const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Md. Naim Howlader";
  }, []);

  return (
    <section>
      <div className="container">
        <div className="section__title">
          <h2>Projects</h2>
          <div className="big__bar"></div>
          <div className="small__bar"></div>
        </div>
        <div className="projects">
          {projectsData.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
