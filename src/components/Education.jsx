import Image from "next/image";

export default function Education({ data }) {
    return (
      <section className="education-container basic-container">
        <h2>Education</h2>
        {data.map((education, index) => (
            <a key={index} className="basic-container-2" href={education.link}>
                <Image src={education.image} width={100} height={100} />
                <div className="text">
                    <h3>{education.title}</h3>
                    <p>{education.course}</p>
                    <p>{education.grades}</p>
                </div>
            </a>
        ))}
      </section>
    );
  }
  