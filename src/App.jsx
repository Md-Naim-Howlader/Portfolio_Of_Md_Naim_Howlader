import "./App.css";
import DarkModeProvider from "./Context/DarkModeContext";
import MainLayout from "./Layout/MainLayout";

function App() {
  return (
    <>
      <DarkModeProvider>
        <MainLayout />
      </DarkModeProvider>
    </>
  );
}

export default App;
