import { NavLink } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../../Styles/footer.css";
import logo from "../../assets/images/logo/logo_2.png";
import { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext";
const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <footer
      className={
        darkMode ? "footer_section dark-mode" : "footer_section white-mode"
      }
    >
      <div className="container">
        <div className="footer_top">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="footer_nav">
            <nav>
              <ul>
                <li>
                  <NavLink
                    className={darkMode ? "txt-white-mode" : "txt-dark-mode"}
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={darkMode ? "txt-white-mode" : "txt-dark-mode"}
                    to={"/about"}
                  >
                    About Me
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={darkMode ? "txt-white-mode" : "txt-dark-mode"}
                    to={"/projects"}
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={darkMode ? "txt-white-mode" : "txt-dark-mode"}
                    to={"/blogs"}
                  >
                    Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={darkMode ? "txt-white-mode" : "txt-dark-mode"}
                    to={"/contact"}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="social_icon">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/md-naim-howlader/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Md-Naim-Howlader"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright_area">
          <p className={darkMode ? "text-white" : "txt-dark-mode"}>
            Copyright &copy; 2025 Md. Naim Howlader
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
