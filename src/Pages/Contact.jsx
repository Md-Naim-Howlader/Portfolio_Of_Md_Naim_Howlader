import "../Styles/contact.css";
import { FaLocationArrow } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "../Context/DarkModeContext";
const Contact = () => {
  const { darkMode } = useContext(DarkModeContext);
  useEffect(() => {
    document.title = "Contact | Md. Naim Howlader";
  }, []);
  return (
    <section className={darkMode ? "dark-mode" : "white-mode"}>
      <div className="container">
        <div className="section__title">
          <h2 className={darkMode ? "text-white" : "txt-black-mode"}>
            Contact
          </h2>
          <div className="big__bar"></div>
          <div className="small__bar"></div>
        </div>
      </div>
      <div className="contact_info">
        <div className="container">
          <div className="contact_details">
            <p className={darkMode ? "text-white" : "txt-black-mode"}>
              Thank you for taking the time to visit my portfolio. If you have
              any inquiries, opportunities, or simply want to say hello, feel
              free to reach out to me through any of the following channels:
            </p>
            <div className="contact_link">
              <p className={darkMode ? "text-white" : "txt-black-mode"}>
                I am always eager to collaborate on exciting projects, discuss
                potential opportunities, or just chat about all things web
                development. Don&apos;t hesitate to get in touch— I look forward
                to hearing from you!
              </p>
              <h3 className={darkMode ? "text-white" : "txt-black-mode"}>
                Md. Naim Howlader
              </h3>
              <ul className={darkMode ? "text-white" : "txt-black-mode"}>
                <li>
                  <strong>Email:</strong> mdnaimptk776@gmail.com
                </li>
                <li>
                  <strong>Contact:</strong> +8801603346399
                </li>
              </ul>
              <div className="icon_link">
                <a
                  className={
                    darkMode ? "txt-green-mode" : "txt-dark-green-mode"
                  }
                  href="https://github.com/Md-Naim-Howlader"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  className={
                    darkMode ? "txt-green-mode" : "txt-dark-green-mode"
                  }
                  href="https://www.linkedin.com/in/md-naim-howlader/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
          <div
            className={
              darkMode ? "contact__form dark-mode" : "contact__form white-mode"
            }
          >
            <form>
              <div className="input_item">
                <label
                  className={darkMode ? "text-white" : "txt-black-mode"}
                  htmlFor="name"
                >
                  Name:
                </label>
                <input
                  className={
                    darkMode
                      ? "dark-mode txt-white-mode"
                      : "white-mode txt-dark-mode"
                  }
                  autoFocus
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="input_item">
                <label
                  className={
                    darkMode
                      ? "dark-mode txt-white-mode"
                      : "white-mode txt-dark-mode"
                  }
                  htmlFor="email"
                >
                  Email Address:
                </label>
                <input
                  className={
                    darkMode
                      ? "dark-mode txt-white-mode"
                      : "white-mode txt-dark-mode"
                  }
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="input_item">
                <label
                  className={
                    darkMode
                      ? "dark-mode txt-white-mode"
                      : "white-mode txt-dark-mode"
                  }
                  htmlFor="phone"
                >
                  Phone (optional):
                </label>
                <input
                  className={
                    darkMode
                      ? "dark-mode txt-white-mode"
                      : "white-mode txt-dark-mode"
                  }
                  type="text"
                  name="phone"
                  id="phone"
                />
              </div>
              <div className="input_item">
                <label
                  className={darkMode ? "text-white" : "txt-black-mode"}
                  htmlFor="subject"
                >
                  Subject:
                </label>
                <input
                  className={
                    darkMode
                      ? "dark-mode txt-white-mode"
                      : "white-mode txt-dark-mode"
                  }
                  type="text"
                  name="subject"
                  id="subject"
                />
              </div>
              <div className="input_item">
                <label
                  className={darkMode ? "text-white" : "txt-black-mode"}
                  htmlFor="message"
                >
                  Message:
                </label>
                <textarea
                  className={
                    darkMode
                      ? "dark-mode txt-white-mode"
                      : "white-mode txt-dark-mode"
                  }
                  name="message"
                  id="message"
                  rows="5"
                ></textarea>
              </div>

              <button type="submit">
                Send Message <FaLocationArrow />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
