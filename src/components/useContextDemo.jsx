import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import ThemeToggleButton from "./ui/ThemeToggleButton";

export default function UseContextDemo() {
  const codeString = `import { createContext, useState, useEffect } from "react";
  
  const ThemeContext = createContext();
  
  const ThemeProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(() => {
      const storedTheme = localStorage.getItem("theme");
      return storedTheme === "dark";
    });
  
    useEffect(() => {
      if (darkTheme) {
        document.body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
      }
    }, [darkTheme]);
  
    const toggleTheme = () => {
      setDarkTheme((prevTheme) => !prevTheme);
    };
  
    return (
      <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  
  export { ThemeProvider, ThemeContext };`;
  return (
    <div className="hook-demo">
      <h2>useContext Demo</h2>
      <p>
        The <code>useContext</code> is used to access values from a Context
        object, allowing you to share data (like themes, user info etc.) between
        components without prop drilling (passing props manually through every
        level of the component tree).
      </p>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {codeString}
      </SyntaxHighlighter>
      <div className="counter-example">
        <h3>Tap here to switch themes and personalize your view:</h3>
        <ThemeToggleButton />
      </div>
    </div>
  );
}
