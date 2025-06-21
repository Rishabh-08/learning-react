import { useContext } from "react";
import { Sun, Moon } from "lucide-react";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeToggleButton = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  const iconSize = 20;

  return (
    <button onClick={toggleTheme} title="Toggle Theme" className="theme-button">
      {darkTheme ? <Sun size={iconSize} /> : <Moon size={iconSize} />}
    </button>
  );
};

export default ThemeToggleButton;
