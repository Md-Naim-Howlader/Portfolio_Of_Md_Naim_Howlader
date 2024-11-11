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
          <h2>Md. Naim Howlader</h2>
          <p>
            Hello there! I am <strong>Md Naim Howlader</strong>, a Frontend Web
            Developer with a passion for programming. Pursuing a career as a web
            developer has been a longstanding aspiration of mine, and I am
            thrilled to now be working in this field.
          </p>
          <p>
            Dedicated React JS Frontend Developer with expertise in{" "}
            <strong>HTML</strong>, <strong>CSS</strong>,{" "}
            <strong>JavaScript</strong>, <strong>React.js</strong>,{" "}
            <strong>SASS</strong> <strong>Tailwind css</strong> and{" "}
            <strong>Bootstrap</strong>, I ensure that your website will not only
            meet but exceed W3 standards. My focus is on creating websites that
            are not only responsive, beautiful, and functional but also easy to
            access and user-friendly.
          </p>
          <p>
            With a keen eye for detail and a commitment to creating W3 standard
            compliant, easy-accessible, and user-friendly websites, I guarantee
            that your project will be in good hands. Let me know if you have any
            questions - I look forward to working with you!
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
