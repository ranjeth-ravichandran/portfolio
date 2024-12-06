import Image from "next/image";

function ProjectCard({ title, image }) {
    return (
        <div className="project-card">
            <Image
                src={image}
                alt="Profile Picture"
                width={300}
                height={300}
                style={{ objectFit: "cover", borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 2px 10px" }}
            />
            <h1>{title}</h1>
        </div>
    );
}

export default ProjectCard;