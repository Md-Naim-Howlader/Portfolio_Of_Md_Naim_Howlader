import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/about.css";
import { DarkModeContext } from "../Context/DarkModeContext";

const About = () => {
  const { darkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "About Me | Md. Naim Howlader";
  }, []);

  return (
    <section className={darkMode ? "dark-mode" : "white-mode"}>
      <div className="container">
        <div className="section__title">
          <h2 className={darkMode ? "text-white" : "txt-black-mode"}>
            About Me
          </h2>
          <div className="big__bar"></div>
          <div className="small__bar"></div>
        </div>
        <div
          className={
            darkMode ? "about_me text-white" : "about_me txt-black-mod"
          }
        >
          <h2 style={{ textAlign: "left" }}>Md. Naim Howlader</h2>
          <p>
            Assalamu Alaikum! I am <strong>Md Naim Howlader</strong>, a
            professional Front-end Web Developer committed to delivering
            high-quality and innovative web solutions.
          </p>
          <p>
            As a skilled Front-end developer, I specialize in{" "}
            <strong>HTML</strong>, <strong>CSS</strong>,{" "}
            <strong>JavaScript</strong>, <strong>React.js</strong>,{" "}
            <strong>Redux</strong>, <strong>SASS</strong>,{" "}
            <strong>Tailwind CSS</strong>, <strong>Bootstrap</strong>, and use
            <strong> Git</strong> for version control. I prioritize maintaining
            web accessibility and create websites that are responsive, visually
            appealing, functional, and accessible, always adhering to W3
            standards.
          </p>
          <p>
            Currently, I am expanding my expertise by learning{" "}
            <strong>PHP</strong>, <strong>OOP</strong>, <strong>MySQL</strong>,
            <strong> MySQLI</strong> and <strong>PDO</strong>, and{" "}
            <strong>MVC</strong> architecture etc . My future plans include
            mastering the <strong>Laravel</strong> and others PHP framework to
            strengthen my backend capabilities.
          </p>
          <p>
            With attention to detail and a commitment to quality, I aim to
            deliver exceptional websites. Feel free to reach out—I look forward
            to collaborating with you!
          </p>
          <div style={{ marginTop: "2rem" }}>
            <button onClick={() => navigate("/contact")} className="hire_btn">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
