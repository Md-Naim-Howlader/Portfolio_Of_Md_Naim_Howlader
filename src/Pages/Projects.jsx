import { useEffect } from "react";
import SectionTitle from "../Components/sectionTitle";
import projectsData from "../Data/projects.json";
import Project from "../Components/Project/Project";

const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Md. Naim Howlader";
  }, []);

  return (
    <section>
      <div className="container">
        <SectionTitle title="Projects" />
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
