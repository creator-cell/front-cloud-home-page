"use client";

import React from "react";

export function Badge({
  children,
  variant = "default",
  size = "sm",
  className = "",
}) {
  const variantStyles = {
    success:
      "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800/50",

    warning:
      "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800/50",

    error:
      "bg-red-500 text-white border-red-600 dark:bg-red-600 dark:text-white dark:border-red-700",

    info:
      "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800/50",

    default:
      "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600",
  };

  const sizeStyles = {
    sm: "text-xs px-1.5 py-0.5 min-w-[20px]",
    md: "text-sm px-2.5 py-1",
  };

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full font-bold border ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
}
