import { HomeIcon } from "@/components/SvgIcons"
import Link from "next/link";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard"
import { useRouter } from "next/router";

export default function ProjectsPage() {
    const { basePath } = useRouter();
    // Animation variants for each container, without staggering
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (customDelay: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: customDelay,
            },
        }),
    };

    const projects = [
        { id: 1, title: 'Title 1', image: `${basePath}/images/edu3.jpg` },
        { id: 2, title: 'Title 2', image: `${basePath}/images/edu3.jpg` },
        { id: 3, title: 'Title 3', image: `${basePath}/images/edu3.jpg` },
    ];

    return (
        <div className="projects-page-container">
            <motion.div
                className="project-header"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                custom={0.1}>
                <Link href={"/"}><HomeIcon color="#fff" className="home-svg" /></Link>
                <h1>Projects</h1>
            </motion.div>

            <div className="project-card-container">
                {projects.map((project) => (
                    <ProjectCard key={project.id} title={project.title} image={project.image} />
                ))}
            </div>

        </div>
    );
}