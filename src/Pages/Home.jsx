import { useEffect } from "react";
import Hero from "./Hero";
import RecentProjects from "./RecentProjects";
import Skills from "./Skills";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Md. Naim Howlader";
  }, []);

  return (
    <>
      <Hero />
      <Skills />
      <RecentProjects />
    </>
  );
};

export default Home;
