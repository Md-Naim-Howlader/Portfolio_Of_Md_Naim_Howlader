import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../../Styles/header.css";
import DarkMode from "../../Components/DarkMode";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/logo_2.png";
import { useState } from "react";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="navbar">
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <div>
              <ul>
                <li>
                  <NavLink onClick={handleShowNavbar} to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handleShowNavbar} to={"/about"}>
                    About Me
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handleShowNavbar} to={"/projects"}>
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handleShowNavbar} to={"/blogs"}>
                    Blogs
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handleShowNavbar} to={"/contact"}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="social-icons">
              <div onClick={handleShowNavbar} className="resumeBtn">
                <button className="btn" onClick={handleShowNavbar}>
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
