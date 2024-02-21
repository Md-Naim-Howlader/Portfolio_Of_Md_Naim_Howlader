import { useEffect } from "react";
import SectionTitle from "../Components/sectionTitle";
import "../Styles/blogs.css";
const Blogs = () => {
  useEffect(() => {
    document.title = "Blogs | Md. Naim Howlader";
  }, []);
  return (
    <section>
      <div className="container">
        <SectionTitle title="Blogs" />
        <div className="blogs">
          <h2>Comming Soon...</h2>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
