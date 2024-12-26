import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export enum ThemeEnum {
  LIGHT = "light",
  DARK = "dark",
}

interface ThemeContextType {
  theme: ThemeEnum;
  setTheme: (theme: ThemeEnum) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const savedTheme = localStorage.getItem("theme");

  const [theme, setTheme] = useState<ThemeEnum>(
    savedTheme ? (savedTheme as ThemeEnum) : ThemeEnum.DARK,
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(ThemeEnum.LIGHT, ThemeEnum.DARK);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
