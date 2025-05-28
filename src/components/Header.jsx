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
                <p>First-Class Computer Science Graduate</p>
                <p>Looking for Graduate role in Software Enginering / Data Science</p>
            </div>
        </div>
    );
}