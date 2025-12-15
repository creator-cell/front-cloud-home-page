"use client";

import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Card({
  children,
  className = "",
  hover = false,
  gradient = false,
  onClick,
}) {
  const { isRTL } = useLanguage();

  const baseStyles = "rounded-2xl transition-all duration-300";

  const backgroundStyles = gradient
    ? "bg-gradient-to-br from-white via-blue-50 to-sky-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900"
    : "bg-white dark:bg-gray-800";

  const borderStyles = "border border-gray-200 dark:border-gray-700";

  const shadowStyles = hover
    ? "shadow-lg hover:shadow-2xl hover:-translate-y-1 dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50"
    : "shadow-md dark:shadow-gray-900/30";

  const cursorStyles = onClick ? "cursor-pointer" : "";

  return (
    <div
      className={`${baseStyles} ${backgroundStyles} ${borderStyles} ${shadowStyles} ${cursorStyles} ${className}`}
      onClick={onClick}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {children}
    </div>
  );
}
