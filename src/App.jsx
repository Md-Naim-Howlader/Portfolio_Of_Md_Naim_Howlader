import { useEffect, useState } from "react";
import "./App.css";
import BackToTop from "./Components/BackToTop";
import DarkModeProvider from "./Context/DarkModeContext";
import MainLayout from "./Layout/MainLayout";
import Preloader from "./Components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <DarkModeProvider>
          <MainLayout />
          <BackToTop />
        </DarkModeProvider>
      )}
    </>
  );
}

export default App;
