import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../../Styles/header.css";
import DarkMode from "../../Components/DarkMode";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/logo_2.png";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext";

const Header = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header className={darkMode ? "header dark-mode" : "header white-mode"}>
      <div className="container">
        <div className="logo">
          <NavLink to={"/"}>
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <nav className={darkMode ? "navbar dark-mode" : "navbar white-mode"}>
          <div
            className={
              darkMode
                ? `nav-elements dark-mode  ${showNavbar && "active"}`
                : `nav-elements white-mode  ${showNavbar && "active"}`
            }
          >
            <div>
              <ul>
                <li>
                  <NavLink
                    className={darkMode ? "txt-white-mode" : "txt-dark-mode"}
                    onClick={handleShowNavbar}
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={darkMode ? "txt-white-mode" : "txt-dark-mode"}
                    onClick={handleShowNavbar}
                    to={"/about"}
                  >
                    About Me
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={darkMode ? "txt-white-mode" : "txt-dark-mode"}
                    onClick={handleShowNavbar}
                    to={"/projects"}
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={darkMode ? "txt-white-mode" : "txt-dark-mode"}
                    onClick={handleShowNavbar}
                    to={"/blogs"}
                  >
                    Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={darkMode ? "txt-white-mode" : "txt-dark-mode"}
                    onClick={handleShowNavbar}
                    to={"/contact"}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="social-icons">
              <div onClick={handleShowNavbar} className="resumeBtn">
                <button
                  className={
                    darkMode
                      ? "bg-green-mode btn text-white"
                      : "bg-dark-green-mode btn text-white"
                  }
                  onClick={handleShowNavbar}
                >
                  Resume
                </button>
              </div>
              <ul>
                <li>
                  <a
                    onClick={handleShowNavbar}
                    href="https://www.linkedin.com/in/md-naim-howlader/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleShowNavbar}
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
        </nav>
        <DarkMode />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button className="menu-icon" onClick={handleShowNavbar}>
            {showNavbar ? <IoClose style={{ fontSize: "40px" }} /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
