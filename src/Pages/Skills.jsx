import "../Styles/skills.css";
import skillsData from "../Data/skills.json";
import { useState } from "react";

const Skills = () => {
  const [data] = useState(skillsData);
  return (
    <section className="skills__section">
      <div className="container">
        <div className="section__title">
          <h2>My Skills</h2>
          <div className="big__bar"></div>
          <div className="small__bar"></div>
        </div>
        <div className="skills">
          {data.map((skill) => (
            <div key={skill.id} className="skill__item">
              <img src={skill.icon} alt={skill.name} />
              <h6>{skill.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
