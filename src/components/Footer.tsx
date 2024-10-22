import { CIcon, EmailIcon, GitHubIcon, GitIcon, ImageIcon, JavaIcon, JavascriptIcon, LinkedInIcon, PythonIcon, ReactIcon, ResumeIcon, SqlIcon } from "@/components/SvgIcons";
import { motion, AnimatePresence, Variants } from "framer-motion";  // Import Framer Motion

// Define the type of the props the child component expects
interface FooterContainerProps {
    framerMotion: Variants;  // Define that framer is a Variants object
}


export const FooterContainer: React.FC<FooterContainerProps> = ({ framerMotion }) => {
    return (
        <motion.div
            className="Footer"
            variants={framerMotion}
            initial="hidden"
            animate="visible"
            custom={2.1} // Delay for the footer-container
        >
            <div className="footer-container">
                <div className="footer-contacts">
                    <h1>Contacts</h1>
                    <a href="https://github.com/MaChuChu" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon color="#fff" />
                    </a>
                    <a href="https://www.linkedin.com/in/ranjeth-ravichandran-78a8542a8/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon color="#fff" />
                    </a>
                    <a href="mailto:ranjethravichandran@hotmail.com?subject=Contact from Portfolio" target="_blank" rel="noopener noreferrer">
                        <EmailIcon color="#fff" />
                    </a>
                </div>
                <div className="footer-resume">
                    <h1>Resume</h1>
                    <a
                        href={"/resume.pdf"}
                        download="Ranjeth Ravichandran Resume.pdf"
                    >
                        <ResumeIcon color="#fff" />
                    </a>
                </div>
            </div>
        </motion.div>
    )
}