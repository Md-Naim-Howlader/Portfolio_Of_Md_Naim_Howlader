import { useEffect } from "react";
import Hero from "../Components/Hero";
import RecentProjects from "../Components/RecentProjects";
import Skills from "../Components/Skills";

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
