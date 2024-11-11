import { createContext, useEffect, useState } from "react";
import { getModeFromLocalStorage } from "../utils/getModeFromLocalStorage";

export const DarkModeContext = createContext(null);

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(getModeFromLocalStorage());
  useEffect(() => {
    localStorage.setItem("darkmode", darkMode);
  });
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
