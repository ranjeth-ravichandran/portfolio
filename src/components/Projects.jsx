import { useState, useEffect } from "react";
import ProjectDetails from "./ProjectDetails";

export default function Projects({ data }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  // Add or remove the 'no-scroll' class on the body when the modal is open/closed
  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Clean up the effect
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [selectedProject]);

  return (
    <div className="projects-container basic-container">
      <h2>Projects</h2>
      <div className="projects-list">
        {data.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => openProjectDetails(project)}
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            )}  
            
            <h3>{project.title}</h3>
            <p className="project-tag">{project.tag}</p>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectDetails project={selectedProject} onClose={closeProjectDetails} />
      )}
    </div>
  );
}
