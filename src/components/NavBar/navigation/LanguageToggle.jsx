import React from "react";
import { Globe } from "lucide-react";

export function LanguageToggle({ language, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all flex items-center gap-2"
      title={language === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      <Globe className="w-5 h-5" />
      <span className="hidden sm:inline text-sm font-medium">
        {language === "en" ? "AR" : "EN"}
      </span>
    </button>
  );
}
