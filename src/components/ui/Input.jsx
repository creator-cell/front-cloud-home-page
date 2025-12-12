import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export function Input({ label, error, icon, className = "", ...props }) {
  const { isRTL } = useLanguage();

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-2 text-gray-700 ">
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div
            className={`absolute top-1/2 -translate-y-1/2 ${
              isRTL ? "right-3" : "left-3"
            } text-gray-400 `}
          >
            {icon}
          </div>
        )}

        <input
          className={`w-full px-4 py-2.5 text-base rounded-xl border-2 border-gray-200  bg-white  text-gray-900  placeholder-gray-400  transition-all duration-200 focus:border-[#6ECFFF] focus:ring-2 focus:ring-[#6ECFFF]/20 focus:outline-none disabled:bg-gray-100  disabled:cursor-not-allowed ${
            icon ? (isRTL ? "pr-10" : "pl-10") : ""
          } ${
            error
              ? "border-red-500  focus:border-red-500 focus:ring-red-500/20"
              : ""
          } ${className}`}
          dir={isRTL ? "rtl" : "ltr"}
          {...props}
        />
      </div>

      {error && (
        <p className="mt-1.5 text-sm font-normal text-red-500 ">
          {error}
        </p>
      )}
    </div>
  );
}
