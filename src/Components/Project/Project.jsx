const Project = ({ project }) => {
  return (
    <div className="project">
      <div className="project_image">
        <img src={project.image} alt={project.siteName} />
      </div>
      <div className="project_body">
        <h3>{project.siteName}</h3>
        <div className="technology">
          <h3>Technology: </h3>
          <div className="tech_btn">
            {project.technology.map((tech, i) => (
              <button key={i}>{tech}</button>
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
