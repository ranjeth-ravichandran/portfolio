import { ImageIcon } from "@/components/SvgIcons";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import getConfig from 'next/config';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";

interface ProjectsContainerProps {
    framerMotion: Variants;
    collageMotion: Variants;
}

export const ProjectsContainer: React.FC<ProjectsContainerProps> = ({ framerMotion, collageMotion }) => {
    const { publicRuntimeConfig } = getConfig();
    const { basePath } = publicRuntimeConfig;

    const [activeCollage, setActiveCollage] = useState("");

    const openCollage = (projectId: string) => setActiveCollage(projectId);
    const closeCollage = () => setActiveCollage("");

    // Define the project data as an array of objects
    const projects = [
        {
            id: "educational-website",
            title: "Educational Platform",
            subtitle: "Web Development",
            description: "Developed an educational platform using React.js, showcasing integration with Open AI for personalised learning experiences.",
            details: "Focused on responsive design, user authentication, and real-time data interaction.",
            tags: ["C.R.U.D", "React", "Python", "Open AI", "Node JS", "Database", "Visualization", "Algorithms"],
            images: [`${basePath}/images/edu1.jpg`, `${basePath}/images/edu2.jpg`, `${basePath}/images/edu3.jpg`]
        },
        {
            id: "prediction-salary",
            title: "Prediction on Salary",
            subtitle: "Machine Learning & Data Manipulation",
            description: "Built a classification model to automate salary categorization for new hires, reducing negotiation time.",
            details: "Utilised Python, Pandas, and Scikit-learn for data processing, model development, and evaluation. Improved decision-making efficiency by enabling accurate, data-driven salary predictions.",
            tags: ["Python", "Pandas", "Scikit-learn", "Machine Learning", "Data Processing", "Prediction", "Visualization"],
            images: [`${basePath}/images/salary1.jpg`, `${basePath}/images/salary2.jpg`, `${basePath}/images/salary3.jpg`]
        },
        {
            id: "league-champion-selector",
            title: "League PokeDex",
            subtitle: "API & UI/UX",
            description: "Built a classification model to automate salary categorization for new hires, reducing negotiation time.",
            details: "Utilised Python, Pandas, and Scikit-learn for data processing, model development, and evaluation. Improved decision-making efficiency by enabling accurate, data-driven salary predictions.",
            tags: ["API", "UI", "UX", "Visualization"],
            images: [`${basePath}/images/edu1.jpg`, `${basePath}/images/salary2.jpg`, `${basePath}/images/salary3.jpg`]
        },
        // Add more projects as needed
    ];

    return (
        <>
            <div className="Projects">
                <motion.div
                    className="swiper"
                    variants={framerMotion}
                    initial="hidden"
                    animate="visible"
                    custom={1.1}  // Delay based on index
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
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            1366: {
                                slidesPerView: 2,  // Show 2 slides per view when the screen width is 1366px or more
                            },
                            0: {
                                slidesPerView: 1,  // Show 1 slide per view on screens smaller than 1366px
                            }
                        }}
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={project.id}>
                                <div
                                    className="project-container"
                                    key={project.id}
                                >
                                    <div className="project-information">
                                        <div className="project-header">
                                            <h1>{project.title}</h1>
                                            <ImageIcon color="white" onClick={() => openCollage(project.id)} />
                                        </div>
                                        <h2>{project.subtitle}</h2>
                                        <p>{project.description}</p>
                                        <p>{project.details}</p>
                                        <div className="tags-container">
                                            {project.tags.map(tag => (
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
                            <button className="close-button" onClick={closeCollage}>Close</button>

                            {/* Render images dynamically based on activeCollage */}
                            {projects
                                .filter(project => project.id === activeCollage)
                                .map(project => (
                                    <div key={project.id} className="collage-images">
                                        {project.images.map((image, idx) => (
                                            <Image key={idx} src={image} width={300} height={300} alt={`${project.title} Image ${idx + 1}`} />
                                        ))}
                                    </div>
                                ))
                            }
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};
