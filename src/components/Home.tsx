import { CIcon, GitHubIcon, GitIcon, JavaIcon, JavascriptIcon, LinkedInIcon, PythonIcon, ReactIcon, ResumeIcon, SqlIcon } from "@/components/SvgIcons";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Define the type of the props the child component expects
interface HomeContainerProps {
    framerMotion: Variants;  // Define that framer is a Variants object
}

import getConfig from 'next/config';
export const HomeContainer: React.FC<HomeContainerProps> = ({ framerMotion }) => {
    const { publicRuntimeConfig } = getConfig();
    const { basePath } = publicRuntimeConfig;

    return (
        <div className="Home">
            <motion.div
                className="home-container"
                variants={framerMotion}
                initial="hidden"
                animate="visible"
                custom={0.1} // Delay for the home-container
            >
                <Image
                    id="profile"
                    src={`${basePath}/images/profile.jpeg`}
                    alt="Profile Picture"
                    unoptimized
                    width={300}
                    height={300}
                />
                <div id="text-container">
                    <h1>RANJETH RAVICHANDRAN</h1>
                    <h2>Software Developer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum doloribus aliquam perspiciatis soluta. Sed eum saepe, sapiente repudiandae laboriosam deserunt.</p>
                    <div id="languages-container">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" style={{ color: '#F7DF1E' }}>
                            <JavascriptIcon color="yellow" />
                        </a>
                        <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">
                            <ReactIcon color="lightblue" />
                        </a>
                        <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">
                            <PythonIcon />
                        </a>
                        <a href="https://docs.oracle.com/en/java/" target="_blank" rel="noopener noreferrer">
                            <JavaIcon />
                        </a>
                        <a href="https://www.w3schools.com/sql/" target="_blank" rel="noopener noreferrer">
                            <SqlIcon />
                        </a>
                        <a href="https://en.cppreference.com/w/c" target="_blank" rel="noopener noreferrer">
                            <CIcon />
                        </a>
                        <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer">
                            <GitIcon />
                        </a>
                    </div>
                </div>
                <div id="links-container">
                    <a
                        href={`${basePath}/resume.pdf`}
                        download="Ranjeth Ravichandran Resume.pdf"
                    >
                        <ResumeIcon color="#fff" />
                    </a>
                    <a href="https://github.com/MaChuChu" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon color="#fff" />
                    </a>
                    <a href="https://www.linkedin.com/in/ranjeth-ravichandran-78a8542a8/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon color="#fff" />
                    </a>
                </div>
            </motion.div>

            {/* About container */}
            <motion.div
                className="about-container"
                variants={framerMotion}
                initial="hidden"
                animate="visible"
                custom={0.6} // Delay for the about-container
            >
                <h1>About Me</h1>
                <p>A highly motivated and detail-oriented Computer Science graduate with a First Class Honours from the University of Reading.</p>
                <p>Strong foundation in modern computing technologies, demonstrated through practical experience in web development, AI integration, and software engineering.</p>
                <Link href="/about">Learn More</Link>
            </motion.div>
        </div>

    )
}