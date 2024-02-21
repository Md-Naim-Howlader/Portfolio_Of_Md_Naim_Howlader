import SectionTitle from "../Components/sectionTitle";
import "../Styles/contact.css";
import { FaLocationArrow } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Md. Naim Howlader";
  }, []);
  return (
    <section>
      <div className="container">
        <SectionTitle title="Contact Me" />
      </div>
      <div className="contact_info">
        <div className="container">
          <div className="contact_details">
            <p>
              Thank you for taking the time to visit my portfolio. If you have
              any inquiries, opportunities, or simply want to say hello, feel
              free to reach out to me through any of the following channels:
            </p>
            <div className="contact_link">
              <p>
                I am always eager to collaborate on exciting projects, discuss
                potential opportunities, or just chat about all things web
                development. Don&apos;t hesitate to get in touch— I look forward
                to hearing from you!
              </p>
              <h3>Md. Naim Howlader</h3>
              <ul>
                <li>
                  <strong>Email:</strong> mdnaimptk776@gmail.com
                </li>
                <li>
                  <strong>Contact:</strong> +8801603346399
                </li>
              </ul>
              <div className="icon_link">
                <a
                  href="https://github.com/Md-Naim-Howlader"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/md-naim-howlader/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
          <div className="contact__form">
            <form>
              <div className="input_item">
                <label htmlFor="name">Name:</label>
                <input autoFocus type="text" name="name" id="name" />
              </div>
              <div className="input_item">
                <label htmlFor="email">Email Address:</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="input_item">
                <label htmlFor="phone">Phone (optional):</label>
                <input type="text" name="phone" id="phone" />
              </div>
              <div className="input_item">
                <label htmlFor="subject">Subject:</label>
                <input type="text" name="subject" id="subject" />
              </div>
              <div className="input_item">
                <label htmlFor="message">Message:</label>
                <textarea name="message" id="message" rows="5"></textarea>
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
