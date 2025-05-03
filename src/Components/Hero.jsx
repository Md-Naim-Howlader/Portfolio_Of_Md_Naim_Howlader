import heroImg from "../assets/images/coder.png";

import "../Styles/hero.css";
import { useContext } from "react";
import { DarkModeContext } from "../Context/DarkModeContext";
const Hero = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section
      className={
        darkMode ? "hero__section dark-mode" : "hero__section white-mode"
      }
    >
      <div className="container">
        <div className="hero__container">
          <div className="hero__content">
            <h3 className={darkMode ? "txt-white-mode" : "txt-black-mode"}>
              Hey there, My name is
            </h3>
            <h1 className={darkMode ? "txt-green-mode" : "txt-dark-green-mode"}>
              Md. Naim Howlader
            </h1>
            <h2 className={darkMode ? "txt-white-mode" : "txt-black-mode"}>
              Web Application Developer{" "}
            </h2>
            <button
              className={
                darkMode ? "bg-green-mode btn " : "bg-dark-green-mode btn"
              }
              style={{ marginTop: "16px" }}
              title="Resume "
            >
              <a
                className="text-white"
                 href="https://drive.google.com/uc?export=download&id=1ARG3vAVocLcxdp0J36T1p_Bkahe1Tf7g"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </button>
          </div>
          <div className="hero__image">
            <img style={{ width: "400px" }} src={heroImg} alt="naim image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
