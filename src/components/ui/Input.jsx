"use client";

import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export function Input({
  label,
  error,
  icon,
  className = "",
  ...props
}) {
  const { isRTL } = useLanguage();

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div
            className={`absolute top-1/2 -translate-y-1/2 ${
              isRTL ? "right-3" : "left-3"
            } text-gray-400 dark:text-gray-500`}
          >
            {icon}
          </div>
        )}

        <input
          className={`w-full px-4 py-2.5 text-base rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 focus:border-[#6ECFFF] focus:ring-2 focus:ring-[#6ECFFF]/20 focus:outline-none disabled:bg-gray-100 dark:disabled:bg-gray-900 disabled:cursor-not-allowed ${
            icon ? (isRTL ? "pr-10" : "pl-10") : ""
          } ${
            error
              ? "border-red-500 dark:border-red-600 focus:border-red-500 focus:ring-red-500/20"
              : ""
          } ${className}`}
          dir={isRTL ? "rtl" : "ltr"}
          {...props}
        />
      </div>

      {error && (
        <p className="mt-1.5 text-sm font-normal text-red-500 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
