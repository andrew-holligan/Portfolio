import { Moon, Sun } from "lucide-react";

import { ThemeEnum, useTheme } from "../../contexts/ThemeProvider";

function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const isLightTheme = theme === ThemeEnum.LIGHT;

  const handleSetThemeDark = () => setTheme(ThemeEnum.DARK);
  const handleSetThemeLight = () => setTheme(ThemeEnum.LIGHT);

  return (
    <button
      onClick={isLightTheme ? handleSetThemeDark : handleSetThemeLight}
      className={className}
    >
      {isLightTheme ? <Sun /> : <Moon />}
    </button>
  );
}

export default ThemeToggle;
