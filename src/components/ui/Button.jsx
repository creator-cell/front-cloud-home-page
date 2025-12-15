"use client";

import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  className = "",
  disabled = false,
  ...props
}) {
  const { isRTL } = useLanguage();

  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#6ECFFF] to-[#3B82F6] text-white hover:from-[#5AB8E6] hover:to-[#2563EB] active:from-[#48A6D3] active:to-[#1D4ED8] focus:ring-[#6ECFFF] shadow-lg hover:shadow-xl dark:shadow-blue-500/30 dark:hover:shadow-blue-500/40",

    secondary:
      "bg-[#3B82F6] text-white hover:bg-[#2563EB] active:bg-[#1D4ED8] focus:ring-[#3B82F6] shadow-md hover:shadow-lg dark:shadow-blue-600/20 dark:hover:shadow-blue-600/30",

    outline:
      "border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 active:bg-gray-100 dark:active:bg-gray-700 focus:ring-gray-300 dark:focus:ring-gray-600",

    destructive:
      "bg-red-500 text-white hover:bg-red-600 active:bg-red-700 focus:ring-red-500 shadow-md hover:shadow-lg dark:shadow-red-600/20 dark:hover:shadow-red-600/30",

    ghost:
      "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700 focus:ring-gray-300 dark:focus:ring-gray-600",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`}
      disabled={disabled}
      dir={isRTL ? "rtl" : "ltr"}
      {...props}
    >
      {children}
    </button>
  );
}
