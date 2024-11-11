import { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext";

const Project = ({ project }) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "project dark-mode" : "project white-mode"}>
      <div className="project_image">
        <img src={project.image} alt={project.siteName} />
      </div>
      <div className="project_body">
        <h3 className={darkMode ? "txt-white-mode" : "txt-black-mode"}>
          {project.siteName}
        </h3>
        <div className="technology">
          <h3 className={darkMode ? "txt-white-mode" : "txt-black-mode"}>
            Technology:{" "}
          </h3>
          <div className="tech_btn">
            {project.technology.map((tech, i) => (
              <button
                className={darkMode ? "txt-white-mode" : "txt-dark-green-mode"}
                key={i}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
        <div className="site_link">
          <a href={project.liveSite} target="_blank" rel="noopener noreferrer">
            Live Preview
          </a>
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
