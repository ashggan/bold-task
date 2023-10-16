import { createContext, useContext, useState } from "react";
import { ThemeContextType, themeContextProps } from "../utils/types";

export const ThemeContext = createContext({} as ThemeContextType);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }: themeContextProps) => {
  const [theme, setTheme] = useState("light");
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const mouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const removeMouse = () => {};

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useState(() => {
    window.addEventListener("click", (e: MouseEvent) => {
      const cursorElement = document.querySelector(".cursor");

      if (e.target != cursorElement) {
        cursorElement?.classList.add("clicked");
      }
      setTimeout(() => {
        if (e.target != cursorElement) {
          cursorElement?.classList.remove("clicked");
        }
      }, 200);
    });

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mouseleave", removeMouse);
      // window.removeEventListener("mousemove", mouseMove);
    };
  });

  const variants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
    },
    link: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
    },
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, mousePosition, variants }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
