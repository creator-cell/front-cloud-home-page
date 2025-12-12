"use client";


import { useLanguage } from "../../contexts/LanguageContext";

export default function Card({
  children,
  className = "",
  hover = false,
  gradient = false,
  onClick
}) {
  const { isRTL } = useLanguage();

  const baseStyles = "rounded-2xl transition-all duration-300";
  const backgroundStyles = gradient
    ? "bg-gradient-to-br from-white via-blue-50 to-sky-50"
    : "bg-white";

  const borderStyles = "border border-gray-200";

  const shadowStyles = hover
    ? "shadow-lg hover:shadow-2xl hover:-translate-y-1"
    : "shadow-md";

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
