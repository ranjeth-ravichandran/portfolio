
import { HomeContainer } from "@/components/Home";
import { ProjectsContainer } from "@/components/Projects";
import { FooterContainer } from "@/components/Footer";
import { containerVariants, modalVariants } from "@/components/Functions";

export default function Home() {

    return (
        <>
            <div className="container">
                {/* Home */}
                <HomeContainer framerMotion={containerVariants} />

                {/* Projects Section */}
                <ProjectsContainer framerMotion={containerVariants} collageMotion={modalVariants} />

                {/* Footer */}
                <FooterContainer framerMotion={containerVariants} />
            </div>
        </>
    );
}
