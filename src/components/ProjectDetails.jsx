

import Dashboard from "./projects/Dashboard";
/* import AnotherProject from "./projects/AnotherProject"; */

const projectComponents = {
  "dashboard": Dashboard,
  /* "anotherProject": AnotherProject, */
};


export default function ProjectDetails({ project, onClose }) {
  if (!project) return null;

  const ProjectComponent = projectComponents[project.html];

  return (
    <div className="project-details-overlay">
      <div className="project-details">
        <div className="header">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <a href={project.link} target="_blank">
          <button className="close-button" onClick={onClose}>
            Link
          </button>
        </a>
        <h3>{project.title}</h3>
        </div>
        {project.pdf ? (
          <object data={project.pdf} type="application/pdf" width="100%" height="800px" />
        ) : project.html ? (
          <ProjectComponent data={project}/>
        ) : (
          <>
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="project-details-image"
              />
            )}
            <p className="project-details-description">{project.details}</p>
          </>
        )}

      </div>
    </div>
  );
}
