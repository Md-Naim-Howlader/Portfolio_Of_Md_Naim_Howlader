import heroImg from "../assets/images/coder.png";
import { LiaLessThanSolid } from "react-icons/lia";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { TbSlash } from "react-icons/tb";
import "../Styles/hero.css";

const Hero = () => {
  return (
    <section className="hero__section">
      <div className="container">
        <div className="hero__container">
          <div className="hero__content">
            <h3>Hey there, My name is</h3>
            <h1>Md. Naim Howlader</h1>
            <h2>
              <LiaLessThanSolid className="codeSign" />
              Front-end Web Developer{" "}
              <TbSlash
                className="codeSign"
                style={{ position: "relative", top: "5px", zIndex: "-1" }}
              />
              <LiaGreaterThanSolid
                className="codeSign"
                style={{ position: "relative", top: "5px", zIndex: "-1" }}
              />
            </h2>
            <button
              className="btn"
              style={{ marginTop: "16px" }}
              title="Resume "
            >
              <a
                href="https://drive.google.com/file/d/1ARG3vAVocLcxdp0J36T1p_Bkahe1Tf7g/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
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
