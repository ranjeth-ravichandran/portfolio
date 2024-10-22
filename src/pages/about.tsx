import { HomeIcon } from "@/components/SvgIcons"
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {

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

    return (
        <>
            <div className="about-page-container">
                <motion.div
                    className="about-header"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    custom={0.1}>
                    <Link href={"/"}><HomeIcon color="#fff" className="home-svg" /></Link>
                    <h1>About Me</h1>
                </motion.div>
                <motion.div
                    className="Information"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    custom={0.6}>
                    <div className="experiences-container">
                        <h1>Experience</h1>
                        <motion.div
                            className="experience"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            custom={0.8}>
                            <h2>Event Coordinator</h2>
                            <p>Managed and executed event set-ups for high-profile weddings, including
                                audiovisual equipment, stage lighting, and venue décor.
                                Led a team of contractors, ensuring timely and efficient completion of tasks.
                                Gained experience in warehouse operations, logistics, and on-site problem-solving.</p>
                        </motion.div>
                        <motion.div
                            className="experience"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            custom={1.0}>
                            <h2>Oracle Mentorship</h2>
                            <p>Gained insight into large-scale software development processes and enterprise solutions.
                                Observed and learned from industry professionals about database management, cloud computing, and software life cycle
                                management.</p>
                        </motion.div>
                        <motion.div
                            className="experience"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            custom={1.2}>
                            <h2>BT Insight</h2>
                            <p>Participated in an immersive experience focused on the telecommunications industry.
                                Engaged in workshops and seminars that provided an overview of network engineering and cybersecurity.</p>
                        </motion.div>
                    </div>
                    <motion.div
                        className="skills-container"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        custom={1.7}>
                        <h1>Skills</h1>
                        <motion.div
                            className="technical-skills"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            custom={1.9}>
                            <h2>Technical SKills</h2>
                            <li><span>Languages:</span> Java, JavaScript, TypeScript, Python, HTML5, C++</li>
                            <li><span>Frameworks/Libraries:</span> React, Next.js, Node.js</li>
                            <li><span>Databases:</span> MongoDB, PostgreSQL, MySQL</li>
                            <li><span>Tools & Platforms:</span> Git</li>
                        </motion.div>
                        <motion.div
                            className="certifications"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            custom={2.1}>
                            <h2>Certifications</h2>
                            <li>University of Reading – Reading, UK <p>BSc (Hons) in Computer Science | First Class Honours</p></li>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="about-footer"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    custom={2.6}>
                    <h1>About Footer</h1>
                </motion.div>
            </div>
        </>
    );
}
