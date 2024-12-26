import { Moon, Sun } from "lucide-react";

import { ThemeEnum, useTheme } from "../../contexts/ThemeProvider";

function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const isLightTheme = theme === ThemeEnum.LIGHT;

  const handleSetThemeDark = () => setTheme(ThemeEnum.DARK);
  const handleSetThemeLight = () => setTheme(ThemeEnum.LIGHT);

  return (
    <button onClick={isLightTheme ? handleSetThemeDark : handleSetThemeLight}>
      {isLightTheme ? (
        <Sun className={className} />
      ) : (
        <Moon className={className} />
      )}
    </button>
  );
}

export default ThemeToggle;
