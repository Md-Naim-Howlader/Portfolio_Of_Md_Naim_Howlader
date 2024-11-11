import { useContext } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { LuSunMoon } from "react-icons/lu";
import { darkAndMode } from "../Styles/darkmode.module.css";
import { DarkModeContext } from "../Context/DarkModeContext";
const DarkMode = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <div className={darkAndMode}>
      <button
        className={darkMode ? "txt-white-mode" : "txt-green-mode"}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? (
          <LuSunMoon title="Set Light Mode" />
        ) : (
          <BsFillMoonStarsFill title="Set Dark Mode" />
        )}
      </button>
    </div>
  );
};

export default DarkMode;
