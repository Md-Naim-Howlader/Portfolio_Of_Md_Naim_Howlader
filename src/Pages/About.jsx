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
          <p>
             Assalamu Alaikum! I am <strong>Md. Naim Howlader</strong>, a passionate and dedicated <strong>Full-Stack Web Developer</strong>, committed to building high-quality, accessible, and user-friendly web solutions.
          </p>
          <p>
             On the frontend, I specialize in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React.js</strong>, <strong>Redux</strong>, <strong>SASS</strong>, <strong>Tailwind CSS</strong>, <strong>Bootstrap</strong>, and use <strong>Git</strong> for version control. I follow <strong>W3C</strong> standards and best practices to create websites that are responsive, visually appealing, and accessible to all users.
          <p>
            On the backend, I am continuously growing my skills in <strong>PHP</strong>, <strong>Object-Oriented Programming (OOP)</strong>, <strong>MySQL</strong> (including MySQLi and PDO), and <strong>MVC</strong> architecture. My goal is to master <strong>Laravel</strong> and other modern PHP frameworks to build scalable and secure web applications.
          </p>
          <p>
              With strong attention to detail and a drive for continuous learning, I aim to deliver complete web experiences—from clean backend logic to interactive frontend design.
          </p>
            <p>
              I’m always open to exciting opportunities and collaborations.
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
