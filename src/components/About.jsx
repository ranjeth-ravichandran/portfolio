export default function About() {
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>
          I am a Frontend Developer with a passion for crafting intuitive user
          experiences. I specialize in React, JavaScript, and CSS, with experience
          building scalable applications.
        </p>
        <h3>Skills</h3>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>Node.js</li>
        </ul>
  
        <style jsx>{`
          #about {
            padding: 50px 20px;
            text-align: center;
          }
          h2 {
            font-size: 2rem;
            margin-bottom: 10px;
          }
          p {
            margin: 20px 0;
            font-size: 1rem;
            color: #555;
          }
          h3 {
            margin-top: 20px;
            font-size: 1.5rem;
          }
          ul {
            list-style: none;
            padding: 0;
            display: flex;
            justify-content: center;
            gap: 15px;
          }
          li {
            background: #f7f7f7;
            padding: 10px 15px;
            border-radius: 5px;
          }
        `}</style>
      </div>
    );
  }
  