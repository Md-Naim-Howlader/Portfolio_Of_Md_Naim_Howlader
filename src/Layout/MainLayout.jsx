import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ScrollTop from "../Components/ScrollTop";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <ScrollTop />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
