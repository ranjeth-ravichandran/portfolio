import Image from "next/image";

export default function Languages({data}) {
    return (
        <div className="languages-container basic-container">
            <h2>Languages</h2>
            <div className="languages-details">
            {data.map((language, index) => (
                <div className="language" key={index}>
                    <Image src={language.icon} width={48} height={48} />
                    <p>{language.title}</p>
                </div>
            ))}
            </div>
        </div>
    )
}