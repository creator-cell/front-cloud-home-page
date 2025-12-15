import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../../contexts/ThemeProvider";

export function ThemeToggle({ lightLabel, darkLabel }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 
      dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white transition-all"
      title={theme === "light" ? darkLabel : lightLabel}
    >
      {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );
}
