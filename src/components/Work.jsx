
import Image from "next/image";

export default function Work({data}) {
    return (
      <div className="work-container basic-container">
        <h2>Work Experience</h2>
        {data.map((work, index) => (
           <a key={index} className="basic-container-2" href={work.link}>
              <Image src={work.image} width={100} height={100} />
              <div className="text">
                  <h3>{work.company}</h3>
                  <p>{work.title}</p>
                  <p>{work.location}</p>
                  <p>{work.date}</p>
              </div>
          </a>
        ))}
      </div>
    );
  }
  