import { useContext, useEffect } from "react";

import "../Styles/blogs.css";
import { DarkModeContext } from "../Context/DarkModeContext";
const Blogs = () => {
  const { darkMode } = useContext(DarkModeContext);
  useEffect(() => {
    document.title = "Blogs | Md. Naim Howlader";
  }, []);
  return (
    <section className={darkMode ? "dark-mode" : "white-mode"}>
      <div className="container">
        <div className="section__title">
          <h2 className={darkMode ? "text-white" : "txt-black-mode"}>Blogs</h2>
          <div className="big__bar"></div>
          <div className="small__bar"></div>
        </div>
        <div className="blogs">
          <h2 className={darkMode ? "text-white" : "txt-black-mode"}>
            Comming Soon...
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
