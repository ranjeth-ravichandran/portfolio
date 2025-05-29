import Image from "next/image";

export default function Header() {
    return (
        <div className="header-container basic-container">
            <div className="left">
                <Image src={"./images/profile.jpg"} width={100} height={100} />
                <div id="links">
                    <a id="resume-link" href="resume.pdf" target="_blank">
                        <Image src={"./svg/folder.svg"} alt="Folder" width={32} height={32} />
                        <button className="resume-button">Resume</button>
                    </a>
                    <a id="github-link" href="https://github.com/ranjeth-ravichandran" target="_blank">
                        <Image src={"./svg/github.svg"} alt="Folder" width={32} height={32} />
                    </a>
                </div>
            </div>
            <div className="right">
                <h1>Ranjeth Ravichandran</h1>
                <p id="summary">I am a driven individual who has a knack for programming and analytical problem solving, I have garnered technical experience through personal projects as well as tackling certifications & courses alongside my degree in Computer Science. I am seeking an entry level position within the tech industry and continue to learn and improve my skills.</p>
            </div>
        </div>
    );
}