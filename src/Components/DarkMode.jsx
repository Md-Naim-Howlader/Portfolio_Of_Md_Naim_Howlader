import { useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { LuSunMoon } from "react-icons/lu";
import { darkMode } from "../Styles/darkmode.module.css";
const DarkMode = () => {
  const [state, setState] = useState(false);
  return (
    <div className={darkMode}>
      <button onClick={() => setState(!state)} title="Dark and Light Mode">
        {state ? <LuSunMoon /> : <IoMoonOutline />}
      </button>
    </div>
  );
};

export default DarkMode;
