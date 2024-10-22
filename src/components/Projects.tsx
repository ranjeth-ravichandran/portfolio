import { ImageIcon } from "@/components/SvgIcons";
import { motion, AnimatePresence, Variants } from "framer-motion";  // Import Framer Motion
import Image from "next/image";
import { useState } from "react";

// Define the type of the props the child component expects
interface ProjectsContainerProps {
    framerMotion: Variants;  // Define that framer is a Variants object
    collageMotion: Variants;
}

export const ProjectsContainer: React.FC<ProjectsContainerProps> = ({ framerMotion, collageMotion }) => {

    const [activeCollage, setActiveCollage] = useState("");

    const openCollage = (project: string) => {
        setActiveCollage(project);
    };

    const closeCollage = () => {
        setActiveCollage("");
    };

    return (
        <>
            <div className="Projects">
                {/* Project 1 */}
                <motion.div
                    className="project-container"
                    variants={framerMotion}
                    initial="hidden"
                    animate="visible"
                    custom={1.1} // Delay for this project
                >
                    <div className="project-information">
                        <div className="project-header">
                            <h1>Educational Platform</h1>
                            <ImageIcon color="white" onClick={() => openCollage("educational-website")} />
                        </div>
                        <h2>Web Development</h2>
                        <p>Developed an educational platform using <b>React.js</b>, showcasing integration with <b>Open AI</b> for personalised learning experiences.</p>
                        <p>Focused on <b>responsive design</b>, <b>user authentication</b>, and <b>real-time data interaction.</b></p>
                        <div className="tags-container">
                            <a>C.R.U.D</a>
                            <a>React</a>
                            <a>Python</a>
                            <a>Open AI</a>
                            <a>Node JS</a>
                            <a>Database</a>
                            <a>Visualization</a>
                            <a>Algorithms</a>
                        </div>
                    </div>
                </motion.div>

                {/* Project 2 */}
                <motion.div
                    className="project-container"
                    variants={framerMotion}
                    initial="hidden"
                    animate="visible"
                    custom={1.6} // Delay for the second project container
                >
                    <div className="project-information">
                        <div className="project-header">
                            <h1>Prediction on Salary</h1>
                            <ImageIcon color="white" onClick={() => openCollage("prediction-salary")} />
                        </div>
                        <h2>Machine Learning & Data Manipulation</h2>
                        <p>Built a classification model to automate salary categorization for new hires, reducing negotiation time.</p>
                        <p>Utilised <b>Python</b>, <b>Pandas</b>, and <b>Scikit-learn</b> for <b>data processing</b>, <b>model development</b>, and <b>evaluation</b>. Improved decision-making efficiency by enabling accurate, data-driven salary predictions.</p>
                        <div className="tags-container">
                            <a>Python</a>
                            <a>Pandas</a>
                            <a>Skikit-learn</a>
                            <a>Machine Learning</a>
                            <a>Data Processing</a>
                            <a>Prediction</a>
                            <a>Visualization</a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Collage Modal with AnimatePresence */}
            <AnimatePresence>
                {activeCollage && (
                    <div className="collage-modal">
                        <motion.div
                            className="collage-content"
                            variants={collageMotion}   // Apply the variants for animation
                            initial="hidden"           // Initial hidden state
                            animate="visible"          // Animate to visible state
                            exit="exit"                // Exit animation when unmounting 
                        >
                            <button className="close-button" onClick={closeCollage}>Close</button>

                            {/* Conditionally render the correct collage based on the project */}
                            {activeCollage === "educational-website" && (
                                <div className="collage-images">
                                    <Image src="/images/edu1.jpg" width={300} height={300} alt="Edu Image 1" />
                                    <Image src="/images/edu2.jpg" width={300} height={300} alt="Edu Image 2" />
                                    <Image src="/images/edu3.jpg" width={300} height={300} alt="Edu Image 3" />
                                </div>
                            )}
                            {activeCollage === "prediction-salary" && (
                                <div className="collage-images">
                                    <Image src="/images/salary1.jpg" width={300} height={300} alt="Salary Image 1" />
                                    <Image src="/images/salary2.jpg" width={300} height={300} alt="Salary Image 2" />
                                    <Image src="/images/salary3.jpg" width={300} height={300} alt="Salary Image 3" />
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}