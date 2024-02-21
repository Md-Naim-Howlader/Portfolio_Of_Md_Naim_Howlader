import { useEffect } from "react";

import "../Styles/blogs.css";
const Blogs = () => {
  useEffect(() => {
    document.title = "Blogs | Md. Naim Howlader";
  }, []);
  return (
    <section>
      <div className="container">
        <div className="section__title">
          <h2>Blogs</h2>
          <div className="big__bar"></div>
          <div className="small__bar"></div>
        </div>
        <div className="blogs">
          <h2>Comming Soon...</h2>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
