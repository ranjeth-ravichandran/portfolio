export default function ProjectDetails({ project, onClose }) {
  if (!project) return null;

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
        {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="project-details-image"
              />
            )}  
        <p className="project-details-description">{project.details}</p>
      </div>
    </div>
  );
}