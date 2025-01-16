
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import projectsData from "@/data/projects.json";
import Education from "@/components/Education";
import educationData from "@/data/education.json";
import Work from "@/components/Work";
import workData from "@/data/work.json";
import Languages from "@/components/Languages";
import languagesData from "@/data/languages.json";

export default function Home() {

    return (
        <div className="container">
            <Header />
            <div className="basic-container-3">
                <Education data={educationData}/>
                <Work data={workData}/>
            </div>
            <Languages data={languagesData} />
            <Projects data={projectsData} />
            
        </div>
    );
}
