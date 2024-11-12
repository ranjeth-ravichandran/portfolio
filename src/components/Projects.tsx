import { ImageIcon } from "@/components/SvgIcons";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import getConfig from "next/config";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

// Define the Project interface for better TypeScript type-checking
interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    details: string;
    tags: string[];
    images?: string[]; // Optional property
    link?: string; // Optional property
}

interface ProjectsContainerProps {
    framerMotion: Variants;
    collageMotion: Variants;
}

export const ProjectsContainer: React.FC<ProjectsContainerProps> = ({
    framerMotion,
    collageMotion,
}) => {
    const { publicRuntimeConfig } = getConfig();
    const { basePath } = publicRuntimeConfig;

    const [activeCollage, setActiveCollage] = useState<string>("");

    const openCollage = (projectId: string) => setActiveCollage(projectId);
    const closeCollage = () => setActiveCollage("");

    // Project data array with improved type safety
    const projects: Project[] = [
        {
            id: "educational-website",
            title: "Educational Platform",
            subtitle: "Web Development",
            description:
                "Developed an educational platform using React.js, showcasing integration with Open AI for personalized learning experiences.",
            details: "Focused on responsive design, user authentication, and real-time data interaction.",
            tags: [
                "C.R.U.D",
                "React",
                "Python",
                "Open AI",
                "Node JS",
                "Database",
                "Visualization",
                "Algorithms",
            ],
            link: "https://machuchu.github.io/educational-platform/",
        },
        {
            id: "prediction-salary",
            title: "Prediction on Salary",
            subtitle: "Machine Learning & Data Manipulation",
            description:
                "Built a classification model to automate salary categorization for new hires, reducing negotiation time.",
            details:
                "Utilized Python, Pandas, and Scikit-learn for data processing, model development, and evaluation. Improved decision-making efficiency by enabling accurate, data-driven salary predictions.",
            tags: [
                "Python",
                "Pandas",
                "Scikit-learn",
                "Machine Learning",
                "Data Processing",
                "Prediction",
                "Visualization",
            ],
            images: [
                `${basePath}/images/salary1.jpg`,
                `${basePath}/images/salary2.jpg`,
                `${basePath}/images/salary3.jpg`,
            ],
        },
        {
            id: "league-champion-selector",
            title: "League of Legends Statistics",
            subtitle: "API & UI/UX",
            description:
                "This web application helps users search for and discover champions from League of Legends by using the official League API.",
            details:
                "It is built with React and JavaScript, providing real-time data on champions, including their abilities, roles, and stats. Users can easily find specific champions or explore new ones thanks to the simple search and filtering features.",
            tags: ["API", "UI", "UX", "Visualization"],
            link: "https://machuchu.github.io/league-statistics/",
        },
        {
            id: "interactive-gym",
            title: "3D Gym Environment",
            subtitle: "THREE.js",
            description:
                "This is a 3D Gym Environment filled with interactive equipment educating and showcasing each equipment.",
            details: "A Three.js web application built upon React.",
            tags: ["3D", "UI", "UX", "Modeling", "Environment", "Fitness"],
            link: "https://machuchu.github.io/interactive-gym/",
        },
    ];

    return (
        <>
            <div className="Projects">
                <motion.div
                    className="swiper"
                    variants={framerMotion}
                    initial="hidden"
                    animate="visible"
                    custom={1.1}
                    style={{ width: "100%" }}
                >
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={20}
                        loop={true}
                        pagination={{ clickable: true }}
                        style={{ width: "100%" }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        breakpoints={{
                            1366: {
                                slidesPerView: 2,
                            },
                            0: {
                                slidesPerView: 1,
                            },
                        }}
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.id}>
                                <div className="project-container">
                                    <div className="project-information">
                                        <div className="project-header">
                                            <h1>{project.title}</h1>
                                            {project.images && project.images.length > 0 && (
                                                <ImageIcon color="white" onClick={() => openCollage(project.id)} />
                                            )}
                                        </div>
                                        <div className="project-subheader">
                                            <h2>{project.subtitle}</h2>
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="project-link"
                                                >
                                                    Visit Project
                                                </a>
                                            )}
                                        </div>
                                        <p>{project.description}</p>
                                        <p>{project.details}</p>
                                        <div className="tags-container">
                                            {project.tags.map((tag) => (
                                                <a key={tag}>{tag}</a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>

            <AnimatePresence>
                {activeCollage && (
                    <div className="collage-modal">
                        <motion.div
                            className="collage-content"
                            variants={collageMotion}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <button className="close-button" onClick={closeCollage}>
                                Close
                            </button>
                            {/* Safely render images if they exist */}
                            {projects
                                .filter((project) => project.id === activeCollage)
                                .map((project) =>
                                    project.images && project.images.length > 0 ? (
                                        <div key={project.id} className="collage-images">
                                            {project.images.map((image, idx) => (
                                                <Image
                                                    key={idx}
                                                    src={image}
                                                    width={300}
                                                    height={300}
                                                    alt={`${project.title} Image ${idx + 1}`}
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <p key={project.id}>No images available</p>
                                    )
                                )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};
