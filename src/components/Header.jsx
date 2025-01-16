import Image from "next/image";

export default function Header() {
    return(
        <div className="header-container basic-container">      
            <div className="left">
                <Image src={"/images/profile.jpg"} width={100} height={100} />
                <a href="resume.pdf" target="_blank">
                    <Image src={"/svg/folder.svg"} alt="Folder" width={32} height={32}/>
                    <button className="resume-button">Resume</button>
                </a>
            </div>
            <div className="right">
            <h1>Ranjeth Ravichandran</h1>
            <p>Recent Computer Science Graduate</p>
            <p>Aspiring Sfotware Engineer</p>
            </div>
        </div>
    );
}